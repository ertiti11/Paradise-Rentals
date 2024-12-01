<?php

namespace App\Http\Controllers;

use App\Models\Reserva;
use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use App\Models\Barco;

class ReservaController extends Controller
{
    public function index()
    {
        try {
            $reservas = Reserva::with('barco', 'cliente')->get();
            return response()->json($reservas, 200);
        } catch (\Exception $e) {
            Log::error('Error al obtener las reservas: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'barco_id' => 'required|exists:barcos,id',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date|after:fecha_inicio',
            'precio_total' => 'required|numeric',
            'nombre_cliente' => 'required|string',
            'apellidos_cliente' => 'required|string',
            'email_cliente' => 'required|email',
            'estado' => 'in:pendiente,confirmada,cancelada',
            'metodo_pago' => 'in:paypal,tarjeta,transferencia',
            'codigo_reserva' => 'required|unique:reservas,codigo_reserva',
            'dni_cliente' => 'required|string',
            'telefono_cliente' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            // Crear o encontrar el cliente
            $cliente = Cliente::firstOrCreate(
                ['email' => $request->input('email_cliente')],
                [
                    'nombre' => $request->input('nombre_cliente'),
                    'apellidos' => $request->input('apellidos_cliente'),
                    'dni' => $request->input('dni_cliente'),
                    'telefono' => $request->input('telefono_cliente')
                ]
            );

            // Crear la reserva
            $reserva = Reserva::create(array_merge(
                $request->all(),
                ['cliente_id' => $cliente->id]
            ));

            // Marcar el barco como no disponible
            $barco = Barco::find($request->input('barco_id'));
            $barco->disponible = false;
            $barco->save();

            return response()->json($reserva, 201);
        } catch (\Exception $e) {
            Log::error('Error al crear la reserva: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }
    public function show($codigo_reserva)
    {
        try {
            $reserva = Reserva::with(['cliente', 'barco'])->where('codigo_reserva', $codigo_reserva)->firstOrFail();
            return response()->json($reserva, 200);
        } catch (\Exception $e) {
            Log::error('Error al obtener la reserva: ' . $e->getMessage());
            return response()->json(['error' => 'Reserva no encontrada'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'fecha_inicio' => 'date',
            'fecha_fin' => 'date|after:fecha_inicio',
            'precio_total' => 'numeric',
            'nombre_cliente' => 'string',
            'apellidos_cliente' => 'string',
            'email_cliente' => 'email',
            'estado' => 'in:pendiente,confirmada,cancelada',
            'metodo_pago' => 'in:paypal,tarjeta,transferencia',
            'codigo_reserva' => 'unique:reservas,codigo_reserva,' . $id,
            'dni_cliente' => 'string',
            'telefono_cliente' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        try {
            $reserva = Reserva::findOrFail($id);
            $reserva->update($request->all());
            return response()->json($reserva, 200);
        } catch (\Exception $e) {
            Log::error('Error al actualizar la reserva: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $reserva = Reserva::findOrFail($id);
            $reserva->delete();
            return response()->json(['message' => 'Reserva eliminada correctamente'], 200);
        } catch (\Exception $e) {
            Log::error('Error al eliminar la reserva: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }
}
