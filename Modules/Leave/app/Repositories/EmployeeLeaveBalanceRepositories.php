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

    public function create()
    {
      return Inertia::render('Leave::EmployeeLeaveBalance/Create');
    }

    public function store(array $data)
    {
        EmployeeLeaveBalance::create($data);
    }

    public function edit($id)
    {

    }

    public function update($id, array $data)
    {

    }
    public function destroy($id)
    {
    }
}