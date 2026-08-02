# Tanya Dokter — Website Konsultasi Dokter Online

Landing page React untuk layanan konsultasi dokter online dengan CTA WhatsApp, multi-bahasa (ID/EN), dan mode gelap/terang.

## Teknologi

- React 19 + Vite
- Tailwind CSS 3 (dark mode via class strategy)
- react-i18next + i18next-browser-languagedetector
- lucide-react (ikon)
- react-router-dom (terpasang, siap dipakai bila ingin multi-halaman)

## Menjalankan Proyek

```bash
npm install
npm run dev       # mode development
npm run build     # build produksi ke folder dist/
npm run preview   # preview hasil build
```

## Konfigurasi Penting

### 1. Nomor WhatsApp

Ubah nomor tujuan chat di `src/config.js`:

```js
export const WHATSAPP_NUMBER = "6281234567890"; // format internasional tanpa "+"
```

Semua tombol WhatsApp (floating button, navbar, hero, kartu dokter, dsb.) memakai fungsi
`buildWhatsAppLink(pesan)` dari file ini sehingga cukup diubah di satu tempat.

### 2. Teks & Terjemahan

Semua teks (ID & EN) ada di `src/i18n/locales.js`. Tambahkan/ubah key sesuai kebutuhan lalu
panggil lewat `t("namespace.key")` di komponen.

### 3. Dark Mode

`tailwind.config.js` menggunakan `darkMode: "class"`. Preferensi tema disimpan di
`localStorage` (key `tanyaDokterTheme`) lewat komponen `src/components/DarkModeToggle.jsx`.

### 4. Form Kontak

`src/components/Contact.jsx` saat ini hanya menyimpan submit di state lokal (demo).
Hubungkan ke backend/email service (mis. Formspree, API sendiri, dsb.) di fungsi `handleSubmit`.

## Struktur Folder

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── DoctorList.jsx
│   ├── HowItWorks.jsx
│   ├── Testimonials.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx   (floating button + WhatsAppLink reusable)
│   ├── LanguageSwitcher.jsx
│   ├── DarkModeToggle.jsx
│   └── PulseDivider.jsx     (elemen visual signature: garis EKG/pulse)
├── i18n/
│   ├── index.js
│   └── locales.js
├── config.js
├── App.jsx
├── main.jsx
└── index.css
```

## SEO

Meta title, meta description, dan keyword (`tanya dokter`, `konsul dokter`, `dokter online`)
sudah diatur di `index.html`. Sesuaikan `og:title`, `og:description`, dan `canonical` URL
dengan domain final Anda.

## Catatan

Ini adalah template landing page generik untuk konsultasi dokter umum. Sesuaikan daftar
dokter, klaim layanan, dan disclaimer medis di footer dengan data aktual dan konsultasikan
dengan tim legal/medis Anda sebelum publikasi, terutama untuk klaim terkait hasil pengobatan.
# konsulfit
