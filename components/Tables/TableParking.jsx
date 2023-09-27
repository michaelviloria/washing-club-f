"use client";
import { getParking } from "@/utils/getResources";
import { useEffect, useState } from "react";

export default function TableParking() {
  const [parking, setParking] = useState([]);

  useEffect(() => {
    getParking(setParking);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Vehiculo</th>
          <th>Precio</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {parking.map((el, index) => {
          let stateCell = null;
          switch (el.state) {
            case "Pagado":
              stateCell = <td className="text-green-600 state">{el.state}</td>;
              break;

            case "Pendiente":
              stateCell = <td className="text-yellow-600 state">{el.state}</td>;
              break;

            case "Gasto":
              stateCell = <td className="text-red-600 state">{el.state}</td>;
              break;
          }

          return (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-cyan-100"}
            >
              <td>{el.plate}</td>
              <td>{el.typeVehicle}</td>
              <td>{el.price}</td>
              <td>{el.date}</td>
              <td>{el.time}</td>
              {stateCell}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
