<?php

use App\Http\Controllers\CategoriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\BarcoController;
use App\Http\Controllers\MailController;
use App\Mail\ContactanosMailable;
use App\Http\Controllers\ReservaController;
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
    Route::post('/reservar', [BarcoController::class, 'store']);


    Route::get('/reservas', [ReservaController::class, 'index']);
    //404
    Route::fallback(function () {
        return response()->json(['message' => 'Not Found!'], 404);
    });
});
