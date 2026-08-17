import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Pagine del centro: quelle che valgono per tutte e quattro le aree
 * (team, attività, chi siamo, news, contatti). Qui la navigazione
 * primaria sono le aree, non le sezioni di una sola.
 */
export default function CentroLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div data-area="centro" className="font-body flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
