import type { Metadata, Viewport } from "next";
import { Google_Sans, Roboto } from "next/font/google";

import {
  defaultDescription,
  defaultKeywords,
  ownerName,
  siteName,
  siteUrl,
  teamMembers,
} from "@/lib/seo";

import "./globals.css";
import "./light-theme.css";
import "./design-refresh.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-google-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  display: "swap",
  variable: "--font-roboto",
});

/* -------------------------------------------------------------------------- */
/*                                  Metadata                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | Web & Software Development Company in Solapur`,
    template: `%s | ${siteName}`,
  },

  description: defaultDescription,

  applicationName: siteName,

  authors: teamMembers.map((member) => ({
    name: member.name,
    url: `${siteUrl}/team/${member.slug}`,
  })),

  creator: ownerName,
  publisher: siteName,

  category: "technology",

  keywords: defaultKeywords,

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,

    title: `${siteName} | Web & Software Development Company in Solapur`,

    description: defaultDescription,

    images: [
      {
        url: "/vivek-square-portrait.png",
        width: 1200,
        height: 1200,
        alt: `${siteName} - Web & Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `${siteName} | Web & Software Development Company in Solapur`,

    description: defaultDescription,

    images: ["/vivek-square-portrait.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                  Viewport                                  */
/* -------------------------------------------------------------------------- */

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

