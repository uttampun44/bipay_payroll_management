import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head} from "@inertiajs/react";
import DepartmentTable from "./Component/DepartmentTable";

export default function Index() {
   
    return (
        <AuthenticatedLayout>
               <Head title="Department" />
            <DepartmentTable />
        </AuthenticatedLayout>
    );
}
