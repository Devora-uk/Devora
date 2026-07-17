import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhoWeAre } from "@/components/who-we-are"
import { OurWork } from "@/components/our-work"
import { About } from "@/components/about"
import { OurServices } from "@/components/our-services"
import { SuccessStories } from "@/components/success-stories"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { JsonLd } from "@/components/JsonLd"
import { resolveTitle } from "@/lib/seo-metadata"
import {
  breadcrumbSchema,
  faqSchema,
  graphSchema,
  localBusinessSchema,
  organisationSchema,
  serviceSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema"

export const metadata: Metadata = {
  title: resolveTitle("Bespoke Websites for Businesses of All Scales | Devora"),
  description: "Devora builds bespoke, fast and conversion-focused websites for businesses of all scales and public sector organisations across the UK.",
  keywords: [
    "bespoke web design UK",
    "business website design",
    "public sector website design UK",
    "brand development UK",
    "build a website from scratch UK",
    "next.js developers UK",
    "custom web development UK",
    "web design for businesses",
    "scalable digital solutions",
    "SEO website design UK",
    "website design near me",
  ],
  alternates: {
    canonical: "https://www.devora.co.uk",
  },
  openGraph: {
    title: "Bespoke Websites for Businesses of All Scales | Devora",
    description: "Bespoke websites for businesses of all scales and public sector organisations across the UK.",
    url: "https://www.devora.co.uk",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora bespoke web design, development and branding studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Websites for Businesses of All Scales | Devora",
    description: "Bespoke websites for businesses of all scales and public sector organisations.",
    images: ["/devora-office.png"],
    creator: "@devora",
  },
}

export default function Home() {
  const homeFaqs = [
    {
      question: "What services does Devora offer?",
      answer:
        "Devora provides bespoke web design, custom development, branding, and conversion refinement for businesses of all scales and public sector organisations across the UK.",
    },
    {
      question: "Do you build websites from the ground up?",
      answer:
        "Yes. Our preference is to plan, design, and develop custom business websites and digital platforms from the ground up rather than forcing your goals into a generic template.",
    },
  ]

  return (
    <>
      <JsonLd
        data={graphSchema([
          organisationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema({
            path: "/",
            name: "Bespoke Websites for Businesses of All Scales",
            description:
              "Devora builds bespoke, fast and conversion-focused websites for businesses of all scales and public sector organisations across the UK.",
          }),
          serviceSchema({
            path: "/services/web-design",
            name: "Web design and development",
            description: "Bespoke web design, web development, branding and custom platforms for growing UK businesses.",
          }),
          faqSchema(homeFaqs, "/"),
          breadcrumbSchema([{ name: "Home", url: "https://www.devora.co.uk" }]),
        ])}
      />

      <main className="min-h-screen">
        <Header />
        <Hero />
        <WhoWeAre />
        <OurWork />
        <About />
        <OurServices />
        <SuccessStories />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
