import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"
import { PageHero } from "@/components/page-hero"
import { PageCta } from "@/components/page-cta"
import type { Metadata } from "next"
import { JsonLd } from "@/components/JsonLd"
import { faqs } from "@/lib/faq-content"
import { absoluteUrl, breadcrumbSchema, faqSchema, graphSchema, webPageSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo-pages"
import { resolveTitle } from "@/lib/seo-metadata"

export const metadata: Metadata = {
  title: resolveTitle("FAQ | Frequently Asked Questions"),
  description: "Find answers to common questions about our web design and development process, startup branding and custom development, technologies, and how we build websites for businesses across the UK.",
  alternates: { canonical: absoluteUrl("/faq") },
  openGraph: {
    title: "FAQ | Frequently Asked Questions | Devora",
    description: "Find answers to common questions about our startup web design and development process, services, and website builds.",
    url: absoluteUrl("/faq"),
  },
  robots: { index: true, follow: true },
}

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1729]">
      <Header />
      <main className="flex-1">
        <PageHero
          badge="FAQ"
          title={
            <>
              Questions worth asking before you{" "}
              <span className="heading-accent">rebuild</span>.
            </>
          }
          description="Everything you need to know about working with Devora: our process, services, and how we build websites that matter."
        />
        <FAQ />
        <PageCta
          title={
            <>
              Still have{" "}
              <span className="heading-accent after:bg-[#CCFF00]">questions</span>?
            </>
          }
          description="Get in touch and we will answer anything not covered here, with no obligation."
          linkLabel="contact us"
        />
      </main>
      <JsonLd
        data={graphSchema([
          webPageSchema({
            path: "/faq",
            name: "Frequently Asked Questions",
            description:
              "Answers to common questions about Devora web design, development, process and support.",
          }),
          faqSchema([...faqs], "/faq"),
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "FAQ", url: absoluteUrl("/faq") },
          ]),
        ])}
      />
      <Footer />
    </div>
  )
}
