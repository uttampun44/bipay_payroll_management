<?php

use Illuminate\Support\Facades\Route;
use Modules\Employee\Http\Controllers\AppointmentController;
use Modules\Employee\Http\Controllers\EmployeeController;
use Modules\Employee\Http\Controllers\EmployeeShiftController;

Route::middleware(['auth', 'verified'])->group(function () {
   Route::prefix('employees')->group(function () {
        Route::resource('appointments', AppointmentController::class)->only(['index', 'create', 'store', 'update', 'edit', 'destroy']);
        Route::resource('employees', EmployeeController::class)->only(['index', 'create', 'store', 'update', 'edit', 'destroy']);
        Route::resource('employee-shifts', EmployeeShiftController::class)->only(['index', 'store', 'update',]);
    });
});
