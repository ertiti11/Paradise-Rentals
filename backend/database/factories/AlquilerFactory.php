<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
            // $table->foreignId('cliente_id')->constrained('clientes');
            // $table->foreignId('producto_id')->constrained('productos');
            // $table->dateTime('fecha_alquiler');
            // $table->decimal('total', 10, 2)->nullable();
            // $table->timestamps();
            //
            "cliente_id" => $this->faker->numberBetween(1,2),
            "producto_id" => $this->faker->numberBetween(1,2),
            "fecha_alquiler" => $this->faker->dateTimeThisYear(),
            "total" => $this->faker->randomFloat(2, 100, 1000),
            


            
        ];
    }
}
