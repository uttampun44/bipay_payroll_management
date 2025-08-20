<?php

namespace Modules\Leave\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LeaveType extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'leave_type_name' => 'required|string|max:255',
            'leave_code' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'max_days_per_year' => 'required|integer|min:1',
            'carry_forward_allowed' => 'required|boolean',
            'max_carry_forward_days' => 'required|integer|min:1',
            'is_paid' => 'required|boolean',
            'require_approval' => 'required|boolean',
            'notice_days_required' => 'required|integer|min:1',
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
