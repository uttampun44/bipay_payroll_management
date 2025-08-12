<?php

use Illuminate\Support\Facades\Route;
use Modules\Employee\Http\Controllers\AppointmentController;
use Modules\Employee\Http\Controllers\EmployeeController;

Route::middleware(['auth', 'verified'])->group(function () {
   Route::prefix('employees')->group(function () {
        Route::resource('appointments', AppointmentController::class)->only(['index', 'create', 'store', 'update', 'edit', 'destroy']);
        Route::resource('employees', EmployeeController::class)->only(['index', 'create', 'store', 'update', 'edit', 'destroy']);
    });
});
