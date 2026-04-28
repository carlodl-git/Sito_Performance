import Link from "next/link";
import type { Metadata } from "next";
import { services, serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Servizi — Montecchia Performance Center (Padova)",
  description:
    "Personal training, allenamento di gruppo, golf fitness, fisioterapia, osteopatia, nutrizione, pilates e yoga. Tutti i servizi del Montecchia Performance Center.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/servizi",
  },
  openGraph: {
    title: "Servizi — Montecchia Performance Center (Padova)",
    description:
      "Personal training, allenamento di gruppo, golf fitness, fisioterapia, osteopatia, nutrizione, pilates e yoga.",
    url: "https://www.montecchiaperformancecenter.it/servizi",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
  },
};

export default function ServiziPage() {
  return (
    <>
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Servizi
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Allenamento, golf, salute e benessere. Un ecosistema completo di
            servizi per la tua performance e il tuo benessere quotidiano.
          </p>
        </div>
      </section>

      {serviceCategories.map((category) => {
        const items = services.filter((s) => s.category === category);
        if (items.length === 0) return null;

        return (
          <section
            key={category}
            className="section-padding bg-white even:bg-neutral-50"
          >
            <div className="container-narrow">
              <h2 className="heading-section">{category}</h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/servizi/${service.slug}`}
                    className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <span className="mt-6 text-sm font-medium text-accent">
                      Scopri il servizio →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold">
            Non sai quale servizio fa per te?
          </h2>
          <p className="mt-4 text-neutral-300">
            Contattaci per una consulenza gratuita: ti aiutiamo a identificare il
            percorso più adatto ai tuoi obiettivi.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contatti" className="btn-primary">
              Contattaci
            </Link>
            <Link href="/team" className="btn-secondary">
              Scopri il team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
