"use client";

import { useRouter } from "next/navigation";

export default function UsersTable({ users }: any) {
  const router = useRouter();

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow text-black overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-600 text-black">
          <tr>
            <th className="p-4 text-left">Nombre</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Rol</th>
            <th className="p-4 text-center">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user: any) => (
            <tr key={user.id} className="border-b hover:bg-gray-50 transition">
              <td className="p-4 font-medium">{user.name}</td>
              <td className="p-4">{user.email}</td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    user.role === "admin"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {user.role}
                </span>
              </td>

              <td className="p-4 text-center">
                <button
                  onClick={() => router.push(`/admin/${user.id}`)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
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
