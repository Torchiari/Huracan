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

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "dni" || name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "");
      setForm({ ...form, [name]: onlyNumbers });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isFormValid =
    form.name &&
    form.lastname &&
    form.dni &&
    form.phone &&
    form.email &&
    form.password &&
    form.confirmPassword;

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    if (!isFormValid) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Ingresá un email válido");
      return;
    }

    if (form.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      setLoading(true);

      const { confirmPassword, ...data } = form;

      await register(data);

      setSuccess(true);

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "No se pudo registrar el usuario",
      );
    } finally {
      setLoading(false);
    }
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
          <input
            name="name"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange}
            className="input"
          />

          <input
            name="lastname"
            placeholder="Apellido"
            value={form.lastname}
            onChange={handleChange}
            className="input"
          />

          <input
            name="dni"
            placeholder="DNI"
            value={form.dni}
            onChange={handleChange}
            className="input"
          />

          <input
            name="phone"
            placeholder="Celular"
            value={form.phone}
            onChange={handleChange}
            className="input"
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="input"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
            className="input"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-red-800 text-white py-2 rounded-full hover:bg-red-900 transition disabled:opacity-50"
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </form>

        {error && (
          <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
        )}

        {success && (
          <p className="text-green-600 text-sm mt-4 text-center">
            Cuenta creada con éxito ✔ Redirigiendo...
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
