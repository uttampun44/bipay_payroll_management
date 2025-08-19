<?php

namespace Modules\Leave\app\Repositories;

use Inertia\Inertia;
use Modules\Leave\Models\LeaveType;

class LeaveTypeRepositories
{
    public function index()
    {
        
      $leaveTypes = LeaveType::query()->select('id', 'leave_type_name')->get();

       return Inertia::render('Leave::LeaveType/Index', [
           'leaveTypes' => $leaveTypes,
       ]);
    }

    public function store(array $data)
    {
        LeaveType::create($data);
    }

    public function edit($id)
    {

    }

    public function update($id, array $data)
    {
        $leaveType = LeaveType::findOrFail($id);

        if(!$leaveType->id)
        {
            return throw new \Exception('Leave Type Not Found');
        }
        $leaveType->update($data);
    }
}