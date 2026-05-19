import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Vieni a trovarci al Montecchia Performance Center, Via della Montecchia 12, Selvazzano Dentro (Padova). Telefono, email, mappa e form di contatto.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/contatti",
  },
  openGraph: {
    title: "Contatti — Montecchia Performance Center (Padova)",
    description:
      "Via della Montecchia 12, Selvazzano Dentro (Padova). Telefono, email, mappa.",
    url: "https://www.montecchiaperformancecenter.it/contatti",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

export default function ContattiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
