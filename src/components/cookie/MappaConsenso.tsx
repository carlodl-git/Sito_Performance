"use client";

import { useEffect, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";

/* ============================================================
   LA MAPPA, DIETRO IL CONSENSO
   L'iframe di Google Maps scrive sul dispositivo appena viene montato:
   caricarlo prima del consenso vanificherebbe il banner. Finché la
   categoria "funzionali" è spenta mostriamo un segnaposto con il link
   che apre le mappe in una scheda nuova, così l'indirizzo resta
   raggiungibile lo stesso — è il motivo per cui il segnaposto non è
   una scatola vuota ma contiene l'indirizzo scritto.
   ============================================================ */

export function MappaConsenso({
  src,
  link,
  titolo,
  indirizzo,
}: {
  src: string;
  link: string;
  titolo: string;
  indirizzo: string;
}) {
  const [consentita, setConsentita] = useState(false);

  useEffect(() => {
    const aggiorna = () => setConsentita(CookieConsent.acceptedCategory("funzionali"));
    aggiorna();
    // Attenzione: vanilla-cookieconsent v3 emette questi eventi su
    // `window`, non su `document`. Ascoltarli su document non dà errore,
    // semplicemente non scatta mai: la mappa resterebbe spenta anche
    // dopo "Accetta tutti".
    // `cc:onConsent` scatta alla prima scelta, `cc:onChange` a ogni
    // modifica successiva dal pannello delle preferenze.
    window.addEventListener("cc:onConsent", aggiorna);
    window.addEventListener("cc:onChange", aggiorna);
    return () => {
      window.removeEventListener("cc:onConsent", aggiorna);
      window.removeEventListener("cc:onChange", aggiorna);
    };
  }, []);

  if (!consentita) {
    return (
      <div className="flex h-80 flex-col items-center justify-center gap-4 border border-line bg-paper-alt px-6 text-center">
        <p className="text-sm text-ink-soft">
          La mappa di Google resta spenta finché non accetti i cookie
          funzionali.
        </p>
        <p className="text-sm text-primary">{indirizzo}</p>
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => CookieConsent.showPreferences()}
            className="btn-area-light"
          >
            Attiva la mappa
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-area"
          >
            Oppure aprila in una scheda nuova
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-line">
      <iframe
        src={src}
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={titolo}
      />
    </div>
  );
}
