import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { useTranslation } from "react-i18next";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { WhatsAppLink } from "./WhatsAppButton";

const navKeys = [
  { key: "home", href: "#beranda" },
  { key: "about", href: "#tentang" },
  { key: "services", href: "#layanan" },
  { key: "doctors", href: "#dokter" },
  { key: "how", href: "#cara" },
  { key: "contact", href: "#kontak" },
];

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-pine-100/70 bg-cream/90 backdrop-blur dark:border-pine-800 dark:bg-pine-900/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#beranda" className="flex items-center gap-2 font-display text-lg font-semibold text-pine-700 dark:text-cream">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine-600 text-white">
            <Stethoscope size={18} />
          </span>
          Konsul<span className="text-amber-500">fit</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navKeys.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-pine-700/80 transition-colors hover:text-pine-600 dark:text-cream/80 dark:hover:text-amber-400"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <DarkModeToggle />
          <WhatsAppLink
            message={t("whatsapp.defaultMessage")}
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-ink shadow-sm shadow-amber-900/10 transition-colors hover:bg-amber-400"
          >
            {t("nav.cta")}
          </WhatsAppLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <DarkModeToggle />
          <button
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-pine-200 text-pine-700 dark:border-pine-700 dark:text-cream"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-pine-100 bg-cream px-5 py-4 dark:border-pine-800 dark:bg-pine-900 lg:hidden">
          <div className="flex flex-col gap-3">
            {navKeys.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-pine-700/90 dark:text-cream/90"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
            <WhatsAppLink
              message={t("whatsapp.defaultMessage")}
              className="mt-2 inline-flex justify-center rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-ink"
            >
              {t("nav.cta")}
            </WhatsAppLink>
          </div>
        </div>
      )}
    </header>
  );
}
