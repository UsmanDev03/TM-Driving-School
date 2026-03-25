import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import HeroSlider from "../components/sections/HeroSlider";
import IntroSection from "../components/sections/IntroSection";

export const metadata = {
  title: "TM Drive School | Manual Driving Lessons in West London",
  description: "...",
  alternates: {
    canonical: "https://www.tmdriveschool.co.uk/",
  },
};
export default function Home() {

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Manual Driving Lessons",
    "provider": {
      "@type": "LocalBusiness",
      "name": "TM Drive School",
      "url": "https://www.tmdriveschool.co.uk/"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Driving Tuition Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Standard Manual Lessons" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Intensive Driving Courses" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Pass Plus Training" }
        }
      ]
    }
  }


  const ratingJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TM Drive School",
    "url": "https://www.tmdriveschool.co.uk/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "84",
      "reviewCount": "84"
    }
  };

  return (
    <>
      {/* Page content */}
      {/* <Header/> */}
      <HeroSlider />
      <IntroSection />
      {/* <Footer/> */}

      {/* JSON-LDs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingJsonLd) }}
      />
    </>
  );
}