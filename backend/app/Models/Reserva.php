<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reserva extends Model
{
    //
    use HasFactory;
    protected $fillable = [
        'barco_id',
        'fecha_inicio',
        'fecha_fin',
        'precio_total',
        'nombre_cliente',
        'apellidos_cliente',
        'email_cliente',
        'estado',
        'metodo_pago',
        'fecha_pago',
        'fecha_cancelacion',
        'motivo_cancelacion',
        'comentarios',
        'codigo_reserva',
        'dni_cliente',
        'telefono_cliente',
    ];

    public function barco()
    {
        return $this->belongsTo(Barco::class);
    }
 

    public function cliente()
    {
        return $this->belongsTo(Cliente::class);
    }
}
