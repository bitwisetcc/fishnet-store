import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinFusion Store",
  description: "Sistema de gerenciamento de vendas de peixes ornamentais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " h-screen"}>
        <Nav />
        <main className="relative h-full">{children}</main>
      </body>
    </html>
  );
}
