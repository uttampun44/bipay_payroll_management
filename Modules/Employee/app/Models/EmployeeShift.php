<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Administration\Models\Shift;

// use Modules\Employee\Database\Factories\EmployeeShiftFactory;

class EmployeeShift extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = ['employee_id', 'shift_id', 'start_date', 'end_date', 'is_current'];

    protected $casts = [
        'is_current' => 'boolean',
    ];
    // protected static function newFactory(): EmployeeShiftFactory
    // {
    //     // return EmployeeShiftFactory::new();
    // }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function shift(): BelongsTo
    {
        return $this->belongsTo(Shift::class);
    }
}
