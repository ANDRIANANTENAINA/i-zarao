<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/users', [AuthController::class, 'index']);

Route::get('/user', function (Request $request) {
    return $request->user();
});

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    Route::get('/posts',[PostController::class,'index']);
    Route::get('/post/{id}',[PostController::class,'show']);
    Route::get('/search',[PostController::class,'search']);
    Route::post('/create',[PostController::class,'store']);
//});



//Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth:api');
// Route::post('/logout', 'AuthController@logout')->middleware('auth:api');
//Route::get('/protected', 'ProtectedController@index')->middleware('auth:api');

