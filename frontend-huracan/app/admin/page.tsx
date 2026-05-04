"use client";

import { useEffect, useState } from "react";
import UsersTable from "@/app/components/admin/UsersTable";
import { getUsers } from "@/services/admin";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const filteredUsers = users.filter(
    (u: any) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Usuarios del Club</h1>

      <input
        type="text"
        placeholder="Buscar usuario..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 rounded-lg"
      />

      <UsersTable users={filteredUsers} />
    </div>
  );
}
