import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { getServicePage, SITE_URL } from "@/lib/seo-pages"
import {
  absoluteUrl,
  breadcrumbSchema,
  faqSchema,
  graphSchema,
  localBusinessSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema"
import { allAreaLandingSlugs, areaLandingPath, resolveAreaLanding } from "@/lib/resolve-area-landing"

type AreaPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return allAreaLandingSlugs().map((slug) => ({ slug }))
}

function metaDescription(area: NonNullable<ReturnType<typeof resolveAreaLanding>>): string {
  if (area.slug === "sheffield") {
    return "Devora builds bespoke, fast and conversion-led websites for Sheffield and South Yorkshire businesses that need stronger local SEO and better enquiries."
  }
  if (area.kind === "curated") {
    return `Devora builds bespoke, fast and conversion-led websites for ${area.name} businesses that need stronger SEO, sharper positioning and better enquiries.`
  }
  return `Bespoke web design and website development in ${area.name}. Devora builds business websites from the ground up with strategy, technical SEO, performance, and conversion in mind.`
}

function metaKeywords(area: NonNullable<ReturnType<typeof resolveAreaLanding>>): string[] {
  if (area.kind === "curated" && area.slug === "sheffield") {
    return [
      "web design Sheffield",
      "web development Sheffield",
      "business website design Sheffield",
      "local SEO Sheffield",
      "bespoke website Sheffield",
    ]
  }
  if (area.kind === "curated") {
    return [
      `web design ${area.name}`,
      `website development ${area.name}`,
      `business website design ${area.name}`,
      "bespoke website development UK",
    ]
  }
  return [
    `web design ${area.name}`,
    `website development ${area.name}`,
    `business website design ${area.name}`,
    `web development ${area.name}`,
    `website designer ${area.name}`,
    `custom website development ${area.name}`,
    `SEO web design ${area.name}`,
    `web development business ${area.name}`,
    `build a website from scratch ${area.name}`,
    `bespoke website ${area.regionShort}`,
  ]
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params
  const area = resolveAreaLanding(slug)

  if (!area) return { title: "Area Not Found" }

  const path = areaLandingPath(area.slug)
  const title = area.slug === "sheffield" ? "Web Design Sheffield" : `Web Design ${area.name}`
  const description = metaDescription(area)

  return {
    title,
    description,
    keywords: metaKeywords(area),
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      type: "website",
      locale: "en_GB",
      images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: `Devora web design for ${area.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/devora-office.png"],
    },
  }
}

const commercialServices = ["web-design", "web-development", "local-seo", "website-redesign"]

export default async function AreaLandingPage({ params }: AreaPageProps) {
  const { slug } = await params
  const area = resolveAreaLanding(slug)

  if (!area) notFound()

  const path = areaLandingPath(area.slug)
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Areas We Cover", href: "/areas-we-cover" },
    { name: area.name, href: path },
  ]
  const services = commercialServices
    .map((serviceSlug) => getServicePage(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service))

  const nearbyItems = area.nearbySlugs
    .map((s) => resolveAreaLanding(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))

  const faqs = [
    {
      question: `Do you work with businesses in ${area.name}?`,
      answer: `Yes. Devora works with ${area.name} businesses on web design, development, branding, local SEO and website redesign projects.`,
    },
    {
      question: `Can you help a ${area.name} business rank locally?`,
      answer:
        "We can improve the website foundations: service pages, local content, metadata, schema, internal links and technical crawlability. Local rankings also depend on reviews, citations, authority and Google Business Profile strength.",
    },
    {
      question: "Will the page be unique to our business?",
      answer:
        "Yes. We build around your offer, proof, services, audience and locations. We do not create doorway pages by swapping place names into duplicated copy.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          badge={
            <>
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {area.regionLine}
            </>
          }
          title={
            <>
              Web design {area.name}{" "}
              <span className="heading-accent">built to win trust</span>.
            </>
          }
          aside={area.intro}
          actions={
            <Link href="/#contact">
              <Button size="lg" className="rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors">
                Request a free website audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container page-grid-aside gap-10">
            <div>
              <BrandBadge variant="lime" className="mb-6">Local context</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Why the website has to work <span className="heading-accent">harder</span>.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#0F1729]/60 md:text-lg">
              <p>{area.localContext}</p>
              <p>
                We build pages around service intent, area relevance, proof, internal links and clear calls to action. That gives visitors a better buying journey and gives search engines a cleaner understanding of what the business does and where it works.
              </p>
              <p>
                For {area.name}, useful internal routes include{" "}
                <Link href="/services/web-design" className="font-medium text-[#0F1729] underline underline-offset-4">
                  web design
                </Link>
                ,{" "}
                <Link href="/services/web-development" className="font-medium text-[#0F1729] underline underline-offset-4">
                  web development
                </Link>
                ,{" "}
                <Link href="/services/local-seo" className="font-medium text-[#0F1729] underline underline-offset-4">
                  local SEO
                </Link>{" "}
                and{" "}
                <Link href="/case-studies" className="font-medium text-[#0F1729] underline underline-offset-4">
                  case studies
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="section-dark section-shell-dark page-section">
          <div className="page-container">
            <div className="mb-10 max-w-3xl">
              <BrandBadge variant="navy" className="mb-6 border-white/10 bg-white/8 text-white">Services in {area.name}</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-white">Search-ready website <span className="heading-accent after:bg-[#CCFF00]">services</span>.</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8">
                  <h3 className="text-lg font-medium text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{service.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container page-grid-2 gap-10">
            <div>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Businesses we serve in {area.name}</h2>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {area.businessTypes.map((type) => (
                  <div key={type} className="rounded-lg border border-[#0F1729]/8 bg-white/60 p-4 text-sm font-medium text-[#0F1729]">
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Nearby areas</h2>
              <div className="mt-8 grid gap-2 sm:grid-cols-2">
                {nearbyItems.map((nearbyArea) => (
                  <Link
                    key={nearbyArea.slug}
                    href={areaLandingPath(nearbyArea.slug)}
                    className="group rounded-lg border border-[#0F1729]/8 bg-white/60 p-4 transition-colors hover:border-[#0F1729]/15 hover:bg-white"
                  >
                    <span className="font-medium text-[#0F1729]">{nearbyArea.name}</span>
                    <span className="block pt-1 text-xs text-[#0F1729]/45">{nearbyArea.regionLine}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-dark section-shell-dark page-section">
          <div className="page-container page-grid-aside gap-10">
            <div>
              <BrandBadge variant="navy" className="mb-6 border-white/10 bg-white/8 text-white">FAQs</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-white">Local SEO <span className="heading-accent after:bg-[#CCFF00]">questions</span>.</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <summary className="cursor-pointer text-base font-medium text-white">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-white/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={<>Ready to grow in <span className="heading-accent after:bg-[#CCFF00]">{area.name}</span>?</>}
          description="Tell us about your business and current website. We will outline the strongest local SEO and conversion gains."
          linkLabel="request a website audit"
        />
      </main>
      <JsonLd
        data={graphSchema([
          localBusinessSchema(),
          webPageSchema({ path, name: `Web design ${area.name}`, description: area.intro }),
          serviceSchema({
            path,
            name: `Web design and development in ${area.name}`,
            description: area.intro,
            areaServed: area.name,
          }),
          faqSchema(faqs, path),
          breadcrumbSchema(
            breadcrumbs.map((item) => ({
              name: item.name,
              url: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
            })),
          ),
        ])}
      />
      <Footer />
    </div>
  )
}
