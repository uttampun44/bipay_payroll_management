import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { router, useForm } from "@inertiajs/react";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className="grid-form">
            <form onSubmit={handleSubmit}>
                <div className="space-y-4 form-control grid lg:grid-cols-3 grid-cols-2 gap-4">
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
                    <Button
                        className="mt-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        type="button"
                        variant={"destructive"}
                        onClick={() => {
                            router.visit("/job-desks", { method: "get" });
                        }}
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    )
}