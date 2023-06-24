import Button from "@/components/Button/Button";
import Dropdown from "@/components/FormElements/Dropdown/Dropdown";
import Form from "@/components/FormElements/Form/Form";
import Input from "@/components/FormElements/Input/Input";
import Label from "@/components/FormElements/Label/Label";
import Title from "@/components/Title/Title";
import Link from "next/link";

const optionsVehicles = [
  "Carro pequeño",
  "Carro mediano",
  "Carro grande",
  "Moto pequeña",
  "Moto grande",
];

export default function NewParkingPage() {
  return (
    <main className="">
      <Title>Nuevo parqueo</Title>
      <Form action={""} method={"post"}>
        <div className="mt-4 mb-3">
          <Label htmlFor="plate-number">Número de placa:</Label>
          <Input type="text" id="plate-number" name="plate-number" />
        </div>
        <div className="mb-3">
          <Label htmlFor="type-vehicle">Tipo de vehiculo:</Label>
          <Dropdown
            name="type-vehicle"
            id="type-vehicle"
            options={optionsVehicles}
          />
        </div>
        <div className="flex justify-between w-full mt-6">
          <Link href="/parking-lot">
            <Button
              type="button"
              background="bg-red-400"
              textColor="text-red-900"
            >
              Cancelar
            </Button>
          </Link>
          <Link href="/">
            <Button
              type="submit"
              background="bg-green-400"
              textColor="text-green-900"
            >
              Aceptar
            </Button>
          </Link>
        </div>
      </Form>
    </main>
  );
}
