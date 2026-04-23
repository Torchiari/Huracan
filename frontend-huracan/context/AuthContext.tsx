"use client";
import { createContext, useEffect, useState } from "react";
import { getMe } from "@/services/auth";

export const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await getMe();
        setUser(res.data);
      } catch {
        setUser(null);
      }
    };

    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
