'use client';

import { useState, useEffect } from 'react';

export default function CursorHalo() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        background: `radial-gradient(420px at ${pos.x}px ${pos.y}px, oklch(0.74 0.18 45 / 0.08), transparent 60%)`,
        transition: 'background 80ms linear',
      }}
    />
  );
}
