<?php 
namespace App\Http\Services;

use App\Models\driver;
use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Collection;
use PhpParser\Node\Expr\Cast\Object_;

class DriverService{

    /**
     * @return Collection
     */
    public function getAll(): Collection
    {
       $driver =  driver::all();
        return $driver;

    }

    /**
     * @param Vehicle$driver
     * 
     * @return string
     */
    public function insert(driver $driver): string
    {
        if ($driver->save()) {
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
    public function getById( int $id)
    {

       $driver =  driver::find($id);
        return $driver;
    }
    



}