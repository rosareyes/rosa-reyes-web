'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import type { Project } from '../../../../../types';
import { ArrowUpRight } from '../../../atoms/icons';
import { useAnalytics } from '@/app/hooks/useAnalytics';

type ProjectCardProps = Omit<Project, 'github'> & { index: number; github?: string };

export default function ProjectCard({ index, title, kind, year, description, tags, url, image }: ProjectCardProps) {
  const [hover, setHover] = useState(false);
  const { track } = useAnalytics();
  const href = url || '#';

  return (
    <a
      href={href}
      target={url && url !== '/' ? '_blank' : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => track('project-click', { name: title })}
      className={clsx(
        'flex flex-col no-underline text-inherit',
        'p-7 rounded-4.5 border relative overflow-hidden',
        'transition-all duration-[240ms] min-h-65',
        hover ? 'border-line2 -translate-y-0.5' : 'border-line translate-y-0',
        !image && (hover ? 'bg-white/[0.025]' : 'bg-white/[0.01]'),
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
          className="absolute inset-0 transition-opacity duration-[240ms]"
          style={{ background: hover ? 'rgba(11,13,16,0.65)' : 'rgba(11,13,16,0.82)' }}
        />
      ) : null}

      {/* Accent radial — colour wash over the image */}
      <div
        className={clsx(
          'absolute inset-0 pointer-events-none transition-opacity duration-300',
          'bg-[radial-gradient(400px_at_80%_0%,var(--color-accent),transparent_60%)]',
          hover ? 'opacity-[0.18]' : 'opacity-[0.08]',
        )}
      />

      {/* Content */}
      <div className="relative flex-1 flex flex-col">
        <div className="flex justify-between font-mono text-[11px] tracking-[0.1em] text-faint mb-8">
          <span>{String(index + 1).padStart(2, '0')} · {kind}</span>
          <span>{year}</span>
        </div>

        <h3 className="font-display font-normal text-[32px] mb-3 tracking-[-0.01em] text-text">
          {title}
        </h3>

        <p className="text-[14px] leading-[1.6] text-dim flex-1">{description}</p>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-1.5 flex-wrap">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] text-dim px-2 py-[3px] rounded border border-line"
              >
                {t}
              </span>
            ))}
          </div>
          <span
            className={clsx(
              'font-mono text-[14px] shrink-0 transition-all duration-200',
              hover ? 'text-accent translate-x-0.5 -translate-y-0.5' : 'text-faint translate-x-0 translate-y-0',
            )}
          >
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </a>
  );
}
