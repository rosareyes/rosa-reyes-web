'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState, type ReactNode } from 'react';

const TAGS = [
  'Live music',
  'Video games',
  'Bouldering',
  'Travelling',
  'Reading',
  'Coffee',
  'Gym',
] as const;

// Each photo is linked to a phrase in the bio; hovering or tapping the phrase
// (or its thumbnail) swaps the big card. Madrid is shown by default.
const PHOTOS = {
  coffee: {
    src: '/about-madrid.jpg',
    alt: 'Rosa drinking a coffee on a street in central Madrid',
    caption: 'fuel',
    position: '50% 35%',
  },
  keyboard: {
    src: '/about-desk.jpg',
    alt: 'Rosa’s desk: two monitors, a backlit keyboard and tiny Lego plants',
    caption: 'too loud, no regrets',
    position: '50% 72%',
  },
  bouldering: {
    src: '/about-climbing.jpg',
    alt: 'Rosa bouldering on an indoor climbing wall',
    caption: 'hands permitting',
    position: '50% 50%',
  },
  concerts: {
    src: '/about-concert.jpg',
    alt: 'A concert stage bathed in red light',
    caption: 'front row-ish',
    position: '50% 72%',
  },
  books: {
    src: '/about-books.jpg',
    alt: 'New books on the grass at the Madrid book fair',
    caption: 'TBR: optimistic',
    position: '50% 55%',
  },
} as const;

type PhotoId = keyof typeof PHOTOS;
const IDS = Object.keys(PHOTOS) as PhotoId[];

type TriggerProps = {
  id: PhotoId;
  active: PhotoId;
  onSelect: (id: PhotoId) => void;
  children: ReactNode;
};

// Inline phrase in the bio that shows its photo on hover, focus or tap.
function Trigger({ id, active, onSelect, children }: TriggerProps) {
  return (
    <button
      type="button"
      aria-pressed={active === id}
      onMouseEnter={() => onSelect(id)}
      onFocus={() => onSelect(id)}
      onClick={() => onSelect(id)}
      className={clsx(
        'inline cursor-pointer border-b border-dashed pb-px transition-colors duration-200',
        active === id
          ? 'border-accent text-accent'
          : 'border-accent/60 text-text hover:text-accent',
      )}
    >
      {children}
    </button>
  );
}

export default function AboutStory() {
  const [active, setActive] = useState<PhotoId>('coffee');
  const t = { active, onSelect: setActive };
  const current = PHOTOS[active];

  return (
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1.4fr_1fr] md:gap-20">
      <div className="text-dim text-[16px] leading-[1.75] md:text-[17px]">
        <p className="mb-6">
          I&apos;m Rosa, a software engineer based in{' '}
          <strong className="text-text">Madrid</strong>, with a{' '}
          <Trigger id="keyboard" {...t}>
            really loud keyboard
          </Trigger>{' '}
          and a{' '}
          <Trigger id="coffee" {...t}>
            deep cup of coffee
          </Trigger>
          . Lately most of my work sits where products meet AI: agents,
          search, and the backend work that keeps them reliable.
        </p>
        <p className="mb-6">
          I got into programming as a kid because I wanted more out of The Sims.
          Cracking games turned into fixing missing DLLs and mystery Windows
          errors for everyone I knew, which turned into torrenting software,
          which turned into taking online courses and building websites for
          anyone who&apos;d let me. I was self-taught before I even knew that
          was a thing.
        </p>
        <p>
          I started university in Venezuela, ended up finishing my{' '}
          <strong className="text-text">
            Computer Science and Engineering
          </strong>{' '}
          degree at <strong className="text-text">UC3M</strong> in Madrid and
          stayed. Off-screen:{' '}
          <Trigger id="bouldering" {...t}>
            bouldering when my hands let me
          </Trigger>
          ,{' '}
          <Trigger id="concerts" {...t}>
            concerts whenever I can
          </Trigger>
          , video games, and a{' '}
          <Trigger id="books" {...t}>
            stack of books
          </Trigger>{' '}
          I&apos;m definitely going to finish this year.
        </p>
      </div>

      <div>
        <figure className="border-line2 bg-surface relative m-0 mx-auto w-full max-w-90 -rotate-2 rounded-xl border p-2.5 pb-0 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.7)]">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg">
            {IDS.map((id) => (
              <Image
                key={id}
                src={PHOTOS[id].src}
                alt={PHOTOS[id].alt}
                fill
                sizes="(max-width: 768px) 90vw, 360px"
                aria-hidden={id !== active}
                className={clsx(
                  'object-cover transition-[opacity,scale] duration-[500ms] ease-out',
                  id === active
                    ? 'scale-100 opacity-100'
                    : 'scale-[1.03] opacity-0',
                )}
                style={{
                  objectPosition: PHOTOS[id].position,
                  filter: 'saturate(0.95) contrast(1.02)',
                }}
              />
            ))}
          </div>
          <figcaption
            aria-live="polite"
            className="text-faint flex items-center justify-between px-1 py-3 font-mono text-[10px] tracking-[0.18em] uppercase"
          >
            <span>{current.caption}</span>
            <span className="text-accent">
              {String(IDS.indexOf(active) + 1).padStart(2, '0')} / 05
            </span>
          </figcaption>
        </figure>

        <div className="mx-auto mt-5 flex max-w-90 justify-center gap-2">
          {IDS.map((id) => (
            <button
              key={id}
              type="button"
              aria-label={`Show photo: ${PHOTOS[id].caption}`}
              aria-pressed={active === id}
              onMouseEnter={() => setActive(id)}
              onClick={() => setActive(id)}
              className={clsx(
                'relative aspect-square w-11 cursor-pointer overflow-hidden rounded-md border transition-[opacity,border-color] duration-200',
                active === id
                  ? 'border-accent opacity-100'
                  : 'border-line2 opacity-50 hover:opacity-90',
              )}
            >
              <Image
                src={PHOTOS[id].src}
                alt=""
                fill
                sizes="44px"
                className="object-cover"
                style={{ objectPosition: PHOTOS[id].position }}
              />
            </button>
          ))}
        </div>

        <div className="text-faint mt-8 mb-4.5 font-mono text-[10px] tracking-[0.2em] uppercase">
          Currently into
        </div>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <span
              key={t}
              className="border-line2 text-text inline-flex items-center rounded border bg-white/[0.02] px-3.5 py-2 text-[13px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
