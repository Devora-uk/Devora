import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { JsonLd } from "@/components/JsonLd"
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary px-4 pb-16 pt-32 text-primary-foreground md:px-6 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 border border-primary-foreground/20 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {area.regionLine}
                </div>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] md:text-7xl">
                  Web design {area.name}
                  <span className="block font-serif font-normal italic tracking-[-0.06em] text-primary-foreground/80">built to win trust.</span>
                </h1>
              </div>
              <div className="border-l border-primary-foreground/20 pl-6">
                <p className="text-lg leading-8 text-primary-foreground/85">{area.intro}</p>
                <Link href="/#contact" className="mt-7 inline-flex">
                  <Button size="lg" className="rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90">
                    Request a free website audit
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Local context</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Why the website has to work harder.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>{area.localContext}</p>
              <p>
                We build pages around service intent, area relevance, proof, internal links and clear calls to action. That gives visitors a better buying journey and gives search engines a cleaner understanding of what the business does and where it works.
              </p>
              <p>
                For {area.name}, useful internal routes include{" "}
                <Link href="/services/web-design" className="font-bold text-foreground underline underline-offset-4">
                  web design
                </Link>
                ,{" "}
                <Link href="/services/web-development" className="font-bold text-foreground underline underline-offset-4">
                  web development
                </Link>
                ,{" "}
                <Link href="/services/local-seo" className="font-bold text-foreground underline underline-offset-4">
                  local SEO
                </Link>{" "}
                and{" "}
                <Link href="/case-studies" className="font-bold text-foreground underline underline-offset-4">
                  case studies
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Services in {area.name}</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Search-ready website services.</h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white p-6 hover:bg-foreground">
                  <h3 className="text-2xl font-black tracking-[-0.03em] group-hover:text-background">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-background/75">{service.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">Businesses we serve in {area.name}</h2>
              <div className="mt-8 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
                {area.businessTypes.map((type) => (
                  <div key={type} className="bg-white p-5 text-sm font-bold text-foreground">
                    {type}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">Nearby areas</h2>
              <div className="mt-8 grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
                {nearbyItems.map((nearbyArea) => (
                  <Link
                    key={nearbyArea.slug}
                    href={areaLandingPath(nearbyArea.slug)}
                    className="group bg-white p-5 hover:bg-foreground"
                  >
                    <span className="font-bold group-hover:text-background">{nearbyArea.name}</span>
                    <span className="block pt-1 text-xs text-muted-foreground group-hover:text-background/70">{nearbyArea.regionLine}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">FAQs</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Local SEO questions.</h2>
            </div>
            <div className="space-y-px overflow-hidden border border-black/10 bg-black/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="bg-white p-6">
                  <summary className="cursor-pointer text-lg font-black tracking-[-0.02em]">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
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
