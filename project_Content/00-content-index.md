# content-index.md
# ZHADORE — Complete Content Architecture & File Index
# =============================================================================
# This file serves as the master index for ALL content files in the 
# project_Content folder. It maps every piece of content needed for 
# the ZHADORE static website, organized by page/section.
# =============================================================================

# ---------------------------------------------------------------------------
# HOW TO USE THIS CONTENT SYSTEM
# ---------------------------------------------------------------------------
# 
# Each file in this folder contains content for a specific part of the 
# ZHADORE website. Content is structured in YAML/Markdown format so it can be:
#
#   1. Imported directly into Astro components (via `.astro` files)
#   2. Used as Astro Content Collections (if using `.md`/`.mdx` in src/content/)
#   3. Referenced as plain data objects (if converted to `.ts`/`.js` data files)
#   4. Pasted directly into HTML templates
#
# Content is separated from presentation. This means designers and content 
# creators can update copy, descriptions, and metadata without touching code.
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
# FILE INDEX
# ---------------------------------------------------------------------------

files:

  - id: "01"
    name: "01-site-config.yaml"
    description: "Site-wide configuration — brand identity, navigation, social links, SEO defaults"
    pages_used: ["All pages"]
    content_type: "YAML data"
    key_items:
      - "Brand name, tagline, collection name"
      - "Navigation structure (primary + footer)"
      - "Contact info (email, Instagram, LinkedIn)"
      - "Default SEO meta tag values"
      - "Copyright information"
      - "Performance settings (fonts, image formats)"

  - id: "02"
    name: "02-hero-content.md"
    description: "Hero section content — h1 heading, subtitle, canvas descriptions, gold line animation"
    pages_used: ["Home (/)"]
    content_type: "Markdown"
    key_items:
      - "h1: ZHADORE — AMBIVALENCE · SS 2026"
      - "Title split: ZH + ADORE"
      - "Hero subtitle, tagline, collection statement"
      - "Canvas element descriptions (ambient, silk, particle)"
      - "Gold line SVG animation specification"
      - "Scroll hint text"

  - id: "03"
    name: "03-collection-content.md"
    description: "Collection & themes section — all three themes, lookbook inventory, editorial copy"
    pages_used: ["Home (/#collection, /#themes)"]
    content_type: "Markdown"
    key_items:
      - "Collection overview (AMBIVALENCE SS 2026)"
      - "Theme 1: DRESSED IN INTENTION (4 looks)"
      - "Theme 2: IT'S BUSINESS BABE (4 looks)"
      - "Theme 3: EXTRA-VAGENT (6 looks)"
      - "Lookbook image inventory with alt text"
      - "Editorial descriptions for each theme"
      - "Visual style keywords (vibe)"

  - id: "04"
    name: "04-about-content.md"
    description: "About section — founder profiles, bios, contact section, origin story"
    pages_used: ["Home (/#about, /#contact)"]
    content_type: "Markdown"
    key_items:
      - "About section header (eyebrow, heading, subtitle)"
      - "Extended brand origin story"
      - "Zhareal Popa full bio (live + extended versions)"
      - "Zakia Yesmin full bio (live + extended versions)"
      - "Founder education, location, social links"
      - "Pull quotes for design use"
      - "Contact section (email + Instagram)"

  - id: "05"
    name: "05-footer-content.md"
    description: "Global footer — brand, navigation, contact, legal links, copyright"
    pages_used: ["All pages"]
    content_type: "Markdown"
    key_items:
      - "Footer brand logo + tagline"
      - "Footer navigation links"
      - "Footer contact info"
      - "Legal page links (Privacy, Terms, Accessibility)"
      - "Copyright notice (dynamic year)"
      - "Gold line decorative element"

  - id: "06"
    name: "06-privacy-policy.md"
    description: "Privacy Policy page — full legal content, GDPR/CCPA compliant"
    pages_used: ["/privacy"]
    content_type: "Markdown"
    key_items:
      - "9 sections covering all privacy aspects"
      - "Information collection & use disclosure"
      - "Cookie policy (essential only)"
      - "Third-party services (Vercel, Google Fonts)"
      - "Data protection rights (GDPR + CCPA)"
      - "Contact information for data requests"
      - "Effective date: May 16, 2026"

  - id: "07"
    name: "07-terms-of-service.md"
    description: "Terms of Service page — full legal content"
    pages_used: ["/terms"]
    content_type: "Markdown"
    key_items:
      - "8 sections covering all legal terms"
      - "Intellectual property rights"
      - "User conduct guidelines"
      - "Disclaimer of warranties"
      - "Limitation of liability"
      - "Governing law (Oregon, USA)"
      - "Contact information"

  - id: "08"
    name: "08-accessibility-statement.md"
    description: "Accessibility Statement — WCAG 2.2 AA conformance, measures taken, feedback"
    pages_used: ["/accessibility"]
    content_type: "Markdown"
    key_items:
      - "Commitment statement"
      - "WCAG 2.2 AA conformance status"
      - "9 specific accessibility measures listed"
      - "Known limitations with workarounds"
      - "Feedback and contact channels"
      - "Assessment approach"
      - "Quarterly review cadence"

  - id: "09"
    name: "09-cookie-banner.md"
    description: "Cookie consent banner — content, dismiss text, storage configuration"
    pages_used: ["All pages (first visit)"]
    content_type: "Markdown"
    key_items:
      - "Minimal banner message (essential cookies only)"
      - "Dismiss button label"
      - "localStorage configuration"
      - "Future analytics-ready alternative version"
      - "Accessibility notes"

  - id: "10"
    name: "10-404-page.md"
    description: "Custom 404 error page — on-brand copy, CTA, alternative links"
    pages_used: ["/404"]
    content_type: "Markdown"
    key_items:
      - "On-brand heading: 'Nothing here but shadows.'"
      - "Poetic body copy matching brand voice"
      - "Return CTA"
      - "Alternative navigation links"
      - "Design and accessibility notes"

  - id: "11"
    name: "11-seo-metadata.md"
    description: "Complete SEO metadata — meta tags, JSON-LD schemas, robots.txt, sitemap, keywords"
    pages_used: ["All pages (meta tags), Home (schemas), / (robots.txt, sitemap)"]
    content_type: "Markdown"
    key_items:
      - "Per-page meta title, description, OG, Twitter tags"
      - "5 JSON-LD schemas (Organization, WebSite, 2× Person, BreadcrumbList)"
      - "robots.txt content"
      - "Sitemap.xml entries with priority/changefreq"
      - "Social sharing preview specs"
      - "Keyword strategy (brand, collection, category, geo)"
      - "Verification & submission checklist"

  - id: "12"
    name: "12-navigation-content.md"
    description: "Navigation — skip link, main nav, mobile menu, scroll-spy, keyboard nav"
    pages_used: ["All pages"]
    content_type: "Markdown"
    key_items:
      - "Skip-to-content link text"
      - "Main nav links with aria-labels"
      - "Mobile hamburger menu labels"
      - "Scroll-spy section mapping"
      - "Keyboard tab order"
      - "Focus indicator specifications"

