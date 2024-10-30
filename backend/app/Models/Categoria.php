<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Barco;
class Categoria extends Model
{
    use HasFactory;
    protected $fillable = [
        "nombre"
    ];
    public function barcos()
    {
        return $this->hasMany(Barco::class);
    }
}
