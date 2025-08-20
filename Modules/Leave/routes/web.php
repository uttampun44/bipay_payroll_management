<?php

use Illuminate\Support\Facades\Route;
use Modules\Leave\Http\Controllers\LeaveController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('leave')->group(function () {
       Route::resource('leaves-types', LeaveController::class)->names('leave');
    });
});
