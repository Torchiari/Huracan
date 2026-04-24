"use client";

import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex bg-[#f8f7f4]">
      {/* SIDEBAR */}
      <aside
        className={`bg-white w-64 p-6 shadow-md fixed md:static h-full z-50 transition-transform ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <h2 className="text-xl font-semibold text-red-800 mb-8">Panel</h2>

        <nav className="flex flex-col gap-4 text-gray-700">
          <Link href="/dashboard" onClick={() => setOpen(false)}>
            Inicio
          </Link>

          <Link href="/dashboard/profile" onClick={() => setOpen(false)}>
            Mis datos
          </Link>

          <Link href="/dashboard/files" onClick={() => setOpen(false)}>
            Certificados
          </Link>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <div className="flex-1 md:ml-0">
        {/* HEADER */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <button onClick={() => setOpen(!open)} className="md:hidden">
            ☰
          </button>

          <span className="text-gray-700 text-sm">{user.email}</span>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
