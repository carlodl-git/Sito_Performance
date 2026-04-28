import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Palestra a Padova (Selvazzano)",
  description:
    "Palestra al Golf Club della Montecchia: personal training, allenamento di gruppo, functional, pilates, yoga. Macchinari professionali e team qualificato.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/palestra",
  },
  openGraph: {
    title: "Palestra a Padova (Selvazzano) — Montecchia Performance Center",
    description:
      "Personal training, allenamento di gruppo, functional, pilates, yoga al Golf Club della Montecchia.",
    url: "https://www.montecchiaperformancecenter.it/palestra",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
  },
};

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
            Uno spazio dedicato al personal training e alle sessioni di
            allenamento seguite da professionisti. Pochi macchinari, tanta
            qualità.
          </p>
        </div>
      </section>

      {/* Struttura + Galleria */}
      <section className="section-padding bg-white" id="struttura">
        <div className="container-narrow">
          <h2 className="heading-section">Struttura e spazi</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Uno spazio funzionale con alcuni macchinari e pesi, progettato
            principalmente per sessioni di personal training e allenamenti
            individuali o in piccoli gruppi. Niente confusione, solo qualità
            e attenzione dedicata.
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
                desc: "Allenamento a corpo libero e con attrezzi per migliorare forza, mobilita' e coordinazione. Sessioni di gruppo ad alta intensita' adatte a tutti i livelli.",
                instructor: "Anna Simone",
                role: "Personal Trainer & Istruttrice Functional",
              },
              {
                name: "Yoga & Pilates",
                desc: "Sessioni per flessibilita', respirazione e recupero attivo. Un approccio che unisce la precisione del Pilates alla consapevolezza dello Yoga.",
                instructor: "Chiara Destro",
                role: "Istruttrice Pilates & Yoga",
              },
              {
                name: "Group Training",
                desc: "Allenamento di gruppo ad alta intensita' con programmi strutturati. Motivazione, risultati e spirito di squadra.",
                instructor: "Sascha Antoniutti",
                role: "Master Trainer & Personal Trainer",
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
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-semibold text-lg">
                      {course.instructor.split(" ").map(n => n[0]).join("")}
                    </div>
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

      {/* Orari */}
      <section className="section-padding bg-white" id="orari">
        <div className="container-narrow">
          <h2 className="heading-section">Orari corsi</h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Consulta gli orari settimanali. Per conferma e prenotazioni
            contatta la reception.
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
              { time: "09:00", courses: ["Functional", "—", "Yoga", "—", "Group", "—", "Chiuso"] },
              { time: "10:30", courses: ["—", "Group", "—", "Functional", "—", "Pilates", "—"] },
              { time: "18:00", courses: ["Group", "Functional", "Pilates", "Group", "Functional", "—", "—"] },
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

      {/* CTA */}
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
