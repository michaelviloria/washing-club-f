"use client";
import ButtonPrev from "@/components/ButtonPrev";
import WasherServiceitem from "@/components/WasherServiceItem";

import {
  getCurrentDate,
  getCurrentTime,
  getServicesWasher,
} from "@/utils/getResources";
import { useEffect, useState } from "react";

export default function WahserServicesPage({ params }) {
  const { name } = params;
  const [washerServices, setWasherServices] = useState([]);
  useEffect(() => {
    getServicesWasher(name, setWasherServices);
  }, [name]);

  return (
    <main className="flex flex-col gap-4">
      <ButtonPrev />
      <h1>Servicios de {name}</h1>
      {washerServices.length >= 1 ? (
        washerServices.map((service) => {
          const dateCurrent = getCurrentDate(service.date);
          const timeCurrent = getCurrentTime(service.date);
          return (
            <WasherServiceitem
              plate={service.plate}
              type={service.typeVehicle}
              service={service.typeService}
              price={service.price}
              date={dateCurrent}
              time={timeCurrent}
              key={service._id}
            />
          );
        })
      ) : (
        <h2>Ningun servicio registrado.</h2>
      )}
    </main>
  );
}
