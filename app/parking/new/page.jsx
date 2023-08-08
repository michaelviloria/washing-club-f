import ButtonPrev from "@/components/ButtonPrev";
import FormNewParking from "@/components/FormNewParking";

export default async function NewParkingPage() {
  return (
    <main>
      <ButtonPrev />
      <h1>Nuevo parqueo</h1>
      <FormNewParking />
    </main>
  );
}
