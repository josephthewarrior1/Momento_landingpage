import { useEffect, useRef, useState } from 'react';
import { ASSETS, MOMENTO_TEMPLATES } from './assets.js';
import { APP_URL, CONTACT_EMAIL, WHATSAPP_NUMBER } from './config.js';
import LowerSections from './LowerSections.jsx';
import { Brand, BrandMark } from './Brand.jsx';

const TEXT = {
    id: {
        announcement:
            'MOMENTO INVITATION STUDIO · UNTUK SETIAP CERITA YANG BERARTI',
        services: 'Layanan',
        designs: 'Koleksi desain',
        workflow: 'Cara kerja',
        about: 'Tentang',
        login: 'Masuk',
        consult: 'Rencanakan undangan',
        invitation: 'Undangan website',
        guestbook: 'Buku tamu digital',
        hero: (
            <>
                Setiap cerita berhak
                <br />
                punya awal yang
                <br />
                <em>indah.</em>
            </>
        ),
        intro: 'Undangan yang terasa seperti kamu. Dari desain pertama hingga tamu datang, Momento menyatukan cerita, undangan, dan detail hari bahagiamu dalam satu tempat.',
        try: 'Coba invitation studio',
        explore: 'Temukan desainmu',
        heroNote: 'Dibuat personal. Dikenang lama.',
        invitationHeading: (
            <>
                Bukan sekadar undangan.
                <br />
                Sebuah ruang untuk <em>ceritamu.</em>
            </>
        ),
        invitationIntro:
            'Pilih sebuah desain, beri sentuhanmu, lalu lihat ceritamu tumbuh. Susun setiap detail di invitation studio Momento.',
        features: [
            [
                'palette',
                'Desain sesuai karaktermu',
                'Pilih tema, warna, font, dan ornamen. Dari editorial yang tenang sampai sentuhan adat yang penuh makna.',
            ],
            [
                'image',
                'Ruang untuk setiap cerita',
                'Susun kisah, foto, musik, jadwal, dan lokasi. Atur bagian yang ingin kamu tampilkan dengan preview langsung.',
            ],
            [
                'mail',
                'Personal untuk setiap tamu',
                'Untuk undangan pernikahan, bagikan link dengan nama tamu dan kelola RSVP serta ucapan dalam satu alur.',
            ],
            [
                'eye',
                'Lihat sebelum dibagikan',
                'Periksa undangan di tampilan ponsel, tablet, atau laptop. Simpan draft, lalu publish saat semuanya siap.',
            ],
        ],
        colorLabel: 'COBA SENTUHAN WARNAMU',
        detailEyebrow: 'DETAIL KECIL, KESAN YANG BESAR',
        detailHeading: (
            <>
                Semua hal yang membuatnya
                <br />
                <em>terasa seperti kamu.</em>
            </>
        ),
        details: [
            [
                'calendar',
                'Jadwal & lokasi',
                'Ceremony, resepsi, dan setiap momen di antaranya. Bantu tamumu tahu kapan dan di mana harus hadir.',
            ],
            [
                'image',
                'Foto, cerita & musik',
                'Potret favorit, kisah pertemuan, dan lagu yang berarti. Satu undangan dengan begitu banyak kenangan.',
            ],
            [
                'heart',
                'Nama & ucapan tamu',
                'Sambut tamu lewat link personal, lalu kumpulkan konfirmasi dan doa baik untuk hari pernikahanmu.',
            ],
        ],
        designHeading: (
            <>
                Satu cerita.
                <br />
                <em>Banyak cara untuk menceritakannya.</em>
            </>
        ),
        designIntro:
            'Koleksi pilihan dari invitation studio Momento. Temukan yang paling dekat dengan ceritamu.',
        selected: 'Pilihan dari studio',
        collection: 'Jelajahi koleksi',
        preview: 'Lihat undangan',
        all: 'Semua',
        close: 'Tutup',
        guestHeading: (
            <>
                Sambutan yang hangat.
                <br />
                <em>Kehadiran yang tercatat.</em>
            </>
        ),
        guestIntro:
            'Dari link personal sampai scan QR di pintu masuk, kelola tamu pernikahan melalui ruang kerja Momento. Lebih mudah dipantau, lebih tertata saat hari-H.',
        guestFeatures: [
            [
                'users',
                'Daftar tamu dalam satu ruang',
                'Tambah nama atau import CSV, lalu siapkan link dan QR personal untuk setiap tamu pernikahan.',
            ],
            [
                'message',
                'RSVP & ucapan',
                'Pantau konfirmasi yang masuk dari undangan. Tamu dapat menyampaikan kehadiran dan ucapan dari link mereka.',
            ],
            [
                'qr',
                'Check-in dengan QR',
                'Petugas memindai QR tamu. Kehadiran tercatat, dan check-in ganda dicegah oleh aplikasi.',
            ],
        ],
        guestDemo: 'Coba demo check-in',
        sample: 'CONTOH TAMPILAN · DATA ILUSTRASI',
        dashboard: 'Buku tamu',
        event: 'Pernikahan Arga & Kirana',
        arrived: 'Sudah hadir',
        confirmed: 'Konfirmasi',
        waiting: 'Belum hadir',
        search: 'Cari nama tamu',
        guestName: 'Nama tamu',
        guestStatus: 'Status',
        time: 'Check-in',
        present: 'Hadir',
        notYet: 'Belum hadir',
        briefTitle: (
            <>
                Mulai dari <em>ceritamu.</em>
            </>
        ),
        briefIntro:
            'Simpan rencana awal undanganmu, lalu lanjutkan desainnya di studio Momento.',
        name: 'Nama kamu',
        namePlaceholder: 'Nama kamu atau pasangan',
        date: 'Tanggal acara',
        type: 'Jenis acara',
        notes: 'Ceritakan konsepnya',
        notesPlaceholder:
            'Misalnya: pernikahan intim, nuansa biru, dengan foto pre-wedding…',
        save: 'Simpan rencana',
        saved: 'Rencana undangan tersimpan di perangkatmu.',
        whatsapp: 'Diskusikan via WhatsApp',
        email: 'Kirim lewat email',
        briefNote:
            'Gunakan detail ini sebagai panduan saat menyusun undangan di studio.',
        wedding: 'Pernikahan',
        birthday: 'Ulang tahun',
        celebration: 'Perayaan lainnya',
    },
    en: {
        announcement:
            'MOMENTO INVITATION STUDIO · FOR EVERY STORY THAT MATTERS',
        services: 'Services',
        designs: 'Design collection',
        workflow: 'How it works',
        about: 'About',
        login: 'Sign in',
        consult: 'Plan your invitation',
        invitation: 'Website invitations',
        guestbook: 'Digital guestbook',
        hero: (
            <>
                Every story deserves
                <br />a beautiful
                <br />
                <em>beginning.</em>
            </>
        ),
        intro: 'An invitation that feels like you. From the first design to the first guest arriving, Momento brings your story, invitation, and special-day details together in one place.',
        try: 'Try the invitation studio',
        explore: 'Find your design',
        heroNote: 'Made personal. Remembered always.',
        invitationHeading: (
            <>
                More than an invitation.
                <br />A place for <em>your story.</em>
            </>
        ),
        invitationIntro:
            'Choose a design, make it yours, and watch your story grow. Create every detail in the Momento invitation studio.',
        features: [
            [
                'palette',
                'Designed around you',
                'Choose your theme, colors, fonts, and ornaments. From calm editorial layouts to meaningful cultural details.',
            ],
            [
                'image',
                'A place for every story',
                'Arrange stories, photos, music, schedules, and locations. Pick the sections you want with a live preview.',
            ],
            [
                'mail',
                'Personal for every guest',
                'For wedding invitations, share guest-specific links and manage RSVPs and wishes in one flow.',
            ],
            [
                'eye',
                'Preview before sharing',
                'Review your invitation on a phone, tablet, or laptop. Save your draft, then publish when everything is ready.',
            ],
        ],
        colorLabel: 'TRY YOUR OWN COLOR',
        detailEyebrow: 'SMALL DETAILS, LASTING IMPRESSIONS',
        detailHeading: (
            <>
                All the little things that
                <br />
                <em>make it feel like you.</em>
            </>
        ),
        details: [
            [
                'calendar',
                'Schedule & location',
                'The ceremony, reception, and every moment in between. Help guests know when and where to arrive.',
            ],
            [
                'image',
                'Photos, stories & music',
                'Favorite portraits, the story of how you met, and a meaningful song. One invitation with so many memories.',
            ],
            [
                'heart',
                'Guest names & wishes',
                'Welcome wedding guests with personal links, then collect attendance confirmations and warm wishes.',
            ],
        ],
        designHeading: (
            <>
                One story.
                <br />
                <em>So many ways to tell it.</em>
            </>
        ),
        designIntro:
            'Selected designs from the Momento invitation studio. Find the one that feels closest to your story.',
        selected: 'Selected by the studio',
        collection: 'Explore the collection',
        preview: 'View invitation',
        all: 'All',
        close: 'Close',
        guestHeading: (
            <>
                A warm welcome.
                <br />
                <em>Every arrival recorded.</em>
            </>
        ),
        guestIntro:
            'From personal links to QR scanning at the entrance, manage wedding guests through your Momento workspace. Easier to follow, more organized on the day.',
        guestFeatures: [
            [
                'users',
                'All guests in one place',
                'Add names or import a CSV, then prepare personal links and QR codes for your wedding guests.',
            ],
            [
                'message',
                'RSVPs & wishes',
                'Follow confirmations coming in through the invitation. Guests can RSVP and leave wishes from their own link.',
            ],
            [
                'qr',
                'QR check-in',
                'Your staff scans each guest’s QR code. Attendance is recorded, and duplicate check-ins are prevented.',
            ],
        ],
        guestDemo: 'Try the check-in demo',
        sample: 'SAMPLE VIEW · ILLUSTRATIVE DATA',
        dashboard: 'Guestbook',
        event: 'Arga & Kirana’s Wedding',
        arrived: 'Arrived',
        confirmed: 'Confirmed',
        waiting: 'Not arrived',
        search: 'Search guest names',
        guestName: 'Guest name',
        guestStatus: 'Status',
        time: 'Check-in',
        present: 'Arrived',
        notYet: 'Not arrived',
        briefTitle: (
            <>
                Start with <em>your story.</em>
            </>
        ),
        briefIntro:
            'Save your first invitation plan, then bring it to life in the Momento studio.',
        name: 'Your name',
        namePlaceholder: 'Your name or your partner’s',
        date: 'Event date',
        type: 'Event type',
        notes: 'Tell us your concept',
        notesPlaceholder:
            'For example: an intimate wedding, blue tones, and pre-wedding photos…',
        save: 'Save your plan',
        saved: 'Your invitation plan has been saved to your device.',
        whatsapp: 'Chat on WhatsApp',
        email: 'Send by email',
        briefNote:
            'Use these details as a guide while creating your invitation in the studio.',
        wedding: 'Wedding',
        birthday: 'Birthday',
        celebration: 'Other celebration',
    },
};

