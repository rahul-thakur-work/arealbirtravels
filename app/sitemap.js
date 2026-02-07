import { destinations } from './data/homeData';

export default function sitemap() {
  const baseUrl = 'https://aerialbirtravel.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Dynamic destination pages
  const destinationPages = destinations.map((destination) => ({
    url: `${baseUrl}/explore/${destination.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...destinationPages];
}
