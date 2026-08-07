# seo-metadata.md
# ZHADORE — SEO Metadata, Structured Data & Discoverability
# =============================================================================
# This file contains ALL SEO-related content: meta tags per page,
# JSON-LD structured data schemas, robots.txt, sitemap configuration,
# and social sharing metadata.
# =============================================================================

# ===========================================================================
# PART 1: META TAGS BY PAGE
# ===========================================================================

# --- HOME PAGE (/) ---
home_page:
  path: "/"
  title: "ZHADORE — AMBIVALENCE · SS 2026 | Handmade Luxury Fashion"
  description: >-
    ZHADORE is a handbuilt luxury fashion brand by Zhareal Popa & Zakia Yesmin. 
    Discover the AMBIVALENCE SS 2026 collection — DRESSED IN INTENTION, 
    IT'S BUSINESS BABE, EXTRA-VAGENT. Handmade. Intentional. Worn like armor.
  canonical: "https://zhadore.com/"
  og:
    title: "ZHADORE — AMBIVALENCE · SS 2026"
    description: >-
      Handmade. Intentional. Worn like armor. Discover the AMBIVALENCE 
      SS 2026 collection by ZHADORE.
    image: "/images/og/zhadore-og-image.jpg"
    image_width: 1200
    image_height: 630
    type: "website"
    url: "https://zhadore.com/"
    site_name: "ZHADORE"
    locale: "en_US"
  twitter:
    card: "summary_large_image"
    title: "ZHADORE — AMBIVALENCE · SS 2026"
    description: "Handmade. Intentional. Worn like armor. Discover the SS 2026 collection."
    image: "/images/og/zhadore-og-image.jpg"
    site: "@zhadore"
    creator: "@zhadore"
  robots: "index, follow"
  googlebot: "index, follow"
  structured_data:
    - "Organization"
    - "WebSite"
    - "Person" (×2 — Zhareal Popa, Zakia Yesmin)

# --- PRIVACY POLICY PAGE (/privacy) ---
privacy_page:
  path: "/privacy"
  title: "Privacy Policy — ZHADORE"
  description: >-
    ZHADORE's Privacy Policy explains how we collect, use, and protect your 
    personal information. We are committed to your privacy and data rights.
  canonical: "https://zhadore.com/privacy"
  robots: "index, follow"
  og:
    type: "website"
    title: "Privacy Policy — ZHADORE"
    description: "Learn how ZHADORE collects, uses, and protects your personal information."

# --- TERMS OF SERVICE PAGE (/terms) ---
terms_page:
  path: "/terms"
  title: "Terms of Service — ZHADORE"
  description: >-
    These Terms of Service govern your use of the ZHADORE website. By using 
    our site, you agree to these terms.
  canonical: "https://zhadore.com/terms"
  robots: "index, follow"
  og:
    type: "website"
    title: "Terms of Service — ZHADORE"
    description: "Read the terms and conditions governing use of the ZHADORE website."

# --- ACCESSIBILITY STATEMENT PAGE (/accessibility) ---
accessibility_page:
  path: "/accessibility"
  title: "Accessibility Statement — ZHADORE"
  description: >-
    ZHADORE is committed to digital accessibility for people of all abilities. 
    Learn about our WCAG 2.2 AA conformance efforts and how to report barriers.
  canonical: "https://zhadore.com/accessibility"
  robots: "index, follow"
  og:
    type: "website"
    title: "Accessibility Statement — ZHADORE"
    description: >-
      ZHADORE's commitment to digital accessibility and WCAG 2.2 AA conformance.

# --- 404 PAGE (/404) ---
page_404:
  path: "/404"
  title: "Page Not Found — ZHADORE"
  robots: "noindex, follow"

# ===========================================================================
# PART 2: JSON-LD STRUCTURED DATA SCHEMAS
# ===========================================================================

