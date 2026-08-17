import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { servicesByArea } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CourseTimetable } from "@/components/ui/CourseTimetable";

export const metadata: Metadata = {
  title: "Palestra a Padova (Selvazzano)",
  description:
    "Palestra al Golf Club della Montecchia: personal training, allenamento di gruppo, functional, yoga. Corsi su prenotazione e team qualificato.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/palestra",
  },
  openGraph: {
    title: "Palestra a Padova (Selvazzano) — Montecchia Performance Center",
    description:
      "Personal training, allenamento di gruppo, functional, yoga al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/palestra",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

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
  { src: "/images/palestra-1.jpg", alt: "Sala palestra principale" },
  { src: "/images/palestra-2.jpg", alt: "Area pesi e macchinari" },
  { src: "/images/palestra-3.jpg", alt: "Zona allenamento funzionale" },
];

export default function PalestraPage() {
  // Le attività dell'area che non sono corsi di gruppo (personal training,
  // mini group, tone…): elencate in coda, senza ripetere i corsi qui sopra.
  const altreAttivita = servicesByArea("palestra").filter(
    (s) => !corsiSlugs.includes(s.slug),
  );

  return (
    <>
      <PageHero
        eyebrow="Area 01"
        title="La Palestra"
        intro="Uno spazio dedicato al personal training e ai corsi di gruppo, seguiti da professionisti. Pochi macchinari, tanta qualità."
        image={{
          src: "/images/palestra-2.jpg",
          alt: "Sala della palestra al Montecchia Performance Center",
        }}
      />

      {/* Struttura */}
      <section className="section-padding" id="struttura">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="Gli spazi"
              title="Struttura e spazi"
              intro="Uno spazio funzionale con macchinari e pesi, progettato per sessioni di personal training e allenamenti individuali o in piccoli gruppi. Niente confusione, solo qualità e attenzione dedicata."
            />
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

      {/* Corsi di gruppo */}
      <section className="section-padding bg-paper-alt" id="corsi">
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
                  <p className="mt-5 max-w-[54ch] text-ink-soft">{course.desc}</p>

                  <div className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 font-display text-base text-primary">
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

                  <Link
                    href={`/servizi/${course.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-dark"
                  >
                    Scheda completa
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Orari */}
      <section className="section-padding" id="orari">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Calendario"
            title="Orari dei corsi"
            intro="Stagione 2025/2026, da settembre a giugno. Il venerdì mattina si inizia alle 08:45."
          />
          <div className="mt-12">
            <CourseTimetable />
          </div>
          <div className="mt-8 flex flex-col gap-1">
            <p className="text-sm text-muted">
              Corsi <span className="text-ink">solo su prenotazione</span> —
              WhatsApp 331 405 9134. Il pallino indica i corsi golf-specific.
            </p>
            <p className="text-sm text-muted">
              AcquaGym attiva solo nei mesi estivi (giugno, luglio, agosto).
            </p>
          </div>
        </div>
      </section>

      {/* Altre attività dell'area */}
      <section className="section-padding bg-paper-alt" id="attivita">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Oltre ai corsi"
            title="Allenamento individuale"
            intro="Percorsi seguiti uno a uno o in piccoli gruppi, fuori dal calendario dei corsi."
          />
          <ul className="mt-12">
            {altreAttivita.map((service) => (
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
          <p className="mt-10 text-sm text-muted">
            Cerchi il Pilates sul Reformer?{" "}
            <Link
              href="/pilates"
              className="border-b border-line pb-0.5 text-primary transition-colors hover:border-primary"
            >
              È nello Studio Pilates
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal sm:text-4xl">
            Vuoi provare?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            La prima prova è gratuita. Scrivici per fissare un appuntamento.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Ciao! Vorrei provare un corso in palestra">
              Prenota la prova
            </WhatsAppButton>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
            >
              Contatti
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
