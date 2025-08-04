import Authenticated from "@/Layouts/AuthenticatedLayout";
import JobDeskEditForm from "./Component/JobDeskEditForm";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import DangerButton from "@/Components/DangerButton";
import { usePage } from "@inertiajs/react";

type departmentType = {
    id: number;
    department_name: string;
}
export default function Edit() {
    
    const departmentsData = usePage().props.departments as departmentType[];
    const pathUrl = window.location.pathname;

   const jobDeskId = usePage().props.jobDesk.id;

   console.log(usePage().props);
    
    return (
        <Authenticated>
            <div className="breadCrumb mb-4 mt-4 flex justify-between items-center">
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
                <DangerButton
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    Back
                </DangerButton>
            </div>
             <div className="rounded-md bg-white shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Update Job Desk
                </h2>
            <JobDeskEditForm
                id={jobDeskId}
                departmentsData={departmentsData}
            />
             </div>    
        </Authenticated>
    )
}