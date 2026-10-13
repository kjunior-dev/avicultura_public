import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nôs Ovu | Da nossa terra à sua mesa",
  description: "Conheça a Nôs Ovu e faça o seu pedido de ovos em Cabo Verde. Encomende caixas de 30 ou ovos à unidade na nossa área de clientes.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-CV"><body>{children}</body></html>;
}
