import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import { SkipLink } from "@/components/skip-link"
import { WebVitals } from "@/components/web-vitals"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.devora.co.uk'),
  title: {
    default: "Bespoke Web Design, Development & Branding | Devora",
    template: "%s | Devora"
  },
  description: "UK web design, development and branding studio building bespoke, high-performance websites for startups and growing brands.",
  keywords: [
    "startup web design UK",
    "web design for startups",
    "startup web development",
    "brand development studio",
    "build a website from scratch UK",
    "bespoke web design UK",
    "next.js developers UK",
    "custom web development for startups",
    "affordable web development startups",
    "bootstrap web design",
    "scalable digital solutions",
    "SEO website design UK",
    "web development for businesses",
    "business website design",
    "custom web development",
    "responsive web design",
    "web application development"
  ],
  authors: [{ name: "Devora" }],
  creator: "Devora",
  publisher: "Devora",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.devora.co.uk",
    siteName: "Devora",
    title: "Bespoke Web Design, Development & Branding for Startups",
    description: "Bespoke website design, development, and branding for startups and growing brands, built for speed and enquiries.",
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
    title: "Bespoke Web Design, Development & Branding for Startups",
    description: "Bespoke websites and brand identities for startups and growing UK brands.",
    images: ["/devora-office.png"],
    creator: "@devora",
  },
  other: {
    "facebook:page": "https://www.facebook.com/share/14UKFzshvcq/?mibextid=wwXIfr",
    "instagram:site": "devoraltd",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/devora-bw.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/devora-bw.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/devora-bw.png',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Devora" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.vercel-insights.com" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JPTSQ7E77S"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JPTSQ7E77S');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SkipLink />
        <WebVitals />
        <div id="main-content">{children}</div>
        {/* Analytics loaded with defer for non-critical performance impact */}
        <Analytics />
        {/* Cookie banner loads after content */}
        <CookieBanner />
        {/* Toast notifications */}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
