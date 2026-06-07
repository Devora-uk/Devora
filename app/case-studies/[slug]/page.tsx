import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import { JsonLd } from "@/components/JsonLd"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { absoluteUrl, breadcrumbSchema, graphSchema, webPageSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo-pages"
import { caseStudies } from "@/lib/case-studies"

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "The requested Devora case study could not be found.",
    }
  }

  const title =
    slug === "sandalwood-memorials"
      ? "Sandalwood Memorials: Headless WooCommerce & Next.js Website"
      : `${study.title}: ${study.subtitle}`
  const description = `${study.client || study.title} case study covering the problem, strategy, design approach, development stack and outcome.`

  const heroImageAlt =
    study.heroImageAlt || `${study.title} ${study.subtitle.toLowerCase()} case study by Devora`

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(`/case-studies/${slug}`),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/case-studies/${slug}`),
      type: "article",
      images: [
        {
          url: study.heroImage || `/case-studies/${slug}.png`,
          width: study.heroImageWidth ?? 1200,
          height: study.heroImageHeight ?? 630,
          alt: heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [study.heroImage || `/case-studies/${slug}.png`],
    },
  }
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params)
  const caseStudy = caseStudies[resolvedParams.slug]

  if (!caseStudy) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-20 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-muted-foreground mb-8">We couldn't find the case study you're looking for.</p>
            <Link href="/#work">
              <Button className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const heroImage = caseStudy.heroImage ?? null
  const projectImage = heroImage ?? `/case-studies/${resolvedParams.slug}.png`
  const caseStudyUrl = absoluteUrl(`/case-studies/${resolvedParams.slug}`)
  const structuredData = graphSchema([
    webPageSchema({
      path: `/case-studies/${resolvedParams.slug}`,
      name: `${caseStudy.title}: ${caseStudy.subtitle}`,
      description: caseStudy.challenge,
    }),
    {
      "@type": "CreativeWork",
      "@id": `${caseStudyUrl}#creativework`,
      name: `${caseStudy.title}: ${caseStudy.subtitle}`,
      headline: `${caseStudy.title}: ${caseStudy.subtitle}`,
      description: caseStudy.challenge,
      image: absoluteUrl(projectImage),
      datePublished: `${caseStudy.year || "2024"}-01-01`,
      creator: { "@id": `${SITE_URL}/#organization` },
      about: caseStudy.services,
      mentions: caseStudy.technologies?.map((technology: string) => ({ "@type": "Thing", name: technology })),
      mainEntityOfPage: { "@id": `${caseStudyUrl}#webpage` },
    },
    breadcrumbSchema([
      { name: "Home", url: SITE_URL },
      { name: "Case Studies", url: `${SITE_URL}/case-studies` },
      { name: caseStudy.title, url: caseStudyUrl },
    ]),
  ])

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/case-studies" },
    { name: caseStudy.title, href: `/case-studies/${resolvedParams.slug}` },
  ]

  const VisitSiteButton = ({ className = "" }: { className?: string }) =>
    caseStudy.website ? (
      <Link
        href={caseStudy.website}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-semibold text-[#0F1729] shadow-sm transition-all hover:bg-[#b8e600] hover:shadow-md touch-manipulation ${className}`}
      >
        Visit live site
        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
      </Link>
    ) : null

  const MetaDetails = ({ dark = false }: { dark?: boolean }) => (
    <dl className={`grid gap-4 sm:grid-cols-3 ${dark ? "text-white" : "text-[#0F1729]"}`}>
      <div className={dark ? "" : "rounded-xl border border-[#0F1729]/8 bg-white/60 p-4"}>
        <dt className={`text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-[#0F1729]/45"}`}>Client</dt>
        <dd className="mt-1 font-medium">{caseStudy.client || "N/A"}</dd>
      </div>
      <div className={dark ? "" : "rounded-xl border border-[#0F1729]/8 bg-white/60 p-4"}>
        <dt className={`text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-[#0F1729]/45"}`}>Duration</dt>
        <dd className="mt-1 font-medium">{caseStudy.duration || "N/A"}</dd>
      </div>
      <div className={dark ? "" : "rounded-xl border border-[#0F1729]/8 bg-white/60 p-4"}>
        <dt className={`text-[10px] font-bold uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-[#0F1729]/45"}`}>Year</dt>
        <dd className="mt-1 font-medium">{caseStudy.year || "N/A"}</dd>
      </div>
    </dl>
  )

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        {heroImage ? (
          <section className="relative flex min-h-[75vh] flex-col justify-end overflow-hidden md:min-h-[85vh]">
            <div className="absolute inset-0" style={caseStudy.heroImageBg ? { backgroundColor: caseStudy.heroImageBg } : undefined}>
              <Image
                src={heroImage}
                alt={caseStudy.heroImageAlt || `${caseStudy.title} case study hero`}
                fill
                className={caseStudy.heroImageClass ?? "object-cover"}
                quality={100}
                unoptimized={caseStudy.heroImageUnoptimized ?? false}
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1729] via-[#0F1729]/50 to-[#0F1729]/20" aria-hidden="true" />
            </div>

            <div className="relative z-10 px-5 pb-14 pt-28 md:px-8 md:pb-16 md:pt-32 lg:px-10 lg:pb-20 lg:pt-40">
              <div className="page-container">
                <Link
                  href="/case-studies"
                  className="mb-8 inline-flex min-h-[44px] items-center gap-2 text-sm text-white/70 transition-colors hover:text-white touch-manipulation"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  back to case studies
                </Link>

                <div className="grid gap-10 md:grid-cols-[1fr_0.42fr] md:items-end lg:gap-12">
                  <div>
                    <BrandBadge variant="navy" className="mb-6 border-white/15 bg-white/10 text-white">
                      {caseStudy.category}
                    </BrandBadge>
                    <h1 className="max-w-4xl text-balance text-[clamp(2.1rem,5vw,5.25rem)] font-normal leading-[0.98] tracking-[-0.04em] text-white md:text-[clamp(2.35rem,4.5vw,4.25rem)]">
                      {caseStudy.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                      {caseStudy.subtitle}
                    </p>
                    {caseStudy.website && (
                      <div className="mt-8">
                        <VisitSiteButton />
                      </div>
                    )}
                  </div>

                  <div className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur-md md:p-7">
                    <MetaDetails dark />
                    {caseStudy.website && (
                      <div className="mt-6 border-t border-white/15 pt-6">
                        <VisitSiteButton className="w-full" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <PageHero
            breadcrumbs={breadcrumbs}
            badge={caseStudy.category}
            title={caseStudy.title}
            aside={caseStudy.subtitle}
            actions={
              <>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-sm lowercase text-[#0F1729]/55 transition-colors hover:text-[#0F1729] hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  back to case studies
                </Link>
                <VisitSiteButton />
              </>
            }
          />
        )}

        <section className="section-cream section-shell-cream page-section page-section-compact">
          <div className="page-container">
            {!heroImage && (
              <div className="mb-12 grid gap-6">
                <MetaDetails />
                {caseStudy.website && (
                  <div className="flex flex-wrap items-center gap-4 rounded-xl border border-[#0F1729]/8 bg-white/60 p-5 md:p-6">
                    <div className="flex-1 min-w-[12rem]">
                      <p className="text-sm font-medium text-[#0F1729]">See the finished project</p>
                      <p className="mt-1 text-sm text-[#0F1729]/55">Explore the live website we designed and built.</p>
                    </div>
                    <VisitSiteButton />
                  </div>
                )}
              </div>
            )}

            {!heroImage && (
              <div className="relative mb-14 aspect-[16/9] overflow-hidden rounded-xl border border-[#0F1729]/8 bg-[#F4F4F2]">
                <Image
                  src={projectImage}
                  alt={`${caseStudy.title} project screenshot`}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1280px) 100vw, 90rem"
                />
              </div>
            )}

            <div className="page-grid-aside gap-10 md:gap-12 lg:gap-16">
              <div>
                <BrandBadge variant="pink" className="mb-6">The challenge</BrandBadge>
                <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                  What we set out to <span className="heading-accent">solve</span>
                </h2>
                <div className="mt-8 space-y-3">
                  {caseStudy.challenges?.map((challenge: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex gap-4 rounded-xl border border-[#0F1729]/8 bg-white/60 p-5 transition-colors hover:border-[#0F1729]/15 hover:bg-white"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F1729] text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <p className="text-sm leading-7 text-[#0F1729]/70 md:text-base">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <BrandBadge variant="cyan" className="mb-6">Our approach</BrandBadge>
                <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                  How we <span className="heading-accent">tackled</span> it
                </h2>
                <p className="mt-8 text-base leading-8 text-[#0F1729]/70 md:text-lg">
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {caseStudy.solutionPhases && (
          <section className="section-dark section-shell-dark page-section">
            <div className="page-container">
              <BrandBadge variant="lime" className="mb-6 border-white/10 bg-white/8 text-white">Process</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-white">
                Execution <span className="heading-accent after:bg-[#CCFF00]">timeline</span>
              </h2>
              <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {caseStudy.solutionPhases.map((phase: { title: string; points?: string[] }, idx: number) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8 md:p-7"
                  >
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-bold text-[#0F1729]">
                        {idx + 1}
                      </span>
                      <h3 className="font-medium text-white">{phase.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {phase.points?.map((point: string, pidx: number) => (
                        <li key={pidx} className="flex gap-2.5 text-sm leading-6 text-white/65">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#CCFF00]" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {caseStudy.results && Object.keys(caseStudy.results).length > 0 && (
          <section className="section-cream section-shell-cream page-section">
            <div className="page-container">
              <BrandBadge variant="lime" className="mb-6">Impact</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                The <span className="heading-accent">results</span>
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {Object.entries(caseStudy.results).map(([label, value], idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#0F1729]/8 bg-white/60 p-6 transition-all hover:border-[#0F1729]/15 hover:bg-white md:p-7"
                  >
                    <p className="text-lg font-semibold tracking-[-0.02em] text-[#0F1729] md:text-xl">
                      {String(value)}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-[#0F1729]/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {caseStudy.testimonial && (
          <section className="section-dark section-shell-dark page-section">
            <div className="mx-auto max-w-3xl text-center">
              <blockquote className="text-xl leading-relaxed text-white/85 md:text-2xl md:leading-9">
                <span className="mb-4 block text-5xl leading-none text-[#CCFF00]/40" aria-hidden="true">&ldquo;</span>
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="mt-10">
                <p className="font-medium text-white">{caseStudy.testimonial.author}</p>
                <p className="mt-1 text-sm text-white/55">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </section>
        )}

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container">
            <div className="page-grid-2 gap-10 md:gap-12 lg:gap-16">
              <div>
                <BrandBadge variant="cyan" className="mb-6">Capabilities</BrandBadge>
                <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                  What we <span className="heading-accent">delivered</span>
                </h2>
                <ul className="mt-8 space-y-3">
                  {caseStudy.services?.map((service: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-[#0F1729]/8 bg-white/60 px-5 py-4"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#CCFF00]" aria-hidden="true" />
                      <span className="text-sm font-medium text-[#0F1729] md:text-base">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <BrandBadge variant="pink" className="mb-6">Stack</BrandBadge>
                <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
                  Technologies we <span className="heading-accent">used</span>
                </h2>
                <div className="mt-8 flex flex-wrap gap-2">
                  {caseStudy.technologies?.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="rounded-full border border-[#0F1729]/8 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-[#0F1729]/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {caseStudy.website && (
              <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl border border-[#0F1729]/8 bg-[#0F1729] p-6 text-white md:flex-row md:items-center md:p-8">
                <div>
                  <p className="text-lg font-medium tracking-[-0.02em] md:text-xl">Ready to explore the live site?</p>
                  <p className="mt-2 text-sm leading-6 text-white/60 md:text-base">
                    See how {caseStudy.client} presents their brand online today.
                  </p>
                </div>
                <VisitSiteButton className="shrink-0" />
              </div>
            )}
          </div>
        </section>

        <PageCta
          title={
            <>
              Want results like{" "}
              <span className="heading-accent after:bg-[#CCFF00]">these</span>?
            </>
          }
          description="Tell us about your business and we will outline how a bespoke website could work for you."
          linkLabel="start a project"
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container">
            <BrandBadge variant="lime" className="mb-6">Explore</BrandBadge>
            <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
              More case <span className="heading-accent">studies</span>
            </h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(caseStudies)
                .filter(([slug]) => slug !== resolvedParams.slug)
                .slice(0, 6)
                .map(([slug, study]: [string, { title: string; subtitle: string; category: string }]) => (
                  <Link
                    key={slug}
                    href={`/case-studies/${slug}`}
                    className="group"
                  >
                    <article className="flex h-full flex-col rounded-xl border border-[#0F1729]/8 bg-white/60 p-5 transition-all hover:border-[#0F1729]/15 hover:bg-white">
                      <span className="mb-3 inline-block w-fit rounded-full bg-[#0F1729]/6 px-2.5 py-0.5 text-xs font-medium text-[#0F1729]/55">
                        {study.category}
                      </span>
                      <h3 className="text-base font-medium tracking-[-0.02em] text-[#0F1729] md:text-lg">
                        {study.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-[#0F1729]/55 line-clamp-2">
                        {study.subtitle}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm lowercase text-[#0F1729]/55 transition-colors group-hover:text-[#0F1729]">
                        view case study
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </article>
                  </Link>
                ))}
            </div>
            <div className="mt-10">
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-1.5 text-sm lowercase text-[#0F1729]/55 transition-colors hover:text-[#0F1729]"
              >
                view all case studies
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={structuredData} />
      <Footer />
    </div>
  )
}
