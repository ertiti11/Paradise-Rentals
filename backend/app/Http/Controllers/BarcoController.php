<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Barco;
use Exception;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BarcoController extends Controller
{
    public function index(Request $request)
    {
        try {
            // Obtener el número de pasajeros del request
            $pasajeros = $request->input('pasajeros');

            // Cargar barcos con sus fotos y aplicar el filtro de pasajeros si está presente
            $query = Barco::with('fotos');
            if ($pasajeros) {
                $query->where('capacidad', '>=', $pasajeros);
            }
            $barcos = $query->get();

            return response()->json($barcos, 200);
        } catch (Exception $e) {
            // Registrar el error para depuración
            Log::error('Error al obtener los barcos: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }


    public function show($id)
    {
        try {
            $barco = Barco::with('fotos')->findOrFail($id);
            return response()->json($barco, 200);
        } catch (ModelNotFoundException $e) {
            // Registrar el error para depuración
            Log::error('Barco no encontrado: ' . $e->getMessage());
            return response()->json(['error' => 'Barco no encontrado'], 404);
        } catch (Exception $e) {
            // Registrar el error para depuración
            Log::error('Error al obtener el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'nombre' => 'required|string|max:255',
                'tipo' => 'required|string|max:255',
                'precio_por_hora' => 'required|numeric',
                'categoria_id' => 'required|integer|exists:categorias,id',
                'capacidad' => 'required|integer',
                'url_imagen' => 'required|url',
                'descripcion' => 'required|string',
            ]);
            Log::info('Datos validados:', $validatedData);

            $barco = Barco::create($validatedData);
            return response()->json($barco, 201);
        } catch (ValidationException $e) {
            Log::error('Error de validación al crear el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error de validación', 'messages' => $e->errors()], 422);
        } catch (Exception $e) {
            Log::error('Error al crear el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor', 'message' => $e->getMessage()], 500);
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
            Log::error('Error al actualizar el barco: ' . $e->getMessage());
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
            Log::error('Error al eliminar el barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor'], 500);
        }
    }

    public function getTipos()
    {
        try {
            $tipos = Barco::select('tipo')->distinct()->get();
            return response()->json($tipos, 200);
        } catch (Exception $e) {
            // Registrar el error para depuración
            Log::error('Error al obtener los tipos de barco: ' . $e->getMessage());
            return response()->json(['error' => 'Error interno del servidor', 'message' => $e->getMessage()], 500);
        }
    }
}
