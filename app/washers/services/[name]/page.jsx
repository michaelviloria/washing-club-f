"use client";
import ButtonPrev from "@/components/ButtonPrev";
import WasherServiceitem from "@/components/WasherServiceItem";

import { getServicesWasher } from "@/utils/getResources";
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
          return (
            <WasherServiceitem
              plate={service.plate}
              type={service.typeVehicle}
              service={service.typeService}
              price={service.price}
              date={service.date}
              time={service.time}
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
