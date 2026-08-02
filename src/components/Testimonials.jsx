import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { t } = useTranslation();
  const list = t("testimonials.list", { returnObjects: true });

  return (
    <section id="testimoni" className="bg-white py-16 dark:bg-pine-800 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-cream sm:text-4xl">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {list.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-pine-100 bg-cream p-6 dark:border-pine-700 dark:bg-pine-900"
            >
              <Quote className="text-amber-500" size={22} />
              <blockquote className="mt-3 text-sm leading-relaxed text-pine-800/80 dark:text-cream/75">
                {item.text}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-pine-700 dark:text-cream">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
