# cookie-banner.md
# ZHADORE — Cookie Consent Banner Content
# =============================================================================
# A minimal, non-intrusive banner informing visitors that only essential
# cookies are used. Since no tracking/analytics cookies are deployed, this 
# is an informational notice — no opt-in/opt-out mechanism is needed.
# =============================================================================

# ---------------------------------------------------------------------------
# BANNER CONTENT
# ---------------------------------------------------------------------------
cookie_banner:
  # Main message
  message: >-
    This website uses only essential cookies to ensure proper functionality. 
    We do not use tracking cookies, analytics cookies, or advertising cookies. 
    By continuing to browse, you acknowledge this notice.

  # Dismiss button
  dismiss_label: "Got it"
  dismiss_aria_label: "Dismiss cookie notice"

  # Storage
  storage_key: "zhadore-cookie-consent"
  storage_method: "localStorage"
  expiry_days: 365

  # Position & Styling
  position: "bottom-fixed"    # Options: bottom-fixed, top-fixed, bottom-right
  animation:
    entrance: "fade-up"
    exit: "fade-down"
    duration: "300ms"

# ---------------------------------------------------------------------------
# ALTERNATIVE VERSION — IF ANALYTICS ARE ADDED IN FUTURE
# ---------------------------------------------------------------------------
cookie_banner_with_analytics:
  message: >-
    This website uses cookies to enhance your experience. Essential cookies 
    ensure the site functions properly. Analytics cookies help us understand 
    how visitors interact with our content. You can choose which cookies to 
    accept.

  accept_all_label: "Accept All"
  accept_essential_label: "Essential Only"
  customize_label: "Customize"
  privacy_policy_link: "/privacy"
  privacy_policy_label: "Learn more in our Privacy Policy"

# ---------------------------------------------------------------------------
# ACCESSIBILITY NOTES
# ---------------------------------------------------------------------------
accessibility:
  - "Banner uses role='dialog' or role='region' with aria-label"
  - "Dismiss button is keyboard accessible with visible focus indicator"
  - "Banner does not trap focus (it's informational, not a modal)"
  - "Text meets WCAG AA contrast ratios against the dark background"
  - "Animation respects prefers-reduced-motion"
