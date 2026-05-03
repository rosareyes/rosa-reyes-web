import { STACK } from '../../../../../data/stack';

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

export default function StackSection() {
  const entries = Object.entries(STACK) as [string, string[]][];

  return (
    <div>
      <SectionHeader
        label="04 / Stack"
        title={<>Tools I've <em style={{ color: 'var(--color-accent)' }}>used.</em></>}
        kicker="Things I've used in real projects."/>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        border: '1px solid var(--color-line)',
        borderRadius: 14, overflow: 'hidden',
      }}>
        {entries.map(([cat, items], i) => (
          <div key={cat} style={{
            padding: '28px 24px',
            borderRight: i < 4 ? '1px solid var(--color-line)' : 'none',
            background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--color-accent)', marginBottom: 18,
            }}>{String(i + 1).padStart(2, '0')} {cat}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map((it) => (
                <div key={it} style={{ fontSize: 14, color: 'var(--color-text)' }}>{it}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
