<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cliente;
use App\Models\Barco;
class Alquiler extends Model
{
    use HasFactory;
    protected $table = 'alquileres';

    protected $fillable = [
        "fecha_alquiler",
        "total"
    ];
    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }

    public function Barco()
    {
        return $this->belongsTo(Barco::class);
    }
}
