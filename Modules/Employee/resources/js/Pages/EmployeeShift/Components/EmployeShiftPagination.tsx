import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/Components/ui/pagination";
import { Link, router, usePage } from "@inertiajs/react";
import { employeeShiftType } from "../types/employeeshift";

export default function EmployeePagination() {
    const employees = usePage().props.employeeShifts as employeeShiftType[] | undefined;
     
    return (
        <div className="pagination flex justify-end items-center my-4">
            <Pagination>
                <PaginationContent>
                    {employees.prev_page_url && (
                        <PaginationItem>
                            <PaginationPrevious
                                className="cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.get(employees.prev_page_url, {}, {
                                        preserveState: true,
                                        only: ['employees']
                                    });
                                }}
                            />
                        </PaginationItem>
                    )}
                    {employees?.links
                        .filter(link => link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;')
                        .map((link, index: number) => (
                            <PaginationItem key={index}>
                                <Link
                                    href={link.url || '#'}
                                    preserveState
                                    only={['employeesShifts']}
                                >
                                    <PaginationLink
                                        isActive={link.active}
                                        className={link.active ? 'bg-gray-300 font-bold' : ''}

                                    >
                                        {link.label}
                                    </PaginationLink>
                                </Link>
                            </PaginationItem>
                        ))}
                    {employees.next_page_url && (
                        <PaginationItem>
                            <PaginationNext
                                className="cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.get(employees.next_page_url, {}, {
                                        preserveState: true,
                                        only: ['employeesShifts']
                                    });
                                }}
                            />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    )
}