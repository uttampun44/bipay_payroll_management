<?php

namespace Modules\Administration\app\Repository;

use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Modules\Administration\Models\Department;

class DepatmentRepository
{
  public function index()
  {
    return Inertia::render("Administration::Department/Index");
  }

  public function store( array $data )
  {
     Department::create($data);
  }
}
