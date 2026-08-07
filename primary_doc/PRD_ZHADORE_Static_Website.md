# Product Requirements Document (PRD)
# ZHADORE — Static Brand Website

**Version:** 1.0  
**Date:** May 16, 2026  
**Status:** Draft — For Review  
**Authors:** Product & Engineering Team  
**Project Codename:** ZHADORE · AMBIVALENCE (SS 2026)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Brand & Project Context](#2-brand--project-context)
3. [Current State Analysis](#3-current-state-analysis)
4. [Project Vision & Goals](#4-project-vision--goals)
5. [Target Audience & User Personas](#5-target-audience--user-personas)
6. [Functional Requirements](#6-functional-requirements)
7. [Content & Information Architecture](#7-content--information-architecture)
8. [Design System & Visual Language](#8-design-system--visual-language)
9. [Technical Architecture](#9-technical-architecture)
10. [SEO & Discoverability Strategy](#10-seo--discoverability-strategy)
11. [Accessibility Requirements (WCAG 2.2 AA)](#11-accessibility-requirements-wcag-22-aa)
12. [Performance Targets](#12-performance-targets)
13. [Security & Compliance](#13-security--compliance)
14. [Legal Requirements](#14-legal-requirements)
15. [Implementation Plan & Phases](#15-implementation-plan--phases)
16. [Success Metrics & KPIs](#16-success-metrics--kpis)
17. [Open Questions & Risks](#17-open-questions--risks)
18. [Appendices](#18-appendices)

---

## 1. Executive Summary

### 1.1 Project Purpose

ZHADORE is an emerging luxury fashion brand founded by two women — Zhareal Popa (Creative Director) and Zakia Yesmin (Tech & Strategy). The brand currently operates a single-page portfolio website built with Astro and hosted on Vercel. While the site has strong visual identity, a forensic audit (May 2026) revealed critical deficiencies in SEO, accessibility, security, performance, and legal compliance.

This PRD defines the requirements for a **complete, elegant, production-grade static website** that transforms ZHADORE from a visually appealing but functionally incomplete portfolio into a discoverable, accessible, trustworthy, and commercially viable digital brand presence.

### 1.2 Key Objectives

| Objective | Priority | Success Criteria |
|-----------|----------|------------------|
| Achieve near-perfect Lighthouse scores | P0 | ≥95 Performance, ≥95 Accessibility, ≥90 SEO, ≥90 Best Practices |
| Implement full SEO & social discovery | P0 | OG/Twitter cards render correctly; indexed within 30 days |
| Meet WCAG 2.2 AA compliance | P1 | 0 critical/blocker accessibility violations |
| Deploy security headers & HTTPS | P1 | All security headers present; SSL Labs Grade A+ |
| Establish legal compliance baseline | P1 | Privacy Policy, Terms, Cookie Consent live |
| Lay e-commerce foundation | P2 | Architecture supports future Shopify/Stripe integration |
| Achieve sub-2-second LCP on mobile 3G | P2 | Lighthouse field data confirms |

---

## 2. Brand & Project Context

### 2.1 Brand Identity

| Attribute | Value |
|-----------|-------|
| **Brand Name** | ZHADORE (pronounced: *zha·DORE*) |
| **Collection** | AMBIVALENCE — Spring/Summer 2026 |
| **Brand Tagline** | *Handmade. Intentional. Worn like armor.* |
| **Brand Voice** | Bold, dark, elegant, unapologetic, intimate |
| **Brand Archetype** | The Creator + The Ruler |
| **Aesthetic** | Dark luxury, editorial minimalism, gold-accented, high contrast |
| **Motto (internal)** | *Two women. One brand. Built from scratch. Still building.* |

### 2.2 Founders

#### Zhareal Popa — Creative Director & Founder
- Degree in Apparel Design from Oregon State University
- Creates one-of-one, handbuilt pieces for women who don't fit a mold
- Design philosophy: *"The deeper the shadow, the more deliberately the light finds its way in."*
- LinkedIn: [linkedin.com/in/zhareal-popa-/](https://www.linkedin.com/in/zhareal-popa-/)

#### Zakia Yesmin — Tech & Fashion · Builder
- Studies Business Information Systems in New York
- Lives at the intersection of tech and fashion
- Built the original ZHADORE website from the ground up
- Manages digital strategy, infrastructure, and brand presence
- LinkedIn: [linkedin.com/in/zakia-yesmin-061321308/](https://www.linkedin.com/in/zakia-yesmin-061321308/)

### 2.3 Collection Themes (SS 2026 — AMBIVALENCE)

| # | Theme Name | Tagline | Looks | Vibe |
|---|-----------|---------|-------|------|
| 1 | **DRESSED IN INTENTION** | *Built for the body as it is. Elevated the way it deserves.* | 4 | Grounded luxury, structural, deliberate |
| 2 | **IT'S BUSINESS BABE** | *You can do it alone. That's why they're jealous.* | 4 | Power dressing, unapologetic, corporate edge |
| 3 | **EXTRA-VAGENT** | *Dressed like a dark queen. Built like an empire.* | 6 | Dark opulence, regal drama, statement pieces |

**Total Looks:** 14 (across 3 themes)  
**Collection Name:** AMBIVALENCE  
**Season:** Spring/Summer 2026

### 2.4 Contact & Social Presence

| Channel | Handle / Address | Status |
|---------|------------------|--------|
| **Email** | Zhadoree@gmail.com | Active |
| **Instagram** | [@zh.adore](https://www.instagram.com/zh.adore/) | Active |
| **Website** | [zh-adore-xg5g.vercel.app](https://zh-adore-xg5g.vercel.app/) | Live (current) |
| **Custom Domain** | TBD (e.g., zhadore.com) | Recommended |

---

## 3. Current State Analysis

### 3.1 What Works Well

| Strength | Detail |
|----------|--------|
| **Visual Identity** | Strong typography (Playfair Display + Jost), gold-on-dark palette, editorial feel |
| **Canvas Animation** | Ambient particle canvas, silk-effect canvas — distinctive and memorable |
| **Typography** | Elegant serif/sans-serif pairing; good hierarchy intent |
| **Brand Storytelling** | Compelling founder bios; authentic, unpolished voice |
| **Mobile Responsiveness** | Viewport meta tag present; responsive layout intent |
| **HTTPS & HSTS** | Vercel-provided SSL with Strict-Transport-Security header |
| **Performance (baseline)** | Astro static site — inherently fast with zero JS by default |
| **Image Organization** | Logical folder structure: `/images/{theme}/look-{n}.jpg` |

### 3.2 Critical Gaps (from Forensic Audit, May 2026)

#### SEO & Discoverability
- ❌ No `<meta name="description">`
- ❌ No Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- ❌ No Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- ❌ No canonical URL (`<link rel="canonical">`)
- ❌ No `robots.txt` (returns 404)
- ❌ No `sitemap.xml` (returns 404)
- ❌ No structured data / JSON-LD (Organization, Person, Product, ImageObject)
- ❌ No favicon, apple-touch-icon, or manifest.json

#### Accessibility (WCAG 2.1/2.2)
- ❌ **No `<h1>`** — heading hierarchy jumps directly to `<h2>`
- ❌ **No skip-navigation link** (WCAG 2.4.1)
- ❌ **No semantic HTML5 landmarks** — zero usage of `<main>`, `<header>`, `<article>`, `<figure>`, `<figcaption>`, `<time>`
- ❌ Decorative canvases lack `aria-hidden` (except `ambient-canvas`)
- ❌ All 15 `<img>` tags lack `width` and `height` attributes (CLS risk)
- ❌ External Instagram link lacks `rel="noopener noreferrer"`

#### Security
- ❌ Missing `Content-Security-Policy` header
- ❌ Missing `X-Content-Type-Options: nosniff`
- ❌ Missing `X-Frame-Options` / `frame-ancestors`
- ❌ Missing `Referrer-Policy`
- ❌ Missing `Permissions-Policy`
- ❌ Overly permissive CORS: `Access-Control-Allow-Origin: *`
- ❌ No Subresource Integrity (SRI) hashes on external assets

#### Performance
- ❌ No `font-display: swap` on Google Fonts (FOIT risk)
- ❌ No responsive images (`srcset`, `sizes`)
- ❌ No modern image formats (WebP/AVIF)
- ❌ No `prefers-reduced-motion` media query for canvas animations
- ❌ No `<noscript>` fallback

#### Content & UX
- ❌ Deep links return 404 (`/collection`, `/themes`, `/about`, `/contact`)
- ❌ Inconsistent naming (BAE-CAY vs DRESSED IN INTENTION across versions)
- ❌ No e-commerce infrastructure (no pricing, cart, size guide, shipping policy)
- ❌ Logo links to `#` instead of `#hero` or `/`

#### Legal & Compliance
- ❌ No Privacy Policy
- ❌ No Terms of Service
- ❌ No Cookie Consent Banner
- ❌ No Accessibility Statement
- ❌ No physical business address

### 3.3 Technical Stack (Current)

| Component | Technology | Notes |
|-----------|-----------|-------|
| **Framework** | Astro (static mode) | Inferred from `/_astro/` asset paths |
| **Hosting** | Vercel | Free/Hobby tier |
| **Styling** | Custom CSS (single bundled file) | `/_astro/index.BZ0_mp0d.css` |
| **JS** | Single hoisted module | `/_astro/hoisted.CXhhAiy7.js` |
| **Fonts** | Google Fonts (Playfair Display + Jost) | Loaded via `<link>` |
| **Animations** | Canvas API (custom) | Ambient, silk, particle canvases |
| **Images** | Static JPG | 15 images across 3 themes |
| **Version Control** | Git (GitHub) | Deployed via Vercel Git integration |

---

## 4. Project Vision & Goals

### 4.1 Vision Statement

> *To create a digital home for ZHADORE that is as intentional as the clothing — a fast, elegant, discoverable, and accessible static website that honors the brand's dark-luxury aesthetic while laying a scalable foundation for e-commerce, content marketing, and community growth.*

### 4.2 Strategic Goals

| Goal | Description | Timeline |
|------|-------------|----------|
| **G1: Discoverability** | Rank on page 1 for brand name; enable rich social sharing previews | Month 1 |
| **G2: Trust & Legitimacy** | Full legal compliance; professional-grade UX; verified social presence | Month 1 |
| **G3: Accessibility** | Achieve WCAG 2.2 AA conformance; serve all users regardless of ability | Month 1 |
| **G4: Performance** | Achieve <2s LCP; sub-100ms TTFB; Lighthouse ≥95 across all categories | Month 1 |
| **G5: Scalability** | Architecture ready for e-commerce integration, blog, lookbook expansion | Month 2+ |
| **G6: Brand Growth** | Increase Instagram followers; build email list; generate press inquiries | Ongoing |

---

## 5. Target Audience & User Personas

### 5.1 Primary Personas

#### P1: The Independent Fashion Consumer
- **Age:** 22–38
- **Gender:** Women & non-binary
- **Location:** Urban US (NYC, LA, Portland, Austin)
- **Income:** $60K–$150K
- **Behavior:** Discovers brands on Instagram; values authenticity and craftsmanship; willing to invest in unique pieces
- **Needs:** See the collection, understand the brand story, know pricing, contact/buy
- **Pain Points:** Can't find pricing; can't share the site with friends (no OG images); site feels incomplete

#### P2: The Fashion Press / Stylist
- **Age:** 25–50
- **Role:** Editor, stylist, influencer, boutique buyer
- **Needs:** High-res lookbook images, brand background, press contact, founder story
- **Pain Points:** No press kit; no downloadable assets; no clear contact path

#### P3: The Tech-Savvy Collaborator
- **Age:** 20–35
- **Role:** Potential collaborator, model, photographer, developer
- **Needs:** Understand the brand's digital ambition; see the tech-meets-fashion angle
- **Pain Points:** Rough edges undermine brand credibility

### 5.2 Secondary Personas

#### P4: The Accessibility-Dependent User
- Uses screen reader, keyboard navigation, or requires reduced motion
- **Needs:** Navigate the site fully without barriers; access all content equally
- **Pain Points:** No skip link; no semantic landmarks; canvas animations with no fallback

#### P5: The Search Engine Crawler
- Googlebot, Bingbot, social media crawlers (Twitter Bot, Facebook Crawler)
- **Needs:** Clear content signals, structured data, canonical URLs, sitemap
- **Pain Points:** No meta description; no structured data; no robots.txt

---

## 6. Functional Requirements

### 6.1 Site-Wide Requirements

#### FR-001: Global Header / Navigation
- Fixed/sticky navigation bar with brand logo (links to top of page)
- Navigation links: Collection, Themes, About, Contact
- "SS 2026" season badge
- Mobile: hamburger menu with smooth open/close animation
- Keyboard accessible: all links reachable via Tab; visible focus indicators
- Active state indication for current section (scroll-spy)

#### FR-002: Global Footer
- Brand logo and tagline
- Duplicate navigation links (Collection, Themes, About, Contact)
- Contact information (email + Instagram)
- Copyright notice with dynamic year
- Links to: Privacy Policy, Terms of Service, Accessibility Statement

#### FR-003: Skip Navigation
- "Skip to main content" link as first focusable element
- Visible on focus; hidden otherwise
- Targets `<main id="main-content">`

#### FR-004: Favicon & PWA Icons
- `favicon.ico` (16×16, 32×32)
- `favicon.png` (32×32)
- `apple-touch-icon.png` (180×180)
- `manifest.json` with theme color, display mode, icons
- `favicon.svg` for modern browsers

#### FR-005: 404 Page
- Custom 404 page with brand styling
- "Page not found" message with return-to-home link
- Consistent with overall design language
- HTTP status code 404 properly returned

### 6.2 Hero Section (Home)

#### FR-010: Hero Visuals
- Full-viewport hero with brand name "ZHADORE" as large typographic statement
- Collection name "AMBIVALENCE" and season "SS 2026" displayed
- Animated gold line (SVG) with entrance animation
- "SCROLL" indicator with animated line
- Canvas animations: ambient particles + silk effect (see FR-011)

#### FR-011: Canvas Animations
- Ambient particle canvas (`#ambient-canvas`) with subtle floating particles
- Silk-effect canvas (`#silk-canvas`) with flowing fabric simulation
- Particle canvas (`#particle-canvas`) with interactive or ambient particles
- **All canvases:** `aria-hidden="true" role="presentation"`
- **Respect `prefers-reduced-motion`:** Disable or drastically simplify animations
- **Performance:** Use `requestAnimationFrame`; throttle to device capability
- Provide static CSS fallback background for no-JS / reduced-motion

#### FR-012: Hero Content
- **Heading:** `<h1>` containing brand name and collection (replaces current zero-H1 issue)
  - Example: `<h1>ZHADORE — AMBIVALENCE · SS 2026</h1>`
- **Subtitle:** "A FASHION PORTFOLIO · SS 2026" or collection tagline
- Gold decorative rule/divider

### 6.3 Collection / Themes Section

#### FR-020: Theme Display
- Three theme sections, each containing:
  - **Eyebrow:** "ZHADORE · SS 2026"
  - **Theme Title:** `<h2>` with theme name (e.g., "DRESSED IN INTENTION")
  - **Theme Tagline:** Descriptive subtitle paragraph
  - **Photo Grid:** Responsive image gallery
- Sections use `<section>` elements with unique `id` attributes
- Scroll-triggered reveal animations (respect `prefers-reduced-motion`)

#### FR-021: Photo Grid
- CSS Grid layout: 2–3 columns on desktop; 2 columns on tablet; 1 column on mobile
- Images load with `loading="lazy"` and explicit `width`/`height`
- Each image wrapped in `<figure>` with `<figcaption>` for accessibility
- **Responsive images:** `<img>` with `srcset` and `sizes` attributes
- **Modern formats:** Serve WebP with JPG fallback via `<picture>` element
- Lightbox/expand on click (optional, P2)

#### FR-022: Look Details (Future Enhancement — P2)
- Click on a look to see: garment name, materials, available sizes, price
- "Inquire" or "Pre-Order" CTA button
- Share button for individual looks

### 6.4 About Section

#### FR-030: About Header
- Section eyebrow: "THE FACES BEHIND IT"
- Heading: `<h2>` "Two women. One brand."
- Subtitle: "Built from scratch. Still building."

#### FR-031: Founder Cards
- Two cards (Zhareal Popa, Zakia Yesmin) displayed side-by-side (desktop) or stacked (mobile)
- Each card includes:
  - Avatar initial ("Z")
  - Label (e.g., "THE DESIGNER")
  - Full name
  - Role
  - Bio paragraph
  - Social/contact links (Email, LinkedIn) with proper `rel` attributes
- Cards use CSS custom properties for accent colors

#### FR-032: Contact Section
- "Get in touch" label
- Email link: `mailto:Zhadoree@gmail.com` with envelope icon
- Instagram link: `https://www.instagram.com/zh.adore/` with `target="_blank" rel="noopener noreferrer"`
- SVGs for icons (inline, accessible)

### 6.5 Legal Pages

#### FR-040: Privacy Policy Page
- Dedicated page at `/privacy`
- Content covering: data collection, cookies, third-party services, user rights
- GDPR/CCPA compliant language
- Last updated date

#### FR-041: Terms of Service Page
- Dedicated page at `/terms`
- Content covering: intellectual property, user conduct, limitation of liability

#### FR-042: Accessibility Statement
- Dedicated page at `/accessibility`
- Commitment to WCAG 2.2 AA
- Known limitations and workarounds
- Contact for accessibility feedback

#### FR-043: Cookie Consent Banner
- Dismissible banner on first visit
- "This site uses essential cookies only" or similar
- Stores consent in `localStorage`
- No tracking cookies unless explicitly added later

### 6.6 SEO & Metadata

#### FR-050: Meta Tags (per page)
See [Section 10 — SEO & Discoverability Strategy](#10-seo--discoverability-strategy)

#### FR-051: `robots.txt`
- Allow all crawlers; point to sitemap
```text
User-agent: *
Allow: /
Sitemap: https://[domain]/sitemap.xml
```

#### FR-052: `sitemap.xml`
- Auto-generated at build time
- Include all pages: `/`, `/privacy`, `/terms`, `/accessibility`
- Include `<lastmod>`, `<changefreq>`, `<priority>`

#### FR-053: Structured Data (JSON-LD)
- `Organization` schema on home page
- `Person` schema × 2 (Zhareal Popa, Zakia Yesmin) on About section
- `ImageObject` schema for collection lookbook images
- `WebSite` schema with SearchAction
- `BreadcrumbList` schema where applicable

---

## 7. Content & Information Architecture

### 7.1 Site Map

```
zhadore.com (or custom domain)
├── /                    → Home (Hero + Collection + Themes + About + Contact)
├── /privacy/            → Privacy Policy
├── /terms/              → Terms of Service
├── /accessibility/      → Accessibility Statement
├── /404.html            → Custom 404 Page
├── /robots.txt          → Crawler directives
├── /sitemap.xml         → XML Sitemap
└── /manifest.json       → PWA Manifest
```

### 7.2 Page Structure (Home — Single Page)

```
<skip-link> → #main-content
<header>
  <nav id="nav">
    <a class="logo">ZHADORE</a>
    <ul class="nav-links">
      <li><a href="#collection">Collection</a></li>
      <li><a href="#themes">Themes</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <span class="nav-season">SS 2026</span>
  </nav>
</header>

<main id="main-content">
  <section id="hero">
    <canvas id="ambient-canvas" aria-hidden="true" role="presentation"></canvas>
    <canvas id="silk-canvas" aria-hidden="true" role="presentation"></canvas>
    <canvas id="particle-canvas" aria-hidden="true" role="presentation"></canvas>
    <h1>ZHADORE — AMBIVALENCE · SS 2026</h1>
    <p class="hero-subtitle">...</p>
    <div class="hero-scroll">SCROLL</div>
  </section>

  <section id="collection" aria-labelledby="collection-heading">
    <h2 id="collection-heading">Collection</h2>
    <section id="themes" aria-labelledby="themes-heading">
      <h2 id="themes-heading">Themes</h2>
      
      <section id="dressed-in-intention" aria-labelledby="theme-1-title">
        <h3 id="theme-1-title">DRESSED IN INTENTION</h3>
        <!-- photo grid with <figure> elements -->
      </section>

      <section id="business-babe" aria-labelledby="theme-2-title">
        <h3 id="theme-2-title">IT'S BUSINESS BABE</h3>
        <!-- photo grid -->
      </section>

      <section id="extra-vagent" aria-labelledby="theme-3-title">
        <h3 id="theme-3-title">EXTRA-VAGENT</h3>
        <!-- photo grid -->
      </section>
    </section>
  </section>

  <section id="about" aria-labelledby="about-heading">
    <h2 id="about-heading">Two women. One brand.</h2>
    <!-- founder cards -->
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Get in touch</h2>
      <!-- contact links -->
    </section>
  </section>
</main>

<footer>
  <!-- brand, nav, contact, legal links, copyright -->
</footer>
```

### 7.3 Content Inventory

| Content Item | Type | Owner | Refresh Cadence |
|--------------|------|-------|-----------------|
| Hero headline & subtitle | Text | Zhareal | Per season |
| Theme names & taglines | Text | Zhareal | Per season |
| Lookbook images | Image | Zhareal | Per collection drop |
| Founder bios | Text | Both | As needed |
| Founder photos/avatars | Image | Both | As needed |
| Contact info | Text | Zakia | As needed |
| Privacy Policy | Legal text | Zakia | Annual review |
| Terms of Service | Legal text | Zakia | Annual review |
| Accessibility Statement | Text | Zakia | Quarterly review |

---

## 8. Design System & Visual Language

### 8.1 Design Principles

1. **Dark Luxury** — Deep backgrounds, restrained use of gold, high contrast
2. **Editorial Minimalism** — Generous whitespace; content-first layout
3. **Typography-Driven** — Type is the primary visual element
4. **Intentional Motion** — Animations serve the brand, not distract from it
5. **Accessible by Default** — Elegance does not exclude

### 8.2 Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background (primary)** | Deep black | `#0A0A0A` | Page background |
| **Background (elevated)** | Charcoal | `#111111` | Cards, sections |
| **Background (surface)** | Dark gray | `#1A1A1A` | Interactive elements |
| **Text (primary)** | Off-white | `#F0EDE8` | Body text, headings |
| **Text (secondary)** | Muted gray | `#9A9490` | Eyebrows, meta text |
| **Accent (gold primary)** | Antique gold | `#C4913A` | CTAs, highlights, rules |
| **Accent (gold light)** | Champagne gold | `#E8C878` | Gradients, hover states |
| **Accent (silver)** | Cool silver | `#D2D2DC` | Secondary accents |
| **Border (subtle)** | Dark border | `#2A2A2A` | Dividers, card borders |

### 8.3 Typography

| Usage | Font | Weight | Size (Desktop) | Notes |
|-------|------|--------|----------------|-------|
| **Brand Logo** | Playfair Display | 700 | 24px | Uppercase letter-spacing |
| **H1 (Hero)** | Playfair Display | 700 | clamp(48px, 8vw, 120px) | Tight letter-spacing |
| **H2 (Section)** | Playfair Display | 400 | clamp(36px, 5vw, 64px) | Italic option for emphasis |
| **H3 (Theme)** | Playfair Display | 700 | clamp(28px, 4vw, 48px) | Uppercase |
| **Body** | Jost | 300–400 | 18px | Generous line-height (1.7) |
| **Eyebrow** | Jost | 400 | 12px | Uppercase, letter-spacing: 0.2em |
| **Nav Links** | Jost | 300 | 14px | Uppercase, letter-spacing: 0.15em |
| **Buttons/CTAs** | Jost | 500 | 14px | Uppercase, letter-spacing: 0.1em |

### 8.4 Spacing Scale

```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 192px
```

- Section vertical padding: `clamp(80px, 15vh, 160px)`
- Content max-width: `1200px` with `24px` padding on mobile

### 8.5 Component Library (Core)

| Component | Description | States |
|-----------|-------------|--------|
| **Gold Line** | Animated SVG line with gradient | entrance animation, static |
| **Photo Slot** | Image container with lazy load | loading, loaded, error |
| **Reveal** | Scroll-triggered fade-up | hidden, visible (respects reduced-motion) |
| **Person Card** | Founder profile card | default, hover |
| **Contact Link** | Email/social link with icon | default, hover, focus |
| **Button (Primary)** | Gold/accent CTA | default, hover, focus, active, disabled |
| **Button (Ghost)** | Outlined transparent button | default, hover, focus, active, disabled |
| **Cookie Banner** | Bottom-fixed consent notice | visible, dismissed |
| **Mobile Menu** | Off-canvas or overlay nav | closed, open (animated) |
| **Scroll Hint** | Animated scroll indicator | visible, hidden (after scroll) |

### 8.6 Motion Design

- **Entrance animations:** Fade-up + slight scale (0.98→1) over 600ms, eased
- **Gold line animation:** Stroke-dashoffset draw over 1.5s, eased
- **Canvas particles:** 30–60fps, `requestAnimationFrame`, throttled on low-power devices
- **Hover transitions:** 200–300ms ease-out on interactive elements
- **Page transitions:** Optional view-transition API for SPA navigation (P2)
- **`prefers-reduced-motion`:** All animations disabled or reduced to opacity-only

---

## 9. Technical Architecture

### 9.1 Technology Stack (Recommended)

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Astro v5+ (static mode) | Proven; already in use; excellent performance; zero-JS by default |
| **UI Components** | Astro `.astro` files + Vanilla JS Web Components | No heavy framework overhead |
| **Styling** | Tailwind CSS v4 OR Custom CSS with PostCSS | Utility-first for velocity; custom properties for design tokens |
| **Type Checking** | TypeScript (strict mode) | Code quality; already supported by Astro |
| **Image Optimization** | `@astrojs/image` / Astro built-in Image component | Auto WebP/AVIF, responsive srcset, blur-up placeholders |
| **Content Management** | Astro Content Collections (`.md`/`.mdx`) | Type-safe; Git-based; no CMS overhead |
| **Font Loading** | `@fontsource` (self-hosted) or Google Fonts with `font-display: swap` | Eliminates external dependency; faster loading |
| **Animations** | Canvas API (vanilla) + CSS animations + Intersection Observer | No animation library overhead |
| **Deployment** | Vercel (Hobby/Pro) | Already configured; excellent Astro support; edge network |
| **Analytics** | Plausible / Cloudflare Web Analytics (privacy-first) | No cookie banners needed; GDPR-compliant |
| **Forms** | Web3Forms / Formspree (serverless) | No backend needed for contact form (P2) |
| **Version Control** | GitHub | Already in use |
| **CI/CD** | Vercel Git integration (auto-deploy on push) | Already configured |
| **Domain** | Custom domain (e.g., `zhadore.com`) via Vercel Domains or external registrar | Professional brand presence |

### 9.2 Project Structure

```
zhadore-website/
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   ├── manifest.json
│   └── images/
│       ├── dressed-in-intention/
│       │   ├── look-1.jpg
│       │   ├── look-1.webp
│       │   ├── look-2.jpg
│       │   ├── look-2.webp
│       │   ├── look-3.jpg
│       │   ├── look-3.webp
│       │   ├── look-4.jpg
│       │   └── look-4.webp
│       ├── business-babe/
│       │   ├── look-1.jpg
│       │   ├── look-1.webp
│       │   ├── look-2.jpg
│       │   ├── look-2.webp
│       │   ├── look-3.jpg
│       │   ├── look-3.webp
│       │   ├── look-4.jpg
│       │   └── look-4.webp
│       ├── extra-vagent/
│       │   ├── look-1.jpg
│       │   ├── look-1.webp
│       │   ├── look-2.jpg
│       │   ├── look-2.webp
│       │   ├── look-3.jpg
│       │   ├── look-3.webp
│       │   ├── look-4.jpg
│       │   ├── look-4.webp
│       │   ├── look-5.jpg
│       │   ├── look-5.webp
│       │   ├── look-6.jpg
│       │   └── look-6.webp
│       └── og/
│           └── zhadore-og-image.jpg  (1200×630px)
├── src/
│   ├── assets/
│   │   └── (processed images, icons)
│   ├── components/
│   │   ├── BaseHead.astro          (meta tags, OG, Twitter cards)
│   │   ├── Header.astro            (nav, logo, mobile menu)
│   │   ├── Footer.astro            (brand, nav, legal links)
│   │   ├── SkipLink.astro          (skip-to-content)
│   │   ├── Hero.astro              (hero section with canvas)
│   │   ├── GoldLine.astro          (animated SVG line)
│   │   ├── ThemeSection.astro      (reusable theme display)
│   │   ├── PhotoGrid.astro         (responsive image grid)
│   │   ├── PhotoSlot.astro         (individual image with srcset)
│   │   ├── PersonCard.astro        (founder bio card)
│   │   ├── ContactLink.astro       (email/social link component)
│   │   ├── CookieBanner.astro      (cookie consent)
│   │   ├── ScrollHint.astro        (scroll indicator)
│   │   ├── SEO.astro               (JSON-LD structured data)
│   │   └── RevealWrapper.astro     (scroll-triggered animation)
│   ├── content/
│   │   ├── collections/            (if using content collections)
│   │   │   └── looks/
│   │   │       ├── dressed-in-intention/
│   │   │       │   ├── look-1.md
│   │   │       │   └── ...
│   │   │       ├── business-babe/
│   │   │       └── extra-vagent/
│   │   └── config.ts
│   ├── data/
│   │   ├── themes.ts               (theme metadata)
│   │   ├── founders.ts             (founder bios, links)
│   │   └── site.ts                 (site-wide config)
│   ├── layouts/
│   │   ├── BaseLayout.astro        (main layout wrapper)
│   │   └── LegalLayout.astro       (layout for legal pages)
│   ├── pages/
│   │   ├── index.astro             (home page)
│   │   ├── privacy.astro           (privacy policy)
│   │   ├── terms.astro             (terms of service)
│   │   ├── accessibility.astro     (accessibility statement)
│   │   └── 404.astro               (custom 404)
│   ├── scripts/
│   │   ├── ambient-canvas.ts       (ambient particle effect)
│   │   ├── silk-canvas.ts          (silk fabric simulation)
│   │   ├── particle-canvas.ts      (interactive particles)
│   │   ├── reveal-observer.ts      (Intersection Observer for reveal animations)
│   │   ├── mobile-nav.ts           (mobile menu toggle)
│   │   └── cookie-consent.ts       (cookie banner logic)
│   └── styles/
│       ├── global.css              (CSS reset, custom properties, fonts)
│       ├── tokens.css              (design tokens)
│       └── utilities.css           (utility classes)
├── astro.config.mjs
├── tailwind.config.js              (if using Tailwind)
├── tsconfig.json
├── package.json
├── .env                             (environment variables)
├── .env.example
├── vercel.json                      (headers, redirects, rewrites)
├── .gitignore
└── README.md
```

### 9.3 Key Dependencies

```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "@fontsource/playfair-display": "^5.0.0",
    "@fontsource/jost": "^5.0.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.0",
    "typescript": "^5.5.0",
    "sharp": "^0.33.0",
    "prettier": "^3.0.0",
    "prettier-plugin-astro": "^0.14.0"
  }
}
```

### 9.4 `vercel.json` Configuration

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "Content-Security-Policy", "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" }
      ]
    },
    {
      "source": "/(.*).(jpg|jpeg|png|webp|avif|svg|ico)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*).(css|js)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "redirects": [
    { "source": "/collection", "destination": "/#collection", "permanent": true },
    { "source": "/themes", "destination": "/#themes", "permanent": true },
    { "source": "/about", "destination": "/#about", "permanent": true },
    { "source": "/contact", "destination": "/#contact", "permanent": true }
  ]
}
```

---

## 10. SEO & Discoverability Strategy

### 10.1 Meta Tags Template (per page)

```html
<!-- Primary Meta -->
<title>ZHADORE — AMBIVALENCE · SS 2026 | Handmade Luxury Fashion</title>
<meta name="description" content="ZHADORE is a handbuilt luxury fashion brand by Zhareal Popa & Zakia Yesmin. Discover the AMBIVALENCE SS 2026 collection — DRESSED IN INTENTION, IT'S BUSINESS BABE, EXTRA-VAGENT.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://zhadore.com/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="ZHADORE — AMBIVALENCE · SS 2026">
<meta property="og:description" content="Handmade. Intentional. Worn like armor. Discover the SS 2026 collection.">
<meta property="og:image" content="https://zhadore.com/images/og/zhadore-og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="https://zhadore.com/">
<meta property="og:site_name" content="ZHADORE">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ZHADORE — AMBIVALENCE · SS 2026">
<meta name="twitter:description" content="Handmade. Intentional. Worn like armor.">
<meta name="twitter:image" content="https://zhadore.com/images/og/zhadore-og-image.jpg">
```

### 10.2 Structured Data (JSON-LD)

#### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ZHADORE",
  "url": "https://zhadore.com/",
  "logo": "https://zhadore.com/favicon.png",
  "description": "Handmade luxury fashion brand. Handmade. Intentional. Worn like armor.",
  "sameAs": [
    "https://www.instagram.com/zh.adore/",
    "https://www.linkedin.com/in/zhareal-popa-/",
    "https://www.linkedin.com/in/zakia-yesmin-061321308/"
  ],
  "founders": [
    {
      "@type": "Person",
      "name": "Zhareal Popa",
      "jobTitle": "Creative Director & Founder"
    },
    {
      "@type": "Person",
      "name": "Zakia Yesmin",
      "jobTitle": "Tech & Fashion · Builder"
    }
  ]
}
```

### 10.3 Keyword Strategy

| Category | Primary Keywords | Secondary Keywords |
|----------|-----------------|-------------------|
| **Brand** | ZHADORE, Zhadore fashion, Zhadore brand | Zhareal Popa, Zakia Yesmin |
| **Collection** | AMBIVALENCE SS 2026, ZHADORE SS 2026 | DRESSED IN INTENTION, IT'S BUSINESS BABE, EXTRA-VAGENT |
| **Category** | handmade luxury fashion, one-of-one clothing, custom fashion | dark luxury fashion, editorial fashion brand, bespoke womenswear |
| **Location** | Portland fashion designer, New York fashion tech | Oregon State University fashion, independent fashion brand USA |

### 10.4 Sitemap Strategy

- Auto-generated via `@astrojs/sitemap`
- Include: `/`, `/privacy`, `/terms`, `/accessibility`
- `<changefreq>`: `weekly` for home; `monthly` for legal pages
- `<priority>`: `1.0` for home; `0.3` for legal pages

### 10.5 Social Media Integration

- Instagram embedded feed or link (P2)
- Pinterest "Save" button on looks (P2)
- Social share buttons on individual looks (P2)
- TikTok/Instagram Reels embed support (P3)

---

## 11. Accessibility Requirements (WCAG 2.2 AA)

### 11.1 Compliance Checklist

| WCAG Criterion | Requirement | Implementation |
|---------------|-------------|----------------|
| **1.1.1 Non-text Content** | All images have alt text | Descriptive `alt` on all `<img>`; empty `alt=""` on decorative |
| **1.3.1 Info & Relationships** | Semantic HTML | Use `<header>`, `<main>`, `<nav>`, `<section>`, `<figure>`, `<figcaption>`, `<footer>` |
| **1.4.3 Contrast (Minimum)** | 4.5:1 for text; 3:1 for large text | Verify all text/background combos; use design tokens |
| **1.4.10 Reflow** | No horizontal scroll at 320px | Responsive design; max-width containers |
| **1.4.11 Non-text Contrast** | 3:1 for UI components | Focus indicators, form borders ≥3:1 |
| **2.1.1 Keyboard** | All functionality via keyboard | Tab-indexed nav, focusable links, keyboard-accessible mobile menu |
| **2.4.1 Bypass Blocks** | Skip navigation link | `<a class="skip-link" href="#main-content">` as first `<body>` child |
| **2.4.2 Page Titled** | Descriptive `<title>` | Unique titles per page |
| **2.4.3 Focus Order** | Logical tab order | DOM order matches visual order |
| **2.4.7 Focus Visible** | Visible focus indicator | `:focus-visible` styles on all interactive elements (gold ring) |
| **2.5.3 Label in Name** | Visible text matches accessible name | Link text matches `aria-label` |
| **3.1.1 Language** | Page language declared | `<html lang="en">` |
| **3.3.2 Labels/Instructions** | Form labels present | Contact form labels (P2) |
| **4.1.3 Status Messages** | Dynamic content announced | `aria-live` regions for dynamic updates |

### 11.2 Specific Accessibility Implementations

- **Heading Hierarchy:** `h1` (page title) → `h2` (sections) → `h3` (theme names)
- **Skip Link:** `<a class="skip-link" href="#main-content">Skip to main content</a>`
- **Canvas Fallback:** All canvases `aria-hidden="true" role="presentation"`; static CSS fallback
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` disables all animations
- **Focus Indicator:** Gold `outline` with `outline-offset: 2px` on `:focus-visible`
- **Image Alt Text:** Descriptive for content images (e.g., "ZHADORE EXTRA-VAGENT look 3: floor-length black gown with gold embroidery")
- **Color Independence:** Information never conveyed by color alone
- **Zoom Support:** Site functional at 200% browser zoom

### 11.3 Testing Plan

| Method | Tool | Frequency |
|--------|------|-----------|
| Automated audit | Lighthouse / Axe DevTools | Every PR |
| Screen reader testing | NVDA (Windows), VoiceOver (macOS) | Per release |
| Keyboard-only testing | Manual tab-through | Per release |
| Contrast checking | WebAIM Contrast Checker | Design phase |
| HTML validation | W3C Nu HTML Checker | Per release |

---

## 12. Performance Targets

### 12.1 Core Web Vitals

| Metric | Target (Mobile) | Target (Desktop) |
|--------|-----------------|------------------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | ≤ 1.5s |
| **FID** (First Input Delay) | ≤ 100ms | ≤ 50ms |
| **INP** (Interaction to Next Paint) | ≤ 200ms | ≤ 100ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | ≤ 0.05 |
| **TTFB** (Time to First Byte) | ≤ 200ms | ≤ 100ms |

### 12.2 Lighthouse Scores

| Category | Target |
|----------|--------|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 |

### 12.3 Asset Performance Budget

| Asset Type | Budget |
|-----------|--------|
| **Total HTML** | ≤ 15 KB (uncompressed) |
| **Total CSS** | ≤ 30 KB (uncompressed) |
| **Total JS** | ≤ 50 KB (uncompressed) |
| **Images (hero/LCP)** | ≤ 100 KB per image (WebP) |
| **Images (gallery)** | ≤ 50 KB per image (WebP thumbnail) |
| **Fonts** | ≤ 100 KB total (self-hosted, subset) |
| **Total page weight** | ≤ 500 KB |

### 12.4 Performance Optimizations

- **Image Pipeline:** Auto-generate WebP + AVIF + responsive sizes at build time
- **Font Strategy:** Self-host Playfair Display + Jost via `@fontsource`; subset to Latin; `font-display: swap`
- **CSS:** Minify; remove unused styles; critical CSS inline in `<head>`
- **JS:** Zero JS by default (Astro static); load canvas scripts with `type="module"` + `async`
- **Caching:** Immutable cache for hashed assets; CDN edge caching via Vercel
- **Preconnect/Preload:** Preconnect to any external origins (only if fonts not self-hosted)
- **Lazy Loading:** `loading="lazy"` on all below-fold images; `fetchpriority="high"` on LCP image

---

## 13. Security & Compliance

### 13.1 Security Headers

All headers implemented via `vercel.json` (see Section 9.4):

| Header | Value | Purpose |
|--------|-------|---------|
| `Content-Security-Policy` | Strict CSP | Prevent XSS, injection |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `X-Frame-Options` | `DENY` | Prevent clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Privacy |
| `Permissions-Policy` | Restrict camera, mic, geo | Privacy |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | HTTPS enforcement (provided by Vercel, verify) |

### 13.2 Subresource Integrity (SRI)

- If any external scripts/stylesheets are loaded (not recommended), include `integrity` hashes
- Prefer self-hosted or npm-installed dependencies
- No external CDN dependencies except optionally Google Fonts (migrate to self-hosted when possible)

### 13.3 External Link Safety

- All external links: `target="_blank" rel="noopener noreferrer"`
- Instagram, LinkedIn, Email — all properly attributed

### 13.4 Data Privacy

- No user data collection beyond what Vercel logs (server access logs)
- No third-party tracking without explicit consent
- If analytics added: use privacy-first platform (Plausible, Cloudflare Web Analytics)
- Email addresses on site: consider obfuscation or contact form (P2)

---

## 14. Legal Requirements

### 14.1 Required Pages

| Page | URL | Content |
|------|-----|---------|
| **Privacy Policy** | `/privacy` | Data collection disclosure, third-party services, user rights, contact |
| **Terms of Service** | `/terms` | IP ownership, user conduct, liability limits, governing law |
| **Accessibility Statement** | `/accessibility` | WCAG commitment, known issues, feedback channel |

### 14.2 Cookie Consent

- Minimal banner: "This website uses essential cookies only to ensure proper functionality. By continuing, you accept this use."
- No opt-in/opt-out needed if using zero analytics cookies
- If analytics added: upgrade to full consent management

### 14.3 Copyright & IP

- Footer copyright: `© 2026 ZHADORE. All rights reserved.`
- All garment designs, images, and brand assets are IP of ZHADORE / Zhareal Popa
- Terms of Service to explicitly state IP ownership

### 14.4 Business Information

- Physical address and business registration (if applicable) to be added when available
- Email contact must be active and monitored: `Zhadoree@gmail.com`

---

## 15. Implementation Plan & Phases

### Phase 0: Foundation & Setup (Week 1)

| Task | Owner | Est. Effort |
|------|-------|-------------|
| Set up new Astro v5 project | Dev | 2h |
| Configure TypeScript, Tailwind, PostCSS | Dev | 2h |
| Set up project structure (folders, configs) | Dev | 1h |
| Configure `vercel.json` with security headers | Dev | 1h |
| Set up GitHub repo + Vercel deployment | Dev | 1h |
| Install dependencies (`@astrojs/sitemap`, `@fontsource`, `sharp`) | Dev | 1h |
| Create design tokens (CSS custom properties) | Dev | 2h |
| Set up font loading (self-hosted Playfair Display + Jost) | Dev | 1h |
| **Milestone:** CI/CD pipeline functional; blank site deployed | | |

### Phase 1: Core Pages & Components (Week 2–3)

| Task | Priority | Est. Effort |
|------|----------|-------------|
| Build `BaseLayout.astro` with full `<head>` (meta, OG, Twitter, JSON-LD) | P0 | 4h |
| Build `Header.astro` (nav, logo, mobile menu, scroll-spy) | P0 | 4h |
| Build `Footer.astro` (brand, nav, legal links, copyright) | P0 | 2h |
| Build `SkipLink.astro` | P0 | 0.5h |
| Build `Hero.astro` with canvas integration | P0 | 6h |
| Build `GoldLine.astro` SVG component | P1 | 1h |
| Build `ThemeSection.astro` + `PhotoGrid.astro` + `PhotoSlot.astro` | P0 | 6h |
| Build `PersonCard.astro` | P0 | 2h |
| Build `ContactLink.astro` | P0 | 1h |
| Build `ScrollHint.astro` | P1 | 1h |
| Build `RevealWrapper.astro` | P1 | 2h |
| Build `CookieBanner.astro` | P1 | 2h |
| Build `Home Page` (`index.astro`) — compose all sections | P0 | 4h |
| **Milestone:** Full home page functional with all sections | | |

### Phase 2: SEO, Accessibility & Performance (Week 3–4)

| Task | Priority | Est. Effort |
|------|----------|-------------|
| Implement all meta tags per page | P0 | 2h |
| Implement JSON-LD structured data | P0 | 3h |
| Generate `robots.txt` + `sitemap.xml` | P0 | 1h |
| Run accessibility audit; fix all critical/blocker issues | P0 | 4h |
| Implement responsive images (WebP, srcset, sizes) | P0 | 3h |
| Add `width`/`height` to all images | P0 | 1h |
| Implement `prefers-reduced-motion` support | P1 | 2h |
| Optimize canvas scripts (lazy load, throttle) | P1 | 3h |
| Performance audit; optimize to Lighthouse ≥95 | P0 | 4h |
| **Milestone:** All P0 SEO/accessibility/performance targets met | | |

### Phase 3: Legal Pages & Compliance (Week 4)

| Task | Priority | Est. Effort |
|------|----------|-------------|
| Write Privacy Policy content | Founder/Dev | 2h |
| Write Terms of Service content | Founder/Dev | 2h |
| Write Accessibility Statement | Dev | 1h |
| Build `/privacy`, `/terms`, `/accessibility` pages | Dev | 3h |
| Build custom 404 page | Dev | 1h |
| Add footer links to legal pages | Dev | 0.5h |
| Set up redirects for `/collection`, `/themes`, etc. | Dev | 0.5h |
| **Milestone:** Site legally compliant | | |

### Phase 4: Polish & Launch (Week 5)

| Task | Priority | Est. Effort |
|------|----------|-------------|
| Cross-browser testing (Chrome, Firefox, Safari, Edge) | Dev | 3h |
| Mobile device testing (iOS Safari, Android Chrome) | Dev | 2h |
| Screen reader testing (NVDA, VoiceOver) | Dev | 2h |
| Final content review with founders | Founders | 2h |
| Domain setup (custom domain) | Dev | 1h |
| Final Lighthouse + accessibility audit | Dev | 1h |
| Social sharing preview validation (OG/Twitter debuggers) | Dev | 1h |
| Google Search Console + Bing Webmaster Tools submission | Dev | 1h |
| **Milestone:** 🚀 LAUNCH | | |

### Phase 5: Post-Launch Enhancements (Month 2+)

| Task | Priority |
|------|----------|
| Add privacy-first analytics (Plausible/Cloudflare) | P2 |
| Lightbox / full-screen image viewer for looks | P2 |
| Contact form (Web3Forms/Formspree integration) | P2 |
| Individual look pages with details & pricing | P2 |
| Instagram feed embed on site | P2 |
| Email newsletter signup (ConvertKit/Mailchimp) | P2 |
| E-commerce integration (Shopify/Stripe) | P3 |
| Blog / Editorial content section | P3 |
| Multi-language support (i18n) | P3 |
| Press kit / media downloads page | P3 |

---

## 16. Success Metrics & KPIs

### 16.1 Technical KPIs

| Metric | Target | Measurement Tool |
|--------|--------|-----------------|
| Lighthouse Performance | ≥ 95 | Lighthouse CI |
| Lighthouse Accessibility | ≥ 95 | Lighthouse CI |
| Lighthouse SEO | ≥ 90 | Lighthouse CI |
| Lighthouse Best Practices | ≥ 90 | Lighthouse CI |
| Mobile LCP | ≤ 2.5s | PageSpeed Insights / CrUX |
| TTFB | ≤ 200ms | PageSpeed Insights |
| CLS | ≤ 0.1 | PageSpeed Insights |
| HTML validity | 0 errors | W3C Validator |
| WCAG 2.2 AA violations | 0 critical/blocker | Axe DevTools |

### 16.2 Business KPIs

| Metric | Target | Timeline |
|--------|--------|----------|
| Google indexed pages | All pages indexed | Within 30 days |
| Brand search impressions | Increasing MoM | Ongoing |
| Instagram profile visits from website | ≥ 50/month | Ongoing |
| Email inquiries | ≥ 5/month | Ongoing |
| Social share preview renders correctly | 100% | At launch |
| Bounce rate | ≤ 60% | Ongoing |
| Avg. session duration | ≥ 90s | Ongoing |

---

## 17. Open Questions & Risks

### 17.1 Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| Q1 | What is the target custom domain? (`zhadore.com`?) | Zakia | 🔴 Open |
| Q2 | Are there high-resolution original images available for WebP conversion? | Zhareal | 🔴 Open |
| Q3 | Should there be a contact form in addition to email links? | Both | 🟡 P2 |
| Q4 | Will e-commerce be integrated in the near future? Platform preference? | Both | 🟡 P3 |
| Q5 | Should the site include a blog or editorial section? | Zhareal | 🟡 P3 |
| Q6 | Are there model release forms for all lookbook images? | Zhareal | 🔴 Open |
| Q7 | Is there a brand style guide or brand book to reference? | Zhareal | 🔴 Open |
| Q8 | Preferred analytics platform (if any)? | Zakia | 🟡 P2 |
| Q9 | Should we add a "Size Guide" page? | Zhareal | 🟡 P2 |
| Q10 | Are there any upcoming collections to plan for? | Zhareal | 🟡 Future |

### 17.2 Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Images not available in high-res for optimization | Medium | Medium | Use current images as fallback; optimize within constraints |
| Custom domain unavailable or expensive | Low | High | Research alternatives early (`zhadore.co`, `zhadore.design`, etc.) |
| Founder bandwidth for content creation | Medium | High | Use existing content as baseline; iterate post-launch |
| Vercel free tier limits reached | Low | Low | Monitor usage; upgrade to Pro ($20/mo) if needed |
| Canvas animation performance on low-end devices | Medium | Medium | Throttle FPS; detect device capability; provide static fallback |
| Astro major version upgrade breaking changes | Low | Medium | Pin versions; test upgrades in dev first |
| Social media handle change or inactivity | Low | Medium | Verify Instagram handle active; add fallback contact method |

---

## 18. Appendices

### Appendix A: Content Templates

#### Theme Section Content Template
```yaml
theme:
  id: "dressed-in-intention"
  name: "DRESSED IN INTENTION"
  tagline: "Built for the body as it is. Elevated the way it deserves."
  description: >
    DRESSED IN INTENTION is about clothing that meets the wearer where they are.
    No compromise. No forcing. Just fabric that understands the assignment.
  looks:
    - id: "look-1"
      file: "dressed-in-intention/look-1.jpg"
      alt: "ZHADORE DRESSED IN INTENTION look 1: [describe garment]"
    # ...
```

#### Founder Bio Template
```yaml
founder:
  name: "Zhareal Popa"
  label: "THE DESIGNER"
  role: "Creative Director & Founder"
  accent_color: "#C4913A"
  bio: >
    I have a degree in Apparel Design from Oregon State University...
  links:
    - type: "email"
      url: "mailto:Zhadoree@gmail.com"
      label: "Email Zhareal Popa"
    - type: "linkedin"
      url: "https://www.linkedin.com/in/zhareal-popa-/"
      label: "Zhareal Popa on LinkedIn"
```

### Appendix B: Glossary

| Term | Definition |
|------|-----------|
| **AMBIVALENCE** | The SS 2026 collection name — exploring duality, contrast, and tension |
| **Astro** | A modern static site generator that ships zero JavaScript by default |
| **CLS** | Cumulative Layout Shift — a Core Web Vital measuring visual stability |
| **LCP** | Largest Contentful Paint — a Core Web Vital measuring loading performance |
| **INP** | Interaction to Next Paint — a Core Web Vital measuring responsiveness |
| **WCAG** | Web Content Accessibility Guidelines — international accessibility standard |
| **JSON-LD** | JavaScript Object Notation for Linked Data — structured data format for SEO |
| **SRI** | Subresource Integrity — cryptographic hashes to verify asset integrity |
| **CSP** | Content Security Policy — HTTP header to prevent XSS and injection attacks |

### Appendix C: References

- Astro Documentation: [https://docs.astro.build/](https://docs.astro.build/)
- Vercel Documentation: [https://vercel.com/docs](https://vercel.com/docs)
- WCAG 2.2 Guidelines: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)
- Web Core Vitals: [https://web.dev/vitals/](https://web.dev/vitals/)
- Schema.org: [https://schema.org/](https://schema.org/)
- Lighthouse: [https://developer.chrome.com/docs/lighthouse/](https://developer.chrome.com/docs/lighthouse/)
- Existing Site: [https://zh-adore-xg5g.vercel.app/](https://zh-adore-xg5g.vercel.app/)
- Instagram: [https://www.instagram.com/zh.adore/](https://www.instagram.com/zh.adore/)

### Appendix D: Forensic Audit Reference

The complete forensic audit of the current site is available at:
`primary_doc/Forensic_Audit_Report_ZHADORE.md`

All findings from this audit have been incorporated into the requirements above.

---

*Document prepared with ❤️ for ZHADORE — May 2026*
*Next review: Post-Phase 1 completion*
