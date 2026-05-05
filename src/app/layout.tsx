import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { fraunces, geist, mono } from './fonts';

export const metadata: Metadata = {
  title: 'Rosa Reyes - Software Engineer',
  description:
    'Software engineer in Madrid. Building products end-to-end: backend systems, APIs, and the interfaces in between.',
  metadataBase: new URL('https://www.rosareyes.dev'),
  openGraph: {
    title: 'Rosa Reyes - Software Engineer',
    description:
      'Software engineer in Madrid. Building products end-to-end: backend systems, APIs, and the interfaces in between.',
    url: 'https://www.rosareyes.dev',
    siteName: 'Rosa Reyes',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Rosa Reyes - Software Engineer',
    description:
      'Software engineer in Madrid. Building products end-to-end: backend systems, APIs, and the interfaces in between.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
