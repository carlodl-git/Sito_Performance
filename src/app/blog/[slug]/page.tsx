import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getBlogPost,
  getAllBlogSlugs,
  getBlogPostsSorted,
} from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Articolo non trovato" };
  }

  const title = `${post.title} | Blog — Montecchia Performance Center`;
  const description = post.excerpt.slice(0, 155);

  return {
    title,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `https://www.montecchiaperformancecenter.it/blog/${post.slug}`,
      siteName: "Montecchia Performance Center",
      locale: "it_IT",
      publishedTime: post.publishedAt,
    },
    alternates: {
      canonical: `https://www.montecchiaperformancecenter.it/blog/${post.slug}`,
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("it-IT", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const otherPosts = getBlogPostsSorted()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // JSON-LD schema Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Montecchia Performance Center",
    },
    publisher: {
      "@type": "Organization",
      name: "Montecchia Performance Center",
      url: "https://www.montecchiaperformancecenter.it/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.montecchiaperformancecenter.it/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative bg-brand py-24 sm:py-32">
        <div className="container-narrow">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent hover:text-accent-light"
          >
            ← Tutti gli articoli
          </Link>
          <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent">
            {post.category}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <time
            dateTime={post.publishedAt}
            className="mt-6 block text-sm text-neutral-400"
          >
            {dateFormatter.format(new Date(post.publishedAt))}
          </time>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="container-narrow max-w-3xl">
          <p className="text-xl text-neutral-700 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-10 space-y-6 text-lg text-neutral-700 leading-relaxed">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-12 border-t border-neutral-200 pt-8">
            <Link href="/contatti" className="btn-primary">
              Contattaci
            </Link>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-narrow">
            <h2 className="heading-section">Altri articoli</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {p.category}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-primary group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
