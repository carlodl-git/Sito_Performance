import Link from "next/link";

const footerLinks = [
  { href: "/palestra", label: "Palestra" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-brand text-white">
      <div className="container-narrow section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-accent">
              Montecchia Performance Center
            </p>
            <p className="mt-3 text-sm text-neutral-300">
              Centro di eccellenza per fitness, golf e benessere.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Navigazione
            </p>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://booking.montecchiaperformancecenter.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent transition-colors hover:text-accent-light"
                >
                  Golf Indoor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Contatti
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-300">
              <li>Via Montecchia, Padova</li>
              <li>
                <a href="tel:+393314059134" className="hover:text-white">
                  +39 331 405 9134
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@montecchiaperformancecenter.it"
                  className="hover:text-white"
                >
                  info@montecchiaperformancecenter.it
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              Orari
            </p>
            <p className="mt-4 text-sm text-neutral-300">
              Lun–Ven: 7:00 – 22:00
              <br />
              Sab: 8:00 – 18:00
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-primary/30 pt-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Montecchia Performance Center. Tutti i
          diritti riservati.
        </div>
      </div>
    </footer>
  );
}
