<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
   
    protected $fillable = [
        "placa",
        "color",
        "marca",
        "tipoVehiculo",
        "conductor",
        "propietario"
    ];
    public function Onwer(){

        return $this->hasMany(Onwer::class,'placa','placa');
    }
    public function driver(){

        return $this->hasMany(driver::class,'placa','placa');
    }
}
