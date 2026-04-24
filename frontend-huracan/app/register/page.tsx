"use client";

import { useState } from "react";
import { register } from "@/services/auth";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    dni: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e?: any) => {
    if (e) e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const { confirmPassword, ...data } = form;

    await register(data);

    setSuccess(true);

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
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
          Registrar nuevo usuario
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">Nombre</label>
            <input
              name="name"
              placeholder="Ingrese su nombre"
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Apellido</label>
            <input
              name="lastname"
              placeholder="Ingrese su apellido"
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">DNI</label>
            <input
              name="dni"
              placeholder="Ingrese su DNI"
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Celular</label>
            <input
              name="phone"
              placeholder="Ingrese su número de celular"
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Email</label>
            <input
              name="email"
              placeholder="Ingrese su email"
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              onChange={handleChange}
              className="input"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar contraseña"
              onChange={handleChange}
              className="input"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-red-800 text-white py-2 rounded-full hover:bg-red-900 transition"
          >
            Registrarse
          </button>
        </form>

        {success && (
          <p className="text-green-600 text-sm mt-4 text-center">
            Cuenta creada con éxito ✔
          </p>
        )}

        <p className="text-sm text-gray-600 mt-6 text-center">
          ¿Ya tenés cuenta?{" "}
          <Link
            href="/login"
            className="text-red-800 font-medium hover:underline"
          >
            Iniciá sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
