export interface PhotoSlot {
  id: string;
  alt: string;
  src?: string;
}

export interface Theme {
  id: string;
  name: string;
  subtitle: string;
  style: 'bae-cay' | 'business' | 'extravagent';
  photos: PhotoSlot[];
}

export const themes: Theme[] = [
  {
    id: 'bae-cay',
    name: 'BAE-CAY',
    subtitle: 'Sun-kissed. Untamed. Yours.',
    style: 'bae-cay',
    photos: [
      { id: 'bae-1', alt: 'BAE-CAY look 1' },
      { id: 'bae-2', alt: 'BAE-CAY look 2' },
      { id: 'bae-3', alt: 'BAE-CAY look 3' },
      { id: 'bae-4', alt: 'BAE-CAY detail' },
      { id: 'bae-5', alt: 'BAE-CAY motion' },
      { id: 'bae-6', alt: 'BAE-CAY portrait' },
    ],
  },
  {
    id: 'business',
    name: "IT'S BUSINESS BABE",
    subtitle: "You can do it alone. That's why they're jealous.",
    style: 'business',
    photos: [
      { id: 'biz-1', alt: 'Business Babe look 1' },
      { id: 'biz-2', alt: 'Business Babe look 2' },
      { id: 'biz-3', alt: 'Business Babe detail' },
      { id: 'biz-4', alt: 'Business Babe motion' },
    ],
  },
  {
    id: 'extravagent',
    name: 'EXTRA-VAGENT',
    subtitle: 'Dressed like a dark queen. Built like an empire.',
    style: 'extravagent',
    photos: [
      { id: 'ext-1', alt: 'EXTRA-VAGENT look 1' },
      { id: 'ext-2', alt: 'EXTRA-VAGENT look 2' },
      { id: 'ext-3', alt: 'EXTRA-VAGENT feature' },
      { id: 'ext-4', alt: 'EXTRA-VAGENT detail' },
      { id: 'ext-5', alt: 'EXTRA-VAGENT portrait' },
    ],
  },
];

export const team = [
  {
    initial: 'Z',
    name: 'ZHAREAL POPA',
    label: 'THE DESIGNER',
    role: 'Creative Director & Founder',
    bio: 'Zhareal brings every ZHADORE piece to life by hand. Her designs move between worlds — baroque maximalism, sharp power dressing, and sun-drenched resort wear. Each stitch is intentional. Each collection tells a story only she could write.',
    accent: '#C4913A',
  },
  {
    initial: 'Z',
    name: 'ZAKIA',
    label: 'THE BUSINESS MIND',
    role: 'Co-Founder · Tech & Strategy',
    bio: 'Zakia builds the infrastructure behind the brand — the strategy, the digital presence, and the business vision that takes ZHADORE from a collection into a movement. Where Zhareal creates the world, Zakia makes sure the world sees it.',
    accent: 'rgba(210,210,220,0.8)',
  },
];
