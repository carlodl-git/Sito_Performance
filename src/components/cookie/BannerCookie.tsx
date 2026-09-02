"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

/* ============================================================
   BANNER DEI COOKIE
   Il sito è statico e senza form: da solo non deposita niente. I due
   soli elementi che scrivono sul dispositivo sono Google Analytics e
   la mappa di Google incorporata in /contatti. Il banner esiste per
   quei due, e finché non c'è consenso nessuno dei due parte.

   Libreria: vanilla-cookieconsent v3 (MIT). Nessun servizio esterno,
   nessun account da mantenere: il consenso resta nel dominio.

   Le chiavi delle categorie sono in italiano perché finiscono nel
   cookie `cc_cookie` e nella pagina /cookie-policy, che le nomina.
   ============================================================ */

/**
 * ID della property GA4. Sta in variabile d'ambiente e non nel codice
 * perché la scelta non è nostra: la property del vecchio WordPress è
 * `G-5SB29CK9V0` e riusarla mantiene la continuità storica prima/dopo
 * la migrazione, ma il centro può volerne una nuova. Se la variabile
 * non è impostata, Analytics semplicemente non viene mai caricato e il
 * resto del banner continua a funzionare.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function caricaAnalytics() {
  if (!GA_ID || document.getElementById("ga4")) return;

  const script = document.createElement("script");
  script.id = "ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // anonymize_ip: l'ottava parte dell'IP viene troncata da Google prima
  // di scrivere il dato. Su GA4 è il comportamento predefinito, ma
  // esplicitarlo rende l'informativa verificabile.
  window.gtag("config", GA_ID, { anonymize_ip: true });
}

/**
 * Revoca vera. `autoClear` della libreria da solo non basta: gtag.js
 * resta in memoria e riscrive `_ga` al primo evento successivo. Il flag
 * `ga-disable-<ID>` è l'opt-out documentato da Google e blocca lo
 * script già caricato; la cancellazione esplicita toglie i cookie già
 * scritti senza aspettare un reload.
 */
function disattivaAnalytics() {
  if (!GA_ID) return;

  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = true;

  const dominio = location.hostname;
  document.cookie.split(";").forEach((voce) => {
    const nome = voce.split("=")[0].trim();
    if (!nome.startsWith("_ga") && nome !== "_gid") return;
    // Il cookie va cancellato sullo stesso dominio su cui è stato
    // scritto: GA usa il dominio senza sottodominio, quindi ci provo
    // anche in quella forma.
    for (const d of [dominio, `.${dominio}`, `.${dominio.split(".").slice(-2).join(".")}`]) {
      document.cookie = `${nome}=; path=/; domain=${d}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    document.cookie = `${nome}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
}

export function BannerCookie() {
  useEffect(() => {
    void CookieConsent.run({
      guiOptions: {
        consentModal: { layout: "box", position: "bottom right" },
        preferencesModal: { layout: "box", position: "right" },
      },

      categories: {
        necessari: { enabled: true, readOnly: true },
        analisi: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }],
          },
          services: {
            ga4: {
              label: "Google Analytics 4",
              onAccept: caricaAnalytics,
              onReject: disattivaAnalytics,
            },
          },
        },
        funzionali: {},
      },

      language: {
        default: "it",
        translations: {
          it: {
            consentModal: {
              title: "Rispettiamo la tua privacy",
              description:
                "Usiamo cookie tecnici, necessari al funzionamento del sito. Con il tuo consenso usiamo anche cookie di analisi (Google Analytics), per capire quali pagine servono davvero, e funzionali (la mappa di Google nella pagina contatti). Puoi accettare, rifiutare o scegliere voce per voce.",
              acceptAllBtn: "Accetta tutti",
              acceptNecessaryBtn: "Rifiuta tutti",
              showPreferencesBtn: "Gestisci preferenze",
              footer:
                '<a href="/privacy-policy">Privacy Policy</a> · <a href="/cookie-policy">Cookie Policy</a>',
            },
            preferencesModal: {
              title: "Preferenze sui cookie",
              acceptAllBtn: "Accetta tutti",
              acceptNecessaryBtn: "Rifiuta tutti",
              savePreferencesBtn: "Salva le preferenze",
              closeIconLabel: "Chiudi",
              sections: [
                {
                  title: "Come li usiamo",
                  description:
                    "Il sito non ha moduli da compilare né area riservata: le prenotazioni passano da WhatsApp e dal gestionale del club. I soli cookie oltre a quelli tecnici sono quelli qui sotto, e restano spenti finché non li accendi tu.",
                },
                {
                  title: "Cookie tecnici <span class=\"pm__badge\">sempre attivi</span>",
                  description:
                    "Servono a far funzionare il sito e a ricordare questa scelta. Senza di loro il banner ricomparirebbe a ogni pagina.",
                  linkedCategory: "necessari",
                },
                {
                  title: "Cookie di analisi",
                  description:
                    "Google Analytics 4, con IP troncato. Ci dicono quante persone visitano il sito e quali pagine leggono. Non servono a mostrarti pubblicità.",
                  linkedCategory: "analisi",
                },
                {
                  title: "Cookie funzionali",
                  description:
                    "La mappa di Google incorporata nella pagina Contatti. Senza consenso al suo posto trovi un link che apre le mappe in una scheda nuova: l'indirizzo resta comunque raggiungibile.",
                  linkedCategory: "funzionali",
                },
                {
                  title: "Domande",
                  description:
                    'Scrivici a <a href="mailto:info@montecchiaperformancecenter.it">info@montecchiaperformancecenter.it</a> o leggi la <a href="/cookie-policy">Cookie Policy</a>.',
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
