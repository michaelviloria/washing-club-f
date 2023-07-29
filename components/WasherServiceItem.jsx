export default function WasherServiceitem({
  plate,
  type,
  service,
  price,
  time,
  date
}) {
  return (
    <section className="p-2 mt-5 border-2 rounded">
      <p className="text-2xl">
        <strong>Placa:</strong> {plate}
      </p>
      <p className="text-2xl">
        <strong>Tipo:</strong> {type}
      </p>
      <p className="text-2xl">
        <strong>Servicio:</strong> {service}
      </p>
      <p className="text-2xl">
        <strong>Valor:</strong> {price}
      </p>
      <p className="text-2xl">
        <strong>Fecha de registro:</strong> {date}
      </p>
      <p className="text-2xl">
        <strong>Hora de registro:</strong> {time}
      </p>
    </section>
  );
}
