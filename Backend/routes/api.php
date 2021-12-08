<?php

use App\Http\Controllers\ChangePassword;
use App\Http\Controllers\RessetPasswordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\controllers\AuthController;
use App\http\controllers\WorksController;

Route::group(['middleware' => 'api'], function () {

    Route::post('login', [AuthController::class,'login']);
    Route::post('signup', [AuthController::class,'signup']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);
    Route::post('sendPasswordResetLink',[RessetPasswordController::class,'sendEmail']);
    Route::post('resetPassword',[ChangePassword::class,'resetPassword']);
    Route::get('getAllWorks',[WorksController::class,'getAllWorks']);
    Route::get('getCWorks',[WorksController::class,'getCWorks']);
    Route::get('getLWorks',[WorksController::class,'getLWorks']);

    Route::get('getgithubs',[WorksController::class,'getgithubs']);
    
});
