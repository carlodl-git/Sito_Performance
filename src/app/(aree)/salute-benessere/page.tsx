import Link from "next/link";
import type { Metadata } from "next";
import { servicesByArea } from "@/data/services";
import { teamByArea } from "@/data/team";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersonCard } from "@/components/ui/PersonCard";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { areaMeta } from "@/data/areas";

const meta = areaMeta.salute;

export const metadata: Metadata = {
  title: "Fisioterapia e Osteopatia a Padova (Selvazzano)",
  description:
    "Area Salute e Benessere del Montecchia Performance Center: fisioterapia, osteopatia, nutrizione e shiatsu. Selvazzano Dentro, Padova.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/salute-benessere",
  },
  openGraph: {
    title: "Salute e Benessere | Montecchia Performance Center",
    description:
      "Fisioterapia, osteopatia, nutrizione e shiatsu al Golf Club della Montecchia (Selvazzano Dentro, Padova).",
    url: "https://www.montecchiaperformancecenter.it/salute-benessere",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/salute-trattamento.jpg"],
  },
};

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

/** Le altre aree in cui prosegue il percorso, dopo il trattamento. */
const proseguire = [
  { href: "/palestra", label: "Palestra & Corsi" },
  { href: "/pilates", label: "Pilates Studio Reformer" },
  { href: "/golf-indoor", label: "Golf Indoor" },
];

export default function SaluteBenesserePage() {
  const services = servicesByArea("salute");
  const professionisti = teamByArea("salute");

  return (
    <>
      {/* La foto è generata, non è il nostro studio: vedi la nota in
          data/areas.ts. Sostituirla appena il centro fornisce le sue. */}
      <PageHero
        full
        eyebrow="Golf Club della Montecchia · Padova"
        title={meta.label}
        intro="Fisioterapia, osteopatia, nutrizione e trattamenti manuali. I professionisti dell'area lavorano a contatto con i trainer del centro: chi ti tratta e chi ti allena parlano tra loro."
        image={{
          src: "/images/salute-trattamento.jpg",
          alt: "Trattamento manuale sulla schiena in sala fisioterapia",
        }}
      >
        <WhatsAppButton message={meta.whatsapp} variant="light">
          Richiedi un appuntamento
        </WhatsAppButton>
      </PageHero>

      {/* Il percorso */}
      <section id="percorso" className="section-padding scroll-mt-24">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Il percorso"
            title="Come funziona"
            intro="Tre passaggi, sempre gli stessi, qualunque sia il motivo per cui arrivi."
          />
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-line pt-7">
                <span className="area-num">{s.n}</span>
                <h3 className="heading-sub mt-4">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le prestazioni */}
      <section
        id="prestazioni"
        className="section-padding scroll-mt-24 bg-area-tint"
      >
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
                  className="group grid gap-3 border-t border-line py-8 transition-colors hover:border-area sm:grid-cols-[16rem_1fr] sm:gap-10"
                >
                  <div>
                    <h3 className="heading-sub transition-colors group-hover:text-area">
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

      {/* I professionisti */}
      <section id="professionisti" className="section-padding scroll-mt-24">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="I professionisti"
            title="Chi ti segue"
            intro="Ognuno ha la sua specializzazione e il suo studio all'interno del centro."
            action={
              <Link href="/team" className="link-area">
                Tutto il team
                <span aria-hidden>→</span>
              </Link>
            }
          />
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {professionisti.map((m) => (
              <PersonCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Collegamento alle altre aree */}
      <section className="section-padding bg-area-tint">
        <div className="container-narrow">
          <SectionHeading
            eyebrow="Dopo il trattamento"
            title="Non si finisce sul lettino"
            intro="Il percorso prosegue nelle altre aree del centro: in palestra con un programma dedicato, sul Reformer per il lavoro posturale, o al simulatore per rimettere a posto lo swing."
          />
          <div className="mt-10 flex flex-wrap gap-4">
            {proseguire.map((a) => (
              <Link key={a.href} href={a.href} className="btn-secondary">
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Prenota */}
      <section
        id="prenota"
        className="section-padding scroll-mt-24 bg-area-deep text-white"
      >
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal tracking-tight sm:text-4xl">
            Prenota una visita
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/70">
            Dicci di cosa hai bisogno e ti mettiamo in contatto con il
            professionista giusto.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton message={meta.whatsapp}>
              Scrivici su WhatsApp
            </WhatsAppButton>
            <Link href="/team" className="btn-area-light">
              I professionisti
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
