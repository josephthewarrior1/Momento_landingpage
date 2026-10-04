# Momento — Invitation Studio

Landing page Momento dengan palet biru langit, Instrument Serif untuk headline, dan Inclusive Sans untuk body. Dibuat dengan React 19.3.0 + Vite 8.3.2 dan terpisah dari repository aplikasi dashboard.

## Development

Node.js 20.19+ atau 22.12+.

```sh
npm install
npm run dev
```

Buka http://127.0.0.1:5174. Production:

```sh
npm run build
npm run preview
```

## Sambungkan aplikasi Momento

Salin `.env.example` menjadi `.env.local`, kemudian atur `VITE_MOMENTO_APP_URL` ke origin aplikasi Momento. Default development adalah `http://127.0.0.1:9875`; aplikasi dashboard dijalankan dari repository DashboardWedding. Sebelum deploy landing online, ganti nilai ini ke domain aplikasi online lalu build ulang.

Tujuan CTA:

- Invitation studio: `/builder/demo`.
- Masuk: `/login`.
- Koleksi: `/templates/:templateId`.
- Check-in: `/check-in/demo`.

Jika nomor WhatsApp/email bisnis sudah tersedia, isi `VITE_MOMENTO_WHATSAPP` (kode negara + nomor, angka saja) atau `VITE_MOMENTO_CONTACT_EMAIL`. Jika kosong, tombol rencana mengekspor brief `.txt` di perangkat pengunjung; tidak mengirim data ke vendor atau menyimpan data ke server.

## Isi landing

- Hero editorial dengan foto pasangan, kartu undangan personal, dan contoh konfirmasi RSVP. Preview terhubung ke desain Silver Tides di aplikasi Momento.
- Preview warna undangan yang dapat diganti.
- Enam desain pilihan asli: Royal Blue, Silver Tides, Verdant Vow, Sepucuk Janji, Heritage Vows, Sekar Kinasih.
- Preview buku tamu dengan pencarian data ilustrasi.
- Alur desain → bagikan → sambut tamu, FAQ, form brief, dan footer.
- ID/EN, menu mobile, dialog keyboard, dan reduced motion.

RSVP, personal guest links, dan check-in yang dijelaskan adalah alur undangan pernikahan yang tersedia di aplikasi Momento. Demo editor tidak menyimpan/publish. Landing tidak menyertakan backend dashboard, akun, database, atau fitur pembayaran.

Logo resmi berasal dari file yang diberikan pemilik Momento. Aset PNG transparan disimpan di `public/branding/`; sumber dan proses persiapannya tercatat di `public/branding/BRANDING.md`.

Foto contoh berasal dari aset yang telah dibuat untuk project Momento, lalu dioptimalkan menjadi WebP. Total enam foto sekitar 723 KB. Provenance ada di `public/assets/SOURCES.md`; font beserta lisensi OFL disimpan lokal.

## Struktur

`src/Brand.jsx` menampilkan logo resmi secara konsisten. `src/App.jsx` untuk header, preview undangan, koleksi, buku tamu, dan form brief. `src/HeroShowcase.jsx` serta `src/hero-showcase.css` untuk komposisi hero yang responsif. `src/LowerSections.jsx` untuk cerita brand, alur, FAQ, dan footer. `src/config.js` untuk tujuan aplikasi/kontak. `src/assets.js` untuk foto dan katalog pilihan.

## Validasi

Build produksi, pemeriksaan browser desktop/mobile, filter koleksi, preview warna, pencarian contoh tamu, FAQ, ID/EN, serta ekspor brief. Screenshot development disimpan di `previews/` dan tidak dimasukkan Git.
