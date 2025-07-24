import { IconType } from "@/Components/Icon";

type sidebarLinksType = {
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
        moduleName: "Dashboard",
        name: "Dashboard",
        href: "/dashboard",
        icon: "Dashboard" as const,
    },
    {
        moduleName: "Employee",
        href: "#",
        name: "Employee",
        icon: "Employee",
        subNavigation: [
            {
                name: "All Employee",
                href: "/employees",
                icon: "Employee",
            },
            {
                name: "Appointment",
                href: "/appointments",
                icon: "appointment",
            }
        ],
    },
];
