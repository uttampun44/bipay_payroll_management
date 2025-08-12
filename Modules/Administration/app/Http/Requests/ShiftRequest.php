<?php

namespace Modules\Administration\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShiftRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'shift_name' => 'required',
            'shift_code' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'break_duration' => 'required',
            'working_hours' => 'required',
            'overtime_rate' => 'required',
            'weekend_rate' => 'required',
            'night_shift_allowance' => 'required',
            'status' => 'required',
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
