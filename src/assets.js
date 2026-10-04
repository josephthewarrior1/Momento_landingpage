// Local Momento demo photography, copied from the invitation studio's own
// generated examples. These fictional couples are not customer testimonials.
const local = (filename) => `/assets/${filename}`;

export const ASSETS = {
    logo: '/branding/momento-logo-blue.png',
    mark: '/branding/momento-mark-blue.png',
    inclusiveSans: local('font-inclusive-sans.woff2'),
    instrumentSerif: local('font-instrument-serif.woff2'),
    royal: local('momento-royal-cover.webp'),
    tides: local('momento-tides-cover.webp'),
    verdant: local('momento-verdant-cover.webp'),
    letter: local('momento-letter-cover.webp'),
    heritage: local('momento-heritage-cover.webp'),
    javanese: local('momento-javanese-cover.webp'),
};

ASSETS.heroPortrait = ASSETS.royal;
ASSETS.heroSecondary = ASSETS.tides;
ASSETS.storyPortrait = ASSETS.letter;

// Names, IDs, categories and preview routes match the existing Momento catalog
// in src/features/invitations/themeCatalog.js and AppRoutes.jsx.
export const MOMENTO_TEMPLATES = [
    {
        id: 'royal',
        name: 'Royal Blue',
        category: 'Klasik',
        description:
            'Biru navy, kaligrafi putih, bingkai ukiran, dan potret studio dalam satu undangan klasik.',
        color: '#052c57',
        cover: ASSETS.royal,
        previewPath: '/templates/royal',
    },
    {
        id: 'tides',
        name: 'Silver Tides',
        category: 'Editorial',
        description:
            'Abu kebiruan, pita gelombang, potret bertumpuk, dan kisah cinta di tepi laut.',
        color: '#787d7e',
        cover: ASSETS.tides,
        previewPath: '/templates/tides',
    },
    {
        id: 'verdant',
        name: 'Verdant Vow',
        category: 'Floral',
        description:
            'Janji di antara pegunungan, lengkung arsitektural, dan bunga di atas kertas ivory.',
        color: '#183d32',
        cover: ASSETS.verdant,
        previewPath: '/templates/verdant',
    },
    {
        id: 'letter',
        name: 'Sepucuk Janji',
        category: 'Editorial',
        description:
            'Surat pribadi dalam amplop burgundy, segel monogram, dan potret hangat di atas kertas ivory.',
        color: '#5a2136',
        cover: ASSETS.letter,
        previewPath: '/templates/letter',
    },
    {
        id: 'heritage',
        name: 'Heritage Vows',
        category: 'Klasik',
        description:
            'Potret sinematik, inisial kaligrafi, bingkai perangko, dan kisah yang bisa dijelajahi.',
        color: '#b9b49f',
        cover: ASSETS.heritage,
        previewPath: '/templates/heritage',
    },
    {
        id: 'javanese',
        name: 'Sekar Kinasih',
        category: 'Adat',
        description:
            'Gunungan, motif kawung, dan aksen emas dalam nuansa Jawa.',
        color: '#a77d46',
        cover: ASSETS.javanese,
        previewPath: '/templates/javanese',
    },
];

export default ASSETS;
