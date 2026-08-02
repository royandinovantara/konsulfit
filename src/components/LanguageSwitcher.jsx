import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage?.startsWith("en") ? "en" : "id";

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-pine-200 p-0.5 text-xs font-semibold dark:border-pine-700">
      <button
        onClick={() => setLang("id")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          current === "id"
            ? "bg-pine-600 text-white"
            : "text-pine-600 hover:bg-pine-50 dark:text-pine-200 dark:hover:bg-pine-800"
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          current === "en"
            ? "bg-pine-600 text-white"
            : "text-pine-600 hover:bg-pine-50 dark:text-pine-200 dark:hover:bg-pine-800"
        }`}
      >
        EN
      </button>
    </div>
  );
}
