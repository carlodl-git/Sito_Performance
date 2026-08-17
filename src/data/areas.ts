/* ============================================================
   LE QUATTRO AREE DEL CENTRO
   Fonte di verità unica: home, header, footer, sitemap e le pagine
   delle aree leggono tutte da qui. Aggiungere un'area o rinominarne
   una significa toccare solo questo file.

   Ogni area si presenta come un sito a sé: nav propria, colore
   proprio, ritmo proprio. Ma condivide con le altre griglia,
   tipografia e componenti. Il colore vive in globals.css sotto
   `[data-area="..."]`; qui c'è solo la chiave.
   ============================================================ */

export type Area = "palestra" | "pilates" | "golf" | "salute";

export const areaKeys = ["palestra", "pilates", "golf", "salute"] as const;

export type AreaMeta = {
  /** Etichetta piena, usata nei titoli e nella home. */
  label: string;
  /**
   * Etichetta corta, usata solo nella barra di navigazione in alto.
   * Con le etichette piene la nav chiedeva 1065px e non stava sotto i
   * 1280, costringendo all'hamburger anche su un portatile da 1024.
   */
  navLabel: string;
  href: string;
  /** Numero d'ordine mostrato nella home e negli hero. */
  n: string;
  tagline: string;
  /** Paragrafo di presentazione nella home. */
  blurb: string;
  image: { src: string; alt: string };
  /** Sezioni della pagina: diventano la nav interna dell'area. */
  sections: { href: string; label: string }[];
  /** Messaggio precompilato per il WhatsApp dell'area. */
  whatsapp: string;
};

export const areaMeta: Record<Area, AreaMeta> = {
  palestra: {
    label: "Palestra & Corsi",
    navLabel: "Palestra",
    href: "/palestra",
    n: "01",
    tagline: "Sala attrezzata e corsi di gruppo",
    blurb:
      "Una sala attrezzata e un calendario settimanale di corsi: functional, tonificazione, core, Fit for Golf. Sempre con un istruttore in sala, sempre su prenotazione.",
    image: {
      src: "/images/palestra-2.jpg",
      alt: "La sala della palestra del Montecchia Performance Center",
    },
    sections: [
      { href: "#allenamenti", label: "Come ti alleni" },
      { href: "#corsi", label: "I corsi" },
      { href: "#orario", label: "Orario" },
      { href: "#prenota", label: "Prova gratuita" },
    ],
    whatsapp: "Ciao! Vorrei informazioni sulla palestra e sui corsi",
  },
  pilates: {
    label: "Studio Pilates Reformer",
    navLabel: "Pilates",
    href: "/pilates",
    n: "02",
    tagline: "Individuale, in duetto o in piccolo gruppo",
    blurb:
      "Uno studio dedicato al Pilates sul Reformer: lavoro di precisione su forza profonda, mobilità e postura, seguito uno a uno dall'istruttrice.",
    // TODO FOTO: non esiste ancora una foto del Reformer né dello studio.
    // Questa è una lezione all'aperto sul prato del club: è una foto vera,
    // ma non è il Pilates. L'alt dice quello che si vede, non quello che
    // vorremmo si vedesse. Sostituire appena arrivano le foto dello studio.
    image: {
      src: "/images/yoga-prato.jpg",
      alt: "Lezione all'aperto sul prato del Golf Club della Montecchia",
    },
    sections: [
      { href: "#metodo", label: "Il metodo" },
      { href: "#lezioni", label: "Le lezioni" },
      { href: "#a-chi", label: "A chi si rivolge" },
      { href: "#prenota", label: "Prenota" },
    ],
    whatsapp: "Ciao! Vorrei informazioni sullo Studio Pilates Reformer",
  },
  golf: {
    label: "Golf Indoor",
    navLabel: "Golf Indoor",
    href: "/golf-indoor",
    n: "03",
    tagline: "Simulatori, analisi dello swing e golf fitness",
    blurb:
      "Simulatori con tecnologia TrackMan, analisi biomeccanica dello swing e lezioni con maestri PGA. Si gioca e si migliora tutto l'anno, con qualsiasi meteo.",
    image: {
      src: "/images/golf-indoor-lezione.jpg",
      alt: "Sala simulatori del Golf Indoor con giocatori in sessione",
    },
    sections: [
      { href: "#simulatori", label: "I simulatori" },
      { href: "#analisi", label: "Analisi dello swing" },
      { href: "#fitness", label: "Golf fitness" },
      { href: "#prenota", label: "Prenota" },
    ],
    whatsapp: "Ciao! Vorrei informazioni sul Golf Indoor",
  },
  salute: {
    label: "Salute e Benessere",
    navLabel: "Salute",
    href: "/salute-benessere",
    n: "04",
    tagline: "Fisioterapia, osteopatia, nutrizione",
    blurb:
      "I professionisti che si occupano di recupero, postura e alimentazione, in dialogo diretto con i trainer delle altre aree del centro.",
    // TODO FOTO: la foto precedente era uno stock di massaggio con oli:
    // diceva "centro benessere" a chi cerca un fisioterapista. Meglio
    // l'esterno del centro, che almeno è vero, finché non ci sono foto
    // degli studi dei professionisti.
    image: {
      src: "/images/esterno.jpg",
      alt: "Il Montecchia Performance Center al Golf Club della Montecchia",
    },
    sections: [
      { href: "#percorso", label: "Il percorso" },
      { href: "#prestazioni", label: "Le prestazioni" },
      { href: "#professionisti", label: "I professionisti" },
      { href: "#prenota", label: "Prenota" },
    ],
    whatsapp: "Ciao! Vorrei informazioni sull'area Salute e Benessere",
  },
};

/** Le quattro aree in ordine, pronte da mappare. */
export const allAreas = areaKeys.map((key) => ({ key, ...areaMeta[key] }));
