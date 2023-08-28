import "./globals.css";
import SessionAuthProvider from "@/components/SessionAuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Washing Club</title>
      </head>
      <body className="flex flex-col justify-center w-full max-w-lg min-h-screen p-4 mx-auto bg-white rounded-md shadow-lg ">
        <SessionAuthProvider>{children}</SessionAuthProvider>
      </body>
    </html>
  );
}
