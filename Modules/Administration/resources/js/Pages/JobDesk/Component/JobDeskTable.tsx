// @ts-nocheck
import Icon from "@/Components/Icon";
import TextInput from "@/Components/TextInput";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/Components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import useDebounce from "@/hooks/useDebounce";
import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { jobDesks } from "../types/jobdesk";
import { striptag } from "@/utils/striptag";

export default function JobDeskTable() {

    const [search, setSearch] = useState("");

    const jobDesks = usePage().props.jobDesks as jobDesks[] | undefined;

    const jobDesksData = jobDesks?.data as jobDesks[];

    const debouncedSearch = useDebounce(search, 500);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleAction = (id: number) => {
        alert(id);
    }
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
            <div className="overflow-x-auto mt-4">
                <Table className="h-[500px] overflow-y-auto">
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
                    <TableBody className="h-[200px]">
                        {
                            jobDesksData.map((jobDesk, index) => (
                                <TableRow key={jobDesk.id}>
                                    <TableCell className="p-2">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell className="p-2">
                                        {jobDesk.department.department_name}
                                    </TableCell>
                                    <TableCell className="p-2">
                                        {jobDesk.job_title}
                                    </TableCell>
                                    <TableCell className="p-2">
                                        {jobDesk.job_code}
                                    </TableCell>
                                    <TableCell className="p-2 line-clamp-2">
                                        {striptag(jobDesk.job_description)}
                                    </TableCell>
                                    <TableCell className="p-2">
                                        {jobDesk.minimum_salary}
                                    </TableCell>
                                    <TableCell className="p-2">
                                        {jobDesk.maximum_salary}
                                    </TableCell>
                                    <TableCell className="p-2 line-clamp-2">
                                        {striptag(jobDesk.job_requirements)}
                                    </TableCell>
                                    <TableCell className="p-2 line-clamp-2">
                                        {striptag(jobDesk.job_responsibilities)}
                                    </TableCell>
                                    <TableCell className="p-2 text-center">
                                        <div className="flex justify-center">
                                            <Icon
                                                iconName="action"
                                                onClick={() => {
                                                    handleAction(jobDesk.id)
                                                }}
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

            <div className="pagination my-2">
                <Pagination>
                    <PaginationContent>
                        
                        {jobDesks.prev_page_url && (
                            <PaginationItem>
                                <PaginationPrevious href={jobDesks.prev_page_url} />
                            </PaginationItem>
                        )}
                        {jobDesks.links
                            .filter(link => link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;')
                            .map((link, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href={link.url || '#'}
                                        isActive={link.active}
                                        className={link.active ? 'bg-gray-300 font-bold' : ''}
                                    >
                                        {link.label}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                        {jobDesks.next_page_url && (
                            <PaginationItem>
                                <PaginationNext href={jobDesks.next_page_url} />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>

            </div>
        </div>
    )
}