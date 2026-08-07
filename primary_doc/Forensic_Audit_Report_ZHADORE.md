# Forensic Audit Report: ZHADORE Website
**URL:** https://zh-adore-xg5g.vercel.app/  
**Date:** 2026-05-15  
**Auditor:** Automated Forensic Analysis  
**Scope:** Single-page application (SPA) fashion portfolio — Homepage only

---

## 1. Executive Summary

The ZHADORE website is a visually-driven, single-page fashion portfolio built on Vercel with Astro. While the visual presentation is strong, the site suffers from **critical gaps in SEO, accessibility, security headers, and legal compliance** that severely limit its discoverability, usability, and trustworthiness as a commercial fashion brand.

| Category | Severity | Issues Found |
|----------|----------|-------------|
| SEO & Discoverability | **High** | 8 critical gaps |
| Accessibility (WCAG) | **High** | 7 violations / missing patterns |
| Security | **Medium** | 5 missing security headers, 1 CORS misconfiguration |
| Performance | **Medium** | 4 optimization gaps |
| Content / UX | **Medium** | 6 discrepancies & broken navigation patterns |
| Legal / Compliance | **High** | 5 missing compliance elements |

---

## 2. Critical Findings

### 2.1 Missing `<h1>` Heading (WCAG / SEO — Critical)
- **Finding:** The page contains **zero `<h1>` elements**. The heading hierarchy jumps directly to `<h2>`.
- **Impact:** Screen-reader users cannot quickly identify the primary purpose of the page. Search engines de-prioritize pages without a clear H1.
- **Affected Code:**
  ```html
  <h2 class="theme-title">BAE-CAY</h2>
  <h2 class="theme-title">IT'S BUSINESS BABE</h2>
  <h2 class="theme-title">EXTRA-VAGENT</h2>
  <h2 class="about-heading"><em>Two women. One brand.</em></h2>
  ```
- **Recommendation:** Add an `<h1>` inside `<section id="hero">` containing the brand name or tagline (e.g., "ZHADORE — SS 2026").

### 2.2 No Meta Description / Open Graph / Twitter Cards (SEO — Critical)
- **Finding:** The `<head>` contains only:
  ```html
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ZHADORE - SS 2026</title>
  ```
- **Missing:**
  - `<meta name="description">`
  - All Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
  - All Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
  - Canonical URL (`<link rel="canonical">`)
- **Impact:** Social sharing produces empty or unbranded link previews. Search engines generate random snippets. Duplicate-content risk is unmitigated.

### 2.3 No robots.txt or Sitemap.xml (SEO — Critical)
- **Finding:** Both `/robots.txt` and `/sitemap.xml` return **HTTP 404**.
- **Impact:** Search-engine crawlers have no guidance on what to index. The site may be crawled inefficiently or miss critical pages.

---

## 3. SEO & Discoverability Gaps

| # | Issue | Severity | Evidence |
|---|-------|----------|----------|
| 1 | No meta description | Critical | `<meta name="description">` absent |
| 2 | No Open Graph tags | Critical | `og:*` properties absent |
| 3 | No Twitter Card tags | Critical | `twitter:*` properties absent |
| 4 | No canonical link | High | `<link rel="canonical">` absent |
| 5 | No robots.txt | High | Returns 404 |
| 6 | No sitemap.xml | High | Returns 404 |
| 7 | No structured data / JSON-LD | High | No `<script type="application/ld+json">` |
| 8 | No favicon / touch icons | Medium | `/favicon.ico`, `/favicon.png`, `/apple-touch-icon.png` all 404 |
| 9 | No manifest.json | Low | Returns 404 (impacts PWA installability) |

**Additional Note:** The `<title>` uses an en-dash (`—`) in some contexts but the content itself is not reflected in SERP-friendly meta tags.

---

## 4. Accessibility (WCAG 2.1) Violations

### 4.1 Missing Skip Navigation Link (WCAG 2.4.1 — Bypass Blocks)
- **Finding:** No "Skip to main content" link exists at the top of the `<body>`.
- **Impact:** Keyboard and screen-reader users must tab through the entire navigation on every page load.

### 4.2 Logo Anchor is a Dead Link (WCAG 2.4.4 — Link Purpose)
- **Finding:** `<a href="#" class="logo">ZHADORE</a>`
- **Impact:** Clicking the logo reloads the page fragment to `#` (top of page), which is acceptable on a SPA, but semantically weak. A better pattern is `href="/"` or `href="#hero"`.

### 4.3 Canvas Elements Lack Accessibility Fallbacks
- **Finding:** Two decorative canvases have no `aria-hidden` or descriptive text:
  ```html
  <canvas id="silk-canvas"></canvas>
  <canvas id="particle-canvas"></canvas>
  ```
  Only `ambient-canvas` has `aria-hidden="true"`.
