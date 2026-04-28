export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  category: "Centro" | "Fitness & Training" | "Golf Lab" | "Salute & Benessere";
  shortDescription: string;
  bio: string[];
  credentials?: string[];
};

export const team: TeamMember[] = [
  // ============== CENTRO ==============
  {
    slug: "ilaria-maso",
    name: "Ilaria Maso",
    role: "Responsabile Centro",
    category: "Centro",
    shortDescription:
      "Gestione e coordinamento del Montecchia Performance Center. Punto di riferimento per accoglienza, organizzazione e supporto a clienti e professionisti.",
    bio: [
      "Ilaria è responsabile del coordinamento operativo del Montecchia Performance Center. Si occupa di accoglienza, gestione delle prenotazioni e relazioni con clienti e professionisti che operano nella struttura.",
      "Punto di riferimento quotidiano per chiunque entri in palestra, garantisce che ogni esperienza in struttura sia organizzata, cordiale e professionale.",
    ],
  },

  // ============== FITNESS & TRAINING ==============
  {
    slug: "anna-simone",
    name: "Anna Simone",
    role: "Personal Trainer & Istruttrice Functional",
    category: "Fitness & Training",
    shortDescription:
      "Specializzata in Functional Training, Acquagym e Personal Training. Laureata in Scienze Motorie e Tecniche Sportive.",
    bio: [
      "Anna è personal trainer e istruttrice di Functional Training presso il Montecchia Performance Center. Si occupa di programmazione individuale, allenamento funzionale e attività in acqua.",
      "Laureata in Scienze Motorie all'Università di Padova e in Tecniche Sportive all'Università di Urbino. La doppia formazione le permette di lavorare con un approccio scientifico applicato alla performance e al benessere.",
    ],
    credentials: [
      "Laurea in Scienze Motorie — Università di Padova",
      "Laurea in Tecniche Sportive — Università di Urbino",
      "Certificata Kardio-Kombat, aerobica, step e toning",
    ],
  },
  {
    slug: "sascha-antoniutti",
    name: "Sascha Antoniutti",
    role: "Master Trainer & Personal Trainer",
    category: "Fitness & Training",
    shortDescription:
      "CEO Sensus Club, International Master Trainer Pilates e Reaxing. Specializzato in functional training, TRX e Pilates.",
    bio: [
      "Sascha è International Master Trainer e CEO di Sensus Club. Specializzato in Functional Training, TRX, Pilates, rieducazione funzionale e attività acquatiche, lavora con clienti privati e team agonistici.",
      "Ha conseguito un dottorato in Scienze Motorie e collabora come formatore per istruttori e personal trainer. Al Performance Center segue programmi su misura con un approccio integrato allo sviluppo della forza, della mobilità e del controllo motorio.",
    ],
    credentials: [
      "CEO Sensus Club",
      "International Master Trainer Pilates e Reaxing",
      "Dottorato e formazione accademica in Scienze Motorie",
    ],
  },
  {
    slug: "chiara-destro",
    name: "Chiara Destro",
    role: "Istruttrice Pilates & Yoga",
    category: "Fitness & Training",
    shortDescription:
      "Istruttrice certificata Polestar-Pilates Matwork e HAMSA Hatha Yoga. Background nella danza e nel Sensitive Dance.",
    bio: [
      "Chiara conduce le sessioni di Pilates e Yoga al Montecchia Performance Center. Il suo approccio unisce la precisione del movimento — eredità della sua formazione Polestar-Pilates Matwork — alla consapevolezza del corpo coltivata nella tradizione HAMSA Hatha Yoga.",
      "Il suo background include studi nella danza e nel Sensitive Dance con il maestro francese Claude Coldy, esperienza che porta nelle sue lezioni come attenzione al respiro, alla qualità del gesto e alla relazione tra corpo e spazio.",
    ],
    credentials: [
      "Polestar-Pilates Matwork certified",
      "HAMSA Hatha Yoga certified",
      "Sensitive Dance — formazione con Claude Coldy",
    ],
  },

  // ============== GOLF LAB ==============
  {
    slug: "maria-paola-casati",
    name: "Maria Paola Casati",
    role: "Direttrice Montecchia Golf Academy",
    category: "Golf Lab",
    shortDescription:
      "Maestra Classe A PGA Italiana dal 2004. Certificata TPI Level 3 Pro e Junior Coach. Ex nazionale italiana, campionessa italiana 1994.",
    bio: [
      "Maria Paola dirige la Montecchia Golf Academy e coordina i programmi di alto livello del Performance Center. Maestra Classe A PGA Italiana dal 2004, ha alle spalle una carriera agonistica come ex nazionale italiana (1986-1998) e il titolo di campionessa italiana 1994.",
      "Coordinatrice regionale FIG Veneto per i programmi Under 12, è certificata TPI (Titleist Performance Institute) Level 3 sia come Pro sia come Junior Coach — riconoscimenti che la collocano tra i pochi tecnici italiani con questo livello di specializzazione.",
    ],
    credentials: [
      "Maestra Classe A PGA Italiana (dal 2004)",
      "TPI Level 3 Pro & Junior Coach certified",
      "Coordinatrice regionale FIG Veneto programmi Under 12",
      "Ex nazionale italiana (1986-1998), campionessa italiana 1994",
    ],
  },
  {
    slug: "massimo-de-vidal",
    name: "Massimo De Vidal",
    role: "Maestro di Golf PGA",
    category: "Golf Lab",
    shortDescription:
      "Maestro Classe A PGA Italiana. Ex giocatore Alps Tour ed European Challenge Tour. Coach alla Montecchia Golf Academy dal 2006.",
    bio: [
      "Massimo è Maestro Classe A della PGA Italiana e coach storico della Montecchia Golf Academy, con cui collabora dal 2006. La sua esperienza agonistica include la partecipazione all'Alps Tour e all'European Challenge Tour tra il 2002 e il 2006.",
      "Lavora con tecnologie di analisi avanzata: SMART2MOVE per la pressione plantare, Trackman per i dati di lancio, Sam Puttlab per il putting e K-Vest per l'analisi 3D del corpo. Approccio data-driven applicato all'insegnamento.",
    ],
    credentials: [
      "Maestro Classe A — PGA Italiana",
      "Ex giocatore Alps Tour & European Challenge Tour (2002-2006)",
      "Coach Montecchia Golf Academy dal 2006",
      "Tecnologie: SMART2MOVE, Trackman, Sam Puttlab, K-Vest",
    ],
  },
  {
    slug: "germana-zanardi",
    name: "Germana Zanardi",
    role: "Maestra di Golf",
    category: "Golf Lab",
    shortDescription:
      "Maestra alla Montecchia Golf Academy dal 2017. Certificata TPI Level 1 e Trackman Level 1-2. Ex nazionale italiana, 4 titoli italiani.",
    bio: [
      "Germana è maestra alla Montecchia Golf Academy dal 2017. La sua carriera agonistica come ex nazionale italiana (1988-1995) include 4 titoli italiani — un bagaglio che porta nel suo lavoro come tecnica.",
      "Ha completato il Diploma in Comunicazione d'Impresa e il Master in Relazioni Pubbliche presso IULM. Doppia formazione — sportiva e comunicativa — che si traduce in un metodo di insegnamento empatico e strutturato.",
    ],
    credentials: [
      "Maestra Montecchia Golf Academy dal 2017",
      "TPI Level 1 certified",
      "Trackman Level 1 & 2",
      "Ex nazionale italiana (1988-1995), 4 titoli italiani",
      "Diploma Comunicazione d'Impresa & Master Relazioni Pubbliche (IULM)",
    ],
  },
  {
    slug: "gionatan-baglioni",
    name: "Gionatan Baglioni",
    role: "Maestro di Golf",
    category: "Golf Lab",
    shortDescription:
      "Maestro iscritto al registro FIG. Coach Team Advisor Montecchia Golf Academy. Coaching giovanile e sviluppo agonistico.",
    bio: [
      "Gionatan è Maestro (MA) iscritto al registro FIG e Coach Team Advisor della Montecchia Golf Academy. Il suo focus principale è il coaching giovanile e lo sviluppo agonistico nel territorio del Veneto.",
      "Lavora con i giovani golfisti seguendone il percorso tecnico, fisico e mentale, accompagnandoli dall'avvicinamento allo sport fino ai programmi di alto livello.",
    ],
    credentials: [
      "Maestro (MA) — Registro FIG",
      "Coach Team Advisor Montecchia Golf Academy",
    ],
  },
  {
    slug: "luca-pannone",
    name: "Luca Pannone",
    role: "Maestro di Golf PGA",
    category: "Golf Lab",
    shortDescription:
      "Membro FIG & PGAI, Certified Golf Professional dal 2014. Specializzato in biomeccanica del golf con tecnologie avanzate.",
    bio: [
      "Luca è Certified Golf Professional dal 2014, membro FIG e PGAI. La sua specializzazione è la biomeccanica del golf, con un approccio scientifico all'analisi del movimento.",
      "Le sue certificazioni avanzate includono Trackman Level 1-2, CAPTO Level 1-2, SwingCatalyst, K-Vest, FlightScope e U.S. Kids Golf — un set di strumenti che gli permette di lavorare a 360° con golfisti di ogni livello, dai principianti agli atleti agonisti. Bilingue italiano/inglese.",
    ],
    credentials: [
      "Certified Golf Professional (PGAI) dal 2014",
      "Trackman Level 1-2, CAPTO Level 1-2",
      "SwingCatalyst, K-Vest, FlightScope, U.S. Kids Golf",
      "Bilingue italiano/inglese",
    ],
  },

  // ============== SALUTE & BENESSERE ==============
  {
    slug: "emanuele-veronese",
    name: "Emanuele Veronese",
    role: "Biologo Nutrizionista",
    category: "Salute & Benessere",
    shortDescription:
      "Biologo Nutrizionista, anche farmacista. Vicepresidente AFEN, nutrizionista ufficiale Basket Mestre (Serie B).",
    bio: [
      "Emanuele è Biologo e Nutrizionista iscritto all'Ordine Nazionale dei Biologi, oltre che farmacista. Lavora con atleti, persone attive e clienti che cercano un percorso nutrizionale strutturato.",
      "Vicepresidente di AFEN e associato ESNS, è nutrizionista ufficiale del Basket Mestre (Serie B) ed è titolare di una parafarmacia specializzata in nutrizione sportiva. Doppia competenza, biologia e farmaceutica, applicata all'integrazione e alla performance.",
    ],
    credentials: [
      "Biologo Nutrizionista — Ordine Nazionale dei Biologi",
      "Farmacista",
      "Vicepresidente AFEN, associato ESNS",
      "Nutrizionista ufficiale Basket Mestre (Serie B)",
    ],
  },
  {
    slug: "pietro-bernuzzi",
    name: "Pietro Bernuzzi",
    role: "Osteopata",
    category: "Salute & Benessere",
    shortDescription:
      "Infermiere e Osteopata. Diploma IEMO Padova (2017). Specializzato in trattamento viscerale per lipedema e linfedema.",
    bio: [
      "Pietro è Infermiere e Osteopata, con diploma in osteopatia conseguito nel 2017 presso l'Istituto Europeo di Medicina Osteopatica di Padova. Collabora con il Performance Center dal 2021.",
      "La sua specializzazione clinica è il trattamento viscerale, in particolare per pazienti con lipedema e linfedema — campo in cui l'osteopatia integrata con il movimento e l'attività fisica può portare benefici significativi.",
    ],
    credentials: [
      "Infermiere",
      "Osteopata — Diploma IEMO Padova (2017)",
      "Specializzazione: trattamento viscerale (lipedema, linfedema)",
      "Al Performance Center dal 2021",
    ],
  },
  {
    slug: "anselmo-pagani",
    name: "Anselmo Pagani",
    role: "Professionista",
    category: "Salute & Benessere",
    shortDescription:
      "Membro del team di professionisti del Montecchia Performance Center a supporto della performance e del benessere.",
    bio: [
      "Anselmo è parte del team di professionisti del Montecchia Performance Center. Collabora con i trainer e gli specialisti della struttura per supportare il percorso di performance e benessere dei clienti del centro.",
    ],
  },
  {
    slug: "francesco-cafa",
    name: "Francesco Cafa",
    role: "Professionista",
    category: "Salute & Benessere",
    shortDescription:
      "Membro del team di professionisti del Montecchia Performance Center a supporto della performance e del benessere.",
    bio: [
      "Francesco è parte del team di professionisti del Montecchia Performance Center. Collabora con i trainer e gli specialisti della struttura per supportare il percorso di performance e benessere dei clienti del centro.",
    ],
  },
];

export const teamCategories = [
  "Centro",
  "Fitness & Training",
  "Golf Lab",
  "Salute & Benessere",
] as const;

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}

export function getAllTeamSlugs(): string[] {
  return team.map((m) => m.slug);
}
