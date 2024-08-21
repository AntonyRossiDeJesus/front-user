import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front user",
  description:
    "Um frontend desenvolvido por Antony rossi de jesus para portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
