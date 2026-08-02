import { useTranslation } from "react-i18next";
import { WhatsAppLink } from "./WhatsAppButton";
import videoCallPhoto from "../assets/layanan-video-call.jpg";
import profesionalPhoto from "../assets/layanan-profesional.jpg";
import saranObatPhoto from "../assets/saran-obat.jpg";

const images = [videoCallPhoto, profesionalPhoto, saranObatPhoto];

export default function Services() {
  const { t } = useTranslation();
  const items = t("services.list", { returnObjects: true });

  return (
    <section id="layanan" className="bg-white py-16 dark:bg-pine-800 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {t("services.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-cream sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mt-3 text-base text-pine-800/75 dark:text-cream/70">{t("services.subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-pine-100 bg-cream shadow-sm shadow-pine-900/5 dark:border-pine-700 dark:bg-pine-900"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={images[i]}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pine-800/70 dark:text-cream/65">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppLink
            message={t("whatsapp.defaultMessage")}
            className="inline-flex items-center justify-center rounded-full bg-pine-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-pine-900/15 transition-transform hover:-translate-y-0.5 hover:bg-pine-700"
          >
            {t("services.cta")}
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
