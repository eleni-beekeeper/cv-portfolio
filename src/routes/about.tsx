import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import portrait from "@/assets/eleni-portrait.png";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elèni Kokologianni" },
      { name: "description", content: "Hybrid digital professional bridging business and tech across ecommerce, project management and data." },
    ],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  const skills = [
    { title: t.about.skills.bi, list: t.about.skills.biList },
    { title: t.about.skills.tech, list: t.about.skills.techList },
    { title: t.about.skills.pm, list: t.about.skills.pmList },
    { title: t.about.skills.soft, list: t.about.skills.softList },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 items-start mb-20">
        <img src={portrait} alt="Elèni" className="rounded-3xl w-full max-w-xs object-cover shadow-card border border-border/40" />
        <div>
          <h1 className="font-display text-5xl md:text-6xl mb-8">{t.about.title}</h1>
          <p className="text-xl text-foreground leading-relaxed mb-6 font-display">{t.about.lead}</p>
          <p className="text-muted-foreground leading-relaxed mb-4">{t.about.p1}</p>
          <p className="text-muted-foreground leading-relaxed">{t.about.p2}</p>
        </div>
      </div>

      <h2 className="font-display text-3xl md:text-4xl mb-10">{t.about.skillsTitle}</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {skills.map((s) => (
          <div key={s.title} className="bg-card border border-border/60 rounded-2xl p-7 shadow-card">
            <h3 className="font-display text-xl mb-4 text-primary">{s.title}</h3>
            <ul className="space-y-2">
              {s.list.map((item) => (
                <li key={item} className="text-muted-foreground flex gap-3">
                  <span className="text-primary mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="font-display text-3xl md:text-4xl mb-6">{t.about.langTitle}</h2>
      <div className="flex flex-wrap gap-3 mb-16">
        {t.about.langs.map((l) => (
          <span key={l.name} className="px-5 py-2 bg-accent rounded-full text-sm text-accent-foreground">
            <span className="font-medium">{l.name}</span>
            <span className="text-muted-foreground"> · {l.level}</span>
          </span>
        ))}
      </div>

      <h2 className="font-display text-3xl md:text-4xl mb-6">{t.about.extraTitle}</h2>
      <div className="flex flex-wrap gap-3">
        {t.about.extra.map((e) => (
          <span key={e} className="px-5 py-2 bg-card border border-border/60 rounded-full text-sm text-foreground shadow-card">{e}</span>
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
