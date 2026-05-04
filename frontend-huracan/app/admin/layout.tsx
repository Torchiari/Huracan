"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getMe } from "@/services/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/fondo-dashboard.png')",
        }}
      />

      {/* 🔥 CAPA OSCURA + BLUR */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* 🔥 CONTENIDO */}
      <div className="relative z-10 p-8">{children}</div>
    </div>
  );
}
