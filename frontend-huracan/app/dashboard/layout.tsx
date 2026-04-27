"use client";

import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { FaUser, FaFileAlt, FaHome, FaSignOutAlt } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, setUser } = useContext(AuthContext);
  console.log("USER:", user);
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.replace("/");
  };

  if (!user) return null;

  const linkClass = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-red-800 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <div className="min-h-screen flex bg-[#f8f7f4]">
      {/* SIDEBAR */}
      <aside
        className={`bg-white w-64 p-6 shadow-md fixed md:static h-full z-50 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-semibold text-red-800 mb-8">
          Panel usuario
        </h2>

        <nav className="flex flex-col gap-3 text-sm">
          <Link
            href="/dashboard"
            className={linkClass("/dashboard")}
            onClick={() => setOpen(false)}
          >
            <FaHome /> Inicio
          </Link>

          <Link
            href="/dashboard/profile"
            className={linkClass("/dashboard/profile")}
            onClick={() => setOpen(false)}
          >
            <FaUser /> Mis datos
          </Link>

          <Link
            href="/dashboard/files"
            className={linkClass("/dashboard/files")}
            onClick={() => setOpen(false)}
          >
            <FaFileAlt /> Certificados
          </Link>
        </nav>

        <div className="mt-10">
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-700 hover:text-red-900 transition text-sm"
          >
            <FaSignOutAlt /> Cerrar sesión
          </button>
        </div>
      </aside>

      {/* CONTENIDO */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-white shadow-sm px-4 md:px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl font-bold text-black"
          >
            ☰
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:gap-2">
            <span className="text-2xl font-semibold text-red-800">
              Perfil de usuario de:
            </span>

            {user && (
              <span className="text-2xl font-semibold text-black">
                {user.name} {user.lastname}
              </span>
            )}
          </div>
        </header>
        {/* MAIN */}
        <main className="p-4 md:p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
