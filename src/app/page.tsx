'use client';

import Image from 'next/image';
import { Navbar } from './components/molecules/Navbar/Navbar';
import CursorHalo from './components/atoms/CursorHalo';
import WorkSection from './components/molecules/WorkSection';
import ProjectCard from './components/molecules/Cards/Project';
import StackSection from './components/molecules/StackSection';
import ContactSection from './components/molecules/ContactSection';
import { projects } from '../../data/profile';

// ─── Background layers ────────────────────────────────────────────────────
function BgGrain() {
  return (
    <>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(circle at 50% 30%, black 0%, transparent 70%)',
        opacity: 0.5,
      }} />
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(1200px 800px at 80% -10%, oklch(0.72 0.15 330 / 0.08), transparent 60%),
          radial-gradient(900px 700px at -10% 80%, oklch(0.74 0.18 45 / 0.08), transparent 60%)
        `,
      }} />
    </>
  );
}

// ─── Section header shared component ─────────────────────────────────────
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

// ─── Hero / Intro ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="intro" style={{
      minHeight: 'calc(100vh - 120px)',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', paddingTop: 40,
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.5fr 1fr',
        gap: 64, alignItems: 'center',
      }}>
        {/* Left: text */}
        <div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(52px, 5vw, 112px)', lineHeight: 0.95,
            letterSpacing: '-0.035em', color: 'var(--color-text)',
          }}>
            Rosa Reyes<br />
            <em style={{ color: 'var(--color-accent)', fontWeight: 400 }}>Software Engineer.</em>
          </h1>

          <p style={{
            marginTop: 40, fontSize: 18, lineHeight: 1.6,
            color: 'var(--color-dim)', maxWidth: 540,
          }}>
            I build products end-to-end: interfaces, systems, and everything in between.
            Four years at{' '}
            <span style={{ borderBottom: '1px dashed var(--color-accent)', color: 'var(--color-text)', paddingBottom: 1 }}>
              Stylib
            </span>
            , a CS degree at{' '}
            <span style={{ borderBottom: '1px dashed var(--color-accent)', color: 'var(--color-text)', paddingBottom: 1 }}>
              UC3M
            </span>
            .
          </p>
        </div>

        {/* Right: portrait */}
        <div style={{
          position: 'relative', aspectRatio: '3/4',
          borderRadius: 16, overflow: 'hidden',
          border: '1px solid var(--color-line2)',
          background: 'var(--color-surface)',
        }}>
          <Image
            src="/rosa-portrait.jpg"
            alt="Rosa Reyes"
            fill
            style={{ objectFit: 'cover', filter: 'saturate(0.95) contrast(1.02)' }}
            priority
          />
          {/* Dark gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 60%, rgba(11,13,16,0.7) 100%)',
          }} />
          {/* Badge top-left */}
          <div style={{
            position: 'absolute', top: 14, left: 14,
            fontFamily: 'var(--font-mono)', fontSize: 9,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--color-accent)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
           
          </div>
          {/* Caption bottom */}
          <div style={{
            position: 'absolute', bottom: 16, left: 16, right: 16,
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 28, color: 'var(--color-text)',
            }}>Rosa.</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 9,
              letterSpacing: '0.18em', color: 'var(--color-dim)',
              textTransform: 'uppercase',
            }}>Madrid · 2026</span>
          </div>
        </div>
      </div>

      {/* Fact strip */}
      <div style={{
        marginTop: 64, paddingTop: 28,
        borderTop: '1px solid var(--color-line)',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
      }}>
        {[
          { k: 'Based',    v: 'Madrid, ES' },
          { k: 'Recently', v: '4 yrs @ Stylib' },
          { k: 'Studied',  v: 'CS @ UC3M' },
        ].map((f) => (
          <div key={f.k}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 10,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--color-faint)', marginBottom: 8,
            }}>{f.k}</div>
            <div style={{ fontSize: 14, color: 'var(--color-text)' }}>{f.v}</div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 24, left: 0,
        display: 'flex', alignItems: 'center', gap: 12,
        fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--color-faint)', letterSpacing: '0.1em',
      }}>
        
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────
function AboutSection() {
  const tags = [
    'Live music',
    'Video games',
    'Bouldering',
    'Reading',
    'Coffee',
    'Gym',
  ];

  return (
    <section id="about" style={{ scrollMarginTop: 100, padding: '100px 0 40px' }}>
      <SectionHeader
        label="01 / About"
        title={<>A bit about <em style={{ color: 'var(--color-accent)' }}>who I am.</em></>}
      />
      <div style={{
        display: 'grid', gridTemplateColumns: '1.4fr 1fr',
        gap: 80, alignItems: 'start',
      }}>
        <div style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--color-dim)' }}>
          <p style={{ marginBottom: 24 }}>
           I'm Rosa, a software engineer based in  <strong style={{ color: 'var(--color-text)' }}>Madrid</strong>, with a really loud keyboard and a deep cup of coffee. I'm into the engineering side of things: how systems fit together, why they break, and what makes them feel good to use.</p>
          <p style={{ marginBottom: 24 }}>
          I got into programming as a kid because I wanted more out of The Sims. What started as cracking games for me and my friends turned into being the household tech support: fixing missing DLLs, mystery Windows errors, the works. Somewhere between rebooting routers and rewriting save files, I figured out this was what I wanted to do for real.
          </p>
          <p>
           I studied  <strong style={{ color: 'var(--color-text)' }}>Computer Science and Engineering</strong> at  <strong style={{ color: 'var(--color-text)' }}>UC3M</strong>, and I write code that ships to actual humans. Off-screen: bouldering when my hands let me, music concerts whenever I can, video games, and a stack of books I'm definitely going to finish this year.
          </p>
        </div>

        <div>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 10,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--color-faint)', marginBottom: 18,
          }}>Currently into</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tags.map((t) => (
              <span key={t} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '8px 14px', borderRadius: 999,
                border: '1px solid var(--color-line2)',
                background: 'rgba(255,255,255,0.02)',
                fontSize: 13, color: 'var(--color-text)',
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Now Playing card */}
          <div style={{
            marginTop: 32, padding: 18,
            border: '1px solid var(--color-line)', borderRadius: 14,
            background: 'rgba(255,255,255,0.02)',
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 8, flexShrink: 0,
              background: 'linear-gradient(135deg, var(--color-accent-second), var(--color-accent))',
            }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 10,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--color-accent)', marginBottom: 4,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--color-accent)',
                  animation: 'pulse 1.5s ease-in-out infinite',
                }} />
                Now playing
              </div>
              <div style={{ fontSize: 14, color: 'var(--color-text)', fontWeight: 500 }}>
                Dog Days Are Over
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-dim)' }}>
                Florence + the Machine, Lungs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--color-line)',
      padding: '32px 0',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: '0.08em', color: 'var(--color-faint)',
    }}>
      <div>© 2026 Rosa Reyes · Built with love in Madrid</div>
      <a href="#intro" style={{ color: 'var(--color-faint)', textDecoration: 'none' }}>
        Back to top ↑
      </a>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main style={{ background: 'var(--color-ink)', minHeight: '100vh', position: 'relative' }}>
      <CursorHalo />
      <BgGrain />
      <Navbar />

      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '120px 80px 0',
        position: 'relative', zIndex: 2,
      }}>
        <HeroSection />
        <AboutSection />

        <section id="work" style={{ scrollMarginTop: 100, padding: '100px 0 40px' }}>
          <WorkSection />
        </section>

        <section id="projects" style={{ scrollMarginTop: 100, padding: '100px 0 40px' }}>
          <SectionHeader
            label="03 / Projects"
            title={<>Things I&rsquo;ve made, <em style={{ color: 'var(--color-accent)' }}>and care about.</em></>}
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {projects.map((p, i) => (
              <ProjectCard
                key={p.title}
                index={i}
                title={p.title}
                kind={p.kind}
                year={p.year}
                description={p.description}
                tags={p.tags}
                url={p.url}
                github={p.github}
              />
            ))}
          </div>
        </section>

        <section id="stack" style={{ scrollMarginTop: 100, padding: '100px 0 40px' }}>
          <StackSection />
        </section>

        <section id="contact" style={{ scrollMarginTop: 100, padding: '100px 0 40px' }}>
          <ContactSection />
        </section>

        <Footer />
      </div>
    </main>
  );
}
