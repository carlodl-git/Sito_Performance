"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { allAreas } from "@/data/areas";

/** Le quattro aree: sono la navigazione primaria. */
const areaItems = allAreas.map((a) => ({ href: a.href, label: a.navLabel }));

/** Pagine trasversali: raccolte per non far andare la nav a capo. */
const centroItems = [
  { href: "/servizi", label: "Tutte le attività" },
  { href: "/team", label: "Team" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/blog", label: "News" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [centroOpen, setCentroOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="container-narrow flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Montecchia Performance Center">
          {logoError ? (
            <span className="font-display text-lg text-primary">
              Montecchia Performance Center
            </span>
          ) : (
            // Il logo è un lockup orizzontale: va reso nel suo rapporto, non
            // dentro un quadrato.
            <Image
              src="/images/logo_performance.webp"
              alt="Montecchia Performance Center"
              width={220}
              height={52}
              priority
              unoptimized
              className="h-9 w-auto sm:h-10"
              onError={() => setLogoError(true)}
            />
          )}
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Principale">
          {areaItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm text-ink-soft transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setCentroOpen(true)}
            onMouseLeave={() => setCentroOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1.5 whitespace-nowrap text-sm text-ink-soft transition-colors hover:text-primary"
              onClick={() => setCentroOpen(!centroOpen)}
              aria-expanded={centroOpen}
            >
              Il centro
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {centroOpen && (
              <div className="absolute right-0 top-full w-56 border border-line bg-paper py-2">
                {centroItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm text-ink-soft transition-colors hover:bg-paper-alt hover:text-primary"
                    onClick={() => setCentroOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contatti"
            className="whitespace-nowrap text-sm text-ink-soft transition-colors hover:text-primary"
          >
            Contatti
          </Link>

          <a
            href="https://booking.montecchiaperformancecenter.it"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-sm border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Prenota Golf
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-sm text-ink-soft hover:bg-paper-alt xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-line bg-paper px-5 py-5 xl:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {areaItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3.5 text-base text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {[...centroItems, { href: "/contatti", label: "Contatti" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-line py-3 text-sm text-ink-soft"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://booking.montecchiaperformancecenter.it"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-sm border border-primary px-5 py-3 text-center text-sm text-primary"
              onClick={() => setMobileOpen(false)}
            >
              Prenota Golf →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
