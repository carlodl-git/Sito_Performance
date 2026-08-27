import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Area } from "@/data/areas";

/**
 * Guscio di un'area. `data-area` è l'unico interruttore: da qui in giù
 * `bg-area`, `text-area` e `border-area` prendono il colore dell'area
 * (le palette stanno in globals.css). Nessun componente ha bisogno di
 * sapere in quale area si trova.
 *
 * La barra di navigazione è la stessa del centro: le aree non hanno più
 * una nav propria con le sezioni della pagina. Chi entra in un'area
 * continua a vedere le altre tre e le pagine del centro, e le sezioni si
 * raggiungono scorrendo.
 */
export function AreaLayout({
  area,
  children,
}: {
  area: Area;
  children: React.ReactNode;
}) {
  return (
    <div data-area={area} className="font-body flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer currentArea={area} />
    </div>
  );
}
