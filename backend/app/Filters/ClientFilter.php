<?php

namespace App\Filters;

use Illuminate\Http\Request;
use App\Filters\ApiFilter;

class ClientFilter extends ApiFilter
{
    //parametros con los que queramos filtrar (nombres, tipos, email, etc)
    protected $safeParams = [
        'nombre' => ['eq'],
        'email' => ['eq'],
        'telefono' => ['eq'],

    ];
    //mapeamos columnas a como queremos que se filtres(por ejemplo, Postal_code se convierte en cp, te transoforma como quieres que te lo devuelva)
    protected $columnMap = [];

    // operadores logicos que se pueden usar en las consultas (por ejemplo, mayor que, menor que, igual que, etc)
    protected $operatorMap = [
        'eq' => '=',
        'lt' => '<',
        'gt' => '>',
        'lte' => '<=',
        'gte' => '>=',
        'ne' => '!=',
        'like' => 'like',
        'in' => 'in',
        'between' => 'between',
        'not_in' => 'not in',
        'not_between' => 'not between',
        'is_null' => 'is null',
        'is_not_null' => 'is not null',
    ];


    
}
