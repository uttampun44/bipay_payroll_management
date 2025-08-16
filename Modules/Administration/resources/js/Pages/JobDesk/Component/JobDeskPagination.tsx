// @ts-nocheck
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/Components/ui/pagination";
import { Link, router, usePage } from "@inertiajs/react";
import { jobDesks } from "../types/jobdesk";

export default function JobDeskPagination() {
    const jobDesks = usePage().props.jobDesks as jobDesks[] | undefined;

    return (
        <Pagination>
            <PaginationContent>
                {jobDesks.prev_page_url && (
                    <PaginationItem>
                        <PaginationPrevious
                           className="cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                router.get(jobDesks.prev_page_url, {}, {
                                    preserveState: true,
                                    only: ['jobDesks']
                                });
                            }}
                        />
                    </PaginationItem>
                )}
                {jobDesks.links
                    .filter(link => link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;')
                    .map((link, index) => (
                        <PaginationItem key={index}>
                            <Link
                                href={link.url || '#'}
                                preserveState
                                only={['jobDesks']}
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
                {jobDesks.next_page_url && (
                    <PaginationItem>
                        <PaginationNext
                            className="cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                router.get(jobDesks.next_page_url, {}, {
                                    preserveState: true,
                                    only: ['jobDesks']
                                });
                            }}
                        />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    )
}