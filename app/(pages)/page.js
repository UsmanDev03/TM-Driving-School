import HeroSlider from "../components/sections/HeroSlider";
import IntroSection from "../components/sections/IntroSection";

export const metadata = {
  title: "TM Drive School | Manual Driving Lessons in West London",
  description: "Learn to drive with confidence at TM Drive School. Expert manual driving lessons in London, high first-time pass rates, and affordable pricing. Book your lesson today",
  alternates: {
    canonical: "https://www.tmdriveschool.co.uk/",
  },
};

export default function Home() {
  // Only Service Schema - specific to home page
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Manual Driving Lessons",
    "provider": {
      "@type": "DrivingSchool",
      "name": "TM Drive School",
      "@id": "https://www.tmdriveschool.co.uk/#organization",
      "url": "https://www.tmdriveschool.co.uk/"
    },
    "areaServed": {
      "@type": "City",
      "name": "West London",
      "containedInPlace": {
        "@type": "City",
        "name": "London",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Kingdom"
        }
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Driving Tuition Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "position": 1,
          "itemOffered": { 
            "@type": "Service", 
            "name": "Standard Manual Lessons",
            "description": "Pay as you go manual driving lessons in West London"
          }
        },
        {
          "@type": "Offer",
          "position": 2,
          "itemOffered": { 
            "@type": "Service", 
            "name": "Intensive Driving Courses",
            "description": "Fast-track your driving test with our intensive courses"
          }
        },
        {
          "@type": "Offer",
          "position": 3,
          "itemOffered": { 
            "@type": "Service", 
            "name": "Pass Plus Training",
            "description": "Advanced training for new drivers to reduce insurance"
          }
        }
      ]
    }
  };

  return (
    <>
      <HeroSlider />
      <IntroSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}