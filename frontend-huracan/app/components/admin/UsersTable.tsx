"use client";

import { useRouter } from "next/navigation";

export default function UsersTable({ users }: any) {
  const router = useRouter();

  if (!users.length) {
    return <p className="text-white">No hay usuarios</p>;
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow overflow-hidden">
      <table className="w-full text-left">
        {/* HEADER */}
        <thead className="bg-gray-100 text-gray-700 text-sm">
          <tr>
            <th className="p-4">Nombre</th>
            <th className="p-4">Apellido</th>
            <th className="p-4 text-center">Acciones</th>
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id} className="border-t hover:bg-gray-50 transition">
              {/* NOMBRE */}
              <td className="p-4 font-medium text-gray-800">{user.name}</td>

              {/* APELLIDO */}
              <td className="p-4 font-medium text-gray-800">{user.lastname}</td>

              {/* BOTÓN */}
              <td className="p-4 text-center">
                <button
                  onClick={() => router.push(`/admin/${user.id}`)}
                  className="bg-red-800 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-medium shadow"
                >
                  Ver perfil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
