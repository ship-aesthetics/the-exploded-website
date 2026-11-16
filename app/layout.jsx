import './globals.css';
import { site } from '@/site.config';

const title = `${site.name} | What a website is made of`;
const description = 'ship.aesthetics designs and builds launch pages, product sites and scroll stories for startups. Scroll to take one apart: grid, images, type, buttons, motion and code.';

export const metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title,
  description,
  openGraph: { title, description, type: 'website', images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'A web page pulled apart into six floating layers' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/og.jpg'] },
};

export const viewport = { themeColor: '#e6e7ea', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400..700&family=Geist+Mono:wght@400..600&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
