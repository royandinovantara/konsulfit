import { useTranslation } from "react-i18next";
import { WhatsAppLink } from "./WhatsAppButton";
import stepHubungi from "../assets/step-hubungi.jpg";
import stepKonsultasi from "../assets/step-konsultasi.jpg";
import stepPembayaran from "../assets/step-pembayaran.jpg";

const images = [stepHubungi, stepKonsultasi, stepPembayaran];

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("how.steps", { returnObjects: true });

  return (
    <section id="cara" className="bg-pine-600 py-16 text-white dark:bg-pine-900 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-300">
            {t("how.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t("how.title")}</h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={images[i]}
                  alt={step.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 font-display text-sm font-bold text-ink shadow-md">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <WhatsAppLink
            message={t("whatsapp.defaultMessage")}
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-400"
          >
            {t("how.cta")}
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
