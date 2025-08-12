import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { formats, modules } from "@/types/reactquillConfig";
import { router, useForm, usePage } from "@inertiajs/react";
import ReactQuill from "react-quill";
import { toast } from "sonner";
import { jobDesks } from "../types/jobdesk";

type departmentEditProps = {
    departmentsData: {
        id: number;
        department_name: string;
    }[];
}

export default function JobDeskEditForm({ departmentsData }: departmentEditProps) {

    const jobDesk = usePage().props.jobDesk as jobDesks;

    const { data, setData, errors, processing, resetAndClearErrors, put:put } = useForm({
        department_id: jobDesk.department.id,
        job_title: jobDesk.job_title,
        job_code: jobDesk.job_code,
        job_description: jobDesk.job_description,
        minimum_salary: jobDesk.minimum_salary,
        maximum_salary: jobDesk.maximum_salary,
        job_requirements: jobDesk.job_requirements,
        job_responsibilities: jobDesk.job_responsibilities,
    });
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {   
            put(route("job-desks.update", { id: jobDesk.id }), {
                onSuccess: () => {
                    toast.success("Job Desk Updated Successfully");
                    resetAndClearErrors();
                },
                onError: () => {
                    toast.error("Job Desk Update Failed");
                }
            });
        } catch (error) {
            throw error;
        }
    }   
    return (
        <div className="grid-form overflow-auto  p-4 sm:p-6 md:p-8">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="department mt-4">
                        <InputLabel
                            htmlFor="department"
                            value="Department"
                        />
                        <Select name="department_name"
                            onValueChange={(value) => {
                                setData('department_id', value);
                            }}
                            value={String(data.department_id)}
                        >
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                            <SelectContent className="mt-1">
                                {departmentsData.map((department) => (
                                    <SelectItem
                                        key={department.id} value={String(department.id)}>{department.department_name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError
                            message={errors.department_id}
                        />
                    </div>

                    <div className="job-title mt-4">
                        <InputLabel
                            htmlFor="job_title"
                            value="Job Title"
                        />
                        <TextInput
                            type="text"
                            name="job_title"
                            className="mt-1 block w-full"
                            placeholder="Enter Job Title"
                            autoComplete="off"
                            defaultValue={jobDesk.job_title}
                            onChange={(e) => {
                                setData('job_title', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.job_title}
                        />
                    </div>
                    <div className="job-code mt-4">
                        <InputLabel
                            htmlFor="job_code"
                            value="Job Code"
                        />
                        <TextInput
                            type="text"
                            name="job_code"
                            className="mt-1 block w-full"
                            placeholder="Enter Job Code"
                            autoComplete="off"
                            defaultValue={jobDesk.job_code}
                            onChange={(e) => {
                                setData('job_code', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.job_code}
                        />
                    </div>
                    <div className="minimum_salary">
                        <InputLabel
                            htmlFor="minimum_salary"
                            value="Minimum Salary"
                        />
                        <TextInput
                            type="number"
                            name="minimum_salary"
                            className="mt-1 block w-full"
                            placeholder="Enter Minimum Salary"
                            autoComplete="off"
                            defaultValue={jobDesk.minimum_salary}
                            onChange={(e) => {
                                const value = e.target.value;
                                setData('minimum_salary', Number(value) ? Number(value) : 0.00);
                            }}
                        />
                        <InputError
                            message={errors.minimum_salary}
                        />
                    </div>
                    <div className="maximum_salary">
                        <InputLabel
                            htmlFor="max_salary"
                            value="Maximum Salary"
                        />
                        <TextInput
                            type="number"
                            name="maximum_salary"
                            className="mt-1 block w-full"
                            placeholder="Enter Maximum Salary"
                            autoComplete="off"
                            defaultValue={jobDesk.maximum_salary}
                            onChange={(e) => {
                                const value = e.target.value;
                                setData('maximum_salary', Number(value) ? Number(value) : 0.00);
                            }}
                        />
                        <InputError
                            message={errors.maximum_salary}
                        />
                    </div>
                    <div className="job-description">
                        <InputLabel
                            htmlFor="job_description"
                            value="Job Description"
                        />
                        <ReactQuill
                            formats={formats}
                            modules={modules}
                            defaultValue={jobDesk.job_description}
                            onChange={(content) => setData('job_description', content)}
                        />
                        <InputError
                            message={errors.job_description}
                        />
                    </div>
                    <div className="job-requirement">
                        <InputLabel
                            htmlFor="job_requirements"
                            value="Job Requirements"
                        />
                        <ReactQuill
                            formats={formats}
                            modules={modules}
                            defaultValue={jobDesk.job_requirements}
                            onChange={(content) => setData('job_requirements', content)}
                        />
                        <InputError
                            message={errors.job_requirements}
                        />
                    </div>
                    <div className="job-responsiblities">
                        <InputLabel
                            htmlFor="job_responsibilities"
                            value="Job Responsibilities"
                        />
                        <ReactQuill
                            formats={formats}
                            modules={modules}
                            defaultValue={jobDesk.job_responsibilities}
                            onChange={(content) => setData('job_responsibilities', content)}
                        />
                        <InputError
                            message={errors.job_responsibilities}
                        />
                    </div>
                </div>

                <div className="button-form flex gap-x-4 mb-4">
                    <Button
                        className="mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        type="submit"
                        variant={"default"}
                        disabled={processing}
                    >
                        Submit
                    </Button>
                    <DangerButton
                        className="mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        type="button"
                        onClick={() => {
                            router.visit("/administrations/job-desks", { method: "get" });
                        }}
                    >
                        Cancel
                    </DangerButton>
                </div>
            </form>
        </div>
    )
}