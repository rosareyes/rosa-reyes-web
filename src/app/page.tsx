import { Navbar }         from './components/molecules/Navbar/Navbar';
import CursorHalo        from './components/atoms/CursorHalo';
import BgGrain           from './components/molecules/BgGrain';
import HeroSection       from './components/molecules/HeroSection';
import AboutSection      from './components/molecules/AboutSection';
import WorkSection       from './components/molecules/WorkSection';
import ProjectCard       from './components/molecules/Cards/Project';
import StackSection      from './components/molecules/StackSection';
import ContactSection    from './components/molecules/ContactSection';
import Footer            from './components/molecules/Footer';
import SectionHeader     from './components/atoms/SectionHeader';
import { projects }      from '../../data/profile';

export default function Home() {
  return (
    <main className="bg-ink min-h-screen relative">
      <CursorHalo />
      <BgGrain />
      <Navbar />

      <div className="max-w-[1180px] mx-auto px-5 md:px-20 pt-30 relative z-[2]">
        <HeroSection />
        <AboutSection />

        <section id="work" className="scroll-mt-25 py-16 md:py-25">
          <WorkSection />
        </section>

        <section id="projects" className="scroll-mt-25 py-16 md:py-25">
          <SectionHeader
            label="03 / Projects"
            title={<>Things I&rsquo;ve made, <em className="text-accent">and care about.</em></>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
              />
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-25 py-16 md:py-25">
          <StackSection />
        </section>

        <section id="contact" className="scroll-mt-25 py-16 md:py-25">
          <ContactSection />
        </section>

        <Footer />
      </div>
    </main>
  );
}
