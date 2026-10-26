/* eslint-disable react/prop-types */
import './PhoneMockup.css';

/** A decorative device shell. Its single child remains the real invitation preview. */
export default function PhoneMockup({ children, className = '', style }) {
    return (
        <div className={`iv-phone-mockup ${className}`.trim()} style={style}>
            <div className="iv-phone-shadow" aria-hidden="true" />
            <div className="iv-phone-device">
                <div className="iv-phone-button iv-phone-button--mute" aria-hidden="true" />
                <div className="iv-phone-button iv-phone-button--volume" aria-hidden="true" />
                <div className="iv-phone-button iv-phone-button--power" aria-hidden="true" />
                <div className="iv-phone-screen">{children}</div>
                <div className="iv-phone-island" aria-hidden="true"><span /></div>
                <div className="iv-phone-home" aria-hidden="true" />
            </div>
        </div>
    );
}
