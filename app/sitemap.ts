import type { MetadataRoute } from 'next';
import { treatmentSeo } from '../data/treatmentSeo';
import { siteConfig } from '../data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, '');

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const treatmentRoutes: MetadataRoute.Sitemap = Object.keys(treatmentSeo).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}

