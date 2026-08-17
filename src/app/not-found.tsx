import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Vive nella root (fuori dai route group) per intercettare qualsiasi URL non
// trovato, quindi si porta dietro la chrome del sito principale.
export default function NotFound() {
  return (
    <div className="font-body flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24">
        <h1 className="font-display text-4xl font-semibold text-primary">404</h1>
        <p className="mt-4 text-neutral-600">Pagina non trovata.</p>
        <Link href="/" className="btn-primary mt-8">
          Torna alla home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
