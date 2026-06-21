import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { servicePages, SITE_URL } from "@/lib/seo-pages"
import { breadcrumbSchema, graphSchema, serviceSchema, webPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Web Design & Development Services | Devora",
  description:
    "Bespoke web design, web development, branding, local SEO, website redesign and Next.js development for UK businesses.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Web Design & Development Services | Devora",
    description:
      "Premium, conversion-led website services for UK businesses.",
    url: `${SITE_URL}/services`,
    images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: "Devora website services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services | Devora",
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
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          category="Commercial services"
          title="Web design and development."
          tagline="Helping UK businesses look sharper, rank better and win more enquiries."
          aside="Devora plans, designs, builds and improves websites that need to look sharper, load faster, rank better and generate more useful enquiries."
          actions={
            <Link href="/#contact">
              <Button
                size="lg"
                className="rounded-full bg-white px-7 font-medium text-black hover:bg-white/90"
              >
                Discuss your website
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <section className="bg-[var(--cream)] page-section text-[var(--navy)]">
          <div className="page-container">
            <h2 className="max-w-2xl text-balance text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-[1.12] tracking-tight">
              How we can help you
            </h2>

            <ul className="mt-10 divide-y divide-[var(--navy)]/10 border-y border-[var(--navy)]/10">
              {servicePages.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-start justify-between gap-6 py-6 transition-colors hover:bg-white/40 md:py-8"
                  >
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-base font-medium leading-7 text-[var(--navy)]/80 md:text-lg">
                        {service.intro}
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
          title="Ready to build something properly?"
          description="Send over the current site, the business goal and the pages you think matter. We will tell you where the strongest gains are likely to be."
          linkLabel="get a website quote"
        />
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({
            path: "/services",
            name: "Web design and development services",
            description: "Bespoke web design, web development, branding, local SEO and website redesign services for UK businesses.",
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
