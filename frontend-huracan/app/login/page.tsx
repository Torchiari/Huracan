"use client";

import { useState, useContext } from "react";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async (e?: any) => {
    if (e) e.preventDefault();

    const res = await login({ email, password });

    const payload = JSON.parse(atob(res.access_token.split(".")[1]));
    setUser(payload);

    router.push("/dashboard");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center md:justify-end px-6"
      style={{
        backgroundImage: "url('/fondo2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl md:mr-80">
        <h1 className="text-2xl font-semibold text-red-800 mb-6">
          Iniciar sesión
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <label className="block text-sm text-black mb-1">Email</label>
          <input
            type="email"
            placeholder="Ingresa tu email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
            text-black placeholder-gray-400
            focus:outline-none focus:border-red-700 transition"
          />

          <label className="block text-sm text-black mb-1">Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 
            text-black placeholder-gray-400
            focus:outline-none focus:border-red-700 transition"
          />

          <button
            type="submit"
            className="w-full mt-6 bg-red-800 text-white py-2 rounded-full 
            hover:bg-red-900 transition"
          >
            Ingresar
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          ¿No tenés cuenta?{" "}
          <Link
            href="/register"
            className="text-red-800 font-medium hover:underline"
          >
            Registrate
          </Link>
        </p>
      </div>
    </div>
  );
}
