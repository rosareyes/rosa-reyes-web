import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, type NavSection } from '@/app/components/molecules/Navbar/Navbar';
import { ArrowRight } from '@/app/components/atoms/icons';

const NAV: NavSection[] = [
  { id: 'product',        label: 'Product',        n: '01' },
  { id: 'overview',       label: 'Overview',       n: '02' },
  { id: 'modules',        label: 'Modules',        n: '03' },
  { id: 'portals',        label: 'Portals',        n: '04' },
  { id: 'infrastructure', label: 'Infrastructure', n: '05' },
  { id: 'stack',          label: 'Stack',          n: '06' },
];

export const metadata: Metadata = {
  title: 'Vanrays HUB — Rosa Reyes',
  description:
    "Operations platform for Vanrays' rental business: bookings, cleaning, maintenance, and owner settlements in one system, with a central console for admins and bookers plus scoped portals for owners, cleaners, and maintenance techs.",
};

const tags = ['React', 'TypeScript', 'Node.js', 'Supabase', 'PostgreSQL', 'Railway'];

const impact = [
  {
    title: 'Operations whiteboard',
    before: 'Updated by hand, 3–4 hours a week.',
    after: 'Live in the app, updated as it happens.',
  },
  {
    title: 'Monthly settlements',
    before: 'A full day at month-end, done by hand.',
    after: 'Generated automatically, in minutes, an hour at most.',
  },
];

const modules = [
  {
    n: '01',
    title: 'Reservations',
    desc: 'Create, edit, and cancel bookings. Log payments by transfer, card, or cash, and track every status from tentative to checked out, cancelled, or no-show.',
  },
  {
    n: '02',
    title: 'Properties & owners',
    desc: 'Full catalog with tourist and corporate pricing, commissions, and security deposits. Properties link to one or more owners by ownership share.',
  },
  {
    n: '03',
    title: 'Cleaning',
    desc: 'Schedule and assign cleanings by type (checkout, check-in, midstay, deep clean, extra, owner) with live status tracking.',
  },
  {
    n: '04',
    title: 'Maintenance',
    desc: 'Ticket system with priority levels and a full workflow from reported to closed, including materials used and their cost.',
  },
  {
    n: '05',
    title: 'Settlements',
    desc: 'Monthly owner settlements generated automatically, broken down per booking by gross income, commission, and net. Draft, issued, paid.',
  },
  {
    n: '06',
    title: 'Team & audit',
    desc: 'Manage admins, bookers, cleaners, and technicians. Admins and bookers work from the main console; owners, cleaners, and techs get scoped portal access. Full audit trail of every action.',
  },
];

const infrastructure = [
  {
    n: '01',
    title: 'Isolated PR previews',
    tag: 'Railway',
    desc: 'Every pull request deploys to its own preview environment on Railway, each with its own isolated Postgres database seeded independently of production. QA runs against real flows, bookings, cleanings, settlements, without ever touching live data.',
  },
  {
    n: '02',
    title: 'Auth & access control',
    tag: 'Supabase',
    desc: 'Supabase Auth handles login and session management across the ops console and every portal. Role checks run server-side on top of it, so an owner, cleaner, or tech only ever sees data scoped to them.',
  },
];

const portals = [
  {
    title: 'Owner',
    path: '/portal/owner',
    desc: 'Their properties and active bookings, an occupancy calendar, and monthly settlements they can view and download.',
  },
  {
    title: 'Cleaner',
    path: '/portal/cleaner',
    desc: 'Assigned jobs sorted by date. Mark a job as started or completed, flag an issue, and upload before/after photos.',
  },
  {
    title: 'Maintenance',
    path: '/portal/maint',
    desc: 'Assigned tickets by priority, status updates, materials used, and photos of the problem and the fix.',
  },
];

