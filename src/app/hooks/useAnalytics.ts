'use client';

import { useCallback } from 'react';

type AnalyticsEvent =
  | 'cv-download'
  | 'email-click'
  | 'link-click'
  | 'project-click'
  | 'section-view';

type EventData = Record<string, string | number | boolean>;

export function useAnalytics() {
  const track = useCallback((event: AnalyticsEvent, data?: EventData) => {
    window.umami?.track(event, data);
  }, []);
  return { track };
}
