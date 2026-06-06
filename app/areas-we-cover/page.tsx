import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import { areaPages } from "@/lib/area-pages"
import { getLocationsByCountry, type LocationArea } from "@/lib/locations"
import { areaLandingPath } from "@/lib/resolve-area-landing"
import { resolveTitle } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: resolveTitle("Areas We Cover | UK Web Design & Website Development | Devora"),
  description:
    "Devora builds bespoke business websites from the ground up for companies across the UK. Browse every major city and region we cover.",
  keywords: [
    "areas we cover web design",
    "UK web design business",
    "website development UK",
    "business website design UK",
    "bespoke website development UK",
    "web design near me",
    "local SEO website development",
    "web development company UK",
    "build a website from scratch UK",
  ],
  alternates: {
    canonical: "https://www.devora.co.uk/areas-we-cover",
  },
  openGraph: {
    title: "Areas We Cover | UK Web Design & Website Development | Devora",
    description: "Bespoke business website design and development from the ground up, serving Sheffield and major UK locations.",
    url: "https://www.devora.co.uk/areas-we-cover",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora UK web design and website development areas covered",
      },
    ],
  },
}

const regionalAreaPages = areaPages.filter((p) => p.slug === "yorkshire" || p.slug === "uk")

function hrefForLocation(slug: string): string {
  return areaLandingPath(slug)
}

function sortByName(a: LocationArea, b: LocationArea) {
  return a.name.localeCompare(b.name, "en-GB")
}

const countryHeading: Record<LocationArea["country"], string> = {
  England: "England",
  Scotland: "Scotland",
  Wales: "Wales",
  "Northern Ireland": "Northern Ireland",
}

export default function AreasWeCoverPage() {
  const byCountry = getLocationsByCountry()
  const cityCount = Object.values(byCountry).reduce((n, list) => n + list.length, 0)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.devora.co.uk/areas-we-cover#webpage",
        url: "https://www.devora.co.uk/areas-we-cover",
        name: "Areas We Cover",
        description: "UK service area page for business website design and website development from the ground up.",
        isPartOf: {
          "@id": "https://www.devora.co.uk/#website",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.devora.co.uk/areas-we-cover#website-development-service",
        name: "Bespoke business website design and development",
        serviceType: ["Website Design", "Website Development", "Custom Website Builds", "Local SEO"],
        provider: {
          "@id": "https://www.devora.co.uk/#organization",
        },
        areaServed: [
          ...Object.values(byCountry)
            .flat()
            .map((location) => ({
              "@type": "City" as const,
              name: location.name,
              addressRegion: location.region,
              addressCountry: "GB",
            })),
          ...regionalAreaPages.map((p) => ({
            "@type": "AdministrativeArea" as const,
            name: p.name,
            addressRegion: p.region,
            addressCountry: "GB",
          })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.devora.co.uk/areas-we-cover#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.devora.co.uk",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Areas We Cover",
            item: "https://www.devora.co.uk/areas-we-cover",
          },
        ],
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0F1729]">
      <Header />

      <main className="flex-1">
        <PageHero
          badge="UK coverage"
          title={
            <>
              Areas we <span className="heading-accent">cover</span>.
            </>
          }
          description="We work remotely with businesses across the UK. Pick your city or region. Each page explains how we approach web design, development and local SEO for that area."
          actions={
            <>
              <Link href="/#contact">
                <Button size="lg" className="rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors">
                  Start a project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/areas-we-cover/sheffield">
                <Button size="lg" variant="outline" className="rounded-full border-[#0F1729]/20 bg-transparent font-medium text-[#0F1729] hover:border-[#0F1729]/40 transition-all">
                  Sheffield
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </>
          }
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container">
            <BrandBadge variant="lime" className="mb-6">
              UK regions
            </BrandBadge>
            <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">
              Broader <span className="heading-accent">coverage</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#0F1729]/55">
              Regional and national service-area pages for broader searches.
            </p>
            <p className="mt-6 text-sm text-[#0F1729]/55">
              <span className="font-medium text-[#0F1729]">{cityCount + regionalAreaPages.length}</span> cities and regions listed below.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {regionalAreaPages.map((location) => (
                <Link
                  key={location.slug}
                  href={`/areas-we-cover/${location.slug}`}
                  className="group rounded-lg border border-[#0F1729]/8 bg-white/60 px-4 py-3 text-sm transition-colors hover:border-[#0F1729]/15 hover:bg-white"
                >
                  <span className="font-medium text-[#0F1729]">{location.name}</span>
                  <span className="mt-0.5 block text-xs text-[#0F1729]/45">
                    {location.region}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {(Object.keys(byCountry) as LocationArea["country"][]).map((country, index) => {
          const locations = [...byCountry[country]].sort(sortByName)
          const isDark = index % 2 === 1

          return (
            <section
              key={country}
              className={isDark ? "section-dark section-shell-dark page-section" : "section-cream section-shell-cream page-section"}
            >
              <div className="page-container">
                <h2 className={`section-heading ${isDark ? "text-white" : "text-[#0F1729]"}`}>
                  {countryHeading[country]}
                </h2>

                <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={hrefForLocation(location.slug)}
                      className={`group rounded-lg border px-4 py-3 text-sm transition-colors ${
                        isDark
                          ? "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                          : "border-[#0F1729]/8 bg-white/60 hover:border-[#0F1729]/15 hover:bg-white"
                      }`}
                    >
                      <span className={`font-medium ${isDark ? "text-white" : "text-[#0F1729]"}`}>
                        {location.name}
                      </span>
                      <span className={`mt-0.5 block text-xs ${isDark ? "text-white/45" : "text-[#0F1729]/45"}`}>
                        {location.region}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        <PageCta
          title={
            <>
              Can&apos;t find your{" "}
              <span className="heading-accent after:bg-[#CCFF00]">area</span>?
            </>
          }
          description="We work remotely across the UK. Get in touch and we will confirm we can help."
          linkLabel="contact us"
        />
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Footer />
    </div>
  )
}
