import {
  Poppins,
  Playfair_Display,
  Montserrat,
  Pacifico,
} from 'next/font/google';

export const poppings = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
});

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '400', '600', '700'],
});

export const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });
