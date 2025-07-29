import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DepartmentDialog from "./Component/DepartmentDialog";
import { useState } from "react";
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbSeparator} from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import { Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/Components/ui/table";

interface Department {
    id: number;
    department_name: string;
    department_code: string;
    description: string;
    budget: string;
    status: boolean;
}

export default function DepartmentIndex({departments}: {departments: Department[]}) {
    const [isOpen, setOpen] = useState(false);
    const [isEditingMode, setEditingMode] = useState(false);
    const [departmentId, setDepartmentId] = useState<number | null>(null);
    const [editData, setEditData] = useState<Record<string, any>>({});
    const pathUrl = window.location.pathname;

    return (
        <AuthenticatedLayout>
            <Head title="Department" />
            <div className="header px-8 py-4">
                <div className="breadCrumb mb-4 mt-4 ">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    Dashboard
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink
                                    href="/components"
                                    className="capitalize"
                                >
                                    {pathUrl.split("/").join("")}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="row flex justify-between items-center">
                    <h6 className="text-2xl font-semibold text-gray-800">
                        Department
                    </h6>
                    <Button
                        className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        type="button"
                        onClick={() => {
                            setOpen(true);
                        }}
                    >
                        Add Department
                    </Button>
                </div>
            </div>
            <div
                className="deparment-table-container px-8 py-4 bg-white rounded-md"
                style={{ margin: "16px 32px" }}
            >
                <div className="text-search">
                    <TextInput placeholder="Search" className="w-1/2" />
                </div>
                <div className="departments my-3">
                    <h6 className="text-black text-lg font-semibold ">
                        Departments
                    </h6>
                </div>
                <Table>
                    <TableHeader className="bg-neutral-100">
                        <TableRow>
                            <TableHead className="text-center">ID</TableHead>
                            <TableHead className="text-center">
                                Department Name
                            </TableHead>
                            <TableHead className="text-center">
                                Department Code
                            </TableHead>
                            <TableHead className="text-center">
                                Description
                            </TableHead>
                            <TableHead className="text-center">
                                Budget
                            </TableHead>
                            <TableHead className="text-center">
                                Status
                            </TableHead>
                            <TableHead className="text-center">Edit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {departments.map((department) => (
                            <TableRow
                                key={department.id}
                                className="text-center"
                            >
                                <TableCell className="p-2">
                                    {department.id}
                                </TableCell>
                                <TableCell className="p-2">
                                    {department.department_name}
                                </TableCell>
                                <TableCell className="p-2">
                                    {department.department_code}
                                </TableCell>
                                <TableCell className="p-2">
                                    {department.description}
                                </TableCell>
                                <TableCell className="p-2">
                                    {department.budget}
                                </TableCell>
                                <TableCell className="p-2">
                                    {department.status}
                                </TableCell>
                                <TableCell className="p-2 text-green-700">
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            setEditingMode(true);
                                            setDepartmentId(department.id);
                                            setOpen(true);
                                            setEditData({
                                                department_name:
                                                    department.department_name,
                                                department_code:
                                                    department.department_code,
                                                description:
                                                    department.description,
                                                budget: department.budget,
                                                status: department.status,
                                            });
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <DepartmentDialog
                isOpen={isOpen}
                setOpen={setOpen}
                isEditingMode={isEditingMode ? true : false}
                departmentId={isEditingMode ? departmentId : (null as any)}
                editData={isEditingMode ? editData : (null as any)}
            />
        </AuthenticatedLayout>
    );
}
