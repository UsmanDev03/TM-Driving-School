export default function sitemap() {
  const baseUrl = "https://www.tmdriveschool.co.uk";
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/price`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    //  location pages
    { url: `${baseUrl}/driving-lessons-fulham`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/driving-lessons-notting-hill`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/driving-lessons-maida-vale`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/driving-lessons-south-kensington`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
 
 
    
    // Blog Pages
    { url: `${baseUrl}/blog/new-driving-test-rules-2026`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog/a40-westway-roadworks-2026`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/blog/manual-vs-automatic-benefits`, lastModified: now, changeFrequency: "weekly", priority: 0.7 }, 
    { url: `${baseUrl}/blog/blog/how-many-driving-lessons-required`, lastModified: now, changeFrequency: "weekly", priority: 0.7 }, 
 
  ];
} 