import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getLocationBySlug } from '@/lib/locations'
import { allAreaLandingSlugs, areaLandingPath } from '@/lib/resolve-area-landing'
import { industryPages, servicePages } from '@/lib/seo-pages'
import { caseStudySlugs, caseStudySitemapPriority } from '@/lib/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.devora.co.uk'
  
  // Static pages with optimised priority hierarchy
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.86,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // Portfolio is important
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5, // Legal pages - lower priority
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/areas-we-cover`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95, // Areas page is important for UK local SEO
    },
  ]

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: service.slug === 'web-design' || service.slug === 'web-development' || service.slug === 'local-seo' ? 0.92 : 0.84,
  }))

  const industryEntries: MetadataRoute.Sitemap = industryPages.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.78,
  }))

  function areaSitemapPriority(slug: string): number {
    if (slug === 'sheffield') return 0.92
    if (slug === 'yorkshire' || slug === 'uk') return 0.86
    const loc = getLocationBySlug(slug)
    if (loc?.priority === 'major') return 0.82
    return 0.76
  }

  // Canonical area landing pages (all UK cities + regional pages)
  const areaEntries: MetadataRoute.Sitemap = allAreaLandingSlugs().map((slug) => ({
    url: `${baseUrl}${areaLandingPath(slug)}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: areaSitemapPriority(slug),
  }))

  // Get blog posts dynamically
  const blogPosts: MetadataRoute.Sitemap = []
  try {
    const contentDirectory = path.join(process.cwd(), 'content/blog')
    const fileNames = fs.readdirSync(contentDirectory)
    
    fileNames.forEach((fileName) => {
      if (fileName.endsWith('.md')) {
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContents)
        
        blogPosts.push({
          url: `${baseUrl}/blog/${fileName.replace(/\.md$/, '')}`,
          lastModified: data.dateModified
            ? new Date(data.dateModified)
            : data.date
              ? new Date(data.date)
              : new Date(),
          changeFrequency: 'monthly',
          priority: 0.8, // Blog posts are important content
        })
      }
    })
  } catch (error) {
    console.error('Error reading blog posts:', error)
  }

  // Case studies generated from shared content source
  const caseStudies: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: caseStudySitemapPriority(slug),
  }))

  return [...staticPages, ...serviceEntries, ...industryEntries, ...areaEntries, ...blogPosts, ...caseStudies]
}
