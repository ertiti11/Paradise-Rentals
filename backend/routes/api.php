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
    // Rutas para clientes
    Route::apiResource('/clientes', ClienteController::class);

    // Rutas para categorías
    Route::apiResource('/categorias', CategoriaController::class);

    // Rutas para barcos
    Route::apiResource('/barcos', BarcoController::class);

    // Ruta para enviar correos
    Route::post('/mail', [MailController::class, 'sendEmail']);

    // Rutas adicionales para barcos
    Route::get('/tipos', [BarcoController::class, 'getTipos']);

    // Rutas para reservas
    Route::post('/reservar', [ReservaController::class, 'store']);
    Route::get('/reservas', [ReservaController::class, 'index']);
    Route::get('/reservas/{reserva}', [ReservaController::class, 'show']);
    Route::put('/reservas/{reserva}', [ReservaController::class, 'update']);
    Route::delete('/reservas/{reserva}', [ReservaController::class, 'destroy']);
    // Ruta para el dashboard
    Route::get('/dashboard', [DashboardController::class, 'combinedData']);

    // Ruta fallback para 404
    Route::fallback(function () {
        return response()->json(['message' => 'Not Found!'], 404);
    });
});
