<?php

use Illuminate\Support\Facades\Route;
use Modules\Leave\Http\Controllers\EmployeeLeaveBalanceController;
use Modules\Leave\Http\Controllers\LeaveController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('leave')->group(function () {
       Route::resource('leaves-types', LeaveController::class)->only(['index', 'store', 'update']);
       Route::resource('employee-leave-balances', EmployeeLeaveBalanceController::class)->only(['index', 'create', 'store', 'edit', 'update', 'destroy']);
    });
});
