import { useTranslation } from "react-i18next";
import { HeartPulse, ShieldCheck, Clock3 } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppButton";
import PulseDivider from "./PulseDivider";
import DoctorIllustration from "./DoctorIllustration";

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { label: t("hero.statPatients"), value: "50.000+" },
    { label: t("hero.statDoctors"), value: "27" },
    { label: t("hero.statRating"), value: "4.9/5" },
    { label: t("hero.statTime"), value: "< 5 min" },
  ];

  return (
    <section id="beranda" className="relative overflow-hidden bg-cream dark:bg-pine-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-pine-200 bg-pine-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-pine-600 dark:border-pine-700 dark:bg-pine-800 dark:text-pine-200">
            <HeartPulse size={14} /> {t("hero.eyebrow")}
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink dark:text-cream sm:text-5xl">
            {t("hero.title")}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-pine-800/80 dark:text-cream/75">
            {t("hero.subtitle")}
          </p>

          <div className="mt-5 inline-flex flex-col gap-1 rounded-2xl border border-amber-300/60 bg-amber-50 px-4 py-3 dark:border-amber-400/30 dark:bg-pine-800">
            <span className="text-xs font-medium text-pine-700/70 dark:text-cream/60">{t("hero.priceLabel")}</span>
            <span className="flex flex-wrap items-baseline gap-2">
              <span className="text-sm font-medium text-pine-700/50 line-through dark:text-cream/40">
                {t("hero.originalPrice")}
              </span>
              <span className="font-display text-2xl font-semibold text-pine-700 dark:text-amber-400">
                {t("hero.price")}
              </span>
              <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[11px] font-semibold text-ink">
                -81%
              </span>
            </span>
            <span className="text-xs text-pine-700/60 dark:text-cream/55">{t("hero.priceNote")}</span>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink
              message={t("whatsapp.defaultMessage")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pine-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pine-900/15 transition-transform hover:-translate-y-0.5 hover:bg-pine-700"
            >
              {t("hero.ctaPrimary")}
            </WhatsAppLink>
            <a
              href="#cara"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-pine-300 px-6 py-3 text-sm font-semibold text-pine-700 transition-colors hover:bg-pine-50 dark:border-pine-600 dark:text-cream dark:hover:bg-pine-800"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-pine-700/70 dark:text-cream/60">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={15} /> Dokter berlisensi STR/SIP</span>
            <span className="inline-flex items-center gap-1.5"><Clock3 size={15} /> Buka 08.00–22.00 WIB</span>
          </div>
        </div>

        <div className="relative">
          <DoctorIllustration className="absolute -top-8 -right-4 z-10 h-28 w-28 drop-shadow-lg sm:h-32 sm:w-32 md:-right-6 md:-top-10 md:h-36 md:w-36" />
          <div className="rounded-3xl border border-pine-100 bg-white p-6 shadow-xl shadow-pine-900/5 dark:border-pine-700 dark:bg-pine-800">
            <p className="font-display text-lg text-pine-700 dark:text-cream">Live consultation preview</p>
            <div className="mt-4 space-y-3">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-pine-600 px-4 py-2.5 text-sm text-white">
                Dok, sejak kemarin saya demam dan batuk kering.
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-pine-50 px-4 py-2.5 text-sm text-pine-800 dark:bg-pine-700 dark:text-cream">
                Baik, sudah berapa hari suhu tubuhnya, dan apakah disertai sesak napas?
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-pine-600 px-4 py-2.5 text-sm text-white">
                Sudah 2 hari, tidak sesak, tapi badan pegal.
              </div>
            </div>
            <PulseDivider className="mt-5 text-amber-500" />
            <div className="mt-2 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-xl font-semibold text-pine-700 dark:text-amber-400">{s.value}</p>
                  <p className="text-xs text-pine-700/60 dark:text-cream/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
