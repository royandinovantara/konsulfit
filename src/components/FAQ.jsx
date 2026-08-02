import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const { t } = useTranslation();
  const list = t("faq.list", { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-cream py-16 dark:bg-pine-900 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
            {t("faq.eyebrow")}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink dark:text-cream sm:text-4xl">
            {t("faq.title")}
          </h2>
        </div>

        <div className="mt-10 divide-y divide-pine-100 rounded-2xl border border-pine-100 bg-white dark:divide-pine-700 dark:border-pine-700 dark:bg-pine-800">
          {list.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink dark:text-cream">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-pine-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-pine-800/75 dark:text-cream/70">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
