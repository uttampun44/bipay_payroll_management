import Authenticated from "@/Layouts/AuthenticatedLayout";
import Embed from "quill/blots/embed";
import EmployeeEdit from "./Components/EmployeeEdit";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import DangerButton from "@/Components/DangerButton";

export default function Edit() {
    const pathUrl = window.location.pathname;

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
                    Edit Employee
                </h2>
               <EmployeeEdit />
            </div>
        </Authenticated>
    )
}