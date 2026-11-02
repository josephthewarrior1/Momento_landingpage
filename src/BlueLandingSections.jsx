import { APP_URL } from './config.js';
import { Brand } from './Brand.jsx';
import './blue-landing-sections.css';

const COPY = {
    id: {
        workflowEyebrow: 'MUDAH DARI AWAL',
        workflowTitle: <>Dari cerita kalian,<br />jadi undangan.</>,
        workflowDescription: 'Tiga langkah kecil untuk menyambut hari yang besar.',
        steps: [
            ['Pilih desain & paket.', 'Coba demo, temukan desain favorit, lalu pilih paket sesuai kebutuhan acara.'],
            ['Bayar. Buka email kalian.', 'Isi email aktif dan selesaikan pembayaran. Setelah terkonfirmasi, tautan pribadi untuk mengedit undangan dikirim ke email kalian.'],
            ['Isi. Terbitkan. Bagikan.', 'Tambahkan foto, cerita, musik, dan detail acara. Periksa preview, lalu terbitkan dan bagikan saat kalian sudah siap.'],
        ],
        faqEyebrow: 'SEBELUM MULAI',
        faqTitle: <>Masih ada{' '}<br /><em>pertanyaan?</em></>,
        faqDescription: 'Beberapa hal yang mungkin sedang kalian pikirkan.',
        faqLink: 'Lihat pilihan paket',
        questions: [
            ['Bagaimana cara membuat undangan?', 'Pilih desain dan paket, isi email aktif, lalu selesaikan pembayaran. Setelah pembayaran terverifikasi, buka tautan akses yang dikirim lewat email. Isi foto, cerita, dan detail acara, periksa preview, lalu terbitkan saat kalian siap. Tidak perlu membuat username atau password.'],
            ['Bisa pakai foto dan musik sendiri?', 'Bisa. Kalian dapat mengubah isi, mengunggah foto, mengatur galeri, dan memilih musik sesuai cerita kalian. Musik mulai diputar setelah tamu membuka undangan.'],
            ['Apa bedanya undangan dan buku tamu?', 'Paket Undangan Digital mencakup desain, link personal, RSVP, dan ucapan. Paket Undangan + Buku Tamu menambahkan QR, check-in manual, akses petugas, dan laporan kehadiran.'],
            ['Berapa harga paketnya?', 'Harga dan ketersediaan terbaru ada di halaman Paket & harga. Pilih paket sesuai kebutuhan; detailnya dapat diperiksa sebelum melanjutkan pembelian.'],
            ['Bisa lihat contoh sebelum memilih?', 'Tentu. Buka koleksi dan pilih Lihat demo untuk mencoba undangan lengkap, termasuk foto, cerita, dan susunan acaranya. Contoh menggunakan data ilustrasi.'],
        ],
        closingEyebrow: 'UNTUK HARI YANG AKAN SELALU DIINGAT',
        closingTitle: <>Hari bahagia kalian,<br />dimulai dari <em>satu undangan.</em></>,
        closingDescription: 'Buat kesan pertama yang indah. Sisanya, biarkan cerita kalian berbicara.',
        closingPrimary: 'Mulai buat undangan',
        closingSecondary: 'Rencanakan bersama',
        closingCaptions: ['Janji selamanya', 'Satu ikatan', 'Senja berdua', 'Perjalanan kita', 'Detail cinta', 'Tempat istimewa'],
        footerDescription: 'Undangan yang membawa cerita. Buku tamu yang menyambut orang-orang tersayang.',
        footerNav: 'Jelajahi',
        footerDesigns: 'Koleksi desain',
        footerPricing: 'Paket & harga',
        footerAccess: 'Akses undangan',
        footerGuide: 'Kenali Momento',
        footerWorkflow: 'Cara kerja',
        footerFaq: 'Pertanyaan umum',
        footerContact: 'Rencanakan undangan',
        footerNote: 'Dibuat untuk cerita yang berarti.',
        footerTop: 'Kembali ke atas',
    },
    en: {
        workflowEyebrow: 'SIMPLE FROM THE START',
        workflowTitle: <>From your story,<br />to your invitation.</>,
        workflowDescription: 'Three little steps toward your biggest day.',
        steps: [
            ['Choose a design & plan.', 'Explore the designs, try a full preview, and choose a plan that fits your celebration.'],
            ['Pay. Check your email.', 'Enter an email you can access and complete payment. Once it is confirmed, your private editing link is sent to your email.'],
            ['Create. Publish. Share.', 'Add your photos, story, music, and event details. Preview everything, then publish and share when you are ready.'],
        ],
        faqEyebrow: 'BEFORE YOU BEGIN',
        faqTitle: <>A few{' '}<br /><em>questions?</em></>,
        faqDescription: 'The things you might be wondering about.',
        faqLink: 'Explore the plans',
        questions: [
            ['How do we create an invitation?', 'Choose a design and plan, enter an email you can access, and complete payment. Once payment is verified, open the access link sent by email. Add your photos, story, and event details, then preview and publish when ready. No username or password is needed.'],
            ['Can we use our own photos and music?', 'Yes. You can edit the content, upload photos, arrange your gallery, and choose music for your story. Music begins after a guest opens the invitation.'],
            ['What does the guestbook add?', 'The Digital Invitation plan includes designs, personal links, RSVPs, and wishes. Invitation + Guestbook adds QR and manual check-in, staff access, and attendance reports.'],
            ['How much do the plans cost?', 'Visit Plans & pricing for current prices and availability. Choose the plan that fits your celebration and review its details before continuing with your purchase.'],
            ['Can we try a design before choosing?', 'Of course. Open the collection and select View demo to explore a full invitation, including photos, stories, and event sections. Demos use illustrative content.'],
        ],
        closingEyebrow: 'FOR THE DAY YOU WILL ALWAYS REMEMBER',
        closingTitle: <>Your happiest day<br />starts with <em>one invitation.</em></>,
        closingDescription: 'Make a beautiful first impression. Let your story do the rest.',
        closingPrimary: 'Create your invitation',
        closingSecondary: 'Plan it together',
        closingCaptions: ['Forever starts here', 'One lasting bond', 'Our sunset', 'Our journey', 'Lovely details', 'A special place'],
        footerDescription: 'Invitations that tell your story. A guestbook that welcomes your favorite people.',
        footerNav: 'Explore',
        footerDesigns: 'Design collection',
        footerPricing: 'Plans & pricing',
        footerAccess: 'Invitation access',
        footerGuide: 'Meet Momento',
        footerWorkflow: 'How it works',
        footerFaq: 'Common questions',
        footerContact: 'Plan your invitation',
        footerNote: 'Made for stories that matter.',
        footerTop: 'Back to top',
    },
};

