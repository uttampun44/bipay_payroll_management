<?php

namespace Modules\Leave\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeLeaveBalanceRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'employee_id' => 'required|employees.id',
            'leave_type_id' => 'required|leave_types.id',
            'allocated_days' => 'required|integer|min:1',
            'used_days' => 'required|integer|min:1',
            'carried_forward_days' => 'required|integer|min:1',
            'remaining_days' => 'required|integer|min:1',
            'year' => 'required|integer|min:1',
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
