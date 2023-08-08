"use client";
import Link from "next/link";
import { getWashers } from "@/utils/getResources";
import { useEffect, useState } from "react";

export default function WasherItems() {
  const [washers, setWashers] = useState([]);

  useEffect(() => {
    getWashers(setWashers);
  }, []);

  return (
    <section className="p-4 mt-5 border-2 rounded">
      {washers.length >= 1 ? (
        washers.map((washer) => {
          return (
            <article key={washer} className="mb-5 bg-white border border-gray-300 rounded-md shadow-lg">
              <h3 className="text-2xl font-bold text-center">{washer}</h3>
              <div className="flex justify-center gap-8 p-2">
                <Link href={`/washers/services/${washer}`}>
                  <p className="text-base font-semibold text-blue-400 underline">
                    Ver servicios
                  </p>
                </Link>
                <Link href={`/washers/report/${washer}`}>
                  <p className="text-base font-semibold text-blue-400 underline">
                    Ver informe
                  </p>
                </Link>
              </div>
            </article>
          );
        })
      ) : (
        <h2>No hay ningún lavador registrado.</h2>
      )}
    </section>
  );
}
