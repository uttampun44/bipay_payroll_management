import { Link } from "@inertiajs/react";
import Icon from "./Icon";
import { sidebarLinks } from "@/data/sidebar";
import useToggle from "@/hooks/useToggle";
import { Button } from "@headlessui/react";
import { useState } from "react";

export default function Sidebar() {
   
    const [isCollapsed, setIsCollapsed] = useState(false); // sidebar collapse
    const [openSubmenus, setOpenSubmenus] = useState<number[]>([]); // stores IDs of open submenu

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    const toggleSubMenu = (id: number) => {
        setOpenSubmenus((prevOpen) =>
            prevOpen.includes(id)
                ? prevOpen.filter((openId) => openId !== id)
                : [...prevOpen, id]
        );
    };

    return (
        <aside
            className={`
                bg-neutral-100 fixed top-[90px] left-0 
               h-full border-r-2 border-neutral-200
                transition-all duration-300 ease-in-out p-4
                ${isCollapsed ? "w-20" : "w-60"}
            `}
        >
        
            <div className="sidebar-menu text-lg font-normal px-4">
                <ul className="space-y-2">
                    {sidebarLinks.map((link) => (
                        <li key={link.name}>
                            {link.subNavigation ? (
                                <div>
                                    <Button
                                        onClick={() => toggleSubMenu(link.id)}
                                        className="w-full flex items-center justify-between p-2 hover:bg-neutral-200 rounded-lg"
                                    >
                                        <div className="flex items-center">
                                            <Icon
                                                iconName={link.icon}
                                                className="w-5 h-5"
                                            />
                                            {!isCollapsed && (
                                                <span className="ml-2 text-base font-semibold">
                                                    {link.name}
                                                </span>
                                            )}
                                        </div>
                                        {!isCollapsed && (
                                            <Icon
                                                iconName={
                                                    isCollapsed
                                                        ? "arrowUp"
                                                        : "arrowDown"
                                                }
                                                className="w-4 h-4"
                                            />
                                        )}
                                    </Button>
                                    {openSubmenus.includes(link.id) && !isCollapsed && (
                                        <ul className="pl-7 mt-2 space-y-2">
                                            {link.subNavigation.map((subLink) => (
                                                <li key={subLink.name}>
                                                    <Link
                                                        href={subLink.href}
                                                        className="flex items-start gap-x-3 p-1.5 text-sm font-normal hover:bg-neutral-200 rounded-lg"
                                                    >
                                                        {subLink.icon && (
                                                            <Icon
                                                                iconName={subLink.icon}
                                                                className="w-2 h-2"
                                                            />
                                                        )}
                                                        <span className="ml-2">
                                                            {subLink.name}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={link.href || "#"}
                                    className="flex items-center p-2 text-base font-semibold hover:bg-neutral-200 rounded-lg"
                                >
                                    <Icon
                                        iconName={link.icon}
                                        className="w-5 h-5"
                                    />
                                    {!isCollapsed && (
                                        <span className="ml-2">
                                            {link.name}
                                        </span>
                                    )}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}