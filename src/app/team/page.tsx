import Link from "next/link";

type TeamMember = {
  name: string;
  role: string;
  category: string;
  description: string;
};

const team: TeamMember[] = [
  // Centro
  {
    name: "Ilaria Maso",
    role: "Responsabile Centro",
    category: "Centro",
    description:
      "Gestione e coordinamento del Montecchia Performance Center. Punto di riferimento per accoglienza, organizzazione e supporto a clienti e professionisti.",
  },
  // Fitness & Training
  {
    name: "Anna Simone",
    role: "Personal Trainer & Istruttrice Functional",
    category: "Fitness & Training",
    description:
      "Specializzata in Functional Training, Acquagym e Personal Training. Laureata in Scienze Motorie (Universita' di Padova) e Tecniche Sportive (Universita' di Urbino). Certificata Kardio-Kombat, aerobica, step e toning.",
  },
  {
    name: "Sascha Antoniutti",
    role: "Master Trainer & Personal Trainer",
    category: "Fitness & Training",
    description:
      "CEO Sensus Club, International Master Trainer Pilates e Reaxing. Specializzato in functional training, TRX, Pilates, rieducazione funzionale e attivita' acquatiche. Dottorato e formazione accademica in Scienze Motorie.",
  },
  {
    name: "Chiara Destro",
    role: "Istruttrice Pilates & Yoga",
    category: "Fitness & Training",
    description:
      "Istruttrice certificata Polestar-Pilates Matwork e HAMSA Hatha Yoga. Background nella danza e nel Sensitive Dance con il maestro francese Claude Coldy. Unisce la precisione del movimento alla consapevolezza dell'Asana.",
  },
  // Golf Lab
  {
    name: "Maria Paola Casati",
    role: "Direttrice Montecchia Golf Academy",
    category: "Golf Lab",
    description:
      "Maestra Classe A PGA Italiana dal 2004. Certificata TPI Level 3 Pro e Level 3 Junior Coach. Coordinatrice regionale FIG Veneto programmi Under 12. Ex nazionale italiana (1986-1998), campionessa italiana 1994.",
  },
  {
    name: "Massimo De Vidal",
    role: "Maestro di Golf PGA",
    category: "Golf Lab",
    description:
      "Maestro Classe A, PGA Italiana. Ex giocatore Alps Tour e European Challenge Tour (2002-2006). Coach alla Montecchia Golf Academy dal 2006. Tecnologia avanzata: SMART2MOVE, Trackman, Sam Puttlab, K-Vest.",
  },
  {
    name: "Germana Zanardi",
    role: "Maestra di Golf",
    category: "Golf Lab",
    description:
      "Maestra alla Montecchia Golf Academy dal 2017. Certificata TPI Level 1 e Trackman Level 1-2. Ex nazionale italiana (1988-1995), 4 titoli italiani. Diploma in Comunicazione d'Impresa e Master in Relazioni Pubbliche (IULM).",
  },
  {
    name: "Gionatan Baglioni",
    role: "Maestro di Golf",
    category: "Golf Lab",
    description:
      "Maestro (MA) iscritto al registro FIG. Coach Team Advisor della Montecchia Golf Academy. Impegnato nel coaching giovanile e nello sviluppo agonistico nel Veneto.",
  },
  {
    name: "Luca Pannone",
    role: "Maestro di Golf PGA",
    category: "Golf Lab",
    description:
      "Membro FIG & PGAI, Certified Golf Professional dal 2014. Certificazioni avanzate: Trackman 1-2, CAPTO 1-2, SwingCatalyst, K-Vest, FlightScope, U.S. Kids Golf. Formazione in biomeccanica del golf. Bilingue italiano/inglese.",
  },
  // Salute & Benessere
  {
    name: "Emanuele Veronese",
    role: "Biologo Nutrizionista",
    category: "Salute & Benessere",
    description:
      "Biologo e Nutrizionista iscritto all'Ordine Nazionale dei Biologi. Anche farmacista. Vicepresidente AFEN, associato ESNS. Nutrizionista ufficiale del Basket Mestre (Serie B). Titolare di parafarmacia specializzata in nutrizione sportiva.",
  },
  {
    name: "Pietro Bernuzzi",
    role: "Osteopata",
    category: "Salute & Benessere",
    description:
      "Infermiere e Osteopata. Diploma in osteopatia (2017) presso l'Istituto Europeo di Medicina Osteopatica di Padova. Specializzato in trattamento viscerale per pazienti con lipedema e linfedema. Collabora con il Performance Center dal 2021.",
  },
  {
    name: "Anselmo Pagani",
    role: "Professionista",
    category: "Salute & Benessere",
    description:
      "Membro del team di professionisti del Montecchia Performance Center a supporto della performance e del benessere degli atleti.",
  },
  {
    name: "Francesco Cafa",
    role: "Professionista",
    category: "Salute & Benessere",
    description:
      "Membro del team di professionisti del Montecchia Performance Center a supporto della performance e del benessere degli atleti.",
  },
];

const categories = [
  "Centro",
  "Fitness & Training",
  "Golf Lab",
  "Salute & Benessere",
];

export default function TeamPage() {
  return (
    <>
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Il Team
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Oltre 13 professionisti tra trainer, maestri di golf, nutrizionisti
            e specialisti del benessere. Qualita&apos;, esperienza e passione al
            servizio della tua performance.
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const members = team.filter((m) => m.category === category);
        if (members.length === 0) return null;

        return (
          <section key={category} className="section-padding bg-white even:bg-neutral-50">
            <div className="container-narrow">
              <h2 className="heading-section">{category}</h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-display font-semibold text-xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-primary">
                          {member.name}
                        </h3>
                        <p className="text-sm text-accent font-medium">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-semibold">
            Vuoi conoscerci di persona?
          </h2>
          <p className="mt-4 text-neutral-300">
            Vieni a trovarci in struttura o contattaci per fissare un
            appuntamento con il professionista che fa per te.
          </p>
          <Link href="/contatti" className="btn-primary mt-8 inline-flex">
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
