"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X, ScanSearch, Search } from "lucide-react"
import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import WebsiteAuditForm from "@/components/website-audit-form"
import { SiteSearchDialog } from "@/components/site-search-dialog"

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuditDialogOpen, setIsAuditDialogOpen] = useState(false)
  const [siteSearchOpen, setSiteSearchOpen] = useState(false)

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", isMenuOpen)

    return () => {
      document.body.classList.remove("mobile-nav-open")
    }
  }, [isMenuOpen])

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement
      const header = document.querySelector('header')
      // Close menu if click is outside the header
      if (header && !header.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    // Use both mouse and touch events for better mobile support
    // Small delay to avoid immediate closure when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMenuOpen])

  // Helper function to handle navigation - if not on home, go to home with hash, otherwise just use hash
  const getNavHref = (hash: string) => {
    return isHomePage ? hash : `/#${hash.replace("#", "")}`
  }

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/areas-we-cover", label: "Locations", ariaLabel: "Devora UK web design and development locations" },
    { href: "/industries", label: "Industries" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/guides", label: "Guides", ariaLabel: "Website guides for UK businesses" },
    { href: "/blog", label: "Blog", ariaLabel: "Web design and development blog" },
  ]

  return (
    <>
    <Dialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen}>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/15 bg-card/95 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-card/82" role="banner">
        <div className="mx-auto max-w-7xl px-4 py-2.5 md:px-6 md:py-3">
          <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" aria-label="Devora - Home">
            <Image 
              src="/devora-bw.png" 
              alt="Devora logo - Startup web design and development studio" 
              width={48} 
              height={48} 
              className="h-10 w-10 rounded-md"
              priority={true}
            />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="text-base font-black tracking-[-0.03em]">Devora</span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">Startup web studio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="text-sm font-semibold text-foreground/76 hover:text-foreground transition-colors duration-200"
                aria-label={link.ariaLabel}
              >
                {link.label}
              </Link>
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setSiteSearchOpen(true)}
              className="h-10 gap-2 rounded-full border-black/25 bg-card px-3 text-sm font-semibold text-foreground/80 hover:border-accent hover:text-accent-foreground"
              aria-label="Open search"
            >
              <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="max-w-[6rem] truncate">Search</span>
              <kbd className="pointer-events-none hidden rounded border border-black/15 bg-muted px-1.5 py-0.5 font-mono text-[10px] font-semibold text-muted-foreground xl:inline">
                ⌘K
              </kbd>
            </Button>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3 pl-3 lg:pl-4">
            <DialogTrigger asChild>
              <Button variant="outline" className="h-10 rounded-full gap-2 border-black/25 bg-card px-4 text-sm font-semibold hover:border-accent hover:text-accent-foreground">
                <ScanSearch className="w-4 h-4" />
                Free Audit
              </Button>
            </DialogTrigger>
            
            <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services">
              <Button className="h-10 rounded-full gap-2 bg-foreground px-5 text-sm font-semibold text-background hover:bg-accent">
                Get in touch
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setSiteSearchOpen(true)}
              className="flex min-h-12 min-w-12 items-center justify-center rounded-full border border-black/10 bg-background/80 text-foreground shadow-sm"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(!isMenuOpen)
              }}
              className="relative z-50 flex min-h-12 min-w-12 items-center justify-center rounded-full border border-black/10 bg-background/80 shadow-sm transition-colors hover:bg-muted active:bg-muted"
              aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMenuOpen}
              type="button"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
          <nav 
            className="fixed inset-x-0 top-[65px] z-40 max-h-[calc(100dvh-65px)] overflow-y-auto border-b border-black/15 bg-card/98 px-4 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200 md:hidden" 
            aria-label="Mobile navigation"
            onClick={(e) => {
              // Close menu when clicking on nav links
              const target = e.target as HTMLElement
              if (target.tagName === 'A') {
                setIsMenuOpen(false)
              }
            }}
          >
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex min-h-14 items-center justify-between border border-black/10 bg-background px-4 text-lg font-black tracking-[-0.02em] text-foreground shadow-sm transition-colors duration-200 hover:text-primary active:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
                </Link>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <DialogTrigger asChild>
                <Button variant="outline" className="h-12 rounded-full gap-2 w-full justify-center border-black/15 text-sm font-bold hover:border-accent hover:text-accent-foreground" onClick={() => setIsMenuOpen(false)}>
                  <ScanSearch className="w-4 h-4" aria-hidden="true" />
                  Free audit
                </Button>
              </DialogTrigger>

              <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services" onClick={() => setIsMenuOpen(false)} className="block">
                <Button className="h-12 rounded-full gap-2 w-full justify-center bg-foreground text-sm font-bold text-background hover:bg-accent">
                  Contact
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </nav>
          )}
        </div>
      </header>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/15 bg-card/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-[0.9fr_1.1fr] gap-3">
          <DialogTrigger asChild>
            <Button variant="outline" className="h-12 rounded-full gap-2 border-black/20 bg-card text-sm font-bold hover:border-accent hover:text-accent-foreground">
              <ScanSearch className="h-4 w-4" aria-hidden="true" />
              Audit
            </Button>
          </DialogTrigger>

          <Link href={getNavHref("#contact")} aria-label="Contact Devora for web design services">
            <Button className="h-12 w-full rounded-full gap-2 bg-foreground text-sm font-bold text-background hover:bg-accent">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
      <DialogContent className="gap-0 max-h-[min(100dvh-1rem,44rem)] overflow-y-auto border-black/20 bg-card p-0 shadow-[0_30px_110px_rgba(15,23,42,0.16)] sm:max-w-[min(100vw-2rem,32rem)] [&_[data-slot=dialog-close]]:top-4 [&_[data-slot=dialog-close]]:right-4 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:h-9 [&_[data-slot=dialog-close]]:w-9 [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:border [&_[data-slot=dialog-close]]:border-black/15 [&_[data-slot=dialog-close]]:bg-background [&_[data-slot=dialog-close]]:text-foreground [&_[data-slot=dialog-close]]:opacity-100 hover:[&_[data-slot=dialog-close]]:bg-muted">
        <DialogHeader className="sr-only">
          <DialogTitle>Free Website Audit</DialogTitle>
          <DialogDescription>
            Request a free comprehensive audit of your website
          </DialogDescription>
        </DialogHeader>
        <WebsiteAuditForm variant="inline" />
      </DialogContent>
    </Dialog>
    <SiteSearchDialog open={siteSearchOpen} onOpenChange={setSiteSearchOpen} />
    </>
  )
}
