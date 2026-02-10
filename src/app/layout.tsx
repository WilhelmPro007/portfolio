import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilhelm Reyes | Desarrollador de Software",
  description: "Portafolio profesional de Wilhelm Reyes, Desarrollador Fullstack & Mobile especializado en soluciones robustas y escalables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
