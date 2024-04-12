<?php

namespace App\Http\Services;

use App\Models\Onwer;
use Illuminate\Database\Eloquent\Collection;

class OwnnerService
{


    /**
     * @return Collection
     */
    public function getAll(): Collection
    {
        $owner  = Onwer::all();
        return $owner;
    }


    /**
     * @param Onwer $owner
     * 
     * @return string
     */
    public function insert(Onwer $owner): string
    {
        if ($owner->save()) {
            return "Registro insertado correctamente";
        } else {
            return "Error al insertar el registro";
        }
    }

    /**
     * @param int $id
     * 
     * @return Collection
     */
    public function getById(int $id): Object
    {

        $owner  =  Onwer::find($id);
        return $owner;
    }
}
