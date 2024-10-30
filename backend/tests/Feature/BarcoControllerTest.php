<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Barco;
use App\Models\Categoria;

class BarcoControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_returns_all_barcos()
    {
        Barco::factory()->count(3)->create();

        $response = $this->getJson('/api/v1/barcos');

        $response->assertStatus(200)
                 ->assertJsonCount(3);
    }

    public function test_show_returns_a_single_barco()
    {
        $barco = Barco::factory()->create();

        $response = $this->getJson("/api/v1/barcos/{$barco->id}");

        $response->assertStatus(200)
                 ->assertJson([
                     'id' => $barco->id,
                     'nombre' => $barco->nombre,
                     // Añadir otros campos según sea necesario
                 ]);
    }

    public function test_store_creates_a_new_barco()
    {
        $categoria = Categoria::factory()->create(); // Crear una categoría de prueba

        $barcoData = [
            'nombre' => 'Barco de prueba',
            'tipo' => 'Tipo de prueba',
            'precio_por_hora' => 100.00,
            'categoria_id' => $categoria->id, // Usar el ID de la categoría de prueba
            'capacidad' => 10,
            'url_imagen' => 'https://example.com/imagen.jpg',
            'descripcion' => 'Descripción de prueba',
            'disponible' => true,
        ];

        $response = $this->postJson('/api/v1/barcos', $barcoData);

        $response->assertStatus(201)
                 ->assertJsonFragment($barcoData);

        $this->assertDatabaseHas('barcos', $barcoData);
    }

    public function test_store_fails_with_invalid_data()
    {
        $barcoData = [
            'nombre' => '',
            'tipo' => '',
            'precio_por_hora' => '',
            'categoria_id' => '',
            'capacidad' => '',
            'url_imagen' => '',
            'descripcion' => '',
            'disponible' => '',
        ];

        $response = $this->postJson('/api/v1/barcos', $barcoData);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['nombre', 'tipo', 'precio_por_hora', 'categoria_id', 'capacidad', 'url_imagen', 'descripcion', 'disponible']);
    }

    public function test_update_modifies_an_existing_barco()
    {
        $barco = Barco::factory()->create();
        $updatedData = [
            'nombre' => 'Nuevo Nombre',
            'tipo' => 'Nuevo Tipo',
            'precio_por_hora' => 150.00,
            'categoria_id' => $barco->categoria_id,
            'capacidad' => 15,
            'url_imagen' => 'https://example.com/nueva-imagen.jpg',
            'descripcion' => 'Nueva descripción',
            'disponible' => false,
        ];

        $response = $this->putJson("/api/v1/barcos/{$barco->id}", $updatedData);

        $response->assertStatus(200)
                 ->assertJsonFragment($updatedData);

        $this->assertDatabaseHas('barcos', $updatedData);
    }

    public function test_destroy_deletes_a_barco()
    {
        $barco = Barco::factory()->create();

        $response = $this->deleteJson("/api/v1/barcos/{$barco->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('barcos', ['id' => $barco->id]);
    }
}
