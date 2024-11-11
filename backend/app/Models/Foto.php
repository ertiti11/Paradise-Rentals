<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    use HasFactory;

    protected $fillable = ['barco_id', 'url'];

    /**
     * Relación con el modelo Barco.
     */
    public function barco()
    {
        return $this->belongsTo(Barco::class);
    }
}
