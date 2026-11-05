import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer } from 'vite';
import {
  CUSTOM_CONSULTATION_NUMBER,
  CUSTOM_CONSULTATION_PHONE,
  FOREVER_EXCLUSIVE,
  getCustomTemplates,
} from '../src/customTemplates.js';

test('Forever is discoverable as an exclusive commission, outside standard categories', () => {
  assert.equal(FOREVER_EXCLUSIVE.editorEnabled, false);
  assert.equal(FOREVER_EXCLUSIVE.purchaseMode, 'consultation');
  assert.equal(FOREVER_EXCLUSIVE.previewType, 'interactive');
  assert.equal(FOREVER_EXCLUSIVE.previewPath, '/preview/forever-exclusive');
  assert.equal(getCustomTemplates('all')[0].id, 'forever-exclusive');
  assert.equal(getCustomTemplates('exclusive')[0].id, 'forever-exclusive');
  for (const category of ['classic', 'floral', 'editorial', 'traditional']) {
    assert.deepEqual(getCustomTemplates(category), []);
  }
});

test('custom pricing contact uses the supplied WhatsApp number and a consultation message', () => {
  const url = new URL(FOREVER_EXCLUSIVE.consultationUrl);
  assert.equal(CUSTOM_CONSULTATION_PHONE, '+62 858-9182-8747');
  assert.equal(CUSTOM_CONSULTATION_NUMBER, '6285891828747');
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/6285891828747');
  assert.match(url.searchParams.get('text'), /konsultasi harga.*Exclusive Custom Forever/);
});

test('actual homepage links to the interactive custom preview and consultation without editor or checkout', async () => {
  const server = await createServer({
    mode: 'production',
    server: { middlewareMode: true, watch: null },
    appType: 'custom',
  });
  try {
    const { render } = await server.ssrLoadModule('/src/entry-server.jsx');
    const markup = render();
    const customCard = markup.match(/<article[^>]*data-template="forever-exclusive"[^>]*>[\s\S]*?<\/article>/)?.[0];
    assert.ok(customCard, 'Exclusive Custom card must be visible in the all-designs view');
    assert.match(customCard, /Exclusive Custom/);
    assert.match(customCard, /Harga custom melalui konsultasi WhatsApp\./);
    assert.match(customCard, /href="[^"]*\/preview\/forever-exclusive"/);
    assert.match(customCard, /href="https:\/\/wa\.me\/6285891828747\?text=/);
    assert.match(customCard, /Konsultasi Harga/);
    assert.match(customCard, /Lihat Preview/);
    assert.match(customCard, /aria-label="Lihat Preview Forever"/);
    assert.doesNotMatch(customCard, /Tonton Preview|Watch Preview|Lihat demo|View demo|\/demo\/forever-exclusive|<iframe/);
    assert.doesNotMatch(customCard, /\/paket|\/portal\/beli|\/builder|Pilih desain/);
    for (const id of ['eloise', 'puspa-jawa', 'jade-dragon']) {
      assert.match(markup, new RegExp(`/demo/${id}`));
      assert.match(markup, new RegExp(`/paket\\?template=${id}`));
    }
    assert.doesNotMatch(markup, /\/paket\?template=forever-exclusive/);
  } finally {
    await server.close();
  }
});
