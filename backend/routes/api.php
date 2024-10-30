<?php

use App\Http\Controllers\CategoriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\BarcoController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




Route::group(['prefix'=> 'v1'], function () {
    //index de clientes
    Route::apiResource('/clientes', ClienteController::class);
    Route::apiResource('/categorias', CategoriaController::class);
    Route::apiResource('/barcos', BarcoController::class);
    Route::apiResource('/servicios', ServiciosController::class);
});
