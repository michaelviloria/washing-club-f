export default function ReportItem({ day }) {
  return (
    <article className="p-2 border-2 rounded">
      <h3 className="text-lg font-semibold text-center">{day}</h3>
      <p className="text-base">Lavada sencilla: 7.500</p>
      <p className="text-base">Lavada sencilla: 7.500</p>
      <p className="text-base">Lavada con motor: 15.000</p>
    </article>
  );
}
