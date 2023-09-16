import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-dark-bg': "url('/hero-dark-bg.png')",
        'hero-light-bg': "url('/hero-light-bg.png')",
      },
      colors: {
        dimWhite: '#e2e8f0',
        purple: {
          100: '#ECC5F5',
          150: '#8D6B94',
          200: '#64336F',
          300: '#3D044A',
          400: '#22022A',
          500: '#1E0025',
        },
      },
    },
  },
  plugins: [],
};
export default config;
