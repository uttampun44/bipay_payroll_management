<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Employee\Database\Factories\AppointmentFactory;

class Appointment extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [];

    // protected static function newFactory(): AppointmentFactory
    // {
    //     // return AppointmentFactory::new();
    // }
}
