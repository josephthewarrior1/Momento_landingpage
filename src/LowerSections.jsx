import { useId, useState } from 'react';
import './lower-sections.css';
import { Brand, BrandMark } from './Brand.jsx';

const copy = {
    id: {
        about: 'Tentang Momento',
        statement: [
            'Ada cerita di balik setiap ',
            'pertemuan.',
            ' Beri cerita itu tempat yang indah.',
        ],
        aboutText:
            'Momento adalah ruang untuk merangkai undangan, membagikan cerita, dan menyiapkan kehadiran orang-orang terdekat. Dari pernikahan hingga perayaan kecil, semuanya dimulai dari sebuah undangan.',
        caption: 'Sebuah undangan. Sebuah awal.',
        workflow: 'Cara kerja',
        workflowTitle: ['Dari sebuah ide,', 'jadi hari istimewa.'],
        workflowText:
            'Rangkai dulu ceritanya. Bagikan saat sudah siap. Sambut mereka di hari acara.',
        demo: 'Lihat demo undangan',
        steps: [
            [
                'Rangkai undanganmu',
                'Pilih desain, tulis detail acara, lalu sesuaikan warna, foto, dan musik. Lihat hasilnya lewat preview sebelum menyimpan draft dan menerbitkan undangan.',
                'Ceritamu, dengan gayamu',
            ],
            [
                'Bagikan dengan personal',
                'Untuk undangan pernikahan, tambahkan tamu atau impor daftar CSV. Buat dan salin link personal dengan nama masing-masing penerima.',
                'Untuk orang-orang terdekat',
            ],
            [
                'Sambut setiap kehadiran',
                'Tamu pernikahan dapat mengisi RSVP dan ucapan melalui undangan. Pada hari acara, petugas memindai QR tamu untuk mencatat check-in.',
                'Dari jawaban sampai kehadiran',
            ],
        ],
        sampleInvite: 'THE WEDDING OF',
        sampleNames: 'Nadia & Arka',
        sampleCaption: 'Contoh undangan',
        sampleGuest: 'Kepada Yth.',
        sampleGuestName: 'Sahabat tersayang',
        sampleOpen: 'Buka undangan',
        sampleRsvp: 'Konfirmasi kehadiran',
        sampleAttending: 'Akan hadir',
        sampleWish: 'Sampai bertemu di hari bahagia!',
        sampleTag: 'CONTOH TAMPILAN',
        faq: 'Hal-hal yang ingin kamu tahu',
        faqTitle: ['Sebelum', 'memulai.'],
        faqIntro:
            'Kenalan sedikit lagi dengan Momento, supaya kamu tahu harus mulai dari mana.',
        faqItems: [
            [
                'Bisa mencoba Momento tanpa akun?',
                'Bisa. Klik “Lihat demo undangan” untuk membuka contoh di tab baru. Nikmati tampilan undangan seperti tamu yang menerimanya, tanpa perlu masuk ke akun.',
            ],
            [
                'Apa saja yang bisa disesuaikan?',
                'Kamu bisa mengubah detail acara, warna, font, foto, galeri, dan musik. Bagian undangan juga dapat diurutkan atau disembunyikan. Preview membantu melihat hasilnya di ukuran ponsel, tablet, atau laptop.',
            ],
            [
                'Apakah bisa untuk acara selain pernikahan?',
                'Bisa. Momento memiliki pilihan jenis acara dan desain untuk berbagai perayaan. Saat ini, link tamu personal, RSVP, dan check-in QR tersedia pada alur undangan pernikahan.',
            ],
            [
                'Kapan perubahan terlihat oleh tamu?',
                'Simpan draft menyimpan pekerjaanmu di editor. Isi undangan yang sudah diterbitkan baru berubah setelah kamu memilih Publish, sehingga kamu bisa menyiapkan perubahan terlebih dahulu.',
            ],
            [
                'Bagaimana RSVP dan check-in bekerja?',
                'Pada undangan pernikahan, tamu membuka link personal untuk mengisi RSVP dan ucapan. QR tamu kemudian dapat dipindai oleh petugas yang memiliki akses check-in. Sistem mencegah tamu yang sama tercatat dua kali.',
            ],
            [
                'Bagaimana mulai menggunakan dashboard?',
                'Buka halaman Masuk untuk menggunakan akunmu, atau pilih Daftar akun jika belum punya. Setelah masuk, pilih paket dan desain untuk mulai menyiapkan undanganmu.',
            ],
        ],
        contact: 'Mulai cerita barumu',
        contactTitle: ['Momen yang berharga,', 'dimulai di sini.'],
        contactText:
            'Lihat contoh undangan, atau siapkan brief acara untuk memperjelas ide yang kamu punya.',
        brief: 'Siapkan brief acara',
        demoNote: 'Lihat contoh undangan tanpa akun.',
        footerText: 'Undangan untuk cerita yang ingin kamu rayakan.',
        explore: 'Jelajahi',
        login: 'Masuk ke dashboard',
        footerNote: 'Dibuat untuk momenmu.',
        top: 'Kembali ke atas',
    },
    en: {
        about: 'About Momento',
        statement: [
            'Every gathering has a ',
            'story.',
            ' Give yours a beautiful place to begin.',
        ],
        aboutText:
            'Momento is a place to compose invitations, share your story, and prepare to welcome the people closest to you. From weddings to intimate celebrations, it all begins with an invitation.',
        caption: 'An invitation. A beginning.',
        workflow: 'How it works',
        workflowTitle: ['From a little idea,', 'to a special day.'],
        workflowText:
            'Create your story. Share it when you are ready. Welcome everyone on the day.',
        demo: 'View invitation demo',
        steps: [
            [
                'Make it your invitation',
                'Choose a design, add your event details, and personalize the colors, photos, and music. Preview your invitation before saving a draft and publishing.',
                'Your story, your way',
            ],
            [
                'Share a personal welcome',
                'For wedding invitations, add guests or import a CSV list. Create and copy a personal invitation link for each recipient.',
                'For the people closest to you',
            ],
            [
                'Welcome every guest',
                'Wedding guests can send their RSVP and wishes through the invitation. On the day, authorized staff scan guest QR codes to record check-in.',
                'From their reply to their arrival',
            ],
        ],
        sampleInvite: 'THE WEDDING OF',
        sampleNames: 'Nadia & Arka',
        sampleCaption: 'Sample invitation',
        sampleGuest: 'Dear',
        sampleGuestName: 'Our dear friend',
        sampleOpen: 'Open invitation',
        sampleRsvp: 'Confirm your attendance',
        sampleAttending: 'Will attend',
        sampleWish: 'See you on your special day!',
        sampleTag: 'SAMPLE PREVIEW',
        faq: 'A few things to know',
        faqTitle: ['Before', 'you begin.'],
        faqIntro:
            'Get to know Momento a little better and find your starting point.',
        faqItems: [
            [
                'Can I try Momento without an account?',
                'Yes. Select “View invitation demo” to open a sample in a new tab. Explore the invitation just as a guest would, without signing in.',
            ],
            [
                'What can I personalize?',
                'You can change event details, colors, fonts, photos, galleries, and music. Invitation sections can also be reordered or hidden. Preview your changes at phone, tablet, or laptop sizes.',
            ],
            [
                'Can I make invitations for other events?',
                'Yes. Momento offers event types and designs for different celebrations. Personal guest links, RSVP, and QR check-in are currently available in the wedding invitation workflow.',
            ],
            [
                'When will guests see my changes?',
                'Save draft saves your work in the editor. A published invitation only changes after you select Publish, so you can prepare updates before sharing them.',
            ],
            [
                'How do RSVP and check-in work?',
                'Wedding guests open their personal links to send an RSVP and wishes. Authorized check-in staff can scan each guest’s QR code on the day. The system prevents the same guest from being checked in twice.',
            ],
            [
                'How do I get started with the dashboard?',
                'Open the login page to use your account, or choose Sign up if you need one. After signing in, choose a package and design to start preparing your invitation.',
            ],
        ],
        contact: 'Begin your next story',
        contactTitle: ['A meaningful moment,', 'starts right here.'],
        contactText:
            'View a sample invitation, or prepare an event brief to bring your ideas into focus.',
        brief: 'Prepare an event brief',
        demoNote: 'View a sample invitation without an account.',
        footerText: 'Invitations for the stories you want to celebrate.',
        explore: 'Explore',
        login: 'Open the dashboard',
        footerNote: 'Made for your moments.',
        top: 'Back to top',
    },
};

