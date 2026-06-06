import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const legacyBusinessBlogSlugs = [
  'api-design-principles-complete-guide-for-startups-in-2026',
  'blaze-ai-social-media-management-complete-guide-for-startups-in-2026',
  'cicd-pipeline-setup-complete-guide-for-startups-in-2026',
  'component-library-design-complete-guide-for-startups-in-2026',
  'css-grid-and-flexbox-complete-guide-for-startups-in-2026',
  'dark-mode-implementation-complete-guide-for-startups-in-2026',
  'database-optimisation-complete-guide-for-startups-in-2026',
  'email-template-design-complete-guide-for-startups-in-2026',
  'error-handling-strategies-complete-guide-for-startups-in-202',
  'graphql-vs-rest-complete-guide-for-startups-in-2026',
  'headless-cms-solutions-complete-guide-for-startups-in-2026',
  'image-optimisation-techniques-complete-guide-for-startups-in',
  'internationalisation-i18n-complete-guide-for-startups-in-202',
  'microservices-architecture-complete-guide-for-startups-in-20',
  'payment-integration-complete-guide-for-startups-in-2026',
  'progressive-web-apps-complete-guide-for-startups-in-2026',
  'react-server-components-complete-guide-for-startups-in-2026',
  'serverless-architecture-complete-guide-for-startups-in-2026',
  'social-media-integration-complete-guide-for-startups-in-2026',
  'state-management-solutions-complete-guide-for-startups-in-20',
  'testing-web-applications-complete-guide-for-startups-in-2026',
  'the-ultimate-guide-to-seo-strategies-for-startups-in-2025',
  'typescript-best-practices-complete-guide-for-startups-in-202',
  'user-authentication-complete-guide-for-startups-in-2026',
  'web-accessibility-standards-complete-guide-for-startups-in-2',
  'web-analytics-setup-complete-guide-for-startups-in-2026',
  'web-animation-techniques-complete-guide-for-startups-in-2026',
  'web-performance-monitoring-complete-guide-for-startups-in-20',
  'web-scraping-ethics-complete-guide-for-startups-in-2026',
  'web-security-best-practices-complete-guide-for-startups-in-2',
  'web3-and-blockchain-complete-guide-for-startups-in-2026',
  'websocket-realtime-communication-complete-guide-for-startups',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable compression
  compress: true,
  // Generate ETags for better caching
  generateEtags: true,
  // Enable powered by header removal for security
  poweredByHeader: false,
  // Strict mode for better React practices
  reactStrictMode: true,
  // Trailing slash for better SEO consistency
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/case-studies/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/guides',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'devora.co.uk' }],
        destination: 'https://www.devora.co.uk/:path*',
        permanent: true,
      },
      {
        source: '/locations/:slug',
        destination: '/areas-we-cover/:slug',
        permanent: true,
      },
      {
        source: '/locations',
        destination: '/areas-we-cover',
        permanent: true,
      },
      ...legacyBusinessBlogSlugs.map((slug) => ({
        source: `/blog/${slug}`,
        destination: `/blog/${slug.replaceAll('startups', 'businesses').replaceAll('startup', 'business')}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
