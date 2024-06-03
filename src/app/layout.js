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
        <main className="relative bg-slate-50 text-stone-800 min-h-[calc(100%-4rem)]">
          {children}
        </main>
      </body>
    </html>
  );
}
