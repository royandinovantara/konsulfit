import { useState } from "react";
import { useTranslation } from "react-i18next";
import { WhatsAppLink } from "./WhatsAppButton";
import { buildWhatsAppLink } from "../config";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Membuka chat WhatsApp dengan isi form sudah terisi otomatis,
    // ditujukan ke WHATSAPP_NUMBER (lihat src/config.js).
    // Catatan: karena keterbatasan WhatsApp, pesan tidak bisa terkirim
    // 100% otomatis tanpa interaksi pengguna sama sekali — begitu chat
    // terbuka dengan pesan sudah terisi, pengguna tinggal tekan tombol
    // kirim (▶) satu kali di WhatsApp untuk mengirimkannya.
    const text = `Pesan dari Website Konsulfit\nNama: ${form.name}\nEmail: ${form.email}\n\nPesan:\n${form.message}`;

    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="bg-white py-16 dark:bg-pine-800 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {t("contact.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-cream sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-3 text-sm text-pine-800/70 dark:text-cream/65">{t("contact.subtitle")}</p>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-2xl border border-pine-200 bg-pine-50 p-6 text-center text-sm text-pine-700 dark:border-pine-600 dark:bg-pine-900 dark:text-cream">
            {t("contact.success")}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-pine-700 dark:text-cream/80">
                  {t("contact.name")}
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-pine-200 bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-pine-500 dark:border-pine-600 dark:bg-pine-900 dark:text-cream"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-pine-700 dark:text-cream/80">
                  {t("contact.email")}
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-pine-200 bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-pine-500 dark:border-pine-600 dark:bg-pine-900 dark:text-cream"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-pine-700 dark:text-cream/80">
                {t("contact.message")}
              </label>
              <textarea
                required
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-pine-200 bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-pine-500 dark:border-pine-600 dark:bg-pine-900 dark:text-cream"
              />
            </div>
            <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                className="w-full rounded-full bg-pine-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine-700 sm:w-auto"
              >
                {t("contact.submit")}
              </button>
              <span className="text-xs text-pine-700/60 dark:text-cream/55">{t("contact.or")}</span>
              <WhatsAppLink
                message={t("whatsapp.defaultMessage")}
                className="w-full rounded-full border border-pine-300 px-6 py-3 text-center text-sm font-semibold text-pine-700 transition-colors hover:bg-pine-50 dark:border-pine-600 dark:text-cream dark:hover:bg-pine-900 sm:w-auto"
              >
                {t("contact.chatWa")}
              </WhatsAppLink>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
