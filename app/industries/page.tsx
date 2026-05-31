import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { JsonLd } from "@/components/JsonLd"
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-background px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Industries</p>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] md:text-7xl">
                  Website design for service-led industries.
                </h1>
              </div>
              <div className="border-l border-black/10 pl-6">
                <p className="text-lg leading-8 text-muted-foreground">
                  Sector-specific pages help buyers find the right proof, understand the service and move towards an enquiry with less friction.
                </p>
                <Link href="/#contact" className="mt-7 inline-flex">
                  <Button size="lg" className="rounded-full bg-foreground px-7 font-bold text-background hover:bg-accent">
                    Discuss your sector
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {industryPages.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group bg-white p-6 transition-colors hover:bg-foreground">
                <div className="mb-8 flex justify-end">
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-background" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-black leading-tight tracking-[-0.03em] group-hover:text-background">{industry.title}</h2>
                <p className="mt-4 text-sm leading-6 text-muted-foreground group-hover:text-background/75">{industry.intro}</p>
              </Link>
            ))}
          </div>
        </section>
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
