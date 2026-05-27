import SectionHeader from '../../../components/atoms/SectionHeader';

const TAGS = [
  'Live music',
  'Video games',
  'Bouldering',
  'Reading',
  'Coffee',
  'Gym',
] as const;

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-25 py-16 md:py-25">
      <SectionHeader
        label="01 / About"
        title={
          <>
            A bit about <em className="text-accent not-italic">who I am.</em>
          </>
        }
      />
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div className="text-dim text-[16px] leading-[1.75] md:text-[17px]">
          <p className="mb-6">
            I&apos;m Rosa, a software engineer based in{' '}
            <strong className="text-text">Madrid</strong>, with a really loud
            keyboard and a deep cup of coffee. I&apos;m into the engineering
            side of things: how systems fit together, why they break, and what
            makes them feel good to use.
          </p>
          <p className="mb-6">
            I got into programming as a kid because I wanted more out of The
            Sims. Cracking games turned into fixing missing DLLs and mystery
            Windows errors for everyone I knew, which turned into torrenting
            software, which turned into taking online courses and building
            websites for anyone who&apos;d let me. I was self-taught before I
            even knew that was a thing.
          </p>
          <p>
            I started university in Venezuela, ended up finishing my{' '}
            <strong className="text-text">
              Computer Science and Engineering
            </strong>{' '}
            degree at <strong className="text-text">UC3M </strong> in Madrid and
            stayed. Off-screen: bouldering when my hands let me, concerts
            whenever I can, video games, and a stack of books I&apos;m
            definitely going to finish this year.
          </p>
        </div>

        <div>
          <div className="text-faint mb-4.5 font-mono text-[10px] tracking-[0.2em] uppercase">
            Currently into
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="border-line2 text-text inline-flex items-center rounded-full border bg-white/[0.02] px-3.5 py-2 text-[13px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
