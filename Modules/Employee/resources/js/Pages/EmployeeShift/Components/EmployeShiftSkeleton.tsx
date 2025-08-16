import { Skeleton } from "@/Components/ui/skeleton";

export default function EmployeeShiftSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 flex flex-col gap-4 mt-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            
                <div className="flex items-center gap-2 text-sm">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-full" />
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-full" />
                        <span className="font-medium">
                            <Skeleton className="h-4 w-full" />
                            <br />
                            <Skeleton className="h-4 w-full" />

                        </span>
                    </div>

                   <div className="flex items-center gap-2 text-sm">
                       <Skeleton className="w-4 h-4" />
                       <Skeleton className="h-4 w-full" />
                       <span className="font-medium">
                           <Skeleton className="h-4 w-full" />
                           <br />
                           <Skeleton className="h-4 w-full" />
                           
                    </span>
                   </div>
               </div>
            </div>
        </div>
    );
}