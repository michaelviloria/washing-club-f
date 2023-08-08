"use client";
import {
  getCurrentDate,
  getCurrentTime,
  getParking,
} from "@/utils/getResources";
import { useEffect, useState } from "react";

export default function ParkingItems() {
  const [parking, setParking] = useState([]);

  useEffect(() => {
    getParking(setParking);
  }, []);

  return (
    <section>
      {parking.length >= 1 ? (
        parking.map((car) => {
          const dateCurrent = getCurrentDate(car.date);
          const timeCurrent = getCurrentTime(car.date);
          return (
            <article
              key={car._id}
              className="w-full p-1 mb-5 text-xl bg-white border border-gray-400 rounded drop-shadow-lg"
            >
              <p>
                <strong>Placa: </strong>
                {car.plate}
              </p>
              <p>
                <strong>Tipo: </strong>
                {car.typeVehicle}
              </p>
              <p>
                <strong>Ingreso: </strong>
                {`${dateCurrent} ${timeCurrent}`}
              </p>
              <p>
                <strong>Tiempo transcurrido: </strong>
                {"En construcción ..."}
              </p>
            </article>
          );
        })
      ) : (
        <h2>No hay ningún parqueo registrado.</h2>
      )}
    </section>
  );
}
