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
        Schema::create('shifts', function (Blueprint $table) {
            $table->id();
            $table->string('shift_name');
            $table->string('shift_code', 20)->unique();
            $table->string('start_time');
            $table->string('end_time');
            $table->integer('break_duration')->default(0);
            $table->integer('working_hours')->default(0);
            $table->decimal('overtime_rate', 8, 2)->nullable();
            $table->decimal('night_shift_allowance', 8, 2)->nullable()->comment('Fixed amount for night shift allowance');
            $table->decimal('weekend_rate', 8, 2)->nullable();
            $table->boolean('status')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shifts');
    }
};
