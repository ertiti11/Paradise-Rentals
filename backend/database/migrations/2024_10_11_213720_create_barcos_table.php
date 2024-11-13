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
        Schema::create('barcos', function (Blueprint $table) {
            $table->id(); // int8
            $table->string('nombre'); // text
            $table->string('tipo'); // text
            $table->decimal('precio_dia', 8, 2); // numeric
            $table->integer('capacidad'); // int4
            $table->string('thumbnail'); // text
            $table->string('descripcion'); // text
            $table->integer('longitud');
            $table->string("localizacion");
            $table->boolean('disponible')->default(true); // boolean
            $table->foreignId('categoria_id')->constrained('categorias')->onDelete('cascade'); // Clave foránea
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fotos');
        Schema::dropIfExists('barcos');
    }
};
