import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Washing Club",
  description: "Sistema de gestion de un negocio local.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <main className="w-full min-h-screen px-4 m-auto bg-white rounded-md shadow-lg lg:flex lg:gap-2 max-w-7xl">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
