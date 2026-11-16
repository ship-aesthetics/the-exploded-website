import { site } from '@/site.config';

export default function robots() {
  return { rules: [{ userAgent: '*', allow: '/' }], ...(site.url ? { sitemap: `${site.url}/sitemap.xml` } : {}) };
}
