<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Categoria;
use App\Models\Alquiler;


class Barco extends Model
{
    use HasFactory;

    protected $fillable = [
        "nombre",
        "tipo",
        "precio",
        "capacidad",
        "url_imagen",
        "descripcion"

    ];
    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function alquileres()
    {
        return $this->hasMany(Alquiler::class);
    }
}
