import Link from "next/link";
import { allAreas, type Area } from "@/data/areas";
import { contatti } from "@/data/contatti";
import { PreferenzeCookie } from "@/components/cookie/PreferenzeCookie";

const centroLinks = [
  { href: "/servizi", label: "Tutte le attività" },
  { href: "/team", label: "Team" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/blog", label: "Blog" },
  { href: "/contatti", label: "Contatti" },
];

/**
 * Footer unico per tutto il sito. Dentro un'area prende il fondo scuro
 * di quell'area (`bg-area-deep`) e segna l'area corrente: è il punto in
 * cui si passa da un'area all'altra, quindi le quattro voci restano
 * sempre tutte visibili.
 */
export function Footer({ currentArea }: { currentArea?: Area }) {
  return (
    <footer className="bg-area-deep text-white">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-normal text-white">
              Montecchia Performance Center
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Quattro aree al Golf Club della Montecchia, Selvazzano Dentro
              (PD): palestra e corsi, Pilates Studio Reformer, Salute e
              Benessere, Golf Indoor.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={contatti.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={contatti.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-white/50">Le quattro aree</p>
            <ul className="mt-5 space-y-2.5">
              {allAreas.map((a) => {
                const isCurrent = a.key === currentArea;
                return (
                  <li key={a.key}>
                    <Link
                      href={a.href}
                      aria-current={isCurrent ? "page" : undefined}
                      className={
                        isCurrent
                          ? "text-sm text-white"
                          : "text-sm text-white/70 transition-colors hover:text-white"
                      }
                    >
                      {a.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <p className="eyebrow mt-8 text-white/50">Il centro</p>
            <ul className="mt-5 space-y-2.5">
              {centroLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/50">Contatti</p>
            <ul className="mt-5 space-y-2.5 text-sm text-white/70">
              <li>{contatti.via}</li>
              <li>
                {contatti.cap} {contatti.citta} ({contatti.provincia})
              </li>
              <li>
                <a
                  href={`tel:${contatti.telefono}`}
                  className="hover:text-white"
                >
                  {contatti.telefonoLeggibile}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contatti.email}`}
                  className="break-all hover:text-white"
                >
                  {contatti.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={contatti.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-colors hover:text-area-glow"
                >
                  Prenota il campo da golf →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/50">Palestra</p>
            <ul className="mt-5 space-y-1 text-sm text-white/70">
              {contatti.orari.palestra.map((o) => (
                <li key={o.giorni}>
                  {o.giorni}: {o.ore}
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-8 text-white/50">Segreteria</p>
            <ul className="mt-5 space-y-1 text-sm text-white/70">
              {contatti.orari.segreteria.map((o) => (
                <li key={o.giorni}>
                  {o.giorni}: {o.ore}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Riga legale. La ragione sociale e la partita IVA stanno qui e non
            solo dentro la privacy policy: vanno rese accessibili in modo
            diretto e permanente (D.Lgs 70/2003 art. 7), ed è dove il
            vecchio sito le teneva. */}
        <div className="mt-16 flex flex-col items-center gap-3 border-t border-white/15 pt-8 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {contatti.ragioneSociale} · P.IVA{" "}
            {contatti.piva}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>
            {/* Revocare il consenso deve costare quanto darlo: il pannello
                si riapre da qui, su ogni pagina. */}
            <PreferenzeCookie className="transition-colors hover:text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
}
