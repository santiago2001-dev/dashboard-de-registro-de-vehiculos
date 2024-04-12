<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InfoVehicleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "placa" => $this->placa,
            "marca" => $this->marca,
            "NombreConductor" => $this->formatDriverName($this->driver),
            "NombrePropietario" =>  $this->formatOwnerName($this->onwer),
        ];
    }

    private function formatDriverName($driver)
    {
        if (!empty($driver) && count($driver) > 0) {
            $firstDriver = $driver[0];
            return $firstDriver['primerNomb'] . " " . $firstDriver['segundoNom'] . " " . $firstDriver['apellidos'];
        }
        return '';
    }

    private function formatOwnerName($owner)
    {
        if (!empty($owner) && count($owner) > 0) {
            $firstOwner = $owner[0];
            return $firstOwner['primerNomb'] . " " . $firstOwner['segundoNom'] . " " . $firstOwner['apellidos'];
        }
        return '';
    }
}
