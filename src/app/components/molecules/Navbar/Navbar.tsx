'use client';

import { clsx } from 'clsx';
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { ArrowRight } from '../../atoms/icons';

export type NavSection = { id: string; label: string; n: string };

const DEFAULT_NAV: NavSection[] = [
  { id: 'intro', label: 'Index', n: '00' },
  { id: 'about', label: 'About', n: '01' },
  { id: 'work', label: 'Work', n: '02' },
  { id: 'projects', label: 'Projects', n: '03' },
  { id: 'stack', label: 'Stack', n: '04' },
  { id: 'contact', label: 'Contact', n: '05' },
];

const DEFAULT_IDS = DEFAULT_NAV.map((n) => n.id);

export function Navbar({ sections }: { sections?: NavSection[] }) {
  const nav = sections ?? DEFAULT_NAV;
  const ids = sections ? sections.map((n) => n.id) : DEFAULT_IDS;

  const scrolled = useScrollProgress();
  const active = useActiveSection(ids);

  return (
    <>
      {/* Fixed top header */}
      <header className="border-line fixed top-0 right-0 left-0 z-50 border-b bg-[rgba(11,13,16,0.7)] backdrop-blur-[14px]">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-4.5 font-mono text-[12px] tracking-[0.04em] md:px-20">
          {/* Left */}
          <div className="flex items-center gap-3.5">
            <div className="bg-brand-gradient font-display text-ink grid h-7 w-7 shrink-0 place-items-center rounded-lg text-base font-semibold italic">
              r
            </div>
            <span className="text-dim">Rosa Reyes</span>
            <span className="text-faint hidden md:inline">·</span>
            <span className="text-faint hidden md:inline">
              Software Engineer · Madrid
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="border-line text-dim hidden items-center gap-2 rounded-full border bg-white/[0.02] px-3 py-1.5 text-[11px] md:inline-flex">
              <span className="bg-accent h-1.75 w-1.75 shrink-0 animate-[pulse_2s_ease-in-out_infinite] rounded-full shadow-[0_0_0_4px_oklch(0.74_0.18_45/0.22)]" />
              Open to new roles
            </span>
            <a
              href="#contact"
              className="text-text border-line2 inline-flex items-center gap-1.5 rounded-full border bg-white/[0.02] px-3.5 py-2 font-mono text-[11px] tracking-[0.06em] uppercase no-underline"
            >
              Get in touch <ArrowRight className="text-accent" />
            </a>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="bg-accent linear absolute -bottom-px left-0 h-px transition-[width] duration-[60ms]"
          style={{ width: `${scrolled * 100}%` }}
        />
      </header>

      {/* Right-rail dot nav — desktop only */}
      {nav.length > 0 && (
        <nav
          aria-label="Section navigation"
          className="fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col gap-1 md:flex"
        >
          {nav.map((n) => {
            const on = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                aria-label={n.label}
                className={clsx(
                  'flex items-center justify-end no-underline lg:justify-start',
                  'py-1.5 lg:gap-2.5 lg:px-1 lg:py-2',
                  'font-mono text-[11px] tracking-[0.08em] transition-colors duration-200',
                  on ? 'text-text' : 'text-faint',
                )}
              >
                <span
                  className={clsx(
                    'hidden min-w-4.5 lg:inline-block',
                    !on && 'opacity-50',
                  )}
                >
                  {n.n}
                </span>
                <span
                  className={clsx(
                    'block h-px shrink-0 transition-[width,background-color] duration-[250ms]',
                    on ? 'bg-accent w-6 lg:w-7' : 'bg-faint w-3 lg:w-3.5',
                  )}
                />
                <span
                  className={clsx(
                    'hidden uppercase lg:inline',
                    on ? 'font-semibold' : 'font-normal',
                  )}
                >
                  {n.label}
                </span>
              </a>
            );
          })}
        </nav>
      )}
    </>
  );
}
