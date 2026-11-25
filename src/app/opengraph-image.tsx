import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Rosa Reyes, Software Engineer in Madrid';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Shared preview card for every page (LinkedIn, Slack, WhatsApp...). Colors mirror globals.css.
export default async function OpengraphImage() {
  const memoji = await readFile(join(process.cwd(), 'public/memoji-1.png'));
  const memojiSrc = `data:image/png;base64,${memoji.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 96px',
        background: '#0B0D10',
        backgroundImage:
          'radial-gradient(circle at 78% 40%, rgba(189,147,249,0.22), transparent 55%)',
        color: '#E9ECEF',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{ fontSize: 88, fontWeight: 300, letterSpacing: '-0.03em' }}
        >
          Rosa Reyes
        </div>
        <div style={{ fontSize: 40, color: '#BD93F9', marginTop: 12 }}>
          Software Engineer
        </div>
        <div style={{ fontSize: 28, color: '#9AA3AD', marginTop: 40 }}>
          Full-stack and AI products · Madrid
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#9AA3AD',
            marginTop: 64,
            letterSpacing: '0.12em',
          }}
        >
          ROSAREYES.DEV
        </div>
      </div>
      <img src={memojiSrc} width={340} height={340} alt="" />
    </div>,
    size,
  );
}
