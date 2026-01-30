// Dynamic sitemap for Aerial Bir Travel
// This generates an XML sitemap automatically for search engines

import { services, destinations } from './data/homeData';

export default function sitemap() {
  const baseUrl = 'https://aerialbirtravel.com';
  const currentDate = new Date().toISOString();

  // Main static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#destinations`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Dynamic service pages (for future individual service pages)
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Dynamic destination pages (for future individual destination pages)
  const destinationPages = destinations.map((destination) => ({
    url: `${baseUrl}/destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Combine all pages
  return [
    ...staticPages,
    // Uncomment when you create individual service/destination pages
    // ...servicePages,
    // ...destinationPages,
  ];
}

