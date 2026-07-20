import { MetadataRoute } from 'next';
import { getSiteUrl } from '@shared/config/url';

const URL = getSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // The editor and preview are the app, not content — kept out of the index.
      disallow: ['/studio', '/preview'],
    },
    sitemap: `${URL}/sitemap.xml`,
    host: URL,
  };
}
