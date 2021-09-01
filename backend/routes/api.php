<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\FollowingController;
use App\Http\Controllers\QuizController;
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

// student
Route::post('/register', [StudentController::class, 'store']);
Route::post('/login', [StudentController::class, 'login']);
Route::get('/students', [StudentController::class, 'index']);
Route::get('/students/{id}', [StudentController::class, 'show']);

// followings
Route::get('/followings/{id}', [FollowingController::class, 'index']);
Route::post('/followings/follow', [FollowingController::class, 'follow']);
Route::post('/followings/unfollow', [FollowingController::class, 'unfollow']);

// dashboard
Route::get('/dashboard/{id}', [DashboardController::class, 'index']);

// quizzes
Route::get('/quizzes', [QuizController::class, 'index']);

// protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
  Route::put('/students/update', [StudentController::class, 'update']);
  Route::post('/logout', [StudentController::class, 'logout']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
