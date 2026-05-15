export interface Piece {
  aspectClass: string;
  img: string;
  alt: string;
  accent: 'al-gold' | 'al-silver' | 'al-cream';
  tag?: { text: string; type: 'tag-new' | 'tag-sig' | 'tag-bts' };
  theme: string;
  name: string;
  detail: string;
}

export interface Row {
  gridClass: string;
  pieces: Piece[];
}

export interface Look {
  eyebrow: string;
  title: string;
  titleItalic: string;
  desc: string;
  rows: Row[];
}

export const stats = [
  { n: '10', l: 'PIECES' },
  { n: '03', l: 'LOOKS' },
  { n: '04', l: 'MODELS' },
  { n: "'26", l: 'SEASON' },
];

export const looks: Look[] = [
  {
    eyebrow: 'THE COLLECTION',
    title: 'Obsidian',
    titleItalic: 'Eclipse',
    desc: 'Black sequin, bronze satin, gold lacework — a collection where every piece holds its own darkness.',
    rows: [
      {
        gridClass: 'g-7-5',
        pieces: [
          {
            aspectClass: 'piece-h2',
            img: '/images/obsidian-eclipse-gown.jpg',
            alt: 'The Last Ceremony Gown',
            accent: 'al-gold',
            tag: { text: 'SIGNATURE', type: 'tag-sig' },
            theme: 'OBSIDIAN ECLIPSE',
            name: 'The Last Ceremony Gown',
            detail: 'Black sequin bodice · Bronze taffeta skirt · Off-shoulder',
          },
          {
            aspectClass: 'piece-h2',
            img: '/images/obsidian-eclipse-motion.jpg',
            alt: 'The Last Ceremony — In Motion',
            accent: 'al-silver',
            theme: 'OBSIDIAN ECLIPSE',
            name: 'The Last Ceremony — In Motion',
            detail: 'Side profile · Taffeta in movement',
          },
        ],
      },
      {
        gridClass: 'g-5-7',
        pieces: [
          {
            aspectClass: 'piece-h3',
            img: '/images/craftsmanship-detail.jpg',
            alt: 'The Hand Behind It',
            accent: 'al-cream',
            tag: { text: 'DETAIL', type: 'tag-bts' },
            theme: 'CRAFTSMANSHIP',
            name: 'The Hand Behind It',
            detail: 'Corset lacing · Sequin bodice detail',
          },
          {
            aspectClass: 'piece-h3',
            img: '/images/two-shadows.jpg',
            alt: 'Two Shadows',
            accent: 'al-gold',
            theme: 'OBSIDIAN ECLIPSE · CINDER & ASH',
            name: 'Two Shadows',
            detail: 'The Ceremony Gown meets the Gold Corset',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'LOOK II',
    title: 'Cinder',
    titleItalic: '& Ash',
    desc: 'Gold canvas corset with black fringe trim, paired wide-leg silhouette — structured yet fluid.',
    rows: [
      {
        gridClass: 'g-5-7',
        pieces: [
          {
            aspectClass: 'piece-h2',
            img: '/images/cinder-ash-detail.jpg',
            alt: 'Laced in Gold',
            accent: 'al-gold',
            tag: { text: 'DETAIL', type: 'tag-bts' },
            theme: 'CINDER & ASH',
            name: 'Laced in Gold',
            detail: 'Corset back · Black lacing · Fringe trim',
          },
          {
            aspectClass: 'piece-h2',
            img: '/images/cinder-ash-look.jpg',
            alt: 'The Power Hour Look',
            accent: 'al-silver',
            theme: 'CINDER & ASH',
            name: 'The Power Hour Look',
            detail: 'Gold corset · Black blazer · Wide-leg sequin pants',
          },
        ],
      },
    ],
  },
  {
    eyebrow: 'LOOK III',
    title: 'Dead of',
    titleItalic: 'Night',
    desc: 'Deep espresso croc-texture halter and floor-length skirt — movement-forward and commanding.',
    rows: [
      {
        gridClass: 'g-3',
        pieces: [
          {
            aspectClass: 'piece-h1',
            img: '/images/dead-of-night-1.jpg',
            alt: '3am Halter Set',
            accent: 'al-cream',
            tag: { text: 'NEW', type: 'tag-new' },
            theme: 'DEAD OF NIGHT',
            name: '3am Halter Set',
            detail: 'Croc-texture satin · Halter top · Trumpet skirt',
          },
          {
            aspectClass: 'piece-h1',
            img: '/images/dead-of-night-seated.jpg',
            alt: '3am — Seated',
            accent: 'al-silver',
            theme: 'DEAD OF NIGHT',
            name: '3am — Seated',
            detail: 'Gold button detail · Mermaid hem',
          },
          {
            aspectClass: 'piece-h1',
            img: '/images/dead-of-night-bts.jpg',
            alt: 'The Making Of',
            accent: 'al-gold',
            tag: { text: 'BEHIND THE SCENES', type: 'tag-bts' },
            theme: 'PROCESS',
            name: 'The Making Of',
            detail: 'Designer at work · Final fitting',
          },
        ],
      },
    ],
  },
];