- **Impact:** Assistive technologies may announce empty groups or confuse users.
- **Recommendation:** Add `aria-hidden="true" role="presentation"` to all decorative canvases, or provide a `<noscript>` / static fallback.

### 4.4 No Semantic HTML5 Landmarks
- **Finding:** Zero usage of `<main>`, `<header>`, `<article>`, `<figure>`, `<figcaption>`, `<aside>`, `<address>`, or `<time>`.
- **Impact:** Screen-reader users cannot jump to regions using landmark shortcuts.
- **Recommendation:** Wrap page content in `<main>`, replace `<nav>` wrapper with `<header>`, use `<figure>` for lookbook images.

### 4.5 Anchor Targets Are `<div>`s, Not `<section>`s (Navigation Discrepancy)
- **Finding:** The nav links point to:
  - `#collection` → `<div id="collection">` (not a section)
  - `#themes` → `<div id="themes">` (not a section)
  - `#contact` → `<div id="contact">` (not a section)
  - Only `#about` is a `<section>`.
- **Impact:** If JavaScript fails or is disabled, standard browser anchor scrolling may behave inconsistently. Semantic mismatch reduces predictability.

### 4.6 Footer Copyright Encoding Risk
- **Finding:** The footer contains raw UTF-8 copyright (©) and middle-dot (·) symbols (`0xC2 0xA9` and `0xC2 0xB7`). While the server sends `charset=utf-8`, some proxies or RSS readers may mangle these into replacement characters (�).
- **Recommendation:** Use HTML entities `&copy;` and `&middot;` for maximum compatibility.

### 4.7 Images Lack Width / Height Attributes (CLS Risk)
- **Finding:** All 15 `<img>` tags have `loading="lazy"` but **no `width` or `height`** attributes.
  ```html
  <img src="/images/bae-cay/look-1.jpg" alt="BAE-CAY look 1" loading="lazy">
  ```
- **Impact:** Cumulative Layout Shift (CLS) will occur as images load, hurting Core Web Vitals and accessibility for low-vision users.

---

## 5. Security & HTTP Headers

### 5.1 Missing Critical Security Headers
The following headers are **absent** from all responses:

| Header | Risk | Recommendation |
|--------|------|----------------|
| `Content-Security-Policy` | XSS, injection attacks | Implement a strict CSP |
| `X-Content-Type-Options: nosniff` | MIME-type sniffing attacks | Add this header |
| `X-Frame-Options` / `frame-ancestors` | Clickjacking | Set to `DENY` or `SAMEORIGIN` |
| `Referrer-Policy` | Privacy leakage | Set to `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Unwanted browser feature use | Restrict camera, microphone, geolocation |

### 5.2 Overly Permissive CORS
- **Finding:** `Access-Control-Allow-Origin: *`
- **Impact:** Allows any third-party website to fetch content from the origin via AJAX. On a static portfolio the risk is low, but it is unnecessary exposure.

### 5.3 No Subresource Integrity (SRI)
- **Finding:** External script and stylesheet links lack `integrity` hashes:
  ```html
  <script type="module" src="/_astro/hoisted.CXhhAiy7.js"></script>
  <link rel="stylesheet" href="/_astro/index.BZ0_mp0d.css">
  ```
- **Impact:** If Vercel's CDN is compromised, malicious code could be injected without detection.

### 5.4 External Links Lack Safety Attributes
- **Finding:** Instagram links open in the same tab with no `rel` attribute:
  ```html
  <a href="https://instagram.com/zhadore" class="clink">...</a>
  ```
- **Impact:** No `rel="noopener noreferrer"` exposes the site to `window.opener` tab-nabbing attacks and leaks referrer data to Meta.
- **Recommendation:** Add `target="_blank" rel="noopener noreferrer"`.

---

## 6. Performance & Asset Issues

| # | Issue | Severity | Evidence |
|---|-------|----------|----------|
| 1 | No `font-display: swap` for Google Fonts | Medium | Fonts may cause FOIT/FOUT |
| 2 | No image `width` / `height` | Medium | 15 images lack dimensions |
| 3 | No responsive images (`srcset`, `sizes`) | Medium | Only single-resolution JPGs served |
| 4 | No modern image formats (WebP/AVIF) | Low | All images are `.jpg` |
| 5 | Large canvas animations without reduced-motion check | Medium | No `prefers-reduced-motion` media query observed in static HTML |
| 6 | No `<noscript>` fallback | Low | Site is unusable without JavaScript (SPA anchors, canvas effects) |

---

## 7. Content, UX & Navigation Discrepancies

### 7.1 Broken / Non-Existent Deep Links
- **Finding:** The navigation implies separate pages (`Collection`, `Themes`, `About`, `Contact`), but direct URLs return **404**:
  - `https://zh-adore-xg5g.vercel.app/collection` → 404
  - `https://zh-adore-xg5g.vercel.app/themes` → 404
  - `https://zh-adore-xg5g.vercel.app/about` → 404
  - `https://zh-adore-xg5g.vercel.app/contact` → 404