function Arrow() {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M3 10h13M10 4l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
function Star({ className = '' }) {
    return (
        <svg
            className={className}
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M24 1c0 16-7 23-23 23 16 0 23 7 23 23 0-16 7-23 23-23C31 24 24 17 24 1Z"
                fill="currentColor"
            />
        </svg>
    );
}
function StepPreview({ index, t }) {
    return (
        <div
            className={`lower-step-preview lower-step-preview-${index}`}
            aria-hidden="true"
        >
            <span className="lower-preview-tag">{t.sampleTag}</span>
            {index === 0 && (
                <div className="lower-preview-invitation">
                    <Star className="lower-preview-star" />
                    <small>{t.sampleInvite}</small>
                    <span className="lower-preview-names">{t.sampleNames}</span>
                    <span className="lower-preview-rule" />
                    <small>{t.sampleCaption}</small>
                </div>
            )}
            {index === 1 && (
                <div className="lower-preview-share">
                    <span className="lower-preview-monogram">
                        <BrandMark />
                    </span>
                    <small>{t.sampleGuest}</small>
                    <span className="lower-preview-recipient">
                        {t.sampleGuestName}
                    </span>
                    <span className="lower-preview-link">
                        {t.sampleOpen}
                        <Arrow />
                    </span>
                </div>
            )}
            {index === 2 && (
                <div className="lower-preview-rsvp">
                    <span className="lower-preview-check">✓</span>
                    <span className="lower-preview-rsvp-title">
                        {t.sampleRsvp}
                    </span>
                    <span className="lower-preview-attending">
                        <span />
                        {t.sampleAttending}
                    </span>
                    <small>“{t.sampleWish}”</small>
                </div>
            )}
        </div>
    );
}

export default function LowerSections({
    locale = 'id',
    onConsult,
    dashboardUrl = 'http://127.0.0.1:9875',
}) {
    const t = copy[locale] || copy.id;
    const [openQuestion, setOpenQuestion] = useState(0);
    const accordionId = useId();
    const dashboardBase = dashboardUrl.replace(/\/+$/, '');
    const invitationDemoUrl = `${dashboardBase}/demo/tides`;
    return (
        <div className="lower-sections">
            <section
                id="about"
                className="lower-about"
                aria-labelledby="lower-about-heading"
            >
                <div className="lower-container">
                    <span className="lower-eyebrow">{t.about}</span>
                    <Star className="lower-about-star" />
                    <h2
                        id="lower-about-heading"
                        className="lower-about-statement"
                    >
                        {t.statement[0]}
                        <em>{t.statement[1]}</em>
                        {t.statement[2]}
                    </h2>
                    <p className="lower-about-text">{t.aboutText}</p>
                    <span className="lower-about-caption">{t.caption}</span>
                </div>
            </section>
            <section
                id="how-it-works"
                className="lower-workflow"
                aria-labelledby="lower-workflow-heading"
            >
                <div className="lower-container lower-workflow-layout">
                    <div className="lower-workflow-intro">
                        <span className="lower-eyebrow">{t.workflow}</span>
                        <h2
                            id="lower-workflow-heading"
                            className="lower-heading"
                        >
                            {t.workflowTitle[0]}
                            <br />
                            <em>{t.workflowTitle[1]}</em>
                        </h2>
                        <p>{t.workflowText}</p>
                        <a
                            className="lower-text-link"
                            href={invitationDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t.demo}
                            <Arrow />
                        </a>
                    </div>
                    <ol className="lower-steps">
                        {t.steps.map(([title, text, label], index) => (
                            <li className="lower-step" key={index}>
                                <div className="lower-step-copy">
                                    <span className="lower-step-number">
                                        0{index + 1}
                                    </span>
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                    <span className="lower-step-label">
                                        {label}
                                    </span>
                                </div>
                                <StepPreview index={index} t={t} />
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <section
                id="faq"
                className="lower-faq"
                aria-labelledby="lower-faq-heading"
            >
                <div className="lower-container lower-faq-layout">
                    <div className="lower-faq-intro">
                        <span className="lower-eyebrow">{t.faq}</span>
                        <h2 id="lower-faq-heading" className="lower-heading">
                            {t.faqTitle[0]}
                            <br />
                            <em>{t.faqTitle[1]}</em>
                        </h2>
                        <p>{t.faqIntro}</p>
                    </div>
                    <div className="lower-faq-list">
                        {t.faqItems.map(([question, answer], index) => {
                            const expanded = openQuestion === index;
                            const answerId = `${accordionId}-answer-${index}`;
                            const questionId = `${accordionId}-question-${index}`;
                            return (
                                <div
                                    className={`lower-faq-item${expanded ? ' is-open' : ''}`}
                                    key={index}
                                >
                                    <h3>
                                        <button
                                            type="button"
                                            id={questionId}
                                            aria-expanded={expanded}
                                            aria-controls={answerId}
                                            onClick={() =>
                                                setOpenQuestion(
                                                    expanded ? null : index,
                                                )
                                            }
                                        >
                                            <span>{question}</span>
                                            <span
                                                className="lower-faq-plus"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </h3>
                                    <div
                                        className="lower-faq-answer"
                                        role="region"
                                        id={answerId}
                                        aria-labelledby={questionId}
                                        hidden={!expanded}
                                    >
                                        <p>{answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section
                id="contact"
                className="lower-contact"
                aria-labelledby="lower-contact-heading"
            >
                <div className="lower-container lower-contact-inner">
                    <div className="lower-contact-copy">
                        <span className="lower-eyebrow">{t.contact}</span>
                        <h2 id="lower-contact-heading">
                            {t.contactTitle[0]}
                            <br />
                            <em>{t.contactTitle[1]}</em>
                        </h2>
                        <p>{t.contactText}</p>
                        <div className="lower-contact-actions">
                            <a
                                className="lower-button lower-button-white"
                                href={invitationDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.demo}
                                <Arrow />
                            </a>
                            {onConsult && (
                                <button
                                    className="lower-button lower-button-outline"
                                    type="button"
                                    onClick={onConsult}
                                >
                                    {t.brief}
                                    <Arrow />
                                </button>
                            )}
                        </div>
                        <small className="lower-contact-note">
                            {t.demoNote}
                        </small>
                    </div>
                    <div className="lower-contact-art" aria-hidden="true">
                        <div className="lower-contact-orbit" />
                        <div className="lower-contact-letter">
                            <Brand className="lower-letter-logo" />
                            <Star />
                            <em>
                                To a<br />
                                beautiful
                                <br />
                                beginning.
                            </em>
                            <span className="lower-letter-signature">
                                made for your moments
                            </span>
                        </div>
                        <div className="lower-contact-seal">
                            <BrandMark />
                        </div>
                    </div>
                </div>
            </section>
            <footer className="lower-footer">
                <div className="lower-container">
                    <div className="lower-footer-top">
                        <div className="lower-footer-brand">
                            <a href="#top" aria-label="Momento">
                                <Brand />
                            </a>
                            <p>{t.footerText}</p>
                        </div>
                        <nav
                            className="lower-footer-nav"
                            aria-label={t.explore}
                        >
                            <span>{t.explore}</span>
                            <a href="#about">{t.about}</a>
                            <a href="#how-it-works">{t.workflow}</a>
                            <a href="#faq">FAQ</a>
                        </nav>
                        <nav className="lower-footer-nav" aria-label="Momento">
                            <span>Momento</span>
                            <a
                                href={invitationDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.demo}
                            </a>
                            <a href={`${dashboardBase}/login`}>{t.login}</a>
                            <a href="#contact">{t.brief}</a>
                        </nav>
                    </div>
                    <div className="lower-footer-bottom">
                        <span>
                            © {new Date().getFullYear()} Momento.{' '}
                            {t.footerNote}
                        </span>
                        <a href="#top">
                            {t.top}
                            <span aria-hidden="true">↑</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
