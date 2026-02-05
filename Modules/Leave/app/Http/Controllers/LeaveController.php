<?php

namespace Modules\Leave\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Modules\Leave\app\Repositories\LeaveTypeRepositories;
use Modules\Leave\Http\Requests\LeaveTypeRequest;

class LeaveController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $leaveTypeRepository;
    public function __construct(LeaveTypeRepositories $leaveTypeRepository)
    {
        $this->leaveTypeRepository = $leaveTypeRepository;
    }
    public function index()
    {
        return $this->leaveTypeRepository->index();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('leave::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(LeaveTypeRequest $request) 
    {
        try {
            return $this->leaveTypeRepository->store($request->validated());
        } catch (\Throwable $th) {
            Log::error($th->getMessage());
            throw new \Exception($th->getMessage());
        }
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('leave::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('leave::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(LeaveTypeRequest $request, $id) {
      try {
         $this->leaveTypeRepository->update($id, $request->all());
      } catch (\Throwable $th) {
         Log::error($th->getMessage());
         throw new \Exception($th->getMessage());
      }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) {}
}
