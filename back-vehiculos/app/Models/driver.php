<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class driver extends Model
{
    use HasFactory;
    protected $fillable = [
        "primerNomb",
        "segundoNom",
        "apellidos",
        "direccion",
        "telefono",
        "ciudad",
        "numCedula",
        "placa",

    ];
}
