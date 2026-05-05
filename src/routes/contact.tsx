import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, Download, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elèni Kokologianni" },
      { name: "description", content: "Get in touch with Elèni Kokologianni — open to PM, BA, ecommerce and SaaS consulting opportunities." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-14 text-center">
        <h1 className="font-display text-5xl md:text-6xl mb-5">{t.contact.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
      </header>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <a href="mailto:elen.kokologianni@gmail.com" className="bg-card border border-border/60 rounded-2xl p-6 text-center hover:shadow-soft transition-all hover:-translate-y-1 shadow-card">
          <Mail className="w-6 h-6 text-primary mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.contact.emailLabel}</p>
          <p className="text-sm font-medium break-all">elen.kokologianni@gmail.com</p>
        </a>
        <a href="tel:+393930385114" className="bg-card border border-border/60 rounded-2xl p-6 text-center hover:shadow-soft transition-all hover:-translate-y-1 shadow-card">
          <Phone className="w-6 h-6 text-primary mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.contact.phoneLabel}</p>
          <p className="text-sm font-medium">+39 393 0385 114</p>
        </a>
        <div className="bg-card border border-border/60 rounded-2xl p-6 text-center shadow-card">
          <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{t.contact.locationLabel}</p>
          <p className="text-sm font-medium">{t.contact.location}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <a href="/CV-Eleni-Kokologianni.pdf" download className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-soft">
          <Download className="w-4 h-4" /> {t.contact.downloadCv}
        </a>
        <a href="https://www.linkedin.com/in/eleni-kokologianni-29011989/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-border px-7 py-3 rounded-full text-sm font-medium hover:bg-secondary transition-colors">
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
