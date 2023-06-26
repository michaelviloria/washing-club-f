"use client";
import ButtonAdd from "@/components/ButtonAdd/ButtonAdd";
import ButtonPrev from "@/components/ButtonPrev/ButtonPrev";
import ServiceItem from "@/components/ServiceItem/ServiceItem";
import Title from "@/components/Title/Title";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ServicesDayPage() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = formatDate(date);
    setCurrentDate(formattedDate);
  }, []);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`;
  };
  return (
    <main className="gap-5 flex flex-col">
      <ButtonPrev />
      <Title>Servicios del dia</Title>
      <span className="font-medium text-lg text-gray-400">
        {currentDate}
      </span>
      <ServiceItem
        plate="ABC 123"
        type="Carro pequeño"
        service="Lavada sencilla"
        washer="Jordan"
        price="$15.000"
        time="10:05 am"
      />
      <ServiceItem
        plate="DEF 456"
        type="Carro mediano"
        service="Lavada con motor"
        washer="Luis"
        price="$30.000"
        time="10:25 am"
      />
      <Link href="/new-service" className="mx-auto">
        <ButtonAdd text="Añadir" />
      </Link>
    </main>
  );
}
