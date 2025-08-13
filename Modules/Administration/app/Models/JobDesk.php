<?php

namespace Modules\Administration\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Administration\Database\Factories\JobDeskFactory;
use Modules\Employee\Models\Employee;

class JobDesk extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'job_desks';
    protected $fillable = ['job_title', 'job_code', 'job_description', 'minimum_salary',
     'maximum_salary', 'job_requirements', 'job_responsibilities', 'department_id'];

    protected static function newFactory(): JobDeskFactory
    {
        return JobDeskFactory::new();
    }

    public function department()
    {
        return $this->belongsTo(Department::class, 'department_id');
    }

    public function employees()
    {
        return $this->hasMany(Employee::class, 'job_desk_id');
    }
}
