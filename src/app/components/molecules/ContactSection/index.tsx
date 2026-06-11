'use client';

import { clsx } from 'clsx';
import SectionHeader from '../../atoms/SectionHeader';
import { useAnalytics } from '@/app/hooks/useAnalytics';

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
  const { track } = useAnalytics();
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('link-click', { label: k.toLowerCase() })}
      className={clsx(
        'group flex items-center justify-between border-t py-5 no-underline',
        last && 'border-line border-b',
      )}
    >
      <span className="text-faint group-hover:text-accent font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-[180ms]">
        {k}
      </span>
      <span className="text-dim group-hover:text-text text-[14px] transition-colors duration-[180ms] md:text-[16px]">
        {v}
      </span>
    </a>
  );
}

export default function ContactSection() {
  const { track } = useAnalytics();
  return (
    <div>
      <SectionHeader label="05 / Contact" title="Contact" />
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div>
          <p className="text-dim mb-8 text-[16px] leading-[1.6] md:text-[19px]">
            Open to full-time roles and freelance. Email is the best way to
            reach me, and I read everything.
          </p>
          <a
            href="mailto:hello@rosareyes.dev"
            onClick={() => track('email-click')}
            className="font-display text-text border-line2 hover:border-accent hover:text-accent inline-block border-b pb-1 text-[clamp(18px,2.4vw,24px)] tracking-[-0.01em] no-underline transition-colors duration-200"
          >
            hello@rosareyes.dev
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
