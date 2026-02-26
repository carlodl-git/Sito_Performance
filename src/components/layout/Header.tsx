"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LOGO_PATH = "/logo.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/palestra", label: "Palestra" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-narrow flex h-16 items-center justify-between sm:h-18 lg:h-20">
        <Link href="/" className="flex items-center gap-3">
          {!logoError && (
            <span className="relative block h-10 w-10 shrink-0 overflow-hidden sm:h-12 sm:w-12">
              <Image
                src={LOGO_PATH}
                alt=""
                fill
                className="object-contain"
                priority
                sizes="48px"
                unoptimized
                onError={() => setLogoError(true)}
              />
            </span>
          )}
          <span className="font-display text-xl font-semibold sm:text-2xl">
            <span className="text-primary">Montecchia</span>{" "}
            <span className="text-accent">Performance</span>{" "}
            <span className="text-muted">Center</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://booking.montecchiaperformancecenter.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-light"
          >
            Golf Indoor
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-600 hover:bg-neutral-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://booking.montecchiaperformancecenter.it"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-3 text-sm font-medium text-accent hover:bg-neutral-50"
              onClick={() => setMobileOpen(false)}
            >
              Golf Indoor →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
