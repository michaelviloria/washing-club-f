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
      <body className="flex flex-col justify-center w-full max-w-lg min-h-screen p-4 mx-auto bg-white rounded-md shadow-lg ">
        <main>{children}</main>
      </body>
    </html>
  );
}
