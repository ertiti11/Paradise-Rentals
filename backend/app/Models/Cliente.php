<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Alquiler;
class Cliente extends Model
{
    use HasFactory;
    protected $fillable = [
        "nombre",
        "apellido",
        "telefono",
        "email"
    ];
    public function alquileres()
    {
        return $this->hasMany(Alquiler::class);
    }
}
