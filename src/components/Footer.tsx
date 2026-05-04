import { useLang } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>{t.footer}</p>
        <div className="flex gap-5">
          <a href="mailto:elen.kokologianni@gmail.com" className="hover:text-foreground transition-colors">elen.kokologianni@gmail.com</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
