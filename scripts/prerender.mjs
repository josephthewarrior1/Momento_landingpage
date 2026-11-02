import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { SEO, SITE_URL, STRUCTURED_DATA } from '../src/seo.js';

// Render the actual React page, including its visible copy and links, for every
// visitor. The client hydrates the same tree to keep all interactions available.
const server = await createServer({
    mode: 'production',
    server: { middlewareMode: true, watch: null },
    appType: 'custom',
});

try {
    const { render } = await server.ssrLoadModule('/src/entry-server.jsx');
    const markup = render();
    const entry = new URL('../dist/index.html', import.meta.url);
    const html = await readFile(entry, 'utf8');
    if (!html.includes('<div id="root"></div>')) throw new Error('Missing prerender root.');
    const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    const metadata = [
        `<link rel="canonical" href="${SITE_URL}" />`,
        '<meta name="robots" content="index, follow, max-image-preview:large" />',
        '<meta property="og:type" content="website" />',
        '<meta property="og:site_name" content="Momento" />',
        '<meta property="og:locale" content="id_ID" />',
        `<meta property="og:url" content="${SITE_URL}" />`,
        `<meta property="og:title" content="${escape(SEO.id.title)}" />`,
        `<meta property="og:description" content="${escape(SEO.id.description)}" />`,
        `<meta property="og:image" content="${SITE_URL}branding/momento-logo-blue.png" />`,
        '<meta property="og:image:alt" content="Momento Invitation Studio" />',
        '<meta name="twitter:card" content="summary" />',
        `<meta name="twitter:title" content="${escape(SEO.id.title)}" />`,
        `<meta name="twitter:description" content="${escape(SEO.id.description)}" />`,
        `<meta name="twitter:image" content="${SITE_URL}branding/momento-logo-blue.png" />`,
        `<script type="application/ld+json">${JSON.stringify(STRUCTURED_DATA).replaceAll('<', '\\u003c')}</script>`,
    ].join('\n        ');
    const output = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
        .replace('</head>', `    ${metadata}\n    </head>`);
    await writeFile(entry, output);
    console.log('Prerendered homepage with canonical, social metadata, and structured data.');
} finally {
    await server.close();
}
