"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (success) {
      setPassword("");
      setUsername("asd");
      setTimeout(router.push("/dashboard"), 1000);
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
      setError(msg);
      setSuccess(ok);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 mb-3">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            id="username"
            placeholder="Ingresa un nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-green-500">
          Crear usuario
        </button>
      </form>

      <div className="mt-4 mb-3 bg-slate-100">
        <p>
          ¿No tienes una cuenta? <Link href="/register">Registrate</Link>
        </p>
      </div>

      <div className="flex flex-col mt-4 mb-3 bg-slate-100">
        {error &&
          error.map((e) => (
            <div
              key={e}
              className={`${
                success ? "text-green-600" : "text-red-600"
              } px-5 py-2 `}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}
