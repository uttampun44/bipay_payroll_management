import { Link } from "@inertiajs/react";
import Icon from "./Icon";
import { sidebarLinks } from "@/Pages/data/sidebar";


export default function Sidebar() {
  return (
    <aside className="bg-neutral-100 w-60 absolute top-22 left-0 h-[calc(100vh-90px)] border-r-2 border-neutral-200">
        <div className="sidebar-menu text-lg font-normal p-4">
            <ul>
                {
                    sidebarLinks.map((link) => (
                        <li key={link.name} >
                            <Link href={link.href} className="flex items-center">
                                <Icon iconName={link.icon} className="w-5 h-5" />
                                <span className="ml-2">{link.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </aside>
  )
}