<?php

namespace Modules\Leave\app\Repositories;

use Inertia\Inertia;
use Modules\Leave\Models\LeaveType;

class LeaveTypeRepositories
{
    public function index()
    {
        
      $leaveTypes = LeaveType::query()->select('id', 'leave_type_name', 'leave_code', 'description',
                     'max_days_per_year', 'carry_forward_allowed', 'max_carry_forward_days', 'is_paid', 
                     'require_approval', 'notice_days_required', 'status')->get();

       return Inertia::render('Leave::LeaveType/Index', [
           'leaveTypes' => $leaveTypes,
       ]);
    }

    public function store(array $data)
    {
         LeaveType::create($data);
    }

    public function update($id, array $data)
    {
        $leaveType = LeaveType::findOrFail($id);
        $leaveType->update($data);
    }
}