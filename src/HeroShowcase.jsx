import { ASSETS } from './assets.js';
import { APP_URL } from './config.js';
import { Brand } from './Brand.jsx';
import './hero-showcase.css';

const COPY = {
    id: {
        wedding: 'UNDANGAN PERNIKAHAN',
        recipient: 'Kepada yang tersayang,',
        guest: 'Nadia & keluarga',
        view: 'Lihat undangan',
        linkLabel: 'Lihat contoh undangan Silver Tides',
        photoAlt: 'Potret pasangan dalam contoh undangan Silver Tides',
        confirmed: 'Konfirmasi diterima',
        example: 'CONTOH RSVP',
        caption: 'Sebuah undangan. Banyak kenangan.',
        collection: 'KOLEKSI SILVER TIDES',
    },
    en: {
        wedding: 'THE WEDDING INVITATION',
        recipient: 'With love, for',
        guest: 'Nadia & family',
        view: 'View invitation',
        linkLabel: 'View the Silver Tides sample invitation',
        photoAlt: 'A couple in the Silver Tides sample invitation',
        confirmed: 'RSVP received',
        example: 'SAMPLE RSVP',
        caption: 'One invitation. A lifetime of memories.',
        collection: 'SILVER TIDES COLLECTION',
    },
};

export default function HeroShowcase({ locale }) {
    const copy = COPY[locale] || COPY.id;
    return (
        <figure className="hero-showcase">
            <a
                className="hero-photo-invitation"
                href={APP_URL + '/templates/tides'}
                target="_blank"
                rel="noreferrer"
                aria-label={copy.linkLabel}
            >
                <img
                    className="hero-couple-photo"
                    src={ASSETS.tides}
                    alt={copy.photoAlt}
                    width="1024"
                    height="1536"
                    fetchPriority="high"
                />
                <div className="hero-photo-heading" aria-hidden="true">
                    <span>THE WEDDING OF</span>
                    <span className="hero-photo-monogram">A <i>&amp;</i> K</span>
                    <span>12 JUNE 2027</span>
                </div>
                <div className="hero-photo-footer" aria-hidden="true">
                    <span className="hero-view-label">
                        {copy.view} <span>↗</span>
                    </span>
                </div>
            </a>

            <div className="hero-paper-invitation" aria-hidden="true">
                <div className="hero-paper-top">
                    <Brand />
                    <span>WITH LOVE</span>
                </div>
                <span className="hero-paper-eyebrow">{copy.wedding}</span>
                <div className="hero-paper-names">
                    Arga <span>&amp;</span> Kirana
                </div>
                <div className="hero-paper-date">
                    <span>JUN</span>
                    <strong>12</strong>
                    <span>2027</span>
                </div>
                <div className="hero-paper-recipient">
                    <span>{copy.recipient}</span>
                    <strong>{copy.guest}</strong>
                </div>
            </div>

            <div className="hero-rsvp-note" aria-hidden="true">
                <span className="hero-rsvp-check">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="m6 12 4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <div>
                    <span className="hero-rsvp-label">{copy.example}</span>
                    <strong>{copy.confirmed}</strong>
                </div>
            </div>

            <figcaption className="hero-showcase-caption">
                <span>{copy.caption}</span>
                <span>{copy.collection}</span>
            </figcaption>
        </figure>
    );
}
