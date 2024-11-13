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
        "descripcion",
        "longitud",
        "localizacion",
        "disponible",
    ];
    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    public function alquileres()
    {
        return $this->hasMany(Alquiler::class);
    }
    public function fotos()
    {
        return $this->hasMany(Foto::class);
    }
    public function reservas()
{
    return $this->hasMany(Reserva::class);
}
}
