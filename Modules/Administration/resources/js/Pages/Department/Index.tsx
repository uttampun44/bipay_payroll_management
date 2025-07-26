import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DepartmentTable from "./Component/DepartmentTable";
import DepartmentDialog from "./Component/DepartmentDialog";
import { useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import { Head } from "@inertiajs/react";

export default function DepartmentIndex() {
    const [isOpen, setOpen] = useState(false);
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
            <DepartmentTable />
            <DepartmentDialog open={isOpen} setOpen={setOpen} />
        </AuthenticatedLayout>
    );
}
