// Ganti dengan nomor WhatsApp resmi layanan Anda (format internasional, tanpa "+" atau "00")
export const WHATSAPP_NUMBER = "6287890281655";

// Email tujuan untuk form kontak (dipakai sebagai fallback mailto:)
export const CONTACT_EMAIL = "ciloysky@gmail.com";

export function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
