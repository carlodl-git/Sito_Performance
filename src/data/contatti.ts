/* ============================================================
   RECAPITI DEL CENTRO
   Erano ripetuti in sei file e avevano già divergato: l'indirizzo
   compariva sia come "Via Montecchia" sia come "Via della Montecchia".
   Qui c'è una copia sola, così una correzione si fa una volta.

   INDIRIZZO VERIFICATO (01/09/2026): golfmontecchia.it pubblica
   "VIA MONTECCHIA, 12 — 35030 SELVAZZANO DENTRO — PADOVA", che coincide
   con la privacy policy di Golf della Montecchia Srl. Due fonti
   indipendenti, nessuna divergenza: la forma qui sotto è quella buona.
   ============================================================ */

export const contatti = {
  nome: "Montecchia Performance Center",
  /**
   * La società che gestisce il centro. Serve in footer insieme alla
   * partita IVA: il D.Lgs 70/2003 art. 7 vuole i dati identificativi
   * "facilmente accessibili in modo diretto e permanente", e il vecchio
   * sito li teneva in fondo a ogni pagina.
   */
  ragioneSociale: "Golf della Montecchia S.r.l.",
  piva: "IT 02294260282",
  via: "Via Montecchia, 12",
  cap: "35030",
  citta: "Selvazzano Dentro",
  provincia: "PD",
  /** Numero in formato internazionale, senza spazi: per tel: e wa.me. */
  telefono: "+393314059134",
  /** Lo stesso numero, come si legge. */
  telefonoLeggibile: "+39 331 405 9134",
  email: "info@montecchiaperformancecenter.it",
  booking: "https://booking.montecchiaperformancecenter.it",
  facebook: "https://www.facebook.com/montecchiaperformancecenter",
  instagram: "https://www.instagram.com/montecchiaperformancecenter",
  /**
   * Due orari, non uno. La palestra sta aperta molto più a lungo della
   * segreteria, e tenerli uniti faceva credere che alle 20:30 ci fosse
   * qualcuno al telefono. Il vecchio sito li teneva distinti ed è giusto
   * così.
   *
   * ⚠️ DA CONFERMARE COL CENTRO. Questi valori sono ripresi dal
   * WordPress in produzione (letto il 01/09/2026), che è la fonte più
   * aggiornata disponibile. I precedenti (7:00–22:00, Sab 8:00–18:00)
   * non corrispondevano a niente di pubblicato e mandavano gente davanti
   * a una porta chiusa.
   */
  orari: {
    palestra: [
      {
        giorni: "Lun–Ven",
        ore: "7:30 – 21:00",
        // Gli stessi orari in forma leggibile dalla macchina, per il
        // JSON-LD. Stanno qui e non in un secondo file perché la
        // versione scritta e quella per Google devono per forza dire la
        // stessa cosa: separarle è come si crea una divergenza.
        schema: { giorni: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], apre: "07:30", chiude: "21:00" },
      },
      {
        giorni: "Sab",
        ore: "7:30 – 16:00",
        schema: { giorni: ["Saturday"], apre: "07:30", chiude: "16:00" },
      },
      { giorni: "Dom", ore: "chiuso", schema: null },
    ],
    segreteria: [
      { giorni: "Lun–Gio", ore: "9:30 – 16:00" },
      { giorni: "Ven", ore: "9:30 – 15:30" },
      { giorni: "Sab e Dom", ore: "chiusa" },
    ],
  },
} as const;

/** Indirizzo su una riga, per i meta e i testi correnti. */
export const indirizzoBreve = `${contatti.via}, ${contatti.citta} (${contatti.provincia})`;

/** Numero WhatsApp senza il "+", come lo vuole wa.me. */
export const whatsappNumero = contatti.telefono.replace("+", "");

/** Link WhatsApp con messaggio precompilato. */
export function whatsappLink(messaggio: string): string {
  return `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(messaggio)}`;
}

/**
 * Embed di Google Maps senza chiave API. La versione precedente usava un
 * parametro `pb=` con coordinate arrotondate e un place id inventato
 * (0x477eda5e5b5b5b5b): mostrava il posto sbagliato. Questa forma fa una
 * ricerca per indirizzo e funziona senza credenziali.
 */
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${contatti.nome}, ${contatti.via}, ${contatti.cap} ${contatti.citta} ${contatti.provincia}`,
)}&output=embed`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${contatti.nome}, ${contatti.via}, ${contatti.cap} ${contatti.citta} ${contatti.provincia}`,
)}`;
