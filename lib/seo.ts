// lib/seo.ts - Comprehensive SEO utilities
export const siteConfig = {
  name: "Devora",
  description: "Business web design and website development business building bespoke websites from the ground up",
  url: "https://www.devora.co.uk",
  ogImage: "/devora-office.png",
  links: {
    twitter: "https://twitter.com/devora",
    linkedin: "https://www.linkedin.com/company/devora",
    instagram: "https://instagram.com/devora",
  },
  locale: "en-GB",
}

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
  structuredData?: object
  noindex?: boolean
}

export function generateMetadata(seo: SEOMetadata) {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords?.join(", "),
    alternates: {
      canonical: seo.canonicalUrl || siteConfig.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl || siteConfig.url,
      type: (seo.ogType || "website") as any,
      locale: siteConfig.locale,
      images: [
        {
          url: seo.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage || siteConfig.ogImage],
      creator: seo.twitterHandle || "@devora",
    },
    robots: {
      index: !seo.noindex,
      follow: true,
    },
  }
}

// Schema.org structured data generators
export const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.devora.co.uk/#organization",
  name: "Devora",
  url: "https://www.devora.co.uk",
  logo: "https://www.devora.co.uk/devora-bw.png",
  description: "Business web design and website development business building bespoke websites from the ground up.",
  foundingDate: "2020",
  areaServed: "GB",
  sameAs: [
    "https://www.linkedin.com/company/devora",
    "https://twitter.com/devora",
    "https://instagram.com/devora",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  contact: {
    "@type": "ContactPoint",
    telephone: "+44-1234-567890",
    contactType: "Customer Support",
    email: "hello@devora.co.uk",
    availableLanguage: ["en"],
  },
  knowsAbout: [
    "Web Design",
    "Web Development",
    "UI/UX Design",
    "React Development",
    "Next.js Development",
    "E-commerce Development",
  ],
}

export const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.devora.co.uk/#website",
  url: "https://www.devora.co.uk",
  name: "Devora",
  description: "Business web design and website development business building bespoke websites from the ground up",
  publisher: {
    "@id": "https://www.devora.co.uk/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.devora.co.uk/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.devora.co.uk/#localbusiness",
  name: "Devora",
  description: "Web Design & Development Business",
  image: "https://www.devora.co.uk/devora-office.png",
  url: "https://www.devora.co.uk",
  telephone: "+44-1234-567890",
  email: "hello@devora.co.uk",
  priceRange: "£",
  serviceArea: {
    "@type": "Country",
    name: "GB",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
}

export const schemaBreadcrumb = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const schemaArticle = (data: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${data.url}#article`,
  headline: data.headline,
  description: data.description,
  image: {
    "@type": "ImageObject",
    url: data.image,
  },
  datePublished: data.datePublished,
  dateModified: data.dateModified,
  author: {
    "@type": "Person",
    name: data.author,
  },
  publisher: {
    "@id": "https://www.devora.co.uk/#organization",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": data.url,
  },
})

export const schemaService = (data: {
  name: string
  description: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: data.name,
  description: data.description,
  image: data.image,
  provider: {
    "@id": "https://www.devora.co.uk/#organization",
  },
  areaServed: {
    "@type": "Country",
    name: "GB",
  },
})

export const schemaPerson = (data: {
  name: string
  url?: string
  image?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: data.name,
  url: data.url,
  image: data.image,
})
