import TextInput from "@/Components/TextInput";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/Components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

export default function DepartmentTable() {
    return (
        <div className="deparment-table-container px-8 py-4 bg-white rounded-md" style={{ margin: "16px 32px" }}>
            <div className="text-search">
                <TextInput placeholder="Search" className="w-1/2" />
            </div>
            <div className="departments my-3">
                <h6 className="text-black text-lg font-semibold ">Departments</h6>
            </div>
            <Table>
               
                <TableHeader className="bg-neutral-100">
                    <TableRow >
                        <TableHead className="text-center">ID</TableHead>
                        <TableHead className="text-center">Department Name</TableHead>
                        <TableHead className="text-center">Department Code</TableHead>
                        <TableHead className="text-center">Description</TableHead>
                        <TableHead className="text-center">Budget</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="text-center">Edit</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="text-center">
                        <TableCell className="p-2">1</TableCell>
                        <TableCell className="p-2">John Doe</TableCell>
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
    )
}