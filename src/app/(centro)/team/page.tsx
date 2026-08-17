import Link from "next/link";
import type { Metadata } from "next";
import { team, teamCategories } from "@/data/team";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PersonCard } from "@/components/ui/PersonCard";

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
    images: ["/images/palestra-1.jpg"],
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Le persone"
        title="Il Team"
        intro="Oltre 13 professionisti tra trainer, maestri di golf, nutrizionisti e specialisti del benessere."
        image={{
          src: "/images/palestra-3.jpg",
          alt: "Allenamento seguito da un trainer al Montecchia Performance Center",
        }}
      />

      {teamCategories.map((category, i) => {
        const members = team.filter((m) => m.category === category);
        if (members.length === 0) return null;

        return (
          <section
            key={category}
            className={`section-padding ${i % 2 === 1 ? "bg-paper-alt" : ""}`}
          >
            <div className="container-narrow">
              <SectionHeading
                eyebrow={`${members.length} ${
                  members.length === 1 ? "professionista" : "professionisti"
                }`}
                title={category}
              />
              {/* Due colonne: con un numero dispari di persone una griglia
                  da tre lascerebbe una scheda orfana in fondo alla riga. */}
              <div className="mt-12 grid gap-x-14 gap-y-10 sm:grid-cols-2">
                {members.map((member) => (
                  <PersonCard key={member.slug} member={member} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-padding bg-brand text-white">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl font-normal sm:text-4xl">
            Vuoi conoscerci di persona?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Vieni a trovarci in struttura o contattaci per fissare un
            appuntamento con il professionista che fa per te.
          </p>
          <Link
            href="/contatti"
            className="mt-10 inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
          >
            Contattaci
          </Link>
        </div>
      </section>
    </>
  );
}
