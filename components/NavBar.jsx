"use client";

import { useState } from "react";
import ButtonMenu from "./Buttons/ButtonMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const routesNotAllowed = ["/login", "/register"];

  if (routesNotAllowed.includes(pathname)) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-10 flex flex-col justify-center max-w-xs py-3 text-gray-800 rounded-md bg-cyan-100 lg:static lg:min-h-screen top-2 left-4 backdrop-blur-md">
      <div className="container flex flex-col items-start justify-between">
        <ButtonMenu setClick={toggleMenu} />

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:flex-col lg:items-center lg:justify-center gap-3`}
        >
          <li>
            <Link href="/">Flujo de caja</Link>
          </li>
          <li>
            <Link href="/services">Servicios</Link>
          </li>
          <li>
            <Link href="/parking">Parqueadero</Link>
          </li>
          <li>
            <Link href="/customers">Clientes</Link>
          </li>
          <li>
            <Link href="/washers">Lavadores</Link>
          </li>
          <li className="link">
            <Link href={"/services/new"}>Nuevo Servicio</Link>
          </li>
          <li className="link">
            <Link href={"/parking/new"}>Nuevo Parqueo</Link>
          </li>
          <li className="link">
            <Link href={"/other-cash/new"}>Nuevo Movimiento de caja</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
