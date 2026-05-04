"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getUserById, changeRole } from "@/services/admin";

export default function UserDetailPage() {
  const params = useParams();
  const id = params?.id;

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
    const confirmChange = confirm(
      `¿Seguro que querés cambiar el rol de ${user.name}?`,
    );

    if (!confirmChange) return;

    const newRole = user.role === "admin" ? "user" : "admin";

    await changeRole(id, newRole);

    alert("Rol actualizado correctamente");

    loadUser();
  };

  if (!user) {
    return <p className="text-white">Cargando...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto text-white">
      {/* 🔙 VOLVER */}
      <button
        onClick={() => router.push("/admin")}
        className="mb-6 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
      >
        ← Volver
      </button>

      <h1 className="text-3xl font-bold mb-6">{user.name}</h1>

      {/* 🧾 DATOS */}
      <div className="bg-white/80 text-black p-6 rounded-xl space-y-2 shadow">
        <p>
          <b>Email:</b> {user.email}
        </p>
        <p>
          <b>DNI:</b> {user.dni}
        </p>
        <p>
          <b>Teléfono:</b> {user.phone}
        </p>

        <p className="mt-4">
          <b>Rol:</b> {user.role}
        </p>

        <button
          onClick={handleRoleChange}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Cambiar Rol
        </button>
      </div>
    </div>
  );
}
