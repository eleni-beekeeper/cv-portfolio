export type Lang = "it" | "en";

export type PortfolioProject = {
  tag: string;
  title: string;
  client?: string;
  desc: string;
  milestones?: string[];
  results?: string[];
};

type Translation = {
  nav: { home: string; about: string; experience: string; portfolio: string; contact: string };
  hero: { eyebrow: string; title: string; subtitle: string; cta1: string; cta2: string };
  home: {
    highlightsTitle: string;
    h1Title: string; h1Desc: string;
    h2Title: string; h2Desc: string;
    h3Title: string; h3Desc: string;
    h4Title: string; h4Desc: string;
    ctaTitle: string; ctaDesc: string; ctaBtn: string;
  };
  about: {
    title: string; lead: string; p1: string; p2: string;
    skillsTitle: string;
    skills: {
      bi: string; biList: string[];
      tech: string; techList: string[];
      pm: string; pmList: string[];
      soft: string; softList: string[];
    };
    langTitle: string;
    langs: { name: string; level: string }[];
    extraTitle: string;
    extra: string[];
  };
  experience: {
    title: string; subtitle: string;
    jobs: { role: string; company: string; period: string; bullets: string[] }[];
    eduTitle: string;
    edu: { title: string; org: string; year: string }[];
  };
  portfolio: {
    title: string; subtitle: string; note: string;
    clientLabel: string; milestonesLabel: string; resultsLabel: string;
    groupsTitle: string;
    groups: { id: string; label: string }[];
    projects: (PortfolioProject & { group: string })[];
  };
  contact: {
    title: string; subtitle: string;
    emailLabel: string; phoneLabel: string; locationLabel: string; location: string;
    downloadCv: string;
  };
  footer: string;
};

export type TranslationKeys = Translation;

