import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getService,
  getAllServiceSlugs,
  services,
  serviceArea,
} from "@/data/services";
import { getTeamMember } from "@/data/team";
import { areaMeta } from "@/data/areas";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Servizio non trovato" };
  }

  const title = `${service.title} a Padova (Selvazzano)`;
  const description = service.shortDescription.slice(0, 155);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.montecchiaperformancecenter.it/servizi/${service.slug}`,
      siteName: "Montecchia Performance Center",
      locale: "it_IT",
      images: [service.image?.src ?? "/images/palestra-1.jpg"],
    },
    alternates: {
      canonical: `https://www.montecchiaperformancecenter.it/servizi/${service.slug}`,
    },
  };
}

export default async function ServizioPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const relatedMembers =
    service.relatedTeamSlugs
      ?.map((s) => getTeamMember(s))
      .filter((m): m is NonNullable<typeof m> => Boolean(m)) ?? [];

  const relatedServices = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  // JSON-LD schema Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "Montecchia Performance Center",
      url: "https://www.montecchiaperformancecenter.it/",
    },
    areaServed: {
      "@type": "Place",
      name: "Padova, Selvazzano Dentro",
    },
    url: `https://www.montecchiaperformancecenter.it/servizi/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Stesso hero di tutte le altre pagine, invece del blocco fatto a
          mano che aveva prima: a schermo pieno, con la sfumatura già
          tarata e il nome del servizio come titolo.

          I tre servizi senza foto propria (shiatsu, nutrizionista,
          osteopata) ereditano quella della loro area: meglio la foto
          giusta di un'area che un blocco di colore vuoto alto uno schermo. */}
      <PageHero
        full
        eyebrow={service.category}
        title={service.title}
        intro={service.intro}
        image={service.image ?? areaMeta[serviceArea(service)].image}
      >
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <WhatsAppButton
            message={`Ciao! Vorrei informazioni su ${service.title}`}
            variant="light"
          >
            Scrivici su WhatsApp
          </WhatsAppButton>
          <Link
            href="/servizi"
            className="text-sm text-white underline-offset-4 transition-opacity hover:opacity-75 hover:underline"
          >
            ← Tutte le attività
          </Link>
        </div>
      </PageHero>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="heading-section">Il servizio</h2>
              <div className="mt-6 space-y-4 text-lg text-neutral-700 leading-relaxed">
                {service.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {service.benefits && service.benefits.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-display text-xl font-normal text-primary">
                    Benefici principali
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex gap-3 text-neutral-700">
                        <span className="text-accent">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-10">
                <Link href="/contatti" className="btn-primary">
                  Richiedi informazioni
                </Link>
              </div>
            </div>

            <aside className="space-y-8">
              {relatedMembers.length > 0 && (
                <div className="border border-line bg-white p-6">
                  <h3 className="eyebrow">
                    {relatedMembers.length === 1 ? "Professionista" : "Team"}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {relatedMembers.map((m) => (
                      <li key={m.slug}>
                        <Link
                          href={`/team/${m.slug}`}
                          className="group flex items-center gap-3"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/8 font-display text-primary">
                            {m.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-display text-base text-primary group-hover:text-accent">
                              {m.name}
                            </p>
                            <p className="text-xs text-ink-soft">{m.role}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section-padding bg-paper-alt">
          <div className="container-narrow">
            <h2 className="heading-section">Altri servizi: {service.category}</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servizi/${s.slug}`}
                  className="flex flex-col rounded-sm border border-line bg-white p-6 transition-colors hover:border-primary/40"
                >
                  <h3 className="font-display text-lg font-normal text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed line-clamp-3">
                    {s.shortDescription}
                  </p>
                  <span className="mt-4 text-sm font-medium text-accent">
                    Scopri il servizio →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
