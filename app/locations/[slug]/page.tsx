import { notFound, permanentRedirect } from "next/navigation"
import { getLocationBySlug, ukLocations } from "@/lib/locations"

type LocationRedirectProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ukLocations.map((location) => ({ slug: location.slug }))
}

export default async function LegacyLocationRedirect({ params }: LocationRedirectProps) {
  const { slug } = await params
  if (!getLocationBySlug(slug)) notFound()
  permanentRedirect(`/areas-we-cover/${slug}`)
}
