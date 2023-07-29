export default function ServiceItem({
  plate,
  type,
  service,
  washer,
  price,
  time,
  date,
}) {
  return (
    <section className="w-full p-1 text-xl text-gray-600 bg-white border border-gray-400 rounded drop-shadow-lg">
      <p>
        <strong>Placa: </strong>
        {plate}
      </p>
      <p>
        <strong>Tipo: </strong>
        {type}
      </p>
      <p>
        <strong>Servicio: </strong>
        {service}
      </p>
      <p>
        <strong>Lavador: </strong>
        {washer}
      </p>
      <p>
        <strong>Valor: </strong>
        {price}
      </p>
      <p>
        <strong>Hora de registro: </strong>
        {time}
      </p>
      <p>
        <strong>Fecha de registro: </strong>
        {date}
      </p>
    </section>
  );
}
