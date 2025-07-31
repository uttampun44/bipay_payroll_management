import TextInput from "@/Components/TextInput";
import { Skeleton } from "@/Components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { Button } from "@headlessui/react";
import { router, usePage, WhenVisible } from "@inertiajs/react";
import React, { useEffect, useMemo, useState } from "react";
import DepartmentDialog from "./DepartmentDialog";
import useDebounce from "@/hooks/useDebounce";
import DepartmentTopNavigation from "./DepartmentTopNavigation";
import { toast } from "sonner";
import { Badge } from "@/Components/ui/badge";
import Icon from "@/Components/Icon";

interface Department {
    id: number;
    department_name: string;
    department_code: string;
    description: string;
    budget: string;
    status: number;
}

export default function DepartmentTable() {

    const departments = usePage().props.departments as Department[];

    const [isEditingMode, setEditingMode] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [departmentId, setDepartmentId] = useState<number | null>(null);
    const [editData, setEditData] = useState<Record<string, any>>({});
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    const filteredDepartments = useMemo(() => {
        if (!search.trim()) {
            return departments;
        }

        return departments.filter(
            (department) =>
                department.department_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                department.department_code
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                department.description
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                department.budget.toLowerCase().includes(search.toLowerCase())
        );
    }, [departments, search]);

    useEffect(() => {
        if (debouncedSearch.trim() === "") {
            router.get(
                route("departments.index"),
                {},
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            );
        } else {
            router.get(
                route("departments.index"),
                { search: debouncedSearch },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        if (filteredDepartments.length === 0) {
                            toast.error("No departments found matching your search criteria.");
                        } else {
                            toast.dismiss();
                            toast.success("Departments data fetched successfully.");
                        }
                    }
                }
            );
        }
    }, [debouncedSearch]);


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <React.Fragment>
            <DepartmentTopNavigation
                isOpen={isOpen}
                setOpen={setOpen}
            />
            <WhenVisible
                data={filteredDepartments as any}
                fallback={
                    <div className="flex flex-col space-y-3 bg-white p-4 rounded-md h-screen">
                        <Skeleton className="h-full w-full rounded-xl animate-pulse" />
                        <div className="space-y-2">
                            <Skeleton className="h-full w-full animate-pulse" />
                            <Skeleton className="h-full w-full animate-pulse" />
                        </div>
                    </div>
                }
            >
                <div
                    className="deparment-table-container px-8 py-4 bg-white rounded-md"
                    style={{ margin: "16px 32px" }}
                >
                    <div className="text-search">
                        <TextInput
                            placeholder="Search"
                            className="w-1/2"
                            name="search"
                            type="text"
                            autoComplete="off"
                            value={search}
                            onChange={(e) => {
                                handleSearch(e);
                            }}
                        />

                    </div>
                    <div className="departments my-3">
                        <h6 className="text-black text-lg font-semibold ">
                            Departments
                        </h6>
                    </div>

                    <Table>
                        <TableHeader className="bg-neutral-100">
                            <TableRow>
                                <TableHead className="text-center">
                                    ID
                                </TableHead>
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
                                <TableHead className="text-center">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredDepartments.map((department) => (
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
                                       {department.status === 0 ? 
                                       ( <Badge variant={"secondary"} >InActive</Badge>)
                                      :(
                                          <Badge variant={"info"}>Active</Badge>
                                      )}
                                    </TableCell>
                                    <TableCell className="p-2 text-green-700 text-center">
                                        {/* <Button
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
                                        </Button> */}
                                        <Icon iconName="action" className=" h-5" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </WhenVisible>
            <DepartmentDialog
                isOpen={isOpen}
                setOpen={setOpen}
                isEditingMode={isEditingMode ? true : false}
                departmentId={isEditingMode ? departmentId : (null as any)}
                editData={isEditingMode ? editData : (null as any)}
            />
        </React.Fragment>
    );
}