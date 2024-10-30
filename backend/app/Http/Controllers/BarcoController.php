<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barco;
use Exception;
use Illuminate\Support\Facades\Log;

class BarcoController extends Controller
{
    public function index()
    {
        try {
            $barcos = Barco::all();
            return response()->json($barcos, 200);
        } catch (Exception $e) {
            // Registrar el error para depuración
            \Log::error('Error al obtener los barcos: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function show($id)
    {
        try {
            $barco = Barco::findOrFail($id);
            return response()->json($barco, 200);
        } catch (Exception $e) {
            // Registrar el error para depuración
            \Log::error('Error al obtener el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $barco = Barco::create($request->all());
            return response()->json($barco, 201);
        } catch (Exception $e) {
            // Registrar el error para depuración
            \Log::error('Error al crear el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $barco = Barco::findOrFail($id);
            $barco->update($request->all());
            return response()->json($barco, 200);
        } catch (Exception $e) {
            // Registrar el error para depuración
            \Log::error('Error al actualizar el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $barco = Barco::findOrFail($id);
            $barco->delete();
            return response()->json(null, 204);
        } catch (Exception $e) {
            // Registrar el error para depuración
            \Log::error('Error al eliminar el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }
}
