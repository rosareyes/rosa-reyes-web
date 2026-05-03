import { Fraunces, Geist, JetBrains_Mono } from 'next/font/google';

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400'],
  style: ['normal', 'italic'],
});

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
});

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});
