import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Washing Club</title>
      </head>
      <body className='w-full max-w-lg p-4 mx-auto mt-3 bg-white rounded-md shadow-lg'>
        {children}
      </body>
    </html>
  )
}
