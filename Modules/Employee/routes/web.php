<?php

use Illuminate\Support\Facades\Route;
use Modules\Employee\Http\Controllers\EmployeeController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('employees', EmployeeController::class)->only(['index', 'show', 'create', 'store', 'edit', 'update', 'destroy']);
});
