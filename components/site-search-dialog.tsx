"use client"

import { useEffect, useMemo, type Dispatch, type SetStateAction } from "react"
import { useRouter } from "next/navigation"
import { MapPin } from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { allAreaLandingSlugs, areaLandingPath, resolveAreaLanding } from "@/lib/resolve-area-landing"

export type SiteSearchItem = {
  id: string
  label: string
  sublabel?: string
  href: string
  group: "Pages" | "Areas & cities"
}

const staticPages: Omit<SiteSearchItem, "group">[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "areas", label: "Areas we cover", href: "/areas-we-cover" },
  { id: "industries", label: "Industries", href: "/industries" },
  { id: "case-studies", label: "Case studies", href: "/case-studies" },
  { id: "guides", label: "Guides", href: "/guides" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact", sublabel: "Start a project", href: "/#contact" },
]

function buildSearchIndex(): SiteSearchItem[] {
  const pages: SiteSearchItem[] = staticPages.map((p) => ({ ...p, group: "Pages" as const }))
  const areas: SiteSearchItem[] = allAreaLandingSlugs()
    .map((slug) => {
      const r = resolveAreaLanding(slug)
      if (!r) return null
      return {
        id: `area-${slug}`,
        label: r.name,
        sublabel: r.regionLine,
        href: areaLandingPath(slug),
        group: "Areas & cities" as const,
      }
    })
    .filter((x): x is SiteSearchItem => Boolean(x))
  return [...pages, ...areas]
}

type SiteSearchDialogProps = {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

export function SiteSearchDialog({ open, onOpenChange }: SiteSearchDialogProps) {
  const router = useRouter()
  const items = useMemo(() => buildSearchIndex(), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onOpenChange((o) => !o)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onOpenChange])

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search Devora"
      description="Jump to a page or UK area landing."
      className="max-h-[min(85dvh,32rem)] overflow-hidden border-black/20 shadow-[0_30px_110px_rgba(15,23,42,0.16)] sm:max-w-[min(100vw-2rem,28rem)]"
    >
      <CommandInput placeholder="Search pages, cities, boroughs…" className="border-black/10" />
      <CommandList className="max-h-[min(65dvh,22rem)]">
        <CommandEmpty className="py-8 text-muted-foreground">No matches. Try another spelling or borough name.</CommandEmpty>
        <CommandGroup heading="Pages">
          {items
            .filter((i) => i.group === "Pages")
            .map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.label} ${item.href} ${item.sublabel ?? ""} pages`}
                onSelect={() => {
                  onOpenChange(false)
                  router.push(item.href)
                }}
                className="cursor-pointer"
              >
                <span className="font-semibold">{item.label}</span>
                {item.sublabel ? (
                  <span className="ml-2 text-xs text-muted-foreground">{item.sublabel}</span>
                ) : null}
              </CommandItem>
            ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Areas & cities">
          {items
            .filter((i) => i.group === "Areas & cities")
            .map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.label} ${item.sublabel ?? ""} ${item.href} area web design`}
                onSelect={() => {
                  onOpenChange(false)
                  router.push(item.href)
                }}
                className="cursor-pointer"
              >
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <div className="flex min-w-0 flex-col gap-0.5">
                  <span className="truncate font-semibold">{item.label}</span>
                  {item.sublabel ? (
                    <span className="truncate text-xs text-muted-foreground">{item.sublabel}</span>
                  ) : null}
                </div>
              </CommandItem>
            ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
