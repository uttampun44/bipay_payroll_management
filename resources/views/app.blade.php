<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Bipay Payroll Management') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
    <vapi-widget
  public-key={{ env('VAPI_PUBLIC_KEY') }}
  assistant-id={{ env('VAPI_ASSITANT_ID') }}
  mode="voice"
  theme="dark"
  base-bg-color="#000000"
  accent-color="#14B8A6"
  cta-button-color="#000000"
  cta-button-text-color="#ffffff"
  border-radius="large"
  size="full"
  position="bottom-right"
  title="TALK WITH BIPAY CUSTOMER SUPPORT"
  start-button-text="Start"
  end-button-text="End Call"
  chat-first-message="Hey, How can I help you today?"
  chat-placeholder="Type your message..."
  voice-show-transcript="true"
  consent-required="true"
  consent-title="Terms and conditions"
  consent-content="By clicking "Agree," and each time I interact with this AI agent, I consent to the recording, storage, and sharing of my communications with third-party service providers, and as otherwise described in our Terms of Service."
  consent-storage-key="vapi_widget_consent"
></vapi-widget>

<script src="https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js" async type="text/javascript"></script>
        @inertia
    </body>
</html>
