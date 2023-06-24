import IconCar from "../imgs/icon-car.png";
import IconCarWash from "../imgs/icon-car-wash.png";
import IconContact from "../imgs/icon-contact.png";
import IconPerson from "../imgs/icon-person.png";
import IconSetting from "../imgs/icon-setting.png";

import MenuSection from "../components/MenuSection/MenuSection";
import ButtonAdd from "../components/ButtonAdd/ButtonAdd";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-5">
      <Link href="/parking-lot" className="w-full">
        <MenuSection
          src={IconCar}
          alt="Icon of a car"
          title="Parqueadero"
          bgColor="bg-menu-blue-cyan"
        />
      </Link>
      <Link href="/services-day" className="w-full">
        <MenuSection
          src={IconCarWash}
          alt="Icon of a car"
          title="Servicios del dia"
          bgColor="bg-menu-blue-dark"
        />
      </Link>
      <Link href="/customers" className="w-full">
        <MenuSection
          src={IconContact}
          alt="Icon of a card"
          title="Clientes"
          bgColor="bg-menu-purple"
        />
      </Link>
      <Link href="/washers" className="w-full">
        <MenuSection
          src={IconPerson}
          alt="Icon of a person"
          title="Lavadores"
          bgColor="bg-menu-red"
        />
      </Link>
      <Link href="/edit-combo" className="w-full">
        <MenuSection
          src={IconSetting}
          alt="Icon of a gear"
          title="Editar combos"
          bgColor="bg-menu-orange"
        />
      </Link>
      <Link href="/new-service">
        <ButtonAdd text="Nuevo servicio" />
      </Link>
    </main>
  );
}
