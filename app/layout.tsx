import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Elevate Media",
  "url": "https://elev8temedia.com",
  "logo": "https://elev8temedia.com/assets/logo.png",
  "foundingDate": "2023",
  "description": "Elevate Media is a marketing agency helping brands grow with paid ads, CRO, and web development. Take your business to the next level with us.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "450 Lexington Ave, Suite 1502",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10170",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-332-555-8493",
    "contactType": "customer service"
  },
  "service": [
    {
      "@type": "Service",
      "name": "Paid Advertising",
      "description": "Expert ad campaigns across Google, Meta, and more."
    },
    {
      "@type": "Service",
      "name": "Branding & CRO",
      "description": "We optimize brands for conversions and growth."
    },
    {
      "@type": "Service",
      "name": "Website Development",
      "description": "Custom Shopify and website builds."
    }
  ]
}


export const metadata: Metadata = {
  title: "Elevate Media | Full-Stack Marketing & Business Scaling",
  description: "Elevate Media is a marketing agency helping brands grow with paid ads, CRO, and web development. Take your business to the next level with us.",
  keywords: "marketing agency, paid ads, branding, CRO optimization, website development, business growth",
  authors: [{ name: "Elevate Media" }],
  openGraph: {
    title: "Elevate Media | Full-Stack Marketing Experts",
    description: "Scaling brands through paid marketing, CRO, website dev, and business strategy.",
    images: { url: "https://elevatemedia.com/assets/og-image.jpg" },
    url: "https://elev8temedia.com",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="schemaMarkup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
