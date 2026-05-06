"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getUserById, changeRole } from "@/services/admin";

export default function UserDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (id) loadUser();
  }, [id]);

  const loadUser = async () => {
    const data = await getUserById(id);
    setUser(data);
  };

  const handleRoleChange = async () => {
    if (!confirm("¿Cambiar rol?")) return;

    const newRole = user.role === "admin" ? "user" : "admin";
    await changeRole(id, newRole);
    loadUser();
  };

  if (!user) return <p className="text-white">Cargando...</p>;

  const roleLabel = user.role === "admin" ? "Administrador" : "Usuario";

  const certificados = user.files?.filter((f: any) => f.type === "certificado");

  const ficha = user.files?.find((f: any) => f.type === "ficha_medica");

  const handleDownload = async (url: string, filename: string) => {
    const response = await fetch(url);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const handleDelete = async (fileId: number) => {
    const confirmDelete = confirm("¿Eliminar archivo?");

    if (!confirmDelete) return;

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/files/${fileId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      loadUser();
    } catch (error) {
      console.error(error);
      alert("Error al eliminar archivo");
    }
  };

  return (
    <div className="text-white">
      {/* 🔙 */}
      <button
        onClick={() => router.back()}
        className="mb-4 text-sm text-gray-300 hover:text-white"
      >
        ← Volver
      </button>

      {/* 🧑 HEADER + ADMIN MINI */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">{user.name}</h1>

        {/* 🔥 ADMIN DISCRETO */}
        <div className="flex items-center gap-3 text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {roleLabel}
          </span>

          <button
            onClick={handleRoleChange}
            className="bg-red-800 hover:bg-red-700 text-white px-3 py-1 rounded-md text-xs"
          >
            Cambiar
          </button>
        </div>
      </div>

      {/* 📊 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 🧾 DATOS */}
        <div className="bg-white rounded-2xl p-6 shadow text-gray-800">
          <h2 className="font-bold text-lg mb-4 text-gray-900">
            Datos personales
          </h2>

          <div className="space-y-2 text-sm md:text-base">
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>DNI:</b> {user.dni}
            </p>
            <p>
              <b>Teléfono:</b> {user.phone}
            </p>
          </div>
        </div>

        {/* 📁 ARCHIVOS */}
        <div className="bg-white rounded-2xl p-6 shadow text-gray-800">
          <h2 className="font-bold text-lg mb-4 text-gray-900">Archivos</h2>

          {/* CERTIFICADOS */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Certificados</h3>

            {certificados?.length ? (
              certificados.map((file: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 bg-gray-100 p-3 rounded mb-2"
                >
                  <span className="text-sm text-gray-800">{file.filename}</span>

                  <div className="flex gap-3 text-sm">
                    <a
                      href={file.path}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      Ver
                    </a>

                    <button
                      onClick={() => handleDownload(file.path, file.filename)}
                      className="text-green-600 hover:underline"
                    >
                      Descargar
                    </button>
                    <button
                      onClick={() => handleDelete(file.id)}
                      className="text-red-600 hover:underline"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-sm">No hay certificados</p>
            )}
          </div>

          {/* FICHA MÉDICA */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Ficha médica</h3>

            {ficha ? (
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 bg-gray-100 p-3 rounded">
                <span className="text-sm text-gray-800">{ficha.filename}</span>

                <div className="flex gap-3 text-sm">
                  <a
                    href={ficha.path}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Ver
                  </a>

                  <a
                    href={ficha.path}
                    download
                    className="text-green-600 hover:underline"
                  >
                    Descargar
                  </a>
                </div>
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No hay ficha médica</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
