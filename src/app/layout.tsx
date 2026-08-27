import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

// Serif per i titoli: dà al sito il registro editoriale che il geometrico
// precedente (Outfit) non aveva.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.montecchiaperformancecenter.it"),
  title: {
    default:
      "Montecchia Performance Center: palestra, Pilates e Golf Indoor a Padova",
    template: "%s | Montecchia Performance Center",
  },
  description:
    "Quattro aree al Golf Club della Montecchia: palestra e corsi, Pilates Studio Reformer, Salute e Benessere, Golf Indoor. Selvazzano Dentro (Padova).",
  openGraph: {
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "Montecchia Performance Center" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // La chrome (header/footer) è definita dai layout dei gruppi:
    // (main) per il sito principale, (studio) per lo Studio Pilates.
    <html lang="it" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
