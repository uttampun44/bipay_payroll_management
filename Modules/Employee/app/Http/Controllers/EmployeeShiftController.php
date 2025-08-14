<?php

namespace Modules\Employee\Http\Controllers;

use App\Http\Controllers\Controller;
use Modules\Employee\app\Repositories\EmployeeShiftsRepository;
use Illuminate\Support\Facades\Log;
use Modules\Employee\Http\Requests\EmployeeShiftRequest;

class EmployeeShiftController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $employeeShiftRepository;
    public function __construct(EmployeeShiftsRepository $employeeShiftRepository)
    {
        $this->employeeShiftRepository = $employeeShiftRepository;
    }

    public function index()
    {
        return $this->employeeShiftRepository->index();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('employee::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmployeeShiftRequest $request) 
    {
      try {
        return $this->employeeShiftRepository->store($request->validate());
        
      } catch (\Throwable $th) {
        Log::error($th->getMessage());
        throw new \Exception("Failed to create employee shift", 500, $th);
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
        return view('employee::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EmployeeShiftRequest $request, $id) 
    {
       try {
        return $this->employeeShiftRepository->update($id, $request->all());

       } catch (\Throwable $th) {
         Log::error($th->getMessage());
         throw new \Exception("Failed to update employee shift", 500, $th);
       }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) 
    {
        try {
            return $this->employeeShiftRepository->destroy($id);
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            throw new \Exception("Failed to delete employee shift", 500, $th);
        }
    }
}
