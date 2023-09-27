"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Dropdown from "../Buttons/Dropdown";
import { MessagesForm } from "../MessagesForm";
import {
  getCurrentDate,
  getCurrentTime,
  getFormattedDate,
  getVehicles,
  getStates,
} from "@/utils/getResources";

export default function FormNewParking() {
  const [dateUtc, setDateUtc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [serviceValue, setServiceValue] = useState("");
  const [plate, setPlate] = useState("");
  const [typeVehicle, setTypeVehicle] = useState("");
  const [payment, setPayment] = useState("");

  const [vehicles, setVehicles] = useState([]);
  const [status, setStatus] = useState([]);
  const [message, setMessage] = useState([]);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getVehicles(setVehicles);
    getStates(setStatus);

    getCurrentDate(setDate);
    getCurrentTime(setTime);
    getFormattedDate(setDateUtc);
    if (success) {
      setServiceValue("");
      setPlate("");
      setTypeVehicle("");
      setPayment("");
      setTimeout(router.push("/cash-flow"), 1000);
    }
  }, [success, router]);

  const handleChangeVehicle = (e) => {
    setTypeVehicle(e.target.value);
  };
  const handleChangeStatus = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/parking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        plate: plate.toLowerCase().replace(/\s+/g, ""),
        price: serviceValue,
        typeVehicle,
        state: payment,
        date,
        time,
        dateUtc,
      }),
    });

    const { msg, ok } = await res.json();
    setSuccess(ok);
    setMessage(msg);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="plate-number">Número de placa:</label>
          <input
            type="text"
            id="plate-number"
            placeholder="Ingrese número de placa."
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
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
