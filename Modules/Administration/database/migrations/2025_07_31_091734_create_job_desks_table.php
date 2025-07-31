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
        Schema::create('job_desks', function (Blueprint $table) {
            $table->id();
            $table->string('job_title');
            $table->string('job_code');
            $table->text('job_description');
            $table->decimal('minimum_salary', 10, 2)->nullable();
            $table->decimal('maximum_salary', 10, 2)->nullable();
            $table->text('job_requirements')->nullable();
            $table->text('job_responsibilities')->nullable();
            $table->foreignId('department_id')
                  ->constrained('departments')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_desks');
    }
};
