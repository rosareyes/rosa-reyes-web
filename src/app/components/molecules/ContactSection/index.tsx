'use client';

import { useState } from 'react';

function SectionHeader({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'var(--color-accent)',
      }}>
        <span>{label}</span>
        <span style={{ flex: 1, height: 1, background: 'var(--color-line)' }} />
      </div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontWeight: 400,
        fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05,
        letterSpacing: '-0.02em', color: 'var(--color-text)',
      }}>{title}</h2>
    </div>
  );
}

const LINKS = [
  { k: 'LinkedIn', v: 'in/rosaareyesc', href: 'https://www.linkedin.com/in/rosaareyesc/' },
  { k: 'GitHub',   v: '@rosareyes',     href: 'https://github.com/rosareyes' },
  { k: 'Upwork',   v: 'rosareyes',      href: 'https://www.upwork.com/freelancers/~01bcf3b51bb38b47a8' },
];

function ContactRow({ k, v, href, last }: { k: string; v: string; href: string; last?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 0',
        borderTop: '1px solid var(--color-line)',
        borderBottom: last ? '1px solid var(--color-line)' : 'none',
        textDecoration: 'none', color: 'var(--color-text)',
        transition: 'all 200ms',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: hover ? 'var(--color-accent)' : 'var(--color-faint)',
        transition: 'color 180ms',
      }}>{k}</span>
      <span style={{
        fontSize: 16, color: 'var(--color-text)',
        display: 'inline-flex', alignItems: 'center', gap: 10,
        transform: hover ? 'translateX(-4px)' : 'translateX(0)',
        transition: 'transform 200ms',
      }}>
        {v}
        <span style={{ color: hover ? 'var(--color-accent)' : 'var(--color-faint)' }}>↗</span>
      </span>
    </a>
  );
}

export default function ContactSection() {
  return (
    <div>
      <SectionHeader
        label="05 / Contact"
        title={<>Say <em style={{ color: 'var(--color-accent)' }}>hello.</em></>}
      />
      <div style={{
        display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80,
        alignItems: 'start',
      }}>
        <div>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--color-dim)', marginBottom: 32 }}>
            Open to full-time roles, freelance work, and honest conversations
            about software. Email is the best way to reach me. I read everything
            and reply to most things.
          </p>
          <a href="mailto:hello@rosareyes.dev" style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            color: 'var(--color-text)', textDecoration: 'none',
            borderBottom: '1px solid var(--color-accent)',
            paddingBottom: 4, letterSpacing: '-0.01em',
          }}>
            hello@rosareyes.dev{' '}
            <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-body)' }}>→</span>
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {LINKS.map((l, i) => (
            <ContactRow key={l.k} k={l.k} v={l.v} href={l.href} last={i === LINKS.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
