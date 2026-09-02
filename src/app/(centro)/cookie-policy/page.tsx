import Link from "next/link";
import type { Metadata } from "next";
import { contatti } from "@/data/contatti";
import { PreferenzeCookie } from "@/components/cookie/PreferenzeCookie";

/* ============================================================
   COOKIE POLICY
   Pagina nuova: sul WordPress non esisteva, i cookie erano descritti
   dentro la privacy policy insieme a tutto il resto. Tenerli separati
   serve a una cosa pratica: il banner deve poter linkare l'elenco
   esatto di cosa si sta accettando, e quell'elenco deve stare in cima
   alla pagina, non a metà di un testo legale lungo.

   L'elenco qui sotto e le categorie in BannerCookie.tsx descrivono la
   stessa cosa: se cambia una, va cambiata l'altra.
   ============================================================ */

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Quali cookie usa il sito del Montecchia Performance Center, a cosa servono e come revocare il consenso.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/cookie-policy",
  },
  robots: { index: true, follow: true },
};

const categorie = [
  {
    nome: "Cookie tecnici",
    consenso: "Sempre attivi",
    cosa: "cc_cookie",
    durata: "6 mesi",
    scopo:
      "Ricordano la scelta fatta su questo banner. Senza, la richiesta di consenso ricomparirebbe a ogni pagina.",
  },
  {
    nome: "Cookie di analisi",
    consenso: "Solo con il tuo consenso",
    cosa: "_ga, _ga_*",
    durata: "fino a 24 mesi",
    scopo:
      "Google Analytics 4, con IP troncato. Contano le visite e dicono quali pagine vengono lette. Non profilano e non servono a mostrare pubblicità.",
  },
  {
    nome: "Cookie funzionali",
    consenso: "Solo con il tuo consenso",
    cosa: "cookie di google.com",
    durata: "variabile, decisa da Google",
    scopo:
      "La mappa incorporata nella pagina Contatti. Senza consenso la mappa non viene caricata e al suo posto compare un link che apre Google Maps in una scheda nuova.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-primary py-24 text-white sm:py-32">
        <div className="container-narrow">
          <Link href="/" className="eyebrow text-white/60 hover:text-white">
            ← Home
          </Link>
          <h1 className="heading-display mt-6 text-white">Cookie Policy</h1>
          <p className="lead mt-6 max-w-2xl text-white/70">
            Cosa viene salvato sul tuo dispositivo quando visiti questo sito, e
            come cambiare idea in qualsiasi momento.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <p className="lead">
            Questo sito è statico: non ha moduli da compilare, né area
            riservata, né carrello. Le prenotazioni passano da WhatsApp e, per
            il golf, dal gestionale del club. Di suo quindi non deposita quasi
            niente: i soli cookie oltre a quello tecnico sono Google Analytics
            e la mappa di Google, ed entrambi restano spenti finché non sei tu
            ad accenderli.
          </p>

          <h2 className="heading-section mt-16">Cosa usiamo</h2>
          <div className="mt-8 space-y-8">
            {categorie.map((c) => (
              <div key={c.nome} className="border-t border-line pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="heading-sub">{c.nome}</h3>
                  <span className="eyebrow">{c.consenso}</span>
                </div>
                <p className="mt-3 text-ink-soft">{c.scopo}</p>
                <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-2 text-sm text-ink-soft">
                  <div>
                    <dt className="inline text-primary">Nome: </dt>
                    <dd className="inline">{c.cosa}</dd>
                  </div>
                  <div>
                    <dt className="inline text-primary">Durata: </dt>
                    <dd className="inline">{c.durata}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          <h2 className="heading-section mt-16">Cambiare idea</h2>
          <p className="mt-6 text-ink-soft">
            Il consenso si revoca con la stessa facilità con cui si dà: il
            pannello si riapre da qui, oppure dal link “Preferenze cookie” in
            fondo a ogni pagina. Quando togli il consenso all’analisi, i cookie
            già scritti vengono cancellati.
          </p>
          <p className="mt-6">
            <PreferenzeCookie className="btn-area" />
          </p>
          <p className="mt-6 text-sm text-ink-soft">
            Puoi anche bloccare o cancellare i cookie dalle impostazioni del tuo
            browser. Se blocchi quelli tecnici, il banner ricomparirà a ogni
            visita.
          </p>

          <h2 className="heading-section mt-16">Chi tratta i dati</h2>
          <p className="mt-6 text-ink-soft">
            Il titolare del trattamento è {contatti.ragioneSociale}, P.IVA{" "}
            {contatti.piva}, con sede in {contatti.via}, {contatti.cap}{" "}
            {contatti.citta} ({contatti.provincia}). Per esercitare i tuoi
            diritti puoi scrivere a{" "}
            <a
              href="mailto:privacy@golfmontecchia.it"
              className="text-area underline underline-offset-4"
            >
              privacy@golfmontecchia.it
            </a>
            . Il dettaglio completo, comprese le basi giuridiche e i tempi di
            conservazione, sta nella{" "}
            <Link
              href="/privacy-policy"
              className="text-area underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
