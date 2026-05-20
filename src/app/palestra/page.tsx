import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

function courseColor(name: string) {
  switch (name) {
    case "Full Body Workout":
    case "Core Stability & Upper Body (Postural)":
    case "Tone up & Cardio":
    case "Hatha Yoga":
      return "bg-indigo-200 text-indigo-900 font-medium";
    case "Fit for Golf":
      return "bg-emerald-200 text-emerald-900 font-medium";
    case "Pilates":
      return "bg-fuchsia-200 text-fuchsia-900 font-medium";
    case "Tonificazione Total Body":
      return "bg-violet-200 text-violet-900 font-medium";
    case "Step and Sculpt":
      return "bg-red-200 text-red-900 font-medium";
    case "Brucia Grassi":
    case "Gambe Addome Glutei":
      return "bg-amber-200 text-amber-900 font-medium";
    default:
      return "text-neutral-300";
  }
}

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
    images: ["/images/palestra-1.jpg"],
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
            {[
              { src: "/images/palestra-1.jpg", alt: "Sala palestra principale" },
              { src: "/images/palestra-2.jpg", alt: "Area pesi e macchinari" },
              { src: "/images/palestra-3.jpg", alt: "Zona allenamento funzionale" },
              { src: "/images/golf-indoor-1.jpg", alt: "Golf Lab indoor" },
              { src: "/images/yoga-indoor.jpg", alt: "Sala yoga e pilates" },
              { src: "/images/yoga-esterno.jpg", alt: "Yoga all'aperto" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
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
                image: "/images/palestra-2.jpg",
              },
              {
                name: "Yoga",
                desc: "Pratica che unisce respiro, postura e consapevolezza. Lavora su flessibilita', equilibrio e gestione dello stress. Sessioni adatte a tutti i livelli, anche all'aperto nei mesi caldi.",
                instructor: "Chiara Destro",
                role: "Istruttrice Yoga & Pilates",
                image: "/images/yoga-esterno.jpg",
              },
              {
                name: "Pilates",
                desc: "Metodo di controllo del corpo focalizzato su core, postura e mobilita'. Movimenti precisi e respirazione guidata per tonificare in profondita' senza sovraccaricare le articolazioni.",
                instructor: "Chiara Destro",
                role: "Istruttrice Yoga & Pilates",
                image: "/images/yoga-indoor.jpg",
              },
              {
                name: "Group Training",
                desc: "Allenamento di gruppo ad alta intensita' con programmi strutturati. Motivazione, risultati e spirito di squadra.",
                instructor: "Sascha Antoniutti",
                role: "Master Trainer & Personal Trainer",
                image: "/images/palestra-3.jpg",
              },
              {
                name: "AcquaGym (solo in estate)",
                desc: "Allenamento in acqua a basso impatto articolare: tonificazione, mobilita' e cardio in un ambiente divertente e adatto a tutti. Attivo solo nei mesi estivi (giugno, luglio, agosto).",
                instructor: "Da definire",
                role: "Istruttore/Istruttrice AcquaGym",
                image: "/images/acquagym.jpg",
              },
            ].map((course) => (
              <div
                key={course.name}
                className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm md:flex-row"
              >
                <div className="relative min-h-[240px] md:w-2/5">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
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
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[740px] overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-[96px_repeat(7,1fr)] border-b border-neutral-200 bg-neutral-50 text-center text-sm font-medium text-neutral-600">
                <div className="border-r border-neutral-200 py-4">Ora</div>
                {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
                  <div key={d} className="border-r border-neutral-200 py-4 last:border-r-0">
                    {d}
                  </div>
                ))}
              </div>
              {[
                { start: "08:40", end: "09:30", courses: ["Full Body Workout", "—", "Full Body Workout", "—", "Core Stability & Upper Body (Postural)", "—", "—"] },
                { start: "13:10", end: "14:00", courses: ["—", "Fit for Golf", "—", "Fit for Golf", "—", "—", "—"] },
                { start: "17:30", end: "18:30", courses: ["—", "Pilates", "—", "Pilates", "—", "—", "—"] },
                { start: "18:15", end: "19:05", courses: ["Brucia Grassi", "Step and Sculpt", "Tonificazione Total Body", "Step and Sculpt", "Gambe Addome Glutei", "—", "—"] },
                { start: "19:00", end: "20:00", courses: ["—", "Hatha Yoga", "—", "Hatha Yoga", "—", "—", "—"] },
                { start: "19:15", end: "20:05", courses: ["Tone up & Cardio", "—", "Tone up & Cardio", "—", "—", "—", "—"] },
                { start: "20:10", end: "21:00", courses: ["—", "Pilates", "—", "Pilates", "—", "—", "—"] },
              ].map((row) => (
                <div
                  key={row.start}
                  className="grid grid-cols-[96px_repeat(7,1fr)] border-b border-neutral-200 last:border-b-0"
                >
                  <div className="border-r border-neutral-200 py-4 text-center text-primary">
                    <div className="font-semibold">{row.start}</div>
                    <div className="text-xs text-neutral-500">→ {row.end}</div>
                  </div>
                  {row.courses.map((c, i) => (
                    <div
                      key={i}
                      className={`border-r border-neutral-200 py-4 text-center text-sm last:border-r-0 ${courseColor(c)}`}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Stagione 2025/2026 (autunno · inverno · primavera). Venerdì mattina inizio alle 08:45.{" "}
            <span className="font-medium">Corsi solo su prenotazione</span> — WhatsApp 331 4059134.
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            AcquaGym attiva solo nei mesi estivi (giugno · luglio · agosto).
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
