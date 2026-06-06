import { CONTACT_EMAIL, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo-pages"

type BreadcrumbItem = {
  name: string
  url: string
}

export function absoluteUrl(path = "") {
  if (!path) return SITE_URL
  if (path.startsWith("http")) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${items.at(-1)?.url || SITE_URL}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function organisationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/devora-bw.png"),
    email: CONTACT_EMAIL,
    description:
      "Sheffield-based web design and development business building bespoke, fast and conversion-led websites for UK businesses.",
    areaServed: ["Sheffield", "South Yorkshire", "Yorkshire", "United Kingdom"],
    sameAs: [
      "https://www.facebook.com/share/14UKFzshvcq/?mibextid=wwXIfr",
      "https://www.instagram.com/devoraltd?igsh=MTBvNGQxbmhrb28xaA==",
      "https://www.linkedin.com/company/devora-web-design-development/",
      "https://x.com/DevoraLtd38083",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      areaServed: "GB",
      availableLanguage: "en-GB",
    },
  }
}

export function localBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    url: SITE_URL,
    email: CONTACT_EMAIL,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sheffield",
      addressRegion: "South Yorkshire",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Sheffield" },
      { "@type": "AdministrativeArea", name: "South Yorkshire" },
      { "@type": "AdministrativeArea", name: "Yorkshire" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    makesOffer: [
      "Web design",
      "Web development",
      "Branding",
      "Local SEO",
      "Website redesign",
      "Next.js development",
    ],
  }
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}

export function webPageSchema(data: { path: string; name: string; description: string }) {
  const url = absoluteUrl(data.path)
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: data.name,
    description: data.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(DEFAULT_OG_IMAGE),
    },
  }
}

export function serviceSchema(data: {
  name: string
  description: string
  path: string
  areaServed?: string
  serviceType?: string[]
}) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(data.path)}#service`,
    name: data.name,
    description: data.description,
    serviceType: data.serviceType || ["Web design", "Web development", "Local SEO"],
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: data.areaServed
      ? { "@type": "Place", name: data.areaServed }
      : [
          { "@type": "City", name: "Sheffield" },
          { "@type": "AdministrativeArea", name: "South Yorkshire" },
          { "@type": "Country", name: "United Kingdom" },
        ],
  }
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>, path: string) {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function itemListSchema(items: Array<{ name: string; url: string }>, path: string) {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(path)}#itemlist`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  }
}

export function graphSchema(items: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items,
  }
}
