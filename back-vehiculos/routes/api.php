<?php

use App\Http\Controllers\DriverController;
use App\Http\Controllers\OnwerController;
use App\Http\Controllers\VehicleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(VehicleController::class)->group(function () {
    Route::get('/vehicle', "index");
    route::get("/vehicleById/{id}", "showById");
    Route::post('/vehicle', "store");
    Route::get('vehicle/info',"getInfo");
});


Route::controller(OnwerController::class)->group(function () {
    Route::get('/owner', "index");
    route::get("/ownerById/{id}", "showById");
    Route::post('/owner', "store");
});


Route::controller(DriverController::class)->group(function () {
    Route::get('/driver', "index");
    route::get("/driverById/{id}", "showById");
    Route::post('/driver', "store");
});
