import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("konsulfitTheme");
    if (saved) return saved === "dark";
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("konsulfitTheme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("konsulfitTheme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-pine-200 text-pine-700 transition-colors hover:bg-pine-50 dark:border-pine-700 dark:text-pine-100 dark:hover:bg-pine-800"
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
