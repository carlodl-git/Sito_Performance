import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPostsSorted } from "@/data/blog";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articoli su allenamento, golf, salute, nutrizione e benessere dal team del Montecchia Performance Center.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/blog",
  },
  openGraph: {
    title: "Blog | Montecchia Performance Center",
    description:
      "Articoli su allenamento, golf, salute, nutrizione e benessere dal team del Montecchia Performance Center.",
    url: "https://www.montecchiaperformancecenter.it/blog",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
    images: ["/images/palestra-1.jpg"],
  },
};

const dateFormatter = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const posts = getBlogPostsSorted();

  return (
    <>
      <PageHero
        title="Blog"
        intro="Articoli su allenamento, golf, salute, nutrizione e benessere dal team del Montecchia Performance Center."
      />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-sm border border-line bg-white p-6 transition-colors hover:border-primary/40"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {post.category}
                </p>
                <h2 className="mt-3 font-display text-xl font-normal text-primary group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs text-muted"
                  >
                    {dateFormatter.format(new Date(post.publishedAt))}
                  </time>
                  <span className="text-sm font-medium text-accent">
                    Leggi →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
