<?php

use Illuminate\Support\Facades\Route;
use Modules\Administration\Http\Controllers\AdministrationController;
use Modules\Administration\Http\Controllers\DepartmentController;
use Modules\Administration\Http\Controllers\JobDeskController;

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::resource('administrations', AdministrationController::class)->names('administration');
    Route::prefix('administrations')->group(function () {
       
        Route::resource('departments', DepartmentController::class)->only(['index', 'store', 'update', 'edit', 'update', 'destroy']);
        Route::resource('job-desks', JobDeskController::class)->only(['index', 'create', 'store', 'update', 'edit', 'update', 'destroy']);
    });
});
