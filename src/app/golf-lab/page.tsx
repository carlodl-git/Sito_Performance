import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Lab — Simulatore Golf Indoor a Padova",
  description:
    "Simulatore golf indoor TrackMan/CAPTO al Golf Club della Montecchia. Lezioni con maestri PGA, fitting, tornei, sessioni serali con bar. Padova, Selvazzano Dentro.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/golf-lab",
  },
  openGraph: {
    title: "Golf Lab — Simulatore Golf Indoor a Padova",
    description:
      "Simulatore golf indoor con maestri PGA, fitting, tornei, sessioni serali al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/golf-lab",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
  },
};

export default function GolfLabPage() {
  return (
    <>
      {/* Hero con foto reale */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/images/performance.webp"
            alt="Golf Lab - Simulatore indoor Montecchia Performance Center"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-narrow relative z-10 pb-16 pt-32 sm:pb-20">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Golf Lab
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Simulatori di ultima generazione, tecnologia Trackman e maestri PGA
            per portare il tuo gioco al livello successivo.
          </p>
          <div className="mt-8">
            <a
              href="https://booking.montecchiaperformancecenter.it"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-accent px-7 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-accent-light hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Prenota la tua sessione
            </a>
          </div>
        </div>
      </section>

      {/* Tecnologia */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="heading-section">Tecnologia al servizio del golf</h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Il Golf Lab del Montecchia Performance Center e&apos; dotato di
                simulatori indoor con tecnologia Trackman, il sistema di
                tracking piu&apos; preciso al mondo. Analisi dettagliata di ogni
                colpo: velocita&apos; della testa del bastone, angolo di lancio, spin,
                traiettoria e distanza.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
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
                  <div key={tech.label} className="rounded-lg bg-neutral-50 p-4">
                    <p className="font-display font-semibold text-primary">{tech.label}</p>
                    <p className="mt-1 text-xs text-neutral-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
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
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow">
          <h2 className="heading-section text-center">I nostri simulatori</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Postazioni multiple per lezioni, pratica libera e sfide tra amici.
            Un&apos;esperienza di golf immersiva tutto l&apos;anno.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/1484849991.jpg"
                alt="Sala simulatori golf con piu' postazioni"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/ridotta-4_Golf-Montecchia-P.jpg"
                alt="Simulatore golf con schermo proiezione"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
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
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-section text-center">I Maestri</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Il Golf Lab e&apos; guidato dai maestri della Montecchia Golf Academy: professionisti
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
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-semibold text-2xl">
                  {maestro.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {maestro.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{maestro.role}</p>
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

      {/* CTA Prenota */}
      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold">
            Prenota la tua sessione
          </h2>
          <p className="mt-4 text-neutral-300">
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
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
