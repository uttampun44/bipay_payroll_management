import Sidebar from "@/Components/Sidebar";
import TopNavigation from "@/Components/TopNavigation";
import { PropsWithChildren, ReactNode} from "react";

export default function Authenticated({
  
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
        <>
            <TopNavigation />
            <Sidebar />
            <main className="bg-neutral-100">{children}</main>
        </>
    );
}
