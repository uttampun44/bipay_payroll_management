import { Skeleton } from "@/Components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

export default function JobTableSkeleton() {
    return (
      
        <Table className="h-[500px] overflow-y-auto">
            <TableHeader className="bg-neutral-100 p-4 w-full">
                <TableRow>
                    <TableHead className="text-center">ID</TableHead>
                    <TableHead className="text-center">Department Name</TableHead>
                    <TableHead className="text-center">Job Title</TableHead>
                    <TableHead className="text-center">Job Code</TableHead>
                    <TableHead className="text-center">Job Description</TableHead>
                    <TableHead className="text-center">Min Salary</TableHead>
                    <TableHead className="text-center">Max Salary</TableHead>
                    <TableHead className="text-center">Job Requirements</TableHead>
                    <TableHead className="text-center">Job Responsibilities</TableHead>
                    <TableHead className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="h-[200px] overflow-y-auto p-4 text-center">
                {[...Array(10)].map((_, index) => (
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
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}