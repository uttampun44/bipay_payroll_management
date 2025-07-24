import Sidebar from "@/Components/Sidebar";
import TopNavigation from "@/Components/TopNavigation";
import { PropsWithChildren, ReactNode} from "react";

export default function Authenticated({
  
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
       <div className="min-h-screen bg-neutral-100">
            <TopNavigation />
            <Sidebar />
         
            <main className="ml-60 bg-neutral-100 min-h-screen">
                {children}
            </main>
        </div>
    );
}
