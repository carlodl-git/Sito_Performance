"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ============================================================
   PEZZI CONDIVISI DALLE DUE BARRE
   Il centro e le aree hanno navigazioni diverse ma lo stesso
   comportamento: galleggiano sull'hero e si solidificano allo
   scroll. Quello che cambia sta nelle pagine, non qui.
   ============================================================ */

/** Guscio della barra: gestisce trasparenza, velatura e altezza. */
export function NavBar({
  scrolled,
  menuOpen,
  children,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  children: React.ReactNode;
}) {
  const solida = scrolled || menuOpen;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        solida
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Velatura sotto la barra quando è trasparente. Il solo testo bianco
          non basta: sul punto più chiaro del cielo della copertina farebbe
          1.27:1. I valori sono misurati sulla fascia dove cadono davvero i
          link, non in cima al gradiente: lì serve almeno 0.47 di nero per
          stare sopra 4.5:1, e questa curva ne dà 0.57. Sfuma prima del
          titolo, così la foto resta pulita. */}
      {!solida && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.65)_0%,rgb(0_0_0/0.5)_55%,transparent_100%)]"
          aria-hidden
        />
      )}
      <div
        className={`container-narrow relative flex items-center justify-between gap-6 transition-[height] duration-300 ${
          solida ? "h-16" : "h-20 sm:h-22"
        }`}
      >
        {children}
      </div>
    </header>
  );
}

/**
 * Il logo. Sopra la foto diventa bianco pieno (`brightness-0 invert`):
 * il lockup è teal, rosso e grigio, e sul cielo al tramonto sparirebbe.
 */
export function NavLogo({ solida, compatto = false }: { solida: boolean; compatto?: boolean }) {
  const [errore, setErrore] = useState(false);
  return (
    <Link href="/" className="shrink-0" aria-label="Montecchia Performance Center">
      {errore ? (
        <span
          className={`font-display text-lg ${solida ? "text-primary" : "text-white"}`}
        >
          Montecchia Performance Center
        </span>
      ) : (
        <Image
          src="/images/logo_performance.webp"
          alt="Montecchia Performance Center"
          width={220}
          height={52}
          priority
          unoptimized
          onError={() => setErrore(true)}
          className={`w-auto transition-[height,filter] duration-300 ${
            compatto ? "h-7" : solida ? "h-8 sm:h-9" : "h-9 sm:h-10"
          } ${solida ? "" : "brightness-0 invert"}`}
        />
      )}
    </Link>
  );
}

/**
 * Voce di navigazione. Il filetto che cresce da sinistra sostituisce il
 * semplice cambio di colore: dice dove sei anche a colpo d'occhio, e la
 * pagina corrente lo tiene acceso.
 */
export function NavLink({
  href,
  label,
  solida,
  attiva,
  esterno = false,
}: {
  href: string;
  label: string;
  solida: boolean;
  attiva?: boolean;
  esterno?: boolean;
}) {
  const classi = `group relative whitespace-nowrap py-1 text-sm transition-colors ${
    solida
      ? "text-ink-soft hover:text-primary"
      : "text-white hover:text-white"
  }`;
  const contenuto = (
    <>
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 ${
          solida ? "bg-primary" : "bg-white"
        } ${attiva ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
        aria-hidden
      />
    </>
  );
  if (esterno) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classi}>
        {contenuto}
      </a>
    );
  }
  return (
    <Link href={href} className={classi} aria-current={attiva ? "page" : undefined}>
      {contenuto}
    </Link>
  );
}

/** Pulsante menu: due linee che diventano una croce. */
export function NavToggle({
  aperto,
  solida,
  onClick,
}: {
  aperto: boolean;
  solida: boolean;
  onClick: () => void;
}) {
  const linea = `absolute left-0 h-px w-6 transition-all duration-300 ${
    solida || aperto ? "bg-ink" : "bg-white"
  }`;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={aperto}
      aria-label={aperto ? "Chiudi menu" : "Apri menu"}
      className="relative h-10 w-10 shrink-0"
    >
      <span className="absolute left-1/2 top-1/2 block h-4 w-6 -translate-x-1/2 -translate-y-1/2">
        <span className={`${linea} ${aperto ? "top-2 rotate-45" : "top-1"}`} />
        <span className={`${linea} ${aperto ? "top-2 -rotate-45" : "top-3"}`} />
      </span>
    </button>
  );
}

/** Pannello a tutto schermo: sostituisce la lista che spingeva la pagina. */
export function NavOverlay({
  aperto,
  children,
}: {
  aperto: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 top-16 z-40 bg-area-deep transition-[opacity,visibility] duration-300 ${
        aperto ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <nav
        className="container-narrow flex h-full flex-col justify-center overflow-y-auto py-10"
        aria-label="Menu"
      >
        {children}
      </nav>
    </div>
  );
}
