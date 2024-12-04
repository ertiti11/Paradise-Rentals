<?php

use App\Http\Controllers\CategoriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\BarcoController;
use App\Http\Controllers\MailController;
use App\Mail\ContactanosMailable;
use App\Http\Controllers\ReservaController;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use App\Http\Controllers\DashboardController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix' => 'v1'], function () {
    //index de clientes
    Route::apiResource('/clientes', ClienteController::class);
    Route::apiResource('/categorias', CategoriaController::class);
    Route::apiResource('/barcos', BarcoController::class);
    #mail
    Route::post('/mail', [MailController::class, 'sendEmail']);


    Route::get('/tipos', [BarcoController::class, 'getTipos']);
    // Route::post('/reservar', [BarcoController::class, 'store']);
    Route::post('/reservar', [ReservaController::class, 'store']);


    Route::get('/reservas', [ReservaController::class, 'index']);
    Route::get('/reservas/{reserva}', [ReservaController::class, 'show']);


    //dashboard

    Route::get('/dashboard', [DashboardController::class, 'combinedData']);
    Route::get('/clientes', [ClienteController::class, 'index']);


    

    //404
    Route::fallback(function () {
        return response()->json(['message' => 'Not Found!'], 404);
    });
});
