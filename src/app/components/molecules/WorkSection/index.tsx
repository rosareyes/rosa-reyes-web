'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { jobs } from '../../../../../data/profile';
import type { Job } from '../../../../types';
import SectionHeader from '../../atoms/SectionHeader';

function RoleRow({ item, open, onClick }: { item: Job; open: boolean; onClick: () => void }) {
  return (
    <div
      className="border-t border-line py-6 cursor-pointer"
      onClick={onClick}
    >
      {/* Desktop: 3-col grid. Mobile: 2-col (content + toggle) with date inside content */}
      <div className="grid grid-cols-[1fr_auto] md:grid-cols-[160px_1fr_auto] gap-4 md:gap-8 items-baseline">
        {/* Date column — desktop only */}
        <div className="hidden md:block font-mono text-[11px] tracking-[0.1em] text-faint">
          {item.range}
        </div>

        <div>
          {/* Date — mobile only, shown above title */}
          <div className="block md:hidden font-mono text-[10px] tracking-[0.1em] text-faint mb-1.5">
            {item.range}
          </div>
          <h3 className="font-display font-normal text-[22px] md:text-[26px] tracking-[-0.01em] text-text">
            {item.role}{' '}
            <span className="text-faint">at</span>{' '}
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-accent no-underline border-b border-dashed border-accent-dim"
              >
                {item.co}
              </a>
            ) : (
              <span className="text-accent">{item.co}</span>
            )}
          </h3>
          <div className="text-[13px] text-dim mt-1">{item.loc}</div>
        </div>

        <button
          aria-label={open ? `Collapse ${item.role}` : `Expand ${item.role}`}
          aria-expanded={open}
          className={clsx(
            'font-mono text-[18px] text-faint transition-transform duration-200',
            'bg-transparent border-none cursor-pointer p-0 self-start mt-1',
            open && 'rotate-45',
          )}
        >
          +
        </button>
      </div>

      <div
        className={clsx(
          'overflow-hidden transition-[max-height,opacity] duration-[360ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
          open ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="mt-6 ml-0 md:ml-48 flex flex-col gap-3 text-[14px] md:text-[15px] leading-[1.65] text-dim">
          {item.bullets.map((b, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-accent font-mono text-[12px] mt-1 shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{b}</span>
            </div>
          ))}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.skills.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] text-dim px-2.5 py-[3px] rounded border border-line bg-white/[0.02]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <SectionHeader
        label="02 / Work"
        title={<>Where I&rsquo;ve <em className="text-accent">done the work.</em></>}
        kicker="About five years across product teams, freelance, and internal tooling. Click any role to expand."
      />
      <div className="flex flex-col">
        {jobs.map((job, i) => (
          <RoleRow
            key={job.co}
            item={job}
            open={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          />
        ))}
        <div className="border-t border-line" />
      </div>
      <a
        href="/rosa-reyes-eng.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-8 text-text no-underline text-[13px] border-b border-line2 pb-1"
      >
        Download full CV <span className="text-accent">↗</span>
      </a>
    </div>
  );
}
