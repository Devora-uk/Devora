"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, ScanSearch, Search, X } from "lucide-react"
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
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [hash, setHash] = useState("")

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [pathname])

  useEffect(() => {
    setIsMenuOpen(false)
    setServicesOpen(pathname.startsWith("/services"))
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", isMenuOpen)
    return () => document.body.classList.remove("mobile-nav-open")
  }, [isMenuOpen])

  const getNavHref = (hash: string) =>
    isHomePage ? hash : `/#${hash.replace("#", "")}`

  const isRouteActive = (href: string) => {
    const path = href.split("#")[0]
    if (!path || path === "/") return false
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  const isHashLinkActive = (href: string) => {
    const linkHash = href.includes("#") ? `#${href.split("#")[1]}` : ""
    if (!linkHash) return false
    return pathname === "/" && hash === linkHash
  }

  const isNavItemActive = (href: string) =>
    isHashLinkActive(href) || isRouteActive(href)

  const navLinks = [
    { href: "/#about", label: "about us" },
    {
      label: "services",
      href: "/services",
      children: [
        { href: "/services/web-design", label: "Web Design" },
        { href: "/services/web-development", label: "Web Development" },
        { href: "/services/branding", label: "Branding" },
        { href: "/services/local-seo", label: "Local SEO" },
        { href: "/services", label: "All services" },
      ],
    },
    { href: "/areas-we-cover", label: "locations" },
    { href: "/case-studies", label: "projects" },
    { href: "/guides", label: "guides" },
    { href: getNavHref("#contact"), label: "contact us" },
  ]

  const tabletNavLinks = [
    { href: "/#about", label: "about" },
    { href: "/services", label: "services" },
    { href: "/case-studies", label: "projects" },
    { href: getNavHref("#contact"), label: "contact" },
  ]

  const onHero = isHomePage && !scrolled
  const textClass = onHero ? "text-[#0F1729]" : "text-black"
  const activeTextClass = textClass
  const mutedClass = onHero
    ? "text-[#0F1729]/78 hover:text-[#0F1729]"
    : "text-black/78 hover:text-black"
  const navLinkClass = `nav-link transition-colors ${mutedClass}`
  const headerBg = onHero
    ? "border-transparent bg-[#F0EBE3]/40 backdrop-blur-sm"
    : "border-black/8 bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-md"

  return (
    <>
      <Dialog open={isAuditDialogOpen} onOpenChange={setIsAuditDialogOpen}>
        <header
          className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
          role="banner"
        >
          <div className="mx-auto flex max-w-[90rem] items-center justify-between mobile-safe-x px-5 py-3.5 max-md:py-3 md:px-8 md:py-5 lg:px-10">
            <Link
              href="/"
              className={`text-2xl font-bold tracking-[-0.03em] md:text-[1.75rem] lg:text-3xl ${textClass}`}
              aria-label="Devora home"
            >
              devora.
            </Link>

            <nav
              className="hidden items-center gap-0.5 md:flex lg:hidden"
              aria-label="Tablet navigation"
            >
              {tabletNavLinks.map((link) => {
                const isActive = isNavItemActive(link.href)

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`nav-link nav-link-compact transition-colors ${mutedClass} ${isActive ? `nav-link-active ${activeTextClass}` : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button
                type="button"
                onClick={() => setSiteSearchOpen(true)}
                className={`nav-link nav-link-compact gap-1.5 transition-colors ${mutedClass}`}
                aria-label="Open search"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">search</span>
              </button>
            </nav>

            <nav
              className="hidden items-center gap-2 lg:flex xl:gap-4"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = isNavItemActive(link.href)

                return link.children ? (
                  <div key={link.label} className="group relative">
                    <Link
                      href={link.href}
                      className={`${navLinkClass} gap-1.5 px-2 ${isActive ? `nav-link-active ${activeTextClass}` : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 opacity-70" aria-hidden="true" />
                    </Link>
                    <div className="invisible absolute left-0 top-full z-50 min-w-[16rem] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="rounded-lg border border-black/8 bg-white py-2 shadow-xl">
                        {link.children.map((child) => {
                          const isChildActive = isRouteActive(child.href)

                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`block min-h-11 px-4 py-3 text-base transition-colors hover:bg-black/4 hover:text-black ${
                                  isChildActive
                                    ? "bg-black/4 font-semibold text-black"
                                    : "text-black/80"
                                }`}
                                aria-current={isChildActive ? "page" : undefined}
                              >
                                {child.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`${navLinkClass} px-2 ${isActive ? `nav-link-active ${activeTextClass}` : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button
                type="button"
                onClick={() => setSiteSearchOpen(true)}
                className={`${navLinkClass} gap-2 px-2`}
                aria-label="Open search"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                search
              </button>
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <DialogTrigger asChild>
                <button
                  type="button"
                  className={`${navLinkClass} nav-link-compact hidden gap-1.5 px-2 md:inline-flex lg:gap-2`}
                >
                  <ScanSearch className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="hidden lg:inline">free audit</span>
                  <span className="lg:hidden">audit</span>
                </button>
              </DialogTrigger>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors md:hidden ${
                  onHero
                    ? "border-[#0F1729]/12 bg-white/50 text-[#0F1729]"
                    : "border-black/10 bg-black/4 text-black"
                } ${isMenuOpen ? "bg-[#0F1729] text-white border-[#0F1729]" : ""}`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <nav
              className="fixed inset-0 top-[3.25rem] z-40 flex flex-col md:hidden"
              aria-label="Mobile navigation"
            >
              <button
                type="button"
                className="absolute inset-0 bg-[#0F1729]/40 backdrop-blur-sm"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              />
              <div
                className={`relative flex max-h-[calc(100dvh-3.25rem)] flex-col overflow-y-auto mobile-safe-x mobile-safe-bottom border-t px-5 py-6 ${
                  onHero
                    ? "border-[#0F1729]/10 bg-[#F7F4EF]/98 text-[#0F1729] backdrop-blur-xl"
                    : "border-black/8 bg-white/98 text-black backdrop-blur-xl"
                }`}
              >
                <p className="mobile-section-label mb-4 text-[#0F1729]/50">Menu</p>
                <ul className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = isNavItemActive(link.href)

                  return link.children ? (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex min-h-12 w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-medium lowercase transition-colors ${
                          isActive ? "nav-link-active-mobile bg-[#0F1729]/6 font-semibold" : "hover:bg-black/4"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      {servicesOpen && (
                        <ul className="mb-2 ml-3 space-y-0.5 border-l border-current/20 pl-4">
                          {link.children.map((child) => {
                            const isChildActive = isRouteActive(child.href)

                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`block min-h-11 rounded-lg px-3 py-2.5 text-base ${
                                    isChildActive
                                      ? "bg-[#0F1729]/6 font-semibold text-foreground"
                                      : "text-muted-navy hover:bg-black/4"
                                  }`}
                                  aria-current={isChildActive ? "page" : undefined}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block min-h-12 rounded-xl px-3 py-3 text-lg font-medium lowercase transition-colors ${
                          isActive ? "nav-link-active-mobile bg-[#0F1729]/6 font-semibold" : "hover:bg-black/4"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <button
                    type="button"
                    onClick={() => {
                      setSiteSearchOpen(true)
                      setIsMenuOpen(false)
                    }}
                    className="block min-h-12 rounded-xl px-3 py-3 text-lg font-medium lowercase transition-colors hover:bg-black/4"
                  >
                    search
                  </button>
                </li>
              </ul>

              <div className="mt-auto pt-8">
                <DialogTrigger asChild>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-touch w-full gap-2 rounded-xl bg-[#CCFF00] text-[#0F1729] transition-colors hover:bg-[#b8e600]"
                  >
                    <ScanSearch className="h-4 w-4" aria-hidden="true" />
                    free website audit
                  </button>
                </DialogTrigger>
              </div>
              </div>
            </nav>
          )}
        </header>

        <DialogContent className="gap-0 max-h-[min(100dvh-1rem,44rem)] overflow-y-auto border-black/10 bg-white p-0 shadow-2xl sm:max-w-[min(100vw-2rem,32rem)]">
          <DialogHeader className="sr-only">
            <DialogTitle>Free Website Audit</DialogTitle>
            <DialogDescription>Request a free comprehensive audit of your website</DialogDescription>
          </DialogHeader>
          <WebsiteAuditForm variant="inline" />
        </DialogContent>
      </Dialog>
      <SiteSearchDialog open={siteSearchOpen} onOpenChange={setSiteSearchOpen} />
    </>
  )
}
