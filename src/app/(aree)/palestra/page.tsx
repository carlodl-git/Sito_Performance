import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { servicesByArea } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CourseTimetable } from "@/components/ui/CourseTimetable";
import { areaMeta } from "@/data/areas";
import { contatti } from "@/data/contatti";
import { SchemaArea } from "@/components/seo/DatiStrutturati";

const meta = areaMeta.palestra;

export const metadata: Metadata = {
  title: "Palestra e corsi a Padova (Selvazzano)",
  description:
    "Palestra al Golf Club della Montecchia: corsi di gruppo, personal training, functional, yoga. Orario 2025/26, istruttori qualificati, su prenotazione.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/palestra",
  },
  openGraph: {
    title: "Palestra e corsi a Padova | Montecchia Performance Center",
    description:
      "Corsi di gruppo, personal training, functional e yoga al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/palestra",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

/** I tre modi di allenarsi nell'area: è la prima cosa da capire. */
const modalita = [
  {
    n: "01",
    title: "Corso di gruppo",
    text: "Un calendario settimanale fisso, con istruttore. Ti presenti all'orario del corso: non devi costruirti la scheda, ci pensa chi conduce.",
    link: { href: "#corsi", label: "Vedi i corsi" },
  },
  {
    n: "02",
    title: "Personal training",
    text: "Uno a uno con il trainer, all'orario che decidi tu. Il formato per chi riparte da zero, per chi ha un obiettivo preciso o un vincolo fisico.",
    link: { href: "/servizi/personal-training", label: "Come funziona" },
  },
  {
    n: "03",
    title: "Mini group",
    text: "In due o tre, con lo stesso trainer. Costa meno dell'individuale e mantiene la correzione su ogni esercizio.",
    link: { href: "/servizi/mini-group-training", label: "Come funziona" },
  },
];

/**
 * I corsi di gruppo, con istruttore e scheda di approfondimento.
 * `slug` punta alla scheda in /servizi; è la stessa attività, non una diversa.
 */
const corsi = [
  {
    name: "Functional Training",
    slug: "functional",
    desc: "Allenamento a corpo libero e con attrezzi per migliorare forza, mobilità e coordinazione. Sessioni di gruppo ad alta intensità adatte a tutti i livelli.",
    instructor: "Anna Simone",
    role: "Personal Trainer & Istruttrice Functional",
    image: "/images/palestra-2.jpg",
  },
  {
    name: "Yoga",
    slug: "yoga",
    desc: "Pratica che unisce respiro, postura e consapevolezza. Lavora su flessibilità, equilibrio e gestione dello stress. Adatta a tutti i livelli, anche all'aperto nei mesi caldi.",
    instructor: "Chiara Destro",
    role: "Istruttrice Yoga & Pilates",
    image: "/images/yoga-esterno.jpg",
  },
  {
    name: "Group Training",
    slug: "allenamento-di-gruppo",
    desc: "Allenamento di gruppo ad alta intensità con programmi strutturati. Motivazione, risultati e spirito di squadra.",
    instructor: "Sascha Antoniutti",
    role: "Master Trainer & Personal Trainer",
    image: "/images/palestra-3.jpg",
  },
  {
    name: "AcquaGym",
    slug: "piscina",
    desc: "Allenamento in acqua a basso impatto articolare: tonificazione, mobilità e cardio. Attivo solo nei mesi estivi (giugno, luglio, agosto).",
    instructor: "Da definire",
    role: "Istruttore/Istruttrice AcquaGym",
    image: "/images/acquagym.jpg",
  },
];

const corsiSlugs = corsi.map((c) => c.slug);

const gallery = [
  { src: "/images/palestra-1.jpg", alt: "La sala corsi della palestra" },
  { src: "/images/palestra-2.jpg", alt: "Area pesi e macchinari" },
  { src: "/images/palestra-3.jpg", alt: "Zona allenamento funzionale" },
];

export default function PalestraPage() {
  // Le attività dell'area che non sono corsi di gruppo né una delle tre
  // modalità già raccontate: elencate in coda, senza ripetizioni.
  const giaRaccontati = [
    ...corsiSlugs,
    "personal-training",
    "mini-group-training",
  ];
  const altreAttivita = servicesByArea("palestra").filter(
    (s) => !giaRaccontati.includes(s.slug),
  );

  return (
    <>
      <SchemaArea
        nome="Palestra & Corsi"
        descrizione={meta.tagline}
        url="/palestra"
      />

      <PageHero
        full
        title={meta.label}
        intro="Una grande sala corsi e una saletta per il personal training, con un calendario settimanale fisso. Gruppi contenuti: ai corsi c'è sempre un istruttore che guarda come ti muovi."
        image={meta.image}
      >
        <WhatsAppButton message={meta.whatsapp} variant="light">
          Scrivici su WhatsApp
        </WhatsAppButton>
      </PageHero>

      {/* Come ti alleni: l'orientamento, prima del dettaglio */}
      <section id="allenamenti" className="section-padding scroll-mt-24">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Come ti alleni"
            title="Tre modi di allenarti"
            intro="Puoi seguire il calendario dei corsi, lavorare uno a uno con un trainer, o stare in mezzo con il mini group. Si può anche combinare."
          />

          <div className="mt-14">
            {modalita.map((m) => (
              <div key={m.n} className="row-rule">
                <div className="grid gap-4 md:grid-cols-[auto_14rem_1fr] md:gap-12">
                  <span className="area-num">{m.n}</span>
                  <h3 className="heading-sub">{m.title}</h3>
                  <div>
                    <p className="max-w-2xl text-ink-soft">{m.text}</p>
                    <Link href={m.link.href} className="link-area mt-4">
                      {m.link.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gli spazi */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">Gli spazi</p>
              <h3 className="heading-sub mt-4">Due sale, più lo studio</h3>
              <p className="mt-5 max-w-[46ch] text-ink-soft">
                Una grande sala corsi, con i macchinari e gli attrezzi per il
                lavoro a corpo libero, e una saletta riservata al personal
                training, dove si lavora uno a uno senza spettatori. Sono
                dimensionate per gruppi contenuti: non ci si aspetta la coda a
                un attrezzo.
              </p>
              <p className="mt-4 max-w-[46ch] text-ink-soft">
                La terza sala del centro è lo{" "}
                <Link
                  href="/pilates"
                  className="text-area underline underline-offset-4"
                >
                  studio Pilates
                </Link>
                , con il Reformer: ha spazi e istruttrice sue.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gallery.map((img, i) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden bg-paper-alt ${
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* I corsi di gruppo */}
      <section
        id="corsi"
        className="section-padding scroll-mt-24 bg-area-tint"
      >
        <div className="container-narrow">
          <SectionHeading
            eyebrow="I corsi"
            title="Corsi di gruppo"
            intro="Con istruttori qualificati e programmi aggiornati. Solo su prenotazione."
          />

          <div className="mt-14 space-y-16">
            {corsi.map((course, i) => (
              <article
                key={course.name}
                className="grid items-center gap-8 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-paper ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div>
                  <h3 className="font-display text-2xl leading-tight text-primary sm:text-3xl">
                    {course.name}
                  </h3>
                  <p className="mt-5 max-w-[54ch] text-ink-soft">
                    {course.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-area/10 font-display text-base text-area">
                      {course.instructor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-primary">
                        {course.instructor}
                      </p>
                      <p className="text-sm text-muted">{course.role}</p>
                    </div>
                  </div>

                  <Link href={`/servizi/${course.slug}`} className="link-area mt-8">
                    Scheda completa
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Orario */}
      <section id="orario" className="section-padding scroll-mt-24">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Calendario"
            title="Orario dei corsi"
            intro="Stagione 2025/2026, da settembre a giugno. Il venerdì mattina si inizia alle 08:45."
          />
          <div className="mt-12">
            <CourseTimetable />
          </div>
          <div className="mt-8 flex flex-col gap-1">
            <p className="text-sm text-muted">
              Corsi <span className="text-ink">solo su prenotazione</span>:
              WhatsApp {contatti.telefonoLeggibile}.
            </p>
            <p className="text-sm text-muted">
              AcquaGym attiva solo nei mesi estivi (giugno, luglio, agosto).
            </p>
          </div>
        </div>
      </section>

      {/* Altre attività dell'area */}
      {altreAttivita.length > 0 && (
        <section className="section-padding bg-area-tint">
          <div className="container-narrow">
            <SectionHeading
              eyebrow="Oltre ai corsi"
              title="Le altre attività dell'area"
              intro="Percorsi fuori dal calendario dei corsi, su appuntamento."
            />
            <ul className="mt-12">
              {altreAttivita.map((service) => (
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
            <p className="mt-10 text-sm text-muted">
              Cerchi il Pilates sul Reformer?{" "}
              <Link
                href="/pilates"
                className="border-b border-line pb-0.5 text-primary transition-colors hover:border-primary"
              >
                È nel Pilates Studio Reformer
              </Link>
              , che è un&apos;area a sé.
            </p>
          </div>
        </section>
      )}

      {/* Consulenza gratuita */}
      <section
        id="prenota"
        className="section-padding scroll-mt-24 bg-area-deep text-white"
      >
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
            La prima consulenza è gratuita
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Ci sediamo dieci minuti, guardiamo come ti muovi e scegliamo il
            corso o il formato giusto per te.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Ciao! Vorrei prenotare una consulenza gratuita per la palestra">
              Scrivici su WhatsApp
            </WhatsAppButton>
            <Link href="/contatti" className="btn-area-light">
              Contatti
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
