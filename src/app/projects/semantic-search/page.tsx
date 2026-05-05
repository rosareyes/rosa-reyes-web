import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Navbar,
  type NavSection,
} from '@/app/components/molecules/Navbar/Navbar';
import SectionHeader from '@/app/components/atoms/SectionHeader';
import { ArrowRight } from '@/app/components/atoms/icons';

const NAV: NavSection[] = [
  { id: 'problem', label: 'Problem', n: '01' },
  { id: 'architecture', label: 'Architecture', n: '02' },
  { id: 'demo', label: 'Demo', n: '03' },
  { id: 'trace', label: 'Trace', n: '04' },
  { id: 'results', label: 'Results', n: '05' },
  { id: 'stack', label: 'Stack', n: '06' },
  { id: 'thesis', label: 'Thesis', n: '07' },
];

export const metadata: Metadata = {
  title: 'Semantic Search Engine - Rosa Reyes',
  description:
    'CS bachelor thesis: a 3-stage multi-agent pipeline that converts natural language queries into structured product catalog filters using Pydantic AI and LLMs.',
};

const tags = ['Python', 'FastAPI', 'Pydantic AI', 'NLP', 'LLMs', 'OpenRouter'];

const agents = [
  {
    num: '01',
    name: 'Entity Agent',
    input: 'Natural language query',
    output: 'Category + LogicalConditions',
    desc: 'Reads the query against an augmented product taxonomy and returns a product category plus a list of logical conditions. Each condition is a concept paired with an expression, like "Color" / "red OR blue".',
  },
  {
    num: '02',
    name: 'Filter Agent',
    input: 'LogicalConditions',
    output: 'FilterResult',
    desc: 'Takes each logical condition and maps it to a canonical filter key from the product catalog facets. Runs in a loop: if the Validator finds issues with the key resolution, it gets another attempt.',
  },
  {
    num: '03',
    name: 'Validator Agent',
    input: 'FilterResult + original query',
    output: 'Validated FilterResult',
    desc: 'Checks whether the generated filters actually answer the original query. When they fall short, it routes the issue back to whichever agent is responsible: the Filter Agent if a key mapping is wrong, the Entity Agent if the intent was misread. Up to 3 retries.',
  },
];

const stackGroups = [
  { group: 'Core', items: ['Python 3.13', 'FastAPI', 'Pydantic AI'] },
  { group: 'LLMs', items: ['OpenRouter'] },
  { group: 'Testing & Eval', items: ['pydantic-evals', 'pytest', 'Filter F1'] },
  { group: 'Observability', items: ['Logfire'] },
];

function FileTextIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function ArchitectureDiagram() {
  const T = '#E9ECEF';
  const D = '#9AA3AD';
  const F = '#5A636C';
  const SF = '#0F1216';
  const SS = 'rgba(255,255,255,0.10)';
  const AF = '#15120D';
  const AS = 'rgba(196,150,45,0.38)';
  const RED = '#B04040';
  const ORG = '#A07030';
  const GF = 'Geist, system-ui, sans-serif';

  return (
    <svg
      viewBox="0 0 580 620"
      className="mx-auto block w-full max-w-lg"
      aria-label="Multi-agent system architecture: User and Frontend communicate with an API, which feeds into a 3-stage agent pipeline (Entity, Filter, Validator) with a retry loop back from Validator to Filter and Entity agents."
      role="img"
    >
      <defs>
        <marker
          id="arr"
          markerWidth="8"
          markerHeight="6"
          refX="6"
          refY="3"
          orient="auto"
        >
          <polygon points="0,0 6,3 0,6" fill={F} />
        </marker>
        <marker
          id="arr-dim"
          markerWidth="8"
          markerHeight="6"
          refX="6"
          refY="3"
          orient="auto"
        >
          <polygon points="0,0 6,3 0,6" fill={D} />
        </marker>
        <marker
          id="arr-red"
          markerWidth="8"
          markerHeight="6"
          refX="6"
          refY="3"
          orient="auto"
        >
          <polygon points="0,0 6,3 0,6" fill={RED} />
        </marker>
        <marker
          id="arr-org"
          markerWidth="8"
          markerHeight="6"
          refX="6"
          refY="3"
          orient="auto"
        >
          <polygon points="0,0 6,3 0,6" fill={ORG} />
        </marker>
      </defs>

      {/* ── System boxes ── */}
      <rect
        x="200"
        y="16"
        width="160"
        height="44"
        rx="10"
        fill={SF}
        stroke={SS}
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="38"
        textAnchor="middle"
        dominantBaseline="central"
        fill={T}
        fontSize="15"
        fontFamily={GF}
      >
        User
      </text>

      <rect
        x="200"
        y="118"
        width="160"
        height="44"
        rx="10"
        fill={SF}
        stroke={SS}
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="140"
        textAnchor="middle"
        dominantBaseline="central"
        fill={T}
        fontSize="15"
        fontFamily={GF}
      >
        Frontend
      </text>

      <rect
        x="200"
        y="220"
        width="160"
        height="44"
        rx="10"
        fill={SF}
        stroke={SS}
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="242"
        textAnchor="middle"
        dominantBaseline="central"
        fill={T}
        fontSize="15"
        fontFamily={GF}
      >
        API
      </text>

      {/* ── Agent boxes ── */}
      <rect
        x="200"
        y="333"
        width="160"
        height="44"
        rx="10"
        fill={AF}
        stroke={AS}
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="355"
        textAnchor="middle"
        dominantBaseline="central"
        fill={T}
        fontSize="15"
        fontFamily={GF}
      >
        Entity Agent
      </text>

      <rect
        x="200"
        y="433"
        width="160"
        height="44"
        rx="10"
        fill={AF}
        stroke={AS}
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="455"
        textAnchor="middle"
        dominantBaseline="central"
        fill={T}
        fontSize="15"
        fontFamily={GF}
      >
        Filter Agent
      </text>

      <rect
        x="200"
        y="533"
        width="160"
        height="44"
        rx="10"
        fill={AF}
        stroke={AS}
        strokeWidth="1.5"
      />
      <text
        x="280"
        y="555"
        textAnchor="middle"
        dominantBaseline="central"
        fill={T}
        fontSize="15"
        fontFamily={GF}
      >
        Validator Agent
      </text>

      {/* ── Taxonomy (context input) ── */}
      <rect
        x="385"
        y="333"
        width="155"
        height="44"
        rx="10"
        fill={SF}
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="1.5"
        strokeDasharray="5,3"
      />
      <text
        x="462"
        y="355"
        textAnchor="middle"
        dominantBaseline="central"
        fill={D}
        fontSize="14"
        fontFamily={GF}
      >
        Taxonomy
      </text>

      {/* ── Main flow: User ↔ Frontend ── */}
      <line
        x1="286"
        y1="61"
        x2="286"
        y2="116"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />
      <line
        x1="274"
        y1="116"
        x2="274"
        y2="61"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />
      <text x="292" y="90" fill={D} fontSize="11" fontFamily={GF}>
        Query
      </text>
      <text
        x="268"
        y="90"
        textAnchor="end"
        fill={D}
        fontSize="11"
        fontFamily={GF}
      >
        Results
      </text>

      {/* ── Frontend ↔ API ── */}
      <line
        x1="286"
        y1="163"
        x2="286"
        y2="218"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />
      <line
        x1="274"
        y1="218"
        x2="274"
        y2="163"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />

      {/* ── API → Entity Agent ── */}
      <line
        x1="280"
        y1="265"
        x2="280"
        y2="331"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />

      {/* ── Entity Agent → Filter Agent ── */}
      <line
        x1="280"
        y1="378"
        x2="280"
        y2="431"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />

      {/* ── Filter Agent → Validator Agent ── */}
      <line
        x1="280"
        y1="478"
        x2="280"
        y2="531"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />

      {/* ── Taxonomy → Entity Agent (dashed context input) ── */}
      <line
        x1="383"
        y1="355"
        x2="362"
        y2="355"
        stroke={D}
        strokeWidth="1.5"
        strokeDasharray="5,3"
        markerEnd="url(#arr-dim)"
      />

      {/* ── Orange retry: Validator → Filter Agent ── */}
      <path
        d="M 200,548 L 120,548 L 120,455 L 202,455"
        fill="none"
        stroke={ORG}
        strokeWidth="1.5"
        strokeDasharray="5,3"
        markerEnd="url(#arr-org)"
      />

      {/* ── Red retry: Validator → Entity Agent ── */}
      <path
        d="M 200,562 L 82,562 L 82,355 L 202,355"
        fill="none"
        stroke={RED}
        strokeWidth="1.5"
        strokeDasharray="5,3"
        markerEnd="url(#arr-red)"
      />

      {/* ── Validated result: Validator Agent → API (right-side return path) ── */}
      <path
        d="M 362,555 L 548,555 L 548,242 L 362,242"
        fill="none"
        stroke={F}
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />
      <text
        x="548"
        y="399"
        fill={D}
        fontSize="11"
        fontFamily={GF}
        textAnchor="middle"
        transform="rotate(-90, 548, 399)"
      >
        validated result
      </text>

      {/* ── Retry labels ── */}
      {/* Orange path: routes back when filter key mapping is wrong */}
      <text x="126" y="500" fill={D} fontSize="11" fontFamily={GF}>
        key error
      </text>
      {/* Red path: routes back when entity extraction / intent was misread */}
      <text x="88" y="408" fill={D} fontSize="11" fontFamily={GF}>
        intent error
      </text>
      {/* Branching note: clarifies the routing is conditional on error source */}
      <text
        x="280"
        y="592"
        textAnchor="middle"
        fill={F}
        fontSize="10"
        fontFamily={GF}
      >
        Validator routes to the agent responsible for the error
      </text>
    </svg>
  );
}