export default function VanraysHubPage() {
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

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h1 className="font-display font-normal text-[clamp(32px,4.5vw,60px)] leading-[1.03] tracking-[-0.025em] text-text mb-5">
                Vanrays<br />HUB
              </h1>
              <p className="text-[16px] leading-[1.65] text-dim max-w-130">
                Operations platform for Vanrays&rsquo; property management business in Madrid. Bookings, cleaning, maintenance, and owner settlements in one place, replacing a pile of spreadsheets, forms, and AppSheet automations.
              </p>
            </div>

            <div className="flex flex-col gap-2 shrink-0 md:items-end">
              <span className="font-mono text-[11px] text-faint tracking-[0.08em]">Freelance · 2026</span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-line2 bg-surface text-dim font-mono text-[11px] tracking-[0.08em]">
                In progress · internal tool
              </span>
            </div>
          </div>
        </section>

        {/* ── Product ── */}
        <section id="product" className="scroll-mt-25 py-16 md:py-20 border-b border-line">
          <div className="flex items-center gap-3.5 mb-8 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
            <span>Product</span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <div className="rounded-3.5 border-line overflow-hidden border">
            <div className="border-line text-faint border-b px-3 py-2 font-mono text-[9px] tracking-[0.12em] uppercase">
              Operations dashboard — live view
            </div>
            <Image
              src="/vanrays-hub-dashboard.png"
              alt="Vanrays HUB operations dashboard showing today's check-ins, check-outs, cleanings, and an operations whiteboard timeline"
              width={2000}
              height={1215}
              className="w-full"
            />
          </div>
        </section>

        {/* ── Overview ── */}
        <section id="overview" className="scroll-mt-25 py-16 md:py-20 border-b border-line">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Left — overview */}
            <div>
              <div className="flex items-center gap-3.5 mb-6 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
                <span>Overview</span>
                <span className="flex-1 h-px bg-line" />
              </div>
              <p className="text-[15px] leading-[1.7] text-dim mb-6">
                Vanrays is a property management company in Madrid with a growing portfolio of short and long-term rentals. Day-to-day operations ran on AppSheet, a no-code tool that worked fine at first but started showing its limits: reservations, cleaning schedules, maintenance tickets, and owner payouts ended up scattered across spreadsheets, forms, and email threads.
              </p>
              <p className="text-[15px] leading-[1.7] text-dim">
                Vanrays HUB replaces all of that with a real application built around how the team actually works: admins and bookers run day-to-day operations from a central console, while owners, cleaners, and maintenance techs each get a portal scoped to their role.
              </p>
            </div>

            {/* Right — before / after */}
            <div className="flex flex-col gap-3">
              {impact.map((item) => (
                <div key={item.title} className="rounded-3.5 border border-line bg-surface p-5 flex flex-col gap-4">
                  <span className="font-display font-normal text-[16px] tracking-[-0.01em] text-text">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-faint mb-1.5">Before</div>
                      <p className="text-[13px] leading-[1.5] text-dim">{item.before}</p>
                    </div>
                    <ArrowRight className="text-faint shrink-0 text-[14px]" />
                    <div className="flex-1">
                      <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-accent mb-1.5">After</div>
                      <p className="text-[13px] leading-[1.5] text-text">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Modules ── */}
        <section id="modules" className="scroll-mt-25 py-16 md:py-20 border-b border-line">
          <div className="flex items-center gap-3.5 mb-10 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
            <span>Modules</span>
            <span className="flex-1 h-px bg-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((m) => (
              <div key={m.n} className="rounded-3.5 border border-line bg-surface p-5 flex flex-col gap-3">
                <span className="font-mono text-[11px] tracking-[0.14em] text-accent">{m.n}</span>
                <h3 className="font-display font-normal text-[18px] tracking-[-0.01em] text-text">
                  {m.title}
                </h3>
                <p className="text-[12px] leading-[1.65] text-dim">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Portals ── */}
        <section id="portals" className="scroll-mt-25 py-16 md:py-20 border-b border-line">
          <div className="flex items-center gap-3.5 mb-10 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
            <span>Portals</span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <p className="text-[15px] leading-[1.7] text-dim mb-10 max-w-155">
            Owners, cleaners, and maintenance techs each get a login scoped to exactly what they need to see, no access to the main console. Admins and bookers work from the console directly, with full visibility across reservations, cleaning, maintenance, and settlements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portals.map((p) => (
              <div key={p.title} className="rounded-3.5 border border-line bg-surface p-5 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display font-normal text-[18px] tracking-[-0.01em] text-text">
                    {p.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-faint truncate">{p.path}</span>
                </div>
                <p className="text-[12px] leading-[1.65] text-dim">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Infrastructure ── */}
        <section id="infrastructure" className="scroll-mt-25 py-16 md:py-20 border-b border-line">
          <div className="flex items-center gap-3.5 mb-10 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
            <span>Infrastructure</span>
            <span className="flex-1 h-px bg-line" />
          </div>
          <p className="text-[15px] leading-[1.7] text-dim mb-10 max-w-155">
            Built so QA never has to worry about breaking anything real.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {infrastructure.map((item) => (
              <div key={item.n} className="rounded-3.5 border border-line bg-surface p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-accent">{item.n}</span>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-faint px-2 py-0.75 rounded border border-line">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-display font-normal text-[18px] tracking-[-0.01em] text-text">
                  {item.title}
                </h3>
                <p className="text-[12px] leading-[1.65] text-dim">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Stack + What's next ── */}
        <section id="stack" className="scroll-mt-25 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-20">
            {/* Stack */}
            <div className="flex-1">
              <div className="flex items-center gap-3.5 mb-6 font-mono text-[11px] tracking-[0.16em] uppercase text-accent">
                <span>Stack</span>
                <span className="flex-1 h-px bg-line" />
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] text-dim px-3 py-1.5 rounded border border-line bg-surface hover:border-line2 hover:text-text transition-all duration-[240ms]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* What's next */}
            <div className="shrink-0 md:w-80">
              <div className="rounded-4.5 border border-line2 bg-surface p-7 flex flex-col gap-2.5">
                <div className="font-display font-normal text-[18px] tracking-[-0.01em] text-text">
                  What&rsquo;s next
                </div>
                <p className="text-[13px] leading-[1.6] text-dim">
                  PDF exports for owner settlements, splitting bookings into tourist vs. corporate with their own commissions, a consolidated owner profile view, and automated booking emails.
                </p>
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
