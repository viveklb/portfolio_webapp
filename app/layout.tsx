import type { Metadata, Viewport } from "next";
import { Google_Sans, Roboto } from "next/font/google";
import { defaultDescription, ownerName, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";
import "./light-theme.css";

const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
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
  title: { default: `${ownerName} | Full-Stack Web Developer in Solapur`, template: `%s | ${siteName}` },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: ownerName, url: "/about" }],
  creator: ownerName,
  publisher: ownerName,
  category: "technology",
  keywords: ["web developer in Solapur", "MERN stack developer", "M.Tech project developer", "B.E. final year projects", "Next.js developer", "React developer", "academic project development"],
  alternates: { canonical: "/dashboard" },
  openGraph: {
    type: "website", locale: "en_IN", url: "/dashboard", siteName,
    title: `${ownerName} | Full-Stack Web Developer in Solapur`,
    description: defaultDescription,
  },
  twitter: { card: "summary_large_image", title: `${ownerName} | Full-Stack Web Developer`, description: defaultDescription },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", "@id": `${siteUrl}/#person`, name: ownerName, url: siteUrl, image: `${siteUrl}/vivek-square-portrait.png`, jobTitle: "Software Developer", sameAs: ["https://www.linkedin.com/in/vivek-bharamshetti-1b9892341", "https://github.com/viveklb"], knowsAbout: ["MERN stack", "Next.js", "React", "Node.js", "MongoDB", "Firebase", "REST APIs"] },
    { "@type": "ProfessionalService", "@id": `${siteUrl}/#business`, name: siteName, url: siteUrl, image: `${siteUrl}/vivek-square-portrait.png`, email: "bharamshettivivek71@gmail.com", telephone: "+91-7083232813", priceRange: "INR 10000-25000+", address: { "@type": "PostalAddress", addressLocality: "Solapur", addressRegion: "Maharashtra", addressCountry: "IN" }, founder: { "@id": `${siteUrl}/#person` }, areaServed: "India", serviceType: ["Web Development", "M.Tech Project Development", "B.E. Final Year Project Development"] },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-IN" className={`${googleSans.variable} ${roboto.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
