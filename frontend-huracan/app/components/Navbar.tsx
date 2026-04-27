"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.replace("/");
  };

  return (
    <nav className="w-full bg-[#f8f7f4] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center min-h-[60px]">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo3.png"
            alt="Logo Huracán"
            width={300}
            height={60}
            className="object-contain h-auto"
            priority
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition">
            Inicio
          </Link>

          {user && (
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-2 hover:text-black transition"
            >
              <User size={20} />
              Mi Perfil
            </Link>
          )}

          {!user ? (
            <>
              <Link href="/login" className="hover:text-black transition">
                Iniciar sesión
              </Link>

              <Link
                href="/register"
                className="border border-gray-300 px-4 py-2 rounded-full hover:border-black hover:text-black transition"
              >
                Registrarse
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="border border-gray-300 px-4 py-2 rounded-full text-white bg-red-800 hover:border-black hover:text-black transition"
            >
              Cerrar sesión
            </button>
          )}
        </div>

        {/* HAMBURGUESA */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
          <span className="w-6 h-[2px] bg-gray-700"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 text-sm">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Inicio
          </Link>

          {user && (
            <Link href="/dashboard/profile" onClick={() => setMenuOpen(false)}>
              Mi Perfil
            </Link>
          )}

          {!user ? (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                Iniciar sesión
              </Link>

              <Link href="/register" onClick={() => setMenuOpen(false)}>
                Registrarse
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="text-left"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
