<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Barco;
use App\Models\Categoria;
use App\Models\Reserva;
use App\Models\Foto;

class BarcoFactory extends Factory
{
    protected $model = Barco::class;

    public function definition(): array
    {
        $imagenes = [
            'https://www.artiemhotels.com/uploads/5f4e933a-d8bf-458c-a630-1fb64a66ffa8/5f4e933a-d8bf-458c-a630-1fb64a66ffa8.jpeg',
            'https://malevolo.es/server/Portal_0038177_0045553/img/blogposts/consejos-para-una-practica-segura-de-paddle-surf_12019.jpg',
            'https://www.lanoria.net/642-large_default/hidropedal-newbeetle.jpg',
            'https://berriasurfschool.com/wp-content/uploads/2023/07/beneficios-del-surf-para-la-salud.jpg',
        ];

        return [
            'nombre' => $this->faker->word,
            'tipo' => $this->faker->word,
            'precio_dia' => $this->faker->randomFloat(2, 10, 100),
            'categoria_id' => Categoria::factory(),
            'capacidad' => $this->faker->numberBetween(1, 10),
            'thumbnail' => $imagenes[array_rand($imagenes)],
            'descripcion' => $this->faker->sentence(10),
            'longitud' => $this->faker->randomFloat(2, 5, 20),
            'localizacion' => $this->faker->address,
            'reserva_id' => null, // Inicialmente nulo; se asignará después
            'disponible' => $this->faker->boolean,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Barco $barco) {
            // Crear una reserva asociada al barco
            $reserva = Reserva::factory()->create(['barco_id' => $barco->id]);

            // Actualizar el barco con el reserva_id
            $barco->update(['reserva_id' => $reserva->id]);

            // Crear fotos para el barco
            Foto::factory()->count(rand(1, 3))->create(['barco_id' => $barco->id]);
        });
    }
}
