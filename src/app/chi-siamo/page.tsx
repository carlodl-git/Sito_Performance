import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Il Montecchia Performance Center è una struttura di performance e benessere all'interno del Golf Club della Montecchia (Padova). La nostra storia, la mission, la struttura.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo — Montecchia Performance Center",
    description:
      "Struttura di performance e benessere al Golf Club della Montecchia (Padova). Storia, mission, ambiente.",
    url: "https://www.montecchiaperformancecenter.it/chi-siamo",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Chi siamo
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            La storia e la filosofia del Montecchia Performance Center.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/performance.webp"
                alt="Interno del Montecchia Performance Center"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="heading-section">La nostra storia</h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Il Montecchia Performance Center nasce dalla volonta&apos; di creare
                un luogo dove sport, tecnologia e professionalita&apos; si
                incontrano. Nato nel contesto di eccellenza del Golf Club della
                Montecchia, il centro si e&apos; evoluto per offrire non solo il
                golf indoor con simulatori Trackman, ma una palestra completa,
                corsi di gruppo e un team di professionisti del benessere.
              </p>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Crediamo che la performance sia il risultato di allenamento,
                alimentazione, recupero e mentalita&apos;. Per questo abbiamo riunito
                sotto lo stesso tetto palestra, corsi, nutrizionista, osteopata
                e maestri di golf: un ecosistema pensato per chi ha obiettivi
                chiari e non si accontenta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-narrow">
          <h2 className="heading-section text-center">La nostra filosofia</h2>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-neutral-600 leading-relaxed">
            Performance senza compromessi: offriamo strumenti, spazi e
            professionisti di livello per permettere a ognuno di dare il
            massimo. Ambiente curato, attrezzature all&apos;avanguardia e un team
            di oltre 13 specialisti che ti accompagna dal primo ingresso al
            raggiungimento dei tuoi obiettivi.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Qualita'",
                text: "Struttura e attrezzature all'avanguardia, inclusi simulatori Trackman e tecnologia di analisi biomeccanica.",
              },
              {
                title: "Professionalita'",
                text: "Oltre 13 professionisti tra trainer, maestri PGA, nutrizionisti e specialisti del recupero.",
              },
              {
                title: "Integrazione",
                text: "Un unico centro dove fitness, golf, nutrizione e riabilitazione lavorano insieme per la tua performance.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria con foto reali */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-section text-center">La struttura</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Il Golf Lab, i simulatori e gli spazi del centro.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/images/performance.webp", alt: "Simulatore golf indoor - vista struttura" },
              { src: "/images/1484849991.jpg", alt: "Sala simulatori con postazioni multiple" },
              { src: "/images/ridotta-4_Golf-Montecchia-P.jpg", alt: "Simulatore con proiezione" },
              { src: "/images/trackman_io_immagine.webp", alt: "Trackman in azione" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Team */}
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow text-center">
          <h2 className="heading-section">Conosci il team</h2>
          <p className="mt-4 text-neutral-600">
            Scopri i professionisti che rendono unico il Montecchia Performance
            Center.
          </p>
          <Link href="/team" className="btn-primary mt-8 inline-flex">
            Vai al team
          </Link>
        </div>
      </section>
    </>
  );
}
