// @ts-nocheck
import Icon from "@/Components/Icon";
import TextInput from "@/Components/TextInput";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/Components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import useDebounce from "@/hooks/useDebounce";
import { Link, usePage, WhenVisible } from "@inertiajs/react";
import React, { useRef, useState } from "react";
import { jobDesks } from "../types/jobdesk";
import { striptag } from "@/utils/striptag";
import { Button } from "@/Components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { viewJobsDetails } from "../types/viewjobsdetails";
import JobViewDialog from "./JobViewDialog";
import DangerButton from "@/Components/DangerButton";
import { Skeleton } from "@/Components/ui/skeleton";
import JobConfirmBox from "./JobConfirmBox";

export default function JobDeskTable() {

    const [search, setSearch] = useState("");
    const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
    const [viewData, setViewData] = useState<viewJobsDetails | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const jobDesks = usePage().props.jobDesks as jobDesks[] | undefined;
    const jobDesksData = jobDesks?.data as jobDesks[];

    const debouncedSearch = useDebounce(search, 500);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className="overflow-x-auto mt-4">
            <WhenVisible
                data={jobDesksData as any}
                fallback={
                    <div className="flex flex-col space-y-3 bg-gray-600 p-4 rounded-md h-screen">
                        <Skeleton className="w-full h-full rounded-xl animate-pulse" />
                        <div className="space-y-2">
                            <Skeleton className="h-full animate-pulse" />
                            <Skeleton className="h-full animate-pulse" />
                        </div>
                    </div>
                }
            >
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
                        <TableBody className="h-[200px] overflow-y-auto p-4 text-center">
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
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).
                                                format(Number(jobDesk.minimum_salary))
                                            }
                                        </TableCell>
                                        <TableCell className="p-2">
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).
                                                format(Number(jobDesk.maximum_salary))
                                            }
                                        </TableCell>
                                        <TableCell className="p-2 line-clamp-2">
                                            {striptag(jobDesk.job_requirements)}
                                        </TableCell>
                                        <TableCell className="p-2 line-clamp-2">
                                            {striptag(jobDesk.job_responsibilities)}
                                        </TableCell>
                                        <TableCell className="p-2 text-center">
                                            <div className="flex justify-center">
                                                <Popover
                                                    open={openPopoverId === jobDesk.id}
                                                    onOpenChange={(open) => {
                                                        setOpenPopoverId(open ? jobDesk.id : null)
                                                        setViewData(jobDesk);
                                                    }}
                                                >
                                                    <PopoverTrigger>
                                                        <Icon
                                                            iconName="action"
                                                            variant="secondary"
                                                            className="w-full"
                                                        />
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-40">
                                                        <div className="flex flex-col gap-4 text-center">
                                                            <Button
                                                                variant="secondary"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setIsOpen(true);
                                                                    setViewData(jobDesk);
                                                                }}
                                                            >
                                                                View Job Details
                                                            </Button>
                                                            <Button
                                                                variant="secondary"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                }}
                                                            >
                                                                <Link
                                                                    href={route("job-desks.edit", { id: jobDesk.id })}
                                                                    className="text-sm"
                                                                >
                                                                    Edit Job Desk
                                                                </Link>
                                                            </Button>

                                                           <JobConfirmBox
                                                             id={jobDesk.id}
                                                           />
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>

                    <div className="viewDetailsDialog">
                        <JobViewDialog
                            isOpen={isOpen}
                            setOpen={() => {
                                setIsOpen(false);
                            }}
                            viewData={viewData}
                        />
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
            </WhenVisible>
        </div>
    )
}