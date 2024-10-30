<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Alquiler;
use App\Models\Cliente;
use App\Models\Barco;

class AlquilerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $clienteIds = Cliente::pluck('id')->toArray(); // Obtener todos los IDs de clientes
        $barcoIds = Barco::pluck('id')->toArray(); // Obtener todos los IDs de barcos

        Alquiler::factory()->count(20)->create([
            'cliente_id' => function () use ($clienteIds) {
                return $clienteIds[array_rand($clienteIds)];
            },
            'barco_id' => function () use ($barcoIds) {
                return $barcoIds[array_rand($barcoIds)];
            },
        ]);
    }
}
