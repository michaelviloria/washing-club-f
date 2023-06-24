export default function ParkinItem({plate, type, entry, time}) {
  return(
    <section className="w-full p-1 text-xl bg-white border border-gray-400 rounded drop-shadow-lg">
      <p><strong>Placa: </strong>{plate}</p>
      <p><strong>Tipo: </strong>{type}</p>
      <p><strong>Ingreso: </strong>{entry}</p>
      <p><strong>Tiempo trnascurrido: </strong>{time}</p>
    </section>
  )
}