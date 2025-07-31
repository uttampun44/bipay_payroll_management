import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import JobDeskForm from "./Component/JobDeskForm";

export default function Create() {

    const pathUrl = window.location.pathname;

    return (
        <Authenticated>
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
            <div className="rounded-md bg-white shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    Create Job Desk
                </h2>
              <JobDeskForm />
            </div>
        </Authenticated>
    )
}