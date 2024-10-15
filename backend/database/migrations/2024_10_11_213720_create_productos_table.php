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
        Schema::create('productos', function (Blueprint $table) {
            $table->id(); // int8
            $table->string('nombre'); // text
            $table->string('tipo'); // text
            $table->decimal('precio_por_hora', 8, 2); // numeric
            $table->integer('capacidad'); // int4
            $table->string('url_imagen'); // text
            $table->string('descripcion'); // text
            $table->foreignId('categoria_id')->constrained('categorias')->onDelete('cascade'); // Clave foránea

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
