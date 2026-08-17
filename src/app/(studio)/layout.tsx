import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./studio.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-studio-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-studio-body",
  display: "swap",
});

const WHATSAPP =
  "https://wa.me/393314059134?text=Ciao!%20Vorrei%20informazioni%20sullo%20Studio%20Pilates%20Reformer";

const nav = [
  { href: "#metodo", label: "Il metodo" },
  { href: "#lezioni", label: "Le lezioni" },
  { href: "#a-chi", label: "A chi si rivolge" },
  { href: "#prenota", label: "Prenota" },
];

export default function StudioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`studio ${cormorant.variable} ${jost.variable}`}>
      <header className="sticky top-0 z-50 border-b border-[var(--st-line)] bg-[var(--st-bg)]/90 backdrop-blur">
        <div className="st-container flex h-20 items-center justify-between gap-6">
          <Link href="/pilates" className="leading-tight">
            <span className="st-display block text-xl tracking-tight">
              Studio Pilates
            </span>
            <span className="st-eyebrow block text-[0.6rem]">
              Reformer · Montecchia
            </span>
          </Link>

          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Studio Pilates"
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="st-nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="st-btn hidden !px-6 !py-3 lg:inline-flex"
          >
            Prenota
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[var(--st-line)]">
        <div className="st-container st-section--tight">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="st-display text-2xl">Studio Pilates Reformer</p>
              <p className="st-small mt-3">
                Via Montecchia 12
                <br />
                35030 Selvazzano Dentro (PD)
              </p>
            </div>
            <div>
              <p className="st-eyebrow">Contatti</p>
              <p className="st-small mt-4">
                <a href="tel:+393314059134" className="st-link">
                  +39 331 405 9134
                </a>
                <br />
                <a
                  href="mailto:info@montecchiaperformancecenter.it"
                  className="st-link"
                >
                  info@montecchiaperformancecenter.it
                </a>
              </p>
            </div>
            <div>
              <p className="st-eyebrow">Lo studio</p>
              <p className="st-small mt-4">
                Lo Studio Pilates è una delle quattro aree del Montecchia
                Performance Center.
              </p>
              <Link href="/" className="st-link st-small mt-4 inline-block">
                Vai al Performance Center →
              </Link>
            </div>
          </div>

          <div className="st-small mt-14 flex flex-col gap-2 border-t border-[var(--st-line)] pt-8 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Montecchia Performance Center</p>
            <Link href="/privacy-policy" className="st-link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
