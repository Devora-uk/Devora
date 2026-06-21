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
import { getIndustryPage, getServicePage, industryPages, SITE_URL } from "@/lib/seo-pages"
import { absoluteUrl, breadcrumbSchema, faqSchema, graphSchema, serviceSchema, webPageSchema } from "@/lib/schema"

type IndustryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getIndustryPage(slug)

  if (!page) return { title: "Industry Not Found" }

  const path = `/industries/${page.slug}`

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

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const page = getIndustryPage(slug)

  if (!page) notFound()

  const path = `/industries/${page.slug}`
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries", href: "/industries" },
    { name: page.title, href: path },
  ]

  const relatedLinks = (page.relatedServices || [])
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related))
    .map((related) => ({
      href: `/services/${related.slug}`,
      label: "Related service",
      title: related.title,
    }))

  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          category="Industry websites"
          title={<>{page.h1}.</>}
          tagline={heroTagline(page.metaDescription)}
          aside={page.intro}
          actions={
            <Link href="/#contact">
              <Button
                size="lg"
                className="rounded-full bg-white px-7 font-medium text-black hover:bg-white/90"
              >
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <SeoPageContent page={page} relatedLinks={relatedLinks} />

        <PageCta
          title="Need a website that fits your market?"
          description="We will map the service pages, proof, industry content and conversion routes your buyers need before they enquire."
          linkLabel="book a discovery call"
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
