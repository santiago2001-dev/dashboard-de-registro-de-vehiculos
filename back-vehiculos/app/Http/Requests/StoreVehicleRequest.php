<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreVehicleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */

    public function rules(): array
    {
        return [
            "placa" => 'required|string',
            "color" => 'required|string',
            "marca" => 'required|string',
            "tipoVehiculo" => 'required|string',
            "conductor" => 'required|string',
            "propietario" => 'required|string',
        ];
    }

 
    public function messages()
    {
        return [
            'required' => 'El campo :attribute es requerido.',
            'string' => 'El campo :attribute debe ser String'

        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'message' => 'Error de validación',
            'errors' => $validator->errors(),
        ], 422));
    }
}
