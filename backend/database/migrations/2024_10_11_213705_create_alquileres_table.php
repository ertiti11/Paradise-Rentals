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
        Schema::create('alquileres', function (Blueprint $table) {
            $table->id(); // int8
            $table->foreignId('cliente_id')->constrained('clientes')->onDelete('cascade'); // Clave foránea
            $table->foreignId('producto_id')->constrained('productos')->onDelete('cascade'); // Clave foránea
            $table->timestamp('fecha_inicio'); // timestamp
            $table->timestamp('fecha_fin')->nullable(); // timestamp opcional
            $table->decimal('total', 8, 2); // numeric
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alquileres');
    }
};
