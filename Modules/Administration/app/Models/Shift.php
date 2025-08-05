<?php

namespace Modules\Administration\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Administration\Database\Factories\ShiftFactory;

class Shift extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = "shifts";
    protected $fillable = [
        'shift_name',
        'shift_code',
        'start_time',
        'end_time',
        'break_duration',
        'working_hours',
        'overtime_rate',
        'night_shift_allowance',
        'weekend_rate',
        'status'
    ];

    // protected static function newFactory(): ShiftFactory
    // {
    //     // return ShiftFactory::new();
    // }
}
