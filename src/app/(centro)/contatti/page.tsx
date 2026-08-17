import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { allAreas } from "@/data/areas";
import { contatti, indirizzoBreve, mapsEmbed, mapsLink } from "@/data/contatti";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Vieni a trovarci al Montecchia Performance Center, ${indirizzoBreve}. Telefono, email, orari e mappa.`,
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/contatti",
  },
  openGraph: {
    title: "Contatti | Montecchia Performance Center (Padova)",
    description: `${indirizzoBreve}. Telefono, email, orari e mappa.`,
    url: "https://www.montecchiaperformancecenter.it/contatti",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Il centro"
        title="Contatti"
        intro="Indirizzo, orari e come raggiungerci. Per informazioni e prenotazioni scrivici su WhatsApp: è il canale su cui rispondiamo più in fretta."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Dove siamo */}
            <div>
              <h2 className="heading-section">Dove siamo</h2>

              <address className="mt-7 not-italic">
                <p className="font-medium text-primary">{contatti.nome}</p>
                <p className="mt-1 text-ink-soft">
                  {contatti.via}
                  <br />
                  {contatti.cap} {contatti.citta} ({contatti.provincia})
                </p>
                <p className="mt-6 text-ink-soft">
                  <a
                    href={`tel:${contatti.telefono}`}
                    className="link-area !text-base"
                  >
                    {contatti.telefonoLeggibile}
                  </a>
                  <br />
                  <a
                    href={`mailto:${contatti.email}`}
                    className="link-area !text-base"
                  >
                    {contatti.email}
                  </a>
                </p>
              </address>

              <div className="mt-10">
                <p className="eyebrow">Orari</p>
                <ul className="mt-4 space-y-1 text-ink-soft">
                  {contatti.orari.map((o) => (
                    <li key={o.giorni}>
                      <span className="inline-block w-24 text-primary">
                        {o.giorni}
                      </span>
                      {o.ore}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <div className="overflow-hidden border border-line">
                  <iframe
                    src={mapsEmbed}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mappa di ${contatti.nome}`}
                  />
                </div>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-area mt-4"
                >
                  Apri in Google Maps
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Scrivici */}
            <div>
              <h2 className="heading-section">Scrivici</h2>
              <p className="mt-6 text-ink-soft">
                Non c&apos;è un modulo da compilare: scrivici su WhatsApp e ti
                rispondiamo, oppure manda una email. Per le sessioni al Golf
                Indoor si passa direttamente dal booking del club.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <WhatsAppButton message="Ciao! Vorrei informazioni sul centro">
                  Scrivici su WhatsApp
                </WhatsAppButton>
                <a
                  href={`mailto:${contatti.email}`}
                  className="btn-secondary"
                >
                  Invia una email
                </a>
              </div>

              <div className="mt-12 border border-line bg-paper-alt p-7">
                <p className="eyebrow">Golf Indoor</p>
                <h3 className="heading-sub mt-3">Prenota una postazione</h3>
                <p className="mt-3 text-sm text-ink-soft">
                  I simulatori si prenotano dal gestionale del club, che mostra
                  le disponibilità in tempo reale.
                </p>
                <a
                  href={contatti.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-area mt-5"
                >
                  Vai al booking
                  <span aria-hidden>→</span>
                </a>
              </div>

              {/* Smistamento: chi arriva qui spesso cerca un'area, non il centro. */}
              <div className="mt-12">
                <p className="eyebrow">Cerchi un&apos;area in particolare?</p>
                <ul className="mt-5">
                  {allAreas.map((a) => (
                    <li key={a.key}>
                      <Link
                        href={a.href}
                        className="group flex items-baseline justify-between gap-4 border-t border-line py-4 transition-colors hover:border-area"
                      >
                        <span className="text-primary transition-colors group-hover:text-area">
                          {a.label}
                        </span>
                        <span
                          className="shrink-0 text-sm text-area transition-transform group-hover:translate-x-1"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
