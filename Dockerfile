# Multi-stage build for optimal size
FROM node:18-alpine AS node-builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY resources/ resources/
COPY vite.config.js ./
RUN npm run build

# PHP base stage
FROM php:8.2-fpm-alpine AS php-base

# Install only essential system dependencies
RUN apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    libpng-dev \
    libzip-dev \
    oniguruma-dev \
    && apk add --no-cache \
    libpng \
    libzip \
    nginx \
    supervisor \
    && docker-php-ext-install \
    pdo_mysql \
    mbstring \
    gd \
    zip \
    opcache \
    && apk del .build-deps

# Configure PHP
RUN echo "opcache.enable=1" > /usr/local/etc/php/conf.d/opcache.ini \
    && echo "opcache.memory_consumption=128" >> /usr/local/etc/php/conf.d/opcache.ini \
    && echo "opcache.max_accelerated_files=4000" >> /usr/local/etc/php/conf.d/opcache.ini \
    && echo "opcache.revalidate_freq=2" >> /usr/local/etc/php/conf.d/opcache.ini

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Production stage
FROM php-base AS production

# Copy composer files
COPY composer*.json ./
RUN composer install --no-dev --optimize-autoloader --no-scripts --no-interaction

# Copy application code (exclude unnecessary files)
COPY --chown=www-data:www-data . .

COPY .env.example .env

COPY --from=node-builder /app/public/build ./public/build

# Create optimized autoloader and cache
RUN composer dump-autoload --optimize \
    && php artisan config:cache \
    && php artisan route:cache \
    && php artisan view:cache

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 storage bootstrap/cache


# Clean up
RUN rm -rf /tmp/* /var/cache/apk/*

EXPOSE 80
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]

# Development stage
FROM php-base AS development

# Install dev dependencies
RUN apk add --no-cache git nodejs npm

# Copy composer files
COPY composer*.json ./
RUN composer install --optimize-autoloader

# Copy package files
COPY package*.json ./
RUN npm ci

COPY . .

# Don't cache anything in dev
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80 5173
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]