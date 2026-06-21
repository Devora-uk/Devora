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
import { SeoPageContent } from "@/components/seo-page-content"
import { getIndustryPage, getServicePage, servicePages, SITE_URL } from "@/lib/seo-pages"
import { absoluteUrl, breadcrumbSchema, faqSchema, graphSchema, serviceSchema, webPageSchema } from "@/lib/schema"

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) return { title: "Service Not Found" }

  const path = `/services/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: `${page.metaTitle} | Devora`,
      description: page.metaDescription,
      url: absoluteUrl(path),
      type: "website",
      locale: "en_GB",
      images: [{ url: "/devora-office.png", width: 1200, height: 630, alt: `${page.title} by Devora` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.metaTitle} | Devora`,
      description: page.metaDescription,
      images: ["/devora-office.png"],
    },
    robots: { index: true, follow: true },
  }
}

function heroTagline(description: string) {
  const sentence = description.split(". ").find(Boolean)
  return sentence ? `${sentence.replace(/\.$/, "")}.` : description
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const page = getServicePage(slug)

  if (!page) notFound()

  const path = `/services/${page.slug}`
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: page.title, href: path },
  ]

  const relatedLinks = [
    ...(page.relatedServices || [])
      .map((relatedSlug) => getServicePage(relatedSlug))
      .filter(Boolean)
      .map((related) => ({
        href: `/services/${related!.slug}`,
        label: "Related service",
        title: related!.title,
      })),
    ...(page.relatedIndustries || [])
      .map((relatedSlug) => getIndustryPage(relatedSlug))
      .filter(Boolean)
      .map((related) => ({
        href: `/industries/${related!.slug}`,
        label: "Industry page",
        title: related!.title,
      })),
  ]

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          category="Commercial services"
          title={<>{page.h1}.</>}
          tagline={heroTagline(page.metaDescription)}
          aside={page.intro}
          actions={
            <>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-white px-7 font-medium text-black hover:bg-white/90 sm:w-auto"
                >
                  Request a free website audit
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-white/25 bg-transparent px-7 font-medium text-white hover:border-white/45 hover:bg-white/5 sm:w-auto"
                >
                  View case studies
                </Button>
              </Link>
            </>
          }
        />

        <SeoPageContent
          page={page}
          relatedLinks={relatedLinks}
          showFurtherReading
        />

        <PageCta
          title="Want a website built properly?"
          description="Send over the current site, the business goal and the pages you think matter. We will tell you where the strongest SEO and conversion gains are likely to be."
          linkLabel="get a website quote"
        />
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({ path, name: page.h1, description: page.metaDescription }),
          serviceSchema({ path, name: page.title, description: page.intro }),
          faqSchema(page.faqs, path),
          breadcrumbSchema(breadcrumbs.map((item) => ({ name: item.name, url: `${SITE_URL}${item.href === "/" ? "" : item.href}` }))),
        ])}
      />
      <Footer />
    </div>
  )
}
