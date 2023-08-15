"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

export default async function FormRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      setUsername("");
      setPassword("");
    }
  }, [success]);

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
        <div>
          <Input
            type="text"
            label="Usuario"
            variant="bordered"
            radius="sm"
            placeholder="Ingresa el usuario."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>

        <div>
          <Input
            type="password"
            label="Contraseña"
            variant="bordered"
            radius="sm"
            size="lg"
            placeholder="Ingresa la contraseña."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>

        <Button size="md" radius="sm" variant="shadow" type="submit">
          Registrar usuario.
        </Button>
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
