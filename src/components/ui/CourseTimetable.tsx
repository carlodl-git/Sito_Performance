import {
  schedule,
  scheduleDays,
  famiglie,
  famigliaDi,
  famigliePresenti,
  calendarioPerGiorno,
  type Famiglia,
} from "@/data/courses";

/* ============================================================
   CALENDARIO DEI CORSI
   Due viste della stessa tabella, non due contenuti diversi: la griglia
   settimanale da `md` in su, l'elenco per giorno sotto. Prima c'era solo
   la griglia, larga 720px fissi dentro uno scorrimento orizzontale: su un
   telefono si leggeva un giorno e mezzo per volta, e per confrontare il
   lunedì col venerdì bisognava trascinare avanti e indietro. Un orario
   che non si riesce a leggere in piedi sull'autobus non serve a niente.

   Il colore raggruppa per famiglia (`data-famiglia` sulla cella, token in
   globals.css). Non porta informazione da solo: il nome del corso è
   sempre scritto, e la legenda dice cosa vuol dire ogni colore.
   ============================================================ */

/**
 * Elenco all'italiana: virgole, e una sola "e" prima dell'ultimo.
 * `join(" e ")` dava "Lun e Mer e Ven e Sab e Dom".
 */
function elenco(voci: string[]): string {
  if (voci.length <= 1) return voci.join("");
  return `${voci.slice(0, -1).join(", ")} e ${voci[voci.length - 1]}`;
}

/** Legenda: senza, il colore è decorazione e basta. */
function Legenda({ corsi }: { corsi?: readonly string[] }) {
  const presenti = famigliePresenti(corsi);
  if (presenti.length < 2) return null;

  return (
    <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-3">
      {presenti.map((f) => (
        <li key={f} data-famiglia={f} className="flex items-center gap-2.5">
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full bg-famiglia"
            aria-hidden
          />
          <span className="text-sm text-ink-soft">{famiglie[f].label}</span>
        </li>
      ))}
    </ul>
  );
}

/** La casella del corso, uguale nelle due viste. */
function Corso({
  nome,
  famiglia,
  className = "",
}: {
  nome: string;
  famiglia?: Famiglia;
  className?: string;
}) {
  return (
    <div
      data-famiglia={famiglia}
      className={`border-l-2 px-3 py-2.5 text-[0.8125rem] leading-snug ${
        famiglia
          ? "border-famiglia bg-famiglia-tint text-primary"
          : "border-line bg-paper-alt text-primary"
      } ${className}`}
    >
      {nome}
    </div>
  );
}

export function CourseTimetable({
  /** Restringe il calendario a certi corsi, per le pagine che ne mostrano una parte. */
  soloCorsi,
}: {
  soloCorsi?: readonly string[];
}) {
  const righe = soloCorsi
    ? schedule
        .map((r) => ({
          ...r,
          courses: r.courses.map((c) => (c && soloCorsi.includes(c) ? c : null)),
        }))
        .filter((r) => r.courses.some(Boolean))
    : schedule;

  const perGiorno = calendarioPerGiorno(soloCorsi);
  const giorniPieni = perGiorno.filter((g) => g.lezioni.length > 0);
  const giorniVuoti = perGiorno.filter((g) => g.lezioni.length === 0);

  if (giorniPieni.length === 0) return null;

  const corsiMostrati = righe
    .flatMap((r) => r.courses)
    .filter((c): c is string => c !== null);

  return (
    <div>
      <Legenda corsi={corsiMostrati} />

      {/* ---------- Elenco per giorno: telefoni ---------- */}
      <div className="md:hidden">
        <ul className="space-y-8">
          {giorniPieni.map(({ giorno, lezioni }) => (
            <li key={giorno}>
              <h3 className="eyebrow border-b border-line pb-2 text-primary">
                {giorno}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {lezioni.map((l) => (
                  <li
                    key={`${l.start}-${l.corso}`}
                    className="flex items-stretch gap-3"
                  >
                    <span className="w-[4.5rem] shrink-0 pt-2.5 text-sm tabular-nums text-muted">
                      {l.start}
                      <span className="block text-xs">→ {l.end}</span>
                    </span>
                    <Corso
                      nome={l.corso}
                      famiglia={famigliaDi(l.corso)}
                      className="flex-1"
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {giorniVuoti.length > 0 && (
          <p className="mt-8 border-t border-line pt-4 text-sm text-muted">
            {elenco(giorniVuoti.map((g) => g.giorno))}: nessun corso a
            calendario.
          </p>
        )}
      </div>

      {/* ---------- Griglia settimanale: da tablet in su ---------- */}
      <div className="hidden md:block">
        {/* `table-fixed` e non automatico: con la larghezza a contenuto i
            giorni vuoti si stringono e quelli pieni si allargano, e la
            settimana esce storta — sabato largo un terzo del lunedì. Un
            calendario si legge se le colonne valgono tutte uguale. */}
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">
            Orario settimanale dei corsi: le ore in riga, i giorni in colonna.
          </caption>
          <colgroup>
            <col className="w-[4.5rem]" />
            {scheduleDays.map((d) => (
              <col key={d} />
            ))}
          </colgroup>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="eyebrow py-4 pr-4 font-medium">
                Ora
              </th>
              {scheduleDays.map((day) => (
                <th
                  key={day}
                  scope="col"
                  className="eyebrow px-1.5 py-4 font-medium"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {righe.map((row) => (
              <tr
                key={`${row.start}-${row.end}`}
                className="border-b border-line"
              >
                <th
                  scope="row"
                  className="whitespace-nowrap py-3 pr-4 align-middle text-left font-normal"
                >
                  <span className="block text-sm font-medium tabular-nums text-primary">
                    {row.start}
                  </span>
                  <span className="block text-xs tabular-nums text-muted">
                    → {row.end}
                  </span>
                </th>
                {row.courses.map((course, i) => (
                  <td key={i} className="px-1.5 py-2 align-middle">
                    {course ? (
                      <Corso nome={course} famiglia={famigliaDi(course)} />
                    ) : (
                      /* Niente pallino al posto della cella vuota: il vuoto
                         si legge già come vuoto, e il pallino veniva letto
                         a voce dagli screen reader riga per riga. */
                      <span className="sr-only">nessun corso</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
