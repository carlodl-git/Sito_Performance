import Link from "next/link";
import type { Metadata } from "next";
import { servicesByArea } from "@/data/services";
import { areaKeys, areaMeta } from "@/data/areas";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Tutte le attività e i servizi",
  description:
    "L'indice completo del Montecchia Performance Center: corsi e personal training in palestra, Pilates Reformer, golf indoor, fisioterapia, osteopatia e nutrizione.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/servizi",
  },
  openGraph: {
    title: "Tutte le attività e i servizi | Montecchia Performance Center",
    description:
      "Corsi e personal training, Pilates Reformer, golf indoor, fisioterapia, osteopatia e nutrizione. Tutte le attività del centro, area per area.",
    url: "https://www.montecchiaperformancecenter.it/servizi",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

export default function ServiziPage() {
  return (
    <>
      <PageHero
        full
        eyebrow="Indice"
        title="Tutte le attività"
        intro="L'elenco completo di ciò che trovi al centro, diviso nelle quattro aree. Se sai già dove vuoi andare, parti dall'area."
        image={{
          src: "/images/palestra-1.jpg",
          alt: "La sala corsi del Montecchia Performance Center",
        }}
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <WhatsAppButton
            message="Ciao! Vorrei prenotare una consulenza gratuita"
            variant="light"
          >
            Scrivici su WhatsApp
          </WhatsAppButton>
        </div>
        <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-3" aria-label="Vai all'area">
          {areaKeys.map((area) => (
            <a
              key={area}
              href={`#${area}`}
              className="border-b border-white/40 pb-1 text-sm text-white transition-colors hover:border-white"
            >
              {areaMeta[area].label}
            </a>
          ))}
        </nav>
      </PageHero>

      {areaKeys.map((area, i) => {
        const items = servicesByArea(area);
        if (items.length === 0) return null;
        const meta = areaMeta[area];

        return (
          <section
            key={area}
            id={area}
            className={`section-padding scroll-mt-24 ${
              i % 2 === 1 ? "bg-paper-alt" : ""
            }`}
          >
            <div className="container-narrow">
              <SectionHeading
                title={meta.label}
                intro={meta.tagline}
                // `link-area` invece delle utility a mano: erano le stesse,
                // tranne `hover:text-accent-dark`, che non esiste nel tema
                // (accent ha DEFAULT e light, non dark) e quindi lasciava il
                // link senza stato hover.
                action={
                  <Link href={meta.href} className="link-area">
                    Vai all&apos;area
                    <span aria-hidden>→</span>
                  </Link>
                }
              />

              <ul className="mt-12">
                {items.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servizi/${service.slug}`}
                      className="group flex flex-col gap-2 border-t border-line py-7 transition-colors hover:border-primary sm:flex-row sm:items-baseline sm:gap-10"
                    >
                      <h3 className="heading-sub shrink-0 sm:w-64 group-hover:text-accent">
                        {service.title}
                      </h3>
                      <p className="max-w-[60ch] text-sm text-ink-soft">
                        {service.shortDescription}
                      </p>
                      <span className="ml-auto hidden shrink-0 text-accent transition-transform group-hover:translate-x-1 sm:block">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}

      <section className="section-padding bg-area-deep text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal sm:text-4xl">
            Non sai quale attività fa per te?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            La prima consulenza è gratuita: ti aiutiamo a identificare il
            percorso più adatto ai tuoi obiettivi.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Ciao! Vorrei prenotare una consulenza gratuita">
              Scrivici su WhatsApp
            </WhatsAppButton>
            <Link
              href="/team"
              className="inline-flex items-center justify-center rounded-sm px-7 py-3.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Scopri il team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
