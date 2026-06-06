import Link from "next/link"

export type BreadcrumbLink = {
  name: string
  href: string
}

export function Breadcrumbs({ items, className }: { items: BreadcrumbLink[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className || "text-base font-semibold text-muted-foreground"}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" className={className ? "opacity-90" : "text-foreground"}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className={className ? "hover:opacity-80" : "hover:text-foreground"}>
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
