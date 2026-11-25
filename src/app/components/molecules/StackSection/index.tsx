import { clsx } from 'clsx';
import { STACK } from '../../../../../data/stack';
import SectionHeader from '../../atoms/SectionHeader';

export default function StackSection() {
  const entries = Object.entries(STACK);

  return (
    <div>
      <SectionHeader label="04 / Stack" title="Tools" />
      {/* Mobile: 2-col grid of individual cards. Desktop: single bordered 3x2 container */}
      <div className="md:border-line md:rounded-3.5 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-0 md:overflow-hidden md:border">
        {entries.map(([cat, items], i) => (
          <div
            key={cat}
            className={clsx(
              'p-5 md:p-7',
              'border-line rounded-xl border md:rounded-none md:border-none',
              i % 3 !== 2 && 'md:border-line md:border-r',
              i < 3 && 'md:border-line md:border-b',
              i % 2 === 0 ? 'bg-white/[0.01]' : 'bg-transparent',
            )}
          >
            <div className="text-accent mb-4 font-mono text-[10px] tracking-[0.18em] uppercase md:mb-4.5">
              {String(i + 1).padStart(2, '0')} {cat}
            </div>
            <div className="flex flex-col gap-2 md:gap-2.5">
              {items.map((it) => (
                <div key={it} className="text-text text-[13px] md:text-[14px]">
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
