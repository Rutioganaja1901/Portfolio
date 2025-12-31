import "./globals.css"

export const metadata = {
  title: "Ruti Oganaja - Full-Stack Developer",
  description: "Portfolio of Ruti Oganaja, a passionate full-stack developer specializing in modern web technologies.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
