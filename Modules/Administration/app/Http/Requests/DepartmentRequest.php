<?php

namespace Modules\Administration\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DepartmentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'department_name' => 'required',
            'department_code' => 'required',
            'description' => 'nullable|string',
            'budget' => 'required|numeric|min:0',
            'status' => 'required|boolean',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
}
