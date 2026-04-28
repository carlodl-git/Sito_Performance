import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPostsSorted } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Montecchia Performance Center",
  description:
    "Articoli su allenamento, golf, salute, nutrizione e benessere dal team del Montecchia Performance Center.",
  alternates: {
    canonical: "https://www.montecchiaperformancecenter.it/blog",
  },
  openGraph: {
    title: "Blog — Montecchia Performance Center",
    description:
      "Articoli su allenamento, golf, salute, nutrizione e benessere dal team del Montecchia Performance Center.",
    url: "https://www.montecchiaperformancecenter.it/blog",
    siteName: "Montecchia Performance Center",
    locale: "it_IT",
    type: "website",
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
      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Blog
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Articoli su allenamento, golf, salute, nutrizione e benessere dal
            team del Montecchia Performance Center.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-accent">
                  {post.category}
                </p>
                <h2 className="mt-3 font-display text-xl font-semibold text-primary group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs text-neutral-500"
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
