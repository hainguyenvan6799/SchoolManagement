<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\MongoTestController;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/user/import', [UserController::class, 'store']);

Route::get('/user/get_list_users', [UserController::class, 'index']);

// Login for users
Route::post('/login', [AuthenticationController::class, 'index']);

Route::get('/mongo', [MongoTestController::class, 'mongoConnect']);

Route::get('/check_auth', function(){
    if(Auth::check())
    {
        dd("Login successfully");
    }
    else{
        dd("Login false");
    }
});