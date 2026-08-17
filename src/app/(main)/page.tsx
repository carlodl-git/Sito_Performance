import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    "Palestra con corsi di gruppo, Studio Pilates Reformer e Golf Indoor al Golf Club della Montecchia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via della Montecchia 12",
    addressLocality: "Selvazzano Dentro",
    addressRegion: "PD",
    postalCode: "35030",
    addressCountry: "IT",
  },
  areaServed: { "@type": "City", name: "Padova" },
  sameAs: ["https://www.montecchiaperformancecenter.it/"],
};

/** Le quattro aree: sono il contenuto principale della home. */
const areas = [
  {
    href: "/palestra",
    n: "01",
    title: "Palestra",
    subtitle: "Corsi di gruppo e allenamento individuale",
    description:
      "Sala attrezzata e un calendario settimanale di corsi: functional, tonificazione, yoga, Fit for Golf. Con istruttori qualificati, su prenotazione.",
    image: "/images/corsi.jpg",
    alt: "Corso di gruppo in palestra al Montecchia Performance Center",
  },
  {
    href: "/pilates",
    n: "02",
    title: "Studio Pilates Reformer",
    subtitle: "Individuale, in duetto o in piccolo gruppo",
    description:
      "Uno studio dedicato al Pilates sul Reformer: lavoro di precisione su forza profonda, mobilità e postura, seguito uno a uno dall'istruttrice.",
    image: "/images/yoga-indoor.jpg",
    alt: "Studio Pilates Reformer al Montecchia Performance Center",
  },
  {
    href: "/golf-lab",
    n: "03",
    title: "Golf Indoor",
    subtitle: "Simulatori e analisi dello swing",
    description:
      "Simulatori con tecnologia TrackMan, analisi biomeccanica e lezioni con maestri PGA. Si gioca e si migliora tutto l'anno, con qualsiasi meteo.",
    image: "/images/golf-indoor-lezione.jpg",
    alt: "Sala simulatori del Golf Indoor con giocatori in sessione",
  },
  {
    href: "/salute-benessere",
    n: "04",
    title: "Salute e Benessere",
    subtitle: "Fisioterapia, osteopatia, nutrizione",
    description:
      "I professionisti che si occupano di recupero, postura e alimentazione, in dialogo diretto con i trainer delle altre aree.",
    image: "/images/servizi.jpg",
    alt: "Area Salute e Benessere del Montecchia Performance Center",
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
        intro="Palestra e corsi di gruppo, Studio Pilates Reformer, Golf Indoor, Salute e Benessere. Scegli da dove vuoi partire."
        image={{
          src: "/images/esterno.jpg",
          alt: "Il Montecchia Performance Center al Golf Club della Montecchia",
        }}
      />

      {/* Smistamento — il cuore della home */}
      <section className="section-padding" id="aree">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Le aree"
            title="Dove vuoi andare?"
            intro="Ognuna ha i suoi spazi, i suoi professionisti e il suo calendario."
          />

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group flex flex-col border-t border-line pt-7 transition-colors hover:border-primary"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl font-light text-accent">
                    {area.n}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-primary transition-colors group-hover:text-accent sm:text-3xl">
                      {area.title}
                    </h3>
                    <p className="eyebrow mt-2">{area.subtitle}</p>
                  </div>
                </div>

                <div className="relative mt-7 aspect-[16/10] w-full overflow-hidden bg-paper-alt">
                  <Image
                    src={area.image}
                    alt={area.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <p className="mt-6 max-w-[52ch] text-ink-soft">
                  {area.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Scopri
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-sm text-muted">
            Non sai da dove iniziare?{" "}
            <a
              href="https://wa.me/393314059134"
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

      {/* Trasversale alle aree */}
      <section className="section-padding bg-paper-alt">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Comune a tutte le aree"
            title="Le persone prima degli spazi"
            intro="Le quattro aree condividono la struttura e i professionisti: chi ti tratta e chi ti allena lavorano sullo stesso percorso."
          />
          <div className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {[
              {
                href: "/team",
                title: "Il team",
                text: "Trainer, istruttori, maestri di golf e specialisti del recupero: oltre 13 professionisti.",
              },
              {
                href: "/servizi",
                title: "Tutte le attività",
                text: "L'indice completo di corsi, allenamenti e prestazioni, area per area.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline justify-between gap-6 border-t border-line py-6 transition-colors hover:border-primary"
              >
                <div>
                  <h3 className="heading-sub group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-sm text-ink-soft">
                    {item.text}
                  </p>
                </div>
                <span className="shrink-0 text-accent transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
            La prima prova è gratuita
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Scrivici su WhatsApp per fissare il tuo appuntamento.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton>Prenota la prova gratuita</WhatsAppButton>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
            >
              Altre info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
