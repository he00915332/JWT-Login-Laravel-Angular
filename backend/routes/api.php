<?php



Route::group([

    'middleware' => 'api'

], function ($router) {

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('signup', 'App\Http\Controllers\AuthController@signup');
    /*
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');*/
    Route::post('sendPasswordResetLink', 'App\Http\Controllers\ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'App\Http\Controllers\ChangePasswordController@process');
});
