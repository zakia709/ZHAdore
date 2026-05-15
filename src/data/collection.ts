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
      { id: 'bae-1', alt: 'BAE-CAY look 1', src: '/images/bae-cay/look-1.jpg' },
      { id: 'bae-2', alt: 'BAE-CAY look 2', src: '/images/bae-cay/look-2.jpg' },
      { id: 'bae-3', alt: 'BAE-CAY look 3', src: '/images/bae-cay/look-3.jpg' },
      { id: 'bae-4', alt: 'BAE-CAY look 4', src: '/images/bae-cay/look-4.jpg' },
      { id: 'bae-5', alt: 'BAE-CAY look 5', src: '/images/bae-cay/look-5.jpg' },
      { id: 'bae-6', alt: 'BAE-CAY look 6', src: '/images/bae-cay/look-6.jpg' },
    ],
  },
  {
    id: 'business',
    name: "IT'S BUSINESS BABE",
    subtitle: "You can do it alone. That's why they're jealous.",
    style: 'business',
    photos: [
      { id: 'biz-1', alt: 'Business Babe look 1', src: '/images/business/look-1.jpg' },
      { id: 'biz-2', alt: 'Business Babe look 2', src: '/images/business/look-2.jpg' },
      { id: 'biz-3', alt: 'Business Babe look 3', src: '/images/business/look-3.jpg' },
      { id: 'biz-4', alt: 'Business Babe look 4', src: '/images/business/look-4.jpg' },
    ],
  },
  {
    id: 'extravagent',
    name: 'EXTRA-VAGENT',
    subtitle: 'Dressed like a dark queen. Built like an empire.',
    style: 'extravagent',
    photos: [
      { id: 'ext-1', alt: 'EXTRA-VAGENT look 1', src: '/images/extravagent/look-1.jpg' },
      { id: 'ext-2', alt: 'EXTRA-VAGENT look 2', src: '/images/extravagent/look-2.jpg' },
      { id: 'ext-3', alt: 'EXTRA-VAGENT look 3', src: '/images/extravagent/look-3.jpg' },
      { id: 'ext-4', alt: 'EXTRA-VAGENT look 4', src: '/images/extravagent/look-4.jpg' },
      { id: 'ext-5', alt: 'EXTRA-VAGENT look 5', src: '/images/extravagent/look-5.jpg' },
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
