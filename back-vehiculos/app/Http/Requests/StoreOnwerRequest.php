<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreOnwerRequest extends FormRequest
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
    public function rules()
    {
        return [
            "primerNomb" =>"required|string",
            "segundoNom" =>"required|string",
            "apellidos" =>"required|string",
            "direccion" =>"required|string",
            "telefono" =>"required|string",
            "ciudad"=>"required|string",
            "numCedula"=>"required|string"
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
