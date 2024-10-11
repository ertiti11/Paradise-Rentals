<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $table->string('nombre');
        // $table->string('tipo');
        // $table->decimal('precio', 10, 2);
        // $table->integer('capacidad');
        // $table->string("descripcion");
        // $table->string("url_imagen");
        return [
            //
            "categoria_id" => $this->faker->numberBetween(1,2),
            "nombre" => $this->faker->word(),
            "tipo" => $this->faker->word(),
            "precio" => $this->faker->randomFloat(2, 100, 1000),
            "capacidad" => $this->faker->numberBetween(1, 100),
            "descripcion" => $this->faker->sentence(),
            "url_imagen" => $this->faker->imageUrl(),
        ];
    }
}
