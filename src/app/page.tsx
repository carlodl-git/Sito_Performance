import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <ImagePlaceholder
            aspect="hero"
            label="Hero: Struttura / Atleti in allenamento"
            className="absolute inset-0 w-full opacity-40"
          />
        </div>
        <div className="container-narrow relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-24">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Performance
            <br />
            <span className="text-accent">senza compromessi</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            Palestra, corsi, golf indoor e servizi di supporto. Un unico centro
            per raggiungere i tuoi obiettivi.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/palestra" className="btn-primary">
              Scopri la palestra
            </Link>
            <Link href="/contatti" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-dark">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="heading-section">Montecchia Performance Center</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Un centro dove tecnologia, professionalità e ambiente si incontrano.
            Dalla sala attrezzi ai corsi di gruppo, dal golf indoor alla
            nutrizione e al recupero: tutto ciò che serve per performare al
            meglio.
          </p>
        </div>
      </section>

      {/* Highlight cards: Palestra, Corsi, Servizi, Golf */}
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow">
          <h2 className="heading-section text-center">Cosa trovi da noi</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/palestra"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <ImagePlaceholder
                aspect="card"
                label="Palestra"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Palestra
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Struttura moderna, attrezzature di livello e programmi
                  personalizzati.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Scopri di più →
                </span>
              </div>
            </Link>

            <Link
              href="/palestra#corsi"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <ImagePlaceholder
                aspect="card"
                label="Corsi"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Corsi
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Yoga, functional, spinning e molto altro con istruttori
                  qualificati.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Vedi i corsi →
                </span>
              </div>
            </Link>

            <Link
              href="/servizi"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <ImagePlaceholder
                aspect="card"
                label="Servizi"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Servizi
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Nutrizionista, fisioterapia, massaggi e supporto alla
                  performance.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  I servizi →
                </span>
              </div>
            </Link>

            <a
              href="https://booking.montecchiaperformancecenter.it"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <ImagePlaceholder
                aspect="card"
                label="Golf Indoor"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Golf Indoor
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Simulatori e prenotazioni. Prenota la tua sessione online.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Prenota ora →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Pronto a iniziare?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-300">
            Passa in struttura per una visita o compila il modulo di contatto:
            ti rispondiamo al più presto.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contatti"
              className="btn-primary"
            >
              Contattaci
            </Link>
            <Link
              href="/palestra#prezzi"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
            >
              Vedi prezzi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
