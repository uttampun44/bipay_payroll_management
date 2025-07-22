import { Link, usePage } from '@inertiajs/react'
import clsx from 'clsx';
import React from 'react'

export default function Header() {

    const pathname = window.location.pathname;

  return (
     <nav className="flex justify-end gap-4 p-4 max-w-[1440px] mx-auto w-full">
      <Link
        href="/"
        className={clsx(
          "px-4 py-2 rounded",
          pathname === "/" ? "bg-blue-500 text-white" : "text-gray-700"
        )}
      >
        Login
      </Link>
      <Link
        href="/register"
        className={clsx(
          "px-4 py-2 rounded",
          pathname === "/register" ? "bg-blue-500 text-white" : "text-gray-700"
        )}
      >
        Register
      </Link>
    </nav>
  )
}
