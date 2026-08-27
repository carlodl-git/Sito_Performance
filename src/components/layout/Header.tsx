"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { allAreas } from "@/data/areas";
import { useHeaderState } from "./useHeaderState";
import { NavBar, NavLogo, NavLink, NavToggle, NavOverlay } from "./NavShell";

/**
 * Le quattro aree: sono la navigazione primaria.
 *
 * Qui non c'è il pulsante "Prenota Golf": prenotare il campo è un'azione
 * di una sola area su quattro, e in cima a ogni pagina del centro la
 * faceva sembrare l'azione principale del sito. Vive dentro Golf Indoor.
 */
const areaItems = allAreas.map((a) => ({ href: a.href, label: a.navLabel }));

/** Pagine trasversali: raccolte per non far andare la nav a capo. */
const centroItems = [
  { href: "/servizi", label: "Tutte le attività" },
  { href: "/team", label: "Team" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const { scrolled, menuOpen, setMenuOpen, pathname } = useHeaderState();
  const solida = scrolled || menuOpen;

  // Menu "Il centro": a click e non a passaggio del mouse. Quello a hover
  // su un touch screen non si apre, e da tastiera non si raggiunge.
  const [centroOpen, setCentroOpen] = useState(false);
  const centroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!centroOpen) return;
    const fuori = (e: MouseEvent) => {
      if (!centroRef.current?.contains(e.target as Node)) setCentroOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setCentroOpen(false);
    document.addEventListener("mousedown", fuori);
    window.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", fuori);
      window.removeEventListener("keydown", esc);
    };
  }, [centroOpen]);
  useEffect(() => setCentroOpen(false), [pathname]);

  const attiva = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <NavBar scrolled={scrolled} menuOpen={menuOpen}>
        <NavLogo solida={solida} compatto={solida} />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
          {areaItems.map((item) => (
            <NavLink key={item.href} {...item} solida={solida} attiva={attiva(item.href)} />
          ))}

          <div className="relative" ref={centroRef}>
            <button
              type="button"
              onClick={() => setCentroOpen(!centroOpen)}
              aria-expanded={centroOpen}
              className={`group relative flex items-center gap-1.5 whitespace-nowrap py-1 text-sm transition-colors ${
                solida ? "text-ink-soft hover:text-primary" : "text-white hover:text-white"
              }`}
            >
              Il centro
              <svg
                className={`h-3 w-3 transition-transform duration-300 ${centroOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {centroOpen && (
              <div className="absolute right-0 top-[calc(100%+0.75rem)] w-60 overflow-hidden rounded-sm border border-line bg-paper py-2 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.25)]">
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

          <NavLink href="/contatti" label="Contatti" solida={solida} attiva={attiva("/contatti")} />
        </nav>

        <div className="lg:hidden">
          <NavToggle aperto={menuOpen} solida={solida} onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </NavBar>

      <NavOverlay aperto={menuOpen}>
        <p className="eyebrow text-white/40">Le aree</p>
        {areaItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mt-1 border-b border-white/10 py-4 font-display text-2xl text-white transition-colors hover:text-area-glow"
          >
            {item.label}
          </Link>
        ))}
        <p className="eyebrow mt-10 text-white/40">Il centro</p>
        {[...centroItems, { href: "/contatti", label: "Contatti" }].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mt-1 border-b border-white/10 py-3 text-white/70 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </NavOverlay>
    </>
  );
}
