import Image from "next/image";

type PageHeroProps = {
  /** Sopratitolo in maiuscoletto, es. "Area 02" o la località. */
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Con immagine l'hero è alto e fotografico; senza, è un blocco del
   colore dell'area. */
  image?: { src: string; alt: string };
  /** Priorità di caricamento: attivarla solo sull'hero della pagina corrente. */
  priority?: boolean;
  /** Hero delle aree: più alto e con il titolo più grande. */
  tall?: boolean;
  /**
   * Hero della home: occupa esattamente uno schermo. La barra di
   * navigazione è `fixed` e galleggia sopra, quindi non toglie spazio e
   * qui non va sottratta. Con `svh` invece di `vh` non salta quando su
   * mobile la barra del browser si ritrae.
   */
  full?: boolean;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  priority = true,
  tall = false,
  full = false,
  children,
}: PageHeroProps) {
  const minHeight = image
    ? full
      ? "min-h-[100svh]"
      : tall
        ? "min-h-[min(82vh,760px)]"
        : "min-h-[min(56vh,520px)]"
    : "";

  return (
    <section
      className={`relative flex flex-col justify-end overflow-hidden bg-area-deep ${minHeight} ${
        image ? "" : "pb-24 pt-32 sm:pb-28 sm:pt-36"
      }`}
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="100vw"
            className="object-cover"
          />
          {/* Sfumatura neutra concentrata nella metà bassa, dove sta il
              testo: sopra l'82% la foto è pulita del tutto. Prima era una
              tinta del colore dell'area, densa al 95% in basso e ancora al
              30% in cima: copriva la fotografia invece di limitarsi a
              renderla leggibile.

              I valori non sono a occhio: sono quelli che tengono il titolo
              sopra 3:1 e il sommario sopra 4.5:1 sul pixel più chiaro di
              ogni foto usata negli hero. */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.88)_0%,rgb(0_0_0/0.75)_25%,rgb(0_0_0/0.45)_50%,transparent_82%)]" />
        </>
      )}

      <div
        className={`container-narrow relative z-10 ${
          image ? "pb-16 pt-36 sm:pb-20" : ""
        }`}
      >
        {eyebrow && (
          <p className="eyebrow text-white/70">{eyebrow}</p>
        )}
        <h1
          className={`font-display font-normal leading-[1.04] tracking-tight text-white ${
            eyebrow ? "mt-5" : ""
          } ${
            tall
              ? "text-5xl sm:text-6xl lg:text-7xl"
              : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85">
            {intro}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
