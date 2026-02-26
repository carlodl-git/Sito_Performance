import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

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
            <div>
              <ImagePlaceholder
                aspect="card"
                label="Storia del centro / Team"
                className="w-full rounded-xl"
              />
            </div>
            <div>
              <h2 className="heading-section">La nostra storia</h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Il Montecchia Performance Center nasce dalla volontà di creare un
                luogo dove sport, tecnologia e professionalità si incontrano.
                Nato in un contesto di eccellenza come il Golf Club Montecchia,
                il centro si è evoluto per offrire non solo il golf indoor ma
                una palestra completa, corsi di gruppo e servizi di supporto alla
                performance.
              </p>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                Crediamo che la performance sia il risultato di allenamento,
                alimentazione, recupero e mentalità. Per questo abbiamo riunito
                sotto lo stesso tetto palestra, corsi, nutrizionista,
                fisioterapista e massaggi: un ecosistema pensato per chi ha
                obiettivi chiari e non si accontenta.
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
            massimo. Ambiente pulito, attrezzature curate e un team che ti
            accompagna dal primo ingresso al raggiungimento dei tuoi obiettivi.
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              { title: "Qualità", text: "Struttura e attrezzature all'avanguardia, sempre ordinate e funzionanti." },
              { title: "Professionalità", text: "Istruttori e professionisti qualificati, aggiornati e disponibili." },
              { title: "Comunità", text: "Un ambiente accogliente dove allenarsi e crescere insieme." },
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

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <h2 className="heading-section text-center">Immagini del centro</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
            Spazio dedicato a una galleria premium della struttura e del team.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <ImagePlaceholder
                key={i}
                aspect="card"
                label={`Chi siamo - Immagine ${i}`}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
