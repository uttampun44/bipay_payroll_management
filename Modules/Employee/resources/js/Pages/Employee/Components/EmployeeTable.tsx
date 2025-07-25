import TextInput from "@/Components/TextInput";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/Components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";

export default function EmployeeTable() {
    return (
        <div className="employe-table-container px-8 py-4 bg-white rounded-md" style={{ margin: "16px 32px" }}>
            <div className="text-search">
                <TextInput placeholder="Search" className="w-1/2" />
            </div>
            <div className="employee my-3">
                <h6 className="text-black text-lg font-semibold ">Employee</h6>
            </div>
            <Table>
               
                <TableHeader className="bg-neutral-100">
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Employee Code</TableHead>
                        <TableHead>First Name</TableHead>
                        <TableHead>Last Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Date of Birth</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Hire Date</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Job Desk</TableHead>
                        <TableHead>Manager</TableHead>
                        <TableHead>Employment Status</TableHead>
                        <TableHead>Salary</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>John Doe</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="pagination flex justify-end items-center">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" className="bg-blue-500" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" className="bg-blue-500" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}
