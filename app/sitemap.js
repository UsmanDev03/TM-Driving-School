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
    { url: `${baseUrl}/driving-lessons-fulham`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}