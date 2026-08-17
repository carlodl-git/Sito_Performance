import Image from "next/image";

type PageHeroProps = {
  /** Sopratitolo in maiuscoletto, es. "Area 02" o la località. */
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** Con immagine l'hero diventa alto e fotografico; senza, è un blocco verde. */
  image?: { src: string; alt: string };
  /** Priorità di caricamento: attivarla solo sull'hero della pagina corrente. */
  priority?: boolean;
  /** Hero della home: più alto e con il titolo più grande. */
  tall?: boolean;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  priority = true,
  tall = false,
  children,
}: PageHeroProps) {
  const minHeight = image
    ? tall
      ? "min-h-[min(82vh,760px)]"
      : "min-h-[min(56vh,520px)]"
    : "";

  return (
    <section
      className={`relative flex flex-col justify-end overflow-hidden bg-primary ${minHeight} ${
        image ? "" : "py-24 sm:py-28"
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
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/60 to-primary-dark/30" />
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
