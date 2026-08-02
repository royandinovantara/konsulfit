import { useTranslation } from "react-i18next";
import { Lock, BadgeCheck, Zap } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  const points = [
    { icon: Lock, title: t("about.point1title"), body: t("about.point1body") },
    { icon: BadgeCheck, title: t("about.point2title"), body: t("about.point2body") },
    { icon: Zap, title: t("about.point3title"), body: t("about.point3body") },
  ];

  return (
    <section id="tentang" className="bg-white py-16 dark:bg-pine-800 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {t("about.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-cream sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-pine-800/75 dark:text-cream/70">
            {t("about.body")}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-pine-100 bg-cream p-6 dark:border-pine-700 dark:bg-pine-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pine-600 text-white">
                <p.icon size={18} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-cream">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/70 dark:text-cream/65">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
