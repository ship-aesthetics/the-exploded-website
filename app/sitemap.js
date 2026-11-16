import { site } from '@/site.config';

export default function sitemap() {
  return site.url ? [{ url: site.url, changeFrequency: 'monthly', priority: 1 }] : [];
}