export const translations: Record<Lang, Translation> = {
  it: {
    nav: { home: "Home", about: "Chi sono", experience: "Esperienze", portfolio: "Portfolio", contact: "Contatti" },
    hero: {
      eyebrow: "Project Manager · Business Analyst · Ecommerce",
      title: "Costruisco ponti tra business e tecnologia.",
      subtitle: "Coordino progetti digitali ed ecommerce data-driven, traducendo bisogni di business in soluzioni tecniche concrete. Profilo ibrido tra gestione, analisi dati e strategia.",
      cta1: "Vedi i progetti",
      cta2: "Scarica il CV",
    },
    home: {
      highlightsTitle: "Cosa porto al tavolo",
      h1Title: "Project Management",
      h1Desc: "Coordinamento end-to-end, scope/tempi/budget, gestione stakeholder e change request.",
      h2Title: "Ecommerce & Digital",
      h2Desc: "6+ anni tra B2B e B2C, KPI, merchandising online, integrazione marketplace.",
      h3Title: "Data & Analisi",
      h3Desc: "Dashboarding (Qlik Sense, Power BI), reporting, storytelling dei dati per decisioni business.",
      h4Title: "Business Analysis",
      h4Desc: "Raccolta requisiti, mappatura processi, integrazione sistemi (ERP, CRM, CMS).",
      ctaTitle: "Cerchi un profilo ibrido che parli sia tech che business?",
      ctaDesc: "Sono aperta a opportunità come Project Manager, Business Analyst, Ecommerce Specialist e SaaS Consultant.",
      ctaBtn: "Mettiamoci in contatto",
    },
    about: {
      title: "Chi sono",
      lead: "Professionista con esperienza nella gestione end-to-end di progetti digitali ed ecommerce, con forte esposizione all'analisi dei KPI, integrazione sistemi e collaborazione tra team tecnici e business.",
      p1: "Ho sempre gestito il rapporto diretto con il cliente, raccogliendo requisiti, traducendo bisogni in soluzioni concrete e supportando decisioni data-driven. Sto orientando la mia crescita verso l'analisi dati e verso ruoli più consulenziali.",
      p2: "Mi descrivono come la persona che fa da ponte: capisco i tecnici quando parlano di API e i business owner quando parlano di margini. Questo mi rende efficace nei contesti dove il valore nasce dall'incontro tra reparti diversi.",
      skillsTitle: "Competenze",
      skills: {
        bi: "Business Intelligence & Dati",
        biList: ["KPI & analisi performance", "Dashboarding (Qlik Sense, Power BI)", "Storytelling dei dati", "Excel avanzato"],
        tech: "Tech & Data",
        techList: ["SQL (in formazione)", "Python per Data Analysis (in formazione)", "Integrazione ERP, CRM, CMS, marketplace", "Documentazione tecnica & UAT"],
        pm: "Project Management",
        pmList: ["Jira, Trello, ClickUp", "Agile, Kanban, Waterfall", "ISIPM-Base certified", "Master in Project Management"],
        soft: "Soft skills",
        softList: ["Comunicazione & gestione cliente", "Gestione di progetti multipli", "Risk management", "Collaborazione & knowledge sharing"],
      },
      langTitle: "Lingue",
      langs: [
        { name: "Italiano", level: "C2" },
        { name: "Inglese", level: "C2" },
        { name: "Greco", level: "Madrelingua" },
        { name: "Francese", level: "A2" },
      ],
      extraTitle: "Info aggiuntive",
      extra: ["Patente B — automunita", "Disponibile a trasferte", "Sede Padova, aperta a remote/hybrid"],
    },
    experience: {
      title: "Percorso professionale",
      subtitle: "Otto anni tra ecommerce, project management e business analysis.",
      jobs: [
        { role: "Junior Project Manager", company: "FiloBlu Spa", period: "01/2024 — Presente", bullets: ["Coordinamento progetti digital ed ecommerce con focus su performance e miglioramento continuo.", "Raccolta e analisi requisiti business, traduzione in soluzioni tecniche.", "Monitoraggio scope, tempi e budget fino al go-live e post-lancio.", "Unico punto di contatto per stakeholder tecnici e business, gestione change request.", "Redazione documentazione tecnica/funzionale e supervisione QA."] },
        { role: "E-commerce Specialist", company: "FiloBlu Spa", period: "01/2022 — 01/2024", bullets: ["Monitoraggio e analisi KPI ecommerce con Qlik Sense.", "Supporto al Piano Commerciale annuale e ai lanci di collezione.", "Merchandising online basato su insight di performance.", "Gestione giacenze e riassortimento data-driven."] },
        { role: "Responsabile E-commerce B2B", company: "Z Group Srl", period: "04/2018 — 12/2021", bullets: ["Analisi performance del catalogo e campagne digital.", "Coordinamento agenzia web e software house.", "Gestione corrieri, spedizioni e fatturazione.", "Miglioramento qualità dati catalogo, riduzione reclami/resi."] },
        { role: "Assistente Product Manager", company: "OVS Spa", period: "10/2017 — 01/2018", bullets: ["Coordinamento fornitori, monitoraggio tempi e qualità.", "Collaborazione con team interni e gestione processi."] },
      ],
      eduTitle: "Formazione & Certificazioni",
      edu: [
        { title: "Microsoft Power BI Data Analyst", org: "Coursera", year: "in corso" },
        { title: "IBM Python & SQL Data Science Foundations", org: "Coursera", year: "in corso" },
        { title: "Google AI Essentials", org: "Google", year: "2025" },
        { title: "ISIPM-Base", org: "Istituto Italiano di Project Management", year: "2025" },
        { title: "Master in Project Management", org: "Executy Academy, Bologna", year: "2024" },
        { title: "Master in Digital Marketing", org: "Formazione Veneto, Padova", year: "2020" },
        { title: "LM in Economia del Turismo (percorso)", org: "Università Ca' Foscari, Venezia", year: "2016" },
        { title: "Laurea in Scienze Politiche", org: "Università di Atene", year: "2011" },
      ],
    },
    portfolio: {
      title: "Portfolio progetti",
      subtitle: "Una selezione di progetti raggruppati per tipo di valore portato, con milestone e risultati misurabili.",
      note: "Alcuni dati sono aggregati o arrotondati nel rispetto degli NDA. Approfondisco volentieri ogni caso in colloquio.",
      clientLabel: "Cliente",
      milestonesLabel: "Milestone",
      resultsLabel: "Risultati",
      groupsTitle: "Aree di valore",
      groups: [
        { id: "ecommerce", label: "Ecommerce Specialist" },
        { id: "pm", label: "Project Management" },
        { id: "integration", label: "System Integration" },
      ],
      projects: [
        {
          group: "ecommerce",
          tag: "Ecommerce B2B",
          title: "Gestione ecommerce B2B multibrand",
          client: "Z Group Srl",
          desc: "Responsabilità diretta del canale ecommerce B2B multibrand: catalogo, qualità dati, coordinamento agenzia web e software house, gestione corrieri e fatturazione.",
          milestones: ["Riorganizzazione del catalogo e dei flussi dati", "Coordinamento agenzia web e software house", "Ottimizzazione processo ordine → spedizione → fatturazione"],
          results: ["+2% traffico", "+10% ordini", "−10% reclami", "−30% errori catalogo"],
        },
        {
          group: "ecommerce",
          tag: "Ecommerce B2C",
          title: "Gestione ecommerce DTC clienti beauty",
          client: "Collistar, BioNike",
          desc: "Gestione store online su Magento, Shopify e PrestaShop. Analisi KPI con Qlik Sense e GA4, ottimizzazione performance, coordinamento attività promo, lanci e merchandising. Analisi dati anche per riassortimenti magazzino.",
          milestones: ["Analisi KPI continuativa (Qlik, GA4)", "Coordinamento promo, lanci e merchandising online", "Riassortimenti data-driven per evitare out of stock"],
          results: ["+2% conversion rate", "−1% resi", "−20% errori stock", "Out of stock azzerati sui best seller"],
        },
        {
          group: "pm",
          tag: "Project Management",
          title: "Nuovo ecommerce su Shopify",
          client: "Umit Benan",
          desc: "Creazione progetto ecommerce su Shopify con go-live in 3 mesi, gestione delle change request in corso d'opera ed erogazione del pacchetto di maintenance post-lancio.",
          milestones: ["Kick-off & raccolta requisiti", "Build, UAT e go-live in 3 mesi", "Gestione change request", "Erogazione pacchetto maintenance"],
          results: ["Delivery on time entro 3 mesi", "Continuità operativa post go-live"],
        },
        {
          group: "pm",
          tag: "Project Management",
          title: "Customer service & loyalty program",
          client: "Antony Morato",
          desc: "Integrazione widget customer service in produzione. Partecipazione alla fase presales per implementazione loyalty program online e reso in store con tool fornitore FiloBlu, coordinando team tech interno + 3 fornitori (CRM, sistemi cassa store, FiloBlu).",
          milestones: ["Integrazione widget customer service in produzione", "Presales loyalty program online & reso in store", "Coordinamento team tech interno + 3 fornitori"],
          results: ["Roadmap omnichannel allineata tra brand e fornitori", "Requisiti tecnici e funzionali consolidati per la fase di build"],
        },
        {
          group: "pm",
          tag: "Project Management",
          title: "Marketing tool & integrazione CRM",
          client: "Pal Zileri",
          desc: "Integrazione del marketing tool SaleCycle. Partecipazione presales per integrazione Magento ↔ Microsoft Dynamics (nuovo CRM, migrazione dati e flusso da Magento verso CRM).",
          milestones: ["Integrazione SaleCycle in produzione", "Presales Magento ↔ Microsoft Dynamics", "Disegno flusso dati e migrazione verso il nuovo CRM"],
          results: ["Marketing tool live e tracciato", "Architettura dati cliente-CRM definita end-to-end"],
        },
        {
          group: "integration",
          tag: "Marketplace",
          title: "Apertura store Zalando",
          client: "Loriblu",
          desc: "Apertura store Zalando con integrazione marketplace tramite Cloudstore, ERP e WMS aziendali e corrieri (GSPED).",
          milestones: ["Setup connettore Cloudstore ↔ Zalando", "Integrazione ERP + WMS", "Integrazione corrieri via GSPED", "Go-live store"],
          results: ["Nuovo canale di vendita attivo", "Flusso ordini → magazzino → spedizione automatizzato"],
        },
        {
          group: "integration",
          tag: "Marketplace",
          title: "Attivazione store Amazon",
          client: "Frau",
          desc: "Attivazione store Amazon: integrazione catalogo, gestione listini e flussi ordini/spedizioni con i sistemi del cliente.",
          milestones: ["Onboarding Amazon", "Integrazione catalogo & listini", "Sincronizzazione ordini e spedizioni"],
          results: ["Store Amazon live", "Processo ordine end-to-end automatizzato"],
        },
        {
          group: "integration",
          tag: "Marketplace",
          title: "Attivazione store Decathlon",
          client: "Altra Running",
          desc: "Attivazione del canale Decathlon Marketplace, integrazione catalogo e gestione del flusso operativo con i sistemi del cliente.",
          milestones: ["Onboarding Decathlon", "Integrazione catalogo", "Setup flusso ordini e logistico"],
          results: ["Nuovo canale marketplace attivo", "Espansione del go-to-market del brand"],
        },
        {
          group: "integration",
          tag: "Migrazione",
          title: "Migrazione ecommerce & magazzini logici",
          client: "Progetto interno",
          desc: "Migrazione ecommerce e magazzini logici tra società del gruppo con infrastrutture diverse: passaggio da SAP a NetSuite, riallineamento di flussi e mapping.",
          milestones: ["Mapping dati SAP → NetSuite", "Migrazione magazzini logici", "Switch ecommerce sulla nuova infrastruttura", "Hypercare post go-live"],
          results: ["Migrazione completata senza interruzioni significative del servizio", "Allineamento operativo cross-società"],
        },
        {
          group: "integration",
          tag: "Omnichannel",
          title: "Servizio Pickup in Store",
          client: "Borbonese",
          desc: "Attivazione del servizio Pickup in Store: integrazione ecommerce ↔ sistemi di store ↔ logistica per consentire il ritiro dell'ordine in negozio.",
          milestones: ["Disegno flusso omnichannel", "Integrazione ecommerce ↔ store ↔ logistica", "Test e rollout sui punti vendita"],
          results: ["Nuova opzione di delivery attiva", "Maggiore integrazione tra canale online e rete retail"],
        },
      ],
    },
    contact: {
      title: "Lavoriamo insieme",
      subtitle: "Aperta a opportunità come Project Manager, Business Analyst, Ecommerce Specialist e SaaS Consultant. Sede Padova, disponibile a remote/hybrid. Patente B, automunita.",
      emailLabel: "Email",
      phoneLabel: "Telefono",
      locationLabel: "Sede",
      location: "Padova, Italia",
      downloadCv: "Scarica il CV (PDF)",
    },
    footer: "© 2026 Eleni Kokologianni. Tutti i diritti riservati.",
  },
  en: {
    nav: { home: "Home", about: "About", experience: "Experience", portfolio: "Portfolio", contact: "Contact" },
    hero: {
      eyebrow: "Project Manager · Business Analyst · Ecommerce",
      title: "I build bridges between business and tech.",
      subtitle: "I lead data-driven digital and ecommerce projects, turning business needs into concrete technical solutions. A hybrid profile across delivery, analytics and strategy.",
      cta1: "View projects",
      cta2: "Download CV",
    },
    home: {
      highlightsTitle: "What I bring to the table",
      h1Title: "Project Management",
      h1Desc: "End-to-end coordination, scope/time/budget, stakeholder & change-request management.",
      h2Title: "Ecommerce & Digital",
      h2Desc: "6+ years across B2B and B2C, KPIs, online merchandising, marketplace integration.",
      h3Title: "Data & Analytics",
      h3Desc: "Dashboarding (Qlik Sense, Power BI), reporting, data storytelling for business decisions.",
      h4Title: "Business Analysis",
      h4Desc: "Requirements gathering, process mapping, system integration (ERP, CRM, CMS).",
      ctaTitle: "Looking for a hybrid profile that speaks both tech and business?",
      ctaDesc: "Open to roles as Project Manager, Business Analyst, Ecommerce Specialist and SaaS Consultant.",
      ctaBtn: "Get in touch",
    },
    about: {
      title: "About me",
      lead: "Professional with experience in end-to-end management of digital and ecommerce projects, with strong exposure to KPI analysis, system integration and collaboration between technical and business teams.",
      p1: "I've always managed direct client relationships, collecting requirements, translating needs into concrete solutions and supporting data-driven decisions. I'm growing my career toward data analysis and more consulting-oriented roles.",
      p2: "People describe me as the bridge person: I understand engineers when they talk about APIs and business owners when they talk about margins. That makes me effective wherever value comes from departments meeting in the middle.",
      skillsTitle: "Skills",
      skills: {
        bi: "Business Intelligence & Data",
        biList: ["KPI & performance analysis", "Dashboarding (Qlik Sense, Power BI)", "Data storytelling", "Advanced Excel"],
        tech: "Tech & Data",
        techList: ["SQL (learning)", "Python for Data Analysis (learning)", "ERP, CRM, CMS, marketplace integration", "Technical documentation & UAT"],
        pm: "Project Management",
        pmList: ["Jira, Trello, ClickUp", "Agile, Kanban, Waterfall", "ISIPM-Base certified", "Master in Project Management"],
        soft: "Soft skills",
        softList: ["Communication & client management", "Multi-project management", "Risk management", "Collaboration & knowledge sharing"],
      },
      langTitle: "Languages",
      langs: [
        { name: "Italian", level: "C2" },
        { name: "English", level: "C2" },
        { name: "Greek", level: "Native" },
        { name: "French", level: "A2" },
      ],
      extraTitle: "Additional info",
      extra: ["Driving licence B — own car", "Available to travel", "Based in Padua, open to remote/hybrid"],
    },
    experience: {
      title: "Career path",
      subtitle: "Eight years across ecommerce, project management and business analysis.",
      jobs: [
        { role: "Junior Project Manager", company: "FiloBlu Spa", period: "01/2024 — Present", bullets: ["Coordination of digital and ecommerce projects with focus on performance and continuous improvement.", "Business requirements gathering and translation into technical solutions.", "Scope, time and budget monitoring through go-live and post-launch.", "Single point of contact for tech and business stakeholders, change request management.", "Technical/functional documentation and QA supervision."] },
        { role: "E-commerce Specialist", company: "FiloBlu Spa", period: "01/2022 — 01/2024", bullets: ["Ecommerce KPI monitoring and analysis with Qlik Sense.", "Support to the annual Commercial Plan and collection launches.", "Online merchandising driven by performance insights.", "Stock management and data-driven replenishment."] },
        { role: "B2B E-commerce Manager", company: "Z Group Srl", period: "04/2018 — 12/2021", bullets: ["Catalog and digital campaign performance analysis.", "Coordination of web agency and software house.", "Carrier, shipping and invoicing management.", "Catalog data quality improvement, reduction of complaints/returns."] },
        { role: "Assistant Product Manager", company: "OVS Spa", period: "10/2017 — 01/2018", bullets: ["Supplier coordination, time and quality monitoring.", "Collaboration with internal teams and process management."] },
      ],
      eduTitle: "Education & Certifications",
      edu: [
        { title: "Microsoft Power BI Data Analyst", org: "Coursera", year: "ongoing" },
        { title: "IBM Python & SQL Data Science Foundations", org: "Coursera", year: "ongoing" },
        { title: "Google AI Essentials", org: "Google", year: "2025" },
        { title: "ISIPM-Base", org: "Italian Institute of Project Management", year: "2025" },
        { title: "Master in Project Management", org: "Executy Academy, Bologna", year: "2024" },
        { title: "Master in Digital Marketing", org: "Formazione Veneto, Padova", year: "2020" },
        { title: "MSc in Tourism Economics (path)", org: "Ca' Foscari University, Venice", year: "2016" },
        { title: "BA in Political Sciences", org: "University of Athens", year: "2011" },
      ],
    },
    portfolio: {
      title: "Project portfolio",
      subtitle: "A selection of projects grouped by type of value delivered, with milestones and measurable results.",
      note: "Some figures are aggregated or rounded out of respect for NDAs. Happy to go deeper in an interview.",
      clientLabel: "Client",
      milestonesLabel: "Milestones",
      resultsLabel: "Results",
      groupsTitle: "Value areas",
      groups: [
        { id: "ecommerce", label: "Ecommerce Specialist" },
        { id: "pm", label: "Project Management" },
        { id: "integration", label: "System Integration" },
      ],
      projects: [
        {
          group: "ecommerce",
          tag: "B2B Ecommerce",
          title: "Multi-brand B2B ecommerce management",
          client: "Z Group Srl",
          desc: "Direct ownership of the multi-brand B2B ecommerce channel: catalog, data quality, coordination of web agency and software house, carrier and invoicing management.",
          milestones: ["Catalog and data flow reorganization", "Web agency and software house coordination", "Order → shipping → invoicing process optimization"],
          results: ["+2% traffic", "+10% orders", "−10% complaints", "−30% catalog errors"],
        },
        {
          group: "ecommerce",
          tag: "B2C Ecommerce",
          title: "DTC ecommerce management for beauty clients",
          client: "Collistar, BioNike",
          desc: "Online store management on Magento, Shopify and PrestaShop. KPI analysis (Qlik Sense, GA4) and performance optimization. Coordination of promo, launches and merchandising. Data analysis also driving warehouse replenishment.",
          milestones: ["Continuous KPI analysis (Qlik, GA4)", "Online promo, launch and merchandising coordination", "Data-driven replenishment to avoid out-of-stock"],
          results: ["+2% conversion rate", "−1% returns", "−20% stock errors", "Zero out-of-stock on best sellers"],
        },
        {
          group: "pm",
          tag: "Project Management",
          title: "New Shopify ecommerce",
          client: "Umit Benan",
          desc: "Creation of a Shopify ecommerce project with go-live in 3 months, in-flight change request management and delivery of the post-launch maintenance package.",
          milestones: ["Kick-off & requirements gathering", "Build, UAT and go-live in 3 months", "Change request management", "Maintenance package delivery"],
          results: ["On-time delivery within 3 months", "Operational continuity after go-live"],
        },
        {
          group: "pm",
          tag: "Project Management",
          title: "Customer service & loyalty program",
          client: "Antony Morato",
          desc: "Customer service widget integration in production. Pre-sales for online loyalty program and in-store returns using FiloBlu's tool, coordinating internal tech team plus three vendors (CRM, in-store POS, FiloBlu).",
          milestones: ["Customer service widget live in production", "Pre-sales for online loyalty program & in-store returns", "Coordination of internal tech team + 3 vendors"],
          results: ["Omnichannel roadmap aligned across brand and vendors", "Technical and functional requirements consolidated for the build phase"],
        },
        {
          group: "pm",
          tag: "Project Management",
          title: "Marketing tool & CRM integration",
          client: "Pal Zileri",
          desc: "Integration of SaleCycle marketing tool. Pre-sales for Magento ↔ Microsoft Dynamics integration (new CRM, data migration and flow from Magento to CRM).",
          milestones: ["SaleCycle integration in production", "Pre-sales Magento ↔ Microsoft Dynamics", "Data flow design and migration to the new CRM"],
          results: ["Marketing tool live and tracked", "End-to-end client-CRM data architecture defined"],
        },
        {
          group: "integration",
          tag: "Marketplace",
          title: "Zalando store launch",
          client: "Loriblu",
          desc: "Launch of the Zalando store with marketplace integration via Cloudstore, ERP and WMS systems and carriers (GSPED).",
          milestones: ["Cloudstore ↔ Zalando connector setup", "ERP + WMS integration", "Carrier integration via GSPED", "Store go-live"],
          results: ["New sales channel live", "Order → warehouse → shipping flow fully automated"],
        },
        {
          group: "integration",
          tag: "Marketplace",
          title: "Amazon store activation",
          client: "Frau",
          desc: "Amazon store activation: catalog integration, price list management and order/shipping flows with the client's systems.",
          milestones: ["Amazon onboarding", "Catalog & price list integration", "Order and shipping synchronization"],
          results: ["Amazon store live", "Fully automated end-to-end order process"],
        },
        {
          group: "integration",
          tag: "Marketplace",
          title: "Decathlon store activation",
          client: "Altra Running",
          desc: "Activation of the Decathlon Marketplace channel, catalog integration and operational flow with the client's systems.",
          milestones: ["Decathlon onboarding", "Catalog integration", "Order and logistics flow setup"],
          results: ["New marketplace channel live", "Brand go-to-market expansion"],
        },
        {
          group: "integration",
          tag: "Migration",
          title: "Ecommerce & logical warehouses migration",
          client: "Internal project",
          desc: "Migration of ecommerce and logical warehouses across group companies with different infrastructures: from SAP to NetSuite, with flow and mapping realignment.",
          milestones: ["SAP → NetSuite data mapping", "Logical warehouses migration", "Ecommerce switch to the new infrastructure", "Post go-live hypercare"],
          results: ["Migration completed with no significant service disruption", "Cross-company operational alignment"],
        },
        {
          group: "integration",
          tag: "Omnichannel",
          title: "Pickup in Store service",
          client: "Borbonese",
          desc: "Activation of the Pickup in Store service: ecommerce ↔ store systems ↔ logistics integration to enable in-store order pickup.",
          milestones: ["Omnichannel flow design", "Ecommerce ↔ store ↔ logistics integration", "Test and rollout across stores"],
          results: ["New delivery option live", "Tighter integration between online channel and retail network"],
        },
      ],
    },
    contact: {
      title: "Let's work together",
      subtitle: "Open to opportunities as Project Manager, Business Analyst, Ecommerce Specialist and SaaS Consultant. Based in Padua, available for remote/hybrid. Driving licence B, own car.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Padua, Italy",
      downloadCv: "Download CV (PDF)",
    },
    footer: "© 2026 Eleni Kokologianni. All rights reserved.",
  },
};
