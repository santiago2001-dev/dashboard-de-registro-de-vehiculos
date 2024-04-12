<?php 
namespace App\Http\Services;

use App\Http\Resources\InfoVehicleResource;
use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\JsonResource;

class VehicleService {

    /**
     * @return Collection
     */
    public function getAll(): Collection
    {
        $vehicle =  Vehicle::all();
        return $vehicle;

    }

    /**
     * @param Vehicle $vehicle
     * 
     * @return string
     */
    public function insert(Vehicle $vehicle): string
    {
        if ($vehicle->save()) {
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

        $vehicle =  Vehicle::find($id);
        return $vehicle;
    }
    
    /**
     * @return JsonResource
     */
    public function getInfo(): JsonResource
    {
        $vehicle = Vehicle::query()->select()
        ->with(['driver','Onwer'])
        ->get();
        return InfoVehicleResource::collection($vehicle);
    }



}