import { useTranslation } from "react-i18next";
import { BadgeCheck } from "lucide-react";
import { WhatsAppLink } from "./WhatsAppButton";
import DoctorIllustration from "./DoctorIllustration";

export default function DoctorList() {
  const { t } = useTranslation();
  const doctors = t("doctors.list", { returnObjects: true });
  const doc = doctors[0];

  return (
    <section id="dokter" className="bg-cream py-16 dark:bg-pine-900 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {t("doctors.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-cream sm:text-4xl">
            {t("doctors.title")}
          </h2>
          <p className="mt-3 text-base text-pine-800/75 dark:text-cream/70">{t("doctors.subtitle")}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex w-full max-w-md flex-col items-center rounded-2xl border border-pine-100 bg-white p-8 text-center shadow-sm shadow-pine-900/5 dark:border-pine-700 dark:bg-pine-800">
            <DoctorIllustration className="h-32 w-32" />
            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">{doc.spec}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-pine-700/70 dark:text-cream/60">
              <BadgeCheck size={14} /> {doc.exp} &middot; STR/SIP resmi
            </p>
            <p className="mt-4 font-display text-lg italic leading-snug text-ink dark:text-cream">
              &ldquo;{doc.tagline}&rdquo;
            </p>

            <WhatsAppLink
              message={`Halo, saya ingin konsultasi dengan dokter (${doc.spec}).`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-pine-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pine-700"
            >
              {t("doctors.chat")}
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
