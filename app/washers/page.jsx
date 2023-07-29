"use client";
import ButtonPrev from "@/components/ButtonPrev";
import WasherItem from "@/components/WasherItem";
import { getWashers } from "@/utils/getResources";
import { useEffect, useState } from "react";

export default function WashersPAge() {
  const [washers, setWashers] = useState([]);

  useEffect(() => {
    getWashers(setWashers);
  }, []);

  return (
    <main>
      <ButtonPrev />
      <h1>Lavadores</h1>
      {washers.map((washer) => {
        return <WasherItem name={washer} key={washer} />;
      })}
    </main>
  );
}
