import { Inter } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FishNet Store",
  description: "Sistema de gerenciamento de vendas de peixes ornamentais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " h-screen"}>
        <Nav />
        <main className="relative min-h-[calc(100%-4rem)] bg-slate-50 text-stone-800">
          {children}
        </main>
      </body>
    </html>
  );
}
