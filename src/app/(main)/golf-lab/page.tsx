import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { servicesByArea } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Golf Indoor — Simulatore Golf a Padova",
  description:
    "Simulatore golf indoor TrackMan/CAPTO al Golf Club della Montecchia. Lezioni con maestri PGA, fitting, tornei, sessioni serali con bar. Padova, Selvazzano Dentro.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/golf-lab",
  },
  openGraph: {
    title: "Golf Indoor — Simulatore Golf a Padova",
    description:
      "Simulatore golf indoor con maestri PGA, fitting, tornei, sessioni serali al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/golf-lab",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/golf-indoor-lezione.jpg"],
  },
};

export default function GolfLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Area 03"
        title="Golf Indoor"
        intro="Simulatori di ultima generazione, tecnologia TrackMan e maestri PGA per portare il tuo gioco al livello successivo."
        image={{
          src: "/images/golf-indoor-lezione.jpg",
          alt: "Sala simulatori del Golf Indoor con giocatori in sessione",
        }}
      >
        <a
          href="https://booking.montecchiaperformancecenter.it"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-sm border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Prenota la tua sessione
        </a>
      </PageHero>

      {/* Tecnologia */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="heading-section">Tecnologia al servizio del golf</h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Il Golf Indoor del Montecchia Performance Center e&apos; dotato di
                simulatori indoor con tecnologia Trackman, il sistema di
                tracking piu&apos; preciso al mondo. Analisi dettagliata di ogni
                colpo: velocita&apos; della testa del bastone, angolo di lancio, spin,
                traiettoria e distanza.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Ideale per lezioni individuali, pratica libera, fitting e
                allenamento anche quando il meteo non permette di giocare
                all&apos;aperto.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Trackman", desc: "Analisi swing e ball flight" },
                  { label: "SMART2MOVE", desc: "Analisi biomeccanica" },
                  { label: "K-Vest", desc: "Sensori di movimento 3D" },
                  { label: "Sam Puttlab", desc: "Analisi putting avanzata" },
                ].map((tech) => (
                  <div key={tech.label} className="border-t border-line pt-4">
                    <p className="font-display text-lg text-primary">{tech.label}</p>
                    <p className="mt-1 text-xs text-muted">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden bg-paper-alt">
              <Image
                src="/images/trackman_io_immagine.webp"
                alt="Simulatore Trackman in azione al Golf Lab"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galleria simulatori */}
      <section className="section-padding bg-paper-alt">
        <div className="container-narrow">
          <h2 className="heading-section text-center">I nostri simulatori</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-ink-soft">
            Postazioni multiple per lezioni, pratica libera e sfide tra amici.
            Un&apos;esperienza di golf immersiva tutto l&apos;anno.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-alt">
              <Image
                src="/images/golf-indoor-1.jpg"
                alt="Postazioni simulatori golf indoor"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-alt">
              <Image
                src="/images/golf-indoor-2.jpg"
                alt="Simulatore golf con schermo di proiezione"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-paper-alt">
              <Image
                src="/images/lezione.jpeg"
                alt="Lezione di golf al simulatore con analisi dati"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Golf */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="heading-section text-center">I Maestri</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-ink-soft">
            Il Golf Indoor e&apos; guidato dai maestri della Montecchia Golf Academy: professionisti
            PGA con esperienza internazionale.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Maria Paola Casati", role: "Direttrice Academy - PGA Classe A" },
              { name: "Massimo De Vidal", role: "Maestro PGA - Ex Alps Tour" },
              { name: "Germana Zanardi", role: "Maestra - TPI & Trackman Certified" },
              { name: "Luca Pannone", role: "Maestro PGA - Biomeccanica" },
            ].map((maestro) => (
              <div key={maestro.name} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/8 font-display text-xl text-primary">
                  {maestro.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-display text-lg font-normal text-primary">
                  {maestro.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{maestro.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/team" className="text-sm font-medium text-accent hover:text-accent-dark">
              Scopri tutto il team →
            </Link>
          </div>
        </div>
      </section>

      {/* Attività dell'area */}
      <section className="section-padding bg-paper-alt" id="attivita">
        <div className="container-narrow">
          <h2 className="heading-section text-center">Golf fitness</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-ink-soft">
            Il lavoro al simulatore si completa con i percorsi di preparazione
            fisica specifici per il golf.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {servicesByArea("golf").map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}`}
                className="group flex flex-col rounded-sm border border-line bg-white p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="font-display text-xl font-normal text-primary group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.shortDescription}
                </p>
                <span className="mt-6 text-sm font-medium text-accent">
                  Scopri di più →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Prenota */}
      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal sm:text-4xl">
            Prenota la tua sessione
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Lezione con maestro, pratica libera o sessione di fitting.
            Prenota online o contattaci per informazioni.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://booking.montecchiaperformancecenter.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Prenota online
            </a>
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
