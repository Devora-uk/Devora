import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { OurServices } from "@/components/our-services"
import { OurWork } from "@/components/our-work"
import { SuccessStories } from "@/components/success-stories"
import { HomeInsights } from "@/components/home-insights"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { JsonLd } from "@/components/JsonLd"
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
  title: "Bespoke Web Design, Development & Branding for Startups | Devora",
  description: "Devora builds bespoke, fast, and conversion-focused websites for startups and growing UK brands that need to stand out, explain their offer, and scale intelligently.",
  keywords: [
    "startup web design UK",
    "web design for startups",
    "startup web development",
    "brand development UK",
    "build a website from scratch UK",
    "bespoke web design UK",
    "next.js developers UK",
    "custom web development for startups",
    "affordable web development startups",
    "bootstrap web design",
    "scalable digital solutions",
    "SEO website design UK",
    "website design near me",
  ],
  alternates: {
    canonical: "https://www.devora.co.uk",
  },
  openGraph: {
    title: "Bespoke Web Design, Development & Branding for Startups | Devora",
    description: "Bespoke, fast and conversion-focused websites for startups and growing UK brands.",
    url: "https://www.devora.co.uk",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/devora-office.png",
        width: 1200,
        height: 630,
        alt: "Devora startup web design, development and branding studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Web Design, Development & Branding for Startups | Devora",
    description: "Bespoke websites built for startups to win trust, rank better and scale.",
    images: ["/devora-office.png"],
    creator: "@devora",
  },
}

export default function Home() {
  const homeFaqs = [
    {
      question: "What services does Devora offer?",
      answer:
        "Devora provides bespoke web design, custom development, branding, and conversion refinement for startups and businesses across the UK.",
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
            name: "Bespoke Web Design, Development & Branding for Startups",
            description:
              "Devora builds bespoke, fast and conversion-focused websites for startups and UK businesses.",
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
        <ClientLogos />
        <About />
        <WhyUs />
        <OurServices />
        <OurWork />
        <SuccessStories />
        <HomeInsights />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
