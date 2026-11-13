import SectionHeader from '../../../components/atoms/SectionHeader';
import AboutStory from './AboutStory';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-25 py-16 md:py-25">
      <SectionHeader label="01 / About" title="About" />
      <AboutStory />
    </section>
  );
}
