'use client';

import { useEffect } from 'react';
import { track } from '@/lib/analytics';

const MILESTONES_SECONDS = [30, 60, 180] as const;

/**
 * Invisible client component:
 * - fires `section_view` the first time each [data-section] scrolls into view
 * - fires `time_milestone` at 30s / 60s / 3min
 * GA4 additionally reports average engagement time automatically.
 */
export default function AnalyticsTracker() {
  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).dataset.section;
          if (entry.isIntersecting && id && !seen.has(id)) {
            seen.add(id);
            track('section_view', { section: id });
          }
        });
      },
      { threshold: 0.4 },
    );
    document
      .querySelectorAll<HTMLElement>('[data-section]')
      .forEach((el) => observer.observe(el));

    const timers = MILESTONES_SECONDS.map((s) =>
      window.setTimeout(() => track('time_milestone', { seconds: s }), s * 1000),
    );

    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return null;
}
