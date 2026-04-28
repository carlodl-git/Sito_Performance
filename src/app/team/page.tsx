import Link from "next/link";
import type { Metadata } from "next";
import { team, teamCategories } from "@/data/team";

export const metadata: Metadata = {
  title: "Il Team",
  description:
    "Oltre 13 professionisti tra trainer, maestri di golf, nutrizionisti e specialisti del benessere al servizio della tua performance. Scopri il team del Montecchia Performance Center.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/team",
  },
  openGraph: {
    title: "Il Team — Montecchia Performance Center",
    description:
      "Oltre 13 professionisti tra trainer, maestri di golf, nutrizionisti e specialisti del benessere.",
    url: "https://www.montecchiaperformancecenter.it/team",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
  },
};

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

      {teamCategories.map((category) => {
        const members = team.filter((m) => m.category === category);
        if (members.length === 0) return null;

        return (
          <section
            key={category}
            className="section-padding bg-white even:bg-neutral-50"
          >
            <div className="container-narrow">
              <h2 className="heading-section">{category}</h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member) => (
                  <Link
                    key={member.slug}
                    href={`/team/${member.slug}`}
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
                      {member.shortDescription}
                    </p>
                    <span className="mt-4 text-sm font-medium text-accent">
                      Scopri il profilo →
                    </span>
                  </Link>
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
