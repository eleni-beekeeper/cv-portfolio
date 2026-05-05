import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { Info, CheckCircle2, Flag } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Elèni Kokologianni" },
      { name: "description", content: "Selected projects across ecommerce, project management and system integration with milestones and results." },
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

      <div className="space-y-16">
        {t.portfolio.groups.map((g) => {
          const items = t.portfolio.projects.filter((p) => p.group === g.id);
          return (
            <section key={g.id}>
              <h2 className="font-display text-3xl md:text-4xl mb-8 flex items-center gap-4">
                <span className="text-primary">{g.label}</span>
                <span className="flex-1 h-px bg-border" />
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((p, i) => (
                  <article key={i} className="group bg-card border border-border/60 rounded-2xl p-7 shadow-card hover:shadow-soft transition-all hover:-translate-y-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="text-xs uppercase tracking-widest text-primary font-medium px-3 py-1 bg-accent rounded-full">{p.tag}</span>
                      {p.client && (
                        <span className="text-xs text-muted-foreground">
                          {t.portfolio.clientLabel}: <span className="text-foreground font-medium">{p.client}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl mb-3 leading-tight">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>

                    {p.milestones && p.milestones.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                          <Flag className="w-3.5 h-3.5 text-primary" /> {t.portfolio.milestonesLabel}
                        </p>
                        <ul className="space-y-1.5">
                          {p.milestones.map((m, k) => (
                            <li key={k} className="text-sm text-foreground/85 flex gap-2">
                              <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                              <span>{m}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {p.results && p.results.length > 0 && (
                      <div className="mt-auto pt-4 border-t border-border/60">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> {t.portfolio.resultsLabel}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.results.map((r, k) => (
                            <span key={k} className="text-xs font-medium px-3 py-1.5 bg-gradient-warm text-primary-foreground rounded-full shadow-card">
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
