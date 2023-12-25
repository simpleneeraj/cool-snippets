const jsonld = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Books",
        item: "https://www.icanpost.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Go to Editor",
        item: "https://www.icanpost.app/app",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Features",
        item: "https://www.icanpost.app/features",
      },
      {
        "@type": "ListItem",
        position: 1,
        name: "Pricing",
        item: "https://www.icanpost.app/pricing",
      },
    ],
  },
];
export default jsonld;
