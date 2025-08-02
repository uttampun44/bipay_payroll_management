import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { router, useForm, usePage } from "@inertiajs/react";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import InputError from "@/Components/InputError";
import { toast } from "sonner";

type departmentType = {
    id: number;
    department_name: string;
}

export default function JobDeskForm() {

    const departmentsData = usePage().props.departments as departmentType[];

    const { post: post, data, setData, errors, processing} = useForm({
        job_title: "",
        job_code: "",
        department_name: "",
        job_description: "",
        min_salary: "",
        max_salary: "",
        job_requirements: "",
        job_responsibilities: "",
    });

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            post(route("job-desks.store"), {
                onSuccess: () => {
                    toast.success("Job Desk Created Successfully");
                },
                onError: () => {
                    toast.error("Job Desk Creation Failed");
                }
            });
        } catch (error) {
            throw error;
        }
        e.preventDefault();
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
                         onValueChange={(value) =>{
                            setData('department_name', value);
                         }}
                         value={data.department_name}
                        >
                            <SelectTrigger className="">
                                <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                            <SelectContent className="mt-1">
                                {departmentsData.map((department) => (
                                    <SelectItem 
                                    key={department.id} value={department.department_name}>{department.department_name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError
                            message={errors.department_name}
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
                            htmlFor="min_salary"
                            value="Minimum Salary"
                        />
                        <TextInput
                            type="number"
                            name="min_salary"
                            className="mt-1 block w-full"
                            placeholder="Enter Minimum Salary"
                            autoComplete="off"
                            onChange={(e) => {
                                setData('min_salary', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.min_salary}
                        />
                    </div>
                    <div className="maximum_salary">
                        <InputLabel
                            htmlFor="max_salary"
                            value="Maximum Salary"
                        />
                        <TextInput
                            type="number"
                            name="max_salary"
                            className="mt-1 block w-full"
                            placeholder="Enter Maximum Salary"
                            autoComplete="off"
                            onChange={(e) => {
                                setData('max_salary', e.target.value);
                            }}
                        />
                        <InputError
                            message={errors.max_salary}
                        />
                    </div>
                    <div className="job-description">
                        <InputLabel
                            htmlFor="job_description"
                            value="Job Description"
                        />
                        <ReactQuill
                            theme="snow"
                            value={data.job_description}
                            onChange={(content) => setData('job_description', content)}
                            modules={modules}
                            formats={formats}
                             className="min-h-[8rem] max-h-[20rem] border border-gray-300 rounded-lg mb-4"
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
                            theme="snow"
                            value={data.job_requirements}
                            onChange={(content) => setData('job_requirements', content)}
                            modules={modules}
                            formats={formats}
                             className="min-h-[8rem] max-h-[20rem] border border-gray-300 rounded-lg mb-4"
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
                            theme="snow"
                            value={data.job_responsibilities}
                            onChange={(content) => setData('job_responsibilities', content)}
                            modules={modules}
                            formats={formats}
                            className="min-h-[8rem] max-h-[20rem] border border-gray-300 rounded-lg mb-4"
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
                        onClick={() => {
                            post("/job-desks/store");
                        }}
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