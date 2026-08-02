import { useTranslation } from "react-i18next";
import { Stethoscope, Globe2, AtSign, AlertTriangle, Landmark } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#beranda" className="flex items-center gap-2 font-display text-lg font-semibold text-cream">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine-600">
                <Stethoscope size={18} />
              </span>
              Konsul<span className="text-amber-400">fit</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">{t("footer.tagline")}</p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Konsulfit"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <Globe2 size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Konsulfit"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <AtSign size={15} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-cream">{t("footer.company")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li><a href="#tentang" className="hover:text-amber-400">{t("nav.about")}</a></li>
              <li><a href="#dokter" className="hover:text-amber-400">{t("nav.doctors")}</a></li>
              <li><a href="#testimoni" className="hover:text-amber-400">{t("nav.testimonials")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-cream">{t("footer.support")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li><a href="#faq" className="hover:text-amber-400">{t("nav.faq")}</a></li>
              <li><a href="#kontak" className="hover:text-amber-400">{t("nav.contact")}</a></li>
              <li><a href="#" className="hover:text-amber-400">{t("footer.legal")}</a></li>
              <li><a href="#" className="hover:text-amber-400">{t("footer.terms")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-cream">Kontak</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/60">
              <li>Royandi Novantara</li>
              <li>royandi321@gmail.com</li>
              <li>+62 821 5854 5588</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-2.5">
              <AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-400" />
              <div>
                <p className="text-sm font-semibold text-amber-300">{t("footer.scamTitle")}</p>
                <p className="mt-1 text-xs leading-relaxed text-cream/60">{t("footer.scamBody")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Landmark size={17} className="text-amber-300" />
              </span>
              <div className="text-sm">
                <p className="font-semibold text-cream">BCA &middot; 0020179651</p>
                <p className="text-xs text-cream/60">a.n. {t("footer.bankAccountName")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-xs leading-relaxed text-cream/45">
          {t("footer.disclaimer")}
        </div>

        <div className="mt-4 text-xs text-cream/40">
          Copyright &copy; {year} Konsulfit. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
