"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Dropdown from "../Buttons/Dropdown";
import { MessagesForm } from "../MessagesForm";
import {
  getCurrentDate,
  getCurrentTime,
  getFormattedDate,
  getServicesList,
  getVehicles,
  getWashers,
  getStates,
} from "@/utils/getResources";

export default function FormNewService() {
  const [dateUtc, setDateUtc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [plateNumber, setPlateNumber] = useState("");
  const [typeVehicle, setTypeVehicle] = useState("");
  const [typeService, setTypeService] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [washerName, setWasherName] = useState("");
  const [payment, setPayment] = useState("");

  const [message, setMessage] = useState([]);
  const [success, setSuccess] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [washer, setWasher] = useState([]);
  const [status, setStatus] = useState([]);

  const router = useRouter();

  useEffect(() => {
    getCurrentDate(setDate);
    getCurrentTime(setTime);
    getFormattedDate(setDateUtc);

    getVehicles(setVehicles);
    getServicesList(setServicesList);
    getWashers(setWasher);
    getStates(setStatus);

    if (success) {
      setPlateNumber("");
      setServiceValue("");
      setTypeService("");
      setTypeVehicle("");
      setWasherName("");
      setPayment("");
      setTimeout(router.push("/cash-flow"), 1000);
    }
  }, [success, router]);

  const handleChangeVehicle = (e) => {
    setTypeVehicle(e.target.value);
  };
  const handleChangeService = (e) => {
    setTypeService(e.target.value);
  };
  const handleChangeWasher = (e) => {
    setWasherName(e.target.value);
  };
  const handleChangeStatus = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        description: typeService,
        plate: plateNumber.toLowerCase().replace(/\s+/g, ""),
        price: serviceValue,
        typeVehicle,
        state: payment,
        washerName,
        date,
        time,
        dateUtc,
      }),
    });

    const { msg, ok } = await res.json();
    setMessage(msg);
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

        <div>
          <label htmlFor="payment-status">Estado del pago</label>
          <Dropdown
            id="payment-status"
            value={payment}
            change={handleChangeStatus}
            options={status}
          />
        </div>

        <button type="submit">Agregar</button>
      </form>

      <MessagesForm message={message} success={success} />
    </>
  );
}
