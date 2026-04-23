"use client";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Bienvenido {user.email}</h1>
    </div>
  );
}
