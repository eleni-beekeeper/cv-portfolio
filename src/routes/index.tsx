import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import portrait from "@/assets/eleni-portrait.png";
import { ArrowRight, Download, Briefcase, BarChart3, ShoppingBag, Workflow } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elèni Kokologianni — Project Manager & Business Analyst" },
      { name: "description", content: "Hybrid digital professional: project management, ecommerce, business analysis and data." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  const highlights = [
    { icon: Briefcase, title: t.home.h1Title, desc: t.home.h1Desc },
    { icon: ShoppingBag, title: t.home.h2Title, desc: t.home.h2Desc },
    { icon: BarChart3, title: t.home.h3Title, desc: t.home.h3Desc },
    { icon: Workflow, title: t.home.h4Title, desc: t.home.h4Desc },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft opacity-60 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-6">{t.hero.eyebrow}</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">{t.hero.title}</h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">{t.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/portfolio" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-soft">
                {t.hero.cta1} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="/CV-Eleni-Kokologianni.pdf" download className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-medium hover:bg-secondary transition-colors">
                <Download className="w-4 h-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-warm rounded-[2rem] opacity-20 blur-2xl" />
            <img
              src={portrait}
              alt="Elèni Kokologianni"
              className="relative rounded-[2rem] w-full max-w-sm mx-auto object-cover shadow-soft border border-border/40"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl mb-12">{t.home.highlightsTitle}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card border border-border/60 rounded-2xl p-8 shadow-card hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">{h.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-gradient-warm rounded-3xl p-10 md:p-16 text-center shadow-soft">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">{t.home.ctaTitle}</h2>
          <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8">{t.home.ctaDesc}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-3 rounded-full text-sm font-medium hover:bg-background/90 transition-colors">
            {t.home.ctaBtn} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
