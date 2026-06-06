---
title: How We Build Business Websites with Next.js
date: '2026-05-19'
excerpt: >-
  An inside look at how Devora uses Next.js to build fast, SEO-ready business
  websites for UK companies, from architecture and performance to content and
  launch.
author: Devora
coverImage: /blog/react-server-components-complete-guide-for-business.jpg
readingTime: 8 min read
tags:
  - Next.js
  - Web development
  - SEO
category: technical-build
featured: true
relatedServices:
  - nextjs-development
  - web-development
  - web-design
dateModified: '2026-05-19'
---

## Why Next.js for business sites

Most of our clients need **speed**, **search visibility** and a site they can grow without constant firefighting. Next.js lets us ship server-rendered pages with strong Core Web Vitals, clean URLs and a codebase that stays maintainable.

This is how we use it in practice, not a generic framework tutorial.

## Architecture choices

- **App Router** for layouts, metadata API and streaming where useful  
- **Static generation** for marketing pages that change on deploy  
- **Server components** by default; client components only for interactivity  
- **Structured content**: services, industries and areas driven from typed data in `lib/`  

That separation keeps [service pages](/services) consistent and SEO fields reliable.

## SEO built in, not bolted on

Each route exports:

- Unique `title`, `description`, canonical  
- Open Graph and Twitter cards  
- JSON-LD (`Organization`, `Service`, `FAQ`, `Breadcrumb`) via our schema helpers  

Blog and [guides](/guides) use the same patterns so articles reinforce commercial pages internally.

## Performance habits

- Optimised images with `next/image`  
- Minimal client JavaScript on content-heavy pages  
- Font loading strategy that avoids layout shift  
- Regular Lighthouse checks on homepage and top service templates  

Compare approaches in [WordPress vs Next.js](/blog/wordpress-vs-nextjs-for-business-websites).

## Design handoff

[Web design](/services/web-design) happens in Figma (or similar) with component thinking that maps to React: spacing scales, type hierarchy, accessible colour contrast. We avoid designs that cannot be built performantly.

## Content workflow

- Launch with core pages live, not lorem ipsum  
- Case studies and FAQs wired early for trust  
- Blog posts clustered by topic; see [guides](/guides)  
- Redirect map for [redesigns](/services/website-redesign)

## QA before launch

- Metadata spot-check on every template  
- Forms, analytics, cookie banner  
- Mobile tap targets and focus states  
- 404 and thank-you flows  

## After launch

Monitoring, [maintenance](/blog/website-maintenance-what-uk-businesses-need-after-launch) and iterative SEO: new articles, location pages where justified, CRO tweaks on CTAs.

## FAQs

### Do clients need to know React?

No. Editors interact with agreed tools or we handle updates under retainer.

### Is Next.js only for large sites?

No. A focused 10-page business site benefits as much as a larger build if SEO and speed matter commercially.

### Can you migrate from WordPress?

Yes, with a redirect and content migration plan. Read our [comparison article](/blog/wordpress-vs-nextjs-for-business-websites).

## Next step

See [Next.js development](/services/nextjs-development) or [request an audit](/#contact) of your current stack.
