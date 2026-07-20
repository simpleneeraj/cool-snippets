import { MetadataRoute } from 'next';
import { getSiteUrl } from '@shared/config/url';

const URL = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Marketing pages only — the studio and preview are the app (noindexed), so
  // they are deliberately absent here.
  return [
    { url: URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${URL}/features`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL}/about-us`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${URL}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
