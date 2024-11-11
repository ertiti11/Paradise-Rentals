<?php

use Illuminate\Support\Facades\Route;

use function Laravel\Prompts\text;

Route::get('/', function () {
    return json_encode([
        'message' => 'paradise rentals',
        'status' => 200
    ]);

});
