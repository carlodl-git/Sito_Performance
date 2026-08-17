"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { allAreas, areaMeta, type Area } from "@/data/areas";
import { contatti, whatsappLink } from "@/data/contatti";



/**
 * Header di un'area. Dentro un'area la navigazione primaria sono le
 * sezioni di quell'area, non le pagine del centro: è questo che fa
 * leggere l'area come un sito a sé. Il rientro al centro resta sempre
 * visibile a sinistra, così non si finisce in un vicolo chiuso.
 */
export function AreaHeader({ area }: { area: Area }) {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const meta = areaMeta[area];
  const otherAreas = allAreas.filter((a) => a.key !== area);

  // Il golf si prenota dal gestionale del club, le altre aree via WhatsApp.
  const cta =
    area === "golf"
      ? { href: contatti.booking, label: "Prenota campo" }
      : { href: whatsappLink(meta.whatsapp), label: "Prenota" };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="container-narrow flex h-20 items-center justify-between gap-6">
        {/* Lockup: il centro, poi l'area. Nell'ordine in cui ci si è arrivati. */}
        <div className="flex min-w-0 items-center gap-4">
          <Link
            href="/"
            className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
            aria-label="Torna al Montecchia Performance Center"
          >
            {logoError ? (
              <span className="font-display text-sm text-primary">MPC</span>
            ) : (
              <Image
                src="/images/logo_performance.webp"
                alt="Montecchia Performance Center"
                width={220}
                height={52}
                priority
                unoptimized
                className="h-7 w-auto sm:h-8"
                onError={() => setLogoError(true)}
              />
            )}
          </Link>
          <span className="h-8 w-px shrink-0 bg-line" aria-hidden />
          <Link href={meta.href} className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight text-primary sm:text-xl">
              {meta.label}
            </span>
          </Link>
        </div>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label={meta.label}
        >
          {meta.sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className="whitespace-nowrap text-sm text-ink-soft transition-colors hover:text-area"
            >
              {s.label}
            </a>
          ))}
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-sm border border-area px-4 py-2 text-sm text-area transition-colors hover:bg-area hover:text-white"
          >
            {cta.label}
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-ink-soft hover:bg-paper-alt lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="container-narrow py-5" aria-label="Menu">
            {meta.sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="block border-b border-line py-3.5 text-base text-primary"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}

            <p className="eyebrow mt-7">Le altre aree</p>
            {otherAreas.map((a) => (
              <Link
                key={a.key}
                href={a.href}
                className="mt-1 block border-b border-line py-3 text-sm text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {a.navLabel}
              </Link>
            ))}

            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-area mt-6 w-full"
              onClick={() => setOpen(false)}
            >
              {cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
