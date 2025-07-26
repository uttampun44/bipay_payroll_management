<?php

namespace Modules\Administration\app\Repository;

use App\Models\Department;
use Inertia\Inertia;

class DepatmentRepository
{
  public function index()
  {
    return Inertia::render("Administration::Department/Index");
  }
}
