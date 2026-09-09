export type ScheduleRow = {
  start: string;
  end: string;
  /** Un corso per giorno, da lunedì a domenica. `null` = nessun corso. */
  courses: (string | null)[];
};

export const scheduleDays = [
  "Lun",
  "Mar",
  "Mer",
  "Gio",
  "Ven",
  "Sab",
  "Dom",
] as const;

/** Stagione 2025/2026: autunno, inverno, primavera. */
export const schedule: ScheduleRow[] = [
  {
    start: "08:40",
    end: "09:30",
    courses: [
      "Full Body Workout",
      null,
      "Full Body Workout",
      null,
      "Core Stability & Upper Body",
      null,
      null,
    ],
  },
  {
    start: "13:10",
    end: "14:00",
    courses: [null, "Fit for Golf", null, "Fit for Golf", null, null, null],
  },
  {
    start: "17:30",
    end: "18:30",
    courses: [null, "Pilates", null, "Pilates", null, null, null],
  },
  {
    start: "18:15",
    end: "19:05",
    courses: [
      "Brucia Grassi",
      "Step and Sculpt",
      "Tonificazione Total Body",
      "Step and Sculpt",
      "Gambe Addome Glutei",
      null,
      null,
    ],
  },
  {
    start: "19:00",
    end: "20:00",
    courses: [null, "Hatha Yoga", null, "Hatha Yoga", null, null, null],
  },
  {
    start: "19:15",
    end: "20:05",
    courses: [
      "Tone up & Cardio",
      null,
      "Tone up & Cardio",
      null,
      null,
      null,
      null,
    ],
  },
  {
    start: "20:10",
    end: "21:00",
    courses: [null, "Pilates", null, "Pilates", null, null, null],
  },
];

/* ============================================================
   LE FAMIGLIE DI CORSI
   Il calendario ha sedici caselle piene su quarantanove: senza un
   raggruppamento è un elenco di nomi che non dice niente a chi non li
   conosce già. La famiglia risponde alla domanda vera di chi guarda un
   orario — "questo che tipo di lavoro è?" — prima ancora del nome.

   Qui c'è solo la classificazione. Il colore di ogni famiglia sta in
   globals.css sotto `[data-famiglia="..."]`, come per le aree: il
   componente non conosce nessun colore, applica un attributo.
   ============================================================ */

export type Famiglia = "forza" | "cardio" | "corpo-mente" | "golf";

export const famiglie: Record<Famiglia, { label: string; descrizione: string }> = {
  forza: {
    label: "Tonificazione e forza",
    descrizione: "Lavoro muscolare, a corpo libero e con piccoli attrezzi.",
  },
  cardio: {
    label: "Cardio",
    descrizione: "Ritmo continuo, per fiato e dispendio.",
  },
  "corpo-mente": {
    label: "Corpo e mente",
    descrizione: "Controllo, respiro, mobilità e postura.",
  },
  golf: {
    label: "Golf",
    descrizione: "Preparazione specifica per il gesto del golf.",
  },
};

/**
 * A quale famiglia appartiene ogni corso del calendario. Ogni nome che
 * compare in `schedule` deve stare qui: `famigliaDi()` lo verifica in
 * sviluppo, così un corso aggiunto senza famiglia si nota subito invece
 * di uscire grigio nel calendario.
 */
export const famigliaPerCorso: Record<string, Famiglia> = {
  "Full Body Workout": "forza",
  "Core Stability & Upper Body": "forza",
  "Tonificazione Total Body": "forza",
  "Gambe Addome Glutei": "forza",
  "Brucia Grassi": "cardio",
  "Step and Sculpt": "cardio",
  "Tone up & Cardio": "cardio",
  Pilates: "corpo-mente",
  "Hatha Yoga": "corpo-mente",
  "Fit for Golf": "golf",
};

export function famigliaDi(corso: string): Famiglia | undefined {
  const f = famigliaPerCorso[corso];
  if (!f && process.env.NODE_ENV !== "production") {
    console.warn(`[courses] "${corso}" non ha una famiglia in famigliaPerCorso`);
  }
  return f;
}

/**
 * I corsi presenti nel calendario, una volta ciascuno, in ordine di prima
 * apparizione. Deduplicato con `indexOf` e non con un Set: il target di
 * TypeScript del progetto non permette di iterare un Set senza
 * `downlevelIteration`, e su dieci nomi la differenza non esiste.
 */
export const corsiInCalendario: string[] = schedule
  .reduce<(string | null)[]>((acc, r) => acc.concat(r.courses), [])
  .filter((c): c is string => c !== null)
  .filter((c, i, tutti) => tutti.indexOf(c) === i);

/** Le famiglie effettivamente presenti, per non stampare una legenda con voci vuote. */
export function famigliePresenti(
  corsi: readonly string[] = corsiInCalendario,
): Famiglia[] {
  const viste = corsi.map(famigliaDi);
  return (Object.keys(famiglie) as Famiglia[]).filter(
    (f) => viste.indexOf(f) !== -1,
  );
}

export type Lezione = { start: string; end: string; corso: string };

/**
 * Il calendario girato per giorno. La griglia settimanale funziona da
 * tablet in su; sotto, sette colonne su 375px vorrebbero dire o testo
 * illeggibile o scorrimento orizzontale, che su un orario è il modo
 * migliore per non farlo leggere a nessuno.
 */
export function calendarioPerGiorno(
  soloCorsi?: readonly string[],
): { giorno: string; lezioni: Lezione[] }[] {
  return scheduleDays.map((giorno, i) => ({
    giorno,
    lezioni: schedule
      .map((r) => ({ start: r.start, end: r.end, corso: r.courses[i] }))
      .filter((l): l is Lezione => {
        if (l.corso === null) return false;
        return !soloCorsi || soloCorsi.includes(l.corso);
      })
      .sort((a, b) => a.start.localeCompare(b.start)),
  }));
}
