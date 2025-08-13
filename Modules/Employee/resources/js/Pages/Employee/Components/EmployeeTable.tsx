import TextInput from "@/Components/TextInput";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Link, usePage, WhenVisible } from "@inertiajs/react";
import { employeeTypeResponse } from "../types/employe";
import EmployeeSkeleton from "./EmployeeSkeleton";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { useRef, useState } from "react";
import Icon from "@/Components/Icon";
import { Button } from "@/Components/ui/button";
import EmployeeConfirmBox from "./EmployeeConfirmBox";
import EmployeePagination from "./EmployeePagination";
import { Badge } from "@/Components/ui/badge";
import DangerButton from "@/Components/DangerButton";

export default function EmployeeTable() {
    
    const employeeConfirmBoxRef = useRef<any>(null);
    const employees = usePage().props.employees as employeeTypeResponse[] | undefined;
    // @ts-ignore
    const employeesData = Array.isArray(employees?.data) ? employees?.data : [];
    const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);

    return (
        <div className="employe-table-container px-8 py-4 bg-white rounded-md" style={{ margin: "16px 32px" }}>
            <div className="text-search">
                <TextInput placeholder="Search" className="w-1/2" />
            </div>
            <div className="employee my-3">
                <h6 className="text-black text-lg font-semibold ">Employee</h6>
            </div>
            <WhenVisible
                data={employees as any}
                fallback={<EmployeeSkeleton />}
            >
                <Table>
                    <TableHeader className="bg-neutral-100">
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Employee Code</TableHead>
                            <TableHead>First Name</TableHead>
                            <TableHead>Last Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Date of Birth</TableHead>
                            <TableHead>Gender</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead>Hire Date</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Job Desk</TableHead>
                            <TableHead>Employment Status</TableHead>
                            <TableHead>Salary</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            employeesData.map((employee: employeeTypeResponse, index: number) => (
                                <TableRow key={employee.id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{employee.employee_code}</TableCell>
                                    <TableCell>{employee.first_name}</TableCell>
                                    <TableCell>{employee.last_name}</TableCell>
                                    <TableCell>{employee.email}</TableCell>
                                    <TableCell>{employee.phone}</TableCell>
                                    <TableCell>{employee.hire_date}</TableCell>
                                    <TableCell>{employee.gender}</TableCell>
                                    <TableCell>{employee.address}</TableCell>
                                    <TableCell>{employee.hire_date}</TableCell>
                                    <TableCell>{employee.department.department_name}</TableCell>
                                    <TableCell>{employee.job_desk.job_title}</TableCell>
                                    <TableCell>{employee.employment_status === 1 ? (
                                        <Badge variant="success">Active</Badge>
                                    ) : (
                                        <Badge variant="destructive">Inactive</Badge>
                                    )}</TableCell>
                                    <TableCell>{new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    }).format(Number(employee.basic_salary))}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-center">
                                            <Popover
                                                open={openPopoverId === employee.id}
                                                onOpenChange={(open) => {
                                                    setOpenPopoverId(open ? employee.id : null)
                                                    // @ts-ignore
                                                    // setViewData(jobDesk);
                                                }}
                                            >
                                                <PopoverTrigger>
                                                    <Icon
                                                        iconName="action"
                                                        className="w-full"
                                                    />
                                                </PopoverTrigger>
                                                <PopoverContent className="w-40">
                                                    <div className="flex flex-col gap-4 text-center">

                                                        <Button
                                                            variant="secondary"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                            }}
                                                        >
                                                            <Link
                                                                href={route("employees.edit", { id: employee.id })}
                                                                className="text-sm"
                                                            >
                                                                Edit Employee
                                                            </Link>
                                                        </Button>
                                                        <DangerButton
                                                         onClick={(e) => {
                                                             e.stopPropagation();
                                                             employeeConfirmBoxRef.current.handleOpen(employee.id);
                                                         }}
                                                        >
                                                         Delete Employee
                                                        </DangerButton>
                                                        <EmployeeConfirmBox
                                                            id={employee.id as number}
                                                            ref={employeeConfirmBoxRef}
                                                        />
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </WhenVisible>

            <EmployeePagination />
        </div>
    );
}
