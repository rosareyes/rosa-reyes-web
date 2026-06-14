'use client';

import type { ReactNode } from 'react';
import { useAnalytics } from '@/app/hooks/useAnalytics';

export default function ThesisDownloadLink({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const { track } = useAnalytics();

  return (
    <a
      href="/thesis.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('thesis-download')}
      className={className}
    >
      {children}
    </a>
  );
}
