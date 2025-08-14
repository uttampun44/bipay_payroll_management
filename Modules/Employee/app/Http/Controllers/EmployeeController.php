<?php

namespace Modules\Employee\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Employee\app\Repositories\EmployeeRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Modules\Employee\Http\Requests\EmployeeRequest;

class EmployeeController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  protected $employeeRepository;
  public function __construct(EmployeeRepository $employeeRepository)
  {
    $this->employeeRepository = $employeeRepository;
  }
  public function index(Request $request)
  {
    return $this->employeeRepository->index($request);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return $this->employeeRepository->create();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(EmployeeRequest $request)
  {
    try {
      Log::info("EmployeeController::store", $request->all());
      return $this->employeeRepository->store($request->all());
    } catch (\Throwable $th) {
      Log::error($th->getMessage());
      throw new \Exception("Failed to create employee", 500, $th);
    }
  }

  /**
   * Show the specified resource.
   */
  public function show($id)
  {
    return view('employee::show');
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit($id)
  {
    return $this->employeeRepository->edit($id);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, $id)
  {
    try {
     
      $this->employeeRepository->update($id, $request->all());
      return redirect()->route('employees.index')->with('success', 'Employee updated successfully');
    } catch (\Throwable $th) {
      throw new \Exception("Failed to update employee", 500, $th);
    }
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    try {
      return $this->employeeRepository->destroy($id);
    } catch (\Throwable $th) {
      Log::error($th->getMessage());
      throw new \Exception("Failed to delete employee", 500, $th);
    }
  }
}
