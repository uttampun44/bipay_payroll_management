import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AppointmentTable from "./Components/AppointmentTable";

export default function Index() {

      const pathUrl = window.location.pathname;
    return (
       <AuthenticatedLayout>
            <Head title="Appointment" />
            <div className="header px-8 py-4">
                <div className="breadCrumb mb-4 mt-4 ">
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
                    <h6 className="text-2xl font-semibold text-gray-800">
                        Appointments
                    </h6>
                    <div className="modal-employee flex gap-3">
                        <Button className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Add Appointment
                        </Button>
                        <Button className="bg-white text-black px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                            Invite
                        </Button>
                    </div>
                </div>
            </div>
            <AppointmentTable />
        </AuthenticatedLayout>
    )
}