import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { fraunces, geist, mono } from './fonts';

export const metadata: Metadata = {
  title: 'Rosa Reyes - Software Engineer',
  description:
    'Software engineer in Madrid. Building products end-to-end — backend systems, APIs, and the interfaces in between.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${mono.variable}`}
    >
      <body>
        <Script
          src="/stats/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
