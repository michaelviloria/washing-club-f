import Link from "next/link";

export default function WasherItem({ name }) {
  return (
    <section className="p-4 mt-5 border-2 rounded">
      <h3 className="text-2xl font-bold text-center">{name}</h3>
      <div className="flex justify-center gap-8 p-2">
        <Link href={`/washers/services/${name}`}>
          <p className="text-base font-semibold text-blue-400 underline">
            Ver servicios
          </p>
        </Link>
        <Link href={`/washers/report/${name}`}>
          <p className="text-base font-semibold text-blue-400 underline">
            Ver informe
          </p>
        </Link>
      </div>
    </section>
  );
}
