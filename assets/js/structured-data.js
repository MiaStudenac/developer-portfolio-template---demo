function addStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avery Stone",
    jobTitle: "Frontend Developer & UI Designer",
    description:
      "Frontend developer and UI designer helping startups launch clean, high-performing digital products.",
    url: "https://portfolio-demo-avery.vercel.app/",
    email: "hello@averyportfolio.dev",
    telephone: "+1 (437) 555-0192",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressCountry: "Canada",
    },
    nationality: "Canadian",
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "OCAD University - Interaction Design",
      },
      {
        "@type": "EducationalOrganization",
        name: "Google UX Design Certificate",
      },
    ],
    knowsAbout: [
      "Digital Design",
      "User Experience Design",
      "User Interface Design",
      "Graphic Design",
      "Branding",
      "Web Development",
      "Mobile App Design",
    ],
    sameAs: [
      "https://github.com/avery-stone",
      "https://www.linkedin.com/in/avery-stone/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      description:
        "Designs and develops performant web interfaces for product-led businesses.",
    },
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData, null, 2);

  document.head.appendChild(script);

  // Add portfolio items structured data
  addPortfolioStructuredData();
}

function addPortfolioStructuredData() {
  const portfolioItems = [
    {
      "@type": "CreativeWork",
      "@id": "https://portfolio-demo-avery.vercel.app/projects/project-01.html",
      name: "Analytics Dashboard Redesign",
      description:
        "Revamped a legacy SaaS dashboard to improve onboarding and data readability.",
      creator: {
        "@type": "Person",
        name: "Avery Stone",
      },
      dateCreated: "2026",
      genre: "Portfolio Project",
      keywords: ["Design", "Development", "Case Study"],
    },
    {
      "@type": "CreativeWork",
      "@id": "https://portfolio-demo-avery.vercel.app/projects/project-02.html",
      name: "DTC Store Experience Revamp",
      description:
        "Redesigned and rebuilt an e-commerce storefront for better conversion and speed.",
      creator: {
        "@type": "Person",
        name: "Avery Stone",
      },
      dateCreated: "2025",
      genre: "Portfolio Project",
      keywords: ["Design", "Development", "Case Study"],
    },
    {
      "@type": "CreativeWork",
      "@id": "https://portfolio-demo-avery.vercel.app/projects/project-03.html",
      name: "Fintech Onboarding Flow",
      description:
        "Designed a mobile onboarding experience that increased activation completion.",
      creator: {
        "@type": "Person",
        name: "Avery Stone",
      },
      dateCreated: "2025",
      genre: "Portfolio Project",
      keywords: ["Design", "Development", "Case Study"],
    },
    {
      "@type": "CreativeWork",
      "@id": "https://portfolio-demo-avery.vercel.app/projects/project-04.html",
      name: "Startup Brand System",
      description:
        "Built a complete visual identity and web system for a fast-growing startup.",
      creator: {
        "@type": "Person",
        name: "Avery Stone",
      },
      dateCreated: "2024",
      genre: "Portfolio Project",
      keywords: ["Design", "Development", "Case Study"],
    },
    {
      "@type": "CreativeWork",
      "@id": "https://portfolio-demo-avery.vercel.app/projects/project-05.html",
      name: "Support Bot Interface",
      description:
        "Created an AI support interface that helped teams handle tickets faster.",
      creator: {
        "@type": "Person",
        name: "Avery Stone",
      },
      dateCreated: "2024",
      genre: "Portfolio Project",
      keywords: ["Design", "Development", "Case Study"],
    },
  ];

  const portfolioScript = document.createElement("script");
  portfolioScript.type = "application/ld+json";
  portfolioScript.textContent = JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": portfolioItems,
    },
    null,
    2
  );

  document.head.appendChild(portfolioScript);
}

document.addEventListener("DOMContentLoaded", addStructuredData);
