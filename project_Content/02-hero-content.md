# hero-content.md
# ZHADORE — Hero Section Content
# =============================================================================
# The hero section is the first thing visitors see. It must communicate
# the brand identity, collection name, and season instantly.
# =============================================================================

# ---------------------------------------------------------------------------
# HEADING (h1)
# ---------------------------------------------------------------------------
# This is the PRIMARY h1 heading for the entire page.
# Critical for both SEO and accessibility (addresses forensic audit finding #1).
h1: "ZHADORE — AMBIVALENCE · SS 2026"

# ---------------------------------------------------------------------------
# TYPOGRAPHIC LOCKUP
# ---------------------------------------------------------------------------
# The typographic "ZH" + "ADORE" split is a brand signature.
# The "ZH" part is styled differently (lighter weight / smaller)
# while "ADORE" carries the visual weight.
title_split:
  part_one: "ZH"
  part_two: "ADORE"
  combined: "ZHADORE"

# ---------------------------------------------------------------------------
# SUBTITLE
# ---------------------------------------------------------------------------
# Appears below the brand name in the hero.
# The collection name and season code are critical identifiers.
hero_subtitle: "AMBIVALENCE · SS 2026"

# Alternative / legacy subtitle (used in older HTML version):
hero_subtitle_legacy: "A FASHION PORTFOLIO · SS 2026"

# ---------------------------------------------------------------------------
# COLLECTION STATEMENT (Optional — displayed beneath or near the subtitle)
# ---------------------------------------------------------------------------
collection_statement: >-
  Built for the body as it is.
  Elevated the way it deserves.
  Worn with intention.

# ---------------------------------------------------------------------------
# HERO TAGLINE — short, punchy, brand-defining
# ---------------------------------------------------------------------------
hero_tagline: "Darkness wears gold."

# ---------------------------------------------------------------------------
# SCROLL INDICATOR
# ---------------------------------------------------------------------------
scroll_hint: "SCROLL"
# Visual: A thin vertical line with animated gradient + text below it

# ---------------------------------------------------------------------------
# CANVAS ANIMATIONS (decorative, hidden from screen readers)
# ---------------------------------------------------------------------------
canvas_elements:
  - id: "ambient-canvas"
    description: "Subtle floating particles — ambient atmosphere"
    aria_hidden: true
    role: "presentation"
  - id: "silk-canvas"
    description: "Flowing fabric simulation — evokes textile movement"
    aria_hidden: true
    role: "presentation"
  - id: "particle-canvas"
    description: "Interactive particle field — responds to subtle user motion"
    aria_hidden: true
    role: "presentation"

# ---------------------------------------------------------------------------
# GOLD LINE ANIMATION
# ---------------------------------------------------------------------------
gold_line:
  description: >-
    An animated SVG line with gold gradient that draws itself on page load.
    Symbolizes the brand's gold accent — understated luxury.
  gradient_stops:
    - offset: "0%"
      color: "transparent"
    - offset: "20%"
      color: "#C4913A"    # Antique gold
    - offset: "50%"
      color: "#E8C878"    # Champagne gold
    - offset: "80%"
      color: "#C4913A"
    - offset: "100%"
      color: "transparent"
  animation:
    property: "stroke-dashoffset"
    from: 1440
    to: 0
    duration: "1.5s"
    easing: "cubic-bezier(0.4, 0, 0.2, 1)"

# ---------------------------------------------------------------------------
# ACCESSIBILITY NOTES
# ---------------------------------------------------------------------------
accessibility:
  - "Hero h1 is the primary page heading — screen readers identify page purpose"
  - "All canvas elements marked aria-hidden='true' role='presentation'"
  - "Static CSS background fallback provided when JS is disabled"
  - "prefers-reduced-motion: all animations disabled or reduced to opacity fades"
  - "Gold line animation uses SVG — remains visible even without JS"
