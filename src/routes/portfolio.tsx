import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { CheckCircle2, Flag, ArrowRight } from "lucide-react";

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


      <section className="mb-16 text-center border-y border-border/60 py-10">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">{t.portfolio.clientsTitle}</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {t.portfolio.clients.map((c, i) => (
            <span key={i} className="font-display text-xl md:text-2xl text-foreground/80 hover:text-primary transition-colors">
              {c}
            </span>
          ))}
        </div>
      </section>

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

      <div className="mt-20 bg-gradient-warm rounded-3xl p-10 md:p-14 text-center shadow-soft">
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">{t.home.ctaTitle}</h2>
        <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">{t.home.ctaDesc}</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3 rounded-full text-sm font-medium hover:bg-background/90 transition-colors">
          {t.home.ctaBtn} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
