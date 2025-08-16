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
                            Employee Code
                        </TableHead>
                        <TableHead className="text-center">
                            First Name
                        </TableHead>
                        <TableHead className="text-center">
                            Last Name
                        </TableHead>
                        <TableHead className="text-center">
                            Email
                        </TableHead>
                        <TableHead className="text-center">
                            Phone
                        </TableHead>
                        <TableHead className="text-center">
                            Date of Birth
                        </TableHead>
                        <TableHead className="text-center">
                            Gender
                        </TableHead>
                        <TableHead className="text-center">
                            Address
                        </TableHead>
                        <TableHead className="text-center">
                            Hire Date
                        </TableHead>
                        <TableHead className="text-center">
                            Department
                        </TableHead>
                        <TableHead className="text-center">
                            Job Desk
                        </TableHead>
                        <TableHead className="text-center">
                            Employment Status
                        </TableHead>
                        <TableHead className="text-center">
                            Basic Salary
                        </TableHead>
                         <TableHead className="text-center">
                            Action
                        </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="h-[200px] overflow-y-auto p-4 text-center">
                {[...Array(15)].map((_, index) => (
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