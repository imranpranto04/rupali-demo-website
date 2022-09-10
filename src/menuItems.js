export const routes = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",

    subRoutes: [
      {
        name: "Company Vision & Mission",
        link: "/about/vision-mission",
      },
      {
        name: "Background",
        link: "/about/background",
      },
      {
        name: "Company Profile",
        link: "/about/company-profile",
      },
      {
        name: "Company Information",
        link: "/about/company-information",
      },
      {
        name: "Boards ",
        link: "/about/company-boards",
      },
      {
        name: "Structure, Values & Principles",
        link: "/about/company-structure",
      },
      {
        name: "Award & Achievements ",
        link: "/about/award",
      },
    ],
  },

  {
    name: "Business and Services",
    link: "/services",

    subRoutes: [
      {
        name: "Property Insurance",
        link: "/services/development",
      },
      {
        name: "Motor Insurance",
        link: "/services/motor",
      },
      {
        name: "Marine Insurance",
        link: "/services/marine",
      },
      {
        name: "Engineering Insurance",
        link: "/services/engineering",
      },
      {
        name: "Miscellaneous Insurance",
        link: "/services/miscellaneous",
      },
    ],
  },

  {
    name: "Reports & Financial Statement",
    link: "/reports",

    subRoutes: [
      {
        name: "Reports",
        link: "/reports",
      },
      {
        name: "Balance Sheet",
        link: "/reports/balance-sheet",
      },
      {
        name: "Profit & Loss Account",
        link: "/reports/account",
      },
      {
        name: "Revenue Account",
        link: "/reports/account",
      },
      {
        name: "Cash Flow Statement",
        link: "/reports/statement",
      },
    ],
  },

  {
    name: "Gallery",
    link: "/gallery",

    subRoutes: [
      {
        name: "Company Photos",
        link: "/gallery/photos",
      },
      {
        name: "Company Event Photos",
        link: "/gallery/event-photos",
      },
      {
        name: "Company Videos",
        link: "/gallery/company-videos",
      },
    ],
  },

  {
    name: "Bancassurance",
    link: "/bancassurance",

    subRoutes: [
      {
        name: "About Bancassurance",
        link: "/bancassurance/about-bancassurance",
      },
      {
        name: "Bank Login",
        link: "/bancassurance/bank-login",
      },
      {
        name: "Product List",
        link: "/bancassurance/product-list",
      },
      {
        name: "Sell Insurance",
        link: "/bancassurance/sell-insurance",
      },
      {
        name: "Sell History",
        link: "/bancassurance/sell-history",
      },
    ],
  },

  {
    name: "Contact Us",
    link: "/contact",
  },
];
