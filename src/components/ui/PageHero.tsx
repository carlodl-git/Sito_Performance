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
  /**
   * Riga sotto il titolo, più piccola del titolo ma più grande del
   * sommario. Serve quando il titolo è un nome e la frase che lo spiega
   * merita comunque peso: "Montecchia Performance Center" / "Un centro,
   * quattro aree".
   */
  subtitle?: React.ReactNode;
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
  subtitle,
  image,
  priority = true,
  full = false,
  children,
}: PageHeroProps) {
  const minHeight = image
    ? full
      ? "min-h-[100svh]"
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
              testo. Prima era una tinta del colore dell'area, densa al 95%
              in basso e ancora al 30% in cima: copriva la fotografia invece
              di limitarsi a renderla leggibile.

              La curva è ripida in basso e molle in alto, ed è lì che è stata
              alleggerita: sotto il testo tiene quasi i valori di prima, ma
              a metà foto scende dal 55% al 44% e si spegne al 74% invece che
              all'82%. Sulle due foto più scure — la palestra e il golf
              indoor — era la parte alta a farle leggere cupe, non il fondo.

              Toccare i due stop bassi è un'altra cosa: sono quelli che
              tengono il sommario sopra 4.5:1 sul pixel più chiaro di ogni
              foto usata negli hero, comprese quelle delle schede servizio,
              che sono le più chiare. */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.86)_0%,rgb(0_0_0/0.74)_25%,rgb(0_0_0/0.44)_50%,transparent_74%)]" />
        </>
      )}

      <div
        className={`container-narrow relative z-10 ${
          image ? "pb-16 pt-36 sm:pb-20" : ""
        }`}
      >
        {/* Bianco pieno e non al 70%: a 11px l'occhiello sta in alto
            nell'hero, dove la sfumatura è ancora debole, e con la
            trasparenza restava sotto 4.5:1 su quasi tutte le foto. */}
        {eyebrow && <p className="eyebrow text-white">{eyebrow}</p>}
        <h1
          className={`font-display font-normal leading-[1.04] tracking-tight text-white ${
            eyebrow ? "mt-5" : ""
          } ${
            full
              ? "text-5xl sm:text-6xl lg:text-7xl"
              : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-display text-2xl font-normal leading-snug text-white sm:text-3xl">
            {subtitle}
          </p>
        )}
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
