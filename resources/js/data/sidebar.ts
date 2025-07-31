import { IconType } from "@/Components/Icon";

type sidebarLinksType = {
    id: number;
    moduleName?: string;
    name: string;
    href?: string;
    icon: IconType;
    subNavigation?: {
        name: string;
        href: string;
        icon?: IconType;
    }[];
};

export const sidebarLinks: sidebarLinksType[] = [
    {   
        id: 1,
        moduleName: "Dashboard",
        name: "Dashboard",
        href: "/dashboard",
        icon: "dashboard" as const,
    },
    {
        id: 2,
        moduleName: "Administration",
        name: "Administration",
        href: "#",
        icon: "administration",
        subNavigation: [
            {
                name: "Department",
                href: "/departments",
                icon: "department",
            },
            {
                name: "Job Desk",
                href: "/job-desks",
                icon: "jobDesk",
            },
            {
                name: "Salary",
                href: "/salaries",
            },
        ],
    },
    {    id: 3,
        moduleName: "Employee",
        href: "#",
        name: "Employee",
        icon: "employee",
        subNavigation: [
            {
                name: "All Employee",
                href: "/employees",
            },
            {
                name: "Appointment",
                href: "/appointments",
                icon: "appointment",
            }
        ],
    },
];
