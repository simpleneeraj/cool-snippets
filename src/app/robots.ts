import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/constants/url';

const URL = getSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
