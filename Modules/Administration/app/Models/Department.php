<?php

namespace Modules\Administration\app\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Modules\Administration\Database\Factories\DepartmentFactory;

class Department extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $table = 'departments';
    protected $fillable = ['department_name', 'department_code', 'description', 'budget', 'status'];

    // protected static function newFactory(): DepartmentFactory
    // {
    //     // return DepartmentFactory::new();
    // }

    public function jobDesks()
    {
        return $this->hasMany(JobDesk::class, 'department_id');
    }
}
