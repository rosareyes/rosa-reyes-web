import SectionHeader from '../../../components/atoms/SectionHeader';

const TAGS = ['Live music', 'Video games', 'Bouldering', 'Reading', 'Coffee', 'Gym'] as const;

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-25 py-16 md:py-25">
      <SectionHeader
        label="01 / About"
        title={<>A bit about <em className="text-accent">who I am.</em></>}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 md:gap-20 items-start">
        <div className="text-[16px] md:text-[17px] leading-[1.75] text-dim">
          <p className="mb-6">
            I&apos;m Rosa, a software engineer based in{' '}
            <strong className="text-text">Madrid</strong>, with a really loud keyboard and a deep
            cup of coffee. I&apos;m into the engineering side of things: how systems fit together, why
            they break, and what makes them feel good to use.
          </p>
          <p className="mb-6">
            I got into programming as a kid because I wanted more out of The Sims. What started as
            cracking games for me and my friends turned into being the household tech support:
            fixing missing DLLs, mystery Windows errors, the works. Somewhere between rebooting
            routers and rewriting save files, I figured out this was what I wanted to do for real.
          </p>
          <p>
            I studied{' '}
            <strong className="text-text">Computer Science and Engineering</strong> at{' '}
            <strong className="text-text">UC3M</strong>, and I write code that ships to actual
            humans. Off-screen: bouldering when my hands let me, music concerts whenever I can,
            video games, and a stack of books I&apos;m definitely going to finish this year.
          </p>
        </div>

        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-faint mb-4.5">
            Currently into
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span
                key={t}
                className="inline-flex items-center px-3.5 py-2 rounded-full border border-line2 bg-white/[0.02] text-[13px] text-text"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Now Playing card */}
          <div className="mt-8 p-4.5 border border-line rounded-3.5 bg-white/[0.02] flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-lg shrink-0 bg-[linear-gradient(135deg,var(--color-accent-second),var(--color-accent))]" />
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-accent animate-[pulse_1.5s_ease-in-out_infinite]" />
                Now playing
              </div>
              <div className="text-[14px] text-text font-medium">Dog Days Are Over</div>
              <div className="text-[12px] text-dim">Florence + the Machine, Lungs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