- **Impact:** Users sharing deep links or using browser back/forward on hashed URLs may land on 404 pages depending on router configuration.

### 7.2 Inconsistent Naming Conventions
- **Finding:**
  - Nav label: `Collection` → Folder: `bae-cay`, `business`, `extravagent`
  - Nav label: `Themes` → Section ID: `themes`
  - Display title: `EXTRA-VAGENT` → Folder name: `extravagent` (missing hyphen)
  - Display title: `IT'S BUSINESS BABE` → Alt text: `Business Babe` (missing contraction & capitalization)
- **Impact:** Inconsistent taxonomy complicates asset management and confuses content managers.

### 7.3 Missing E-Commerce Infrastructure
- **Finding:** The site presents itself as a fashion brand with collections, yet there is:
  - No pricing information
  - No "Add to Cart", "Buy", or "Pre-Order" functionality
  - No size guide
  - No shipping / returns policy
  - No payment processor integration
- **Impact:** Users cannot complete a purchase journey. The site functions as a lookbook only, which may not align with business expectations for a "fashion portfolio."

### 7.4 Unverified External Contact Points
- **Finding:**
  - Email: `hello@zhadore.com` — Cannot be verified as active/managed.
  - Instagram: `@zhadore` — Link goes to `instagram.com/zhadore` which may be a private, inactive, or incorrect account.
- **Recommendation:** Add verification links or badges, and ensure email has MX records configured.

---

## 8. Legal & Compliance Gaps

| # | Requirement | Status | Risk |
|---|-------------|--------|------|
| 1 | Privacy Policy | **Missing** | GDPR / CCPA violation if EU/CA traffic |
| 2 | Terms of Service | **Missing** | No legal protection for brand or users |
| 3 | Cookie Consent Banner | **Missing** | GDPR violation if analytics cookies exist |
| 4 | Accessibility Statement | **Missing** | Required by some jurisdictions (e.g., ADA in US) |
| 5 | Returns / Refund Policy | **Missing** | Consumer-protection law violation if selling |
| 6 | Physical Business Address | **Missing** | Reduces trust; may violate local business law |

---

## 9. Recommendations (Prioritized)

### Immediate (Fix This Week)
1. **Add `<h1>`** to the hero section.
2. **Add meta description, OG tags, and Twitter Card tags** to `<head>`.
3. **Create `robots.txt`** and `sitemap.xml`.
4. **Add `width` and `height`** to all `<img>` tags.
5. **Add missing security headers** via `vercel.json` or edge middleware.

### Short-Term (Fix This Month)
6. **Implement semantic HTML5** (`<main>`, `<header>`, `<figure>`, etc.).
7. **Add skip-navigation link** at the top of `<body>`.
8. **Add `aria-hidden="true"`** to decorative canvases.
9. **Fix external links** with `target="_blank" rel="noopener noreferrer"`.
10. **Add favicon, apple-touch-icon, and manifest.json**.

### Medium-Term (Fix Next Quarter)
11. **Add JSON-LD structured data** (Organization, Person, Product, ImageObject).
12. **Implement `srcset` / responsive images** and consider WebP/AVIF.
13. **Add legal pages**: Privacy Policy, Terms, Accessibility Statement.
14. **Add cookie consent** if any tracking is introduced.
15. **Verify and test** `hello@zhadore.com` and `@zhadore` Instagram handle.

---

## 10. Appendix: Raw Technical Data

### 10.1 HTTP Response Headers
```
Access-Control-Allow-Origin: *
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Vercel-Cache: HIT
Cache-Control: public, max-age=0, must-revalidate
Content-Type: text/html; charset=utf-8
Server: Vercel
```

### 10.2 Asset Inventory (Confirmed 200 OK)
- `/_astro/index.BZ0_mp0d.css`
- `/_astro/hoisted.CXhhAiy7.js`
- `/images/bae-cay/look-{1-6}.jpg`
- `/images/business/look-{1-4}.jpg`
- `/images/extravagent/look-{1-5}.jpg`

### 10.3 Asset Inventory (Confirmed 404)
- `/robots.txt`
- `/sitemap.xml`
- `/favicon.ico`
- `/favicon.png`
- `/apple-touch-icon.png`
- `/manifest.json`
- `/collection`
- `/themes`
- `/about`
- `/contact`

### 10.4 Heading Hierarchy
```
(No H1)
H2: BAE-CAY
H2: IT'S BUSINESS BABE
H2: EXTRA-VAGENT
H2: Two women. One brand.
```

### 10.5 Page Statistics
- **HTML Size:** ~8.99 KB
- **Image Count:** 15
- **Script Count:** 1 external module
- **Stylesheet Count:** 1 external CSS
- **Semantic HTML5 Elements:** 0

---

*End of Report*
