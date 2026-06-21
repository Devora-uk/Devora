import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { PageEditorialSection } from "@/components/page-editorial-section"
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
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          category={area.regionLine}
          title={`Web design ${area.name}.`}
          tagline={`Bespoke websites for ${area.name} businesses that need stronger SEO, sharper positioning and better enquiries.`}
          aside={area.intro}
          actions={
            <Link href="/#contact">
              <Button
                size="lg"
                className="rounded-full bg-white px-7 font-medium text-black hover:bg-white/90"
              >
                Request a free website audit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <PageEditorialSection title="Why the website has to work harder" variant="cream">
          <p>{area.localContext}</p>
          <p>
            We build pages around service intent, area relevance, proof, internal links and clear
            calls to action. That gives visitors a better buying journey and gives search engines a
            cleaner understanding of what the business does and where it works.
          </p>
          <p>
            For {area.name}, useful internal routes include{" "}
            <Link href="/services/web-design" className="underline underline-offset-4">
              web design
            </Link>
            ,{" "}
            <Link href="/services/web-development" className="underline underline-offset-4">
              web development
            </Link>
            ,{" "}
            <Link href="/services/local-seo" className="underline underline-offset-4">
              local SEO
            </Link>{" "}
            and{" "}
            <Link href="/case-studies" className="underline underline-offset-4">
              case studies
            </Link>
            .
          </p>
        </PageEditorialSection>

        <PageEditorialSection title={`Services in ${area.name}`} variant="black">
          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex flex-col gap-1 transition-colors hover:underline"
                >
                  <span className="text-lg font-medium text-white">{service.title}</span>
                  <span className="text-base text-white/75">{service.intro}</span>
                </Link>
              </li>
            ))}
          </ul>
        </PageEditorialSection>

        <PageEditorialSection title={`Businesses we serve in ${area.name}`} variant="cream">
          <ul className="grid gap-3 sm:grid-cols-2">
            {area.businessTypes.map((type) => (
              <li key={type} className="font-medium">
                {type}
              </li>
            ))}
          </ul>
        </PageEditorialSection>

        <PageEditorialSection title="Nearby areas" variant="black">
          <ul className="space-y-4">
            {nearbyItems.map((nearbyArea) => (
              <li key={nearbyArea.slug}>
                <Link
                  href={areaLandingPath(nearbyArea.slug)}
                  className="group inline-flex flex-col gap-1 transition-colors hover:underline"
                >
                  <span className="text-lg font-medium text-white">{nearbyArea.name}</span>
                  <span className="text-sm text-white/65">{nearbyArea.regionLine}</span>
                </Link>
              </li>
            ))}
          </ul>
        </PageEditorialSection>

        <PageEditorialSection title="Local SEO questions" variant="cream" id="faqs">
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-bold tracking-tight text-[var(--navy)]">
                  {faq.question}
                </h3>
                <p className="mt-3">{faq.answer}</p>
              </div>
            ))}
          </div>
        </PageEditorialSection>

        <PageCta
          title={`Ready to grow in ${area.name}?`}
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
