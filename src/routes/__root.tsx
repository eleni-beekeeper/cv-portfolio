import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "jFnJst_P_ALXfP-uURms1H8R77cydZ8AHPr3ooVw7Ac" },
      { title: "Eleni Kokologianni — Project Manager & Business Consultant" },
      { name: "description", content: "Personal site & portfolio of Eleni Kokologianni — Project Manager, Business Consultant, Ecommerce Specialist." },
      { name: "author", content: "Elèni Kokologianni" },
      { property: "og:title", content: "Eleni Kokologianni — Project Manager & Business Consultant" },
      { property: "og:description", content: "Personal site & portfolio of Eleni Kokologianni — Project Manager, Business Consultant, Ecommerce Specialist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Eleni Kokologianni — Project Manager & Business Consultant" },
      { name: "twitter:description", content: "Personal site & portfolio of Eleni Kokologianni — Project Manager, Business Consultant, Ecommerce Specialist." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/RvHDU3hi09aPEUk8ulQcCBurVfp2/social-images/social-1777975189668-immagine_profilo_eleni_def.png.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/RvHDU3hi09aPEUk8ulQcCBurVfp2/social-images/social-1777975189668-immagine_profilo_eleni_def.png.webp" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Eleni Kokologianni",
          alternateName: ["Elèni Kokologianni", "Eleni Kokologianni Lainà"],
          url: "https://cvelenikokologianni.lovable.app",
          jobTitle: "Project Manager & Business Consultant",
          email: "mailto:elen.kokologianni@gmail.com",
          telephone: "+39 393 0385 114",
          sameAs: ["https://www.linkedin.com/in/eleni-kokologianni-29011989/"],
          knowsAbout: [
            "Project Management",
            "Business Consulting",
            "Ecommerce",
            "Business Analysis",
            "Data Analysis",
            "System Integration",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
