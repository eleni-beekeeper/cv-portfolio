import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/experience", label: t.nav.experience },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight" onClick={() => setOpen(false)}>
          Elèni<span className="text-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <LangSwitch lang={lang} setLang={setLang} />
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <LangSwitch lang={lang} setLang={setLang} />
          </nav>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: "it" | "en"; setLang: (l: "it" | "en") => void }) {
  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <button
        onClick={() => setLang("it")}
        className={`px-2 py-1 rounded transition-colors ${lang === "it" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        IT
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </button>
    </div>
  );
}
