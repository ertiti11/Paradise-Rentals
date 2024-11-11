<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Foto;

class FotoFactory extends Factory
{
    protected $model = Foto::class;

    public function definition(): array
    {
        $imagenes = [
            'https://www.artiemhotels.com/uploads/5f4e933a-d8bf-458c-a630-1fb64a66ffa8/5f4e933a-d8bf-458c-a630-1fb64a66ffa8.jpeg',
            'https://malevolo.es/server/Portal_0038177_0045553/img/blogposts/consejos-para-una-practica-segura-de-paddle-surf_12019.jpg',
            'https://www.lanoria.net/642-large_default/hidropedal-newbeetle.jpg',
            'https://berriasurfschool.com/wp-content/uploads/2023/07/beneficios-del-surf-para-la-salud.jpg',
        ];

        return [
            'url' => $imagenes[array_rand($imagenes)],
        ];
    }
}
