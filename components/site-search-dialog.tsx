"use client"

import { useEffect, type Dispatch, type SetStateAction } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export type SiteSearchItem = {
  id: string
  label: string
  sublabel?: string
  href: string
}

const searchPages: SiteSearchItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "areas", label: "Areas we cover", href: "/areas-we-cover" },
  { id: "industries", label: "Industries", href: "/industries" },
  { id: "case-studies", label: "Case studies", href: "/case-studies" },
  { id: "guides", label: "Guides", href: "/guides" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact", sublabel: "Start a project", href: "/#contact" },
]

type SiteSearchDialogProps = {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

export function SiteSearchDialog({ open, onOpenChange }: SiteSearchDialogProps) {
  const router = useRouter()

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
      description="Jump to a page on the site."
      className="max-h-[min(85dvh,32rem)] overflow-hidden border-black/20 shadow-[0_30px_110px_rgba(15,23,42,0.16)] sm:max-w-[min(100vw-2rem,28rem)]"
    >
      <CommandInput placeholder="Search pages…" className="border-black/10" />
      <CommandList className="max-h-[min(65dvh,22rem)]">
        <CommandEmpty className="py-8 text-muted-foreground">No matches. Try another spelling.</CommandEmpty>
        <CommandGroup heading="Pages">
          {searchPages.map((item) => (
            <CommandItem
              key={item.id}
              value={`${item.label} ${item.href} ${item.sublabel ?? ""}`}
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
      </CommandList>
    </CommandDialog>
  )
}
