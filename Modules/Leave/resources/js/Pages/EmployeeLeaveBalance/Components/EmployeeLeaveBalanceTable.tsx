import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/Components/ui/table";

export default function EmployeeLeaveBalanceTable() {
    return (
        <Table>
            <TableHeader className="bg-neutral-100">
                <TableRow>
                    <TableHead>S.No.</TableHead>
                    <TableHead>Employee</TableHead>
                    <TableHead>Leave Type</TableHead>
                    <TableHead>Allocated Days</TableHead>
                    <TableHead>Used Days</TableHead>
                    <TableHead>Carried Forward Days</TableHead>
                    <TableHead>Remaining Days</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>

                </TableRow>
            </TableBody>
        </Table>
    );
}