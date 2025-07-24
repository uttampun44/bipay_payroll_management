import { Link } from "@inertiajs/react";
import Icon from "./Icon";
import { sidebarLinks } from "@/Pages/data/sidebar";
import useToggle from "@/hooks/useToggle";
import { Button } from "@headlessui/react";

export default function Sidebar() {
    const { isToggle, toggle } = useToggle(false);
    const { isToggle: isSubMenuOpen, toggle: toggleSubMenu } = useToggle(false);

    return (
        <aside
            className={`
                bg-neutral-100 absolute top-22 left-0 
               h-full border-r-2 border-neutral-200
                transition-all duration-300 ease-in-out p-4
                ${isToggle ? "w-20" : "w-60"}
            `}
        >
        
            <div className="sidebar-menu text-lg font-normal px-4">
                <ul className="space-y-2">
                    {sidebarLinks.map((link) => (
                        <li key={link.name}>
                            {link.subNavigation ? (
                                <div>
                                    <Button
                                        onClick={toggleSubMenu}
                                        className="w-full flex items-center justify-between p-2 hover:bg-neutral-200 rounded-lg"
                                    >
                                        <div className="flex items-center">
                                            <Icon
                                                iconName={link.icon}
                                                className="w-5 h-5"
                                            />
                                            {!isToggle && (
                                                <span className="ml-2">
                                                    {link.name}
                                                </span>
                                            )}
                                        </div>
                                        {!isToggle && (
                                            <Icon
                                                iconName={
                                                    isSubMenuOpen
                                                        ? "arrowUp"
                                                        : "arrowDown"
                                                }
                                                className="w-4 h-4"
                                            />
                                        )}
                                    </Button>
                                    {isSubMenuOpen && !isToggle && (
                                        <ul className="pl-7 mt-2 space-y-2">
                                            {link.subNavigation.map((subLink) => (
                                                <li key={subLink.name}>
                                                    <Link
                                                        href={subLink.href}
                                                        className="flex items-center p-2 hover:bg-neutral-200 rounded-lg"
                                                    >
                                                        {subLink.icon && (
                                                            <Icon
                                                                iconName={subLink.icon}
                                                                className="w-4 h-4"
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
                                    className="flex items-center p-2 hover:bg-neutral-200 rounded-lg"
                                >
                                    <Icon
                                        iconName={link.icon}
                                        className="w-5 h-5"
                                    />
                                    {!isToggle && (
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