import Button from "@/components/Button/Button";
import ButtonPrev from "@/components/ButtonPrev/ButtonPrev";
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

export default function NewCustomerPAge() {
  return(
    <main>
      <ButtonPrev />
      <Title>Nuevo Cliente</Title>
      <Form action={""} method={"post"}>
        <div className="mt-4 mb-3">
          <Label htmlFor="name-customer">Nombre del cliente:</Label>
          <Input type="text" id="name-customer" name="name-customer" />
        </div>
        <div className="mb-3">
          <Label htmlFor="phone-customer">Número de telefono:</Label>
          <Input type="number" id="phone-customer" name="phone-customer" />
        </div>
        <div className="mb-3">
          <Label htmlFor="plate-customer">Placa:</Label>
          <Input type="text" id="plate-customer" name="plate-customer" />
        </div>
        <div className="mb-3">
          <Label htmlFor="type-vehycle">Tipo de vehiculo:</Label>
          <Dropdown id="type-vehycle" name="type-vehycle" options={optionsVehicles} />
        </div>
        <div className="flex justify-between w-full mt-6">
          <Link href="/">
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
  )
}