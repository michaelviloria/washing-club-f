"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { MessagesForm } from "../MessagesForm";
import Dropdown from "../Buttons/Dropdown";
import {
  getCurrentDate,
  getCurrentTime,
  getFormattedDate,
  getStates,
} from "@/utils/getResources";

export default function FormNewCash() {
  const [dateUtc, setDateUtc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [serviceValue, setServiceValue] = useState("");
  const [plate, setPlate] = useState("");
  const [description, setDescription] = useState("");
  const [payment, setPayment] = useState("");

  const [status, setStatus] = useState([]);
  const [message, setMessage] = useState([]);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  useEffect(() => {
    getStates(setStatus);

    getCurrentDate(setDate);
    getCurrentTime(setTime);
    getFormattedDate(setDateUtc);
    if (success) {
      setServiceValue("");
      setPlate("");
      setDescription("");
      setTimeout(router.push("/cash-flow"), 1000);
    }
  }, [success, router]);

  const handleChangeStatus = (e) => {
    setPayment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/other-cash", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        description,
        plate,
        price: serviceValue,
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
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            placeholder="Escribe una descripción."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="plate-number">Número de placa:</label>
          <input
            type="text"
            id="plate-number"
            placeholder="Dejar vacio si no tiene."
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="service-value">Valor:</label>
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
