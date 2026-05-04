'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { jobs } from '../../../../../data/profile';
import { ArrowUpRight } from '../../atoms/icons';
import type { Job } from '../../../../types';
import SectionHeader from '../../atoms/SectionHeader';
import { useAnalytics } from '@/app/hooks/useAnalytics';

function RoleRow({
  item,
  open,
  onClick,
}: {
  item: Job;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-line cursor-pointer border-t py-6" onClick={onClick}>
      {/* Desktop: 3-col grid. Mobile: 2-col (content + toggle) with date inside content */}
      <div className="grid grid-cols-[1fr_auto] items-baseline gap-4 md:grid-cols-[160px_1fr_auto] md:gap-8">
        {/* Date column — desktop only */}
        <div className="text-faint hidden font-mono text-[11px] tracking-widest md:block">
          {item.range}
        </div>

        <div>
          {/* Date — mobile only, shown above title */}
          <div className="text-faint mb-1.5 block font-mono text-[10px] tracking-widest md:hidden">
            {item.range}
          </div>
          <h3 className="font-display text-text text-[22px] font-normal tracking-[-0.01em] md:text-[26px]">
            {item.co === 'Freelance' ? (
              <>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent border-accent-dim border-b border-dashed no-underline"
                  >
                    {item.co}
                  </a>
                ) : (
                  <span className="text-accent">{item.co}</span>
                )}{' '}
                {item.role}
              </>
            ) : (
              <>
                {item.role} <span className="text-faint">at</span>{' '}
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent border-accent-dim border-b border-dashed no-underline"
                  >
                    {item.co}
                  </a>
                ) : (
                  <span className="text-accent">{item.co}</span>
                )}
              </>
            )}
          </h3>
          <div className="text-dim mt-1 text-[13px]">{item.loc}</div>
        </div>

        <button
          aria-label={open ? `Collapse ${item.role}` : `Expand ${item.role}`}
          aria-expanded={open}
          className={clsx(
            'text-faint font-mono text-[18px] transition-transform duration-200',
            'mt-1 cursor-pointer self-start border-none bg-transparent p-0',
            open && 'rotate-45',
          )}
        >
          +
        </button>
      </div>

      <div
        className={clsx(
          'duration-360ms overflow-hidden transition-[max-height,opacity] ease-[cubic-bezier(0.2,0.8,0.2,1)]',
          open ? 'max-h-150 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="text-dim mt-6 ml-0 flex flex-col gap-3 text-[14px] leading-[1.65] md:ml-48 md:text-[15px]">
          {item.bullets.map((b, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-accent mt-1 shrink-0 font-mono text-[12px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{b}</span>
            </div>
          ))}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.skills.map((s) => (
              <span
                key={s}
                className="text-dim border-line rounded border bg-white/2 px-2.5 py-[3px] font-mono text-[11px]"
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
  const { track } = useAnalytics();

  return (
    <div>
      <SectionHeader
        label="02 / Work"
        title={
          <>
            Where I&rsquo;ve <em className="text-accent">done the work.</em>
          </>
        }
        kicker="Five years. Product work, freelance, and a bit of everything. Click to expand."
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
        <div className="border-line border-t" />
      </div>
      <a
        href="/rosa-reyes-eng.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('cv-download')}
        className="text-text border-line2 mt-8 inline-flex items-center gap-2 border-b pb-1 text-[13px] no-underline"
      >
        Download full CV <ArrowUpRight className="text-accent" />
      </a>
    </div>
  );
}
