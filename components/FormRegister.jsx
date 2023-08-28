"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default async function FormRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (success) {
      setUsername("");
      setPassword("");

      signIn("credentials", {
        username,
        password,
      });

      return router.push("/");
    }
  }, [success, username, password, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const { msg, ok } = await res.json();
    setError(msg);
    setSuccess(ok);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 mb-3">
          <label htmlFor="user">Usuario</label>
          <input
            type="text"
            placeholder="Ingresa el usuario."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            placeholder="Ingresa la contraseña."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button className="bg-green-500" type="submit">
          Registrar usuario
        </button>
      </form>

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
