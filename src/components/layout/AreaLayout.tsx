import { AreaHeader } from "./AreaHeader";
import { Footer } from "./Footer";
import type { Area } from "@/data/areas";

/**
 * Guscio di un'area. `data-area` è l'unico interruttore: da qui in giù
 * `bg-area`, `text-area` e `border-area` prendono il colore dell'area
 * (le palette stanno in globals.css). Nessun componente ha bisogno di
 * sapere in quale area si trova.
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
      <AreaHeader area={area} />
      <main className="flex-1">{children}</main>
      <Footer currentArea={area} />
    </div>
  );
}
