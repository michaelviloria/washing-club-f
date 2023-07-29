"use client";
import ButtonAdd from "@/components/ButtonAdd/ButtonAdd";
import ButtonPrev from "@/components/ButtonPrev";
import ServiceItem from "@/components/ServiceItem";
import { getCurrentDate, getServices } from "@/utils/getResources";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesDayPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices(setServices);
  }, []);

  return (
    <main className="flex flex-col gap-5">
      <ButtonPrev />
      <h1>Servicios Realizados</h1>
      {services.length >= 1 ? (
        services.map((service) => {
          return (
            <ServiceItem
              key={service._id}
              plate={service.plateNumber}
              type={service.typeVehicle}
              service={service.typeService}
              price={`$ ${Number(service.serviceValue).toLocaleString()}`}
              washer={service.washerName}
              time={service.time}
              date={getCurrentDate(service.date)}
            />
          );
        })
      ) : (
        <h2>No hay ningún servicio realizado.</h2>
      )}

      <Link href="/new-service" className="mx-auto">
        <ButtonAdd text="Añadir" />
      </Link>
    </main>
  );
}
