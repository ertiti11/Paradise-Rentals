<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reserva;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function allIncoming()
    {
        // Obtener solo el campo precio_total de todas las reservas
        $reservas = Reserva::all('precio_total');

        // Sumar todos los valores de precio_total
        $total = $reservas->sum('precio_total');

        // Devolver el total
        return $total;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function allReservas()
    {
        //saca el numero total de reservas
        $reservas = Reserva::all();
        $total = $reservas->count();
        return $total;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
