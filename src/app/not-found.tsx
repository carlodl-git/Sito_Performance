import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="font-display text-4xl font-semibold text-primary">404</h1>
      <p className="mt-4 text-neutral-600">Pagina non trovata.</p>
      <Link href="/" className="btn-primary mt-8">
        Torna alla home
      </Link>
    </div>
  );
}
