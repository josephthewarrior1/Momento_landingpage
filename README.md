# Momento — Invitation Studio

Landing page Momento dengan palet navy–cobalt, navbar melayang, mockup undangan, fitur interaktif, dan koleksi desain asli. React 19 + Vite; aplikasi dashboard tetap berada di repository DashboardWedding yang terpisah.

## Development

Node.js 20.19+ atau 22.12+.

```sh
npm install
npm run dev
```

Buka http://127.0.0.1:5174. Untuk build produksi: `npm run build`; pratinjau build: `npm run preview`.

## Sambungkan aplikasi Momento

Atur `VITE_MOMENTO_APP_URL` di `.env.local` ke origin aplikasi. Default development adalah `http://127.0.0.1:9875`. Jalankan dashboard untuk membuka tujuan koleksi, demo, paket, dan login lokal. Sebelum deploy online, gunakan origin aplikasi produksi dan build ulang.

- Buat undangan dan harga terbaru: `/paket`.
- Koleksi lengkap: `/koleksi`.
- Contoh undangan: `/demo/:templateId`.
- Pemilihan desain: `/paket?template=:templateId`.
- Masuk: `/login`.
- Demo buku tamu: `/check-in/demo`.

Nomor WhatsApp/email bisnis opsional tetap memakai `VITE_MOMENTO_WHATSAPP` dan `VITE_MOMENTO_CONTACT_EMAIL`. Form rencana selalu bisa diunduh sebagai `.txt`. Tombol kontak muncul jika konfigurasi tersedia dan membuka aplikasi terkait; data tidak dikirim otomatis.

## Halaman baru

- Hero biru dengan mockup undangan, kartu RSVP ilustratif, dan CTA menuju aplikasi.
- Pengenalan studio dan lima fitur dengan preview warna yang bisa diganti.
- Tiga langkah membuat dan membagikan undangan.
- Enam desain pilihan: Royal Blue, Atelier, Sekar Arum, Paradise, Alma, Silver Tides. Filter mengikuti kategori katalog aplikasi; Semua menampilkan seluruh pilihan.
- Contoh buku tamu dengan pencarian nama, keadaan kosong, dan tautan demo check-in.
- FAQ, form rencana, footer, ID/EN, menu mobile, keyboard focus, dan reduced motion.

Harga mengikuti halaman aplikasi, bukan angka statis di landing. QR, petugas, dan rekap kehadiran dijelaskan sebagai fitur paket Undangan + Buku Tamu. Nama, RSVP, ucapan, dan jumlah tamu dalam mockup merupakan data ilustrasi, bukan statistik penggunaan atau testimoni pelanggan.

## Struktur

`src/main.jsx` membuka `BlueLandingPage.jsx`. Komponen utama dan CSS berada di `BlueLandingPage.jsx` dan `blue-landing.css`; alur, FAQ, CTA penutup, dan footer berada di `BlueLandingSections.jsx` dan `blue-landing-sections.css`. `config.js`, `Brand.jsx`, logo, dan font memakai sumber yang sudah ada. Implementasi editorial sebelumnya tetap tersimpan di `App.jsx`, `HeroShowcase.jsx`, dan `LowerSections.jsx`.

`public/assets/landing/` berisi enam screenshot sampul template asli dari aplikasi dan empat foto contoh Atelier. Kredit foto terdapat di `ATELIER_ASSETS.md`. Logo resmi dan font lokal beserta lisensinya tetap berada di `public/branding/` dan `public/assets/`.

## Verifikasi

Jalankan build, lalu cek desktop dan HP: navbar, kategori desain, preview warna, pencarian tamu, FAQ, pilihan bahasa, validasi form, unduhan brief, Escape dan pengembalian fokus, serta tujuan tautan aplikasi. Screenshot review boleh disimpan di `previews/` yang tidak dilacak Git. Tidak ada perubahan backend atau pembayaran di landing ini.
