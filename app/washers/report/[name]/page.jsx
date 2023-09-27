import ReportItem from "@/components/ReportItem/ReportItem";

export default function WasherReportPage(props) {
  const { name } = props.params;
  return (
    <div className="main-container">
      <h1>Informe de {name}: Pagina de ejemplo</h1>
      <section className="flex flex-col gap-3 mt-4">
        <h2 className="text-xl font-semibold text-center">
          Periodo del informe:
        </h2>
        <p className="text-base font-semibold text-center text-gray-600">
          13/6/2023 - 19/6/2023
        </p>
      </section>
      <section className="flex flex-col gap-4 mt-4">
        <h3 className="text-xl font-semibold text-center">
          Servicios realizados
        </h3>
        <ReportItem day={"Martes"} />
        <ReportItem day={"Miercoles"} />
        <ReportItem day={"Jueves"} />
        <ReportItem day={"Viernes"} />
        <ReportItem day={"Sabado"} />
        <ReportItem day={"Domingo"} />
        <ReportItem day={"Lunes"} />
      </section>
    </div>
  );
}
