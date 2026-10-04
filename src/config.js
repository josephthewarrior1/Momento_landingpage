const trimSlash = (value) => value.replace(/\/+$/, '');

export const APP_URL = trimSlash(
    import.meta.env.VITE_MOMENTO_APP_URL || 'http://127.0.0.1:9875',
);
export const CONTACT_EMAIL = (
    import.meta.env.VITE_MOMENTO_CONTACT_EMAIL || ''
).trim();
export const WHATSAPP_NUMBER = (
    import.meta.env.VITE_MOMENTO_WHATSAPP || ''
).replace(/\D/g, '');
