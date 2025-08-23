<?php

namespace Modules\Leave\app\Repositories;

use Inertia\Inertia;
use Modules\Leave\Models\EmployeeLeaveBalance;

class EmployeeLeaveBalanceRepositories
{
    public function index()
    {
      return Inertia::render('Leave::EmployeeLeaveBalance/Index');
    }

    public function store(array $data)
    {
        EmployeeLeaveBalance::create($data);
    }
}