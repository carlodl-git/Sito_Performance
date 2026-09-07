import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Il Montecchia Performance Center è una struttura di performance e benessere all'interno del Golf Club della Montecchia (Padova). La nostra storia, la mission, la struttura.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo | Montecchia Performance Center",
    description:
      "Struttura di performance e benessere al Golf Club della Montecchia (Padova). Storia, mission, ambiente.",
    url: "https://www.montecchiaperformancecenter.it/chi-siamo",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        title="Chi siamo"
        intro="Come è nato il centro, chi ci lavora e come mai quattro attività diverse stanno sotto lo stesso tetto."
      />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/esterno.jpg"
                alt="Esterno del Montecchia Performance Center"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="heading-section">Come è nato</h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Il centro è nato dentro il Golf Club della Montecchia, e
                all&apos;inizio era soprattutto il golf indoor: i simulatori,
                le lezioni con i maestri, l&apos;analisi dello swing.
              </p>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Poi si è visto che chi veniva a migliorare lo swing aveva
                bisogno anche d&apos;altro: forza e mobilità per reggere il
                gesto, qualcuno che sistemasse una schiena bloccata, un modo
                per mangiare meglio. Così sono arrivate la palestra con i
                corsi, lo studio di Pilates sul Reformer e i professionisti
                della salute. Quattro aree, un edificio solo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-paper-alt">
        <div className="container-narrow">
          <h2 className="heading-section text-center">Come lavoriamo</h2>
          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-ink-soft">
            Tredici professionisti che lavorano nello stesso posto e si
            parlano. Se il fisioterapista trova un problema, il trainer lo
            sa prima della lezione dopo: è la differenza fra quattro
            specialisti e quattro appuntamenti scollegati in tre indirizzi
            diversi.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Si comincia guardando",
                text: "Prima lezione o prima visita, si guarda come ti muovi. Il programma viene dopo, non prima.",
              },
              {
                title: "Gruppi piccoli",
                text: "I corsi e le lezioni sono tenuti contenuti apposta: chi conduce deve poter correggere ognuno.",
              },
              {
                title: "Le misure, dove servono",
                text: "TrackMan, pedane di forza e sensori sul corpo al golf indoor. Non per fare scena: per sapere su cosa lavorare.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-line bg-transparent pt-7">
                <h3 className="font-display text-xl font-normal text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galleria con foto reali */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-section text-center">La struttura</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-ink-soft">
            Il golf indoor, la palestra e gli spazi comuni.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/images/palestra-1.jpg", alt: "La sala corsi della palestra" },
              { src: "/images/golf-indoor-1.jpg", alt: "Golf Indoor, postazioni dei simulatori" },
              { src: "/images/yoga-esterno.jpg", alt: "Sessione yoga all'aperto" },
              { src: "/images/trackman_io_immagine.webp", alt: "Trackman in azione" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
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
      <section className="section-padding bg-paper-alt">
        <div className="container-narrow text-center">
          <h2 className="heading-section">Conosci il team</h2>
          <p className="mt-4 text-ink-soft">
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
