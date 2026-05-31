import { ArrowRight, Globe2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { areaPages } from "@/lib/area-pages"
import { getLocationsByCountry, type LocationArea } from "@/lib/locations"
import { areaLandingPath } from "@/lib/resolve-area-landing"

export const metadata: Metadata = {
  title: "Areas We Cover | UK Web Design & Website Development | Devora",
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
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-background px-4 pb-12 pt-32 md:px-6 md:pb-16 md:pt-40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-4 inline-flex items-center gap-2 border border-black/10 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-foreground shadow-sm">
              <Globe2 className="h-4 w-4 text-accent" aria-hidden="true" />
              UK coverage
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-foreground md:text-6xl">
              Areas we cover
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              We work remotely with businesses across the UK. Pick your city or region; each page explains how we approach web design, development and local SEO for that area.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/#contact">
                <Button size="lg" className="w-full rounded-full bg-foreground px-7 font-bold text-background hover:bg-accent sm:w-auto">
                  Start a project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/areas-we-cover/sheffield">
                <Button size="lg" variant="outline" className="w-full rounded-full border-black/15 bg-white px-7 font-bold hover:border-accent hover:text-accent-foreground sm:w-auto">
                  Sheffield
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm font-semibold text-foreground/70">
              <span className="text-accent">{cityCount + regionalAreaPages.length}</span> cities and regions. Jump to your area below.
            </p>
          </div>
        </section>

        <section className="border-t border-black/10 bg-muted/35 px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-foreground md:text-3xl">
                UK regions
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Broader service-area pages for regional and national searches.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {regionalAreaPages.map((location) => (
                <Link
                  key={location.slug}
                  href={`/areas-we-cover/${location.slug}`}
                  className="group bg-white px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {location.name}
                  <span className="mt-1 block text-xs font-normal text-muted-foreground group-hover:text-accent-foreground/90">
                    {location.region}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {(Object.keys(byCountry) as LocationArea["country"][]).map((country) => {
          const locations = [...byCountry[country]].sort(sortByName)
          return (
            <section
              key={country}
              className="border-t border-black/10 bg-background px-4 py-12 md:px-6 md:py-16"
            >
              <div className="mx-auto max-w-7xl">
                <h2 className="mb-6 text-2xl font-black tracking-[-0.03em] text-foreground md:text-3xl">
                  {countryHeading[country]}
                </h2>

                <div className="grid grid-cols-2 gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={hrefForLocation(location.slug)}
                      className="group bg-white px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      {location.name}
                      <span className="mt-1 block text-xs font-normal text-muted-foreground group-hover:text-background/75">
                        {location.region}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
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
