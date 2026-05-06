"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/admin" },
    { name: "Usuarios", href: "/admin" },
    { name: "Panel Administrador", href: "/admin" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-black/60 backdrop-blur-xl border-r border-white/10 p-6">
      <h1 className="text-2xl font-bold text-white mb-10">Huracán Club</h1>

      <nav className="flex flex-col gap-3">
        {links.map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-xl transition ${
                active
                  ? "bg-red-600 text-white"
                  : "text-gray-300 hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto text-xs text-gray-400">Panel Administrador</div>
    </aside>
  );
}
