import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import EmployeeTable from "./Components/EmployeeTable";

export default function Index() {
    return (
     <AuthenticatedLayout>
            <Head title="Employee" />
            <div className="header px-8 py-10">
                <div className="breadCrumb mb-4">
                   
                </div>
                <div className="row flex justify-between items-center">
                    <h6 className="text-2xl font-semibold text-gray-800">Employee</h6>
                    <div className="modal-employee flex gap-3">
                        <Button className=" text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                            Add Employee
                        </Button>
                        <Button className="bg-white text-black px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                            Invite
                        </Button>
                    </div>
                </div>
            </div>
            <EmployeeTable />
        </AuthenticatedLayout>
    );
}
