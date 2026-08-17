/* ============================================================
   RECAPITI DEL CENTRO
   Erano ripetuti in sei file e avevano già divergato: l'indirizzo
   compariva sia come "Via Montecchia" sia come "Via della Montecchia".
   Qui c'è una copia sola, così una correzione si fa una volta.

   ⚠️ DA CONFERMARE COL CENTRO: la forma dell'indirizzo. Quella usata
   qui è quella della privacy policy — testo legale di Golf della
   Montecchia Srl, la fonte più autorevole che abbiamo in repo — ma va
   verificata contro l'Impressum del club prima del lancio, insieme a
   orari e numero di telefono.
   ============================================================ */

export const contatti = {
  nome: "Montecchia Performance Center",
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
  orari: [
    { giorni: "Lun–Ven", ore: "7:00 – 22:00" },
    { giorni: "Sab", ore: "8:00 – 18:00" },
    { giorni: "Dom", ore: "chiuso" },
  ],
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
