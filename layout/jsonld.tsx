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
        item: "https://example.com/books/sciencefiction",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Get free coins",
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
        name: "Pricing",
        item: "https://www.icanpost.app/pricing",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Generate Free Images",
      },
    ],
  },
];
export default jsonld;
