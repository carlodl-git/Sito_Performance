import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { areaMeta } from "@/data/areas";
import { contatti } from "@/data/contatti";

// TODO (da confermare col centro): numero di Reformer, nome
// dell'istruttrice, orari delle lezioni, listino.
// TODO FOTO: nessuna foto dello studio né del Reformer. Le due immagini
// di questa pagina sono lezioni all'aperto sul prato del club: vere, ma
// non sono il Pilates. Sono il primo asset da sostituire.

const meta = areaMeta.pilates;

export const metadata: Metadata = {
  title: {
    absolute: "Studio Pilates Reformer a Selvazzano Dentro (Padova)",
  },
  description:
    "Studio Pilates Reformer alla Montecchia: lezioni individuali, in duetto e in piccolo gruppo. Forza profonda, mobilità e postura. Selvazzano Dentro, Padova.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/pilates",
  },
  openGraph: {
    title: "Studio Pilates Reformer alla Montecchia",
    description:
      "Lezioni di Pilates sul Reformer, individuali e in piccolo gruppo. Selvazzano Dentro, Padova.",
    url: "https://www.montecchiaperformancecenter.it/pilates",
    siteName: "Studio Pilates Reformer alla Montecchia",
    locale: "it_IT",
    type: "website",
    images: ["/images/yoga-prato.jpg"],
  },
};

const metodo = [
  {
    n: "01",
    title: "Resistenza, non peso",
    text: "Il carrello del Reformer scorre contro un sistema di molle regolabili. La resistenza accompagna il movimento in andata e in ritorno: si allena la forza e il controllo nello stesso gesto, senza impatto sulle articolazioni.",
  },
  {
    n: "02",
    title: "Precisione prima di tutto",
    text: "Pochi esercizi, eseguiti bene. Ogni ripetizione viene corretta: allineamento, respiro, ritmo. È un lavoro di qualità, non di quantità, e si vede nel modo in cui il corpo si muove fuori dallo studio.",
  },
  {
    n: "03",
    title: "Il tuo carico",
    text: "Le molle si regolano una per una. Lo stesso attrezzo accoglie chi riparte dopo anni di fermo e chi si allena già cinque volte a settimana: cambia il carico, non il metodo.",
  },
];

const lezioni = [
  {
    name: "Individuale",
    who: "Una persona, un Reformer",
    text: "La lezione è costruita sul tuo corpo: obiettivi, storia, eventuali limitazioni. È il formato con cui consigliamo di iniziare.",
  },
  {
    name: "Duetto",
    who: "Due persone, due Reformer",
    text: "Stessa attenzione dell'individuale, condivisa con un'altra persona. Funziona bene tra chi ha un livello simile.",
  },
  {
    name: "Piccolo gruppo",
    who: "Gruppi contenuti",
    text: "Il formato più accessibile, tenuto piccolo apposta: l'istruttrice deve poter correggere ognuno su ogni esercizio.",
  },
];

const aChi = [
  "Chi passa molte ore seduto e accusa tensioni a schiena, collo e spalle",
  "Chi torna al movimento dopo una pausa lunga, una gravidanza o un infortunio",
  "Chi si allena già e cerca mobilità, controllo e un centro più solido",
  "Chi gioca a golf e lavora su rotazione del busto e stabilità",
];

export default function StudioPilatesPage() {
  return (
    <>
      <PageHero
        tall
        eyebrow={`Area ${meta.n} · Selvazzano Dentro, Padova`}
        title={
          <>
            Il corpo impara
            <br />
            a muoversi meglio
          </>
        }
        intro="Uno studio dedicato al Pilates sul Reformer. Lezioni individuali, in duetto e in piccolo gruppo, sempre con un'istruttrice accanto."
        image={{
          src: "/images/yoga-prato.jpg",
          alt: "Lezione all'aperto sul prato del Golf Club della Montecchia",
        }}
      >
        <WhatsAppButton message={meta.whatsapp} variant="light">
          Prenota una prova
        </WhatsAppButton>
      </PageHero>

      {/* Manifesto: cambia il respiro prima di entrare nel metodo. */}
      <section className="section-padding">
        <div className="container-narrow">
          <p className="manifesto">
            Non è ginnastica veloce. È un lavoro paziente sul modo in cui stai
            in piedi, respiri e ti muovi, che poi si sente in tutto il resto.
          </p>
        </div>
      </section>

      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden sm:h-[60vh]">
        <Image
          src="/images/yoga-esterno.jpg"
          alt="Lezione di gruppo sul prato del Golf Club della Montecchia"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Il metodo */}
      <section id="metodo" className="section-padding scroll-mt-24">
        <div className="container-narrow">
          <SectionHeading eyebrow="Il metodo" title="Perché il Reformer" />

          <div className="mt-14">
            {metodo.map((m) => (
              <div key={m.n} className="row-rule">
                <div className="grid gap-5 md:grid-cols-[auto_16rem_1fr] md:gap-12">
                  <span className="area-num">{m.n}</span>
                  <h3 className="heading-sub">{m.title}</h3>
                  <p className="max-w-2xl text-ink-soft">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le lezioni */}
      <section id="lezioni" className="section-padding scroll-mt-24 bg-area-tint">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Le lezioni"
            title="Come si lavora"
            intro="Tutte le lezioni sono su prenotazione e iniziano con una sessione di valutazione, per capire da dove partire."
          />

          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {lezioni.map((l) => (
              <div key={l.name} className="border-t border-line pt-7">
                <h3 className="heading-sub">{l.name}</h3>
                <p className="eyebrow mt-3">{l.who}</p>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {l.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-sm text-muted">
            Orari e tariffe aggiornati su richiesta:{" "}
            <a href={`tel:${contatti.telefono}`} className="link-area">
              {contatti.telefonoLeggibile}
            </a>
          </p>
        </div>
      </section>

      {/* A chi si rivolge */}
      <section id="a-chi" className="section-padding scroll-mt-24">
        <div className="container-narrow grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow">A chi si rivolge</p>
            <h2 className="heading-section mt-4">
              Serve a chi non si allena
              <br />
              e a chi si allena molto
            </h2>
            <p className="mt-7 max-w-md text-ink-soft">
              Non c&apos;è un livello di ingresso. C&apos;è una prima lezione in
              cui guardiamo come ti muovi, e da lì si costruisce il percorso.
            </p>
            <div className="mt-9">
              <WhatsAppButton message={meta.whatsapp} variant="area">
                Prenota la prima lezione
              </WhatsAppButton>
            </div>
          </div>

          <ul>
            {aChi.map((t) => (
              <li key={t} className="row-rule text-ink-soft">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Citazione */}
      <section className="section-padding bg-area-tint">
        <div className="container-narrow">
          <blockquote className="manifesto">
            «In dieci lezioni sentirai la differenza, in venti la vedrai, in
            trenta avrai un corpo nuovo.»
          </blockquote>
          <p className="eyebrow mt-8 text-center">Joseph Pilates</p>
        </div>
      </section>

      {/* Prenota */}
      <section
        id="prenota"
        className="section-padding scroll-mt-24 bg-area-deep text-white"
      >
        <div className="container-narrow text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-normal tracking-tight sm:text-4xl">
            Vieni a provare il Reformer
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/70">
            Scrivici su WhatsApp: fissiamo la prima lezione di valutazione e
            scegliamo insieme il formato giusto.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message={meta.whatsapp} variant="light">
              Scrivici su WhatsApp
            </WhatsAppButton>
            <a href={`tel:${contatti.telefono}`} className="btn-area-light">
              {contatti.telefonoLeggibile}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
