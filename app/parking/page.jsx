import ButtonAdd from "@/components/ButtonAdd";
import ButtonPrev from "@/components/ButtonPrev";
import ParkingItems from "@/components/ParkingItems";
import Link from "next/link";

export default function ParkingPage() {

  return (
    <main className="flex flex-col items-center gap-5">
      <ButtonPrev />
      <h1>Parqueadero</h1>
      <ParkingItems />

      <Link href={"/parking/new"}>
        <ButtonAdd text={"Añadir"} />
      </Link>
    </main>
  );
}
