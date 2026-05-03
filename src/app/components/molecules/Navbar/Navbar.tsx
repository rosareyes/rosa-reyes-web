'use client';

import { useState, useEffect } from 'react';

const NAV = [
  { id: 'intro',    label: 'Index',    n: '00' },
  { id: 'about',    label: 'About',    n: '01' },
  { id: 'work',     label: 'Work',     n: '02' },
  { id: 'projects', label: 'Projects', n: '03' },
  { id: 'stack',    label: 'Stack',    n: '04' },
  { id: 'contact',  label: 'Contact',  n: '05' },
];

export const Navbar = () => {
  const [active, setActive]     = useState('intro');
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Fixed top header */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: 'blur(14px)',
        background: 'rgba(11,13,16,0.7)',
        borderBottom: '1px solid var(--color-line)',
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          padding: '18px 80px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)', fontSize: 12,
          letterSpacing: '0.04em',
        }}>
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 8, flexShrink: 0,
              background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-second))',
              display: 'grid', placeItems: 'center',
              color: '#0B0D10',
              fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16,
              fontStyle: 'italic',
            }}>r</div>
            <span style={{ color: 'var(--color-dim)' }}>Rosa Reyes</span>
            <span style={{ color: 'var(--color-faint)' }}>·</span>
            <span style={{ color: 'var(--color-faint)' }}>Software Engineer · Madrid</span>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 12px', borderRadius: 999,
              border: '1px solid var(--color-line)',
              background: 'rgba(255,255,255,0.02)',
              fontSize: 11, color: 'var(--color-dim)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                background: 'var(--color-accent)',
                boxShadow: '0 0 0 4px oklch(0.74 0.18 45 / 0.22)',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Open to new roles
            </span>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              color: 'var(--color-text)', textDecoration: 'none',
              border: '1px solid var(--color-line2)',
              padding: '8px 14px', borderRadius: 999,
              background: 'rgba(255,255,255,0.02)',
              fontFamily: 'var(--font-mono)', fontSize: 11,
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              Get in touch <span style={{ color: 'var(--color-accent)' }}>→</span>
            </a>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div style={{
          position: 'absolute', left: 0, bottom: -1, height: 1,
          width: `${scrolled * 100}%`,
          background: 'var(--color-accent)',
          transition: 'width 60ms linear',
        }} />
      </header>

      {/* Right-rail dot nav */}
      <nav aria-label="Section navigation" style={{
        position: 'fixed', top: '50%', right: 36,
        transform: 'translateY(-50%)',
        zIndex: 40,
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        {NAV.map((n) => {
          const on = active === n.id;
          return (
            <a key={n.id} href={`#${n.id}`} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              textDecoration: 'none',
              padding: '8px 4px',
              fontFamily: 'var(--font-mono)',
              fontSize: 11, letterSpacing: '0.08em',
              color: on ? 'var(--color-text)' : 'var(--color-faint)',
              transition: 'color 200ms',
            }}>
              <span style={{ opacity: on ? 1 : 0.5, minWidth: 18 }}>{n.n}</span>
              <span style={{
                height: 1,
                width: on ? 28 : 14,
                background: on ? 'var(--color-accent)' : 'var(--color-faint)',
                transition: 'width 250ms, background 250ms',
                flexShrink: 0,
              }} />
              <span style={{ textTransform: 'uppercase', fontWeight: on ? 600 : 400 }}>
                {n.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
};
