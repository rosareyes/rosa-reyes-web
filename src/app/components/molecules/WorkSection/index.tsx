'use client';

import { useState } from 'react';
import { jobs } from '../../../../../data/profile';

type Job = {
  role: string;
  co: string;
  url: string;
  range: string;
  loc: string;
  bullets: string[];
  skills: string[];
};

function SectionHeader({ label, title, kicker }: { label: string; title: React.ReactNode; kicker?: string }) {
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
      {kicker && (
        <p style={{
          marginTop: 18, fontSize: 17, lineHeight: 1.6,
          color: 'var(--color-dim)', maxWidth: 620,
        }}>{kicker}</p>
      )}
    </div>
  );
}

function RoleRow({ item, open, onClick }: { item: Job; open: boolean; onClick: () => void }) {
  return (
    <div
      style={{ borderTop: '1px solid var(--color-line)', padding: '24px 0', cursor: 'pointer' }}
      onClick={onClick}
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '160px 1fr auto', gap: 32,
        alignItems: 'baseline',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 11,
          letterSpacing: '0.1em', color: 'var(--color-faint)',
        }}>{item.range}</div>

        <div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 26, letterSpacing: '-0.01em', color: 'var(--color-text)',
          }}>
            {item.role} <span style={{ color: 'var(--color-faint)' }}>at</span>{' '}
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{ color: 'var(--color-accent)', textDecoration: 'none', borderBottom: '1px dashed var(--color-accent-dim)' }}
              >{item.co}</a>
            ) : (
              <span style={{ color: 'var(--color-accent)' }}>{item.co}</span>
            )}
          </h3>
          <div style={{ fontSize: 13, color: 'var(--color-dim)', marginTop: 4 }}>{item.loc}</div>
        </div>

        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--color-faint)',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 200ms',
          userSelect: 'none',
        }}>+</div>
      </div>

      <div style={{
        maxHeight: open ? 600 : 0,
        overflow: 'hidden',
        transition: 'max-height 360ms cubic-bezier(0.2,0.8,0.2,1), opacity 240ms',
        opacity: open ? 1 : 0,
      }}>
        <div style={{
          marginTop: 24, marginLeft: 192,
          display: 'flex', flexDirection: 'column', gap: 12,
          fontSize: 15, lineHeight: 1.65, color: 'var(--color-dim)',
        }}>
          {item.bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 12 }}>
              <span style={{
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                marginTop: 4, flexShrink: 0,
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{b}</span>
            </div>
          ))}
          <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {item.skills.map((s) => (
              <span key={s} style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: 'var(--color-dim)',
                padding: '3px 10px', borderRadius: 4,
                border: '1px solid var(--color-line)',
                background: 'rgba(255,255,255,0.02)',
              }}>{s}</span>
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
        title={<>Where I&rsquo;ve <em style={{ color: 'var(--color-accent)' }}>done the work.</em></>}
        kicker="About five years across product teams, freelance, and internal tooling. Click any role to expand."
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {(jobs as Job[]).map((e, i) => (
          <RoleRow
            key={e.co}
            item={e}
            open={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          />
        ))}
        <div style={{ borderTop: '1px solid var(--color-line)' }} />
      </div>
      <a href="/rosa-reyes-eng.pdf" target="_blank" rel="noopener noreferrer" style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        marginTop: 32, color: 'var(--color-text)', textDecoration: 'none',
        fontSize: 13,
        borderBottom: '1px solid var(--color-line2)', paddingBottom: 4,
      }}>
        Download full CV
        <span style={{ color: 'var(--color-accent)' }}>↗</span>
      </a>
    </div>
  );
}
