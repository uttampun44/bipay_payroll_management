// @ts-nocheck
import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@headlessui/react";
import { router, useForm, usePage } from "@inertiajs/react";
import { employeeTypeEditResponse, employeType } from "../types/employe";
import { toast } from "sonner";
import InputError from "@/Components/InputError";
import useToggle from "@/hooks/useToggle";
import { Switch } from "@/Components/ui/switch";
import Icon from "@/Components/Icon";
import { useState } from "react";
import { departmentType } from "../types/department";
import { jobDeskType } from "../types/jobdesk";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export default function EmployeeEdit() {
    const [isToggle, setToggle] = useToggle();
    const [confirmPassword, setConfirmPassword] = useToggle();
    const [imagePreview, setImagePreview] = useState<string>("");

    const editData = usePage().props.employee as employeeTypeEditResponse;
    
    const departments = usePage().props.departments as departmentType;
    const jobDesks = usePage().props.jobDesks as jobDeskType;

    const { data, setData, post, resetAndClearErrors, processing, errors } = useForm<employeType & { _method: string }>({
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
        image: null,
        _method: 'PUT'
    })

    console.log('editData:', editData.image);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data:', data);
        
        try {
            post(route("employees.update", {id: editData.id}), {
                forceFormData: true,
                preserveScroll: true,
                onSuccess: () => {
                    toast.success("Employee Updated Successfully");
                    resetAndClearErrors();
                },
                onError: (errors) => {
                    console.log('Form errors:', errors);
                    toast.error("Employee Update Failed");
                }
            });
        } catch (error) {
            console.error('Submit error:', error);
            throw new Error("Failed to submit form: " + error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div className="employee_code">
                    <InputLabel
                        htmlFor="employee_code"
                        value="Employee Code"
                    />
                    <TextInput
                        type="text"
                        name="employee_code"
                        value={data.employee_code}
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
                        value={data.first_name} 
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
                        value={data.last_name}
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
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) =>
                            setData("email", e.target.value)
                        }
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="password relative">
                    <InputLabel htmlFor="password" value="New Password (leave blank to keep current)" />
                    <TextInput
                        type={isToggle ? "text" : "password"}
                        name="password"
                        autoComplete="new-password"
                        value={data.password}
                        placeholder="Leave blank to keep current password"
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
                    <InputLabel htmlFor="confirm_password" value="Confirm New Password" />
                    <TextInput
                        type={confirmPassword ? "text" : "password"}
                        name="confirm_password"
                        autoComplete="new-password"
                        value={data.password_confirmation}
                        placeholder="Confirm new password"
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
                    <Select 
                        name="gender"
                        onValueChange={(value) => {
                            setData('gender', value);
                        }}
                        value={data.gender}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent className="mt-1">
                            <SelectItem key="Male" value="Male">Male</SelectItem>
                            <SelectItem key="Female" value="Female">Female</SelectItem>
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
                        value={data.phone} 
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
                        value={data.address}
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
                        value={data.hire_date} 
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
                        value={data.basic_salary}
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
                                setData("image", file as any);
                            }
                        }}
                    />
                    {
                        imagePreview ? (
                            <div className="mt-2 flex gap-4 items-center">
                                <img src={imagePreview} alt="New image preview" className="w-20 h-20 object-cover rounded" />
                                <Icon iconName="trash" className="text-red-500 cursor-pointer" onClick={() => {
                                    setData("image", null);
                                    setImagePreview("");
                                    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                                    if (fileInput) fileInput.value = '';
                                }} />
                            </div>
                        ) : editData.image ? (
                            <div className="mt-2 flex gap-4 items-center">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage src={'/storage/' + editData.image} alt="Current image" />
                                    <AvatarFallback>
                                        {editData.first_name?.[0]}{editData.last_name?.[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-sm text-gray-600">Current image</span>
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
                    <Select 
                        name="department_id"
                        onValueChange={(value) => {
                            setData('department_id', Number(value));
                        }}
                        value={String(data.department_id)}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent className="mt-1">
                            {departments.map((department: departmentType) => (
                                <SelectItem
                                    key={department.id} 
                                    value={String(department.id)}
                                >
                                    {department.department_name}
                                </SelectItem>
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
                    <Select 
                        name="job_desk_id"
                        onValueChange={(value) => {
                            setData('job_desk_id', Number(value));
                        }}
                        value={String(data.job_desk_id)} 
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select Job Desk" />
                        </SelectTrigger>
                        <SelectContent className="mt-1">
                            {jobDesks.map((jobDesk: jobDeskType) => (
                                <SelectItem
                                    key={jobDesk.id} 
                                    value={String(jobDesk.id)}
                                >
                                    {jobDesk.job_title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.job_desk_id} className="mt-2" />
                </div>

                <div className="status">
                    <InputLabel
                        htmlFor="status"
                        value="Employment Status"
                    />
                    <div className="flex items-center space-x-2 mt-1">
                        <Switch
                            name="employment_status"
                            checked={data.employment_status}
                            onCheckedChange={(checked) => {
                                setData("employment_status", checked as boolean);
                            }}
                        />
                        <span className="text-sm">
                            {data.employment_status ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                    <InputError message={errors.employment_status} className="mt-2" />
                </div>
            </div>
            
            <div className="button flex gap-x-4 mt-4">
                <Button type="submit" disabled={processing}>
                    {processing ? 'Updating...' : 'Update Employee'}
                </Button>
                <DangerButton type="button"
                 onClick={() => {
                    router.get(route('employees.index'));
                }}
                >Cancel</DangerButton>
            </div>
        </form>
    );
}