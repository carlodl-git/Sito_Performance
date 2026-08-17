export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  category: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "yoga-e-aperitivo-in-piscina-30-euro",
    title: "Yoga e Aperitivo in Piscina: un'estate al Performance Center",
    excerpt:
      "Sessione di yoga al tramonto in piscina seguita da aperitivo. Il format estivo che unisce benessere, socialità e il fresco dell'acqua.",
    publishedAt: "2024-06-15",
    category: "Eventi",
    body: [
      "Quando il caldo si fa importante, allenarsi al chiuso può diventare una fatica in più, non un piacere. Per questo, durante l'estate, abbiamo sperimentato un format che è poi diventato un classico delle nostre stagioni: Yoga e Aperitivo in Piscina.",
      "La sessione si svolge a bordo piscina al tramonto, quando il sole inizia a calare e l'aria diventa più mite. La pratica yoga è studiata per la stagione: posizioni che lavorano sull'apertura del corpo, sulla respirazione profonda, sulla calma del sistema nervoso. L'effetto rinfrescante dell'acqua e la luce dorata dell'ora del tramonto trasformano un'attività fisica in un momento contemplativo.",
      "Al termine della sessione, aperitivo a bordo piscina con prodotti del territorio: un'occasione per stare con il proprio gruppo, conoscere nuove persone, prolungare la sensazione di benessere costruita durante la pratica.",
      "Il format costa 30€ e include sessione di yoga (60 minuti) + aperitivo. Le date vengono comunicate sui canali social del Performance Center con qualche settimana di anticipo. I posti sono limitati per garantire un'esperienza intima e di qualità.",
    ],
  },
  {
    slug: "corsi-settembre-2020",
    title: "I corsi di settembre 2020: ripartire con il giusto ritmo",
    excerpt:
      "Settembre, mese del 'capodanno sportivo': l'occasione perfetta per tornare ad allenarsi con costanza. Tutti i corsi del Performance Center per la nuova stagione.",
    publishedAt: "2020-09-01",
    category: "Stagione",
    body: [
      "Settembre è il vero capodanno sportivo: dopo l'estate, le vacanze e i ritmi sfalsati, è il momento giusto per costruire una routine di allenamento che possa portarci fino alla primavera con costanza e progressi misurabili.",
      "Al Montecchia Performance Center abbiamo strutturato un'offerta di corsi pensata per coprire le esigenze più diverse: dal fitness funzionale alla tonificazione, dal pilates allo yoga, dai corsi golf-specific al personal training.",
      "Il calendario dei corsi è fisso: stessi orari ogni settimana, così è facile trasformare l'allenamento in un'abitudine automatica. Le iscrizioni sono in formula trimestrale o annuale, con la possibilità di provare una prima lezione gratuita per ogni format.",
      "Per il calendario aggiornato e le tariffe correnti, contattaci direttamente: gli orari e i format si evolvono di stagione in stagione in base alle richieste e alle nuove proposte del team.",
    ],
  },
  {
    slug: "sistema-immunitario-attivita-fisica",
    title: "Sistema immunitario e attività fisica: quale relazione?",
    excerpt:
      "L'allenamento regolare rinforza il sistema immunitario, ma il sovrallenamento può indebolirlo. Cosa dice la letteratura scientifica e cosa funziona in pratica.",
    publishedAt: "2020-04-15",
    category: "Salute",
    body: [
      "La relazione tra attività fisica e sistema immunitario è uno dei temi più studiati della fisiologia dello sport. La letteratura scientifica è ormai chiara: l'esercizio regolare di intensità moderata è uno dei modi più efficaci per mantenere il sistema immunitario reattivo ed efficiente.",
      "Il meccanismo è multifattoriale. L'attività fisica regolare migliora la circolazione (le cellule immunitarie circolano meglio nel corpo), riduce l'infiammazione cronica di basso grado, modula positivamente la composizione del microbiota intestinale, che è una delle principali interfacce del nostro sistema immunitario, e migliora la qualità del sonno, fattore critico per la rigenerazione delle difese.",
      "Esiste però una soglia oltre la quale l'effetto si inverte: il sovrallenamento (carichi troppo alti, recupero insufficiente) può indebolire le difese immunitarie. È il fenomeno noto come 'open window': una finestra di vulnerabilità che si apre dopo sforzi prolungati e intensi.",
      "Cosa significa in pratica? Tre principi chiave: regolarità (allenarsi 3-5 volte a settimana è meglio di sessioni saltuarie ma estreme), recupero (sonno adeguato, gestione dello stress), nutrizione (apporto adeguato di proteine, micronutrienti e idratazione). Lavorare su questi pilastri, invece di concentrare tutto sull'intensità degli allenamenti, è la strategia con il miglior ritorno sul sistema immunitario.",
      "Il personal training e i corsi del Montecchia Performance Center sono strutturati esattamente con questa filosofia: programmi periodizzati che alternano carichi e recupero, con attenzione costante alla qualità del sonno e all'alimentazione. Per chi vuole approfondire la parte nutrizionale, il Dott. Veronese, Biologo Nutrizionista del centro, propone consulenze dedicate.",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getBlogPostsSorted(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
