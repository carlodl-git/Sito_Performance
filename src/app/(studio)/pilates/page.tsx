import Image from "next/image";
import type { Metadata } from "next";

// TODO (dati reali da confermare col centro): numero di Reformer, nome
// dell'istruttrice, orari delle lezioni, listino, foto reali dello studio.

export const metadata: Metadata = {
  title: {
    absolute: "Studio Pilates Reformer — Selvazzano Dentro, Padova",
  },
  description:
    "Studio Pilates Reformer alla Montecchia: lezioni individuali, in duetto e in piccolo gruppo. Forza profonda, mobilità e postura. Selvazzano Dentro, Padova.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/pilates",
  },
  openGraph: {
    title: "Studio Pilates Reformer — Montecchia",
    description:
      "Lezioni di Pilates sul Reformer, individuali e in piccolo gruppo. Selvazzano Dentro, Padova.",
    url: "https://www.montecchiaperformancecenter.it/pilates",
    siteName: "Studio Pilates Reformer — Montecchia",
    locale: "it_IT",
    type: "website",
    images: ["/images/yoga-indoor.jpg"],
  },
};

const WHATSAPP =
  "https://wa.me/393314059134?text=Ciao!%20Vorrei%20informazioni%20sullo%20Studio%20Pilates%20Reformer";

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
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <Image
          src="/images/yoga-indoor.jpg"
          alt="Studio Pilates Reformer alla Montecchia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23201c]/85 via-[#23201c]/45 to-[#23201c]/15" />
        <div className="st-container relative z-10 pb-20 pt-40 sm:pb-28">
          <p
            className="st-eyebrow"
            style={{ color: "rgba(245,241,234,0.75)" }}
          >
            Selvazzano Dentro · Padova
          </p>
          <h1
            className="st-display st-h1 mt-6 max-w-4xl"
            style={{ color: "var(--st-bg)" }}
          >
            Il corpo impara
            <br />
            a muoversi meglio
          </h1>
          <p
            className="st-lead mt-8 max-w-xl"
            style={{ color: "rgba(245,241,234,0.9)" }}
          >
            Uno studio dedicato al Pilates sul Reformer. Lezioni individuali, in
            duetto e in piccolo gruppo, sempre con un&apos;istruttrice accanto.
          </p>
          <div className="mt-12">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="st-btn st-btn--light"
            >
              Prenota una prova
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="st-section">
        <div className="st-container">
          <p className="st-display st-h2 st-narrow mx-auto text-center">
            Non è ginnastica veloce. È un lavoro paziente sul modo in cui stai
            in piedi, respiri e ti muovi — che poi si sente in tutto il resto.
          </p>
        </div>
      </section>

      {/* Immagine di respiro */}
      <section className="relative h-[45vh] min-h-[320px] w-full overflow-hidden sm:h-[60vh]">
        <Image
          src="/images/yoga-esterno.jpg"
          alt="Lavoro sul respiro e sul controllo del movimento"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Il metodo */}
      <section id="metodo" className="st-section scroll-mt-20">
        <div className="st-container">
          <p className="st-eyebrow">Il metodo</p>
          <h2 className="st-display st-h2 mt-5 max-w-2xl">
            Perché il Reformer
          </h2>

          <div className="mt-14">
            {metodo.map((m) => (
              <div key={m.n} className="st-row">
                <div className="grid gap-6 md:grid-cols-[auto_16rem_1fr] md:gap-12">
                  <span className="st-num">{m.n}</span>
                  <h3 className="st-display st-h3">{m.title}</h3>
                  <p className="st-body max-w-2xl">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le lezioni */}
      <section id="lezioni" className="st-section st-alt scroll-mt-20">
        <div className="st-container">
          <p className="st-eyebrow">Le lezioni</p>
          <h2 className="st-display st-h2 mt-5 max-w-2xl">Come si lavora</h2>
          <p className="st-body mt-6 max-w-xl">
            Tutte le lezioni sono su prenotazione e iniziano con una sessione di
            valutazione, per capire da dove partire.
          </p>

          <div className="mt-14 grid gap-px sm:grid-cols-3">
            {lezioni.map((l) => (
              <div
                key={l.name}
                className="border-t border-[var(--st-line)] pt-8 sm:pr-8"
              >
                <h3 className="st-display st-h3">{l.name}</h3>
                <p className="st-eyebrow mt-3">{l.who}</p>
                <p className="st-body mt-5 text-[0.95rem]">{l.text}</p>
              </div>
            ))}
          </div>

          <p className="st-small mt-14">
            Orari e tariffe aggiornati su richiesta —{" "}
            <a href="tel:+393314059134" className="st-link">
              331 405 9134
            </a>
          </p>
        </div>
      </section>

      {/* A chi si rivolge */}
      <section id="a-chi" className="st-section scroll-mt-20">
        <div className="st-container grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="st-eyebrow">A chi si rivolge</p>
            <h2 className="st-display st-h2 mt-5">
              Serve a chi non si allena
              <br />
              e a chi si allena molto
            </h2>
            <p className="st-body mt-8 max-w-md">
              Non c&apos;è un livello di ingresso. C&apos;è una prima lezione in
              cui guardiamo come ti muovi, e da lì si costruisce il percorso.
            </p>
            <div className="mt-10">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="st-btn"
              >
                Prenota la prima lezione
              </a>
            </div>
          </div>

          <ul>
            {aChi.map((t) => (
              <li key={t} className="st-row st-body">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Citazione */}
      <section className="st-section st-alt">
        <div className="st-container text-center">
          <blockquote className="st-display st-narrow mx-auto text-[clamp(1.5rem,3.2vw,2.4rem)] leading-snug">
            «In dieci lezioni sentirai la differenza, in venti la vedrai, in
            trenta avrai un corpo nuovo.»
          </blockquote>
          <p className="st-eyebrow mt-8">Joseph Pilates</p>
        </div>
      </section>

      {/* Prenota */}
      <section
        id="prenota"
        className="st-section scroll-mt-20"
        style={{ backgroundColor: "var(--st-ink)" }}
      >
        <div className="st-container text-center">
          <h2
            className="st-display st-h2 st-narrow mx-auto"
            style={{ color: "var(--st-bg)" }}
          >
            Vieni a provare il Reformer
          </h2>
          <p
            className="st-lead mx-auto mt-6 max-w-lg"
            style={{ color: "rgba(245,241,234,0.75)" }}
          >
            Scrivici su WhatsApp: fissiamo la prima lezione di valutazione e
            scegliamo insieme il formato giusto.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="st-btn st-btn--light"
            >
              Scrivici su WhatsApp
            </a>
            <a
              href="tel:+393314059134"
              className="st-btn st-btn--light"
              style={{ borderColor: "rgba(245,241,234,0.35)" }}
            >
              331 405 9134
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
