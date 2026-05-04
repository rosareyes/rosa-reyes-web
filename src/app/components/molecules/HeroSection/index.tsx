import Image from 'next/image';

const FACTS = [
  { k: 'Based',    v: 'Madrid, ES' },
  { k: 'Recently', v: '4 yrs @ Stylib' },
  { k: 'Studied',  v: 'CS @ UC3M' },
] as const;

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="relative flex flex-col justify-center min-h-[calc(100vh-120px)] pt-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 md:gap-16 items-center">
        {/* Left: text */}
        <div>
          <h1 className="font-display font-light text-[clamp(40px,8vw,112px)] leading-[0.95] tracking-[-0.035em] text-text">
            Rosa Reyes<br />
            <em className="text-accent font-normal">Software Engineer.</em>
          </h1>
          <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] leading-[1.6] text-dim max-w-135">
            I build products end-to-end: interfaces, systems, and everything in between.
            Four years at{' '}
            <span className="border-b border-dashed border-accent text-text pb-px">Stylib</span>
            , a CS degree at{' '}
            <span className="border-b border-dashed border-accent text-text pb-px">UC3M</span>
            .
          </p>
        </div>

        {/* Right: portrait */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-line2 bg-surface max-w-80 w-full mx-auto md:mx-0 md:max-w-none">
          <Image
            src="/rosa-portrait.jpg"
            alt="Rosa Reyes"
            fill
            className="object-cover"
            style={{ filter: 'saturate(0.95) contrast(1.02)' }}
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(11,13,16,0.7)_100%)]" />
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <span className="font-display italic text-[28px] text-text">Rosa.</span>
            <span className="font-mono text-[9px] tracking-[0.18em] text-dim uppercase">
              Madrid · 2026
            </span>
          </div>
        </div>
      </div>

      {/* Fact strip */}
      <div className="mt-10 md:mt-16 pt-7 border-t border-line grid grid-cols-3 gap-4 md:gap-6">
        {FACTS.map((f) => (
          <div key={f.k}>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-faint mb-2">
              {f.k}
            </div>
            <div className="text-[13px] md:text-[14px] text-text">{f.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
