import DrivingContent from "./DrivingContent";

export const metadata = {
  title: "Driving Lessons Fulham | Manual Driving Lessons in West London",
  description:
    "Need driving lessons in Fulham? Learn with a calm local instructor. View lesson prices, read pupil reviews, and book your first manual driving lesson.",
};
export default function Page() {
  const fulhamJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TM Drive School Fulham",
    description:
      "Professional manual driving school in Fulham providing expert driving lessons and intensive courses.",
    image:
      "https://www.tmdriveschool.co.uk/wp-content/uploads/2021/03/TM-Drive-School-Logo.png",
    url: "https://www.tmdriveschool.co.uk/driving-lessons-fulham",
    telephone: "+447949488211",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fulham",
      addressRegion: "London",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "City",
      name: "Fulham",
    },
  };

  const fulhamRatingJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TM Drive School",
    url: "https://www.tmdriveschool.co.uk/driving-lessons-fulham",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "85",
    },
  };

  return (
    <>
      <DrivingContent />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fulhamJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fulhamRatingJsonLd) }}
      />
    </>
  );
}
