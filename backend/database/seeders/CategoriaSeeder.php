<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categoria;
use App\Models\Producto;
class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categorias = [
            'Electrónica',
            'Ropa',
            'Hogar',
            'Libros',
            'Juguetes',
            'Deportes',
            'Salud',
            'Belleza',
            'Automotriz',
            'Alimentos'
        ];

        foreach ($categorias as $categoria) {
            Categoria::firstOrCreate(['nombre' => $categoria]);
        }
    }
}
