import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export default function PalestraPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            La Palestra
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Una struttura pensata per chi non si accontenta: attrezzature
            all&apos;avanguardia, spazi ampi e un team pronto a supportarti.
          </p>
        </div>
      </section>

      {/* Struttura + Galleria */}
      <section className="section-padding bg-white" id="struttura">
        <div className="container-narrow">
          <h2 className="heading-section">Struttura e spazi</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Sala pesi, zona cardio, area functional e spogliatoi moderni. Ampio
            spazio per le immagini della vostra struttura.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ImagePlaceholder
                key={i}
                aspect="card"
                label={`Galleria struttura ${i}`}
                className="w-full"
              />
            ))}
          </div>
          <div className="mt-6">
            <ImagePlaceholder
              aspect="video"
              label="Video tour della palestra (placeholder)"
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Corsi */}
      <section className="section-padding bg-neutral-50" id="corsi">
        <div className="container-narrow">
          <h2 className="heading-section">Corsi</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Corsi di gruppo per tutti i livelli, con istruttori qualificati e
            programmi sempre aggiornati.
          </p>
          <div className="mt-12 space-y-12">
            {[
              {
                name: "Functional Training",
                desc: "Allenamento a corpo libero e con attrezzi per migliorare forza, mobilità e coordinazione.",
                instructor: "Marco Rossi",
                role: "Istruttore Functional",
              },
              {
                name: "Yoga & Stretching",
                desc: "Sessions per flessibilità, respirazione e recupero attivo.",
                instructor: "Laura Bianchi",
                role: "Insegnante Yoga",
              },
              {
                name: "Spinning",
                desc: "Ciclismo indoor ad alta intensità con musica e istruttore dedicato.",
                instructor: "Andrea Verdi",
                role: "Istruttore Cycling",
              },
            ].map((course) => (
              <div
                key={course.name}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm md:flex-row"
              >
                <div className="md:w-2/5">
                  <ImagePlaceholder
                    aspect="card"
                    label={course.name}
                    className="h-full min-h-[200px] w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8">
                  <h3 className="font-display text-2xl font-semibold text-primary">
                    {course.name}
                  </h3>
                  <p className="mt-3 text-neutral-600">{course.desc}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <ImagePlaceholder
                      aspect="square"
                      label="Foto istruttore"
                      className="h-14 w-14 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-primary">{course.instructor}</p>
                      <p className="text-sm text-neutral-500">{course.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orari - Calendario interattivo placeholder */}
      <section className="section-padding bg-white" id="orari">
        <div className="container-narrow">
          <h2 className="heading-section">Orari corsi</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Consulta gli orari settimanali. Qui potrà essere integrato un
            calendario interattivo.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200">
            <div className="grid grid-cols-7 border-b border-neutral-200 bg-neutral-50 text-center text-sm font-medium text-neutral-600">
              {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
                <div key={d} className="border-r border-neutral-200 py-4 last:border-r-0">
                  {d}
                </div>
              ))}
            </div>
            {[
              { time: "09:00", courses: ["Functional", "—", "Yoga", "—", "Spinning", "—", "Chiuso"] },
              { time: "10:30", courses: ["—", "Spinning", "—", "Functional", "—", "Yoga", "—"] },
              { time: "18:00", courses: ["Spinning", "Functional", "Yoga", "Spinning", "Functional", "—", "—"] },
            ].map((row) => (
              <div
                key={row.time}
                className="grid grid-cols-7 border-b border-neutral-200 last:border-b-0"
              >
                <div className="border-r border-neutral-200 py-4 pl-4 font-medium text-primary">
                  {row.time}
                </div>
                {row.courses.map((c, i) => (
                  <div
                    key={i}
                    className="border-r border-neutral-200 py-4 text-center text-sm last:border-r-0"
                  >
                    {c}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            * Orari indicativi. Per conferma contattare la reception.
          </p>
        </div>
      </section>

      {/* Membership / Prezzi */}
      <section className="section-padding bg-neutral-50" id="prezzi">
        <div className="container-narrow">
          <h2 className="heading-section">Membership e prezzi</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Scegli la formula più adatta a te. Possibilità di prova e pacchetti
            personalizzati.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Ingresso singolo", price: "€ 15", desc: "Un ingresso in palestra", featured: false },
              { name: "Mensile", price: "€ 59", desc: "Accesso illimitato palestra + corsi", featured: true },
              { name: "Annuale", price: "€ 499", desc: "12 mesi, prezzo bloccato. Miglior rapporto qualità/prezzo.", featured: false },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border-2 bg-white p-8 ${
                  plan.featured ? "border-accent shadow-lg" : "border-neutral-200"
                }`}
              >
                {plan.featured && (
                  <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent-dark">
                    Popolare
                  </span>
                )}
                <h3 className="mt-4 font-display text-xl font-semibold text-primary">
                  {plan.name}
                </h3>
                <p className="mt-2 text-3xl font-semibold text-primary">{plan.price}</p>
                <p className="mt-2 text-sm text-neutral-600">{plan.desc}</p>
                <Link
                  href="/contatti"
                  className={`mt-6 block w-full rounded-lg py-3 text-center text-sm font-medium transition-colors ${
                    plan.featured
                      ? "btn-primary"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Richiedi info
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold">Vuoi provare?</h2>
          <p className="mt-4 text-neutral-300">
            Prima visita o prova gratuita: contattaci per fissare un appuntamento.
          </p>
          <Link href="/contatti" className="btn-primary mt-8 inline-flex">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