# --- SCHEMA 1: ORGANIZATION ---
# Placed on the home page. Helps Google understand the brand entity.
organization_schema:
  context: "https://schema.org"
  type: "Organization"
  name: "ZHADORE"
  alternateName: "Zhadore"
  url: "https://zhadore.com/"
  logo: "https://zhadore.com/favicon.png"
  description: >-
    ZHADORE is a handbuilt luxury fashion brand creating one-of-one garments 
    for women who don't fit a mold. Founded by Zhareal Popa (Creative Director) 
    and Zakia Yesmin (Tech & Strategy). Dark, intentional, worn like armor.
  slogan: "Handmade. Intentional. Worn like armor."
  email: "Zhadoree@gmail.com"
  foundingDate: "2025"
  founders:
    - type: "Person"
      name: "Zhareal Popa"
      jobTitle: "Creative Director & Founder"
    - type: "Person"
      name: "Zakia Yesmin"
      jobTitle: "Tech & Fashion · Builder"
  sameAs:
    - "https://www.instagram.com/zh.adore/"
    - "https://www.linkedin.com/in/zhareal-popa-/"
    - "https://www.linkedin.com/in/zakia-yesmin-061321308/"
  address:
    type: "PostalAddress"
    addressLocality: "Portland"
    addressRegion: "Oregon"
    addressCountry: "US"
  contactPoint:
    type: "ContactPoint"
    contactType: "Customer Service"
    email: "Zhadoree@gmail.com"
    availableLanguage: "English"

# --- SCHEMA 2: WEBSITE ---
# Placed on the home page. Enables Sitelinks Search Box.
website_schema:
  context: "https://schema.org"
  type: "WebSite"
  name: "ZHADORE"
  alternateName: "ZHADORE Official"
  url: "https://zhadore.com/"
  description: >-
    Official website of ZHADORE — a handbuilt luxury fashion brand. 
    Discover the AMBIVALENCE SS 2026 collection.
  potentialAction:
    type: "SearchAction"
    target:
      type: "EntryPoint"
      urlTemplate: "https://zhadore.com/search?q={search_term_string}"
    queryInput: "required name=search_term_string"

# --- SCHEMA 3: PERSON — ZHAREAL POPA ---
person_zhareal_schema:
  context: "https://schema.org"
  type: "Person"
  name: "Zhareal Popa"
  givenName: "Zhareal"
  familyName: "Popa"
  jobTitle: "Creative Director & Founder"
  affiliation:
    type: "Organization"
    name: "ZHADORE"
  alumniOf:
    type: "CollegeOrUniversity"
    name: "Oregon State University"
  email: "Zhadoree@gmail.com"
  sameAs:
    - "https://www.linkedin.com/in/zhareal-popa-/"
  description: >-
    Creative Director and Founder of ZHADORE. Degree in Apparel Design 
    from Oregon State University. Creates one-of-one, handbuilt garments 
    for women who value authenticity and craftsmanship.
  knowsAbout:
    - "Fashion Design"
    - "Apparel Construction"
    - "Pattern Making"
    - "Hand-finishing"
    - "One-of-one Garment Creation"

# --- SCHEMA 4: PERSON — ZAKIA YESMIN ---
person_zakia_schema:
  context: "https://schema.org"
  type: "Person"
  name: "Zakia Yesmin"
  givenName: "Zakia"
  familyName: "Yesmin"
  jobTitle: "Tech & Fashion · Builder"
  affiliation:
    type: "Organization"
    name: "ZHADORE"
  email: "Zhadoree@gmail.com"
  sameAs:
    - "https://www.linkedin.com/in/zakia-yesmin-061321308/"
  description: >-
    Tech & Fashion Builder for ZHADORE. Studies Business Information Systems 
    in New York. Built the ZHADORE website and manages digital strategy, 
    infrastructure, and brand presence.
  knowsAbout:
    - "Web Development"
    - "Business Information Systems"
    - "Digital Strategy"
    - "Fashion Industry"
    - "UI/UX Design"

