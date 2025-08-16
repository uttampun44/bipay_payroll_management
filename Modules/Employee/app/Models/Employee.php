<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Administration\app\Models\Department;
use Modules\Administration\app\Models\JobDesk;

// use Modules\Employee\Database\Factories\EmployeeFactory;

class Employee extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'employee_code',
        'first_name',
        'last_name',
        'email',
        'password',
        'gender',
        'phone',
        'address',
        'hire_date',
        'department_id',
        'job_desk_id',
        'employment_status',
        'basic_salary',
        'image',
    ];

    // protected static function newFactory(): EmployeeFactory
    // {
    //     // return EmployeeFactory::new();
    // }

    protected $casts = [
       'employment_status' => 'boolean',
    ];

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function jobDesk()
    {
        return $this->belongsTo(JobDesk::class);
    }

    public function employeeShifts()
    {
        return $this->hasMany(EmployeeShift::class);
    }
}
