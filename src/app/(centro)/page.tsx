import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allAreas } from "@/data/areas";
import { contatti, indirizzoBreve, whatsappLink } from "@/data/contatti";
import { SchemaCentro } from "@/components/seo/DatiStrutturati";

export const metadata: Metadata = {
  title: {
    absolute:
      "Montecchia Performance Center: palestra, Pilates Reformer, salute e Golf Indoor a Padova",
  },
  description:
    "Quattro aree in un unico centro al Golf Club della Montecchia: palestra con corsi di gruppo, Pilates Studio Reformer, Salute e Benessere e Golf Indoor. Selvazzano Dentro (Padova).",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/",
  },
  openGraph: {
    title:
      "Montecchia Performance Center: palestra, Pilates Reformer e Golf Indoor",
    description:
      "Palestra con corsi di gruppo, Pilates Studio Reformer, Salute e Benessere e Golf Indoor al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/performance-esterno-tramonto.jpg"],
  },
};

/** Pagine che valgono per tutte e quattro le aree. */
const centro = [
  {
    href: "/team",
    title: "Il team",
    text: "Trainer, istruttori, maestri di golf e specialisti del recupero: oltre tredici professionisti, ognuno con la sua scheda.",
  },
  {
    href: "/servizi",
    title: "Tutte le attività",
    text: "L'indice completo di corsi, allenamenti e prestazioni, area per area.",
  },
  {
    href: "/chi-siamo",
    title: "Chi siamo",
    text: "Come è nato il centro, dove si trova e come lavorano insieme le quattro aree.",
  },
  {
    href: "/contatti",
    title: "Dove siamo",
    text: `${indirizzoBreve}. Orari, mappa e come raggiungerci.`,
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaCentro />

      <PageHero
        full
        eyebrow="Golf Club della Montecchia · Padova"
        title="Montecchia Performance Center"
        subtitle="Un centro, quattro aree"
        intro="Palestra e corsi di gruppo, Pilates sul Reformer, fisioterapia e osteopatia, golf indoor."
        image={{
          src: "/images/performance-esterno-tramonto.jpg",
          alt: "La club house del Golf Club della Montecchia al tramonto, vista dal putting green",
        }}
      >
        <WhatsAppButton variant="light">
          Scrivici su WhatsApp
        </WhatsAppButton>
      </PageHero>

      {/* ============================================================
          LE QUATTRO AREE
          Lista verticale: card collegate da un filetto. Al passaggio
          del mouse crescono, si schiariscono e scoprono la descrizione.
          Su mobile sono già aperte: l'hover non esiste, non si può
          chiedere di scoprirle.
          ============================================================ */}
      <section className="section-padding" id="aree">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Le aree"
            title="Da dove vuoi partire?"
            intro="Ogni area ha i suoi spazi, i suoi professionisti e il suo calendario."
          />

          <div className="mt-14 flex flex-col items-center lg:mt-16">
            {allAreas.map((area, i) => (
              <Fragment key={area.key}>
                {i > 0 && <span className="area-card-divider" aria-hidden />}

                <Link
                  href={area.href}
                  data-area={area.key}
                  className="area-card group block"
                >
                  <Image
                    src={area.image.src}
                    alt=""
                    fill
                    // Le prime due sono sopra la piega su desktop.
                    priority={i < 2}
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="area-card__img"
                  />

                  {/* Niente numero d'ordine qui: in colore d'area sulla foto
                      schiarita faceva 1.75:1, e in una lista verticale
                      l'ordine si legge già dalla posizione. */}
                  <div className="relative z-10 flex h-full flex-col items-center justify-center px-7 py-10 text-center sm:px-10">
                    <h3 className="area-card__title font-display leading-snug text-white">
                      {area.label}
                    </h3>
                    <p className="area-card__desc mt-3.5 max-w-md overflow-hidden text-[0.9375rem] leading-relaxed text-white/85">
                      {area.blurb}
                    </p>
                  </div>
                </Link>
              </Fragment>
            ))}
          </div>

          <p className="mt-16 text-sm text-muted">
            Non sai da dove iniziare?{" "}
            <a
              href={whatsappLink("Ciao! Vorrei informazioni sul centro")}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line pb-0.5 text-primary transition-colors hover:border-primary"
            >
              Scrivici su WhatsApp
            </a>{" "}
            e ti indirizziamo noi.
          </p>
        </div>
      </section>

      {/* ============================================================
          IL CENTRO
          ============================================================ */}
      <section className="section-padding bg-paper-alt" id="centro">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Comune a tutte le aree"
            title="Le persone prima degli spazi"
            intro="Le quattro aree condividono la struttura e i professionisti: chi ti tratta e chi ti allena lavorano sullo stesso percorso."
          />

          <div className="mt-14 grid gap-x-12 gap-y-2 sm:grid-cols-2">
            {centro.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline justify-between gap-6 border-t border-line py-6 transition-colors hover:border-area"
              >
                <div>
                  <h3 className="heading-sub transition-colors group-hover:text-area">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-sm text-ink-soft">
                    {item.text}
                  </p>
                </div>
                <span
                  className="shrink-0 text-area transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONSULENZA GRATUITA
          ============================================================ */}
      <section className="section-padding bg-area-deep text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
            La prima consulenza è gratuita
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Vale per la palestra, per il Pilates Reformer e per l&apos;area
            Salute: si guarda da dove parti e si sceglie insieme il percorso,
            senza impegno.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton>Scrivici su WhatsApp</WhatsAppButton>
            <Link href="/contatti" className="btn-area-light">
              Altre informazioni
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
