import Icon from "@/Components/Icon";
import TextInput from "@/Components/TextInput";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import useDebounce from "@/hooks/useDebounce";
import React, { useState } from "react";

export default function JobDeskTable() {

    const [search, setSearch] = useState("");

    const debouncedSearch = useDebounce(search, 500);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
       
            <div className="deparment-table-container px-8 py-4 bg-white rounded-md" style={{ margin: "16px 32px" }}>
                <div className="text-search">
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
                <Table className="mt-4">
                    <TableHeader className="bg-neutral-100">
                        <TableRow>
                            <TableHead className="text-center">
                                ID
                            </TableHead>
                            <TableHead className="text-center">
                                Department Name
                            </TableHead>    
                            <TableHead className="text-center">
                                Job Title
                            </TableHead>
                            <TableHead className="text-center">
                                Job Code
                            </TableHead>
                            <TableHead className="text-center">
                                Job Description
                            </TableHead>
                            <TableHead className="text-center">
                                Min Salary
                            </TableHead>
                            <TableHead className="text-center">
                                Max Salary
                            </TableHead>
                            <TableHead className="text-center">
                               Job Requrirements
                            </TableHead>
                            <TableHead className="text-center">
                                Job Responsibilities
                            </TableHead>
                            <TableHead className="text-center">
                                Action
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow className="text-center">
                            <TableCell className="p-2">
                                1
                            </TableCell>
                            <TableCell className="p-2">
                                Department Name
                            </TableCell>
                            <TableCell className="p-2">
                                <Icon
                                  iconName="action"
                                 className="w-5 h-5"
                                 />
                            </TableCell>    
                        </TableRow>
                    </TableBody>
                </Table>
            </div>    
    )
}