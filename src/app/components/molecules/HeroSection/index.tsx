import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from '../../atoms/icons';

const FACTS = [
  { k: 'Based', v: 'Madrid, ES' },
  { k: 'Now', v: 'MyTraffic' },
  { k: 'Studied', v: 'CS @ UC3M' },
] as const;

export default function HeroSection() {
  return (
    <section
      id="intro"
      className="relative flex min-h-[calc(100vh-120px)] flex-col justify-center pt-10"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1fr_1fr] md:gap-8">
        {/* Left: name */}
        <div className="text-center md:text-left">
          <h1 className="font-display text-text text-[clamp(28px,3.4vw,52px)] leading-[0.95] font-light tracking-[-0.03em]">
            Rosa Reyes
          </h1>
          <p className="text-accent mt-3 text-[clamp(16px,1.8vw,22px)] font-normal">
            Software Engineer.
          </p>
        </div>

        {/* Center: memoji */}
        <div className="mx-auto flex w-full max-w-80 items-center justify-center">
          <Image
            src="/memoji-1.png"
            alt="Rosa Reyes"
            width={420}
            height={420}
            className="h-auto w-full max-w-85"
            priority
          />
        </div>

        {/* Right: intro */}
        <div className="text-center md:text-left">
          <p className="text-dim text-[15px] leading-[1.6] md:text-[16px]">
            I build products end-to-end: interfaces, systems, and everything in
            between. Now building Gini,{' '}
            <span className="border-accent text-text border-b border-dashed pb-px">
              MyTraffic
            </span>
            &apos;s location-intelligence AI, after four years at Stylib and a
            CS degree at{' '}
            <span className="border-accent text-text border-b border-dashed pb-px">
              UC3M
            </span>
            .
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
            <a
              href="#work"
              className="text-text border-line2 inline-flex items-center gap-2 border-b pb-1 text-[13px] no-underline"
            >
              See my work <ArrowRight className="text-accent" />
            </a>
            <a
              href="/rosa-reyes-eng.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text border-line2 inline-flex items-center gap-2 border-b pb-1 text-[13px] no-underline"
            >
              Download CV <ArrowUpRight className="text-accent" />
            </a>
          </div>
        </div>
      </div>

      {/* Fact strip */}
      <div className="border-line mt-10 grid grid-cols-3 gap-4 border-t pt-7 text-center md:mt-16 md:gap-6">
        {FACTS.map((f) => (
          <div key={f.k}>
            <div className="text-faint mb-2 font-mono text-[9px] tracking-[0.18em] uppercase md:text-[10px]">
              {f.k}
            </div>
            <div className="text-text text-[13px] md:text-[14px]">{f.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
