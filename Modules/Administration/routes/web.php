<?php

use Illuminate\Support\Facades\Route;
use Modules\Administration\Http\Controllers\AdministrationController;
use Modules\Administration\Http\Controllers\DepartmentController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('administrations', AdministrationController::class)->names('administration');
    Route::resource('departments', DepartmentController::class)->only(['index', 'store', 'update', 'destroy']);
});
