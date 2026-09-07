/* ============================================================
   LE QUATTRO AREE DEL CENTRO
   Fonte di verità unica: home, header, footer, sitemap e le pagine
   delle aree leggono tutte da qui. Aggiungere un'area o rinominarne
   una significa toccare solo questo file.

   Ogni area si presenta come un sito a sé: nav propria, colore
   proprio, ritmo proprio. Ma condivide con le altre griglia,
   tipografia e componenti. Il colore vive in globals.css sotto
   `[data-area="..."]`; qui c'è solo la chiave.

   ATTENZIONE: salute-trattamento.jpg è un'immagine GENERATA, non una
   foto del centro, e la persona ritratta non lavora qui. È stata scelta
   senza volti in inquadratura proprio per non far passare qualcuno di
   inventato per un professionista reale, accanto alle schede di chi
   invece esiste. Sostituirla con una foto vera dello studio appena il
   centro la fornisce.
   ============================================================ */

export type Area = "palestra" | "pilates" | "golf" | "salute";

export const areaKeys = ["palestra", "pilates", "salute", "golf"] as const;

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
  tagline: string;
  /** Paragrafo di presentazione nella home. */
  blurb: string;
  /**
   * La foto dell'area: la stessa nel riquadro della home e nell'hero
   * della pagina, così chi clicca ritrova l'immagine su cui ha cliccato.
   * Una copia sola: la pagina dell'area legge da qui.
   */
  image: { src: string; alt: string };
  /** Messaggio precompilato per il WhatsApp dell'area. */
  whatsapp: string;
};

export const areaMeta: Record<Area, AreaMeta> = {
  palestra: {
    label: "Palestra & Corsi",
    navLabel: "Palestra",
    href: "/palestra",
    tagline: "Sala corsi attrezzata e personal training",
    // Il centro ha tre sale, ma una è lo studio Pilates, che qui è
    // un'area a sé: la palestra ne descrive due e rimanda alla terza.
    blurb:
      "Una grande sala corsi, con macchinari e attrezzi per il lavoro a corpo libero, e una saletta riservata al personal training. Il calendario settimanale copre functional, tonificazione, core e Fit for Golf: ai corsi c'è sempre un istruttore, sempre su prenotazione.",
    image: {
      src: "/images/Palestra_hero.jpg",
      alt: "La sala corsi: soffitto in travi di legno, cardio, sacco da boxe e attrezzatura funzionale",
    },
    whatsapp: "Ciao! Vorrei informazioni sulla palestra e sui corsi",
  },
  pilates: {
    label: "Pilates Studio Reformer",
    navLabel: "Pilates",
    href: "/pilates",
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
    whatsapp: "Ciao! Vorrei informazioni sul Pilates Studio Reformer",
  },
  golf: {
    label: "Golf Indoor",
    navLabel: "Golf Indoor",
    href: "/golf-indoor",
    tagline: "Simulatori, analisi dello swing e golf fitness",
    blurb:
      "Simulatori con tecnologia TrackMan, analisi biomeccanica dello swing e lezioni con maestri PGA. Si gioca e si migliora tutto l'anno, con qualsiasi meteo.",
    image: {
      src: "/images/GolfIndoor_hero.jpg",
      alt: "Giocatori in sessione alle postazioni numerate del Golf Indoor",
    },
    whatsapp: "Ciao! Vorrei informazioni sul Golf Indoor",
  },
  salute: {
    label: "Salute e Benessere",
    navLabel: "Salute",
    href: "/salute-benessere",
    tagline: "Fisioterapia, osteopatia, nutrizione",
    blurb:
      "I professionisti che si occupano di recupero, postura e alimentazione, in dialogo diretto con i trainer delle altre aree del centro.",
    // Immagine generata, non una fotografia del centro: vedi la nota in
    // cima al file.
    image: {
      src: "/images/salute-trattamento.jpg",
      alt: "Trattamento manuale sulla schiena in sala fisioterapia",
    },
    whatsapp: "Ciao! Vorrei informazioni sull'area Salute e Benessere",
  },
};

/** Le quattro aree in ordine, pronte da mappare. */
export const allAreas = areaKeys.map((key) => ({ key, ...areaMeta[key] }));
