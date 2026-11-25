import { Navbar } from './components/molecules/Navbar/Navbar';
import BgGrain from './components/molecules/BgGrain';
import HeroSection from './components/molecules/HeroSection';
import AboutSection from './components/molecules/AboutSection';
import WorkSection from './components/molecules/WorkSection';
import ProjectCard from './components/molecules/Cards/Project';
import StackSection from './components/molecules/StackSection';
import ContactSection from './components/molecules/ContactSection';
import Footer from './components/molecules/Footer';
import SectionHeader from './components/atoms/SectionHeader';
import { projects } from '../../data/profile';
import { SectionTracker } from './components/atoms/SectionTracker';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

// Structured data so search engines know who the site is about
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rosa Reyes',
  url: 'https://www.rosareyes.dev',
  image: 'https://www.rosareyes.dev/memoji-1.png',
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'MyTraffic',
    url: 'https://www.mytraffic.io/en',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Carlos III de Madrid',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  knowsAbout: [
    'Software engineering',
    'Full-stack development',
    'LLMs',
    'AI agents',
    'Semantic search',
  ],
  sameAs: [
    'https://www.linkedin.com/in/rosaareyesc/',
    'https://github.com/rosareyes',
  ],
};

export default function Home() {
  return (
    <main className="bg-ink relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SectionTracker />
      <BgGrain />
      <Navbar />

      <div className="relative z-2 mx-auto max-w-295 px-5 pt-30 md:px-20 lg:pr-36">
        <HeroSection />
        <AboutSection />

        <section id="work" className="scroll-mt-25 py-16 md:py-25">
          <WorkSection />
        </section>

        <section id="projects" className="scroll-mt-25 py-16 md:py-25">
          <SectionHeader label="03 / Projects" title="Projects" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.title}
                index={i}
                title={p.title}
                kind={p.kind}
                year={p.year}
                description={p.description}
                tags={p.tags}
                url={p.url}
                github={p.github}
                image={p.image}
              />
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-25 py-16 md:py-25">
          <StackSection />
        </section>

        <section
          id="contact"
          className="min-h-[70vh] scroll-mt-25 py-16 md:py-25"
        >
          <ContactSection />
        </section>

        <Footer />
      </div>
    </main>
  );
}