export function Icon({ name = 'arrow', size = 24, ...props }) {
    const paths = {
        arrow: 'M4 12h16m-6-6 6 6-6 6',
        chevron: 'm6 9 6 6 6-6',
        close: 'm6 6 12 12M6 18 18 6',
        palette:
            'M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.5c-1-1 0-2.5 1.5-2.5H17a4 4 0 0 0 4-4c0-4-4-8-9-8ZM7 9h.01M12 6h.01M17 9h.01M6 13h.01',
        image: 'M3 3h18v18H3V3Zm0 13 5-5 5 5 3-3 5 5M8 7h.01',
        mail: 'M3 5h18v15H3V5Zm0 1 9 8 9-8M8 17h8',
        eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Zm13 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
        heart: 'M20 5a5.5 5.5 0 0 0-8 1 5.5 5.5 0 0 0-8-1c-3 3-1 7 8 14 9-7 11-11 8-14Z',
        calendar: 'M3 5h18v16H3V5ZM7 2v6M17 2v6M3 10h18m-14 5 3 3 7-6',
        users: 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 21v-3a6 6 0 0 1 12 0v3M17 11a3 3 0 1 0 0-6m0 9a5 5 0 0 1 5 5v2',
        message: 'M21 11a8 8 0 0 1-8 8H4l1-4A8 8 0 1 1 21 11ZM8 9h8M8 12h5',
        qr: 'M3 3h6v6H3V3Zm12 0h6v6h-6V3ZM3 15h6v6H3v-6Zm12 0h2v2h4v4h-6v-6ZM3 12h9V3m0 12v6',
        check: 'm5 12 4 4L19 6',
        download: 'M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5',
    };
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d={paths[name] || paths.arrow} />
        </svg>
    );
}
function Eyebrow({ children }) {
    return (
        <div className="eyebrow">
            <span />
            {children}
            <span />
        </div>
    );
}
function Modal({ title, closeLabel, onClose, children }) {
    const ref = useRef(null);
    useEffect(() => {
        const focused = document.activeElement;
        ref.current.showModal();
        const overflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = overflow;
            focused?.focus();
        };
    }, []);
    return (
        <dialog
            ref={ref}
            className="modal"
            aria-labelledby="modal-title"
            onCancel={onClose}
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="modal-head">
                <h2 id="modal-title">{title}</h2>
                <button
                    className="icon-button"
                    onClick={onClose}
                    aria-label={closeLabel}
                >
                    <Icon name="close" />
                </button>
            </div>
            {children}
        </dialog>
    );
}
function InvitationCard({ image, style = 'blue', compact = false }) {
    return (
        <div
            className={
                'invitation-cover cover-' +
                style +
                (compact ? ' compact-cover' : '')
            }
        >
            <div className="cover-rule" />
            <span className="cover-eyebrow">THE WEDDING OF</span>
            <div className="cover-portrait">
                <img
                    src={image}
                    alt="Contoh potret pasangan untuk undangan Momento"
                    loading={compact ? 'eager' : 'lazy'}
                />
            </div>
            <span className="cover-names">
                Arga <em>&amp;</em> Kirana
            </span>
            <span className="cover-date">12 · 06 · 2027</span>
            <span className="cover-welcome">
                A little beginning.
                <br />A lifetime of stories.
            </span>
            <Brand className="cover-signature" />
        </div>
    );
}
const guests = [
    { name: 'Nadia & keluarga', initials: 'NA', arrived: true, time: '10:02' },
    { name: 'Bima Pratama', initials: 'BP', arrived: true, time: '10:06' },
    { name: 'Sarah Putri', initials: 'SP', arrived: false, time: '—' },
    { name: 'Reza & keluarga', initials: 'RE', arrived: true, time: '10:12' },
];

