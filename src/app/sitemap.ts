import { MetadataRoute } from 'next';

const BASE = 'https://www.rosareyes.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE}/projects/semantic-search`,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE}/projects/vanrays-hub`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
