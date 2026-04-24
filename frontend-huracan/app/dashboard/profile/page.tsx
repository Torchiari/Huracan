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

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-red-800 mb-6">Mis datos</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md space-y-2">
        <p>
          <strong>Nombre:</strong> {user.name}
        </p>
        <p>
          <strong>Apellido:</strong> {user.lastname}
        </p>
        <p>
          <strong>DNI:</strong> {user.dni}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}
