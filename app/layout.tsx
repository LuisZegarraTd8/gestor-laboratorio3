import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MyHeader from "../components/nav/MyHeader";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gestor de Ordenes y Pacientes",
  description: "Gestor de Ordenes y Pacientes de Laboratorio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gray-50`}
      >
        <MyHeader/>
        <main className="mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
