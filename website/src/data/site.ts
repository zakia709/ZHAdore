// src/data/site.ts
// ZHADORE — Central site data and content constants
// All site-wide strings, navigation, social links, and content live here.

export const site = {
  name: 'ZHADORE',
  tagline: 'Handmade. Intentional. Worn like armor.',
  collection: 'AMBIVALENCE',
  season: 'SS 2026',
  seasonFull: 'Spring/Summer 2026',
  description:
    'ZHADORE is a handbuilt luxury fashion brand by Zhareal Popa & Zakia Yesmin. Discover the AMBIVALENCE SS 2026 collection.',
  url: 'https://zhadore.com',
  language: 'en',
  themeColor: '#0A0A0A',
  ogImage: '/images/og/zhadore-og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterHandle: '@zhadore',
  locale: 'en_US',
  copyright: {
    holder: 'ZHADORE',
    startYear: 2025,
    notice: 'ALL RIGHTS RESERVED',
  },
};

export const navigation = {
  primary: [
    { label: 'Collection', href: '/collection' },
    { label: 'Themes', href: '#themes' },
    { label: 'Story', href: '/story' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'UPCYCLING', href: '#', special: true },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

export const contact = {
  email: {
    address: 'Zhadoree@gmail.com',
    display: 'Zhadoree@gmail.com',
  },
  instagram: {
    handle: '@zh.adore',
    url: 'https://www.instagram.com/zh.adore/',
    display: '@zh.adore',
  },
  locations: {
    design: 'Portland, Oregon, USA',
    tech: 'New York, New York, USA',
  },
};

export const founders = {
  zhareal: {
    initial: 'Z',
    label: 'THE DESIGNER',
    name: 'ZHAREAL POPA',
    role: 'Creative Director & Founder',
    accentColor: '#C4913A',
    bio: `I have a degree in Apparel Design from Oregon State University — but my real education started the moment I realized every woman deserves something made for her alone. What began as creating one-of-one pieces for others became full collections: each one darker, and yet — the deeper the shadow, the more deliberately the light finds its way in. I design for women who don't fit a mold and don't want to. My goal is to create artwork for the one-of-one woman — she who values authenticity, who knows what hard work costs, and who deserves to be preserved in the form of fashion. Every piece is handbuilt, hand-finished, and made to be felt.`,
    email: 'Zhadoree@gmail.com',
    linkedin: 'https://www.linkedin.com/in/zhareal-popa-/',
    quotes: [
      'The deeper the shadow, the more deliberately the light finds its way in.',
      "I design for women who don't fit a mold and don't want to.",
      'Every piece is handbuilt, hand-finished, and made to be felt.',
    ],
  },
  zakia: {
    initial: 'Z',
    label: 'TECH & FASHION · BUILDER',
    name: 'ZAKIA YESMIN',
    role: 'Tech & Fashion · Builder',
    accentColor: 'rgba(210, 210, 220, 0.8)',
    bio: `I study Business Information Systems in New York and I live at the intersection of tech and fashion. I had a vision for what ZHADORE could look like digitally and I made it happen. I built this website from the ground up, learning in real time, mixing software development and UI with a genuine passion for the fashion industry. I build the strategy, the digital presence, the infrastructure that turns a collection into a brand. I'm here because I believe the most powerful thing a creative brand can have is someone who understands both the art and the code behind it.`,
    email: 'Zhadoree@gmail.com',
    linkedin: 'https://www.linkedin.com/in/zakia-yesmin-061321308/',
    quotes: [
      'The most powerful thing a creative brand can have is someone who understands both the art and the code.',
      'I build the strategy, the digital presence, the infrastructure that turns a collection into a brand.',
      'I had a vision for what ZHADORE could look like digitally and I made it happen.',
    ],
  },
};

export const themes = [
  {
    id: 'bae-cay',
    name: 'DRESSED IN INTENTION',
    tagline: 'Built for the body as it is. Elevated the way it deserves.',
    description:
      'DRESSED IN INTENTION is the foundation of the AMBIVALENCE collection. These are garments that meet the wearer exactly where she stands — no compromise, no forcing, no apology. Each piece is cut to honor the natural form, then elevated with unexpected details: a draped shoulder, a weighted hem, a seam that curves like it was always meant to be there.',
    vibes: ['Grounded luxury', 'Structural', 'Deliberate', 'Quiet power'],
    looks: [
      { id: 'di-1', file: 'bae-cay/Look%201.png', alt: 'ZHADORE DRESSED IN INTENTION look 1: structural blazer with draped shoulder detail in charcoal', width: 1200, height: 1600 },
      { id: 'di-2', file: 'bae-cay/look%202.png', alt: 'ZHADORE DRESSED IN INTENTION look 2: high-waisted trouser with asymmetrical closure', width: 1200, height: 1600 },
      { id: 'di-3', file: 'bae-cay/look%203.png', alt: 'ZHADORE DRESSED IN INTENTION look 3: floor-length wrap dress in matte black', width: 1200, height: 1600 },
      { id: 'di-4', file: 'bae-cay/look%204%20closeup.png', alt: 'ZHADORE DRESSED IN INTENTION look 4: cropped jacket with hand-finished gold stitching', width: 1200, height: 1600 },
    ],
  },
  {
    id: 'business',
    name: "IT'S BUSINESS BABE",
    tagline: "You can do it alone. That's why they're jealous.",
    description:
      "IT'S BUSINESS BABE is power dressing stripped of pretense. This is the uniform of the woman who walks into the room and doesn't need to say a word — her presence does the talking. Sharp shoulders. Clean lines. Fabrics that hold their shape because she holds hers.",
    vibes: ['Power dressing', 'Unapologetic', 'Corporate edge', 'Sharp silhouettes'],
    looks: [
      { id: 'bb-1', file: 'business/Look%201.png', alt: "ZHADORE IT'S BUSINESS BABE look 1: oversized power blazer in midnight black with sculptural lapels", width: 1200, height: 1600 },
      { id: 'bb-2', file: 'business/look%203%20detail.png', alt: "ZHADORE IT'S BUSINESS BABE look 2: wide-leg tailored trouser with satin stripe detail", width: 1200, height: 1600 },
      { id: 'bb-3', file: 'business/look-1.jpg', alt: "ZHADORE IT'S BUSINESS BABE look 3: structured corset top with integrated blazer collar", width: 1200, height: 1600 },
      { id: 'bb-4', file: 'business/look-4.jpg', alt: "ZHADORE IT'S BUSINESS BABE look 4: cape-sleeve blazer dress with gold-button closure", width: 1200, height: 1600 },
    ],
  },
  {
    id: 'extravagent',
    name: 'EXTRA-VAGENT',
    tagline: 'Dressed like a dark queen. Built like an empire.',
    description:
      "EXTRA-VAGENT is the culminating statement of the AMBIVALENCE collection — unapologetically dramatic, deliberately excessive, and precisely controlled. This is evening wear reimagined through a dark lens: gowns that command space, textures that catch light like secrets, silhouettes that belong in a cathedral or on a throne.",
    vibes: ['Dark opulence', 'Regal drama', 'Statement pieces', 'Cathedral energy'],
    looks: [
      { id: 'ev-1', file: 'extravagent/Look%201%20and%20Look%202.jpg', alt: 'ZHADORE EXTRA-VAGENT look 1: floor-length black gown with gold embroidery cascading down the bodice', width: 1200, height: 1600 },
      { id: 'ev-2', file: 'extravagent/look%204%20front.jpg', alt: 'ZHADORE EXTRA-VAGENT look 2: structured velvet evening coat with architectural shoulders', width: 1200, height: 1600 },
      { id: 'ev-3', file: 'extravagent/look%203.jpg', alt: 'ZHADORE EXTRA-VAGENT look 3: high-slit silk gown with hand-beaded collar', width: 1200, height: 1600 },
      { id: 'ev-4', file: 'extravagent/look%204.jpg', alt: 'ZHADORE EXTRA-VAGENT look 4: dramatic cape with gold chain detailing', width: 1200, height: 1600 },
      { id: 'ev-5', file: 'extravagent/group-photo.jpg', alt: 'ZHADORE EXTRA-VAGENT look 5: corseted gown with hand-draped tulle overlay', width: 1200, height: 1600 },
      { id: 'ev-6', file: 'extravagent/group-photo%202.jpg', alt: 'ZHADORE EXTRA-VAGENT look 6: gold-thread embroidered evening jacket with sculptural peplum', width: 1200, height: 1600 },
    ],
  },
];
