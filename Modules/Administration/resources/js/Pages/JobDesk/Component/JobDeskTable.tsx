
import Icon from "@/Components/Icon";
import TextInput from "@/Components/TextInput";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/Components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/ui/table";
import useDebounce from "@/hooks/useDebounce";
import { Link, router, usePage, WhenVisible } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { jobDesks } from "../types/jobdesk";
import { striptag } from "@/utils/striptag";
import { Button } from "@/Components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import { viewJobsDetails } from "../types/viewjobsdetails";
import JobViewDialog from "./JobViewDialog";
import DangerButton from "@/Components/DangerButton";
import JobConfirmBox from "./JobConfirmBox";
import JobTableSkeleton from "./JobTableSkeleton";
import JobDeskPagination from "./JobDeskPagination";

export default function JobDeskTable() {

    const filters = usePage().props.filters

    // @ts-ignore
    const [search, setSearch] = useState(filters?.search || "");
    const [openPopoverId, setOpenPopoverId] = useState<number | null>(null);
    const [viewData, setViewData] = useState<viewJobsDetails | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const jobDesks = usePage().props.jobDesks as jobDesks[] | undefined;

    // @ts-ignore
    const jobDesksData = jobDesks?.data as jobDesks[];

    const debouncedSearch = useDebounce(search, 500);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        if (debouncedSearch) {
            router.get(route(route().current() || ""), { search: search }, {
                preserveState: true,
                replace: true,
            });
        }
    }, [debouncedSearch, search]);

    return (
        <div className="overflow-x-auto mt-4">

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
                <WhenVisible
                    data={jobDesksData as any}
                    fallback={
                        <JobTableSkeleton />
                    }
                >
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
                                                        // @ts-ignore
                                                        setViewData(jobDesk);
                                                    }}
                                                >
                                                    <PopoverTrigger>
                                                        <Icon
                                                            iconName="action"
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
                                                                    // @ts-ignore
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
                </WhenVisible>
                <div className="viewDetailsDialog">
                    <JobViewDialog
                        isOpen={isOpen}
                        setOpen={() => {
                            setIsOpen(false);
                        }}
                        viewData={viewData || null }
                    />
                </div>

                <div className="pagination my-2">
                  <JobDeskPagination />
                </div>
            </div>

        </div>
    )
}