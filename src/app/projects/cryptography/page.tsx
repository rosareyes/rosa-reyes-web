import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, type NavSection } from '@/app/components/molecules/Navbar/Navbar';
import { ArrowRight, ArrowUpRight } from '@/app/components/atoms/icons';

const NAV: NavSection[] = [
  { id: 'primitives',   label: 'Primitives',    n: '01' },
  { id: 'how-it-works', label: 'How it works',  n: '02' },
  { id: 'stack',        label: 'Stack',          n: '03' },
];

export const metadata: Metadata = {
  title: 'Secure Messaging App — Rosa Reyes',
  description:
    'End-to-end encrypted chat with AES-GCM message encryption, RSA key exchange, digital signatures, and a full PKI, built for a university cryptography course.',
};

const tags = ['Python', 'Flask', 'AES-GCM', 'RSA', 'Scrypt', 'OpenSSL', 'SQLite'];

const primitives = [
  {
    name: 'AES-GCM',
    role: 'Message encryption',
    desc: 'Authenticated symmetric cipher. Encrypts message bodies and detects tampering via the authentication tag.',
    hue: 'text-accent',
  },
  {
    name: 'RSA',
    role: 'Key exchange',
    desc: "Asymmetric encryption wraps the AES session key with the recipient's public key. Only they can unwrap it.",
    hue: 'text-accent-tags2',
  },
  {
    name: 'Digital Signatures',
    role: 'Identity proof',
    desc: 'Messages are signed with the sender\'s private key. Recipients verify the signature against the PKI-issued certificate.',
    hue: 'text-accent-tags',
  },
  {
    name: 'PKI',
    role: 'Certificate authority',
    desc: 'A full certificate authority handles user registration, certificate issuance, and lifecycle management.',
    hue: 'text-accent-second',
  },
];

const steps = [
  { n: '01', title: 'Register', desc: 'Create an account and receive a PKI-issued certificate bound to your public key.' },
  { n: '02', title: 'Encrypt', desc: 'A random AES-GCM key encrypts the message body. RSA wraps that key for the recipient.' },
  { n: '03', title: 'Transmit', desc: 'Ciphertext, wrapped key, and digital signature are stored in SQLite.' },
  { n: '04', title: 'Decrypt', desc: 'Recipient verifies the signature, unwraps the AES key with their private key, and decrypts.' },
];

const stack = ['Python 3.7+', 'Flask', 'SQLite', 'AES-GCM', 'RSA', 'Scrypt', 'OpenSSL'];

