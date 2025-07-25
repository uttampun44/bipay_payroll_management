import Sidebar from "@/Components/Sidebar";
import TopNavigation from "@/Components/TopNavigation";
import { PropsWithChildren, ReactNode} from "react";

export default function Authenticated({
  
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {

    return (
       <div className="h-screen bg-neutral-100 overflow-hidden">
      <TopNavigation />

      <div className="flex h-[calc(100%-90px)]">
        <Sidebar />

        <main className="ml-60 mt-20 flex-1 bg-neutral-100 p-4 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
    );
}
