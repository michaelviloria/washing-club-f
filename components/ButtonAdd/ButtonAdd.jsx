import Image from "next/image";
import IconPlusCircle from "@/imgs/icon-plus-circle.png";

export default function ButtonAdd({ text }) {
  return (
    <div className="container flex flex-col items-center">
      <Image src={IconPlusCircle} alt="Icon of a cross within a circle" />
      <span>{text}</span>
    </div>
  );
}
