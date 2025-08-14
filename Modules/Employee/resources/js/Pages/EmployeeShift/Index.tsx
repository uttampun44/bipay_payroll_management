import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import EmployeeShiftDialog from "./Components/EmployeeShiftDialog";
import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Head } from "@inertiajs/react";

export default function Index() {
    const pathUrl = window.location.pathname;
    const employeeShiftDialogRef = useRef<any>(null);

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
                <div className="row flex justify-between items-center">
                     <div className="tabs">
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="account">Day Shift</TabsTrigger>
                                <TabsTrigger value="password">Night Shifts</TabsTrigger>
                                <TabsTrigger value="evening">Evening Shifts</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">Make changes to your account here.</TabsContent>
                            <TabsContent value="password">Change your password here.</TabsContent>
                             <TabsContent value="evening">This is evening</TabsContent>
                        </Tabs>
                    </div>
                    <div className="modal-employee flex gap-3">
                        <Button className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            type="button"
                            onClick={() => {
                                console.log(employeeShiftDialogRef.current);
                                employeeShiftDialogRef.current?.handleOpen();
                            }}
                        >
                            Add Employee Shifts
                        </Button>
                    </div>
                </div>
            </div>
            <EmployeeShiftDialog
                ref={employeeShiftDialogRef}
            />
        </Authenticated>
    )
}