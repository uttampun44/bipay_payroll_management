<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('leave_types', function (Blueprint $table) {
            $table->id();
            $table->string('leave_type_name');
            $table->string('leave_code');
            $table->text('description')->nullable();
            $table->integer('max_days_per_year');
            $table->boolean('carry_forward_allowed');
            $table->integer('max_carry_forward_days');
            $table->boolean('is_paid');
            $table->boolean('require_approval');
            $table->integer('notice_days_required');
            $table->boolean('status')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leave_types');
    }
};
