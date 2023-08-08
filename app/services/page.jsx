import ButtonAdd from "@/components/ButtonAdd";
import ButtonPrev from "@/components/ButtonPrev";
import ServiceItems from "@/components/ServiceItem";

import Link from "next/link";

export default async function ServicesPage() {
  return (
    <main className="flex flex-col gap-5">
      <ButtonPrev />
      <h1>Servicios Realizados</h1>
      <ServiceItems />

      <Link href="/services/new" className="mx-auto">
        <ButtonAdd text="Añadir" />
      </Link>
    </main>
  );
}
