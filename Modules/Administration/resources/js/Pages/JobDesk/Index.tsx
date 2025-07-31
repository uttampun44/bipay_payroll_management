import Authenticated from "@/Layouts/AuthenticatedLayout";
import JobDeskTopNavigation from "./Component/JobDeskTopNavigation";
import JobDeskTable from "./Component/JobDeskTable";

export default function Index() {
    return (
        <Authenticated>
            <JobDeskTopNavigation />
            
            <JobDeskTable />
        </Authenticated>
    )
}