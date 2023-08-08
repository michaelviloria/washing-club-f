"use client";
import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import { getServicesList, getVehicles, getWashers } from "@/utils/getResources";

export default function FormNewService() {
  const [plateNumber, setPlateNumber] = useState("");
  const [typeVehicle, setTypeVehicle] = useState("");
  const [typeService, setTypeService] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [washerName, setWasherName] = useState("");

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [washer, setWasher] = useState([]);

  useEffect(() => {
    getVehicles(setVehicles);
    getServicesList(setServicesList);
    getWashers(setWasher);

    if (success) {
      setPlateNumber("");
      setServiceValue("");
      setTypeService("");
      setTypeVehicle("");
      setWasherName("");
    }
  }, [success]);

  const handleChangeVehicle = (e) => {
    setTypeVehicle(e.target.value);
  };
  const handleChangeService = (e) => {
    setTypeService(e.target.value);
  };
  const handleChangeWasher = (e) => {
    setWasherName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        plate: plateNumber.toLowerCase().replace(/\s+/g, ""),
        typeVehicle,
        typeService,
        price: serviceValue,
        washerName,
      }),
    });

    const { msg, ok } = await res.json();
    setError(msg);
    setSuccess(ok);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="plate-number">Número de placa:</label>
          <input
            onChange={(e) => setPlateNumber(e.target.value)}
            value={plateNumber}
            type="text"
            id="plate-number"
            placeholder="Ingrese número de placa."
          />
        </div>

        <div>
          <label htmlFor="type-vehicle">Tipo de vehiculo:</label>
          <Dropdown
            id="type-vehicle"
            value={typeVehicle}
            change={handleChangeVehicle}
            options={vehicles}
          />
        </div>

        <div>
          <label htmlFor="type-service">Tipo de servicio:</label>
          <Dropdown
            id="type-service"
            value={typeService}
            change={handleChangeService}
            options={servicesList}
          />
        </div>

        <div>
          <label htmlFor="service-value">Valor del servicio:</label>
          <input
            onChange={(e) => {
              setServiceValue(e.target.value);
            }}
            value={serviceValue}
            type="number"
            id="service-value"
          />
        </div>

        <div>
          <label htmlFor="washer-name">Nombre del lavador:</label>
          <Dropdown
            id="washer-name"
            value={washerName}
            change={handleChangeWasher}
            options={washer}
          />
        </div>

        <button className="bg-green-500" type="submit">
          Agregar
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
