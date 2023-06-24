import Image from "next/image";

export default function MenuSection({src, alt, title, bgColor}) {
  return (
    <section className={"flex flex-col items-center p-2 rounded-md my-5 " + bgColor}>
      <Image src={src} alt={alt} />
      <span className="text-4xl font-bold text-white">{title}</span>
    </section>
  );
}
