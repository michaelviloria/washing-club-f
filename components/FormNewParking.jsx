"use client";

import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { getVehicles } from "@/utils/getResources";

export default function FormNewParking() {
  const [plate, setPlate] = useState("");
  const [typeVehicle, setTypeVehicle] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getVehicles(setVehicles);
  }, []);

  const handleChangeVehicle = (e) => {
    setTypeVehicle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/new-parking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        plate,
        typeVehicle,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setPlate("");
      setTypeVehicle("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 mb-3">
          <label htmlFor="plate-number">Número de placa:</label>
          <input
            type="text"
            id="plate-number"
            placeholder="Ingrese número de placa."
            value={plate}
            onChange={(e) => setPlate(e.target.value.toLowerCase())}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="type-vehicle">Tipo de vehiculo:</label>
          <Dropdown
            id="type-vehicle"
            value={typeVehicle}
            change={handleChangeVehicle}
            options={vehicles}
          />
        </div>

        <button className="bg-green-500" type="submit">
          Agregar
        </button>
      </form>

      <div className="flex flex-col mt-4 mb-3 bg-slate-100">
        {error.map((e) => (
          <div
            key={e}
            className={`${
              success ? "text-green-600" : "text-red-600"
            } px-5 py-2`}
          >
            {e}
          </div>
        ))}
      </div>
    </>
  );
}
