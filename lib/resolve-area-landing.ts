import { areaPages, getAreaPage } from "@/lib/area-pages"
import { getLocationBySlug, ukLocations, type LocationArea } from "@/lib/locations"

export type ResolvedAreaLanding = {
  kind: "curated" | "generated"
  slug: string
  name: string
  /** Region only (no country), for keywords and secondary labels */
  regionShort: string
  /** Single line for hero badge (e.g. "West Yorkshire, England") */
  regionLine: string
  intro: string
  localContext: string
  businessTypes: string[]
  nearbySlugs: string[]
}

function defaultBusinessTypes(name: string, region: string): string[] {
  return [
    `${name} SMEs and growing businesses`,
    "Professional services and consultancies",
    "Trades, property and local service firms",
    "Recruiters and B2B suppliers",
    `${region}-based teams investing in digital`,
  ]
}

function nearbyFromLocation(location: LocationArea): string[] {
  const slugs: string[] = []
  const add = (s: string) => {
    if (s !== location.slug && !slugs.includes(s)) slugs.push(s)
  }

  const sameRegion = [...ukLocations]
    .filter((l) => l.slug !== location.slug && l.region === location.region)
    .sort((a, b) => {
      const pri = (p: LocationArea) => (p.priority === "major" ? 0 : 1)
      return pri(a) - pri(b) || a.name.localeCompare(b.name, "en-GB")
    })
  for (const l of sameRegion) {
    add(l.slug)
    if (slugs.length >= 4) return slugs
  }

  const sameCountry = ukLocations.filter(
    (l) => l.slug !== location.slug && l.country === location.country && !slugs.includes(l.slug),
  )
  for (const l of sameCountry) {
    add(l.slug)
    if (slugs.length >= 4) return slugs
  }

  for (const l of ukLocations) {
    if (l.priority === "major") add(l.slug)
    if (slugs.length >= 4) break
  }

  return slugs.slice(0, 4)
}

/**
 * Resolves a URL slug to either a curated area page (rich copy) or a generated city landing from `ukLocations`.
 */
export function resolveAreaLanding(slug: string): ResolvedAreaLanding | null {
  const curated = getAreaPage(slug)
  if (curated) {
    return {
      kind: "curated",
      slug: curated.slug,
      name: curated.name,
      regionShort: curated.region,
      regionLine: curated.region,
      intro: curated.intro,
      localContext: curated.localContext,
      businessTypes: curated.businessTypes,
      nearbySlugs: curated.nearby,
    }
  }

  const loc = getLocationBySlug(slug)
  if (!loc) return null

  const intro = `Website design and development for ${loc.name} businesses that need a fast, credible site with strong technical SEO, clearer service messaging and enquiries that match how buyers search in ${loc.region}.`

  const localContext = `Companies in ${loc.name} often compete across ${loc.region} and wider ${loc.country}. A bespoke site needs obvious trust signals, disciplined page structure, service-led copy, performance that scores well on mobile, and internal links that support both local and regional intent. We build with those realities in mind rather than dropping your brand into a generic template.`

  return {
    kind: "generated",
    slug: loc.slug,
    name: loc.name,
    regionShort: loc.region,
    regionLine: `${loc.region}, ${loc.country}`,
    intro,
    localContext,
    businessTypes: defaultBusinessTypes(loc.name, loc.region),
    nearbySlugs: nearbyFromLocation(loc),
  }
}

/** Every slug that should have a `/areas-we-cover/[slug]` page (cities + regional pages). */
export function allAreaLandingSlugs(): string[] {
  const set = new Set<string>()
  for (const a of areaPages) set.add(a.slug)
  for (const l of ukLocations) set.add(l.slug)
  return [...set]
}

export function areaLandingPath(slug: string) {
  return `/areas-we-cover/${slug}`
}
