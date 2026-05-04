"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "Usuarios", href: "/admin/users" },
  ];

  return (
    <aside className="hidden md:block bg-white/90 backdrop-blur-md w-64 p-6 shadow-md">
      <h1 className="text-3xl font-bold text-red-600 mb-10">Huracán Club</h1>

      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-3 rounded-xl transition ${
              pathname === link.href ? "bg-red-600" : "hover:bg-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="mt-16 text-sm text-gray-400">Panel Administrador</div>
    </aside>
  );
}
