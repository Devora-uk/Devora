import type { LocationArea } from "./location-types"
import { extraUkLocations } from "./extra-uk-locations"

export type { LocationArea } from "./location-types"

/** Primary list, merged with `extraUkLocations`; first occurrence wins on duplicate slug. */
const coreUkLocations: LocationArea[] = [
  { name: "Sheffield", slug: "sheffield", region: "South Yorkshire", country: "England", priority: "primary" },
  { name: "Rotherham", slug: "rotherham", region: "South Yorkshire", country: "England" },
  { name: "Barnsley", slug: "barnsley", region: "South Yorkshire", country: "England" },
  { name: "Doncaster", slug: "doncaster", region: "South Yorkshire", country: "England" },
  { name: "Chesterfield", slug: "chesterfield", region: "Derbyshire", country: "England" },
  { name: "Leeds", slug: "leeds", region: "West Yorkshire", country: "England", priority: "major" },
  { name: "Bradford", slug: "bradford", region: "West Yorkshire", country: "England" },
  { name: "Wakefield", slug: "wakefield", region: "West Yorkshire", country: "England" },
  { name: "Huddersfield", slug: "huddersfield", region: "West Yorkshire", country: "England" },
  { name: "York", slug: "york", region: "North Yorkshire", country: "England" },
  { name: "Hull", slug: "hull", region: "East Yorkshire", country: "England" },
  { name: "Harrogate", slug: "harrogate", region: "North Yorkshire", country: "England" },
  { name: "Manchester", slug: "manchester", region: "Greater Manchester", country: "England", priority: "major" },
  { name: "Salford", slug: "salford", region: "Greater Manchester", country: "England" },
  { name: "Stockport", slug: "stockport", region: "Greater Manchester", country: "England" },
  { name: "Bolton", slug: "bolton", region: "Greater Manchester", country: "England" },
  { name: "Liverpool", slug: "liverpool", region: "Merseyside", country: "England", priority: "major" },
  { name: "Warrington", slug: "warrington", region: "Cheshire", country: "England" },
  { name: "Preston", slug: "preston", region: "Lancashire", country: "England" },
  { name: "Blackpool", slug: "blackpool", region: "Lancashire", country: "England" },
  { name: "Newcastle", slug: "newcastle", region: "Tyne and Wear", country: "England", priority: "major" },
  { name: "Sunderland", slug: "sunderland", region: "Tyne and Wear", country: "England" },
  { name: "Durham", slug: "durham", region: "County Durham", country: "England" },
  { name: "Middlesbrough", slug: "middlesbrough", region: "Teesside", country: "England" },
  { name: "Birmingham", slug: "birmingham", region: "West Midlands", country: "England", priority: "major" },
  { name: "Coventry", slug: "coventry", region: "West Midlands", country: "England" },
  { name: "Wolverhampton", slug: "wolverhampton", region: "West Midlands", country: "England" },
  { name: "Leicester", slug: "leicester", region: "Leicestershire", country: "England" },
  { name: "Nottingham", slug: "nottingham", region: "Nottinghamshire", country: "England", priority: "major" },
  { name: "Derby", slug: "derby", region: "Derbyshire", country: "England" },
  { name: "Lincoln", slug: "lincoln", region: "Lincolnshire", country: "England" },
  { name: "Northampton", slug: "northampton", region: "Northamptonshire", country: "England" },
  { name: "Cambridge", slug: "cambridge", region: "Cambridgeshire", country: "England" },
  { name: "Norwich", slug: "norwich", region: "Norfolk", country: "England" },
  { name: "Peterborough", slug: "peterborough", region: "Cambridgeshire", country: "England" },
  { name: "Ipswich", slug: "ipswich", region: "Suffolk", country: "England" },
  { name: "London", slug: "london", region: "Greater London", country: "England", priority: "major" },
  { name: "Croydon", slug: "croydon", region: "Greater London", country: "England" },
  { name: "Watford", slug: "watford", region: "Hertfordshire", country: "England" },
  { name: "Reading", slug: "reading", region: "Berkshire", country: "England" },
  { name: "Oxford", slug: "oxford", region: "Oxfordshire", country: "England" },
  { name: "Milton Keynes", slug: "milton-keynes", region: "Buckinghamshire", country: "England" },
  { name: "Brighton", slug: "brighton", region: "East Sussex", country: "England" },
  { name: "Southampton", slug: "southampton", region: "Hampshire", country: "England" },
  { name: "Portsmouth", slug: "portsmouth", region: "Hampshire", country: "England" },
  { name: "Bournemouth", slug: "bournemouth", region: "Dorset", country: "England" },
  { name: "Guildford", slug: "guildford", region: "Surrey", country: "England" },
  { name: "Bristol", slug: "bristol", region: "Bristol", country: "England", priority: "major" },
  { name: "Bath", slug: "bath", region: "Somerset", country: "England" },
  { name: "Exeter", slug: "exeter", region: "Devon", country: "England" },
  { name: "Plymouth", slug: "plymouth", region: "Devon", country: "England" },
  { name: "Gloucester", slug: "gloucester", region: "Gloucestershire", country: "England" },
  { name: "Cheltenham", slug: "cheltenham", region: "Gloucestershire", country: "England" },
  { name: "Cardiff", slug: "cardiff", region: "South Wales", country: "Wales", priority: "major" },
  { name: "Swansea", slug: "swansea", region: "South Wales", country: "Wales" },
  { name: "Newport", slug: "newport", region: "South Wales", country: "Wales" },
  { name: "Wrexham", slug: "wrexham", region: "North Wales", country: "Wales" },
  { name: "Edinburgh", slug: "edinburgh", region: "Edinburgh", country: "Scotland", priority: "major" },
  { name: "Glasgow", slug: "glasgow", region: "Glasgow", country: "Scotland", priority: "major" },
  { name: "Aberdeen", slug: "aberdeen", region: "Aberdeenshire", country: "Scotland" },
  { name: "Dundee", slug: "dundee", region: "Dundee", country: "Scotland" },
  { name: "Inverness", slug: "inverness", region: "Highlands", country: "Scotland" },
  { name: "Stirling", slug: "stirling", region: "Stirling", country: "Scotland" },
  { name: "Belfast", slug: "belfast", region: "County Antrim", country: "Northern Ireland", priority: "major" },
  { name: "Derry", slug: "derry", region: "County Londonderry", country: "Northern Ireland" },
  { name: "Lisburn", slug: "lisburn", region: "County Antrim", country: "Northern Ireland" },
]

function dedupeLocationsBySlug(preferredFirst: LocationArea[]): LocationArea[] {
  const map = new Map<string, LocationArea>()
  for (const loc of preferredFirst) {
    if (!map.has(loc.slug)) map.set(loc.slug, loc)
  }
  return [...map.values()]
}

export const ukLocations: LocationArea[] = dedupeLocationsBySlug([...coreUkLocations, ...extraUkLocations])

export const ukRegionGroups = [
  "Yorkshire and the Humber",
  "North West England",
  "North East England",
  "West Midlands",
  "East Midlands",
  "East of England",
  "London",
  "South East England",
  "South West England",
  "Wales",
  "Scotland",
  "Northern Ireland",
] as const

export function getLocationBySlug(slug: string) {
  return ukLocations.find((location) => location.slug === slug)
}

export function getLocationsByCountry() {
  return ukLocations.reduce<Record<LocationArea["country"], LocationArea[]>>(
    (groups, location) => {
      groups[location.country].push(location)
      return groups
    },
    { England: [], Scotland: [], Wales: [], "Northern Ireland": [] },
  )
}
