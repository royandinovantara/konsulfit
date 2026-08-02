import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buildWhatsAppLink } from "../config";

export function WhatsAppLink({ message, children, className = "" }) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function WhatsAppFloatButton() {
  const { t } = useTranslation();

  return (
    <a
      href={buildWhatsAppLink(t("whatsapp.defaultMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.floatLabel")}
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-lg shadow-emerald-900/20 transition-all hover:pr-5 md:bottom-8 md:right-8"
    >
      <MessageCircle size={24} strokeWidth={2} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
        {t("whatsapp.floatLabel")}
      </span>
    </a>
  );
}
