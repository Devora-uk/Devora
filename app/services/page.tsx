import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { servicePages, SITE_URL } from "@/lib/seo-pages"
import { breadcrumbSchema, graphSchema, serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Web Design & Development Services Sheffield",
  description:
    "Bespoke web design, web development, branding, local SEO, website redesign and Next.js development for Sheffield and UK businesses.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Web Design & Development Services Sheffield | Devora",
    description:
      "Premium, conversion-led website services for Sheffield, South Yorkshire and UK businesses.",
    url: `${SITE_URL}/services`,
    images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: "Devora website services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services Sheffield | Devora",
    description: "Bespoke website services built for search, speed and enquiries.",
    images: ["/devora-office.png"],
  },
}

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          badge="Services"
          title={
            <>
              Web design and development for{" "}
              <span className="heading-accent">serious businesses</span>.
            </>
          }
          aside="Devora plans, designs, builds and improves websites that need to look sharper, load faster, rank better and generate more useful enquiries."
          actions={
            <Link href="/#contact">
              <Button size="lg" className="rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors">
                Discuss your website
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container">
            <BrandBadge variant="lime" className="mb-6">
              What we offer
            </BrandBadge>
            <h2 className="section-heading md:section-heading-tablet max-w-2xl text-[#0F1729]">
              Services built for <span className="heading-accent">growth</span>
            </h2>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-[#0F1729]/8 bg-white/60 p-6 transition-all hover:border-[#0F1729]/15 hover:bg-white"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <CheckCircle2 className="h-4 w-4 text-[#0F1729]/35" aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 text-[#0F1729]/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0F1729]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-[-0.02em] text-[#0F1729]">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#0F1729]/55">{service.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={
            <>
              Ready to build something{" "}
              <span className="heading-accent after:bg-[#CCFF00]">properly</span>?
            </>
          }
          description="Send over the current site, the business goal and the pages you think matter. We will tell you where the strongest gains are likely to be."
          linkLabel="get a website quote"
        />
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({
            path: "/services",
            name: "Web design and development services",
            description: "Web design, development, branding, local SEO and website redesign services from Devora.",
          }),
          ...servicePages.map((page) =>
            serviceSchema({
              path: `/services/${page.slug}`,
              name: page.title,
              description: page.intro,
            }),
          ),
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, url: `${SITE_URL}${item.href === "/" ? "" : item.href}` }))),
        ])}
      />
      <Footer />
    </div>
  )
}
