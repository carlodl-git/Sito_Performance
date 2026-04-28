import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Montecchia Performance Center — Palestra & Golf Lab a Padova (Selvazzano)",
  description:
    "Palestra, golf indoor, fisioterapia, osteopatia, nutrizione e personal training al Golf Club della Montecchia. Performance e benessere a Selvazzano Dentro (Padova).",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/",
  },
  openGraph: {
    title: "Montecchia Performance Center — Palestra & Golf Lab a Padova",
    description:
      "Palestra, golf indoor, fisioterapia, osteopatia, nutrizione e personal training al Golf Club della Montecchia (Selvazzano Dentro, Padova).",
    url: "https://www.montecchiaperformancecenter.it/",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Montecchia Performance Center",
  url: "https://www.montecchiaperformancecenter.it/",
  description:
    "Palestra, golf indoor, fisioterapia, osteopatia, nutrizione e personal training al Golf Club della Montecchia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via della Montecchia 12",
    addressLocality: "Selvazzano Dentro",
    addressRegion: "PD",
    postalCode: "35030",
    addressCountry: "IT",
  },
  areaServed: {
    "@type": "City",
    name: "Padova",
  },
  sameAs: [
    "https://www.montecchiaperformancecenter.it/",
  ],
};

const WHATSAPP_LINK =
  "https://wa.me/393314059134?text=Ciao!%20Vorrei%20prenotare%20una%20prova%20gratuita";

function WhatsAppButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-7 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className}`}
    >
      <svg className="h-6 w-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {children}
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden bg-brand">
        <div className="absolute inset-0">
          <Image
            src="/images/performance.webp"
            alt="Montecchia Performance Center - Simulatore golf indoor"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container-narrow relative z-10 pb-16 pt-32 sm:pb-20 lg:pb-24">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Performance
            <br />
            <span className="text-accent">senza compromessi</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            Palestra, corsi, golf indoor e un team di professionisti. Un unico
            centro per raggiungere i tuoi obiettivi.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton>Prenota una prova gratuita</WhatsAppButton>
            <Link href="/palestra" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-dark">
              Scopri la palestra
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center">
          <h2 className="heading-section">Montecchia Performance Center</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            Una struttura innovativa dove personal training, tecnologia e
            professionisti si incontrano. Dalle sessioni individuali ai corsi
            di gruppo, dal Golf Lab alla nutrizione e al recupero: tutto ciò
            che serve per performare al meglio.
          </p>
        </div>
      </section>

      {/* Highlight cards con immagini reali */}
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow">
          <h2 className="heading-section text-center">Cosa trovi da noi</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/palestra"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/palestra.jpg"
                  alt="Sessione di personal training"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Palestra
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Personal training, sessioni individuali e di gruppo in uno
                  spazio pensato per allenarti al meglio.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Scopri di più →
                </span>
              </div>
            </Link>

            <Link
              href="/palestra#corsi"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/corsi.jpg"
                  alt="Corso di gruppo fitness in palestra"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Corsi
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Functional, yoga, pilates e group training con istruttori
                  qualificati.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Vedi i corsi →
                </span>
              </div>
            </Link>

            <Link
              href="/servizi"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/servizi.jpg"
                  alt="Servizi di benessere e recupero"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Servizi
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Nutrizionista, osteopata, fisioterapia e supporto alla
                  performance.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  I servizi →
                </span>
              </div>
            </Link>

            <Link
              href="/golf-lab"
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/trackman_io_immagine.webp"
                  alt="Golf Lab con simulatore Trackman"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-primary group-hover:text-accent">
                  Golf Lab
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Simulatori Trackman, analisi swing e lezioni con maestri PGA.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Scopri il Golf Lab →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Calendario corsi della settimana */}
      <section className="section-padding bg-white" id="calendario">
        <div className="container-narrow">
          <h2 className="heading-section text-center">Corsi della settimana</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
            Ecco il programma settimanale dei corsi. Scegli quello che fa per te
            e vieni a provare.
          </p>
          <div className="mt-10 overflow-x-auto">
            <div className="min-w-[640px] overflow-hidden rounded-xl border border-neutral-200">
              <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-neutral-200 bg-primary text-center text-sm font-medium text-white">
                <div className="border-r border-primary-light py-4">Ora</div>
                {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((d) => (
                  <div key={d} className="border-r border-primary-light py-4 last:border-r-0">
                    {d}
                  </div>
                ))}
              </div>
              {[
                { time: "09:00", courses: ["Functional", "—", "Yoga", "—", "Group", "—", "—"] },
                { time: "10:30", courses: ["—", "Group", "—", "Functional", "—", "Pilates", "—"] },
                { time: "18:00", courses: ["Group", "Functional", "Pilates", "Group", "Functional", "—", "—"] },
              ].map((row) => (
                <div
                  key={row.time}
                  className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-neutral-200 last:border-b-0"
                >
                  <div className="border-r border-neutral-200 py-4 text-center font-semibold text-primary">
                    {row.time}
                  </div>
                  {row.courses.map((c, i) => (
                    <div
                      key={i}
                      className={`border-r border-neutral-200 py-4 text-center text-sm last:border-r-0 ${
                        c !== "—"
                          ? "font-medium text-primary bg-primary/5"
                          : "text-neutral-300"
                      }`}
                    >
                      {c}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-neutral-500">
            * Orari indicativi. Per conferma contattare la reception.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <WhatsAppButton className="text-sm px-5 py-3">
              Prenota una prova gratuita
            </WhatsAppButton>
            <Link href="/palestra#corsi" className="btn-secondary text-sm">
              Dettagli corsi e istruttori →
            </Link>
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-narrow text-center">
          <h2 className="heading-section">Il nostro team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Oltre 13 professionisti tra trainer, maestri di golf, nutrizionisti
            e specialisti del recupero. Scopri chi ti seguirà nel tuo percorso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/team" className="btn-primary">
              Conosci il team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Pronto a iniziare?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-300">
            La prima prova è gratuita. Scrivici su WhatsApp per fissare il tuo
            appuntamento.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <WhatsAppButton>Prenota la prova gratuita</WhatsAppButton>
            <Link
              href="/contatti"
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
            >
              Altre info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
