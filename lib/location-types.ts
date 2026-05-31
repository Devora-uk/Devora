export type LocationArea = {
  name: string
  slug: string
  region: string
  country: "England" | "Scotland" | "Wales" | "Northern Ireland"
  priority?: "primary" | "major"
}
