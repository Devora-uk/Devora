import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/JsonLd"
import { BrandBadge } from "@/components/brand-badge"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
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

  const relatedServices = (page.relatedServices || [])
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter((related): related is NonNullable<typeof related> => Boolean(related))

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumbs={breadcrumbs}
          badge="Industry"
          title={page.h1}
          aside={page.intro}
          actions={
            <Link href="/#contact">
              <Button size="lg" className="rounded-full bg-[#0F1729] px-7 font-medium text-white hover:bg-[#162038] transition-colors">
                Start a project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          }
        />

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container page-grid-3 gap-8 md:gap-10">
            <div>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Who it serves</h2>
              <ul className="mt-8 space-y-3">
                {page.audience.map((item) => (
                  <li key={item} className="flex gap-3 border-b border-[#0F1729]/8 pb-3 text-sm text-[#0F1729]/60">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F1729]/35" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">What matters</h2>
              <ul className="mt-8 space-y-3">
                {page.included.map((item) => (
                  <li key={item} className="border-b border-[#0F1729]/8 pb-3 text-sm text-[#0F1729]/60">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">How we build it</h2>
              <ol className="mt-8 space-y-3">
                {page.process.map((item, index) => (
                  <li key={item} className="border-b border-[#0F1729]/8 pb-3 text-sm text-[#0F1729]/60">
                    <span className="mr-3 text-[#0F1729]/30">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section-dark section-shell-dark page-section">
          <div className="page-container page-grid-aside gap-10">
            <div>
              <BrandBadge variant="navy" className="mb-6 border-white/10 bg-white/8 text-white">Sector strategy</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-white">Built around how buyers <span className="heading-accent after:bg-[#CCFF00]">choose</span>.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-white/60 md:text-lg">
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                For the full build, see our{" "}
                <Link href="/services/web-design" className="font-medium text-white underline underline-offset-4">web design</Link>,{" "}
                <Link href="/services/web-development" className="font-medium text-white underline underline-offset-4">web development</Link> and{" "}
                <Link href="/services/local-seo" className="font-medium text-white underline underline-offset-4">local SEO</Link> services.
              </p>
            </div>
          </div>
        </section>

        <section className="section-cream section-shell-cream page-section">
          <div className="page-container page-grid-aside gap-10">
            <div>
              <BrandBadge variant="lime" className="mb-6">Related services</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-[#0F1729]">Support <span className="heading-accent">pages</span>.</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {relatedServices.map((related) => (
                <Link key={related.slug} href={`/services/${related.slug}`} className="group rounded-xl border border-[#0F1729]/8 bg-white/60 p-6 transition-colors hover:border-[#0F1729]/15 hover:bg-white">
                  <h3 className="text-lg font-medium text-[#0F1729]">{related.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#0F1729]/55">{related.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-dark section-shell-dark page-section">
          <div className="page-container page-grid-aside gap-10">
            <div>
              <BrandBadge variant="navy" className="mb-6 border-white/10 bg-white/8 text-white">FAQs</BrandBadge>
              <h2 className="section-heading md:section-heading-tablet text-white">Sector <span className="heading-accent after:bg-[#CCFF00]">questions</span>.</h2>
            </div>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <summary className="cursor-pointer text-base font-medium text-white">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-white/60">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          title={<>Need a website that fits your <span className="heading-accent after:bg-[#CCFF00]">market</span>?</>}
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
