"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://user-api-ivory.vercel.app/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Inclua cookies
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        // Login bem-sucedido
        router.push("/profile"); // Redirecionar para a página de perfil
      } else {
        // Erro no login
        console.error("Login failed:", await response.json());
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
};

export default LoginPage;
