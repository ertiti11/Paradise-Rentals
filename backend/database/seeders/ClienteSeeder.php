<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Cliente;

class ClienteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Cliente::factory()
            ->count(10)
            ->hasAlquileres(2)
            ->create();

        Cliente::factory()
            ->count(10)
            ->hasAlquileres(10)
            ->create();

        Cliente::factory()
            ->count(10)
            ->hasAlquileres(4)
            ->create();
    }
}
