import ButtonAdd from "@/components/ButtonAdd/ButtonAdd";
import ButtonPrev from "@/components/ButtonPrev/ButtonPrev";
import ParkinItem from "@/components/ParkingItem/ParkingItem";
import Title from "@/components/Title/Title";
import Link from "next/link";

export default function ParkingLotPage() {
  return (
    <main className="flex flex-col items-center gap-5">
      <ButtonPrev />
      <Title>Parqueadero</Title>
      <ParkinItem
        plate={"ABC 123"}
        type={"Carro pequeño"}
        entry={"10/06/2023 8:43 am"}
        time={"7 dias"}
      />
      <ParkinItem
        plate={"DEF 456"}
        type={"Carro mediano"}
        entry={"15/06/2023 6:43 am"}
        time={"2 dias"}
      />
      <ParkinItem
        plate={"GHI 789"}
        type={"Carro grande"}
        entry={"01/06/2023 1:00 pm"}
        time={"24 dias"}
      />
      <Link href={"/new-parking"}>
        <ButtonAdd text={"Añadir"} />
      </Link>
    </main>
  );
}
