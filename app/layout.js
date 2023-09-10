import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Washing Club</title>
      </head>
      <body className="flex flex-col justify-center w-full max-w-lg min-h-screen p-4 mx-auto bg-white rounded-md shadow-lg ">
        {children}
      </body>
    </html>
  );
}
