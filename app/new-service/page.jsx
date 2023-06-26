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

const optionsServices = [
  "Lavada sencilla",
  "Lavada con motor",
  "Lavada con brillada",
  "Rasqueteada",
  "Rasqueteada y motor",
];

export default function NewServicePage() {
  return (
    <main>
      <ButtonPrev />
      <Title>Nuevo servicio</Title>
      <Form action="" method="post">
        <div className="mt-3">
          <Label htmlFor="plate-number">Número de placa:</Label>
          <Input type="text" id="plate-number" name="plate-number" />
        </div>
        <div className="mt-3">
          <Label htmlFor="type-vehicle">Tipo de vehiculo:</Label>
          <Dropdown
            name="type-vehicle"
            id="type-vehicle"
            options={optionsVehicles}
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="type-service">Tipo de servicio:</Label>
          <Dropdown
            name="type-service"
            id="type-service"
            options={optionsServices}
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="service-value">Valor del servicio:</Label>
          <Input type="text" name="service-value" id="service-value" />
        </div>
        <div className="mt-3">
          <Label htmlFor="washer-name">Nombre del lavador:</Label>
          <Input type="text" name="washer-name" id="washer-name" />
        </div>
        <div className="container flex justify-between w-full mt-6">
          <Link href="/">
            <Button
              type="button"
              background="bg-red-400"
              textColor="text-red-900"
            >
              Cancelar
            </Button>
          </Link>
          <Button
            type="submit"
            background="bg-green-400"
            textColor="text-green-900"
          >
            Aceptar
          </Button>
        </div>
      </Form>
    </main>
  );
}