export default function CryptographyPage() {
  return (
    <main className="bg-ink min-h-screen">
      <Navbar sections={NAV} />

      <div className="max-w-295 mx-auto px-5 md:px-20">

        {/* ── Back nav ── */}
        <div className="pt-28 md:pt-32 pb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-faint hover:text-accent transition-colors duration-[240ms]"
          >
            <ArrowRight className="rotate-180 text-[14px]" />
            Back to projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="pb-16 md:pb-20 border-b border-line">
          <div className="flex flex-wrap gap-1.5 mb-8">
            {tags.map((t) => (
              <span key={t} className="font-mono text-[10px] text-dim px-2 py-[3px] rounded border border-line">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div>
              <h1 className="font-display font-normal text-[clamp(40px,5.5vw,80px)] leading-[1.03] tracking-[-0.025em] text-text mb-5">
                Secure<br />Messaging App
              </h1>
              <p className="text-[16px] leading-[1.65] text-dim max-w-130">
                End-to-end encrypted chat built for a cryptography course. AES-GCM encrypts messages, RSA protects the key exchange, and a custom PKI handles user identity. No plaintext leaves the client.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0">
              <span className="font-mono text-[11px] text-faint tracking-[0.08em]">University · 2024</span>
              <a
                href="https://github.com/rosareyes/cryptography-project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-line2 bg-surface text-text font-mono text-[11px] tracking-[0.08em] hover:border-accent hover:text-accent transition-all duration-[240ms]"
              >
                View on GitHub
                <ArrowUpRight className="text-[14px]" />
              </a>
            </div>
          </div>

          <div className="relative h-64 rounded-4.5 overflow-hidden border border-line">
            <Image
              src="/crypto_project.png"
              alt="Secure Messaging App interface"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0" style={{ background: 'rgba(11,13,16,0.70)' }} />
            <div className="absolute inset-0 bg-[radial-gradient(700px_at_50%_0%,var(--color-accent),transparent_55%)] opacity-[0.18]" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ink to-transparent" />
          </div>
        </section>

        {/* ── Crypto primitives + overview ── */}
        <section id="primitives" className="scroll-mt-25 py-16 md:py-20 border-b border-line">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left — overview */}
            <div>
              <div className="flex items-center gap-3.5 mb-6 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
                <span>Primitives</span>
                <span className="flex-1 h-px bg-line" />
              </div>
              <p className="text-[15px] leading-[1.7] text-dim mb-6">
                One primitive per concern: AES-GCM for message confidentiality and integrity, RSA for key distribution, Scrypt for passwords at rest, PKI for identity. Each layer does one job and nothing else.
              </p>
              <p className="text-[15px] leading-[1.7] text-dim">
                The server ends up with ciphertext, wrapped keys, and signatures. It can't read any of it.
              </p>
            </div>

            {/* Right — 2×2 primitive cards */}
            <div className="grid grid-cols-2 gap-3">
              {primitives.map((p) => (
                <div key={p.name} className="rounded-3.5 border border-line bg-surface p-5 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[11px] tracking-[0.06em] font-medium ${p.hue}`}>{p.name}</span>
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 opacity-50 bg-current ${p.hue}`} />
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.12em] uppercase text-faint">{p.role}</div>
                  <p className="text-[12px] leading-[1.6] text-dim">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="scroll-mt-25 py-16 md:py-20 border-b border-line">
          <div className="flex items-center gap-3.5 mb-10 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
            <span>How it works</span>
            <span className="flex-1 h-px bg-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.n} className="relative">
                {/* Connector line — desktop only */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%_-_8px)] w-4 h-px bg-line z-10" />
                )}
                <div className="rounded-3.5 border border-line bg-surface p-5 h-full flex flex-col gap-3">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-accent">{step.n}</span>
                  <h3 className="font-display font-normal text-[18px] tracking-[-0.01em] text-text">
                    {step.title}
                  </h3>
                  <p className="text-[12px] leading-[1.65] text-dim">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stack + GitHub ── */}
        <section id="stack" className="scroll-mt-25 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
            {/* Stack */}
            <div className="flex-1">
              <div className="flex items-center gap-3.5 mb-6 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
                <span>Stack</span>
                <span className="flex-1 h-px bg-line" />
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] text-dim px-3 py-1.5 rounded border border-line bg-surface hover:border-line2 hover:text-text transition-all duration-[240ms]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub CTA */}
            <div className="shrink-0 md:w-72">
              <div className="rounded-4.5 border border-line2 bg-surface p-7 flex flex-col gap-5">
                <div>
                  <div className="font-display font-normal text-[18px] tracking-[-0.01em] text-text mb-1.5">
                    View source
                  </div>
                  <p className="text-[13px] leading-[1.6] text-dim">
                    PKI, encryption layer, Flask backend, and web UI. All on GitHub.
                  </p>
                </div>
                <a
                  href="https://github.com/rosareyes/cryptography-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-2 px-4 py-3 rounded border border-line bg-surface2 text-text font-mono text-[11px] tracking-[0.08em] hover:border-accent hover:text-accent transition-all duration-[240ms] group"
                >
                  <span>rosareyes/cryptography-project</span>
                  <ArrowUpRight className="text-[14px] text-faint group-hover:text-accent transition-colors duration-[240ms]" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer back-nav ── */}
        <div className="pb-16 flex justify-center border-t border-line pt-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-faint hover:text-accent transition-colors duration-[240ms]"
          >
            <ArrowRight className="rotate-180 text-[14px]" />
            Back to projects
          </Link>
        </div>

      </div>
    </main>
  );
}
