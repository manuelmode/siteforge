---
version: alpha
name: SiteForge Local Services
colors:
  primary:     "#0F766E"
  primary_d:   "#134E4A"
  accent:      "#F59E0B"
  bg:          "#FFFFFF"
  surface:     "#F8FAFC"
  text:        "#0F172A"
  text_muted:  "#475569"
  border:      "#E2E8F0"
typography:
  font_family: "Inter, system-ui, sans-serif"
  body_size:   "17px"
  body_lh:     "1.65"
  h1:         { size: "3rem",   weight: "700", lh: "1.1" }
  h2:         { size: "1.875rem", weight: "700", lh: "1.2" }
  h3:         { size: "1.25rem", weight: "600", lh: "1.3" }
rounded:
  sm:  "0.25rem"
  md:  "0.5rem"
  lg:  "0.75rem"
spacing:
  section_y_mobile:  "3rem"
  section_y_desktop: "4rem"
  prose_max:         "48rem"
  content_max:       "64rem"
---

# SiteForge Design System

This file is the visual source of truth for every rank-and-rent site built from this template. Edit it here; every BUILD-N site inherits the next time it's spawned.

The format follows [Google's open-source `DESIGN.md` spec](https://github.com/google-labs-code/design.md) — YAML frontmatter for machine-readable tokens, markdown body for rationale. AI coding agents (Claude Code, Cursor, Codex, Gemini CLI) can parse the frontmatter to keep generated code on-system.

## Overview

SiteForge sites are local service rank-and-rent properties (mold remediation, junk removal, gutter cleaning, etc., one niche per site). The visual identity has to read as a real, trustworthy, locally-operated business — never as a template, AI-generated landing page, or marketing site. The bar is "looks like a real small-business website circa 2024–2026," not "looks like a designer's portfolio."

## Colors

Deep teal primary (`#0F766E`) signals trust + water + cleanliness — neutral enough for any home-service niche, particularly strong for moisture-related work (mold, water damage, plumbing). Amber accent (`#F59E0B`) reserved for the single most important CTA above the fold so the phone CTA pops against teal-heavy navigation. Background stays white with a near-white surface tone (`#F8FAFC`) for subtle section breaks; do not use grey-on-grey or chrome-effect gradients.

| Token       | Hex       | Use |
|---|---|---|
| primary     | `#0F766E` | Phone buttons, primary CTAs, key headings |
| primary_d   | `#134E4A` | Hover states, dark-bg sections, deep accents |
| accent      | `#F59E0B` | One CTA per page max (the conversion-critical one) |
| bg          | `#FFFFFF` | Page background |
| surface     | `#F8FAFC` | Alternating section backgrounds |
| text        | `#0F172A` | Body text |
| text_muted  | `#475569` | Secondary text, captions, footer |
| border      | `#E2E8F0` | Card outlines, dividers |

## Typography

Single font family — **Inter**. No display font, no pairing. Pairing two fonts reads as "design system slop" / AI-template aesthetic. Loaded via `<link rel="stylesheet" href="https://rsms.me/inter/inter.css">` in `Base.astro` head. Falls back to `system-ui, sans-serif` cleanly.

Sizes target real-business legibility:
- Body: 17px desktop, 16px mobile, line-height 1.65
- H1: 3rem desktop (`text-4xl md:text-5xl` in Tailwind), 700 weight, line-height 1.1
- H2: 1.875rem (`text-3xl`), 700 weight, line-height 1.2
- H3: 1.25rem (`text-xl`), 600 weight, line-height 1.3

## Layout

- Max content width: `max-w-5xl` (64rem) for sections, `max-w-3xl` (48rem) for prose / long-form
- Section vertical padding: `py-12` mobile, `py-16` desktop. Do not exceed `py-20` — too airy reads as portfolio aesthetic, not service business
- Hero height: 60–75vh desktop, auto mobile. Never `min-h-screen` — that's portfolio framing
- Grids: `grid-cols-1 md:grid-cols-2` or `md:grid-cols-3` for service/location cards

## Images

One image per page minimum on hero, service, and location pages. Image sourcing rules:

- Free stock only by default: [Unsplash](https://unsplash.com/license), [Pexels](https://www.pexels.com/license/), [Pixabay](https://pixabay.com/service/license-summary/) — all commercial-use OK, no attribution required
- Stored in `src/assets/` (not `public/`) so `astro:assets` `Image` component optimizes them
- Format: WebP auto-converted; explicit width + height set to prevent CLS
- For the niche: prefer task shots (equipment, hands, environments) over staged-person shots. Avoid stock-cliche handshake / corporate-smile photos
- AI-generated images allowed for task shots only (moisture meters on drywall, equipment in basements). **Never** AI-generate human faces front-on — uncanny valley risk; reads as AI slop instantly. **Never** AI-generate fake "team" or "before/after" photos

See `docs/operator-handbook/site-build-procedure.md` for the per-site image sourcing checklist when spawning a BUILD-N site.

## Do's

- One image per page minimum on hero + service + location pages
- Hyper-local references in every location page (geography, building era, weather, neighborhood landmarks)
- Single phone CTA repeated in header, hero, and at every section break
- FAQ section with FAQPage schema on every service page
- "Serving [city] since YYYY" in footer
- Real outbound citations on technical claims (EPA, CDC, state public health, industry standards bodies)
- Burstiness in body copy: vary sentence length aggressively (one under 8 words, one over 20 in every paragraph)
- First-person specific framing: "What we see most in [area] is…"

## Don'ts

- No fake testimonials, no fabricated reviews, no "trusted by N" counters, no fake star ratings
- No team photos that don't represent real people
- No three-item parallel lists in body copy when two will do
- No "delve", "tapestry", "landscape", "navigate", "leverage", "robust", "seamless", "in today's fast-paced", "elevate" as filler
- No more than one em-dash per ~500 words of body
- No street address shown on the site (rank-and-rent NAP norm)
- No GBP / Google Business Profile (we intentionally skip the map pack — no verified address)
- No animated counters, no scroll-reveal fade-ins, no Lottie animations
- No reCAPTCHA — friction kills local-service conversion. Cloudflare Turnstile + honeypot instead
- No font pairing — single family always

## Components

Current siteforge components and their roles:

| Component | Purpose | Notes |
|---|---|---|
| `Base.astro` | Page shell, head meta, GA4/GSC, ClientRouter | Inter font loaded here |
| `Header.astro` | Logo + nav + phone CTA | Phone CTA pinned right, always visible |
| `Footer.astro` | Site name + areas + phone + "since YYYY" | No street address ever |
| `CallButton.astro` | Sticky mobile call CTA | Bottom-right, accent color |
| `ContactForm.astro` | Name + phone + message | Honeypot + Turnstile (when wired) |
| `schema/LocalBusiness.astro` | LocalBusiness JSON-LD | Pulls from `site.config.json` |
| `schema/Service.astro` | Service schema for service pages | One per service slug |
| `schema/Breadcrumb.astro` | BreadcrumbList schema | Per page |

## Versioning

This is `alpha`. Mature once the first 2-3 BUILD-N sites are live and inheriting from it cleanly. Increment to `1.0` when the system is stable.
