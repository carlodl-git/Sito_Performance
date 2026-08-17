import type { Area } from "./areas";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  category:
    | "Allenamento"
    | "Golf"
    | "Salute & Benessere"
    | "Discipline";
  intro: string;
  body: string[];
  benefits?: string[];
  professional?: { name: string; role: string };
  relatedTeamSlugs?: string[];
  image?: { src: string; alt: string };
};

export const services: Service[] = [
  // ============== ALLENAMENTO ==============
  {
    slug: "personal-training",
    title: "Personal Training",
    shortDescription:
      "Allenamento individuale 1-a-1 con il personal trainer. Programmi su misura per obiettivi specifici: forza, dimagrimento, performance, recupero.",
    category: "Allenamento",
    intro:
      "Allenamento individuale studiato sulle tue esigenze, condotto da un personal trainer dedicato. Ogni sessione è programmata in base ai tuoi obiettivi, alla tua condizione fisica e ai tempi di cui disponi.",
    body: [
      "Il Personal Training del Montecchia Performance Center è pensato per chi vuole un percorso strutturato e seguito da vicino. Si parte da una valutazione iniziale — postura, mobilità, forza, condizione cardiovascolare — e si costruisce un piano periodizzato con micro-obiettivi misurabili.",
      "Lavoriamo su composizione corporea, performance sportiva (golf in primis, ma anche corsa, sci, sport di squadra), prevenzione infortuni, recupero post-trauma in collaborazione con osteopata e fisioterapista.",
      "Ogni 4-6 settimane si rivede la programmazione sulla base dei progressi misurati: forza, mobilità, parametri di composizione corporea (con FitMate Pro), capacità aerobica.",
    ],
    benefits: [
      "Programmazione personalizzata e periodizzata",
      "Sessioni 1-a-1 con personal trainer dedicato",
      "Valutazione iniziale e re-test ogni 4-6 settimane",
      "Integrazione con osteopata, fisioterapista, nutrizionista del centro",
    ],
    relatedTeamSlugs: ["anna-simone", "sascha-antoniutti"],
    image: {
      src: "/wp-content/uploads/2016/05/personal-hydrogen.jpg",
      alt: "Personal training al Montecchia Performance Center con Hydrogen Tecnogym",
    },
  },
  {
    slug: "allenamento-di-gruppo",
    title: "Allenamento di Gruppo",
    shortDescription:
      "Sessioni in gruppo con istruttore qualificato. Energia condivisa, programmi calibrati sul gruppo, prezzi più accessibili rispetto al personal training.",
    category: "Allenamento",
    intro:
      "Allenamento in gruppo (8-15 persone) condotto da istruttore qualificato. La forza del gruppo, la varietà degli stimoli e un costo accessibile per allenarsi con costanza.",
    body: [
      "Le sessioni di gruppo del Montecchia Performance Center sono pensate per chi cerca motivazione, costanza e un ambiente energizzante. I programmi sono studiati per essere efficaci con livelli di partenza diversi: l'istruttore propone progressioni e regressioni in modo che ognuno trovi la propria intensità.",
      "Vari format disponibili: Functional, Tone, Functional-Tone, sessioni golf-specific. Calendario settimanale fisso così è facile costruire una routine.",
    ],
    benefits: [
      "Costo contenuto rispetto al personal training",
      "Energia di gruppo: motivazione e costanza più facili",
      "Calendario settimanale fisso",
      "Diversi format per evitare la monotonia",
    ],
    image: {
      src: "/wp-content/uploads/2016/04/img_training_gruppo.jpg",
      alt: "Allenamento di gruppo al Montecchia Performance Center",
    },
  },
  {
    slug: "mini-group-training",
    title: "Mini Group Training",
    shortDescription:
      "Allenamento in piccolo gruppo (3-5 persone) con personalizzazione quasi-individuale. Il giusto compromesso tra costo e qualità.",
    category: "Allenamento",
    intro:
      "Mini Group Training: allenamento in gruppi ristretti di 3-5 persone. Il trainer può seguire ciascuno individualmente garantendo correzione tecnica precisa, ma il costo per persona resta sostenibile.",
    body: [
      "Il Mini Group è il format intermedio tra il Personal Training e il Group Training: il trainer dedica attenzione individualizzata a ognuno, calibrando carichi e tecnica, ma il piccolo gruppo crea complicità e motivazione reciproca.",
      "Format particolarmente indicato per chi ha un obiettivo specifico (preparazione fisica per il golf, recupero da infortunio, dimagrimento mirato) e cerca quasi-individualizzazione a costo accessibile.",
    ],
    benefits: [
      "Solo 3-5 partecipanti per sessione",
      "Correzione tecnica individuale",
      "Costo intermedio tra Personal e Group Training",
      "Ideale per obiettivi specifici",
    ],
    image: {
      src: "/wp-content/uploads/2017/09/minigrouptraining.jpg",
      alt: "Mini Group Training al Montecchia Performance Center",
    },
  },
  {
    slug: "functional",
    title: "Functional Training",
    shortDescription:
      "Allenamento funzionale per migliorare forza, mobilità e controllo motorio attraverso movimenti integrati e multi-articolari.",
    category: "Allenamento",
    intro:
      "Allenamento funzionale: movimento integrato, multi-articolare, replicabile nella vita quotidiana e nello sport. Migliora forza, equilibrio, mobilità e controllo motorio.",
    body: [
      "Il Functional Training del Montecchia Performance Center è strutturato come circuit-training con esercizi a corpo libero, kettlebell, TRX, bilancieri e attrezzi instabili. L'obiettivo è sviluppare capacità motorie complete: forza relativa, mobilità articolare, equilibrio, coordinazione.",
      "Particolarmente efficace per chi pratica golf — la rotazione del busto, il controllo del baricentro e la stabilità del core sono trasferibili direttamente allo swing — ma adatto a tutti gli sport e alla popolazione generale.",
    ],
    image: {
      src: "/wp-content/uploads/2016/02/TRX_DSC1279-bassa-e1534854551358.jpg",
      alt: "Functional training con TRX al Montecchia Performance Center",
    },
  },
  {
    slug: "tone",
    title: "Tone",
    shortDescription:
      "Allenamento di tonificazione muscolare a corpo libero e con piccoli sovraccarichi. Ideale per definizione e benessere generale.",
    category: "Allenamento",
    intro:
      "Tone: lezione di tonificazione muscolare con focus su definizione, postura e resistenza. A corpo libero o con piccoli sovraccarichi (manubri, elastici, palle mediche).",
    body: [
      "Il Tone è una lezione di gruppo dedicata alla tonificazione muscolare. La struttura prevede una fase di attivazione, blocchi di esercizi a corpo libero o con piccoli sovraccarichi (manubri, elastici, palle mediche, step) e una fase di stretching finale.",
      "Adatto a tutti i livelli, con progressioni e varianti per gestire diversi gradi di intensità. Ottimo come complemento al Functional o come allenamento principale per chi cerca definizione muscolare e tono.",
    ],
    image: {
      src: "/wp-content/uploads/2016/02/push_power3.jpg",
      alt: "Lezione di tonificazione al Montecchia Performance Center",
    },
  },
  {
    slug: "functional-tone",
    title: "Functional Tone",
    shortDescription:
      "Format ibrido tra Functional e Tone. Allena forza funzionale e tono muscolare in un'unica seduta.",
    category: "Allenamento",
    intro:
      "Functional Tone: il meglio del Functional Training e del Tone in un'unica seduta. Forza funzionale, tonificazione, mobilità — un format completo per chi cerca un workout a 360°.",
    body: [
      "La sessione alterna blocchi di Functional Training (movimento integrato, multi-articolare) a blocchi di Tone (tonificazione mirata di gruppi muscolari specifici). Il risultato è un allenamento bilanciato che lavora sia sulla forza funzionale sia sul tono muscolare.",
      "Format ideale per chi vuole un allenamento variato che eviti la monotonia, lavorando contemporaneamente su più qualità motorie.",
    ],
    image: {
      src: "/wp-content/uploads/2017/01/push_power.jpg",
      alt: "Functional Tone al Montecchia Performance Center",
    },
  },

  // ============== DISCIPLINE ==============
  {
    slug: "yoga",
    title: "Yoga",
    shortDescription:
      "Pratica che unisce respiro, postura e consapevolezza. Migliora flessibilità, equilibrio e gestione dello stress. Utile anche nel golf per concentrazione e mobilità.",
    category: "Discipline",
    intro:
      "Yoga al Montecchia Performance Center: lezioni di gruppo condotte da istruttrice certificata, in sala o all'aperto nei mesi caldi. Pratica adatta a tutti i livelli, con varianti e progressioni.",
    body: [
      "Lo Yoga mira ad acquisire freschezza mentale e a raggiungere stabilità emotiva. Il respiro guida il movimento, la pratica costruisce consapevolezza corporea e capacità di gestire lo stress.",
      "Sul piano fisico lavora su flessibilità, equilibrio, mobilità articolare e tono muscolare profondo. Sul piano mentale aiuta a sviluppare concentrazione, rilassamento attivo e una migliore qualità del sonno.",
      "Nel golf è una disciplina particolarmente preziosa: migliora coordinazione, concentrazione e mantenimento dell'equilibrio — elementi necessari per lo swing. L'aumento della mobilità si traduce in uno swing più ampio e in una maggior distanza nei colpi.",
    ],
    benefits: [
      "Migliora flessibilità, equilibrio e concentrazione",
      "Riduce stress e tensione muscolare",
      "Aumenta mobilità — utile nello swing del golf",
      "Adatto a tutti i livelli, con varianti e progressioni",
    ],
    relatedTeamSlugs: ["chiara-destro"],
    image: {
      src: "/images/yoga-esterno.jpg",
      alt: "Yoga al Montecchia Performance Center",
    },
  },
  {
    slug: "pilates",
    title: "Pilates",
    shortDescription:
      "Metodo di controllo del corpo focalizzato su core, postura e mobilità. Movimenti precisi che tonificano in profondità senza sovraccaricare le articolazioni.",
    category: "Discipline",
    intro:
      "Pilates al Montecchia Performance Center: lezioni di gruppo condotte da istruttrice certificata. Lavoro mirato su forza profonda, controllo motorio e postura.",
    body: [
      "Il Pilates lavora sulla precisione dei movimenti corporei: scolpisce il corpo a livello formale e permette il raggiungimento di un profondo benessere interiore attraverso il controllo motorio fine.",
      "Le sessioni sono strutturate intorno ai principi del metodo — concentrazione, controllo, centro, fluidità, precisione, respirazione — con esercizi a corpo libero e con piccoli attrezzi per tonificare, allineare la postura e migliorare la mobilità.",
      "Per il golfista è un complemento prezioso: rinforza il core, migliora la stabilità del tronco e la coordinazione, riduce il rischio di infortuni e supporta uno swing più efficiente.",
    ],
    benefits: [
      "Rinforza il core e migliora la postura",
      "Tonifica in profondità senza impatto articolare",
      "Aumenta controllo motorio e coordinazione",
      "Complementare all'allenamento e utile nel golf",
    ],
    relatedTeamSlugs: ["chiara-destro"],
    image: {
      src: "/images/yoga-prato.jpg",
      alt: "Pilates al Montecchia Performance Center",
    },
  },

  {
    slug: "piscina",
    title: "Piscina (mesi estivi)",
    shortDescription:
      "Piscina esterna aperta nei mesi estivi (giugno–settembre): nuoto libero, AcquaGym e relax dopo l'allenamento, in un'oasi di verde all'interno del Golf Club.",
    category: "Discipline",
    intro:
      "Nei mesi estivi il Performance Center mette a disposizione la piscina esterna del Golf Club della Montecchia: uno spazio per nuoto libero, sessioni di AcquaGym e momenti di relax tra una sessione di allenamento e l'altra.",
    body: [
      "La piscina è aperta tipicamente da giugno a settembre, in base alla stagione e alle condizioni meteo. Accessibile ai soci e a chi frequenta i corsi del centro, è ideale per integrare l'allenamento con un'attività a basso impatto articolare oppure semplicemente per godersi una pausa all'aria aperta.",
      "Durante la stagione organizziamo sessioni di AcquaGym in piscina: allenamento in acqua condotto da istruttore, divertente, adatto a tutti i livelli e particolarmente indicato per chi cerca tonificazione e mobilità senza sovraccarichi.",
      "Per orari, condizioni di accesso e calendario corsi acqua chiedi in reception o contattaci.",
    ],
    benefits: [
      "Aperta nei mesi estivi (giugno–settembre)",
      "Nuoto libero a basso impatto articolare",
      "Sessioni di AcquaGym con istruttore",
      "Ambiente immerso nel verde del Golf Club",
    ],
    image: {
      src: "/images/acquagym.jpg",
      alt: "Piscina esterna del Montecchia Performance Center",
    },
  },

  // ============== GOLF ==============
  {
    slug: "fit-for-golf",
    title: "Fit for Golf",
    shortDescription:
      "Preparazione fisica specifica per il golfista: forza, mobilità rotazionale, stabilità e condizionamento per un swing più potente e sostenibile.",
    category: "Golf",
    intro:
      "Fit for Golf: programma di preparazione fisica specifica per il golfista. Sviluppato dal team del Performance Center in collaborazione con i maestri della Montecchia Golf Academy.",
    body: [
      "Il Fit for Golf è il format di allenamento più richiesto al Performance Center: una preparazione fisica disegnata sulle esigenze biomeccaniche e fisiologiche del golfista. L'obiettivo è migliorare lo swing in termini di potenza, ripetibilità e sostenibilità — riducendo allo stesso tempo il rischio di infortuni tipici (lombalgia, gomito, polso).",
      "Il programma lavora su quattro pilastri: mobilità rotazionale del torace e dei fianchi, stabilità del core e del bacino, forza relativa (con focus su catena posteriore e gambe), velocità e potenza (per il club head speed). Le sessioni integrano valutazioni periodiche per misurare i progressi.",
    ],
    benefits: [
      "Aumento del club head speed e della distanza dei colpi",
      "Maggior consistenza dello swing",
      "Riduzione del rischio di infortuni tipici del golfista",
      "Sviluppato in collaborazione con maestri PGA & TPI Level 3",
    ],
    relatedTeamSlugs: ["maria-paola-casati", "luca-pannone"],
    image: {
      src: "/wp-content/uploads/2017/04/img-trackman.jpg",
      alt: "Fit for Golf — preparazione fisica per golfisti con Trackman",
    },
  },
  {
    slug: "tpi-junior",
    title: "TPI Junior",
    shortDescription:
      "Programma sviluppo per giovani golfisti basato sui protocolli TPI (Titleist Performance Institute). Condotto da TPI Junior Coach Level 3.",
    category: "Golf",
    intro:
      "TPI Junior: programma di sviluppo fisico-tecnico per giovani golfisti basato sui protocolli del Titleist Performance Institute. Maria Paola Casati è certificata TPI Level 3 Junior Coach.",
    body: [
      "Il TPI Junior è il programma di riferimento internazionale per lo sviluppo dei giovani golfisti. Si basa su un modello a tappe (Long Term Athletic Development) che rispetta le fasi di crescita del bambino e dell'adolescente, costruendo le capacità motorie nel modo e nei tempi giusti.",
      "Al Montecchia Performance Center il programma è coordinato da Maria Paola Casati — una delle poche tecniche italiane certificate TPI Level 3 Junior Coach — in collaborazione con il team di trainer del centro. I giovani golfisti vengono valutati nelle componenti fisiche (mobilità, forza, equilibrio, coordinazione) e tecniche, e seguiti con un programma su misura.",
    ],
    benefits: [
      "Protocollo internazionale TPI riconosciuto",
      "Coordinato da TPI Level 3 Junior Coach (Maria Paola Casati)",
      "Long Term Athletic Development: rispetta le fasi di crescita",
      "Integrazione tecnica + fisica",
    ],
    relatedTeamSlugs: ["maria-paola-casati", "gionatan-baglioni"],
    image: {
      src: "/wp-content/uploads/2015/02/kvest.jpg",
      alt: "TPI Junior — analisi swing con K-Vest al Montecchia Performance Center",
    },
  },

  // ============== SALUTE & BENESSERE ==============
  {
    slug: "fisioterapia",
    title: "Fisioterapia",
    shortDescription:
      "Riabilitazione post-infortunio, prevenzione e mantenimento per atleti e persone attive. Valutazione funzionale, terapia manuale, esercizio terapeutico.",
    category: "Salute & Benessere",
    intro:
      "Servizio di fisioterapia integrato con il percorso di allenamento: riabilitazione post-infortunio, prevenzione, mantenimento. Valutazione funzionale, terapia manuale, esercizio terapeutico.",
    body: [
      "La fisioterapia al Montecchia Performance Center è pensata per chi vive lo sport e l'attività fisica come parte della propria vita. Il fisioterapista lavora a stretto contatto con i trainer del centro: questo permette di passare in modo fluido dalla fase riabilitativa al ritorno all'allenamento, con programmi che evolvono in continuità.",
      "Servizi: valutazione funzionale, terapia manuale, esercizio terapeutico, prevenzione infortuni, riabilitazione post-trauma e post-chirurgica. Particolare attenzione agli infortuni tipici del golfista (lombalgia, gomito, polso, anca) e ai problemi posturali.",
    ],
    benefits: [
      "Continuità tra riabilitazione e ritorno all'allenamento",
      "Specializzazione su infortuni del golfista",
      "Collaborazione diretta con i trainer del centro",
      "Approccio attivo: terapia manuale + esercizio terapeutico",
    ],
    image: {
      src: "/wp-content/uploads/2016/07/fisio.jpg",
      alt: "Fisioterapia al Montecchia Performance Center",
    },
  },
  {
    slug: "shiatsu",
    title: "Shiatsu",
    shortDescription:
      "Trattamento manuale di origine giapponese che lavora sulle tensioni del corpo attraverso pressioni e stiramenti. Ottimo per recupero e benessere.",
    category: "Salute & Benessere",
    intro:
      "Shiatsu: trattamento manuale di origine giapponese basato su pressioni e stiramenti lungo i meridiani energetici. Lavora sulle tensioni accumulate, sull'equilibrio del sistema nervoso e sul recupero generale.",
    body: [
      "Lo Shiatsu è una tecnica di trattamento manuale che ha origine in Giappone e affonda le radici nella medicina tradizionale orientale. Il trattamento si svolge a terra su un futon, vestiti, e prevede pressioni rilassanti, stiramenti dolci e mobilizzazioni che agiscono sui meridiani energetici del corpo.",
      "Al Montecchia Performance Center lo Shiatsu è proposto come complemento al percorso di allenamento e benessere: aiuta a sciogliere le tensioni accumulate dopo carichi intensi, a migliorare la qualità del sonno e a ristabilire un equilibrio generale del sistema nervoso. Particolarmente apprezzato da chi vive sotto stress o pratica sport ad alta intensità.",
    ],
    benefits: [
      "Riduzione delle tensioni muscolari accumulate",
      "Effetto rilassante sul sistema nervoso",
      "Migliore qualità del sonno",
      "Complemento ideale ad allenamento intenso",
    ],
  },
  {
    slug: "nutrizionista",
    title: "Nutrizionista",
    shortDescription:
      "Piani alimentari personalizzati per performance sportiva, composizione corporea e benessere generale. Nutrizionista ufficiale Basket Mestre (Serie B).",
    category: "Salute & Benessere",
    intro:
      "Consulenza nutrizionale personalizzata: piani alimentari per performance sportiva, composizione corporea, benessere generale. Con il Dott. Emanuele Veronese, Biologo Nutrizionista, anche farmacista.",
    body: [
      "La consulenza nutrizionale al Montecchia Performance Center è pensata per integrare in modo coerente alimentazione e allenamento. Il percorso parte da una valutazione completa: anamnesi clinica, composizione corporea (FitMate Pro), abitudini alimentari, obiettivi.",
      "Sulla base della valutazione si costruisce un piano alimentare personalizzato — non una dieta restrittiva, ma uno schema sostenibile che si modula nel tempo in base ai risultati. Follow-up regolari per ricalibrare il piano.",
      "Il Dott. Veronese è anche farmacista e titolare di una parafarmacia specializzata in nutrizione sportiva: doppia competenza nutrizionale e farmaceutica applicata all'integrazione e alla performance.",
    ],
    benefits: [
      "Piano alimentare personalizzato e sostenibile",
      "Valutazione composizione corporea con FitMate Pro",
      "Follow-up regolari per ricalibrare il piano",
      "Doppia competenza: nutrizione + farmaceutica",
    ],
    relatedTeamSlugs: ["emanuele-veronese"],
  },
  {
    slug: "osteopata",
    title: "Osteopata",
    shortDescription:
      "Trattamenti osteopatici per gestione del dolore, recupero funzionale e prevenzione infortuni. Specializzazione in trattamento viscerale (lipedema, linfedema).",
    category: "Salute & Benessere",
    intro:
      "Trattamenti osteopatici al Montecchia Performance Center con il Dott. Pietro Bernuzzi, Infermiere e Osteopata. Specializzazione clinica in trattamento viscerale per pazienti con lipedema e linfedema.",
    body: [
      "L'osteopatia al Performance Center è integrata con il percorso di allenamento e con la fisioterapia. I trattamenti si concentrano su gestione del dolore, recupero funzionale, valutazione posturale e prevenzione degli infortuni — con particolare attenzione agli atleti e alle persone attive.",
      "Il Dott. Pietro Bernuzzi ha una specializzazione clinica nel trattamento viscerale, particolarmente indicata per pazienti con lipedema e linfedema — campo in cui l'osteopatia integrata con il movimento e l'attività fisica può portare benefici significativi.",
    ],
    benefits: [
      "Gestione del dolore e recupero funzionale",
      "Valutazione posturale e prevenzione infortuni",
      "Specializzazione in trattamento viscerale",
      "Collaborazione con trainer e fisioterapista del centro",
    ],
    relatedTeamSlugs: ["pietro-bernuzzi"],
  },
];

export const serviceCategories = [
  "Allenamento",
  "Discipline",
  "Golf",
  "Salute & Benessere",
] as const;

/* ============================================================
   SERVIZI E AREE
   Ogni servizio appartiene a una sola area. Le pagine /servizi/<slug>
   restano invariate (sono indicizzate) e vengono raggiunte dalla
   pagina della sua area. L'anagrafica delle aree sta in data/areas.ts.
   ============================================================ */

const CATEGORY_TO_AREA: Record<Service["category"], Area> = {
  Allenamento: "palestra",
  Discipline: "palestra",
  Golf: "golf",
  "Salute & Benessere": "salute",
};

// Eccezioni alla mappatura per categoria.
const AREA_OVERRIDES: Record<string, Area> = {
  pilates: "pilates",
};

export function serviceArea(service: Service): Area {
  return AREA_OVERRIDES[service.slug] ?? CATEGORY_TO_AREA[service.category];
}

export function servicesByArea(area: Area): Service[] {
  return services.filter((s) => serviceArea(s) === area);
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
