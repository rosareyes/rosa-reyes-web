'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import type { Project } from '../../../../../types';
import { ArrowUpRight } from '../../../atoms/icons';
import { useAnalytics } from '@/app/hooks/useAnalytics';

type ProjectCardProps = Omit<Project, 'github'> & {
  index: number;
  github?: string;
};

export default function ProjectCard({
  index,
  title,
  kind,
  year,
  description,
  tags,
  url,
  image,
}: ProjectCardProps) {
  const [hover, setHover] = useState(false);
  const { track } = useAnalytics();
  const href = url || '#';

  return (
    <a
      href={href}
      target={url && !url.startsWith('/') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => track('project-click', { name: title })}
      className={clsx(
        'flex flex-col text-inherit no-underline',
        'rounded-4.5 relative overflow-hidden border p-7',
        'duration-240m min-h-65 transition-all',
        hover ? 'border-line2 -translate-y-0.5' : 'border-line translate-y-0',
        !image && (hover ? 'bg-white/2.5' : 'bg-white/1]'),
      )}
    >
      {/* Background image — CSS background-image works natively with GIFs */}
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : null}

      {/* Dark overlay — lighter on hover so the image is visible */}
      {image ? (
        <div
          className="absolute inset-0 transition-opacity duration-240"
          style={{
            background: hover ? 'rgba(11,13,16,0.65)' : 'rgba(11,13,16,0.82)',
          }}
        />
      ) : null}

      {/* Accent radial — colour wash over the image */}
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 transition-opacity duration-300',
          'bg-[radial-gradient(400px_at_80%_0%,var(--color-accent),transparent_60%)]',
          hover ? 'opacity-[0.18]' : 'opacity-[0.08]',
        )}
      />

      {/* Content */}
      <div className="relative flex flex-1 flex-col">
        <div className="text-faint mb-8 flex justify-between font-mono text-[11px] tracking-widest">
          <span>
            {String(index + 1).padStart(2, '0')} · {kind}
          </span>
          <span>{year}</span>
        </div>

        <h3 className="font-display text-text mb-3 text-[32px] font-normal tracking-[-0.01em]">
          {title}
        </h3>

        <p className="text-dim flex-1 text-[14px] leading-[1.6]">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="text-dim border-line rounded border px-2 py-0.75 font-mono text-[10px]"
              >
                {t}
              </span>
            ))}
          </div>
          <span
            className={clsx(
              'shrink-0 font-mono text-[14px] transition-all duration-200',
              hover
                ? 'text-accent translate-x-0.5 -translate-y-0.5'
                : 'text-faint translate-x-0 translate-y-0',
            )}
          >
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </a>
  );
}
