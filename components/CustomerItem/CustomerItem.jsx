import Link from "next/link";

export default function CustomerItem({
  name,
  phone,
  plate,
  type,
  parking,
}) {
  return (
    <section className="w-full p-1 text-xl text-gray-600 bg-white border border-gray-400 rounded drop-shadow-lg">
      <p>
        <strong>Nombre: </strong>
        {name}
      </p>
      <p>
        <strong>Telefono: </strong>
        {phone}
      </p>
      <p>
        <strong>Placa: </strong>
        {plate}
      </p>
      <p>
        <strong>Tipo: </strong>
        {type}
      </p>
      <p>
        <strong>Servicios: </strong>
        <Link href="/services-day" className="underline text-blue-300">Ver servicios</Link>
      </p>
      <p>
        <strong>Parqueo: </strong>
        {parking}
      </p>
    </section>
  );
}
