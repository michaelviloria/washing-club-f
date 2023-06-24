import Image from "next/image";
import IconPlusCircle from "@/imgs/icon-plus-circle.png";

export default function ButtonAdd({ text }) {
  return (
    <div className="flex flex-col items-center max-w-max">
      <Image src={IconPlusCircle} alt="Icon of a cross within a circle" />
      <span className="text-xl font-semibold text-green-700">{text}</span>
    </div>
  );
}
