import type { Job, Project } from '../src/types';

export const jobs: Job[] = [
  {
    role: 'Software Engineer',
    co: 'Stylib',
    url: 'https://stylib.com/',
    range: 'May 2022 to Apr 2026 · 4 yrs',
    loc: 'London, UK · Remote · Part-time',
    bullets: [
      'Delivered features end-to-end across the stack (React/TypeScript frontends and FastAPI + PostgreSQL backends), including a social like system built from API design to UI.',
      'Architected Stylib HUB, a product catalog management platform for suppliers: React/TypeScript/Redux frontend with AWS-backed infrastructure for multi-channel data distribution.',
      'Built a multi-agent backend system for semantic search using an Entity–Filter–Validator pipeline to transform natural language queries into structured filters.',
      'Implemented testing and CI/CD pipelines with Jest, Cypress, and GitHub Actions.',
    ],
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'DynamoDB',
      'AWS',
      'Jest',
      'Cypress',
      'GitHub Actions',
    ],
  },
  {
    role: 'Web Developer',
    co: 'Freelance',
    url: 'https://www.upwork.com/freelancers/~01bcf3b51bb38b47a8',
    range: 'Mar 2020 to May 2022 · 2 yrs',
    loc: 'Madrid, ES · Remote',
    bullets: [
      'Delivered 15+ web applications with REST API integrations, focusing on data flow, validation, and error handling across client-server interactions.',
      'Built React/TypeScript applications with structured state management and production-ready architecture.',
      'Developed backend integrations using Node.js and Express for API handling and server-side logic.',
      'Maintained a 5/5 client rating for code quality, reliability, and communication.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'REST APIs'],
  },
  {
    role: 'IT Technician, Systems & Automation',
    co: 'Vanrays',
    url: 'https://www.vanrays.com/',
    range: 'Oct 2019 to Sep 2021 · 2 yrs',
    loc: 'Madrid, ES · Part-time',
    bullets: [
      'Led development of an internal booking system, coordinating 3+ freelancers and contributing to frontend and backend implementation using React and Node.js.',
      'Automated booking and contract workflows, reducing manual effort by 80% and improving operational efficiency.',
      'Improved system reliability through data handling and process automation solutions.',
    ],
    skills: ['React', 'Node.js', 'JavaScript', 'Process Automation'],
  },
];

export const projects: Project[] = [
  {
    title: 'Semantic Search Engine',
    kind: 'Bachelor thesis',
    year: '2026',
    description:
      'My CS bachelor thesis, built in collaboration with Stylib. A multi AI agent system that turns natural language into structured product searches using an Entity-Filter-Validator pipeline. Makes finding architectural products actually work.',
    tags: ['Python', 'FastAPI', 'NLP', 'LLMs', 'Pydantic AI'],
    github: '',
    url: '/projects/semantic-search',
  },
  {
    title: 'Stylib Visual Search Widget',
    kind: 'Work',
    year: '2024',
    description:
      'Semantic product search widgets for Stylib. Users upload a photo of what they need and get matched to real architectural products. Built the full frontend integration.',
    tags: ['React', 'TypeScript', 'Context API'],
    github: '',
    url: 'https://stylib.com/product-search-engine-for-architectural-products/',
    image: '/widget.gif',
  },
  {
    title: 'Stylib Product Showcase',
    kind: 'Work',
    year: '2023',
    description:
      'Frontend architecture for an interactive product showcase built around design specifications. Focused on performance and making complex product data feel effortless to browse.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Zustand', 'DynamoDB'],
    github: '',
    url: 'https://stylib.com/interactive-product-showcase-for-design-specifications/',
    image: '/showcase.gif',
  },
  {
    title: 'Stylib HUB',
    kind: 'Work',
    year: '2025',
    description:
      'Product catalog management dashboard for architectural material suppliers. A centralised hub to consolidate, manage, and distribute product data, images, and documents across channels, keeping every catalog accurate and up to date.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'AWS', 'Redux', 'Tailwind'],
    github: '',
    url: 'https://stylib.com/product-catalog-management-software/',
    image: '/hub.png',
  },
  {
    title: 'Secure Messaging App',
    kind: 'University',
    year: '2024',
    description:
      'End-to-end encrypted chat built for a cryptography course. AES-GCM for messages, RSA for key exchange, digital signatures, and a full PKI for user registration and cert management.',
    tags: ['Python', 'AES-GCM', 'RSA', 'OpenSSL'],
    github: 'https://github.com/rosareyes/cryptography-project/',
    url: '/projects/cryptography',
    image: '',
  },
  {
    title: 'Rosa Reyes Web',
    kind: 'Personal',
    year: '2025',
    description:
      'This site, built and rebuilt as a design and engineering playground. Currently on its third version.',
    tags: ['Next.js', 'Tailwind', 'Vercel', 'Claude'],
    github: 'https://github.com/rosareyes/rosa-reyes-web',
    url: '/',
  },
];
