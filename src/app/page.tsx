import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allAreas } from "@/data/areas";
import { contatti, indirizzoBreve, whatsappLink } from "@/data/contatti";

export const metadata: Metadata = {
  title: {
    absolute:
      "Montecchia Performance Center — Palestra, Pilates Reformer & Golf Indoor a Padova",
  },
  description:
    "Quattro aree in un unico centro al Golf Club della Montecchia: palestra con corsi di gruppo, Studio Pilates Reformer, Golf Indoor e Salute e Benessere. Selvazzano Dentro (Padova).",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/",
  },
  openGraph: {
    title:
      "Montecchia Performance Center — Palestra, Pilates Reformer & Golf Indoor",
    description:
      "Palestra con corsi di gruppo, Studio Pilates Reformer, Golf Indoor e area Salute e Benessere al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
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
    <div data-area="centro" className="font-body relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ============================================================
          SMISTAMENTO
          Il primo schermo non racconta: fa scegliere. Quattro riquadri,
          nessuno scroll necessario per vederli tutti e quattro.
          ============================================================ */}
      <h1 className="sr-only">
        Montecchia Performance Center — palestra, Pilates Reformer, golf indoor
        e salute a Selvazzano Dentro (Padova)
      </h1>

      {/* Intestazione sovrapposta ai riquadri: sul selettore non serve una
          barra di navigazione, serve sapere dove si è e come chiamarci. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="container-wide flex items-start justify-between gap-6 py-7">
          <p className="pointer-events-auto font-display text-lg leading-tight text-white drop-shadow-sm sm:text-xl">
            Montecchia
            <span className="block text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/70">
              Performance Center
            </span>
          </p>
          <div className="pointer-events-auto hidden items-center gap-7 text-sm text-white/80 sm:flex">
            <a
              href={`tel:${contatti.telefono}`}
              className="hover:text-white"
            >
              {contatti.telefonoLeggibile}
            </a>
            <Link href="/contatti" className="hover:text-white">
              Contatti
            </Link>
          </div>
        </div>
      </div>

      <section
        aria-label="Le quattro aree del centro"
        className="grid h-[100svh] min-h-[560px] grid-rows-4 md:grid-cols-2 md:grid-rows-2"
      >
        {allAreas.map((area, i) => (
          <Link
            key={area.key}
            href={area.href}
            data-area={area.key}
            className="group relative flex flex-col justify-end overflow-hidden focus:outline-none"
          >
            <Image
              src={area.image.src}
              alt=""
              fill
              // Solo il primo riquadro va precaricato: è il candidato LCP.
              // Gli altri tre sono comunque nel viewport, quindi partono
              // subito senza occupare la coda del preload.
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            {/* Due strati: uno scurisce la foto quanto basta a leggere il
                testo, l'altro tinge del colore dell'area all'hover. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-area opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-30" />
            {/* Filetto del colore dell'area: cresce all'hover. */}
            <div className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-area-glow transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />

            <div className="relative z-10 px-6 pb-6 pt-16 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
              <p className="font-display text-sm font-light text-white/50">
                {area.n}
              </p>
              <h2 className="mt-2 font-display text-2xl font-normal leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.5rem]">
                {area.label}
              </h2>
              <p className="mt-2 max-w-sm text-sm text-white/70 sm:mt-3">
                {area.tagline}
              </p>
              <span className="mt-4 hidden items-center gap-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 lg:inline-flex">
                Entra
                <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ============================================================
          IL CENTRO — sotto la piega, per chi arriva da Google e per chi
          non sa ancora quale area gli serve.
          ============================================================ */}
      <section className="section-padding" id="centro">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Golf Club della Montecchia · Padova"
            title="Un centro, quattro aree"
            intro="Palestra e corsi di gruppo, Studio Pilates Reformer, Golf Indoor, Salute e Benessere. Ogni area ha i suoi spazi, i suoi professionisti e il suo calendario — ma la struttura è una, e chi ti tratta e chi ti allena parlano tra loro."
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

          <p className="mt-14 text-sm text-muted">
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

      <Footer />
    </div>
  );
}
