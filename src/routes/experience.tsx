import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Esperienze — Eleni Kokologianni" },
      { name: "description", content: "Percorso professionale di Eleni Kokologianni: ecommerce, project management, business consulting e formazione." },
      { property: "og:title", content: "Esperienze — Eleni Kokologianni" },
      { property: "og:url", content: "https://cvelenikokologianni.lovable.app/experience" },
    ],
    links: [
      { rel: "canonical", href: "https://cvelenikokologianni.lovable.app/experience" },
    ],
  }),
  component: Experience,
});

function Experience() {
  const { t } = useLang();
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="font-display text-5xl md:text-6xl mb-4">{t.experience.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">{t.experience.subtitle}</p>
      </header>

      <div className="relative border-l-2 border-border pl-8 md:pl-12 space-y-12 mb-24">
        {t.experience.jobs.map((j, i) => (
          <article key={i} className="relative">
            <span className="absolute -left-[42px] md:-left-[54px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-card" />
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">{j.period}</p>
            <h3 className="font-display text-2xl mb-1">{j.role}</h3>
            <p className="text-muted-foreground mb-4 italic">{j.company}</p>
            <ul className="space-y-2">
              {j.bullets.map((b, k) => (
                <li key={k} className="text-foreground/85 flex gap-3 leading-relaxed">
                  <span className="text-primary mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <h2 className="font-display text-3xl md:text-4xl mb-8">{t.experience.eduTitle}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {t.experience.edu.map((e, i) => (
          <div key={i} className="bg-card border border-border/60 rounded-xl p-5 flex justify-between items-start gap-4 shadow-card">
            <div>
              <h4 className="font-medium text-foreground mb-1">{e.title}</h4>
              <p className="text-sm text-muted-foreground">{e.org}</p>
            </div>
            <span className="text-xs text-primary font-medium whitespace-nowrap mt-1">{e.year}</span>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-warm rounded-3xl p-10 md:p-14 text-center shadow-soft">
        <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">{t.home.ctaTitle}</h2>
        <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">{t.home.ctaDesc}</p>
        <Link to="/portfolio" className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3 rounded-full text-sm font-medium hover:bg-background/90 transition-colors">
          {t.hero.cta1} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
