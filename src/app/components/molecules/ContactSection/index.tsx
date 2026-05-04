'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import SectionHeader from '../../atoms/SectionHeader';

const LINKS = [
  { k: 'LinkedIn', v: 'in/rosaareyesc', href: 'https://www.linkedin.com/in/rosaareyesc/' },
  { k: 'GitHub',   v: '@rosareyes',     href: 'https://github.com/rosareyes' },
  { k: 'Upwork',   v: 'rosareyes',      href: 'https://www.upwork.com/freelancers/~01bcf3b51bb38b47a8' },
] as const;

function ContactRow({ k, v, href, last }: { k: string; v: string; href: string; last?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={clsx(
        'flex justify-between items-center py-5 border-t no-underline text-text transition-all duration-200',
        last && 'border-b border-line',
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
          'text-[14px] md:text-[16px] text-text inline-flex items-center gap-2 md:gap-2.5 transition-transform duration-200',
          hover ? '-translate-x-1' : 'translate-x-0',
        )}
      >
        {v}
        <span className={clsx('transition-colors duration-[180ms]', hover ? 'text-accent' : 'text-faint')}>↗</span>
      </span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <div>
      <SectionHeader
        label="05 / Contact"
        title={<>Say <em className="text-accent">hello.</em></>}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-start">
        <div>
          <p className="text-[16px] md:text-[19px] leading-[1.6] text-dim mb-8">
            Open to full-time roles, freelance work, and honest conversations about software.
            Email is the best way to reach me. I read everything and reply to most things.
          </p>
          <a
            href="mailto:hello@rosareyes.dev"
            className="inline-block font-display text-[clamp(22px,4vw,44px)] text-text no-underline border-b border-accent pb-1 tracking-[-0.01em]"
          >
            hello@rosareyes.dev{' '}
            <span className="text-accent font-body">→</span>
          </a>
        </div>

        <div className="flex flex-col">
          {LINKS.map((l, i) => (
            <ContactRow key={l.k} k={l.k} v={l.v} href={l.href} last={i === LINKS.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
