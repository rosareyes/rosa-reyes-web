import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  lightMode: ['class', '[data-mode="light"]'],
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
        blue: {
          50: '#e6f1ff',
          100: '#ccd6f6',
          150: '#a8b2d1',
          200: '#8892b0',
          300: '#233554',
          400: '#112240',
          450: '#142c50',
          500: '#0a192f',
        },
        green: {
          50: '#ddf2ec',
          55: '#64ffda',
          100: '#8ED6C2',
          200: '#36C39C',
          300: '#007D5A',
          400: '#00553D',
          450: '#025a4e',
          500: '#001E16',
          600: '#19362e',
        },
        purple: {
          100: '#C79FBE',
        },
        orange: {
          50: '#ffa57d',
          100: '#ff7d45',
        },
      },
    },
  },
  plugins: [],
};
export default config;
