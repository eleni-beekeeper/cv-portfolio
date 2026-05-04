import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { Info } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Elèni Kokologianni" },
      { name: "description", content: "Selected projects across ecommerce, system integration, project management and data." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const { t } = useLang();
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <header className="mb-12 max-w-3xl">
        <h1 className="font-display text-5xl md:text-6xl mb-4">{t.portfolio.title}</h1>
        <p className="text-lg text-muted-foreground">{t.portfolio.subtitle}</p>
      </header>

      <div className="bg-accent/60 border border-border/60 rounded-xl p-4 flex gap-3 items-start mb-12">
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <p className="text-sm text-accent-foreground">{t.portfolio.note}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {t.portfolio.projects.map((p, i) => (
          <article key={i} className="group bg-card border border-border/60 rounded-2xl p-8 shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
            <span className="inline-block text-xs uppercase tracking-widest text-primary font-medium mb-4 px-3 py-1 bg-accent rounded-full">{p.tag}</span>
            <h3 className="font-display text-2xl mb-3 leading-tight">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
