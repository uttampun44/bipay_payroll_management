import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ShiftTopNavigation from "./Component/ShiftTopNavigation";
import ShiftTable from "./Component/ShiftTable";

export default function Index(){
    return (
        <Authenticated>
            <Head title="Shift" />
            <ShiftTopNavigation />
            <ShiftTable />
        </Authenticated>
    )
}