/* -------------------------------------------------------------------------- */
/*                              Structured Data                               */
/* -------------------------------------------------------------------------- */

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    /* -------------------------------- Website ------------------------------- */
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,

      url: siteUrl,
      name: siteName,
      alternateName: ["Vivek.dev", "Vivek Software"],

      inLanguage: "en-IN",

      publisher: {
        "@id": `${siteUrl}/#business`,
      },

      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    /* --------------------------------- Vivek -------------------------------- */
    {
      "@type": "Person",
      "@id": `${siteUrl}/#vivek-bharamshetti`,

      name: "Vivek Laxman Bharamshetti",

      alternateName: [
        "Vivek Bharamshetti",
        "Vivek",
        "Vivek L Bharamshetti",
      ],

      url: `${siteUrl}/team/vivek-bharamshetti`,

      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/vivek-square-portrait.png`,
      },

      jobTitle: "Founder, Owner & Full-Stack Software Developer",

      worksFor: {
        "@id": `${siteUrl}/#business`,
      },

      sameAs: [
        "https://www.linkedin.com/in/vivek-bharamshetti-1b9892341",
        "https://github.com/viveklb",
      ],

      knowsAbout: [
        "Full-Stack Development",
        "Web Development",
        "Software Development",
        "MERN Stack",
        "Next.js",
        "React.js",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Java",
        "Spring Boot",
        "MongoDB",
        "MySQL",
        "Firebase",
        "AWS",
        "DevOps",
        "REST APIs",
        "Payment Gateway Integration",
        "HDFC SmartGateway",
        "E-Commerce Development",
        "M.Tech Projects",
        "Engineering Projects",
        "Artificial Intelligence",
        "Internet of Things",
        "IEEE Research Papers",
      ],
    },

    /* ------------------------------ Vaishnavi ------------------------------ */
    {
      "@type": "Person",
      "@id": `${siteUrl}/#vaishnavi-yelapure`,

      name: "Vaishnavi Yelapure",

      url: `${siteUrl}/team/vaishnavi-yelapure`,

      jobTitle: "Frontend Developer & UI/UX Specialist",

      worksFor: {
        "@id": `${siteUrl}/#business`,
      },

      knowsAbout: [
        "Frontend Development",
        "UI/UX Design",
        "Responsive Web Design",
        "React.js",
        "Next.js",
        "JavaScript",
        "CSS",
        "System Design",
      ],
    },

    /* -------------------------------- Aditya -------------------------------- */
    {
      "@type": "Person",
      "@id": `${siteUrl}/#aditya-rachatte`,

      name: "Aditya Rachatte",

      url: `${siteUrl}/team/aditya-rachatte`,

      jobTitle: "Senior Developer & DevOps Engineer",

      worksFor: {
        "@id": `${siteUrl}/#business`,
      },

      knowsAbout: [
        "Software Development",
        "Web Development",
        "DevOps",
        "Cloud Infrastructure",
        "Docker",
        "CI/CD Pipelines",
        "Deployment",
        "Server Management",
      ],
    },

    /* -------------------------------- Samarth ------------------------------- */
    {
      "@type": "Person",
      "@id": `${siteUrl}/#samarth-more`,

      name: "Samarth More",

      url: `${siteUrl}/team/samarth-more`,

      jobTitle:
        "Frontend Developer, UI/UX Specialist & Payment Gateway Integration Developer",

      worksFor: {
        "@id": `${siteUrl}/#business`,
      },

      knowsAbout: [
        "Frontend Development",
        "UI/UX Design",
        "React.js",
        "Next.js",
        "Payment Gateway Integration",
        "Payment APIs",
        "Low-Level System Design",
        "Web Application Development",
        "REST APIs",
      ],
    },

    /* ------------------------------- Business ------------------------------- */
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,

      name: siteName,

      alternateName: [
        "Vivek.dev",
        "Vivek Software",
        "Vivek Software Development",
      ],

      url: siteUrl,

      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/vivek-square-portrait.png`,
      },

      image: `${siteUrl}/vivek-square-portrait.png`,

      description: defaultDescription,

      email: "bharamshettivivek71@gmail.com",

      telephone: "+91-7083232813",

      priceRange: "₹₹",

      currenciesAccepted: "INR",

      paymentAccepted: [
        "UPI",
        "Bank Transfer",
        "Online Payment",
      ],

      address: {
        "@type": "PostalAddress",
        addressLocality: "Solapur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },

      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Solapur",
        },
      ],

      founder: {
        "@id": `${siteUrl}/#vivek-bharamshetti`,
      },

      employee: [
        {
          "@id": `${siteUrl}/#vivek-bharamshetti`,
        },
        {
          "@id": `${siteUrl}/#vaishnavi-yelapure`,
        },
        {
          "@id": `${siteUrl}/#aditya-rachatte`,
        },
        {
          "@id": `${siteUrl}/#samarth-more`,
        },
      ],

      knowsAbout: [
        "Web Development",
        "Software Development",
        "E-Commerce Development",
        "Payment Gateway Integration",
        "Cloud Deployment",
        "Mobile Application Development",
        "Engineering Projects",
        "Artificial Intelligence",
        "IoT Projects",
        "Research Paper Development",
      ],

      serviceType: [
        "Custom Website Development",
        "Full-Stack Web Development",
        "E-Commerce Website Development",
        "Payment Gateway Integration",
        "HDFC SmartGateway Integration",
        "Admin Dashboard Development",
        "Firebase Application Development",
        "AWS Cloud Deployment",
        "Next.js Development",
        "React.js Development",
        "Java Spring Boot Development",
        "M.Tech Project Development",
        "B.E. Final Year Project Development",
        "IoT Project Development",
        "AI/ML Project Development",
        "Research Paper Assistance",
      ],

      hasOfferCatalog: {
        "@type": "OfferCatalog",

        name: "Software Development Services",

        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Web Development",

            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Business Website Development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "E-Commerce Website Development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Web Application Development",
                },
              },
            ],
          },

          {
            "@type": "OfferCatalog",
            name: "Software Integration",

            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Payment Gateway Integration",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Firebase Integration",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Cloud Deployment",
                },
              },
            ],
          },

          {
            "@type": "OfferCatalog",
            name: "Engineering Project Development",

            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "M.Tech Project Development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "B.E. Final Year Project Development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "AI and IoT Project Development",
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                                Root Layout                                 */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${googleSans.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </body>
    </html>
  );
}