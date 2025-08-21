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
                href: "/administrations/departments",
                icon: "department",
            },
            {
                name: "Job Desk",
                href: "/administrations/job-desks",
                icon: "jobDesk",
            },
            {
                name: "Shift",
                href: "/administrations/shifts",
                icon: "shift",
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
                name: "Employee",
                href: "/employees/employees",
                icon: "employee",
            },
            {
                name: "Employee Shift",
                href: "/employees/employee-shifts",
                icon: "shift",
            },
            {
                name: "Appointment",
                href: "/employees/appointments",
                icon: "appointment",
            },
            {
                name: "Attendance",
                href: "/attendances",
                icon: "attendance",
            }
        ],
    },
    {
        id: 4,
        moduleName: "Leave",
        name: "Leave",
        href: "#",
        icon: "leave",
        subNavigation: [
            {
                name: "Leave Type",
                href: "/leave/leaves-types",
                icon: "leave",
            },
            {
                name: "Employee Leave Balance",
                href: "/leave/employee-leave-balances",
                icon: "leave",
            }
        ],  
    },
    {
        id: 5,
        moduleName: "Settings",
        name: "Settings",
        href: "#",
        icon: "settings",
        subNavigation: [
            {
                name: "Role",
                href: "/roles",
                icon: "department",
            },
            {
                name: "Permission",
                href: "/permissions",
                icon: "jobDesk",
            },
            
        ],
    }
];
