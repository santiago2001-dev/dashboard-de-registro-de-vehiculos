<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Http\Services\VehicleService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class VehicleController extends Controller
{

    protected  VehicleService $vehicle_service;
    public function __construct(VehicleService $vehicle_service)
    {
        $this->vehicle_service =  $vehicle_service;
    }




    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $data =  $this->vehicle_service->getAll();
            return response()->json([
                "data" => $data
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], 500);
        }
    }



    /**
     * @param StoreVehicleRequest $request
     * 
     * @return JsonResponse
     */
    public function store(StoreVehicleRequest $request): JsonResponse
    {
        try {
            $vehicle = new Vehicle();
            $vehicle->placa =  $request->input("placa");
            $vehicle->color =  $request->input("color");
            $vehicle->marca =  $request->input("marca");
            $vehicle->tipoVehiculo =  $request->input("tipoVehiculo");
            $vehicle->conductor =  $request->input("conductor");
            $vehicle->propietario =  $request->input("propietario");

            $result = $this->vehicle_service->insert($vehicle);

            if ($result === "Registro insertado correctamente") {
                return response()->json([
                    "message" => $result
                ], 200);
            } else {
                return response()->json([
                    "error" => $result
                ], 500);
            }
        } catch (Exception $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], 500);
        }
    }

    /**
     * @return JsonResponse
     */
    public function getInfo(): JsonResponse
    {

        try {
            $data =  $this->vehicle_service->getInfo();
            return response()->json([
                "data" => $data
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], 500);
        }
    }



    /**
     * @param int $id
     * 
     * @return JsonResponse
     */
    public function showById(int $id): JsonResponse
    {
        try {
            $data =  $this->vehicle_service->getById($id);
            return response()->json([
                "data" => $data
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                "error" => $e->getMessage()
            ], 500);
        }
    }



}
