"use client";
import ButtonAdd from "@/components/ButtonAdd/ButtonAdd";
import ButtonPrev from "@/components/ButtonPrev";
import ParkinItems from "@/components/ParkingItems";
import { getParking } from "@/utils/getResources";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ParkingLotPage() {
  const [parking, setParking] = useState([]);

  useEffect(() => {
    getParking(setParking);
  }, []);

  return (
    <main className="flex flex-col items-center gap-5">
      <ButtonPrev />
      <h1>Parqueadero</h1>
      {parking.length >= 1 ? (
        parking.map((car) => {
          return (
            <ParkinItems
              key={car._id}
              plate={car.plate}
              type={car.type}
              entry={`${car.date} ${car.time}`}
              time={"En construcción ..."}
            />
          );
        })
      ) : (
        <h2>Ningún parqueo registrado.</h2>
      )}

      <Link href={"/new-parking"}>
        <ButtonAdd text={"Añadir"} />
      </Link>
    </main>
  );
}
