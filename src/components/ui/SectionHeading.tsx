/**
 * Intestazione di sezione. Allineata a sinistra per impostazione predefinita:
 * il centrato sistematico è ciò che rendeva tutte le sezioni identiche.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  /** Link secondario allineato al titolo, es. "Vedi tutti →". */
  action?: React.ReactNode;
}) {
  const centered = align === "center";

  return (
    <div
      className={
        centered
          ? "text-center"
          : "flex flex-wrap items-end justify-between gap-x-8 gap-y-4"
      }
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className={`heading-section ${eyebrow ? "mt-4" : ""}`}>{title}</h2>
        {intro && (
          <p
            className={`mt-5 text-ink-soft ${
              centered ? "mx-auto max-w-2xl" : "max-w-[62ch]"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
      {action && <div className={centered ? "mt-6" : ""}>{action}</div>}
    </div>
  );
}
