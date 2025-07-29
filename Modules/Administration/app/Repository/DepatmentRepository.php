<?php

namespace Modules\Administration\app\Repository;

use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Modules\Administration\Models\Department;

class DepatmentRepository
{
  public function index()
  {
    $departments = Department::query()
                  ->select('id', 'department_name', 'department_code', 'description', 'budget', 'status')
                  ->latest()
                  ->get();
     
    
    return Inertia::render("Administration::Department/Index", [
      'departments' => $departments,
    ]);
  }

  public function store(array $data)
  {
    Department::create($data);
  }

  public function edit(int $id)
  {
    $department = Department::findOrFail($id);
     
    if(!$department->id)
    {
      return response()->json(['message' => 'Department not found'], 404);
    }
    return $department;
  }
}
