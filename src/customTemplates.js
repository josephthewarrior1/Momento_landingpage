// Custom invitations are commissioned with Momento, outside the self-service catalog.
// This contact belongs to Exclusive Custom only; general site contacts stay in config.js.
export const CUSTOM_CONSULTATION_PHONE = '+62 858-9182-8747';
export const CUSTOM_CONSULTATION_NUMBER = '6285891828747';

const consultationMessage =
  'Halo Momento, saya ingin konsultasi harga dan pembuatan undangan Exclusive Custom Forever.';

export const FOREVER_EXCLUSIVE = Object.freeze({
  id: 'forever-exclusive',
  name: 'Forever',
  category: 'exclusive',
  label: 'Exclusive Custom',
  note: 'FOREST GREEN · FLOATING RINGS',
  image: 'forever-exclusive-opening.svg',
  previewPath: '/demo/forever-exclusive',
  detailPath: '/templates/forever-exclusive',
  consultationPhone: CUSTOM_CONSULTATION_PHONE,
  consultationUrl: `https://wa.me/${CUSTOM_CONSULTATION_NUMBER}?text=${encodeURIComponent(consultationMessage)}`,
  editorEnabled: false,
  purchaseMode: 'consultation',
});

export const CUSTOM_TEMPLATES = Object.freeze([FOREVER_EXCLUSIVE]);

export function getCustomTemplates(category = 'all') {
  return category === 'all' || category === 'exclusive' ? CUSTOM_TEMPLATES : [];
}
