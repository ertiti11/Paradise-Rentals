<?php

namespace App\Filters;

use Illuminate\Http\Request;


class ApiFilter
{
    //parametros con los que queramos filtrar (nombres, tipos, email, etc)
    protected $safeParams = [];
    //mapeamos columnas a como queremos que se filtres(por ejemplo, Postal_code se convierte en cp, te transoforma como quieres que te lo devuelva)
    protected $columnMap = [];

    // operadores logicos que se pueden usar en las consultas (por ejemplo, mayor que, menor que, igual que, etc)
    protected $operatorMap = [];


    public function transform(Request $request)
    {
        $eloQuery = [];

        foreach($this->safeParams as $parm => $operators){
            $query = $request->query($parm);
            if(!isset($query)){
                continue;
            }
            $column = $this->columnMap[$parm] ?? $parm;

            foreach($operators as $operator){
                if (isset($query[$operator])){
                    $eloQuery[] = [$column, $this->operatorMap[$operator], $query[$operator]];
                }
            }
            
        }
        return $eloQuery;
        
    }
}