export default function App() {
    const [locale, setLocale] = useState('id'),
        t = TEXT[locale];
    const [menuOpen, setMenuOpen] = useState(false),
        [productOpen, setProductOpen] = useState(false),
        [modal, setModal] = useState(null),
        [filter, setFilter] = useState('all'),
        [color, setColor] = useState('blue'),
        [query, setQuery] = useState('');
    const [name, setName] = useState(''),
        [date, setDate] = useState(''),
        [eventType, setEventType] = useState('wedding'),
        [notes, setNotes] = useState(''),
        [saved, setSaved] = useState(false);
    const closeMenu = () => {
        setMenuOpen(false);
        setProductOpen(false);
    };
    const onConsult = () => {
        setModal('brief');
        setSaved(false);
        closeMenu();
    };
    useEffect(() => {
        document.documentElement.lang = locale;
        document.title =
            locale === 'id'
                ? 'Momento — Setiap cerita, sebuah awal yang indah'
                : 'Momento — Every story, a beautiful beginning';
    }, [locale]);
    useEffect(() => {
        const escape = (event) => {
            if (event.key === 'Escape') closeMenu();
        };
        window.addEventListener('keydown', escape);
        return () => window.removeEventListener('keydown', escape);
    }, []);
    const brief = [
        'MOMENTO — INVITATION PLAN',
        '',
        t.name + ': ' + name,
        t.date + ': ' + (date || '—'),
        t.type + ': ' + t[eventType],
        t.notes + ': ' + (notes || '—'),
    ].join('\n');
    const downloadBrief = (event) => {
        event.preventDefault();
        const link = document.createElement('a');
        const url = URL.createObjectURL(
            new Blob([brief], { type: 'text/plain;charset=utf-8' }),
        );
        link.href = url;
        link.download = 'momento-invitation-plan.txt';
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        setSaved(true);
    };
    const renderTemplate = (item) => (
        <article className="design-card" key={item.id}>
            <a
                className={'design-cover theme-' + item.id}
                href={APP_URL + item.previewPath}
                target="_blank"
                rel="noreferrer"
                aria-label={t.preview + ': ' + item.name}
            >
                <img
                    src={item.cover}
                    alt={item.name + ' — Momento'}
                    loading="lazy"
                />
                <span className="design-category">{item.category}</span>
                <span className="template-frame" />
                <span className="template-cover-type">MOMENTO COLLECTION</span>
                <span className="template-cover-title">{item.name}</span>
                <span className="design-open">
                    <Icon size={18} />
                </span>
            </a>
            <div className="design-heading">
                <h3>{item.name}</h3>
                <span
                    className="color-dot"
                    style={{ background: item.color }}
                />
            </div>
            <p>
                {locale === 'id'
                    ? item.description
                    : item.category +
                      ' wedding invitation from the Momento collection.'}
            </p>
            <a
                className="preview-link"
                href={APP_URL + item.previewPath}
                target="_blank"
                rel="noreferrer"
            >
                {t.preview}
                <Icon size={16} />
            </a>
        </article>
    );
    return (
        <>
            <a className="skip-link" href="#main">
                {locale === 'id' ? 'Langsung ke konten' : 'Skip to content'}
            </a>
            <div id="top" className="top-anchor" aria-hidden="true" />
            <div className="announcement">
                <div className="container">
                    <span>✦</span>
                    {t.announcement}
                </div>
            </div>
            <header className="header">
                <div className="container header-inner">
                    <a
                        href="#top"
                        aria-label="Momento home"
                        onClick={closeMenu}
                    >
                        <Brand />
                    </a>
                    <nav
                        className={'main-nav' + (menuOpen ? ' is-open' : '')}
                        aria-label={
                            locale === 'id'
                                ? 'Navigasi utama'
                                : 'Main navigation'
                        }
                    >
                        <div className="product-nav">
                            <button
                                className="nav-item"
                                aria-expanded={productOpen}
                                aria-controls="product-menu"
                                onClick={() => setProductOpen(!productOpen)}
                            >
                                {t.services}
                                <Icon name="chevron" size={13} />
                            </button>
                            {productOpen && (
                                <div className="product-menu" id="product-menu">
                                    {[
                                        ['web-invitation', t.invitation],
                                        ['digital-guestbook', t.guestbook],
                                    ].map(([id, label]) => (
                                        <a
                                            key={id}
                                            href={'#' + id}
                                            onClick={closeMenu}
                                        >
                                            {label}
                                            <Icon size={16} />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                        <a
                            className="nav-item"
                            href="#design"
                            onClick={closeMenu}
                        >
                            {t.designs}
                        </a>
                        <a
                            className="nav-item"
                            href="#how-it-works"
                            onClick={closeMenu}
                        >
                            {t.workflow}
                        </a>
                        <a
                            className="nav-item"
                            href="#about"
                            onClick={closeMenu}
                        >
                            {t.about}
                        </a>
                        <a className="mobile-login" href={APP_URL + '/login'}>
                            {t.login}
                        </a>
                    </nav>
                    <div className="header-actions">
                        <div className="language-switch" aria-label="Language">
                            <button
                                aria-pressed={locale === 'id'}
                                onClick={() => setLocale('id')}
                            >
                                ID
                            </button>
                            <span />
                            <button
                                aria-pressed={locale === 'en'}
                                onClick={() => setLocale('en')}
                            >
                                EN
                            </button>
                        </div>
                        <a className="login-link" href={APP_URL + '/login'}>
                            {t.login}
                        </a>
                        <button
                            className="pill-button header-consult"
                            onClick={onConsult}
                        >
                            {t.consult}
                            <Icon size={16} />
                        </button>
                    </div>
                    <button
                        className={'menu-toggle' + (menuOpen ? ' active' : '')}
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </header>
            <main id="main">
                <section className="hero">
                    <div className="container hero-grid">
                        <div className="hero-copy">
                            <span className="hero-eyebrow">
                                DIGITAL INVITATIONS, WITH A PERSONAL TOUCH
                            </span>
                            <h1>{t.hero}</h1>
                            <p>{t.intro}</p>
                            <div className="hero-buttons">
                                <a
                                    className="solid-button"
                                    href={APP_URL + '/builder/demo'}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {t.try}
                                    <Icon size={17} />
                                </a>
                                <a className="text-button" href="#design">
                                    {t.explore}
                                    <Icon size={17} />
                                </a>
                            </div>
                            <span className="hero-note">
                                <span>✦</span>
                                {t.heroNote}
                            </span>
                        </div>
                        <div
                            className="hero-art"
                            aria-label="Dua contoh undangan Momento di dalam amplop biru"
                        >
                            <div className="hero-orbit" />
                            <span className="envelope-note">
                                A little beginning.
                                <br />
                                <em>A lifetime of stories.</em>
                            </span>
                            <div className="envelope-back" />
                            <div className="hero-phone phone-one">
                                <span className="phone-camera" />
                                <InvitationCard
                                    image={ASSETS.heroPortrait}
                                    compact
                                />
                            </div>
                            <div className="hero-phone phone-two">
                                <span className="phone-camera" />
                                <InvitationCard
                                    image={ASSETS.heroSecondary}
                                    style="mist"
                                    compact
                                />
                            </div>
                            <div className="envelope-front">
                                <span className="envelope-fold-left" />
                                <span className="envelope-fold-right" />
                                <span className="envelope-bottom-fold" />
                            </div>
                            <div className="momento-seal">
                                <BrandMark />
                            </div>
                            <span className="envelope-tag">
                                A MOMENT MADE YOURS.
                            </span>
                        </div>
                    </div>
                </section>
                <div className="occasion-strip">
                    <div className="container">
                        <span>WEDDING</span>
                        <span className="strip-star">✦</span>
                        <span>BIRTHDAY</span>
                        <span className="strip-star">✦</span>
                        <span>CELEBRATION</span>
                        <span className="strip-star">✦</span>
                        <span>YOUR NEXT CHAPTER</span>
                    </div>
                </div>
                <section
                    id="web-invitation"
                    className="service-intro blue-section"
                >
                    <div className="container">
                        <Eyebrow>{t.invitation}</Eyebrow>
                        <h2 className="section-title">{t.invitationHeading}</h2>
                        <p className="section-description">
                            {t.invitationIntro}
                        </p>
                        <div className="service-grid">
                            <div className="invitation-art">
                                <div className="invitation-stack stack-back" />
                                <div className="invitation-stack stack-mid" />
                                <InvitationCard
                                    image={ASSETS.storyPortrait}
                                    style={color}
                                />
                                <div className="color-picker">
                                    <span>{t.colorLabel}</span>
                                    <div>
                                        {[
                                            ['blue', '#315fa2', 'Blue'],
                                            ['sage', '#6d8373', 'Sage'],
                                            ['rose', '#bd8290', 'Rose'],
                                        ].map(([key, hex, label]) => (
                                            <button
                                                key={key}
                                                style={{ background: hex }}
                                                onClick={() => setColor(key)}
                                                aria-label={label}
                                                aria-pressed={color === key}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="service-features">
                                {t.features.map(
                                    ([icon, title, description]) => (
                                        <article key={icon}>
                                            <div className="round-icon">
                                                <Icon name={icon} size={30} />
                                            </div>
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </article>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="detail-section">
                    <div className="container">
                        <Eyebrow>{t.detailEyebrow}</Eyebrow>
                        <h2 className="section-title">{t.detailHeading}</h2>
                        <div className="triple-features">
                            {t.details.map(([icon, title, description]) => (
                                <article key={icon}>
                                    <div className="large-round-icon">
                                        <Icon name={icon} size={45} />
                                    </div>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="design" className="design-section">
                    <div className="container">
                        <Eyebrow>{t.designs}</Eyebrow>
                        <h2 className="section-title">{t.designHeading}</h2>
                        <p className="section-description">{t.designIntro}</p>
                        <div className="section-toolbar">
                            <h3>{t.selected}</h3>
                            <button
                                className="text-button"
                                onClick={() => {
                                    setFilter('all');
                                    setModal('designs');
                                }}
                            >
                                {t.collection}
                                <Icon size={16} />
                            </button>
                        </div>
                        <div className="design-grid">
                            {MOMENTO_TEMPLATES.slice(0, 3).map(renderTemplate)}
                        </div>
                        <div className="collection-footnote">
                            <span>EDITORIAL</span>
                            <span>FLORAL</span>
                            <span>KLASIK</span>
                            <span>ADAT</span>
                        </div>
                    </div>
                </section>
                <section id="digital-guestbook" className="guestbook-section">
                    <div className="container">
                        <div className="guestbook-grid">
                            <div className="guestbook-copy">
                                <div className="eyebrow align-left">
                                    <span />
                                    {t.guestbook}
                                </div>
                                <h2 className="section-title align-left">
                                    {t.guestHeading}
                                </h2>
                                <p>{t.guestIntro}</p>
                                <div className="guest-features">
                                    {t.guestFeatures.map(
                                        ([icon, title, description]) => (
                                            <article key={icon}>
                                                <div className="guest-line-icon">
                                                    <Icon
                                                        name={icon}
                                                        size={24}
                                                    />
                                                </div>
                                                <div>
                                                    <h3>{title}</h3>
                                                    <p>{description}</p>
                                                </div>
                                            </article>
                                        ),
                                    )}
                                </div>
                                <a
                                    className="text-button"
                                    href={APP_URL + '/check-in/demo'}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {t.guestDemo}
                                    <Icon size={16} />
                                </a>
                            </div>
                            <div className="dashboard-preview">
                                <div className="dashboard-topbar">
                                    <Brand />
                                    <span className="preview-avatar">AK</span>
                                </div>
                                <div className="dashboard-content">
                                    <span className="sample-label">
                                        {t.sample}
                                    </span>
                                    <div className="dashboard-title">
                                        <div>
                                            <h3>{t.dashboard}</h3>
                                            <p>{t.event}</p>
                                        </div>
                                        <span className="dashboard-date">
                                            12 JUN 2027
                                        </span>
                                    </div>
                                    <div className="dashboard-stats">
                                        {[
                                            [t.arrived, '128'],
                                            [t.confirmed, '186'],
                                            [t.waiting, '58'],
                                        ].map(([label, total]) => (
                                            <div key={label}>
                                                <span>{label}</span>
                                                <strong>{total}</strong>
                                            </div>
                                        ))}
                                    </div>
                                    <label className="guest-search">
                                        <Icon name="users" size={17} />
                                        <input
                                            value={query}
                                            onChange={(event) =>
                                                setQuery(event.target.value)
                                            }
                                            placeholder={t.search}
                                            aria-label={t.search}
                                        />
                                    </label>
                                    <div className="dashboard-table">
                                        <div className="table-head">
                                            <span>{t.guestName}</span>
                                            <span>{t.guestStatus}</span>
                                            <span>{t.time}</span>
                                        </div>
                                        {guests
                                            .filter((guest) =>
                                                guest.name
                                                    .toLowerCase()
                                                    .includes(
                                                        query.toLowerCase(),
                                                    ),
                                            )
                                            .map((guest) => (
                                                <div
                                                    className="table-row"
                                                    key={guest.name}
                                                >
                                                    <span>
                                                        <i>{guest.initials}</i>
                                                        {guest.name}
                                                    </span>
                                                    <span
                                                        className={
                                                            'status-chip' +
                                                            (!guest.arrived
                                                                ? ' waiting'
                                                                : '')
                                                        }
                                                    >
                                                        {guest.arrived
                                                            ? t.present
                                                            : t.notYet}
                                                    </span>
                                                    <span>{guest.time}</span>
                                                </div>
                                            ))}
                                        {!guests.some((guest) =>
                                            guest.name
                                                .toLowerCase()
                                                .includes(query.toLowerCase()),
                                        ) && (
                                            <p className="search-empty">
                                                {locale === 'id'
                                                    ? 'Nama belum ditemukan di contoh ini.'
                                                    : 'No matching name in this sample.'}
                                            </p>
                                        )}
                                    </div>
                                    <div className="dashboard-bottom">
                                        <span className="check-in-icon">
                                            <Icon name="qr" size={25} />
                                        </span>
                                        <span>
                                            {locale === 'id'
                                                ? 'Satu scan. Satu sambutan hangat.'
                                                : 'One scan. One warm welcome.'}
                                        </span>
                                        <Icon name="check" size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <LowerSections
                    assets={ASSETS}
                    locale={locale}
                    onConsult={onConsult}
                    dashboardUrl={APP_URL}
                />
            </main>
            {modal && (
                <Modal
                    title={modal === 'brief' ? t.briefTitle : t.collection}
                    closeLabel={t.close}
                    onClose={() => setModal(null)}
                >
                    {modal === 'designs' ? (
                        <>
                            <div className="filter-tabs">
                                {[
                                    'all',
                                    'Editorial',
                                    'Floral',
                                    'Klasik',
                                    'Adat',
                                ].map((category) => (
                                    <button
                                        key={category}
                                        aria-pressed={filter === category}
                                        onClick={() => setFilter(category)}
                                    >
                                        {category === 'all' ? t.all : category}
                                    </button>
                                ))}
                            </div>
                            <div className="modal-design-grid">
                                {MOMENTO_TEMPLATES.filter(
                                    (item) =>
                                        filter === 'all' ||
                                        item.category === filter,
                                ).map(renderTemplate)}
                            </div>
                        </>
                    ) : (
                        <form className="brief-form" onSubmit={downloadBrief}>
                            <p>{t.briefIntro}</p>
                            <label>
                                {t.name}
                                <input
                                    required
                                    autoComplete="name"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    placeholder={t.namePlaceholder}
                                />
                            </label>
                            <div className="form-row">
                                <label>
                                    {t.date}
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(event) =>
                                            setDate(event.target.value)
                                        }
                                        onInput={(event) =>
                                            setDate(event.target.value)
                                        }
                                    />
                                </label>
                                <label>
                                    {t.type}
                                    <select
                                        aria-label={t.type}
                                        value={eventType}
                                        onChange={(event) =>
                                            setEventType(event.target.value)
                                        }
                                    >
                                        {[
                                            'wedding',
                                            'birthday',
                                            'celebration',
                                        ].map((type) => (
                                            <option key={type} value={type}>
                                                {t[type]}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <label>
                                {t.notes}
                                <textarea
                                    value={notes}
                                    onChange={(event) =>
                                        setNotes(event.target.value)
                                    }
                                    rows={3}
                                    placeholder={t.notesPlaceholder}
                                />
                            </label>
                            <button className="solid-button" type="submit">
                                <Icon name="download" size={18} />
                                {t.save}
                            </button>
                            {saved && (
                                <p className="saved-note" role="status">
                                    <Icon name="check" size={17} />
                                    {t.saved}
                                </p>
                            )}
                            {WHATSAPP_NUMBER && (
                                <a
                                    className="contact-destination"
                                    target="_blank"
                                    rel="noreferrer"
                                    href={
                                        'https://wa.me/' +
                                        WHATSAPP_NUMBER +
                                        '?text=' +
                                        encodeURIComponent(brief)
                                    }
                                >
                                    {t.whatsapp}
                                    <Icon size={16} />
                                </a>
                            )}
                            {CONTACT_EMAIL && (
                                <a
                                    className="contact-destination"
                                    href={
                                        'mailto:' +
                                        CONTACT_EMAIL +
                                        '?subject=' +
                                        encodeURIComponent(
                                            'Momento — Invitation plan',
                                        ) +
                                        '&body=' +
                                        encodeURIComponent(brief)
                                    }
                                >
                                    {t.email}
                                    <Icon size={16} />
                                </a>
                            )}
                            <small>{t.briefNote}</small>
                        </form>
                    )}
                </Modal>
            )}
        </>
    );
}
