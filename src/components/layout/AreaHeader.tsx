"use client";

import Link from "next/link";
import { allAreas, areaMeta, type Area } from "@/data/areas";
import { contatti, whatsappLink } from "@/data/contatti";
import { useHeaderState } from "./useHeaderState";
import { NavBar, NavLogo, NavLink, NavToggle, NavOverlay } from "./NavShell";

/**
 * Header di un'area. Dentro un'area la navigazione primaria sono le
 * sezioni di quell'area, non le pagine del centro: è questo che fa
 * leggere l'area come un sito a sé. Il rientro al centro resta sempre
 * visibile a sinistra, così non si finisce in un vicolo chiuso.
 */
export function AreaHeader({ area }: { area: Area }) {
  const { scrolled, menuOpen, setMenuOpen } = useHeaderState();
  const solida = scrolled || menuOpen;
  const meta = areaMeta[area];
  const altre = allAreas.filter((a) => a.key !== area);

  // Il golf si prenota dal gestionale del club, le altre aree via WhatsApp.
  const cta =
    area === "golf"
      ? { href: contatti.booking, label: "Prenota campo" }
      : { href: whatsappLink(meta.whatsapp), label: "Prenota" };

  return (
    <>
      <NavBar scrolled={scrolled} menuOpen={menuOpen}>
        {/* Il centro, poi l'area: nell'ordine in cui ci si è arrivati. Sotto
            sm il logo lascia il posto a una freccia di rientro, perché il
            lockup orizzontale è largo 165px e mangiava il nome dell'area. */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className={`shrink-0 transition-colors sm:hidden ${solida ? "text-ink-soft" : "text-white"}`}
            aria-label="Torna al Montecchia Performance Center"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7 7-7M3 12h18" />
            </svg>
          </Link>
          <div className="hidden sm:block">
            <NavLogo solida={solida} compatto />
          </div>
          <span
            className={`h-8 w-px shrink-0 transition-colors ${solida ? "bg-line" : "bg-white/30"}`}
            aria-hidden
          />
          <Link href={meta.href} className="min-w-0">
            <span
              className={`block truncate font-display text-lg leading-tight transition-colors sm:text-xl ${
                solida ? "text-primary" : "text-white"
              }`}
            >
              <span className="xs:hidden">{meta.navLabel}</span>
              <span className="hidden xs:inline">{meta.label}</span>
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={meta.label}>
          {meta.sections.map((s) => (
            <NavLink key={s.href} href={s.href} label={s.label} solida={solida} />
          ))}
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`whitespace-nowrap rounded-sm border px-4 py-2 text-sm transition-colors ${
              solida
                ? "border-area text-area hover:bg-area hover:text-white"
                : "border-white/50 text-white hover:bg-white hover:text-area-deep"
            }`}
          >
            {cta.label}
          </a>
        </nav>

        <div className="lg:hidden">
          <NavToggle aperto={menuOpen} solida={solida} onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </NavBar>

      <NavOverlay aperto={menuOpen}>
        <p className="eyebrow text-white/40">{meta.label}</p>
        {meta.sections.map((s) => (
          <a
            key={s.href}
            href={s.href}
            onClick={() => setMenuOpen(false)}
            className="mt-1 border-b border-white/10 py-4 font-display text-2xl text-white transition-colors hover:text-area-glow"
          >
            {s.label}
          </a>
        ))}

        <p className="eyebrow mt-10 text-white/40">Le altre aree</p>
        {altre.map((a) => (
          <Link
            key={a.key}
            href={a.href}
            className="mt-1 border-b border-white/10 py-3 text-white/70 transition-colors hover:text-white"
          >
            {a.label}
          </Link>
        ))}

        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-8 rounded-sm border border-white/50 px-6 py-3.5 text-center text-sm text-white transition-colors hover:bg-white hover:text-area-deep"
        >
          {cta.label}
        </a>
      </NavOverlay>
    </>
  );
}
