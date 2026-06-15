import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Concrete Pressure Washing in Peachtree City, GA`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Support local college students with professional concrete pressure washing for driveways, sidewalks, patios, and walkways in Peachtree City and nearby Georgia communities.",
  keywords: [
    "pressure washing Peachtree City GA",
    "pressure washing Sharpsburg GA",
    "pressure washing Senoia GA",
    "pressure washing Fayetteville GA",
    "concrete cleaning Peachtree City GA",
    "driveway pressure washing Peachtree City GA",
    "sidewalk cleaning Fayette County GA",
    "concrete pressure washing near Peachtree City",
    "student-owned pressure washing Peachtree City",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/brand/starbros-favicon.png",
    shortcut: "/images/brand/starbros-favicon.png",
    apple: "/images/brand/starbros-favicon.png",
  },
  openGraph: {
    title: `${siteConfig.name} | Local Concrete Pressure Washing`,
    description:
      "Professional concrete cleaning from local college students who grew up in the Peachtree City community.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/gallery/driveway-before-after.jpg",
        width: 1861,
        height: 1213,
        alt: `Driveway before and after ${siteConfig.name} concrete pressure washing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Local Concrete Pressure Washing`,
    description:
      "Support local college students and refresh your concrete in Peachtree City, GA.",
    images: ["/images/gallery/driveway-before-after.jpg"],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description:
    "College-student-operated concrete pressure washing business serving Peachtree City and surrounding Georgia communities.",
  telephone: siteConfig.phoneE164,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/brand/starbros-logo-main.png`,
  logo: `${siteConfig.url}/images/brand/starbros-logo-main.png`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: siteConfig.serviceAreas.map((name) => ({
    "@type": "City",
    name: `${name}, Georgia`,
  })),
  knowsAbout: [
    "Concrete pressure washing",
    "Driveway pressure washing",
    "Sidewalk pressure washing",
    "Patio pressure washing",
    "Walkway pressure washing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneE164,
    contactType: "customer service",
    areaServed: "US-GA",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
