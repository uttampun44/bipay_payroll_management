import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { router, useForm } from "@inertiajs/react";
import Quill from "quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import ReactQuill from 'react-quill';

export default function JobDeskForm() {

    const { post: post, data, setData, errors, transform } = useForm({
        job_title: "",
        job_code: "",
        job_description: "",
        min_salary: "",
        max_salary: "",
        job_requirements: "",
        job_responsibilities: "",
    });

    const [jobDescription, setJobDescription] = useState("");

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
    }

    return (
        <div className="grid-form">
            <form onSubmit={handleSubmit}>
                <div className="space-y-4 form-control grid lg:grid-cols-3 grid-cols-2 gap-4">
                    <div className="department mt-4">
                        <InputLabel
                            htmlFor="department"
                            value="Department"
                        />
                        <Select>
                            <SelectTrigger className="">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
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

                            }}
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

                            }}
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

                            }}
                        />
                    </div>
                    <div className="maximum_salary">
                        <InputLabel
                            htmlFor="max_salary"
                            value="Maximum Salary"
                        />
                        <TextInput
                            type="text"
                            name="max_salary"
                            className="mt-1 block w-full"
                            placeholder="Enter Maximum Salary"
                            autoComplete="off"
                            onChange={(e) => {

                            }}
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
                            className="h-32 mb-12" 
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
                            className="h-32 mb-12"
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
                            className="h-32 mb-12"
                        />
                    </div>
                </div>

                <div className="button-form flex gap-x-4">
                    <Button
                        className="mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        type="submit"
                        variant={"default"}
                        onClick={() => {
                            post("/job-desks/store");
                        }}
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