"use client";
import { useState, useContext } from "react";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async () => {
    const res = await login({ email, password });

    const payload = JSON.parse(atob(res.access_token.split(".")[1]));
    setUser(payload);

    router.push("/dashboard");
  };

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
