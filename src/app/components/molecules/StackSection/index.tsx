import { clsx } from 'clsx';
import { STACK } from '../../../../../data/stack';
import SectionHeader from '../../atoms/SectionHeader';

export default function StackSection() {
  const entries = Object.entries(STACK);

  return (
    <div>
      <SectionHeader
        label="04 / Stack"
        title={<>Tools I&apos;ve <em className="text-accent">used.</em></>}
        kicker="Things I've used in real projects."
      />
      {/* Mobile: 2-col grid of individual cards. Desktop: single bordered 5-col container */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-0 md:border md:border-line md:rounded-3.5 md:overflow-hidden">
        {entries.map(([cat, items], i) => (
          <div
            key={cat}
            className={clsx(
              'p-5 md:p-7',
              'border border-line rounded-xl md:border-none md:rounded-none',
              i < 4 && 'md:border-r md:border-line',
              i % 2 === 0 ? 'bg-white/[0.01]' : 'bg-transparent',
            )}
          >
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-accent mb-4 md:mb-4.5">
              {String(i + 1).padStart(2, '0')} {cat}
            </div>
            <div className="flex flex-col gap-2 md:gap-2.5">
              {items.map((it) => (
                <div key={it} className="text-[13px] md:text-[14px] text-text">{it}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
