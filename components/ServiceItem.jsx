"use client";
import {
  getCurrentDate,
  getFormattedDate,
  getServices,
} from "@/utils/getResources";
import { useEffect, useState } from "react";

export default function ServiceItems() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices(setServices);
  }, []);

  return (
    <section>
      {services.length >= 1 ? (
        services.map((service) => {
          const dateCurrent = getCurrentDate(service.date);

          return (
            <article
              key={service._id}
              className="w-full p-1 mb-5 text-xl text-gray-600 bg-white border border-gray-400 rounded drop-shadow-lg"
            >
              <p>
                <strong>Placa: </strong>
                {service.plate}
              </p>
              <p>
                <strong>Tipo: </strong>
                {service.typeVehicle}
              </p>
              <p>
                <strong>Servicio: </strong>
                {service.typeService}
              </p>
              <p>
                <strong>Valor: </strong>
                {`$ ${Number(service.price).toLocaleString()}`}
              </p>
              <p>
                <strong>Lavador: </strong>
                {service.washerName}
              </p>
              <p>
                <strong>Hora de registro: </strong>
                {dateCurrent}
              </p>
            </article>
          );
        })
      ) : (
        <h2>No hay ningún servicio realizado.</h2>
      )}
    </section>
  );
}
