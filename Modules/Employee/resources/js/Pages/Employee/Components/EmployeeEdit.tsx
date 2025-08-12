import DangerButton from "@/Components/DangerButton";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Button } from "@/Components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/Components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { employeType } from "../types/employe";
import { toast } from "sonner";

type EmployeeEditProps = {
    employeeId: number;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EmployeeEdit({ employeeId, isOpen, setOpen }: EmployeeEditProps) {
  
        const { data, setData, post: post, resetAndClearErrors, processing } = useForm<employeType>({
        employee_code: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        gender: "",
        phone: "",
        address: "",
        hire_date: "",
        department_id: 0,
        job_desk_id: 0,
        employment_status: false,
        basic_salary: 0,
        image: "",
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            post(route("employees.update", {id: employeeId}), {
                onSuccess: () => {
                    toast.success("Employee Added Successfully");
                    setOpen(false);
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
        <Dialog open={isOpen} onOpenChange={setOpen}>
            <DialogContent className="bg-white max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Add Employee</DialogTitle>
                </DialogHeader>
                <DialogDescription> This is the add employee </DialogDescription>
                <form onClick={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="employee_code">
                            <InputLabel
                                htmlFor="employee_code"
                                value="Employee Code"
                            />
                            <TextInput
                                type="text"
                                name="name"
                                value={data.employee_code}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("employee_code", e.target.value)
                                }
                                required
                            />
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
                                required
                            />
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
                                required
                            />
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
                                required
                            />
                        </div>
                        <div className="password">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                            />
                            <TextInput
                                type="text"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />

                        </div>
                        <div className="confirm_password">
                            <InputLabel
                                htmlFor="confirm_password"
                                value="Confirm Password"
                            />
                            <TextInput
                                type="text"
                                name="confirm_password"
                                value={data.confirm_password}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("confirm_password", e.target.value)
                                }
                                required
                            />
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
                                value={String(data.gender)}
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
                                required
                            />
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
                                required
                            />
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
                                required
                            />
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
                                onChange={(e) =>
                                    setData("basic_salary", e.target.value)
                                }
                                required                                
                            />
                        </div>
                        <div className="image">
                            <InputLabel
                                htmlFor="image"
                                value="Image"
                            />
                            <TextInput
                                type="file"
                                name="image"
                                value={data.image}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("image", e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="department">
                            <InputLabel
                                htmlFor="department_id"
                                value="Department"
                            />
                            <Select name="department_id"
                                onValueChange={(value) => {
                                   
                                    setData('department_id', value);
                                }}
                                value={String(data.department_id)}
                            >
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Department" />
                                </SelectTrigger>
                                <SelectContent className="mt-1">
                                    {/* {departmentsData.map((department) => (
                                        <SelectItem
                                            key={department.id} value={String(department.id)}>{department.department_name}</SelectItem>
                                    ))} */}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="jobs-desks">
                            <InputLabel
                                htmlFor="job_desk_id"
                                value="Job Desk"
                            />
                            <Select name="job_desk_id"
                                onValueChange={(value) => {
                                    setData('job_desk_id', value);
                                }}
                                value={String(data.job_desk_id)}
                            >
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Select Job Desk" />
                                </SelectTrigger>
                                <SelectContent className="mt-1">
                                    {/* {departmentsData.map((department) => (
                                        <SelectItem
                                            key={department.id} value={String(department.id)}>{department.department_name}</SelectItem>
                                    ))} */}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="button flex gap-x-4 mt-4">
                        <Button type="button">Save</Button>
                        <DangerButton type="submit"
                            onClick={() => setOpen(false)}
                        >Cancel</DangerButton>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}