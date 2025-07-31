import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";
import React from "react";

export default function JobDeskTopNavigation() {

    const pathUrl = window.location.pathname;
    return (
        <React.Fragment>
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
                        Job Desk
                    </h6>
                    <Button
                        className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        type="button"
                        onClick={() => {
                           router.visit("/administrations/job-desks/create", {method: "get"});
                        }}
                    >
                        Add Job Desk
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}