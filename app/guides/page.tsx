import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/JsonLd"
import { Button } from "@/components/ui/button"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { getAllPosts } from "@/lib/markdown"
import { topicClusters, featuredPostSlugs } from "@/lib/blog-clusters"
import { absoluteUrl, breadcrumbSchema, graphSchema, itemListSchema, webPageSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo-pages"
import { resolveTitle } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: resolveTitle("Website Guides for UK Businesses | Devora"),
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
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          badge="Resources"
          title={
            <>
              Guides for{" "}
              <span className="heading-accent">better websites</span>.
            </>
          }
          description="Curated reading on web design, development, SEO and conversion, written for UK businesses who want clarity before commissioning a new site."
          actions={
            <>
              <Link href="/#contact">
                <Button size="lg" className="rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors">
                  Request a website audit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="rounded-full border-[#0F1729]/20 bg-transparent font-medium text-[#0F1729] hover:border-[#0F1729]/40 transition-all">
                  View case studies
                </Button>
              </Link>
            </>
          }
        />

        {featured.length > 0 && (
          <section className="section-cream section-shell-cream page-section">
            <div className="page-container">
              <BrandBadge variant="lime" className="mb-6">
                Start here
              </BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                Featured <span className="heading-accent">guides</span>
              </h2>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#0F1729]/8 bg-white/60 transition-all hover:border-[#0F1729]/15 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1729]/20"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F4F2]">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="mb-3 flex gap-4 text-xs text-[#0F1729]/45">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" aria-hidden="true" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" aria-hidden="true" />
                            {post.readingTime}
                          </span>
                        </div>
                        <h3 className="text-base font-medium tracking-[-0.02em] text-[#0F1729] line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-6 text-[#0F1729]/55 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm lowercase text-[#0F1729]/55 transition-colors group-hover:text-[#0F1729]">
                          read guide
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="section-dark section-shell-dark page-section">
          <div className="page-container space-y-20">
            {topicClusters.map((cluster) => {
              const posts = cluster.pillarSlugs
                .map((slug) => postBySlug.get(slug))
                .filter((p): p is NonNullable<typeof p> => Boolean(p))

              if (posts.length === 0) return null

              return (
                <article key={cluster.id} id={cluster.id} className="scroll-mt-28">
                  <div className="mb-8 grid gap-5 md:grid-cols-2 md:items-end md:gap-8 lg:grid-cols-[1fr_1.2fr]">
                    <div>
                      <BrandBadge variant="navy" className="mb-4 border-white/10 bg-white/8 text-white">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        Topic cluster
                      </BrandBadge>
                      <h2 className="section-heading md:section-heading-tablet text-white">
                        {cluster.title}
                      </h2>
                    </div>
                    <p className="text-base leading-relaxed text-white/60">{cluster.description}</p>
                  </div>

                  <ul className="grid gap-3 md:grid-cols-2">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                        >
                          <h3 className="text-base font-medium text-white transition-colors">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-white/55 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <span className="mt-4 text-xs text-white/40">
                            {post.readingTime}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {cluster.serviceSlugs.slice(0, 3).map((serviceSlug) => (
                      <Link
                        key={serviceSlug}
                        href={`/services/${serviceSlug}`}
                        className="rounded-full border border-white/15 px-4 py-1.5 text-sm lowercase text-white/60 transition-colors hover:border-white/30 hover:text-white"
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

        <PageCta
          title={
            <>
              Ready to turn reading into{" "}
              <span className="heading-accent after:bg-[#CCFF00]">action</span>?
            </>
          }
          description="Tell us about your business and current website. We will outline the strongest gains for SEO, design and enquiries."
          linkLabel="discuss your project"
        />
      </main>

      <JsonLd
        data={graphSchema([
          webPageSchema({
            path: "/guides",
            name: "Website Guides for UK Businesses",
            description:
              "Curated guides on web design, development, SEO and conversion for UK businesses.",
          }),
          itemListSchema(
            allPosts.map((post) => ({
              name: post.title,
              url: absoluteUrl(`/blog/${post.slug}`),
            })),
            "/guides",
          ),
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
