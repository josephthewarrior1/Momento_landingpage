import { ASSETS } from './assets.js';

export function Brand({ className = '' }) {
    return (
        <span className={`momento-brand ${className}`.trim()}>
            <img className="momento-logo" src={ASSETS.logo} alt="Momento" />
        </span>
    );
}

export function BrandMark({ className = '' }) {
    return (
        <img
            className={`momento-symbol ${className}`.trim()}
            src={ASSETS.mark}
            alt=""
            aria-hidden="true"
        />
    );
}
