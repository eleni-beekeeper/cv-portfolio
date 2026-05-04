import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Elèni Kokologianni" },
      { name: "description", content: "Career path across ecommerce, project management, business analysis and education." },
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
    </div>
  );
}
