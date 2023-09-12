"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function FormRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (success) {
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(router.push("/dashboard"), 2000);
    }
  }, [success, router]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          confirmPassword,
        }),
      });

      const { msg, ok } = await res.json();
      console.log(msg, ok);
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
            placeholder="Ingrese un nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresar una contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Repite la contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="bg-green-500" type="submit">
          Crear usuario
        </button>
      </form>

      <div className="mt-4 mb-3 bg-slate-100">
        <p>
          ¿Tienes una cuenta? <Link href="/login">Inicia sesión</Link>
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
