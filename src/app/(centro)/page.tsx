import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allAreas } from "@/data/areas";
import { contatti, indirizzoBreve, whatsappLink } from "@/data/contatti";

export const metadata: Metadata = {
  title: {
    absolute:
      "Montecchia Performance Center: palestra, Pilates Reformer e Golf Indoor a Padova",
  },
  description:
    "Quattro aree in un unico centro al Golf Club della Montecchia: palestra con corsi di gruppo, Studio Pilates Reformer, Golf Indoor e Salute e Benessere. Selvazzano Dentro (Padova).",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/",
  },
  openGraph: {
    title:
      "Montecchia Performance Center: palestra, Pilates Reformer e Golf Indoor",
    description:
      "Palestra con corsi di gruppo, Studio Pilates Reformer, Golf Indoor e area Salute e Benessere al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/esterno.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Montecchia Performance Center",
  url: "https://www.montecchiaperformancecenter.it/",
  description:
    "Palestra con corsi di gruppo, Studio Pilates Reformer, Golf Indoor e area Salute e Benessere al Golf Club della Montecchia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: contatti.via,
    addressLocality: contatti.citta,
    addressRegion: contatti.provincia,
    postalCode: contatti.cap,
    addressCountry: "IT",
  },
  telephone: contatti.telefono,
  email: contatti.email,
  areaServed: { "@type": "City", name: "Padova" },
  sameAs: [contatti.facebook, contatti.instagram],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <PageHero
        tall
        eyebrow="Golf Club della Montecchia · Padova"
        title={
          <>
            Un centro,
            <br />
            quattro aree
          </>
        }
        intro="Palestra e corsi di gruppo, Studio Pilates Reformer, Golf Indoor, Salute e Benessere. Ogni area ha i suoi spazi e i suoi professionisti, ma la struttura è una."
        image={{
          src: "/images/esterno.jpg",
          alt: "Il Montecchia Performance Center al Golf Club della Montecchia",
        }}
      >
        <WhatsAppButton variant="light">
          Prenota la prova gratuita
        </WhatsAppButton>
      </PageHero>

      {/* ============================================================
          LE QUATTRO AREE
          Quattro card in fila: foto sopra, titolo numerato e descrizione
          sotto. Niente riquadro, niente ombra: la foto è la superficie.
          ============================================================ */}
      <section className="section-padding" id="aree">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Le aree"
            title="Da dove vuoi partire?"
            intro="Ognuna ha i suoi spazi, i suoi professionisti e il suo calendario."
          />

          {/* Quattro in fila solo da 1280: a 1024 le card scenderebbero a
              212px e i titoli andrebbero a capo. Sotto, due per riga. */}
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4">
            {allAreas.map((area, i) => (
              <Link
                key={area.key}
                href={area.href}
                data-area={area.key}
                className="group flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-area focus-visible:ring-offset-4"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper-alt">
                  <Image
                    src={area.image.src}
                    alt={area.image.alt}
                    fill
                    // Le prime due card sono sopra la piega su desktop.
                    priority={i < 2}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl leading-snug text-primary transition-colors group-hover:text-area">
                  <span className="text-area">{area.n}</span>{" "}
                  {area.label}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {area.blurb}
                </p>
                <span className="link-area mt-5">
                  Scopri
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
              </Link>
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
          PROVA GRATUITA
          ============================================================ */}
      <section className="section-padding bg-area-deep text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
            La prima prova è gratuita
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Vale per la palestra, per il Pilates Reformer e per la valutazione
            nell&apos;area Salute. Scrivici su WhatsApp e fissiamo
            l&apos;appuntamento.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton>Prenota la prova gratuita</WhatsAppButton>
            <Link href="/contatti" className="btn-area-light">
              Altre informazioni
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
