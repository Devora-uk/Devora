import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { PageEditorialSection } from "@/components/page-editorial-section"
import { industryPages, SITE_URL } from "@/lib/seo-pages"
import { breadcrumbSchema, graphSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Industry Website Design | Trades, Recruiters & Services",
  description:
    "Industry website design for trades, recruiters, professional services, education, property maintenance and startup businesses across the UK.",
  alternates: { canonical: `${SITE_URL}/industries` },
  openGraph: {
    title: "Industry Website Design | Devora",
    description:
      "Website structures for industries where trust, local visibility and conversion quality matter.",
    url: `${SITE_URL}/industries`,
    images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: "Devora industry website design pages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Website Design | Devora",
    description: "Websites for trades, recruiters, professional services, education and startups.",
    images: ["/devora-office.png"],
  },
}

export default function IndustriesPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          category="Industry websites"
          title="Website design for service-led industries."
          tagline="Sector-specific pages that help buyers find proof, understand the service and enquire with less friction."
          aside="Sector-specific pages help buyers find the right proof, understand the service and move towards an enquiry with less friction."
          actions={
            <Link href="/#contact">
              <Button
                size="lg"
                className="rounded-full bg-white px-7 font-medium text-black hover:bg-white/90"
              >
                Discuss your sector
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <section className="bg-[var(--cream)] page-section text-[var(--navy)]">
          <div className="page-container">
            <h2 className="max-w-2xl text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight">
              Built for your industry
            </h2>

            <ul className="mt-10 divide-y divide-[var(--navy)]/10 border-y border-[var(--navy)]/10">
              {industryPages.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex items-start justify-between gap-6 py-6 transition-colors hover:bg-white/40 md:py-8"
                  >
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                        {industry.title}
                      </h3>
                      <p className="mt-3 text-base font-medium leading-7 text-[var(--navy)]/80 md:text-lg">
                        {industry.intro}
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 pt-1 text-sm font-medium lowercase transition-colors group-hover:underline">
                      find out more
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <PageCta
          title="Not sure which page fits your sector?"
          description="Tell us about your business and we will point you to the right approach, or build something bespoke."
          linkLabel="discuss your project"
        />
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({
            path: "/industries",
            name: "Industry website design",
            description: "Industry website design for service-led businesses by Devora.",
          }),
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, url: `${SITE_URL}${item.href === "/" ? "" : item.href}` }))),
        ])}
      />
      <Footer />
    </div>
  )
}
