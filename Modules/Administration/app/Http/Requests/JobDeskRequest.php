<?php

namespace Modules\Administration\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class JobDeskRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'job_title' => 'required|string|max:255',
            'job_code' => 'required|string|max:100|unique:job_desks',
            'job_description' => 'required|string',
            'minimum_salary' => 'nullable|numeric|min:0',
            'maximum_salary' => 'nullable|numeric|min:0|gte:minimum_salary',
            'job_requirements' => 'nullable|string',
            'job_responsibilities' => 'nullable|string',
            'department_id' => 'required|exists:departments,id',
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
