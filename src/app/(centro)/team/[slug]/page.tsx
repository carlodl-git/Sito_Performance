import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTeamMember, getAllTeamSlugs, team } from "@/data/team";
import { PageHero } from "@/components/ui/PageHero";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllTeamSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    return { title: "Profilo non trovato" };
  }

  const title = `${member.name}, ${member.role}`;
  const description = member.shortDescription.slice(0, 155);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "profile",
      url: `https://www.montecchiaperformancecenter.it/team/${member.slug}`,
      siteName: "Montecchia Performance Center",
      locale: "it_IT",
      images: ["/images/palestra-1.jpg"],
    },
    alternates: {
      canonical: `https://www.montecchiaperformancecenter.it/team/${member.slug}`,
    },
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) notFound();

  // Altri 3 membri della stessa categoria (escluso il corrente)
  const related = team
    .filter((m) => m.category === member.category && m.slug !== member.slug)
    .slice(0, 3);

  // JSON-LD schema Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "Organization",
      name: "Montecchia Performance Center",
      url: "https://www.montecchiaperformancecenter.it/",
    },
    description: member.shortDescription,
    url: `https://www.montecchiaperformancecenter.it/team/${member.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <PageHero
        backLink={{ href: "/team", label: "← Tutto il team" }}
        eyebrow={member.category}
        title={member.name}
        intro={member.role}
      />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="heading-section">Biografia</h2>
              <div className="mt-6 space-y-4 text-lg text-neutral-700 leading-relaxed">
                {member.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contatti" className="btn-primary">
                  Prenota una sessione
                </Link>
              </div>
            </div>
            <aside>
              <div className="border border-line bg-white p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/8 font-display text-primary text-2xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-display text-lg font-normal text-primary">
                      {member.name}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
                {member.credentials && member.credentials.length > 0 && (
                  <div className="mt-6 border-t border-line pt-6">
                    <h3 className="eyebrow">
                      Credenziali
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                      {member.credentials.map((c, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">›</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-paper-alt">
          <div className="container-narrow">
            <h2 className="heading-section">Altri professionisti: {member.category}</h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  href={`/team/${m.slug}`}
                  className="flex flex-col rounded-sm border border-line bg-white p-6 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/8 font-display text-primary text-xl">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-normal text-primary">
                        {m.name}
                      </h3>
                      <p className="text-sm text-accent font-medium">{m.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed line-clamp-3">
                    {m.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
