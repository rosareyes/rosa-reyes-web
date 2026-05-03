'use client';

import { useState } from 'react';

interface ProjectCardProps {
  index: number;
  title: string;
  kind: string;
  year: string;
  description: string;
  tags: string[];
  url: string;
  github: string;
}

export default function ProjectCard({ index, title, kind, year, description, tags, url }: ProjectCardProps) {
  const [hover, setHover] = useState(false);
  const href = url || '#';

  return (
    <a
      href={href}
      target={url && url !== '/' ? '_blank' : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        color: 'inherit',
        padding: 28,
        border: `1px solid ${hover ? 'var(--color-line2)' : 'var(--color-line)'}`,
        borderRadius: 18,
        background: hover ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.01)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 240ms',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        minHeight: 260,
      }}
    >
      {/* Radial gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        opacity: hover ? 0.18 : 0.08,
        background: 'radial-gradient(400px at 80% 0%, var(--color-accent), transparent 60%)',
        transition: 'opacity 300ms',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.1em', color: 'var(--color-faint)',
          marginBottom: 32,
        }}>
          <span>{String(index + 1).padStart(2, '0')} · {kind}</span>
          <span>{year}</span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: 32, marginBottom: 12, letterSpacing: '-0.01em',
          color: 'var(--color-text)',
        }}>{title}</h3>

        {/* Description */}
        <p style={{
          fontSize: 14, lineHeight: 1.6,
          color: 'var(--color-dim)', flex: 1,
        }}>{description}</p>

        {/* Bottom: tags + arrow */}
        <div style={{
          marginTop: 24,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {tags.map((t) => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'var(--color-dim)', padding: '3px 8px', borderRadius: 4,
                border: '1px solid var(--color-line)',
              }}>{t}</span>
            ))}
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 14,
            color: hover ? 'var(--color-accent)' : 'var(--color-faint)',
            transform: hover ? 'translate(2px,-2px)' : 'translate(0,0)',
            transition: 'all 200ms',
            flexShrink: 0,
          }}>↗</span>
        </div>
      </div>
    </a>
  );
}
