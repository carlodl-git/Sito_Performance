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
      "Piani alimentari personalizzati in base agli obiettivi: performance sportiva, composizione corporea, benessere generale. Consulenze per atleti e non, con follow-up e supporto continuativo. Integrazione con l'allenamento per massimizzare i risultati.",
    professional: "Dott.ssa Elena Neri",
    role: "Biologa Nutrizionista",
  },
  fisioterapista: {
    title: "Fisioterapista",
    description:
      "Riabilitazione post-infortunio, prevenzione e mantenimento per atleti e persone attive. Valutazione funzionale, terapia manuale e esercizio terapeutico. Collaborazione con i trainer per programmi di recupero e performance.",
    professional: "Dott. Paolo Martini",
    role: "Fisioterapista",
  },
  massaggiatore: {
    title: "Massaggiatore",
    description:
      "Massaggi sportivi, decontratturanti e rilassanti. Ideali post-allenamento o per chi lavora molte ore in tensione. Sessioni su appuntamento con professionisti qualificati.",
    professional: "Simone Galli",
    role: "Massaggiatore sportivo",
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    { slug: "nutrizionista" },
    { slug: "fisioterapista" },
    { slug: "massaggiatore" },
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
              <ImagePlaceholder
                aspect="square"
                label={`Professionista - ${data.title}`}
                className="w-full rounded-xl"
              />
              <div className="mt-6">
                <p className="font-display text-xl font-semibold text-primary">
                  {data.professional}
                </p>
                <p className="text-neutral-600">{data.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
