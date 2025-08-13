import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { employeeTypeEditResponse, employeType } from "../types/employe";
import { toast } from "sonner";
import InputError from "@/Components/InputError";
import useToggle from "@/hooks/useToggle";
import { Switch } from "@/Components/ui/switch";
import Icon from "@/Components/Icon";
import { useState } from "react";
import { departmentType } from "../types/department";
import { jobDeskType } from "../types/jobdesk";

export default function EmployeeEdit() {
        const [isToggle, setToggle] = useToggle();
        const [confirmPassword, setConfirmPassword] = useToggle();
        const [imagePreview, setImagePreview] = useState<string>("");

        const editData = usePage().props.employee as employeeTypeEditResponse;
        
        const departments = usePage().props.departments as departmentType;
        const jobDesks = usePage().props.jobDesks as jobDeskType;

        const { data, setData, put: put, resetAndClearErrors, processing, errors } = useForm<employeType>({
        employee_code: editData.employee_code || "",
        first_name: editData.first_name || "",
        last_name: editData.last_name || "",
        email: editData.email || "",
        password: "",
        password_confirmation: "",
        gender: editData.gender || "",
        phone: editData.phone || "",
        address: editData.address || "",
        hire_date: editData.hire_date || "",
        department_id: editData.department_id || 0,
        job_desk_id: editData.job_desk_id || 0,
        employment_status: editData.employment_status || false,
        basic_salary: editData.basic_salary || "",
        image: editData.image || null,
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            put(route("employees.update", {id: editData.id}), {
                onSuccess: () => {
                    toast.success("Employee Added Successfully");
                    resetAndClearErrors();
                },
                onError: () => {
                    toast.error("Employee Creation Failed");
                }
            });
        } catch (error) {
            throw new Error("Failed to submit form: " + error);
        }
    }
    return (
         <form onSubmit={handleSubmit} action="/upload-image" encType="multipart/form-data">
            <div className="grid grid-cols-2 gap-4">
                <div className="employee_code">
                    <InputLabel
                        htmlFor="employee_code"
                        value="Employee Code"
                    />
                    <TextInput
                        type="text"
                        name="employee_code"
                        defaultValue={editData.employee_code}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("employee_code", e.target.value)
                        }
                    />
                    <InputError message={errors.employee_code} className="mt-2" />
                </div>

                <div className="first_name">
                    <InputLabel
                        htmlFor="first_name"
                        value="First Name"
                    />
                    <TextInput
                        type="text"
                        name="first_name"
                        defaultValue={editData.first_name}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("first_name", e.target.value)
                        }
                    />
                    <InputError message={errors.first_name} className="mt-2" />
                </div>
                <div className="last_name">
                    <InputLabel
                        htmlFor="last_name"
                        value="Last Name"
                    />
                    <TextInput
                        type="text"
                        name="last_name"
                        defaultValue={editData.last_name}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("last_name", e.target.value)
                        }
                    />
                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                <div className="email">
                    <InputLabel
                        htmlFor="email"
                        value="Email"
                    />
                    <TextInput
                        type="text"
                        name="email"
                        defaultValue={editData.email}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("email", e.target.value)
                        }
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="password relative">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        type={isToggle ? "text" : "password"}
                        name="password"
                        autoComplete="new-password"
                        defaultValue={editData.password}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("password", e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                    <div className="absolute right-2 top-1/2">
                        <Icon
                            iconName={isToggle ? "passwordVisibility" : "passwordHidden"}
                            onClick={() => setToggle(!isToggle)}
                        />
                    </div>
                </div>

                <div className="confirm_password relative">
                    <InputLabel htmlFor="confirm_password" value="Confirm Password" />
                    <TextInput
                        type={confirmPassword ? "text" : "password"}
                        name="confirm_password"
                        autoComplete="new-password"
                        defaultValue={editData.password_confirmation}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("password_confirmation", e.target.value)}
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                    <div className="absolute right-2 top-1/2">
                        <Icon
                            iconName={confirmPassword ? "passwordVisibility" : "passwordHidden"}
                            onClick={() => setConfirmPassword(!confirmPassword)}
                        />
                    </div>
                </div>
                <div className="gender">
                    <InputLabel
                        htmlFor="gender"
                        value="Gender"
                    />
                    <Select name="gender"
                        onValueChange={(value) => {
                            setData('gender', value);
                        }}
                        defaultValue={editData.gender}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent className="mt-1">
                            <SelectItem
                                key="Male" value="Male">Male</SelectItem>
                            <SelectItem
                                key="Female" value="Female">Female</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.gender} className="mt-2" />
                </div>
                <div className="phone">
                    <InputLabel
                        htmlFor="phone"
                        value="Phone"
                    />
                    <TextInput
                        type="text"
                        name="phone"
                        defaultValue={editData.phone}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("phone", e.target.value)
                        }
                    />
                    <InputError message={errors.phone} className="mt-2" />
                </div>
                <div className="address">
                    <InputLabel
                        htmlFor="address"
                        value="Address"
                    />
                    <Textarea
                        name="address"
                        defaultValue={editData.address}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("address", e.target.value)
                        }
                        rows={4}
                    />
                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div className="hire_Date">
                    <InputLabel
                        htmlFor="hire_date"
                        value="Hire Date"
                    />
                    <TextInput
                        type="date"
                        name="hire_date"
                        defaultValue={editData.hire_date}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("hire_date", e.target.value)
                        }
                    />
                    <InputError message={errors.hire_date} className="mt-2" />
                </div>
                <div className="basic_salary">
                    <InputLabel
                        htmlFor="basic_salary"
                        value="Basic Salary"
                    />
                    <TextInput
                        type="number"
                        name="basic_salary"
                        defaultValue={editData.basic_salary}
                        className="mt-1 block w-full"
                        onChange={(e) => {
                            setData("basic_salary", e.target.value)
                        }}
                    />
                    <InputError message={errors.basic_salary} className="mt-2" />
                </div>
                <div className="image">
                    <InputLabel
                        htmlFor="image"
                        value="Image"
                    />
                    <TextInput
                        type="file"
                        name="image"
                        className="mt-1 block w-full"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setImagePreview(URL.createObjectURL(file));
                            }
                            setData("image", file as any)
                        }}
                    />
                    {
                        imagePreview ? (
                            <div className="mt-2 flex gap-4">
                                <img src={imagePreview} alt="image" className="w-20 h-auto" />
                                <Icon iconName="trash" className=" text-red-500 cursor-pointer" onClick={() => {
                                    setData("image", null);
                                    setImagePreview("");
                                }} />
                            </div>
                        ) : null
                    }
                    <InputError message={errors.image} className="mt-2" />
                </div>
                <div className="department">
                    <InputLabel
                        htmlFor="department_id"
                        value="Department"
                    />
                    <Select name="department_id"
                        onValueChange={(value) => {
                            const department = departments.find((department: departmentType) => department.id === Number(value));
                            setData('department_id', department ? department.id : 0);
                        }}
                        defaultValue={editData.department_id}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent className="mt-1">
                            {departments.map((department: departmentType) => (
                                <SelectItem
                                    key={department.id} value={String(department.id)}>{department.department_name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.department_id} className="mt-2" />
                </div>
                <div className="jobs-desks">
                    <InputLabel
                        htmlFor="job_desk_id"
                        value="Job Desk"
                    />
                    <Select name="job_desk_id"
                        onValueChange={(value) => {
                            const jobDesk = jobDesks.find((jobDesk) => jobDesk.id === Number(value));
                            setData('job_desk_id', jobDesk ? jobDesk.id : 0);

                        }}
                        defaultValue={editData.job_desk_id}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Job Desk" />
                        </SelectTrigger>
                        <SelectContent className="mt-1">
                            {jobDesks.map((jobDesk) => (
                                <SelectItem
                                    key={jobDesk.id} value={String(jobDesk.id)}>{jobDesk.job_title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.job_desk_id} className="mt-2" />
                </div>
                <div className="status">
                    <InputLabel
                        htmlFor="status"
                        value="Status"
                    />
                    <Switch
                        name="employment_status"
                        defaultChecked={editData.employment_status}
                        onCheckedChange={(checked) => {
                            setData("employment_status", checked as boolean);
                        }}
                    />
                    <InputError
                        message={errors.employment_status}
                    />
                </div>
            </div>
            <div className="button flex gap-x-4 mt-4">
                <Button type="submit" disabled={processing}>Save</Button>
                <DangerButton type="button">Cancel</DangerButton>
            </div>
        </form>
    );
}