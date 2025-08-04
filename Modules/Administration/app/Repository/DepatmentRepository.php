<?php

namespace Modules\Administration\app\Repository;

use Inertia\Inertia;
use Modules\Administration\app\Models\Department;

class DepatmentRepository
{
  public function index()
  {
    $search = request()->input('search', '');


    $departments = Department::query()
      ->select('id', 'department_name', 'department_code', 'description', 'budget', 'status')
      ->when($search, function ($query, $search) {
        return $query->whereAny(['department_name', 'department_code', 'description'], 'like', "%{$search}%");
      })
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

  public function update(int $id, array $data)
  {
    $department = Department::findOrFail($id);

    if (!$department->id) {
      return throw new \Exception("Department not found");
    }

    $department->update($data);
  }

  public function destroy(int $id)
  {
    $department = Department::findOrFail($id);

    if (!$department->id) {
      return throw new \Exception("Department not found");
    }

    $department->delete();
  }
}
