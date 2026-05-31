/**
 * Topic clusters for internal linking: pillars → supporting posts → services.
 */

export type BlogCategory =
  | "choosing-a-partner"
  | "cost-and-planning"
  | "design-and-conversion"
  | "seo-and-growth"
  | "technical-build"
  | "local-sheffield"

export type TopicCluster = {
  id: BlogCategory
  title: string
  description: string
  pillarSlugs: string[]
  serviceSlugs: string[]
}

export const topicClusters: TopicCluster[] = [
  {
    id: "choosing-a-partner",
    title: "Choosing a web partner",
    description: "How UK businesses compare agencies, brief projects and judge fit before signing.",
    pillarSlugs: [
      "how-to-choose-a-web-design-agency-in-sheffield",
      "bespoke-vs-template-websites-for-uk-smes",
    ],
    serviceSlugs: ["web-design", "small-business-websites"],
  },
  {
    id: "cost-and-planning",
    title: "Cost, timelines and planning",
    description: "Budgets, project phases and what to expect when commissioning a new website.",
    pillarSlugs: [
      "how-much-does-a-business-website-cost-in-the-uk",
      "website-project-timeline-what-uk-businesses-should-expect",
      "website-maintenance-what-uk-businesses-need-after-launch",
    ],
    serviceSlugs: ["web-design", "website-redesign", "small-business-websites"],
  },
  {
    id: "design-and-conversion",
    title: "Design and conversion",
    description: "Homepages, landing pages and layouts that turn visitors into enquiries.",
    pillarSlugs: [
      "conversion-focused-homepage-checklist-uk-businesses",
      "signs-your-business-website-needs-a-redesign-uk",
      "website-redesign-checklist-for-uk-businesses",
    ],
    serviceSlugs: ["web-design", "website-redesign", "branding"],
  },
  {
    id: "seo-and-growth",
    title: "SEO and organic growth",
    description: "Search visibility, local SEO and content structure for UK business websites.",
    pillarSlugs: [
      "local-seo-checklist-for-sheffield-businesses",
      "web-design-for-lead-generation-uk-guide",
      "the-ultimate-guide-to-seo-strategies-for-businesses-in-2025",
    ],
    serviceSlugs: ["local-seo", "web-design"],
  },
  {
    id: "technical-build",
    title: "Technical build",
    description: "Performance, frameworks and modern development choices for business sites.",
    pillarSlugs: [
      "wordpress-vs-nextjs-for-business-websites",
      "website-performance-optimisation-guide-2026",
      "how-we-build-business-websites-with-nextjs",
    ],
    serviceSlugs: ["nextjs-development", "web-development"],
  },
  {
    id: "local-sheffield",
    title: "Sheffield and South Yorkshire",
    description: "Local search, area pages and choosing a Sheffield-based studio.",
    pillarSlugs: [
      "how-to-choose-a-web-design-agency-in-sheffield",
      "local-seo-checklist-for-sheffield-businesses",
    ],
    serviceSlugs: ["web-design", "local-seo"],
  },
]

/** Curated high-intent posts surfaced on homepage, guides and blog index */
export const featuredPostSlugs = [
  "how-to-choose-a-web-design-agency-in-sheffield",
  "how-much-does-a-business-website-cost-in-the-uk",
  "conversion-focused-homepage-checklist-uk-businesses",
  "wordpress-vs-nextjs-for-business-websites",
  "local-seo-checklist-for-sheffield-businesses",
  "signs-your-business-website-needs-a-redesign-uk",
]

