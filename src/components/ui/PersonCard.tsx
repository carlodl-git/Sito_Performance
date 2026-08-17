import Link from "next/link";
import Image from "next/image";
import type { TeamMember } from "@/data/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

/**
 * Scheda persona, usata da /team e dalle sezioni team delle aree.
 *
 * Senza foto non riserva lo spazio del ritratto: tredici riquadri vuoti
 * pesano più di tredici righe pulite. Quando le foto arriveranno basterà
 * passare `photo` e la scheda diventa un ritratto verticale.
 */
export function PersonCard({
  member,
  photo,
}: {
  member: Pick<TeamMember, "slug" | "name" | "role" | "shortDescription">;
  photo?: { src: string; alt: string };
}) {
  return (
    <Link
      href={`/team/${member.slug}`}
      className="group flex flex-col border-t border-line pt-6 transition-colors hover:border-primary"
    >
      {photo ? (
        <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden bg-paper-alt">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/8 font-display text-sm text-primary">
          {initials(member.name)}
        </span>
      )}

      <h3 className="heading-sub transition-colors group-hover:text-accent">
        {member.name}
      </h3>
      <p className="eyebrow mt-2">{member.role}</p>
      <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-ink-soft">
        {member.shortDescription}
      </p>
    </Link>
  );
}
