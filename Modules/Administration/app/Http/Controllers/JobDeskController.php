<?php

namespace Modules\Administration\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Modules\Administration\app\Repository\JobDeskRepository;
use Modules\Administration\Http\Requests\JobDeskRequest;

class JobDeskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    protected $jobsDeskRepository;
    public function __construct(JobDeskRepository $jobsDeskRepository)
    { 
         $this->jobsDeskRepository = $jobsDeskRepository;
    }

    public function index()
    {
        return $this->jobsDeskRepository->index();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return $this->jobsDeskRepository->create();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(JobDeskRequest $request) 
    {
      try {
        return $this->jobsDeskRepository->store($request->validated());
      } catch (\Throwable $th) {
        throw new \Exception("Failed to create job desk: " . $th->getMessage());
      }
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('administration::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return $this->jobsDeskRepository->edit($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(JobDeskRequest $request, $id)
    {
      try {
          return  $this->jobsDeskRepository->update($id, $request->validated());
      } catch (\Throwable $th) {
        throw new \Exception("Failed to update job desk: " . $th->getMessage());
      }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id) 
    {
        try {
            return $this->jobsDeskRepository->destroy($id);
        } catch (\Throwable $th) {
            throw new \Exception("Failed to delete job desk: " . $th->getMessage());
        }
    }
}
