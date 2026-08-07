# navigation-content.md
# ZHADORE — Navigation, Skip Link & Mobile Menu Content
# =============================================================================
# Defines all navigation-related content including the main nav bar,
# skip-to-content link, mobile hamburger menu, and scroll-spy labels.
# =============================================================================

# ---------------------------------------------------------------------------
# SKIP LINK (WCAG 2.4.1 — Bypass Blocks)
# ---------------------------------------------------------------------------
skip_link:
  label: "Skip to main content"
  target: "#main-content"
  css_class: "skip-link"
  # Hidden until focused; appears as a gold bar at the top of the viewport
  # when the user presses Tab on page load.

# ---------------------------------------------------------------------------
# MAIN NAVIGATION BAR
# ---------------------------------------------------------------------------
navbar:
  # Logo / Brand
  logo:
    text: "ZHADORE"
    href: "#hero"
    aria_label: "ZHADORE — Back to top"

  # Season Badge
  season_badge: "SS 2026"

  # Navigation Links
  links:
    - label: "Collection"
      href: "#collection"
      aria_label: "View the collection"
      order: 1
    - label: "Themes"
      href: "#themes"
      aria_label: "Explore collection themes"
      order: 2
    - label: "About"
      href: "#about"
      aria_label: "About ZHADORE and the founders"
      order: 3
    - label: "Contact"
      href: "#contact"
      aria_label: "Get in touch with ZHADORE"
      order: 4

  # Behavior
  sticky: true                        # Nav bar stays fixed at top
  scroll_spy: true                    # Active state based on scroll position
  background_opacity: "0.95"          # Slightly transparent for depth
  backdrop_filter: "blur(10px)"       # Frosted glass effect

# ---------------------------------------------------------------------------
# MOBILE MENU (Hamburger)
# ---------------------------------------------------------------------------
mobile_menu:
  # Toggle button (visible on screens < 768px)
  toggle:
    open_label: "Open navigation menu"
    close_label: "Close navigation menu"
    aria_expanded_open: "true"
    aria_expanded_closed: "false"
    icon_type: "hamburger"            # Three-line icon → X on open

  # Menu panel
  panel:
    aria_label: "Main navigation"
    animation:
      entrance: "slide-down"
      duration: "300ms"
      easing: "cubic-bezier(0.4, 0, 0.2, 1)"

  # Links (same as desktop, but full-width stacked)
  # Closing behavior: menu closes when a link is clicked

# ---------------------------------------------------------------------------
# SCROLL-SPY ACTIVE STATE
# ---------------------------------------------------------------------------
scroll_spy:
  # Section IDs and which nav link they correspond to
  sections:
    hero:     { nav_link: null }              # Hero has no nav link (logo goes here)
    collection: { nav_link: "Collection" }
    themes:    { nav_link: "Themes" }
    about:     { nav_link: "About" }
    contact:   { nav_link: "Contact" }
  
  # Visual indicator for active section
  active_indicator: "gold underline or color change on nav link"
  threshold: "50%"                    # Section must be 50% in viewport to be "active"

# ---------------------------------------------------------------------------
# KEYBOARD NAVIGATION NOTES
# ---------------------------------------------------------------------------
keyboard_navigation:
  tab_order:
    - "Skip link"
    - "Logo"
    - "Collection"
    - "Themes"
    - "About"
    - "Contact"
    - "(then into page content)"
  
  focus_indicator:
    style: "Gold outline (2px #C4913A) with 2px offset"
    visible_on: ":focus-visible"      # Only on keyboard focus, not mouse click

# ---------------------------------------------------------------------------
# ACCESSIBILITY NOTES
# ---------------------------------------------------------------------------
accessibility:
  - "Navigation uses <nav> element with aria-label for identification"
  - "Skip link is the first focusable element in the DOM"
  - "Mobile menu toggle uses aria-expanded to communicate state"
  - "All links have descriptive text and aria-labels where needed"
  - "Focus indicator is always visible for keyboard users"
  - "Sticky nav does not obscure content when scrolling to anchored sections"
  - "Logo links to #hero (not #) with descriptive aria-label"
