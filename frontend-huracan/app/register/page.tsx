"use client";
import { useState } from "react";
import { register } from "@/services/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await register({ email, password });
    alert("Usuario creado");
  };

  return (
    <div>
      <h1>Register</h1>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Crear</button>
    </div>
  );
}
