'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import SectionHeader from '../../atoms/SectionHeader';
import { ArrowRight, ArrowUpRight } from '../../atoms/icons';

const LINKS = [
  {
    k: 'LinkedIn',
    v: 'in/rosaareyesc',
    href: 'https://www.linkedin.com/in/rosaareyesc/',
  },
  { k: 'GitHub', v: '@rosareyes', href: 'https://github.com/rosareyes' },
  {
    k: 'Upwork',
    v: 'rosareyes',
    href: 'https://www.upwork.com/freelancers/~01bcf3b51bb38b47a8',
  },
] as const;

function ContactRow({
  k,
  v,
  href,
  last,
}: {
  k: string;
  v: string;
  href: string;
  last?: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        'text-text flex items-center justify-between border-t py-5 no-underline transition-all duration-200',
        last && 'border-line border-b',
      )}
    >
      <span
        className={clsx(
          'font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-[180ms]',
          hover ? 'text-accent' : 'text-faint',
        )}
      >
        {k}
      </span>
      <span
        className={clsx(
          'text-text inline-flex items-center gap-2 text-[14px] transition-transform duration-200 md:gap-2.5 md:text-[16px]',
          hover ? '-translate-x-1' : 'translate-x-0',
        )}
      >
        {v}
        <ArrowUpRight
          className={clsx(
            'transition-colors duration-[180ms]',
            hover ? 'text-accent' : 'text-faint',
          )}
        />
      </span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <div>
      <SectionHeader
        label="05 / Contact"
        title={
          <>
            Say <em className="text-accent">hello.</em>
          </>
        }
      />
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <p className="text-dim mb-8 text-[16px] leading-[1.6] md:text-[19px]">
            Open to full-time roles and freelance. If you want to talk software
            or work, email is the best way to reach me. I read everything and
            reply to most things.
          </p>
          <a
            href="mailto:hello@rosareyes.dev"
            className="font-display text-text border-accent inline-flex items-center gap-2 border-b pb-1 text-[clamp(22px,4vw,44px)] tracking-[-0.01em] no-underline"
          >
            hello@rosareyes.dev
            <ArrowRight className="text-accent" />
          </a>
        </div>

        <div className="flex flex-col">
          {LINKS.map((l, i) => (
            <ContactRow
              key={l.k}
              k={l.k}
              v={l.v}
              href={l.href}
              last={i === LINKS.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
