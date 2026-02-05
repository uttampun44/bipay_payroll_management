<?php

namespace Modules\Leave\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Leave\Database\Factories\LeaveTypeFactory;

class LeaveType extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'leave_types';
    protected $fillable = ['leave_type_name', 'leave_code', 'description', 'max_days_per_year', 
    'carry_forward_allowed', 'max_carry_forward_days', 'is_paid', 'require_approval', 'notice_days_required', 'status'];
   
    protected $casts = [
        'is_paid' => 'boolean',
        'require_approval' => 'boolean',
        'carry_forward_allowed' => 'boolean',
        'status' => 'boolean',
    ];
    // protected static function newFactory(): LeaveTypeFactory
    // {
    //     // return LeaveTypeFactory::new();
    // }
}
