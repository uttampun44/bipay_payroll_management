import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmployeeShiftDialog from "./Components/EmployeeShiftDialog";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Head, router, usePage, WhenVisible } from "@inertiajs/react";
import { employeeShiftType, shiftType } from "./types/employeeshift";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import EmployeePagination from "./Components/EmployeShiftPagination";
import TextInput from "@/Components/TextInput";
import useDebounce from "@/hooks/useDebounce";
import { Badge } from "@/Components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import EmployeeShiftSkeleton from "./Components/EmployeShiftSkeleton";

export default function Index() {
    const pathUrl = window.location.pathname;
    const employeeShiftDialogRef = useRef<any>(null);
    const shifts = usePage().props.shifts as shiftType[];

    // @ts-ignore
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
                <WhenVisible
                    data={employeeShifts as any}
                    fallback={<EmployeeShiftSkeleton />}
                >
                    <Tabs defaultValue={shifts[0].id.toString()} className="w-full">
                    {shifts.map((shift) => (
                        <TabsList key={shift.id} className="ml-3">
                            <TabsTrigger value={shift.id.toString()}>{shift.shift_name}</TabsTrigger>
                        </TabsList>
                    ))}

                    {shifts.map((employeeShift) => {
                        const shiftEmployeeShifts = employeeShifts.filter((es) => es.shift.id === employeeShift.id)
                        return (
                            <TabsContent value={employeeShift.id.toString()} key={employeeShift.id}>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                                    {shiftEmployeeShifts.map((employeeShift) => (
                                        <Card
                                            key={employeeShift.id}
                                            className="group hover:shadow-xl transition-all duration-300 border-2-gray-100 shadow-md bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-indigo-50"
                                        >
                                            <CardHeader className="pb-4">
                                                <div className="flex items-center gap-3 mb-3">

                                                    <Avatar className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-600">
                                                        <AvatarImage src={'/storage/' + employeeShift.image} />
                                                        <AvatarFallback className="bg-transparent text-white font-semibold">
                                                            {employeeShift.employee.first_name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1">
                                                        <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                                                            {employeeShift.employee.first_name}
                                                        </CardTitle>
                                                        <Badge variant="secondary" className="mt-1 bg-gray-100 text-gray-700 hover:bg-gray-200">
                                                            <User className="w-3 h-3 mr-1" />
                                                            {employeeShift.employee.employee_code}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </CardHeader>

                                            <CardContent className="space-y-4">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Clock className="w-4 h-4 text-blue-500" />
                                                    <span className="font-medium">{employeeShift.shift.shift_name}</span>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Calendar className="w-4 h-4 text-green-500" />
                                                        <span className="text-gray-600">Start:</span>
                                                        <span className="font-medium text-gray-900">
                                                            {new Date(employeeShift.start_date).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Calendar className="w-4 h-4 text-red-500" />
                                                        <span className="text-gray-600">End:</span>
                                                        <span className="font-medium text-gray-900">
                                                            {new Date(employeeShift.end_date).toLocaleDateString("en-US", {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            })}
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <CardFooter className="pt-4 border-t border-gray-100">
                                                <div className="w-full flex justify-between items-center">
                                                    {employeeShift.is_current == true ? (
                                                        <Badge variant="success" > Active </Badge>
                                                    ) : (
                                                        <Badge variant="outline" > Inactive </Badge>
                                                    )}
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                </div>
                            </TabsContent>
                        )
                    })}
                </Tabs>
                </WhenVisible>
            </div>
            <EmployeeShiftDialog
                ref={employeeShiftDialogRef}
            />
            <EmployeePagination />
        </Authenticated>
    )
}