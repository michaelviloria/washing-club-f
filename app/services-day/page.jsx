"use client";
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
    <main>
      <h1>Servicios del dia</h1>
      <span>{currentDate}</span>
    </main>
  );
}