/** Map service slugs to recommended reading */
export const serviceToBlogSlugs: Record<string, string[]> = {
  "web-design": [
    "how-to-choose-a-web-design-agency-in-sheffield",
    "conversion-focused-homepage-checklist-uk-businesses",
    "bespoke-vs-template-websites-for-uk-smes",
    "signs-your-business-website-needs-a-redesign-uk",
  ],
  "web-development": [
    "how-we-build-business-websites-with-nextjs",
    "wordpress-vs-nextjs-for-business-websites",
    "website-performance-optimisation-guide-2026",
  ],
  "local-seo": [
    "local-seo-checklist-for-sheffield-businesses",
    "web-design-for-lead-generation-uk-guide",
    "the-ultimate-guide-to-seo-strategies-for-businesses-in-2025",
  ],
  "website-redesign": [
    "signs-your-business-website-needs-a-redesign-uk",
    "website-redesign-checklist-for-uk-businesses",
    "website-project-timeline-what-uk-businesses-should-expect",
  ],
  branding: [
    "the-ultimate-guide-to-branding-consistency-in-web-design-in-2025",
    "conversion-focused-homepage-checklist-uk-businesses",
  ],
  "nextjs-development": [
    "how-we-build-business-websites-with-nextjs",
    "wordpress-vs-nextjs-for-business-websites",
    "website-performance-optimisation-guide-2026",
  ],
  "ecommerce-websites": [
    "the-ultimate-guide-to-ecommerce-website-best-practices-in-2025",
    "conversion-focused-homepage-checklist-uk-businesses",
  ],
  "small-business-websites": [
    "how-much-does-a-business-website-cost-in-the-uk",
    "bespoke-vs-template-websites-for-uk-smes",
    "website-maintenance-what-uk-businesses-need-after-launch",
  ],
}

const slugToCategory = new Map<string, BlogCategory>()
for (const cluster of topicClusters) {
  for (const slug of cluster.pillarSlugs) {
    if (!slugToCategory.has(slug)) slugToCategory.set(slug, cluster.id)
  }
}

export function getCategoryForSlug(slug: string): BlogCategory | undefined {
  return slugToCategory.get(slug)
}

export function getClusterForSlug(slug: string): TopicCluster | undefined {
  const category = getCategoryForSlug(slug)
  if (!category) return undefined
  return topicClusters.find((c) => c.id === category)
}

export function getClusterForCategory(category: BlogCategory): TopicCluster {
  return topicClusters.find((c) => c.id === category)!
}

type PostMeta = { slug: string; tags: string[] }

export function getRelatedPostsForSlug(
  slug: string,
  allPosts: PostMeta[],
  limit = 3
): PostMeta[] {
  const cluster = getClusterForSlug(slug)
  const others = allPosts.filter((p) => p.slug !== slug)

  if (cluster) {
    const pillarSet = new Set(cluster.pillarSlugs)
    const fromCluster = others.filter((p) => pillarSet.has(p.slug))
    if (fromCluster.length >= limit) return fromCluster.slice(0, limit)

    const tagOverlap = others
      .map((p) => ({
        post: p,
        score: p.tags.filter((t) =>
          allPosts.find((x) => x.slug === slug)?.tags.includes(t)
        ).length,
      }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.post)

    const combined = [...fromCluster, ...tagOverlap.filter((p) => !fromCluster.includes(p))]
    const seen = new Set<string>()
    const unique = combined.filter((p) => {
      if (seen.has(p.slug)) return false
      seen.add(p.slug)
      return true
    })
    return unique.slice(0, limit)
  }

  const current = allPosts.find((p) => p.slug === slug)
  if (!current) return others.slice(0, limit)

  return others
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .map((x) => x.post)
    .slice(0, limit)
}

export function getServiceLinksForPost(
  slug: string,
  relatedServiceSlugs?: string[]
): { href: string; label: string }[] {
  const cluster = getClusterForSlug(slug)
  const slugs =
    relatedServiceSlugs?.length
      ? relatedServiceSlugs
      : cluster?.serviceSlugs ?? ["web-design", "web-development"]

  const labels: Record<string, string> = {
    "web-design": "Web design",
    "web-development": "Web development",
    "local-seo": "Local SEO",
    "website-redesign": "Website redesign",
    branding: "Branding",
    "nextjs-development": "Next.js development",
    "ecommerce-websites": "Ecommerce websites",
    "small-business-websites": "Small business websites",
  }

  return slugs.slice(0, 4).map((s) => ({
    href: `/services/${s}`,
    label: labels[s] ?? s.replace(/-/g, " "),
  }))
}

export function getBlogPostsForService(
  serviceSlug: string,
  allPosts: PostMeta[]
): PostMeta[] {
  const slugs = serviceToBlogSlugs[serviceSlug] ?? []
  return slugs
    .map((s) => allPosts.find((p) => p.slug === s))
    .filter((p): p is PostMeta => Boolean(p))
}
