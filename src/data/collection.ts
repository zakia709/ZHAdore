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
    name: 'DRESSED IN INTENTION',
    subtitle: 'Built for the body as it is. Elevated the way it deserves.',
    style: 'bae-cay',
    photos: [
      { id: 'bae-1', alt: 'Dressed in Intention look 1', src: '/images/bae-cay/look-7.png' },
      { id: 'bae-2', alt: 'Dressed in Intention look 2', src: '/images/bae-cay/look-8.png' },
      { id: 'bae-3', alt: 'Dressed in Intention look 3', src: '/images/bae-cay/look-9.png' },
      { id: 'bae-4', alt: 'Dressed in Intention look 4', src: '/images/bae-cay/look-10.png' },
    ],
  },
  {
    id: 'business',
    name: "IT'S BUSINESS BABE",
    subtitle: "You can do it alone. That's why they're jealous.",
    style: 'business',
    photos: [
      { id: 'biz-1', alt: 'Business Babe look 1', src: '/images/business/look-3.png' },
      { id: 'biz-2', alt: 'Business Babe look 2', src: '/images/business/look-1.jpg' },
      { id: 'biz-3', alt: 'Business Babe look 3', src: '/images/business/look-4.jpg' },
      { id: 'biz-4', alt: 'Business Babe look 4', src: '/images/business/look-5.png' },
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
      { id: 'ext-3', alt: 'EXTRA-VAGENT look 3', src: '/images/extravagent/look-5.jpg' },
      { id: 'ext-4', alt: 'EXTRA-VAGENT look 4', src: '/images/extravagent/look-3.jpg' },
      { id: 'ext-5', alt: 'EXTRA-VAGENT look 5', src: '/images/extravagent/look-4.jpg' },
      { id: 'ext-6', alt: 'EXTRA-VAGENT look 6', src: '/images/extravagent/look-6.jpg' },
    ],
  },
];

export const team = [
  {
    initial: 'Z',
    name: 'ZHAREAL POPA',
    label: 'THE DESIGNER',
    role: 'Creative Director & Founder',
    bio: "I have a degree in Apparel Design from Oregon State University — but my real education started the moment I realized every woman deserves something made for her alone. What began as creating one-of-one pieces for others became full collections: each one darker, and yet — the deeper the shadow, the more deliberately the light finds its way in. I design for women who don't fit a mold and don't want to. My goal is to create artwork for the one-of-one woman — she who values authenticity, who knows what hard work costs, and who deserves to be preserved in the form of fashion. Every piece is handbuilt, hand-finished, and made to be felt.",
    accent: '#C4913A',
    avatarBg: 'rgba(196,145,58,0.1)',
    email: 'Zhadoree@gmail.com',
    linkedin: 'https://www.linkedin.com/in/zhareal-popa-/',
  },
  {
    initial: 'Z',
    name: 'ZAKIA YESMIN',
    label: 'TECH & FASHION · BUILDER',
    role: 'Tech & Fashion · Builder',
    bio: "I'm the person who makes sure ZHADORE has a digital heartbeat. I study Business Information Systems in New York and live at the intersection of tech and fashion — the place most people don't think to look. I built this website. I build the strategy. I'm here because I believe the most powerful thing a creative brand can have is someone who understands both the art and the code behind it.",
    accent: 'rgba(210,210,220,0.8)',
    avatarBg: 'rgba(210,210,220,0.06)',
    email: 'Zhadoree@gmail.com',
    linkedin: 'https://www.linkedin.com/in/zakia-yesmin-061321308/',
  },
];
