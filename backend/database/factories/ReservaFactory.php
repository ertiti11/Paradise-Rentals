<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Reserva;
use App\Models\Barco;
use Carbon\Carbon;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reserva>
 */
class ReservaFactory extends Factory
{
    protected $model = Reserva::class;

    public function definition(): array
    {
        // Genera una fecha de inicio y fin aleatorias para la reserva
        $fechaInicio = Carbon::instance($this->faker->dateTimeBetween('-1 month', '+1 month'));
        $fechaFin = (clone $fechaInicio)->addDays($this->faker->numberBetween(1, 7));

        return [
            'barco_id' => Barco::factory(),
            'fecha_inicio' => $this->faker->dateTimeBetween('+1 week', '+1 month'),
            'fecha_fin' => $this->faker->dateTimeBetween('+1 month', '+2 months'),
            'precio_total' => $this->faker->randomFloat(2, 100, 1000),
            'nombre_cliente' => $this->faker->firstName,
            'apellidos_cliente' => $this->faker->lastName,
            'email_cliente' => $this->faker->safeEmail,
            'estado' => $this->faker->randomElement(['pendiente', 'confirmada', 'cancelada']),
            'metodo_pago' => $this->faker->randomElement(['paypal', 'tarjeta', 'transferencia']),
            'fecha_pago' => $this->faker->optional()->dateTimeBetween('+1 week', '+1 month'),
            'fecha_cancelacion' => $this->faker->optional()->dateTimeBetween('+1 month', '+2 months'),
            'motivo_cancelacion' => $this->faker->optional()->sentence,
            'comentarios' => $this->faker->optional()->sentence,
            'codigo_reserva' => Str::upper(Str::random(10)),
            'dni_cliente' => $this->faker->numerify('#########'),
            'telefono_cliente' => $this->faker->phoneNumber,

        ];
    }
}
