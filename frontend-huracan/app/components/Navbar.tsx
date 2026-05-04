"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Home, User, FileText, Shield, LogOut } from "lucide-react";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    router.replace("/");
  };

  const handleProfileClick = () => {
    if (!user) return;

    if (user.role === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard/profile");
    }
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
            <button
              onClick={handleProfileClick}
              className="flex items-center gap-2 hover:text-black transition"
            >
              <User size={20} />
              Mi Perfil
            </button>
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
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
        >
          <span
            className={`absolute w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-100" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* MOBILE DRAWER ROOT */}
      <div className="fixed top-0 left-0 w-full h-screen z-[9999] md:hidden pointer-events-none">
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm 
    bg-white/95 backdrop-blur-xl shadow-2xl 
    border-l border-gray-200
    transform transition-transform duration-300 ease-in-out 
    pointer-events-auto
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* HEADER */}
          <div className="px-5 py-4 border-b flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Huracán Ciclista Club
              </span>
              <span className="text-lg font-bold text-red-800">Menú</span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-gray-500 hover:text-black transition"
            >
              ✕
            </button>
          </div>

          {/* USER INFO */}
          {user && (
            <div className="px-5 py-4 border-b flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-800 text-white flex items-center justify-center font-bold">
                {user.name?.[0]}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {user.name} {user.lastname}
                </p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          )}

          {/* MENU */}
          <div className="flex flex-col gap-2 p-4 text-sm">
            {/* ITEM */}
            <button
              onClick={() => {
                router.push("/");
                setMenuOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl 
        hover:bg-gray-100 text-gray-700 transition group"
            >
              <Home
                size={18}
                className="text-red-700 group-hover:scale-110 transition"
              />
              Inicio
            </button>

            {user && (
              <>
                <button
                  onClick={() => {
                    handleProfileClick();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl 
            hover:bg-gray-100 text-gray-700 transition group"
                >
                  <User
                    size={18}
                    className="text-red-700 group-hover:scale-110 transition"
                  />
                  Mi Perfil
                </button>

                {user.role !== "admin" && (
                  <button
                    onClick={() => {
                      router.push("/dashboard/files");
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl 
              hover:bg-gray-100 text-gray-700 transition group"
                  >
                    <FileText
                      size={18}
                      className="text-red-700 group-hover:scale-110 transition"
                    />
                    Certificados
                  </button>
                )}

                {user.role === "admin" && (
                  <button
                    onClick={() => {
                      router.push("/admin");
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl 
              hover:bg-gray-100 text-gray-700 transition group"
                  >
                    <Shield
                      size={18}
                      className="text-red-700 group-hover:scale-110 transition"
                    />
                    Panel Administrador
                  </button>
                )}

                <div className="border-t my-3"></div>

                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl 
            text-red-700 hover:bg-red-50 transition group"
                >
                  <LogOut
                    size={18}
                    className="group-hover:scale-110 transition"
                  />
                  Cerrar sesión
                </button>
              </>
            )}

            {!user && (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100"
                >
                  Iniciar sesión
                </Link>

                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100"
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>

          {/* FOOTER */}
          <div className="mt-auto p-4 text-xs text-gray-400 text-center border-t">
            © Huracán Club
          </div>
        </div>
      </div>
    </nav>
  );
}
