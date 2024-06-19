import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FishNet Store",
  description: "Sistema de gerenciamento de vendas de peixes ornamentais.",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " h-screen"}>
        <main className="z-100 absolute inset-0 h-[100vh]">{children}</main>
      </body>
    </html>
  );
}
