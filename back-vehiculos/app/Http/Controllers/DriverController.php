<?php

namespace App\Http\Controllers;

use App\Models\driver;
use App\Http\Requests\StoreOnwerRequest;
use App\Http\Services\DriverService;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class DriverController extends Controller
{
    protected DriverService $driver_service;
    public function __construct(DriverService $driver_service)
    {
        $this->driver_service = $driver_service;
    }
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $data =  $this->driver_service->getAll();
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
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOnwerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOnwerRequest $request)
    {
        try {

            $onwer = new driver();
            $onwer->primerNomb =  $request->input("primerNomb");
            $onwer->segundoNom =  $request->input("segundoNom");
            $onwer->apellidos =  $request->input("apellidos");
            $onwer->direccion =  $request->input("direccion");
            $onwer->telefono =  $request->input("telefono");
            $onwer->ciudad =  $request->input("ciudad");
            $onwer->numCedula =  $request->input("numCedula");
            $onwer->placa =  $request->input("placa");
            

            $result = $this->driver_service->insert($onwer);

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
     * @param int $id
     * 
     * @return JsonResponse
     */
    public function showById(int $id): JsonResponse
    {
        try {
            $data =  $this->driver_service->getById($id);
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
