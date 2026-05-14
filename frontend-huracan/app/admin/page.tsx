"use client";

import { useEffect, useState } from "react";
import { getUsers } from "@/services/admin";
import UsersTable from "@/app/components/admin/UsersTable";
import { useRouter } from "next/navigation";
import { getMe } from "@/services/auth";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    try {
      const res = await getMe();

      if (res.data.role !== "admin") {
        router.push("/dashboard");
      }
    } catch {
      router.push("/login");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const filteredUsers = users.filter((u: any) => {
    const fullName = `${u.name} ${u.lastname}`.toLowerCase();

    return (
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.lastname.toLowerCase().includes(search.toLowerCase()) ||
      fullName.includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.dni?.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="text-white">
      {/* 🔴 HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Panel de Administrador</h1>
      </div>

      {/* 🔍 BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar por nombre, apellido o email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xl mb-6 px-4 py-3 rounded-xl bg-white text-black shadow"
      />

      {/* 📋 LISTA */}
      <UsersTable users={filteredUsers} />
    </div>
  );
}
