'use client';

import { clsx } from 'clsx';
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import { useActiveSection } from '../../../hooks/useActiveSection';

const NAV = [
  { id: 'intro',    label: 'Index',    n: '00' },
  { id: 'about',    label: 'About',    n: '01' },
  { id: 'work',     label: 'Work',     n: '02' },
  { id: 'projects', label: 'Projects', n: '03' },
  { id: 'stack',    label: 'Stack',    n: '04' },
  { id: 'contact',  label: 'Contact',  n: '05' },
] as const;

const SECTION_IDS = NAV.map((n) => n.id);

export function Navbar() {
  const scrolled = useScrollProgress();
  const active   = useActiveSection(SECTION_IDS);

  return (
    <>
      {/* Fixed top header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[14px] bg-[rgba(11,13,16,0.7)] border-b border-line">
        <div className="max-w-[1180px] mx-auto px-5 md:px-20 py-4.5 flex items-center justify-between font-mono text-[12px] tracking-[0.04em]">
          {/* Left */}
          <div className="flex items-center gap-3.5">
            <div className="w-7 h-7 rounded-lg shrink-0 grid place-items-center bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-second))] font-display font-semibold text-base italic text-ink">
              r
            </div>
            <span className="text-dim">Rosa Reyes</span>
            <span className="hidden md:inline text-faint">·</span>
            <span className="hidden md:inline text-faint">Software Engineer · Madrid</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-white/[0.02] text-[11px] text-dim">
              <span className="w-[7px] h-[7px] rounded-full shrink-0 bg-accent shadow-[0_0_0_4px_oklch(0.74_0.18_45/0.22)] animate-[pulse_2s_ease-in-out_infinite]" />
              Open to new roles
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-text border border-line2 px-3.5 py-2 rounded-full bg-white/[0.02] font-mono text-[11px] tracking-[0.06em] uppercase no-underline"
            >
              Get in touch <span className="text-accent">→</span>
            </a>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute left-0 -bottom-px h-px bg-accent transition-[width] duration-[60ms] linear"
          style={{ width: `${scrolled * 100}%` }}
        />
      </header>

      {/* Right-rail dot nav — desktop only */}
      <nav
        aria-label="Section navigation"
        className="hidden md:flex fixed top-1/2 right-5 -translate-y-1/2 z-40 flex-col gap-1"
      >
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-label={n.label}
              className={clsx(
                'flex items-center justify-end lg:justify-start no-underline',
                'py-1.5 lg:py-2 lg:px-1 lg:gap-2.5',
                'font-mono text-[11px] tracking-[0.08em] transition-colors duration-200',
                on ? 'text-text' : 'text-faint',
              )}
            >
              <span className={clsx('hidden lg:inline-block min-w-4.5', !on && 'opacity-50')}>
                {n.n}
              </span>
              <span
                className={clsx(
                  'block h-px shrink-0 transition-[width,background-color] duration-[250ms]',
                  on
                    ? 'w-6 lg:w-7 bg-accent'
                    : 'w-3 lg:w-3.5 bg-faint',
                )}
              />
              <span className={clsx('hidden lg:inline uppercase', on ? 'font-semibold' : 'font-normal')}>
                {n.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
