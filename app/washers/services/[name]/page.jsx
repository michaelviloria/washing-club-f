"use client";

import ButtonPrev from "@/components/ButtonPrev/ButtonPrev";
import Title from "@/components/Title/Title";
import WasherServiceitem from "@/components/WasherServiceItem/WasherServiceItem";
import { useEffect, useState } from "react";

export default function WahserServicesPage(props) {
  const { name } = props.params;

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
    <main className="flex flex-col gap-4">
      <ButtonPrev />
      <Title>Servicios de {name}</Title>
      <span className="text-xl font-bold text-gray-600">{currentDate}</span>
      <WasherServiceitem
        plate={"ABC 123"}
        service={"Lavada sencilla"}
        price={"15.000"}
        type={"Carro pequeño"}
        time={"10:05 am"}
      />
      <WasherServiceitem
        plate={"DEF 456"}
        service={"Lavada con motor"}
        price={"30.000"}
        type={"Carro mediano"}
        time={"12:25 am"}
      />
    </main>
  );
}
