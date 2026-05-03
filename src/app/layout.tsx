import './globals.css';
import type { Metadata } from 'next';
import { fraunces, geist, mono } from './fonts';

export const metadata: Metadata = {
  title: 'Rosa Reyes · Software Engineer',
  description:
    'Software engineer in Madrid. Frontend, design systems, and the interfaces in between.',
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
      <body>{children}</body>
    </html>
  );
}
