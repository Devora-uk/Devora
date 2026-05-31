import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"
import { getAllPosts } from "@/lib/markdown"
import { featuredPostSlugs } from "@/lib/blog-clusters"

export function HomeInsights() {
  const postBySlug = new Map(getAllPosts().map((p) => [p.slug, p]))
  const posts = featuredPostSlugs
    .slice(0, 3)
    .map((slug) => postBySlug.get(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  if (posts.length === 0) return null

  return (
    <section
      className="relative px-4 py-20 md:px-6 md:py-28 bg-gradient-to-b from-muted/40 to-background overflow-hidden"
      aria-labelledby="insights-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-accent">
              Insights
            </p>
            <h2
              id="insights-heading"
              className="text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-5xl"
            >
              Practical guides for{" "}
              <span className="font-serif italic font-normal">smarter websites</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Honest advice on cost, SEO, conversion, and choosing a web partner, written to help growing brands make informed digital investments.
            </p>
          </div>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 font-bold text-foreground underline underline-offset-4 hover:text-primary transition-colors shrink-0"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            View all guides
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 text-xs font-medium text-muted-foreground">
                    {post.readingTime}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
