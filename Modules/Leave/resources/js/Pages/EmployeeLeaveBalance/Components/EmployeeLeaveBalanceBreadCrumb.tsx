import DangerButton from "@/Components/DangerButton";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import React from "react";

export default function EmployeeLeaveBalanceBreadCrumb() {
    const pathUrl = window.location.pathname;
    return (
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
    );
}