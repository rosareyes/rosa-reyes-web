'use client';

import { useEffect, useRef } from 'react';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { useAnalytics } from '@/app/hooks/useAnalytics';

const SECTIONS = ['about', 'work', 'stack', 'contact'] as const;

export function SectionTracker() {
  const active = useActiveSection(SECTIONS);
  const { track } = useAnalytics();
  const fired = useRef(new Set<string>());

  useEffect(() => {
    if (active && !fired.current.has(active)) {
      fired.current.add(active);
      track('section-view', { section: active });
    }
  }, [active, track]);

  return null;
}
