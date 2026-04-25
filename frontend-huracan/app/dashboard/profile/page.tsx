"use client";

import { useEffect, useState } from "react";
import { getMe } from "@/services/auth";

export default function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await getMe();
      setUser(res.data);
    };

    fetchUser();
  }, []);

  if (!user)
    return <div className="text-center mt-10 text-gray-500">Cargando...</div>;

  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Nombre</p>
            <p className="font-medium">{user.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Apellido</p>
            <p className="font-medium">{user.lastname}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">DNI</p>
            <p className="font-medium">{user.dni}</p>
          </div>

          {/* 👇 NUEVO */}
          <div>
            <p className="text-sm text-gray-500">Celular</p>
            <p className="font-medium">{user.phone}</p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
