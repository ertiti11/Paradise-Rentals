<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservas', function (Blueprint $table) {
            $table->id(); // Identificador único para cada reserva
            $table->foreignId('barco_id')->constrained('barcos')->onDelete('cascade'); // Clave foránea hacia barcos
            $table->date('fecha_inicio'); // Fecha de inicio de la reserva
            $table->date('fecha_fin'); // Fecha de finalización de la reserva
            $table->decimal('precio_total', 8, 2); // Precio total de la reserva
            $table->string('nombre_cliente'); // Nombre del cliente que realiza la reserva
            $table->string('apellidos_cliente'); // Apellidos del cliente
            $table->string('email_cliente'); // Email del cliente
            $table->string('estado')->default('pendiente'); // Estado de la reserva
            $table->string('metodo_pago')->default("paypal"); // Método de pago utilizado
            $table->timestamp('fecha_pago')->nullable(); // Fecha de pago
            $table->timestamp('fecha_cancelacion')->nullable(); // Fecha de cancelación
            $table->string('motivo_cancelacion')->nullable(); // Motivo de cancelación
            $table->string('comentarios')->nullable(); // Comentarios adicionales
            $table->string('codigo_reserva')->unique(); // Código único de la reserva
            $table->string('dni_cliente'); // DNI del cliente
            $table->string('telefono_cliente'); // Teléfono del cliente

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservas');
    }
};
