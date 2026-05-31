import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/JsonLd"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Button } from "@/components/ui/button"
import { getAllPosts } from "@/lib/markdown"
import { topicClusters, featuredPostSlugs } from "@/lib/blog-clusters"
import { absoluteUrl, breadcrumbSchema, graphSchema, webPageSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo-pages"

export const metadata: Metadata = {
  title: "Website Guides for UK Businesses | Devora",
  description:
    "Practical guides on web design, development, SEO, cost, and conversion for UK brands. Curated by our startup engineering team.",
  keywords: [
    "web design guides UK",
    "business website advice",
    "website cost UK guide",
    "startup web design resources",
    "website SEO guides",
  ],
  alternates: { canonical: absoluteUrl("/guides") },
  openGraph: {
    title: "Website Guides for UK Businesses | Devora",
    description: "Curated guides on design, development, SEO and growth for UK business websites.",
    url: absoluteUrl("/guides"),
    type: "website",
    locale: "en_GB",
    images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: "Devora website guides" }],
  },
}

export default function GuidesPage() {
  const allPosts = getAllPosts()
  const postBySlug = new Map(allPosts.map((p) => [p.slug, p]))
  const featured = featuredPostSlugs
    .map((slug) => postBySlug.get(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Guides", href: "/guides" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-primary px-4 pb-20 pt-32 text-primary-foreground md:px-6 md:pb-28 md:pt-44">
          <div
            className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 max-w-3xl">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-primary-foreground/70">
                Resources
              </p>
              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Guides for{" "}
                <span className="font-serif italic font-normal text-primary-foreground/95">
                  better websites
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/85">
                Curated reading on web design, development, SEO and conversion, written for UK
                businesses who want clarity before they commission a new site.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact">
                  <Button
                    size="lg"
                    className="rounded-full bg-background font-bold text-foreground hover:bg-background/90"
                  >
                    Request a website audit
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-primary-foreground bg-transparent font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    All blog posts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {featured.length > 0 && (
          <section className="bg-background px-4 py-16 md:px-6 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                  Start here
                </p>
                <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
                  Featured guides
                </h2>
              </div>

              <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featured.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                        <div className="mb-3 flex gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" aria-hidden="true" />
                            {post.readingTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                          Read guide
                          <ArrowRight
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl space-y-20">
            {topicClusters.map((cluster) => {
              const posts = cluster.pillarSlugs
                .map((slug) => postBySlug.get(slug))
                .filter((p): p is NonNullable<typeof p> => Boolean(p))

              if (posts.length === 0) return null

              return (
                <article key={cluster.id} id={cluster.id} className="scroll-mt-28">
                  <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
                    <div>
                      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                        <BookOpen className="h-4 w-4" aria-hidden="true" />
                        Topic cluster
                      </p>
                      <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
                        {cluster.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{cluster.description}</p>
                  </div>

                  <ul className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
                    {posts.map((post) => (
                      <li key={post.slug} className="bg-card">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group flex h-full flex-col p-6 hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
                        >
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <span className="mt-4 text-xs font-medium text-muted-foreground">
                            {post.readingTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {cluster.serviceSlugs.slice(0, 3).map((serviceSlug) => (
                      <Link
                        key={serviceSlug}
                        href={`/services/${serviceSlug}`}
                        className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-foreground/30 transition-colors"
                      >
                        {serviceSlug.replace(/-/g, " ")}
                      </Link>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
              Ready to turn reading into action?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">
              Tell us about your business and current website. We will outline the strongest gains
              for SEO, design and enquiries.
            </p>
            <Link href="/#contact" className="mt-8 inline-flex">
              <Button
                size="lg"
                className="rounded-full bg-background font-bold text-foreground hover:bg-background/90"
              >
                Discuss your project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <JsonLd
        data={graphSchema([
          webPageSchema({
            path: "/guides",
            name: "Website Guides for UK Businesses",
            description:
              "Curated guides on web design, development, SEO and conversion for UK businesses.",
          }),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Guides", url: absoluteUrl("/guides") },
          ]),
        ])}
      />
      <Footer />
    </div>
  )
}