export default function SemanticSearchPage() {
  return (
    <main className="bg-ink min-h-screen">
      <Navbar sections={NAV} />

      <div className="mx-auto max-w-295 px-5 md:px-20">
        {/* ── Back nav ── */}
        <div className="pt-28 pb-10 md:pt-32">
          <Link
            href="/#projects"
            className="text-faint hover:text-accent inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-240"
          >
            <ArrowRight className="rotate-180 text-[14px]" />
            Back to projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="border-line relative border-b pb-20 md:pb-25">
          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 bg-[radial-gradient(400px_at_100%_0%,var(--color-accent),transparent_65%)] opacity-[0.07]" />

          <div className="mb-10 flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="text-dim border-line rounded border px-2 py-0.75 font-mono text-[10px]"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="font-display text-text mb-8 text-[clamp(48px,7vw,96px)] leading-[1.02] font-normal tracking-[-0.03em]">
            Semantic Search
            <br />
            Engine
          </h1>

          <p className="text-dim mb-10 max-w-155 text-[17px] leading-[1.6]">
            A 3-stage multi-agent pipeline that turns natural language into
            structured product catalog filters. Built as my CS bachelor thesis
            in collaboration with Stylib.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-faint font-mono text-[11px] tracking-widest">
              Bachelor Thesis · 2026 · UC3M
            </span>
            <span className="bg-line2 h-3 w-px" />
            {/* TODO: Remove disabled + update href once thesis.pdf is added to /public/thesis.pdf */}
            <button
              disabled
              className="border-line bg-surface text-faint inline-flex cursor-not-allowed items-center gap-2 rounded border px-4 py-2 font-mono text-[11px] tracking-[0.08em] opacity-50"
            >
              <FileTextIcon size={14} />
              Download Thesis
              <span className="text-accent text-[9px] tracking-[0.12em] uppercase">
                · Soon
              </span>
            </button>
            <button
              disabled
              className="border-line bg-surface text-faint inline-flex cursor-not-allowed items-center gap-2 rounded border px-4 py-2 font-mono text-[11px] tracking-[0.08em] opacity-50"
            >
              GitHub · Private
            </button>
          </div>
        </section>

        {/* ── 01 / Problem ── */}
        <section
          id="problem"
          className="border-line scroll-mt-25 border-b py-20 md:py-25"
        >
          <SectionHeader
            label="01 / Problem"
            title="Why catalog search is hard"
          />
          <div className="space-y-14 md:space-y-16">
            {/* Row 1: the problem */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className="rounded-2.5 border-line overflow-hidden border opacity-85">
                <div className="border-line text-faint border-b px-3 py-2 font-mono text-[9px] tracking-[0.12em] uppercase">
                  The filter interface users faced
                </div>
                <Image
                  src="/filters_hard.gif"
                  alt="Traditional catalog filter interface with dozens of facets and dropdowns"
                  width={800}
                  height={450}
                  unoptimized
                  className="w-full brightness-90"
                />
              </div>
              <div className="space-y-3">
                <div className="text-faint font-mono text-[10px] tracking-[0.14em] uppercase">
                  The problem
                </div>
                <p className="text-dim text-[15px] leading-[1.7]">
                  Searching a product catalog for architectural materials means
                  wading through hundreds of facets: species, finish, width,
                  thickness, color, supplier. Keyword search fails people who
                  don&apos;t know the exact terminology, and filter forms with
                  dozens of dropdowns mostly get ignored.
                </p>
              </div>
            </div>

            {/* Row 2: the solution */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14">
              <div className="rounded-3.5 border-line bg-surface2 overflow-hidden border font-mono text-[13px]">
                <div className="border-line text-faint border-b px-4 py-2.5 text-[10px] tracking-[0.14em] uppercase">
                  Example · query to filter string
                </div>
                <div className="space-y-5 p-6">
                  <div>
                    <div className="text-accent mb-2.5 text-[10px] tracking-[0.12em] uppercase">
                      Input
                    </div>
                    <div className="text-text leading-[1.55]">
                      &quot;red oak flooring wider than 150mm under 50€/m²&quot;
                    </div>
                  </div>
                  <div className="text-faint flex items-center gap-3 text-[11px]">
                    <span className="bg-line h-px flex-1" />
                    <span>3-agent pipeline</span>
                    <span className="bg-line h-px flex-1" />
                  </div>
                  <div>
                    <div className="text-accent mb-2.5 text-[10px] tracking-[0.12em] uppercase">
                      Output
                    </div>
                    <div className="text-dim text-[12px] leading-[1.9]">
                      <span className="text-faint">(</span>
                      <span>meta.optionset.type::Color[io]:red</span>
                      <br />
                      <span className="text-faint">&amp;</span>
                      <span>meta.optionset.type::Species[io]:oak</span>
                      <br />
                      <span className="text-faint">&amp;</span>
                      <span>meta.optionset.type::Width[ge]:150</span>
                      <br />
                      <span className="text-faint">&amp;</span>
                      <span>meta.price[le]:50</span>
                      <span className="text-faint">)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-faint font-mono text-[10px] tracking-[0.14em] uppercase">
                  The solution
                </div>
                <div className="text-dim space-y-4 text-[15px] leading-[1.7]">
                  <p>
                    Natural language is the better interface. Users describe
                    what they need the way they would to a colleague, and the
                    system figures out the filters. The hard part is doing that
                    reliably across a taxonomy of thousands of product variants.
                  </p>
                  <p>
                    This thesis builds and benchmarks a multi-agent solution:
                    one LLM extracts the search intent, a second maps it to
                    catalog filters, and a third validates the result. If the
                    filters are wrong, the pipeline corrects itself and tries
                    again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 / Architecture ── */}
        <section
          id="architecture"
          className="border-line scroll-mt-25 border-b py-20 md:py-25"
        >
          <SectionHeader
            label="02 / Architecture"
            title="3-stage multi-agent pipeline"
          />

          {/* SVG pipeline diagram */}
          <div className="rounded-4.5 border-line bg-surface mb-14 border p-8 md:p-12">
            <ArchitectureDiagram />
            <p className="text-faint mt-6 text-center font-mono text-[10px] tracking-[0.08em]">
              General flow of the multi-agent system
            </p>
          </div>

          {/* Agent cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {agents.map((agent) => (
              <div
                key={agent.num}
                className="rounded-4.5 border-line bg-surface flex flex-col gap-4 border p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-accent font-mono text-[11px] tracking-[0.14em]">
                    {agent.num}
                  </span>
                  <span className="bg-accent mt-1 h-1.5 w-1.5 shrink-0 rounded-full opacity-40" />
                </div>
                <h3 className="font-display text-text text-[22px] leading-tight font-normal tracking-[-0.01em]">
                  {agent.name}
                </h3>
                <p className="text-dim flex-1 text-[13px] leading-[1.65]">
                  {agent.desc}
                </p>
                <div className="border-line space-y-2 border-t pt-4">
                  <div className="flex gap-3 font-mono text-[10px]">
                    <span className="text-faint w-6 shrink-0">in</span>
                    <span className="text-dim">{agent.input}</span>
                  </div>
                  <div className="flex gap-3 font-mono text-[10px]">
                    <span className="text-faint w-6 shrink-0">out</span>
                    <span className="text-accent-tags">{agent.output}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-faint mt-6 text-center font-mono text-[11px] tracking-[0.06em]">
            Validator routes issues to Filter Agent or Entity Agent depending on
            error source · max 3 retries
          </p>
        </section>

        {/* ── 03 / Demo ── */}
        <section
          id="demo"
          className="border-line scroll-mt-25 border-b py-20 md:py-25"
        >
          <SectionHeader label="03 / Demo" title="See it in action" />
          {/* TODO: Replace with <video controls src="/thesis-demo.mp4" /> or <iframe> embed once demo is recorded */}
          <div className="rounded-4.5 border-line bg-surface2 relative aspect-video w-full overflow-hidden border">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,var(--color-accent),transparent_65%)] opacity-[0.05]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="border-line2 bg-surface text-dim hover:text-accent hover:border-accent flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border pl-0.5 transition-all duration-240">
                <PlayIcon />
              </div>
              <span className="text-faint font-mono text-[11px] tracking-[0.14em] uppercase">
                Demo coming soon
              </span>
            </div>
          </div>
          <p className="text-faint mt-4 text-center font-mono text-[11px] tracking-[0.06em]">
            UI walkthrough: natural language query to filtered catalog results
          </p>
        </section>

        {/* ── 04 / Pipeline Trace ── */}
        <section
          id="trace"
          className="border-line scroll-mt-25 border-b py-20 md:py-25"
        >
          <SectionHeader
            label="04 / Pipeline Trace"
            title={
              <>
                What the agents
                <br />
                actually produce
              </>
            }
          />
          {/* TODO: Replace static trace below with an asciinema embed or terminal screen recording once available */}
          <div className="rounded-3.5 border-line overflow-hidden border font-mono text-[13px]">
            <div className="bg-surface border-line flex items-center gap-1.5 border-b px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/60" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <span className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="text-faint ml-3 text-[10px] tracking-[0.12em] uppercase">
                Pipeline trace · example run
              </span>
            </div>
            <div className="bg-ink overflow-x-auto p-6 leading-[1.8] md:p-8">
              <div className="text-faint min-w-max">
                <span className="text-dim">$ </span>
                <span>query: </span>
                <span className="text-text">
                  &quot;red oak flooring wider than 150mm under 50€/m²&quot;
                </span>
              </div>
              <div className="bg-line my-4 h-px" />

              <div className="text-accent-dim font-medium">▸ EntityAgent</div>
              <div className="text-dim ml-4">
                category:{' '}
                <span className="text-accent-tags">Wood flooring</span>
              </div>
              <div className="text-dim ml-4">conditions:</div>
              <div className="text-faint ml-8">Color = &quot;red&quot;</div>
              <div className="text-faint ml-8">Species = &quot;oak&quot;</div>
              <div className="text-faint ml-8">Width ≥ 150</div>
              <div className="text-faint ml-8">Price ≤ 50</div>

              <div className="bg-line my-4 h-px" />
              <div className="text-accent-dim font-medium">▸ FilterAgent</div>
              <div className="text-dim ml-4">resolving 4 conditions…</div>
              <div className="text-faint ml-8">
                meta.optionset.type::Color[io]:red
              </div>
              <div className="text-faint ml-8">
                meta.optionset.type::Species[io]:oak
              </div>
              <div className="text-faint ml-8">
                meta.optionset.type::Width[ge]:150
              </div>
              <div className="text-faint ml-8">meta.price[le]:50</div>

              <div className="bg-line my-4 h-px" />
              <div className="text-accent-dim font-medium">
                ▸ ValidatorAgent
              </div>
              <div className="text-dim ml-4">
                checking against original query…
              </div>
              <div className="text-accent ml-4">✓ valid · no issues found</div>

              <div className="bg-line my-4 h-px" />
              <div className="text-accent">
                ✓ <span className="text-text">filter_string: </span>
                <span className="text-dim text-[12px] break-all">
                  (meta.optionset.type::Color[io]:red&amp;meta.optionset.type::Species[io]:oak&amp;meta.optionset.type::Width[ge]:150&amp;meta.price[le]:50)
                </span>
              </div>
              <div className="text-faint">
                {'  '}F1: <span className="text-accent-tags">1.00</span>
                {'  '}·{'  '}3 agents{'  '}·{'  '}1 pass{'  '}·{'  '}0 retries
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 / Results ── */}
        <section
          id="results"
          className="border-line scroll-mt-25 border-b py-20 md:py-25"
        >
          <SectionHeader label="05 / Results" title="Benchmark performance" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {[
              {
                value: '≥ 0.5',
                label: 'Minimum F1 pass threshold',
                sub: 'token-level filter accuracy per query',
              },
              {
                value: '53',
                label: 'Ground-truth test queries',
                sub: 'natural language to filter string pairs',
              },
              {
                value: 'N×M',
                label: 'Model combinations swept',
                sub: 'main model × validator model pairs',
              },
            ].map(({ value, label, sub }) => (
              <div
                key={label}
                className="rounded-4.5 border-line bg-surface border p-7"
              >
                <div className="font-display text-text mb-4 text-[52px] leading-none font-normal tracking-[-0.03em]">
                  {value}
                </div>
                <div className="text-dim mb-1.5 text-[14px] leading-snug">
                  {label}
                </div>
                <div className="text-faint font-mono text-[10px]">{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 06 / Stack ── */}
        <section
          id="stack"
          className="border-line scroll-mt-25 border-b py-20 md:py-25"
        >
          <SectionHeader label="06 / Stack" title="Built with" />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stackGroups.map(({ group, items }) => (
              <div key={group}>
                <div className="text-faint mb-4 font-mono text-[10px] tracking-[0.14em] uppercase">
                  {group}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-dim border-line bg-surface hover:border-line2 hover:text-text rounded border px-3 py-1.5 font-mono text-[11px] transition-all duration-240"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 07 / Thesis ── */}
        <section
          id="thesis"
          className="border-line scroll-mt-25 border-b py-20 md:py-25"
        >
          <SectionHeader label="07 / Thesis" title="Read the full paper" />
          {/* TODO: Add thesis PDF to /public/thesis.pdf, remove disabled prop, update href below */}
          <div className="rounded-4.5 border-accent/25 bg-surface flex flex-col items-start gap-8 border p-8 md:flex-row md:items-center md:p-10">
            <div className="text-accent/50 shrink-0">
              <FileTextIcon size={36} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-display text-text mb-2 text-[22px] leading-tight font-normal tracking-[-0.01em] md:text-[26px]">
                Sistema basado en procesamiento de lenguaje natural para la
                generación de filtros en sistemas de búsqueda
              </div>
              <div className="text-faint font-mono text-[11px] tracking-[0.06em]">
                Rosa Reyes · Bachelor Thesis · Computer Science · UC3M · 2026
              </div>
            </div>
            <button
              disabled
              className="border-line bg-surface2 text-faint inline-flex shrink-0 cursor-not-allowed items-center gap-2.5 rounded border px-5 py-3 font-mono text-[11px] tracking-[0.08em] opacity-50"
            >
              <FileTextIcon size={14} />
              <span>Download PDF</span>
              <span className="text-accent text-[9px] tracking-[0.12em] uppercase">
                · Soon
              </span>
            </button>
          </div>
        </section>

        {/* ── Footer back-nav ── */}
        <div className="flex justify-center py-16">
          <Link
            href="/#projects"
            className="text-faint hover:text-accent inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase transition-colors duration-240"
          >
            <ArrowRight className="rotate-180 text-[14px]" />
            Back to projects
          </Link>
        </div>
      </div>
    </main>
  );
}
