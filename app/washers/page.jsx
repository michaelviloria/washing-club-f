import ButtonPrev from "@/components/ButtonPrev/ButtonPrev";
import Title from "@/components/Title/Title";
import WasherItem from "@/components/WasherItem/WasherItem";

export default function WashersPAge() {
  return (
    <main>
      <ButtonPrev />
      <Title>Lavadores</Title>
      <WasherItem name="Jordan" id="1" />
      <WasherItem name="Luis" id="2" />
      <WasherItem name="Enrique" id="3" />
    </main>
  );
}
