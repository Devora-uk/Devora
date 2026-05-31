import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { JsonLd } from "@/components/JsonLd"
import { getIndustryPage, getServicePage, servicePages, SITE_URL } from "@/lib/seo-pages"
import { ServiceFurtherReading } from "@/components/service-further-reading"
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

  const relatedServices = (page.relatedServices || [])
    .map((relatedSlug) => getServicePage(relatedSlug))
    .filter(Boolean)

  const relatedIndustries = (page.relatedIndustries || [])
    .map((relatedSlug) => getIndustryPage(relatedSlug))
    .filter(Boolean)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-primary px-4 pb-16 pt-32 text-primary-foreground md:px-6 md:pb-24 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-primary-foreground/70">Devora service</p>
                <h1 className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] md:text-7xl">{page.h1}</h1>
              </div>
              <div className="border-l border-primary-foreground/20 pl-6">
                <p className="text-lg leading-8 text-primary-foreground/85">{page.intro}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <Link href="/#contact">
                    <Button size="lg" className="w-full rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90 sm:w-auto">
                      Request a free website audit
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button size="lg" variant="outline" className="w-full rounded-full border-primary-foreground bg-transparent px-7 font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto">
                      View case studies
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Commercial fit</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Who this is for</h2>
            </div>
            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
              {page.audience.map((item) => (
                <div key={item} className="bg-white p-5">
                  <CheckCircle2 className="mb-5 h-5 w-5 text-accent" aria-hidden="true" />
                  <p className="font-bold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">What is included</h2>
              <ul className="mt-8 space-y-3">
                {page.included.map((item) => (
                  <li key={item} className="border-b border-black/10 pb-3 text-sm font-semibold text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">Why Devora</h2>
              <ul className="mt-8 space-y-3">
                {page.why.map((item) => (
                  <li key={item} className="border-b border-black/10 pb-3 text-sm font-semibold text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em]">Process</h2>
              <ol className="mt-8 space-y-3">
                {page.process.map((item, index) => (
                  <li key={item} className="border-b border-black/10 pb-3 text-sm font-semibold text-muted-foreground">
                    <span className="mr-3 font-serif text-xl italic text-accent">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.68fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Buyer context</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Built for search, trust and enquiries.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                Related routes are part of the SEO structure too. Explore{" "}
                <Link href="/areas-we-cover/sheffield" className="font-bold text-foreground underline underline-offset-4">web design in Sheffield</Link>,{" "}
                <Link href="/case-studies" className="font-bold text-foreground underline underline-offset-4">case studies</Link> and{" "}
                <Link href="/blog" className="font-bold text-foreground underline underline-offset-4">website strategy articles</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted/35 px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
              <div>
                <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">Internal links</p>
                <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Useful next pages.</h2>
              </div>
              <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
                {relatedServices.map((related) => related && (
                  <Link key={related.slug} href={`/services/${related.slug}`} className="group bg-white p-6 hover:bg-foreground">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Related service</p>
                    <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] group-hover:text-background">{related.title}</h3>
                  </Link>
                ))}
                {relatedIndustries.map((related) => related && (
                  <Link key={related.slug} href={`/industries/${related.slug}`} className="group bg-white p-6 hover:bg-foreground">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-accent">Industry page</p>
                    <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] group-hover:text-background">{related.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceFurtherReading serviceSlug={page.slug} />

        <section className="bg-background px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr]">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.24em] text-accent">FAQs</p>
              <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] md:text-6xl">Questions buyers ask.</h2>
            </div>
            <div className="space-y-px overflow-hidden border border-black/10 bg-black/10">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group bg-white p-6">
                  <summary className="cursor-pointer text-lg font-black tracking-[-0.02em]">{faq.question}</summary>
                  <p className="mt-4 leading-7 text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-6 py-20 text-primary-foreground">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">Want a website built properly?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/85">
              Send over the current site, the business goal and the pages you think matter. We will tell you where the strongest SEO and conversion gains are likely to be.
            </p>
            <Link href="/#contact" className="mt-8 inline-flex">
              <Button size="lg" className="rounded-full bg-background px-7 font-bold text-foreground hover:bg-background/90">
                Get a website quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
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
