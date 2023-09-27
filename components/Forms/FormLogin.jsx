"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MessagesForm } from "../MessagesForm";

export function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState([]);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (success) {
      setPassword("");
      setUsername("");
      setTimeout(router.push("/"), 1000);
    }
  }, [success, router]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const { msg, ok } = await res.json();
      setMessage(msg);
      setSuccess(ok);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Ingresa un nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Crear usuario</button>
      </form>

      <MessagesForm message={message} success={success} />
    </>
  );
}
