import { Skeleton } from "@/Components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

export default function EmployeeSkeleton() {
    return (
         <Table className="h-[200px] overflow-y-auto">
            <TableHeader className="bg-neutral-100 p-4 w-full">
                    <TableRow>
                        <TableHead className="text-center">
                            ID
                        </TableHead>
                        <TableHead className="text-center">
                            Shift Name
                        </TableHead>
                        <TableHead className="text-center">
                            Shift Code
                        </TableHead>
                        <TableHead className="text-center">
                            Start Time
                        </TableHead>
                        <TableHead className="text-center">
                            Start End
                        </TableHead>
                        <TableHead className="text-center">
                            Break Duration
                        </TableHead>
                        <TableHead className="text-center">
                            Working Hours
                        </TableHead>
                        <TableHead className="text-center">
                            Overtime Rate
                        </TableHead>
                        <TableHead className="text-center">
                            Night Shift Allowance
                        </TableHead>
                        <TableHead className="text-center">
                            Weekend Rate
                        </TableHead>
                        <TableHead className="text-center">
                            Status
                        </TableHead>
                         <TableHead className="text-center">
                            Edit
                        </TableHead>
                        <TableHead className="text-center">
                            Delete
                        </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="h-[200px] overflow-y-auto p-4 text-center">
                {[...Array(13)].map((_, index) => (
                    <TableRow key={index}>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-8 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-24 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-32 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-20 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-40 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-24 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-24 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-36 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-4 w-36 mx-auto" />
                        </TableCell>
                        <TableCell className="p-2">
                            <Skeleton className="h-8 w-8 mx-auto" />
                        </TableCell>
                         <TableCell className="p-2">
                            <Skeleton className="h-8 w-8 mx-auto" />
                        </TableCell>
                         <TableCell className="p-2">
                            <Skeleton className="h-8 w-8 mx-auto" />
                        </TableCell>
                         <TableCell className="p-2">
                            <Skeleton className="h-8 w-8 mx-auto" />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}