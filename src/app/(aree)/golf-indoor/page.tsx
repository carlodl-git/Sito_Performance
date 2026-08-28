import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { servicesByArea } from "@/data/services";
import { teamByArea } from "@/data/team";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersonCard } from "@/components/ui/PersonCard";
import { areaMeta } from "@/data/areas";
import { contatti } from "@/data/contatti";

const meta = areaMeta.golf;

export const metadata: Metadata = {
  title: "Golf Indoor: simulatore golf a Padova",
  description:
    "Simulatore golf indoor TrackMan al Golf Club della Montecchia. Lezioni con maestri PGA, analisi dello swing, fitting e golf fitness. Selvazzano Dentro, Padova.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/golf-indoor",
  },
  openGraph: {
    title: "Golf Indoor: simulatore golf a Padova",
    description:
      "Simulatori TrackMan, analisi dello swing e maestri PGA al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/golf-indoor",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/golf-indoor-lezione.jpg"],
  },
};

/** La strumentazione: ognuno misura una cosa diversa. */
const tecnologie = [
  {
    label: "TrackMan",
    desc: "Radar doppler: velocità della testa, angolo di attacco, spin e traiettoria di ogni colpo.",
  },
  {
    label: "SMART2MOVE",
    desc: "Pedane di forza: come scarichi il peso a terra durante lo swing.",
  },
  {
    label: "K-Vest",
    desc: "Sensori 3D sul corpo: sequenza e rotazione di bacino e torace.",
  },
  {
    label: "SAM PuttLab",
    desc: "Analisi del putting: allineamento, ritmo e ripetibilità del colpo.",
  },
];

const gallery = [
  { src: "/images/golf-indoor-1.jpg", alt: "Postazioni dei simulatori golf indoor" },
  { src: "/images/golf-indoor-2.jpg", alt: "Simulatore golf con schermo di proiezione" },
  {
    src: "/images/golf-indoor-putting.jpg",
    alt: "Giocatori in sessione sul green indoor e alle postazioni",
  },
];

export default function GolfIndoorPage() {
  const maestri = teamByArea("golf");
  const attivita = servicesByArea("golf");

  return (
    <>
      <PageHero
        full
        title={meta.label}
        intro="Simulatori con tecnologia TrackMan e maestri PGA. Si gioca e si migliora tutto l'anno, con qualsiasi meteo, e ogni colpo lascia un dato."
        image={{
          src: "/images/GolfIndoor_hero.jpg",
          alt: "Giocatori in sessione alle postazioni del Golf Indoor",
        }}
      >
        <a
          href={contatti.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-area-light"
        >
          Prenota una sessione
        </a>
      </PageHero>

      {/* I simulatori */}
      <section id="simulatori" className="section-padding scroll-mt-24">
        <div className="container-narrow">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="I simulatori"
                title="Giocare al coperto, davvero"
              />
              <p className="mt-7 text-ink-soft">
                Le postazioni sono dotate di simulatori con tecnologia TrackMan,
                il sistema di tracciamento più preciso in commercio. Ogni colpo
                viene misurato: velocità della testa del bastone, angolo di
                lancio, spin, traiettoria e distanza.
              </p>
              <p className="mt-4 text-ink-soft">
                Servono per la lezione con il maestro, per la pratica libera,
                per il fitting dei bastoni e per allenarsi nei mesi in cui il
                campo non è praticabile.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden bg-paper-alt">
              <Image
                src="/images/trackman_io_immagine.webp"
                alt="Simulatore TrackMan in azione al Golf Indoor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden bg-paper-alt"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analisi dello swing */}
      <section
        id="analisi"
        className="section-padding scroll-mt-24 bg-area-tint"
      >
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Analisi dello swing"
            title="Quattro strumenti, quattro cose diverse"
            intro="Il simulatore dice dove va la palla. Per capire perché ci va servono anche il corpo e i piedi: ogni strumento misura un pezzo del movimento."
          />

          <div className="mt-14">
            {tecnologie.map((tech, i) => (
              <div key={tech.label} className="row-rule">
                <div className="grid gap-3 md:grid-cols-[auto_14rem_1fr] md:gap-12">
                  <span className="area-num">{`0${i + 1}`}</span>
                  <h3 className="heading-sub">{tech.label}</h3>
                  <p className="max-w-2xl text-ink-soft">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-muted">
            L&apos;analisi si prenota come una lezione: si guarda il movimento,
            si legge il referto insieme e si decide su cosa lavorare.
          </p>
        </div>
      </section>

      {/* I maestri */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="I maestri"
            title="Chi ti insegna"
            intro="Il Golf Indoor è guidato dai maestri della Montecchia Golf Academy: professionisti PGA con esperienza internazionale."
            action={
              <Link href="/team" className="link-area">
                Tutto il team
                <span aria-hidden>→</span>
              </Link>
            }
          />
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {maestri.map((m) => (
              <PersonCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Golf fitness */}
      <section
        id="fitness"
        className="section-padding scroll-mt-24 bg-area-tint"
      >
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Golf fitness"
            title="Il corpo che regge lo swing"
            intro="Il lavoro al simulatore si completa con la preparazione fisica specifica per il golf, in palestra con i trainer del centro."
          />
          <ul className="mt-12">
            {attivita.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servizi/${service.slug}`}
                  className="group flex flex-col gap-2 border-t border-line py-7 transition-colors hover:border-area sm:flex-row sm:items-baseline sm:gap-10"
                >
                  <h3 className="heading-sub shrink-0 transition-colors group-hover:text-area sm:w-64">
                    {service.title}
                  </h3>
                  <p className="max-w-[60ch] text-sm text-ink-soft">
                    {service.shortDescription}
                  </p>
                  <span
                    className="ml-auto hidden shrink-0 text-area transition-transform group-hover:translate-x-1 sm:block"
                    aria-hidden
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Prenota */}
      <section
        id="prenota"
        className="section-padding scroll-mt-24 bg-area-deep text-white"
      >
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
            Prenota la tua sessione
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Lezione con il maestro, pratica libera, analisi dello swing o
            fitting. Le postazioni si prenotano online.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={contatti.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Prenota online
            </a>
            <Link href="/contatti" className="btn-area-light">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
