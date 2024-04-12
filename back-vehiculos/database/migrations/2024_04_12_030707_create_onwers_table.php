<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('onwers', function (Blueprint $table) {
            $table->id();
             $table->string("numCedula");
            $table->string("primerNomb");
            $table->string("segundoNom");
            $table->string("apellidos");
            $table->string("direccion");
            $table->string("telefono");
            $table->string("ciudad");
            $table->string("placa");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('onwers');
    }
};
