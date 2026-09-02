import { contatti } from "@/data/contatti";

/* ============================================================
   DATI STRUTTURATI (JSON-LD)
   Un'entità sola per il centro, con un `@id` stabile, e tutto il resto
   che la referenzia. È la differenza fra dire a Google "esiste un
   centro con quattro servizi" e dirgli "esistono cinque attività
   commerciali diverse allo stesso indirizzo", che è quello che sarebbe
   successo emettendo un LocalBusiness pieno su ognuna delle quattro
   pagine area.

   Gli orari vengono da data/contatti.ts, gli stessi che finiscono nel
   footer: se cambiano lì, cambiano qui.
   ============================================================ */

const BASE = "https://www.montecchiaperformancecenter.it";

/** L'ancora dell'entità. Usarla ovunque serva riferirsi al centro. */
export const ID_CENTRO = `${BASE}/#centro`;

const orariApertura = contatti.orari.palestra
  .filter((o): o is typeof o & { schema: NonNullable<typeof o.schema> } => o.schema !== null)
  .map((o) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: o.schema.giorni,
    opens: o.schema.apre,
    closes: o.schema.chiude,
  }));

const schemaCentro = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": ID_CENTRO,
  name: contatti.nome,
  url: `${BASE}/`,
  description:
    "Palestra con corsi di gruppo, Pilates Studio Reformer, Salute e Benessere e Golf Indoor al Golf Club della Montecchia.",
  address: {
    "@type": "PostalAddress",
    streetAddress: contatti.via,
    addressLocality: contatti.citta,
    addressRegion: contatti.provincia,
    postalCode: contatti.cap,
    addressCountry: "IT",
  },
  telephone: contatti.telefono,
  email: contatti.email,
  vatID: contatti.piva,
  parentOrganization: {
    "@type": "Organization",
    name: contatti.ragioneSociale,
    vatID: contatti.piva,
  },
  areaServed: { "@type": "City", name: "Padova" },
  openingHoursSpecification: orariApertura,
  sameAs: [contatti.facebook, contatti.instagram],
};

/** L'entità del centro. Va emessa una volta sola per pagina. */
export function SchemaCentro() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCentro) }}
    />
  );
}

/**
 * Un'area come servizio erogato dal centro. Non ripete indirizzo e
 * orari: li eredita dal nodo referenziato via `@id`.
 */
export function SchemaArea({
  nome,
  descrizione,
  url,
}: {
  nome: string;
  descrizione: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: nome,
    description: descrizione,
    url: `${BASE}${url}`,
    provider: { "@id": ID_CENTRO },
    areaServed: { "@type": "City", name: "Padova" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
