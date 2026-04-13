"use client";

const WHATSAPP_NUMBER = "393314059134";
const EMAIL = "info@montecchiaperformancecenter.it";
const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0!2d11.8!3d45.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eda5e5b5b5b5b%3A0x0!2sMontecchia+Performance+Center!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Montecchia+Performance+Center+Via+Montecchia+12+Selvazzano+Dentro+PD";

export default function ContattiPage() {
  return (
    <>
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contatti
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Indirizzo, orari e come raggiungerci. Siamo a disposizione per
            informazioni e prenotazioni.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Info e mappa */}
            <div>
              <h2 className="heading-section">Dove siamo</h2>
              <div className="mt-6 space-y-4 text-neutral-600">
                <p className="font-medium text-primary">
                  Montecchia Performance Center
                </p>
                <p>Via Montecchia, 12</p>
                <p>35030 Selvazzano Dentro (PD)</p>
              </div>
              <div className="mt-8 space-y-4">
                <p>
                  <span className="font-medium text-primary">Telefono:</span>{" "}
                  <a
                    href="tel:+393314059134"
                    className="text-primary hover:underline"
                  >
                    +39 331 405 9134
                  </a>
                </p>
                <p>
                  <span className="font-medium text-primary">Email:</span>{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>
              <div className="mt-8">
                <p className="font-medium text-primary">Orari</p>
                <p className="mt-2 text-neutral-600">
                  Lun–Ven: 7:00 – 22:00
                  <br />
                  Sab: 8:00 – 18:00
                  <br />
                  Dom: chiuso
                </p>
              </div>
              <div className="mt-8">
                <div className="overflow-hidden rounded-xl border border-neutral-200">
                  <iframe
                    src={MAPS_EMBED_URL}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Montecchia Performance Center - Mappa"
                  />
                </div>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Apri in Google Maps
                </a>
              </div>
            </div>

            {/* Scrivici */}
            <div>
              <h2 className="heading-section">Scrivici</h2>
              <p className="mt-4 text-neutral-600">
                Contattaci su WhatsApp per una risposta veloce o inviaci una
                email. Per prenotazioni golf usa il sito di booking.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#25D366] px-6 py-4 text-base font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                >
                  <svg
                    className="h-6 w-6 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-primary bg-transparent px-6 py-4 text-base font-medium text-primary transition-colors hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <svg
                    className="h-6 w-6 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Invia email
                </a>
              </div>

              <div className="mt-12 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="font-display text-lg font-semibold text-primary">
                  Prenotazioni Golf Indoor
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Per prenotare una sessione ai simulatori golf, utilizza il
                  nostro sistema di booking online.
                </p>
                <a
                  href="https://booking.montecchiaperformancecenter.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 inline-flex text-sm"
                >
                  Prenota Golf Indoor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
