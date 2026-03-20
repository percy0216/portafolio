"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/",         label: "Inicio" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact",  label: "Contacto" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/70 backdrop-blur dark:border-gray-800/70 dark:bg-gray-950/60">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Percy J.
        </Link>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
          className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors"
        >
          <span className="sr-only">Abrir menú</span>
          {menuOpen ? (
            /* X icon */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Links — desktop siempre visible, mobile condicional */}
        <ul
          id="navbar-menu"
          className={`
            absolute top-full left-0 w-full border-b border-gray-200/70 bg-white/95 backdrop-blur px-4 pb-4
            dark:border-gray-800/70 dark:bg-gray-950/95
            md:static md:w-auto md:border-none md:bg-transparent md:dark:bg-transparent md:p-0 md:backdrop-blur-none
            flex flex-col gap-1 md:flex-row md:items-center md:gap-1
            transition-all duration-200
            ${menuOpen ? "flex" : "hidden md:flex"}
          `}
        >
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block rounded-md px-3 py-2 text-sm font-medium transition-colors
                    ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}