export const SEO = {
    id: {
        title: 'Momento — Undangan Pernikahan Digital & Buku Tamu',
        description: 'Buat undangan pernikahan digital dengan desain personal, RSVP, galeri, musik, dan lokasi acara. Kelola tamu dengan buku tamu digital dan QR check-in Momento.',
    },
    en: {
        title: 'Momento — Digital Wedding Invitations & Guestbook',
        description: 'Create a personal digital wedding invitation with RSVPs, photos, music, and event locations. Welcome guests with the Momento digital guestbook and QR check-in.',
    },
};

export const SITE_URL = 'https://momento.id/';

export const STRUCTURED_DATA = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${SITE_URL}#organization`,
            name: 'Momento',
            url: SITE_URL,
            logo: `${SITE_URL}branding/momento-mark-blue.png`,
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}#website`,
            name: 'Momento',
            url: SITE_URL,
            inLanguage: 'id-ID',
            publisher: { '@id': `${SITE_URL}#organization` },
        },
        {
            '@type': 'WebPage',
            '@id': `${SITE_URL}#webpage`,
            url: SITE_URL,
            name: SEO.id.title,
            description: SEO.id.description,
            inLanguage: 'id-ID',
            isPartOf: { '@id': `${SITE_URL}#website` },
            about: { '@id': `${SITE_URL}#organization` },
        },
    ],
};
