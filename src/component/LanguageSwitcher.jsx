// src/component/LanguageSwitcher.jsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", label: "English", short: "EN" },
  { code: "so", label: "Somali",  short: "SO" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.language || "en").split("-")[0];

  // keep <html> lang/dir synced (both en/so are LTR; update here if you add Arabic later)
  useEffect(() => {
    const code = current;
    document.documentElement.setAttribute("lang", code);
    document.documentElement.setAttribute("dir", "ltr");
  }, [current]);

  const change = (code) => {
    if (code === current) return;
    i18n.changeLanguage(code);
    // i18next-browser-languagedetector will also persist to localStorage automatically
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1">
      {LANGS.map((lng) => {
        const active = lng.code === current;
        return (
          <button
            key={lng.code}
            type="button"
            onClick={() => change(lng.code)}
            aria-pressed={active}
            title={lng.label}
            className={[
              "px-3 py-1 rounded-lg text-sm font-medium transition",
              active
                ? "bg-[var(--brand,#2FA8E1)] text-white shadow"
                : "text-slate-700 hover:bg-slate-100"
            ].join(" ")}
          >
            {lng.short}
          </button>
        );
      })}
    </div>
  );
}
