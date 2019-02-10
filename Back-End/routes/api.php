<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', 'UserController@login');
Route::post('signup', 'UserController@signup');
Route::post('logout', 'UserController@logout');


//Route::prefix('cars', function (){
//    Route::get('', 'CarController@index');
//    Route::post('', 'CarController@create');
//
//    Route::get('{id}', 'CarController@show');
//    Route::delete('{id}', 'CarController@destroy');
//    Route::post('{id}', 'CarController@update');
//})->middleware('api');


Route::get('/cars', 'CarController@index')->middleware('auth:api');
