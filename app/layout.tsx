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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Web Development Team in Solapur`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: teamMembers.map((member) => ({
    name: member.name,
    url: `${siteUrl}/team/${member.slug}`,
  })),
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  creator: ownerName,
  publisher: siteName,
  category: "technology",
  formatDetection: { email: false, address: false, telephone: false },
  keywords: defaultKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: `${siteName} | Web Development Team in Solapur`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Web Development Team in Solapur`,
    description: defaultDescription,
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      alternateName: "Vivek.dev",
      inLanguage: "en-IN",
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#vivek-bharamshetti`,
      name: "Vivek Laxman Bharamshetti",
      alternateName: ["Vivek Bharamshetti", "Vivek"],
      url: `${siteUrl}/team/vivek-bharamshetti`,
      image: `${siteUrl}/vivek-square-portrait.png`,
      jobTitle: "Owner & Full-Stack Developer",
      worksFor: { "@id": `${siteUrl}/#business` },
      sameAs: [
        "https://www.linkedin.com/in/vivek-bharamshetti-1b9892341",
        "https://github.com/viveklb",
      ],
      knowsAbout: [
        "MERN stack",
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "DevOps",
        "M.Tech Projects",
        "IEEE Research Papers",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#vaishnavi-yelapure`,
      name: "Vaishnavi Yelapure",
      url: `${siteUrl}/team/vaishnavi-yelapure`,
      jobTitle: "Frontend Developer & UI/UX Specialist",
      worksFor: { "@id": `${siteUrl}/#business` },
      knowsAbout: [
        "Frontend Development",
        "UI/UX Design",
        "System Design",
        "React",
        "Next.js",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#aditya-rachatte`,
      name: "Aditya Rachatte",
      url: `${siteUrl}/team/aditya-rachatte`,
      jobTitle: "Senior Developer & DevOps Engineer",
      worksFor: { "@id": `${siteUrl}/#business` },
      knowsAbout: [
        "DevOps",
        "Senior Web Development",
        "Cloud Infrastructure",
        "Docker",
        "CI/CD Pipelines",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      alternateName: "Vivek.dev",
      url: siteUrl,
      image: `${siteUrl}/vivek-square-portrait.png`,
      email: "bharamshettivivek71@gmail.com",
      telephone: "+91-7083232813",
      priceRange: "INR 10000-25000+",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Solapur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      founder: { "@id": `${siteUrl}/#vivek-bharamshetti` },
      employee: [
        { "@id": `${siteUrl}/#vaishnavi-yelapure` },
        { "@id": `${siteUrl}/#aditya-rachatte` },
      ],
      areaServed: "India",
      serviceType: [
        "Web Development",
        "Samarth Collection E-Commerce",
        "CrackMNC Platform",
        "M.Tech Project Development",
        "B.E. Final Year Projects",
        "Research Papers & IEEE Publications",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
