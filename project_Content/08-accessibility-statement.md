# accessibility-statement.md
# ZHADORE — Accessibility Statement
# =============================================================================
# Page URL: /accessibility
# Last Updated: May 16, 2026
# Based on W3C WAI Accessibility Statement Generator guidance
# =============================================================================

# ---------------------------------------------------------------------------
# PAGE METADATA
# ---------------------------------------------------------------------------
page:
  title: "Accessibility Statement — ZHADORE"
  description: >-
    ZHADORE is committed to digital accessibility. Learn about our efforts 
    to conform to WCAG 2.2 AA standards and how to report barriers.
  url: "/accessibility"
  last_updated: "2026-05-16"

# ---------------------------------------------------------------------------
# ACCESSIBILITY STATEMENT CONTENT
# ---------------------------------------------------------------------------

# COMMITMENT STATEMENT
commitment:
  heading: "Our Commitment to Accessibility"
  body: >-
    ZHADORE is committed to ensuring digital accessibility for people of all
    abilities. We are continually improving the user experience for everyone
    and applying the relevant accessibility standards to achieve these goals.

    We believe that elegance, luxury, and accessibility are not mutually
    exclusive. Every aspect of the ZHADORE digital experience — from our
    brand storytelling to our lookbook imagery — should be accessible to
    all visitors, regardless of ability or the technology they use to browse.

# CONFORMANCE STATUS
conformance:
  heading: "Conformance Status"
  body: >-
    The Web Content Accessibility Guidelines (WCAG) define requirements for
    designers and developers to improve accessibility for people with
    disabilities. It defines three levels of conformance: Level A, Level AA,
    and Level AAA.
    
    **ZHADORE's website is designed to conform to WCAG 2.2 Level AA.**
    
    This means we strive to meet all Level A and Level AA success criteria,
    including but not limited to:
    
    • **Perceivable** — Content is available to the senses (sight, hearing, touch)
    • **Operable** — Interface forms, controls, and navigation are operable
    • **Understandable** — Content and interface are understandable
    • **Robust** — Content can be reliably interpreted by assistive technologies

# MEASURES TAKEN
measures:
  heading: "Accessibility Measures We've Taken"
  body: >-
    To ensure accessibility, ZHADORE has implemented the following measures:

  measures_list:
    - heading: "Semantic HTML5 Structure"
      body: >-
        Our site uses proper semantic HTML5 landmarks including &lt;header&gt;, 
        &lt;main&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;footer&gt;, and &lt;figure&gt; 
        elements, enabling screen reader users to navigate efficiently.

    - heading: "Heading Hierarchy"
      body: >-
        A logical heading structure (h1 → h2 → h3) helps all users understand 
        the page organization and navigate to sections of interest.

    - heading: "Skip Navigation"
      body: >-
        A "Skip to main content" link is provided as the first focusable 
        element, allowing keyboard users to bypass repeated navigation.

    - heading: "Keyboard Navigation"
      body: >-
        All interactive elements are reachable and operable via keyboard 
        alone, with visible focus indicators throughout.

    - heading: "Image Descriptions"
      body: >-
        All content images include descriptive alternative text (alt 
        attributes). Decorative elements are hidden from assistive 
        technology using aria-hidden.

    - heading: "Color Contrast"
      body: >-
        Text and interactive elements meet or exceed WCAG AA contrast 
        ratios — 4.5:1 for normal text and 3:1 for large text and UI 
        components.

    - heading: "Reduced Motion Support"
      body: >-
        We respect the prefers-reduced-motion CSS media query. When 
        enabled, all animations, canvas effects, and transitions are 
        disabled or simplified to opacity-only fades.

    - heading: "Responsive Design"
      body: >-
        The site is fully responsive and functional at any viewport width, 
        from mobile (320px) to desktop, with no horizontal scrolling.

    - heading: "Accessible Forms & Links"
      body: >-
        All links have descriptive text (never just "click here"). External 
        links are clearly identified. Form inputs (when added) will have 
        proper labels.

    - heading: "Canvas Animation Fallbacks"
      body: >-
        Decorative canvas animations are marked with aria-hidden="true" 
        and role="presentation". A static CSS background fallback is 
        provided for users with JavaScript disabled or reduced motion 
        preferences.

# KNOWN LIMITATIONS
limitations:
  heading: "Known Limitations & Workarounds"
  body: >-
    Despite our best efforts, some content may not yet be fully adapted to 
    the strictest accessibility standards. Known limitations include:

  limitations_list:
    - issue: "Canvas animations may not have full text equivalents"
      status: "Working on it"
      description: >-
        While all canvases are marked as decorative (aria-hidden), we are 
        exploring ways to provide equivalent atmospheric experiences for 
        users who cannot perceive visual motion.
    
    - issue: "Third-party content (Instagram, LinkedIn) beyond our control"
      status: "External dependency"
      description: >-
        Links to Instagram and LinkedIn lead to platforms whose 
        accessibility is managed by those respective companies. We 
        encourage you to review their accessibility statements.

    - issue: "Lookbook images are currently single-resolution JPGs"
      status: "Planned improvement"
      description: >-
        We are working to implement responsive images (srcset) and modern 
        formats (WebP) for faster loading and better visual quality at all 
        screen sizes.

# FEEDBACK
feedback:
  heading: "Feedback & Contact Information"
  body: >-
    We welcome your feedback on the accessibility of the ZHADORE website.
    If you encounter any accessibility barriers, please let us know:

  contact:
    email: "Zhadoree@gmail.com"
    email_subject: "Accessibility Feedback — ZHADORE"
    instagram: "@zh.adore"
    instagram_url: "https://www.instagram.com/zh.adore/"

  response_time: >-
    We aim to respond to accessibility feedback within 5 business days.

# ASSESSMENT
assessment:
  heading: "Assessment Approach"
  body: >-
    ZHADORE assesses the accessibility of this website through:
    
    • Automated testing using Lighthouse and Axe DevTools
    • Manual keyboard-only navigation testing
    • Screen reader testing with NVDA (Windows) and VoiceOver (macOS)
    • Color contrast verification using WebAIM's Contrast Checker
    • HTML validation using the W3C Nu HTML Checker
    • Regular reviews as new content and features are added

# FORMAL COMPLAINTS
complaints:
  heading: "Formal Complaints"
  body: >-
    If you believe this website does not meet accessibility standards and
    your concern has not been adequately addressed by our team, you have
    the right to file a complaint with the appropriate authority. In the
    United States, this may include filing a complaint with the Department
    of Justice under the Americans with Disabilities Act (ADA).

# DATE
date:
  statement_date: "This accessibility statement was created on May 16, 2026."
  review_cadence: "It will be reviewed and updated quarterly."
