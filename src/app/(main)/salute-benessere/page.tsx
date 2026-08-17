import Link from "next/link";
import type { Metadata } from "next";
import { servicesByArea } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Salute e Benessere — Fisioterapia, Osteopatia e Nutrizione a Padova",
  description:
    "Area Salute e Benessere del Montecchia Performance Center: fisioterapia, osteopatia, nutrizione e shiatsu. Selvazzano Dentro, Padova.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/salute-benessere",
  },
  openGraph: {
    title: "Salute e Benessere — Montecchia Performance Center",
    description:
      "Fisioterapia, osteopatia, nutrizione e shiatsu al Golf Club della Montecchia (Selvazzano Dentro, Padova).",
    url: "https://www.montecchiaperformancecenter.it/salute-benessere",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/servizi.jpg"],
  },
};

const MESSAGE = "Ciao! Vorrei informazioni sull'area Salute e Benessere";

const steps = [
  {
    n: "01",
    title: "Valutazione",
    desc: "Primo incontro con il professionista: anamnesi, valutazione del movimento e definizione dell'obiettivo.",
  },
  {
    n: "02",
    title: "Trattamento",
    desc: "Sedute mirate, con tempi e frequenza concordati in base al quadro emerso dalla valutazione.",
  },
  {
    n: "03",
    title: "Ritorno al movimento",
    desc: "Il passaggio in palestra o in studio avviene in continuità: il trainer sa su cosa hai lavorato.",
  },
];

export default function SaluteBenesserePage() {
  const services = servicesByArea("salute");

  return (
    <>
      <PageHero
        eyebrow="Area 04"
        title="Salute e Benessere"
        intro="Fisioterapia, osteopatia, nutrizione e trattamenti manuali. I professionisti dell'area lavorano a contatto con i trainer del centro: chi ti tratta e chi ti allena parlano tra loro."
        image={{
          src: "/images/servizi.jpg",
          alt: "Trattamento nell'area Salute e Benessere",
        }}
      >
        <WhatsAppButton message={MESSAGE} variant="light">
          Richiedi un appuntamento
        </WhatsAppButton>
      </PageHero>

      {/* Prestazioni */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Le prestazioni"
            title="Di cosa ci occupiamo"
            intro="Ogni prestazione è su appuntamento, con il professionista di riferimento."
          />
          <ul className="mt-12">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servizi/${service.slug}`}
                  className="group grid gap-3 border-t border-line py-8 transition-colors hover:border-primary sm:grid-cols-[16rem_1fr] sm:gap-10"
                >
                  <div>
                    <h3 className="heading-sub group-hover:text-accent">
                      {service.title}
                    </h3>
                    {service.professional && (
                      <p className="eyebrow mt-2">
                        {service.professional.name}
                      </p>
                    )}
                  </div>
                  <p className="max-w-[62ch] text-sm text-ink-soft">
                    {service.shortDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Percorso */}
      <section className="section-padding bg-paper-alt">
        <div className="container-narrow">
          <SectionHeading eyebrow="Il percorso" title="Come funziona" />
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-line pt-7">
                <span className="font-display text-2xl font-light text-accent">
                  {s.n}
                </span>
                <h3 className="heading-sub mt-4">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collegamento alle altre aree */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Dopo il trattamento"
            title="Non si finisce sul lettino"
            intro="Il percorso prosegue nelle altre aree del centro: in palestra con un programma dedicato, sul Reformer per il lavoro posturale, o al simulatore per rimettere a posto lo swing."
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/palestra" className="btn-secondary">
              Palestra
            </Link>
            <Link href="/pilates" className="btn-secondary">
              Studio Pilates Reformer
            </Link>
            <Link href="/golf-lab" className="btn-secondary">
              Golf Indoor
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal sm:text-4xl">
            Prenota una visita
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Scrivici su WhatsApp indicando di cosa hai bisogno: ti mettiamo in
            contatto con il professionista giusto.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message={MESSAGE}>
              Scrivici su WhatsApp
            </WhatsAppButton>
            <Link
              href="/team"
              className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
            >
              I professionisti
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
