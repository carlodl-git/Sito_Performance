import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const services = [
  {
    slug: "nutrizionista",
    title: "Nutrizionista",
    short: "Piani alimentari personalizzati per sport e benessere.",
    imageLabel: "Nutrizionista",
  },
  {
    slug: "fisioterapista",
    title: "Fisioterapista",
    short: "Riabilitazione e prevenzione per atleti e non.",
    imageLabel: "Fisioterapia",
  },
  {
    slug: "massaggiatore",
    title: "Massaggiatore",
    short: "Massaggi sportivi e decontratturanti.",
    imageLabel: "Massaggi",
  },
];

export default function ServiziPage() {
  return (
    <>
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Servizi
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Nutrizione, fisioterapia, massaggi e altri professionisti per
            completare il tuo percorso di performance e benessere.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="space-y-16">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servizi/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 md:flex-row"
              >
                <div className="md:w-2/5">
                  <ImagePlaceholder
                    aspect="card"
                    label={service.imageLabel}
                    className="h-full min-h-[220px] w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8">
                  <h2 className="font-display text-2xl font-semibold text-primary group-hover:text-accent">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-neutral-600">{service.short}</p>
                  <span className="mt-6 inline-block text-sm font-medium text-accent">
                    Scopri il servizio →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-narrow text-center">
          <h2 className="heading-section">Altri servizi in arrivo</h2>
          <p className="mt-4 text-neutral-600">
            Stiamo ampliando l&apos;offerta con nuovi professionisti. Resta
            aggiornato o contattaci per esigenze specifiche.
          </p>
          <Link href="/contatti" className="btn-primary mt-8 inline-flex">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
