<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Categoria;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Barco>
 */
class BarcoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Define un array de URLs de imágenes posibles
        $imagenes = [
            'https://www.artiemhotels.com/uploads/5f4e933a-d8bf-458c-a630-1fb64a66ffa8/5f4e933a-d8bf-458c-a630-1fb64a66ffa8.jpeg',
            'https://malevolo.es/server/Portal_0038177_0045553/img/blogposts/consejos-para-una-practica-segura-de-paddle-surf_12019.jpg',
            'https://www.lanoria.net/642-large_default/hidropedal-newbeetle.jpg',
            'https://berriasurfschool.com/wp-content/uploads/2023/07/beneficios-del-surf-para-la-salud.jpg',
        ];

        return [
            'nombre' => $this->faker->word,
            'tipo' => $this->faker->word,
            'precio_por_hora' => $this->faker->randomFloat(2, 10, 100),
            'categoria_id' => Categoria::factory(), // Crea una categoría asociada
            'capacidad' => $this->faker->randomNumber(2),
            'url_imagen' => $imagenes[array_rand($imagenes)], // Selecciona una imagen aleatoria
            'descripcion' => $this->faker->sentence(10),
        ];
    }
}
