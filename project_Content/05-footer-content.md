# footer-content.md
# ZHADORE — Footer Content
# =============================================================================
# The global footer appears on every page. It contains brand identity,
# navigation, contact info, legal links, and copyright.
# =============================================================================

# ---------------------------------------------------------------------------
# FOOTER BRAND
# ---------------------------------------------------------------------------
brand:
  logo_text: "ZHADORE"
  tagline: "Handmade. Intentional. Worn like armor."

# ---------------------------------------------------------------------------
# FOOTER NAVIGATION
# ---------------------------------------------------------------------------
navigation:
  aria_label: "Footer navigation"
  links:
    - label: "Collection"
      href: "#collection"
    - label: "Themes"
      href: "#themes"
    - label: "About"
      href: "#about"
    - label: "Contact"
      href: "#contact"

# ---------------------------------------------------------------------------
# FOOTER CONTACT
# ---------------------------------------------------------------------------
contact:
  email:
    url: "mailto:Zhadoree@gmail.com"
    display: "Zhadoree@gmail.com"
  instagram:
    url: "https://www.instagram.com/zh.adore/"
    display: "@zh.adore"
    rel: "noopener noreferrer"
    target: "_blank"

# ---------------------------------------------------------------------------
# FOOTER LEGAL LINKS (NEW — not present in current live site)
# ---------------------------------------------------------------------------
legal_links:
  - label: "Privacy Policy"
    href: "/privacy"
  - label: "Terms of Service"
    href: "/terms"
  - label: "Accessibility"
    href: "/accessibility"

# ---------------------------------------------------------------------------
# COPYRIGHT
# ---------------------------------------------------------------------------
copyright:
  year_dynamic: true              # Automatically updates to current year
  start_year: 2025
  holder: "ZHADORE"
  rights: "ALL RIGHTS RESERVED"
  # Rendered as: © 2025–2026 ZHADORE · ALL RIGHTS RESERVED
  # (or just © 2026 ZHADORE · ALL RIGHTS RESERVED if year is same as start)

# ---------------------------------------------------------------------------
# FOOTER DECORATIVE ELEMENT
# ---------------------------------------------------------------------------
gold_line:
  description: "A thin gold gradient line at the top of the footer, mirroring the hero gold line."
  gradient: "linear-gradient(90deg, transparent, #C4913A, #E8C878, #C4913A, transparent)"
  height: "1px"

# ---------------------------------------------------------------------------
# ACCESSIBILITY NOTES
# ---------------------------------------------------------------------------
accessibility:
  - "Footer uses <footer> (contentinfo landmark)"
  - "Navigation region has aria-label='Footer navigation'"
  - "All external links have rel='noopener noreferrer' with target='_blank'"
  - "Copyright year is dynamically generated — always current"
