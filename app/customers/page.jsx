import CustomerItem from "@/components/CustomerItem/CustomerItem";
import Link from "next/link";

export default function CustomersPage() {
  return (
    <div className="main-container">
      <h1>Clientes: Pagina de ejemplo</h1>
      <CustomerItem
        name="Pedro Torres"
        phone="+571234567890"
        plate="ABC 123"
        type="Carro pequeño"
        parking="Ninguno actualmente"
      />
      <CustomerItem
        name="Lorena Guzman"
        phone="+571234567890"
        plate="DEF 456"
        type="Carro mediano"
        parking="3 dias"
      />
      <CustomerItem
        name="Jesus Alvarez"
        phone="+571234567890"
        plate="GHI 789"
        type="Carro grande"
        parking="30 dias"
      />
    </div>
  );
}
