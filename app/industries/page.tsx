import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
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
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          badge="Industries"
          title={
            <>
              Website design for{" "}
              <span className="heading-accent">service-led industries</span>.
            </>
          }
          aside="Sector-specific pages help buyers find the right proof, understand the service and move towards an enquiry with less friction."
          actions={
            <Link href="/#contact">
              <Button size="lg" className="rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors">
                Discuss your sector
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container">
            <BrandBadge variant="lime" className="mb-6">
              Sectors we work with
            </BrandBadge>
            <h2 className="section-heading md:section-heading-tablet max-w-2xl text-[#0F1729]">
              Built for your <span className="heading-accent">industry</span>
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {industryPages.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-[#0F1729]/8 bg-white/60 p-6 transition-all hover:border-[#0F1729]/15 hover:bg-white"
                >
                  <div className="mb-6 flex justify-end">
                    <ArrowUpRight
                      className="h-4 w-4 text-[#0F1729]/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0F1729]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-[#0F1729]">{industry.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#0F1729]/55">{industry.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={
            <>
              Not sure which page fits{" "}
              <span className="heading-accent after:bg-[#CCFF00]">your sector</span>?
            </>
          }
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
