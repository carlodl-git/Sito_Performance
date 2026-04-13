import Link from "next/link";
import { notFound } from "next/navigation";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const servicesData: Record<
  string,
  { title: string; description: string; professional: string; role: string }
> = {
  nutrizionista: {
    title: "Nutrizionista",
    description:
      "Piani alimentari personalizzati in base agli obiettivi: performance sportiva, composizione corporea, benessere generale. Consulenze per atleti e non, con follow-up e supporto continuativo. Integrazione con l'allenamento per massimizzare i risultati. Nutrizionista ufficiale del Basket Mestre (Serie B), con competenze avanzate in nutrizione e integrazione applicata allo sport.",
    professional: "Dott. Emanuele Veronese",
    role: "Biologo Nutrizionista",
  },
  osteopata: {
    title: "Osteopata",
    description:
      "Trattamenti osteopatici per la gestione del dolore, il recupero funzionale e la prevenzione degli infortuni. Valutazione posturale e terapia manuale per atleti e persone attive. Specializzazione in trattamento viscerale per pazienti con lipedema e linfedema. Collaborazione con il team di trainer per percorsi di recupero integrati.",
    professional: "Dott. Pietro Bernuzzi",
    role: "Osteopata",
  },
  fisioterapista: {
    title: "Fisioterapista",
    description:
      "Riabilitazione post-infortunio, prevenzione e mantenimento per atleti e persone attive. Valutazione funzionale, terapia manuale e esercizio terapeutico. Collaborazione con i trainer per programmi di recupero e performance.",
    professional: "Professionista del centro",
    role: "Fisioterapista",
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    { slug: "nutrizionista" },
    { slug: "osteopata" },
    { slug: "fisioterapista" },
  ];
}

export default async function ServizioPage({ params }: Props) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) notFound();

  return (
    <>
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <Link
            href="/servizi"
            className="text-sm font-medium text-accent hover:text-accent-light"
          >
            ← Tutti i servizi
          </Link>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            {data.role}: {data.professional}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="heading-section">Il servizio</h2>
              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                {data.description}
              </p>
              <div className="mt-8">
                <Link href="/contatti" className="btn-primary">
                  Richiedi informazioni
                </Link>
              </div>
            </div>
            <div>
              <div className="flex h-48 w-full items-center justify-center rounded-xl bg-primary/10">
                <div className="text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-primary font-display font-semibold text-2xl">
                    {data.professional
                      .split(" ")
                      .filter((w) => w !== "Dott." && w !== "Dott.ssa" && w !== "del" && w !== "centro")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <p className="mt-4 font-display text-xl font-semibold text-primary">
                    {data.professional}
                  </p>
                  <p className="text-neutral-600">{data.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