# ---------------------------------------------------------------------------
# CONTENT MAP BY PAGE
# ---------------------------------------------------------------------------

page_content_map:

  home_page:
    path: "/"
    sections:
      - section: "Skip Link"
        source_file: "12-navigation-content.md"
        key: "skip_link"
      - section: "Navigation"
        source_file: "12-navigation-content.md"
        key: "navbar"
      - section: "Hero"
        source_file: "02-hero-content.md"
        key: "all"
      - section: "Collection"
        source_file: "03-collection-content.md"
        key: "collection"
      - section: "Themes"
        source_file: "03-collection-content.md"
        key: "theme_*"
      - section: "About"
        source_file: "04-about-content.md"
        key: "about, founder_*"
      - section: "Contact"
        source_file: "04-about-content.md"
        key: "contact_section"
      - section: "Footer"
        source_file: "05-footer-content.md"
        key: "all"
      - section: "Cookie Banner"
        source_file: "09-cookie-banner.md"
        key: "cookie_banner"
      - section: "SEO Metadata"
        source_file: "11-seo-metadata.md"
        key: "home_page, structured_data"
      - section: "Structured Data"
        source_file: "11-seo-metadata.md"
        key: "organization_schema, website_schema, person_*"

  privacy_page:
    path: "/privacy"
    sections:
      - section: "Page Content"
        source_file: "06-privacy-policy.md"
        key: "all"
      - section: "SEO Metadata"
        source_file: "11-seo-metadata.md"
        key: "privacy_page"
      - section: "Navigation + Footer"
        source_file: "12-navigation-content.md, 05-footer-content.md"
        key: "all"

  terms_page:
    path: "/terms"
    sections:
      - section: "Page Content"
        source_file: "07-terms-of-service.md"
        key: "all"
      - section: "SEO Metadata"
        source_file: "11-seo-metadata.md"
        key: "terms_page"
      - section: "Navigation + Footer"
        source_file: "12-navigation-content.md, 05-footer-content.md"
        key: "all"

  accessibility_page:
    path: "/accessibility"
    sections:
      - section: "Page Content"
        source_file: "08-accessibility-statement.md"
        key: "all"
      - section: "SEO Metadata"
        source_file: "11-seo-metadata.md"
        key: "accessibility_page"
      - section: "Navigation + Footer"
        source_file: "12-navigation-content.md, 05-footer-content.md"
        key: "all"

  page_404:
    path: "/404"
    sections:
      - section: "Page Content"
        source_file: "10-404-page.md"
        key: "all"
      - section: "SEO Metadata"
        source_file: "11-seo-metadata.md"
        key: "page_404"

  robots_txt:
    path: "/robots.txt"
    sections:
      - section: "File Content"
        source_file: "11-seo-metadata.md"
        key: "robots_txt"

  sitemap_xml:
    path: "/sitemap.xml"
    sections:
      - section: "File Content"
        source_file: "11-seo-metadata.md"
        key: "sitemap"

# ---------------------------------------------------------------------------
# QUICK REFERENCE — KEY BRAND STRINGS
# ---------------------------------------------------------------------------
quick_reference:
  brand_name: "ZHADORE"
  brand_tagline: "Handmade. Intentional. Worn like armor."
  collection_name: "AMBIVALENCE"
  season: "SS 2026"
  season_full: "Spring/Summer 2026"
  hero_h1: "ZHADORE — AMBIVALENCE · SS 2026"
  hero_subtitle_live: "AMBIVALENCE · SS 2026"
  contact_email: "Zhadoree@gmail.com"
  instagram_handle: "@zh.adore"
  instagram_url: "https://www.instagram.com/zh.adore/"
  founders:
    - "Zhareal Popa — Creative Director & Founder"
    - "Zakia Yesmin — Tech & Fashion · Builder"
  themes:
    - "DRESSED IN INTENTION — Built for the body as it is. Elevated the way it deserves."
    - "IT'S BUSINESS BABE — You can do it alone. That's why they're jealous."
    - "EXTRA-VAGENT — Dressed like a dark queen. Built like an empire."
  copyright: "© 2026 ZHADORE · ALL RIGHTS RESERVED"

# ---------------------------------------------------------------------------
# VERSION HISTORY
# ---------------------------------------------------------------------------
version_history:
  - version: "1.0"
    date: "2026-05-16"
    description: "Initial complete content architecture — all 12 content files created"
    status: "Ready for implementation"
