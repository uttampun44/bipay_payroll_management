import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import ShiftDialog from "./ShiftDialog";
import { useRef, useState } from "react";
import { ShiftDialogRef } from "../types/shiftRef";

export default function ShiftTopNavigation() {
    const pathUrl = window.location.pathname;
    const [isOpen, setOpen] = useState(false);
    const shiftDialogRef = useRef<ShiftDialogRef>(null)
    return (
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
                        Shift
                    </h6>
                    <Button
                        className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          shiftDialogRef.current?.open();
                        }}
                    >
                        Add Shift
                    </Button>
                </div>
                <ShiftDialog 
                  ref={shiftDialogRef}
                  isOpen={isOpen}   
                  setOpen={setOpen}
                />
            </div>
    );
}