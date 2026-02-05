<?php

namespace Modules\Leave\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Leave\Database\Factories\EmployeeLeaveBalanceFactory;

class EmployeeLeaveBalance extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'employee_id',
        'leave_type_id',
        'allocated_days',
        'used_days',
        'carried_forward_days',
        'remaining_days',
        'year',
    ];

    // protected static function newFactory(): EmployeeLeaveBalanceFactory
    // {
    //     // return EmployeeLeaveBalanceFactory::new();
    // }
}
