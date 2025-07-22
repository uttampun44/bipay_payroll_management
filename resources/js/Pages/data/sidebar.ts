import { IconType } from "@/Components/Icon";

type sidebarLinksType = {
    name: string;
    href: string;
    icon: IconType;
}

export const sidebarLinks:sidebarLinksType[] = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: 'Dashboard' as const
    }
]