import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmployeeShiftDialog from "./Components/EmployeeShiftDialog";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Head, router, usePage } from "@inertiajs/react";
import { employeeShiftType, shiftType } from "./types/employeeshift";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import EmployeePagination from "./Components/EmployeShiftPagination";
import TextInput from "@/Components/TextInput";
import useDebounce from "@/hooks/useDebounce";

export default function Index() {
    const pathUrl = window.location.pathname;
    const employeeShiftDialogRef = useRef<any>(null);
    const shifts = usePage().props.shifts as shiftType[];
    const employeeShiftsData = usePage().props.employeeShifts.data as employeeShiftType;
   
    const employeeShifts = Array.isArray(employeeShiftsData) ? employeeShiftsData : [];
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearch = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearch) {
            router.get(route(route().current() || ""), { search: searchTerm }, {
                preserveState: true,
                replace: true,
            });
        }
    }, [debouncedSearch, searchTerm]);
    return (
        <Authenticated>
            <Head title="Employee Shifts" />
            <div className="header px-8 py-4">
                <div className="breadCrumb mb-4 mt-4">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/components" className="capitalize">
                                    {pathUrl.split("/").join("")}
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="row flex justify-end items-center">
                    <div className="modal-employee flex gap-3">
                        <Button className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            type="button"
                            onClick={() => {
                                employeeShiftDialogRef.current?.handleOpen();
                            }}
                        >
                            Add Employee Shifts
                        </Button>
                    </div>
                </div>
            </div>
            <div className="employee-shifts bg-white p-4 px-8 py-4 rounded-md" style={{ margin: "16px 32px" }}>
                <div className="serach mb-4">
                    <TextInput placeholder="Search employee shift" className="w-1/2"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />
                </div>
                <Tabs defaultValue={shifts[0].id.toString()} className={`w-[400px] ${shifts.length > 1 ? "mb-4" : ""}`}>
                    {shifts.map((shift) => (
                        <TabsList key={shift.id} className="ml-3">
                            <TabsTrigger value={shift.id.toString()}>{shift.shift_name}</TabsTrigger>
                        </TabsList>
                    ))}
                    {
                        shifts.map((employeeShift) => {
                            const shiftEmployeeShifts = employeeShifts.filter(
                                (es) => es.shift.id === employeeShift.id
                            );

                            return (

                                <TabsContent value={employeeShift.id.toString()} key={employeeShift.id}
                                >
                                    <div className="grid grid-cols-3 gap-4 mt-4">
                                        {
                                            shiftEmployeeShifts.map((employeeShift) => (
                                                <Card key={employeeShift.id}>
                                                    <CardHeader>
                                                        <CardTitle>{employeeShift.employee.first_name}{employeeShift.employee.employee_code}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <CardDescription>
                                                            <p>{employeeShift.shift.shift_name}</p>
                                                            <p>{employeeShift.start_date}</p>
                                                            <p>{employeeShift.end_date}</p>
                                                        </CardDescription>
                                                    </CardContent>
                                                    <CardFooter>
                                                        <Button
                                                            variant="secondary"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                            }}
                                                        >
                                                            sad
                                                        </Button>
                                                        <Button
                                                            variant="destructive"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                            }}
                                                        >
                                                            sd
                                                        </Button>
                                                    </CardFooter>
                                                </Card>
                                            ))
                                        }
                                    </div>
                                </TabsContent>
                            )
                        })
                    }
                </Tabs>
            </div>
            <EmployeeShiftDialog
                ref={employeeShiftDialogRef}
            />
            <EmployeePagination />
        </Authenticated>
    )
}