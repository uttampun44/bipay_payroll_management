import TextInput from "@/Components/TextInput";
import { Table, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import { useState } from "react";

export default function ShiftTable() {

    const [search, setSearch] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <div className="deparment-table-container px-8 py-4 bg-white rounded-md" style={{ margin: "16px 32px" }}>
            <div className="text-search mb-4">
                <TextInput
                    placeholder="Search"
                    className="w-1/2"
                    name="search"
                    type="text"
                    autoComplete="off"
                    value={search}
                    onChange={(e) => {
                        handleSearch(e);
                    }}
                />
            </div>
            <Table className="h-[500px] overflow-y-auto">
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
                            Break Duration
                        </TableHead>
                        <TableHead className="text-center">
                            Working Hours
                        </TableHead>
                        <TableHead className="text-center">
                            Overtime Rate
                        </TableHead>
                        <TableHead className="text-center">
                            Job Requrirements
                        </TableHead>
                        <TableHead className="text-center">
                            Night Shift Allowance
                        </TableHead>
                        <TableHead className="text-center">
                            Weekend Rate
                        </TableHead>
                        <TableHead className="text-center">
                            Action
                        </TableHead>
                    </TableRow>
                </TableHeader>
              
            </Table>
        </div>
    )
}