function Arrow({ up = false }) {
    return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={up ? 'M6 18 18 6M6 6h12v12' : 'M4 12h15m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Workflow({ locale = 'id' }) {
    const text = COPY[locale === 'en' ? 'en' : 'id'];
    return (
        <section className="bl-workflow" id="how-it-works" aria-labelledby="bl-workflow-title">
            <div className="bl-container">
                <header className="bl-workflow-heading">
                    <p className="bl-eyebrow">{text.workflowEyebrow}</p>
                    <h2 className="bl-heading" id="bl-workflow-title">{text.workflowTitle}</h2>
                    <p>{text.workflowDescription}</p>
                </header>
                <ol className="bl-workflow-steps">
                    {text.steps.map(([title, description], index) => (
                        <li className="bl-workflow-step" key={index}>
                            <span className="bl-step-number" aria-hidden="true">{index + 1}<span /></span>
                            {index < 2 && <svg className={`bl-step-connector bl-step-connector--${index + 1}`} viewBox="0 0 230 64" fill="none" aria-hidden="true"><path d="M4 45C63-11 164-11 217 39" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" strokeLinecap="round" /><path d="m205 39 13 1-1-13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export function Faq({ locale = 'id' }) {
    const text = COPY[locale === 'en' ? 'en' : 'id'];
    return (
        <section className="bl-faq" id="faq" aria-labelledby="bl-faq-title">
            <div className="bl-container bl-faq-layout">
                <header className="bl-faq-heading">
                    <p className="bl-eyebrow">{text.faqEyebrow}</p>
                    <h2 className="bl-heading" id="bl-faq-title">{text.faqTitle}</h2>
                    <p>{text.faqDescription}</p>
                    <a className="bl-faq-link" href={`${APP_URL}/paket`}>{text.faqLink}<Arrow /></a>
                </header>
                <div className="bl-faq-list">
                    {text.questions.map(([question, answer], index) => (
                        <details className="bl-faq-item" key={question} name="momento-faq">
                            <summary><span className="bl-faq-index" aria-hidden="true">0{index + 1}</span><span>{question}</span><span className="bl-faq-toggle" aria-hidden="true" /></summary>
                            <div className="bl-faq-answer"><p>{answer}</p></div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Closing({ locale = 'id', onBrief }) {
    const text = COPY[locale === 'en' ? 'en' : 'id'];
    const moments = [
        ['atelier-couple-2.webp', '50% 50%'],
        ['atelier-couple-3.webp', '25% 50%'],
        ['atelier-couple-4.webp', '50% 50%'],
        ['atelier-couple-1.webp', '85% 50%'],
        ['editorial-bouquet.jpg', '50% 85%'],
        ['editorial-venue.jpg', '50% 100%'],
    ];
    const renderMoment = ([image, position], index) => (
        <figure className={`bl-closing-moment bl-closing-moment--${index + 1}`} key={image}>
            <span className="bl-closing-photo-frame">
                <img src={`/assets/landing/${image}`} alt="" loading="lazy" width="160" height="160" style={{ objectPosition: position }} />
            </span>
            <figcaption>{text.closingCaptions[index]}</figcaption>
        </figure>
    );
    return (
        <>
            <section className="bl-closing" id="contact" aria-labelledby="bl-closing-title">
                <div className="bl-closing-orbit bl-closing-orbit--one" aria-hidden="true" />
                <div className="bl-closing-orbit bl-closing-orbit--two" aria-hidden="true" />
                <span className="bl-closing-spark bl-closing-spark--one" aria-hidden="true">✦</span>
                <span className="bl-closing-spark bl-closing-spark--two" aria-hidden="true">✧</span>
                <div className="bl-closing-layout">
                <div className="bl-closing-gallery bl-closing-gallery--left">
                    {moments.slice(0, 3).map(renderMoment)}
                </div>
                <div className="bl-closing-content">
                    <p className="bl-eyebrow">{text.closingEyebrow}</p>
                    <h2 id="bl-closing-title">{text.closingTitle}</h2>
                    <p className="bl-closing-description">{text.closingDescription}</p>
                    <div className="bl-closing-actions">
                        <a className="bl-button bl-button--white" href={`${APP_URL}/paket`}>{text.closingPrimary}<Arrow up /></a>
                        <button className="bl-button bl-closing-secondary" type="button" onClick={onBrief}>{text.closingSecondary}<Arrow /></button>
                    </div>
                </div>
                <div className="bl-closing-gallery bl-closing-gallery--right">
                    {moments.slice(3).map((moment, index) => renderMoment(moment, index + 3))}
                </div>
                </div>
            </section>
            <footer className="bl-footer" role="contentinfo">
                <div className="bl-container">
                    <div className="bl-footer-main">
                        <div className="bl-footer-about" id="about">
                            <a className="bl-footer-brand" href="#" aria-label="Momento"><Brand /></a>
                            <p>{text.footerDescription}</p>
                        </div>
                        <nav className="bl-footer-links" aria-label={text.footerNav}>
                            <h3>{text.footerNav}</h3>
                            <a href={`${APP_URL}/koleksi`}>{text.footerDesigns}</a>
                            <a href={`${APP_URL}/paket`}>{text.footerPricing}</a>
                            <a href={`${APP_URL}/akses`}>{text.footerAccess}</a>
                        </nav>
                        <nav className="bl-footer-links" aria-label={text.footerGuide}>
                            <h3>{text.footerGuide}</h3>
                            <a href="#how-it-works">{text.footerWorkflow}</a>
                            <a href="#faq">{text.footerFaq}</a>
                            <a href="#contact">{text.footerContact}</a>
                        </nav>
                    </div>
                    <div className="bl-footer-bottom">
                        <p>© {new Date().getFullYear()} Momento. {text.footerNote}</p>
                        <a href="#">{text.footerTop}<Arrow up /></a>
                    </div>
                </div>
            </footer>
        </>
    );
}
