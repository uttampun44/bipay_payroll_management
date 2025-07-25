<?php

namespace Modules\Employee\app\Repositories;

use App\Models\Employee;
use Inertia\Inertia;

class EmployeeRepository
{
    public function index()
    {
        return Inertia::render('Employee::Employee/Index');
    }
}