# --- SCHEMA 5: BREADCRUMBLIST ---
# For legal pages to show navigation hierarchy in search results.
breadcrumb_schema:
  context: "https://schema.org"
  type: "BreadcrumbList"
  items:
    - type: "ListItem"
      position: 1
      name: "Home"
      item: "https://zhadore.com/"
    # Additional items added per page

# ===========================================================================
# PART 3: ROBOTS.TXT
# ===========================================================================
robots_txt: |
  User-agent: *
  Allow: /
  
  # Sitemap location
  Sitemap: https://zhadore.com/sitemap.xml
  
  # Crawl-delay is generally not needed for modern bots, but included for safety
  # Crawl-delay: 10
  
  # Disallow any admin/internal paths (if applicable)
  Disallow: /api/
  Disallow: /admin/

# ===========================================================================
# PART 4: SITEMAP.XML CONFIGURATION
# ===========================================================================
sitemap:
  entries:
    - url: "/"
      changefreq: "weekly"
      priority: 1.0
      lastmod: "2026-05-16"
    
    - url: "/privacy"
      changefreq: "monthly"
      priority: 0.3
      lastmod: "2026-05-16"
    
    - url: "/terms"
      changefreq: "monthly"
      priority: 0.3
      lastmod: "2026-05-16"
    
    - url: "/accessibility"
      changefreq: "monthly"
      priority: 0.3
      lastmod: "2026-05-16"

# ===========================================================================
# PART 5: SOCIAL SHARING PREVIEW
# ===========================================================================
social_preview:
  # OG Image specifications
  og_image:
    path: "/images/og/zhadore-og-image.jpg"
    width: 1200
    height: 630
    alt: "ZHADORE — AMBIVALENCE · SS 2026. Handmade. Intentional. Worn like armor."
    design_spec: >-
      Dark background (#0A0A0A) with brand name ZHADORE in Playfair Display, 
      gold accent line (#C4913A), collection name AMBIVALENCE, season SS 2026, 
      and tagline "Handmade. Intentional. Worn like armor."
  
  # Facebook sharing debugger
  facebook_debugger: "https://developers.facebook.com/tools/debug/"
  
  # Twitter Card validator
  twitter_validator: "https://cards-dev.twitter.com/validator"
  
  # LinkedIn Post Inspector
  linkedin_inspector: "https://www.linkedin.com/post-inspector/"

# ===========================================================================
# PART 6: KEYWORD STRATEGY
# ===========================================================================
keywords:
  brand:
    primary:
      - "ZHADORE"
      - "Zhadore fashion"
      - "Zhadore brand"
      - "Zhadore SS 2026"
    secondary:
      - "Zhareal Popa"
      - "Zakia Yesmin"
      - "Zhadore AMBIVALENCE"
  
  collection:
    primary:
      - "AMBIVALENCE SS 2026"
      - "ZHADORE SS 2026"
      - "ZHADORE collection"
    secondary:
      - "DRESSED IN INTENTION"
      - "IT'S BUSINESS BABE"
      - "EXTRA-VAGENT"
  
  category:
    primary:
      - "handmade luxury fashion"
      - "one-of-one clothing"
      - "custom fashion brand"
      - "handbuilt garments"
    secondary:
      - "dark luxury fashion"
      - "editorial fashion brand"
      - "bespoke womenswear"
      - "independent fashion designer"
  
  geo:
    primary:
      - "Portland fashion designer"
      - "Oregon fashion brand"
    secondary:
      - "Oregon State University fashion"
      - "independent fashion brand USA"
      - "New York fashion tech"

# ===========================================================================
# PART 7: VERIFICATION & SUBMISSION
# ===========================================================================
verification:
  google_search_console:
    url: "https://search.google.com/search-console"
    sitemap_submission: true
    verification_method: "DNS TXT record or HTML file"
  
  bing_webmaster_tools:
    url: "https://www.bing.com/webmasters"
    sitemap_submission: true
  
  google_analytics:
    note: "Not currently implemented. Use privacy-first alternative (Plausible)."
