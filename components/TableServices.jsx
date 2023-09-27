"use client";
import { getServices } from "@/utils/getResources";
import { useEffect, useState } from "react";

export default function TableServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices(setServices);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Descripcion</th>
          <th>Placa o ID</th>
          <th>Valor</th>
          <th>Vehiculo</th>
          <th>Lavador</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {services.map((el, index) => {
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
              <td>{el.description}</td>
              <td>{el.plate}</td>
              <td>{`$ ${Number(el.price).toLocaleString()}`}</td>
              <td>{el.typeVehicle}</td>
              <td>{el.washerName}</td>
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
