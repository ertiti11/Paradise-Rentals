<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Cliente;
use App\Models\Producto;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Alquiler>
 */
class AlquilerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cliente_id' => Cliente::factory(), // Crea un cliente asociado
            'producto_id' => Producto::factory(), // Crea un producto asociado
            'fecha_inicio' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'fecha_fin' => $this->faker->dateTimeBetween('now', '+1 month'),
            'total' => $this->faker->randomFloat(2, 50, 500),
        ];
    }
}
