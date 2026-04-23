"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* LOGO */}
      <div className="text-xl font-bold tracking-wide">Huracán Ciclista</div>

      {/* LINKS */}
      <div className="flex gap-6 items-center">
        <Link href="/login" className="hover:text-gray-300 transition">
          Iniciar sesión
        </Link>

        <Link
          href="/register"
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
}
