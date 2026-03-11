
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Script from 'next/script';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Driving School West London | Manual Lessons | TM Drive",
  description: "Get expert manual driving lessons in West London. High pass rates and affordable tuition in Notting Hill & Chelsea. Book your first driving lesson now!",
  verification: {
    google: "bAHx5SsNFJFRdSCMlB7VrzS7qxIyCaTnkPQXUi-j264",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TM Drive",
    "alternateName": "TM Driving School",
    "url": "https://www.tmdriveschool.co.uk/",
    "telephone": "+44 7949 488211",
    "email": "turonmiah123@aol.com",
    "description": "TM Drive offers high-standard manual driving lessons in West London.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "West London",
      "addressCountry": "GB"
    },
    "areaServed": [
      { "@type": "City", "name": "West London" },
      { "@type": "City", "name": "Central London" },
      { "@type": "City", "name": "South West London" },
      { "@type": "City", "name": "North West London" }
    ],
    "employee": {
      "@type": "Person",
      "name": "Turon",
      "jobTitle": "DVSA Approved Driving Instructor"
    }
  };

  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="olVj7CcfMwdkjIF6jsG+cA" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <Header title={"Usman"}/> */}

        {children}

        {/* <Footer/> */}
      </body>
    </html>
  );
}