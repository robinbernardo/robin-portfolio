'use client';

import { sendGAEvent } from '@next/third-parties/google';

type EventName = 'section_view' | 'time_milestone' | 'project_click' | 'contact_click';

/** Safe wrapper — no-ops when GA isn't configured (e.g. local dev without .env.local). */
export function track(name: EventName, params: Record<string, string | number>): void {
  try {
    sendGAEvent('event', name, params);
  } catch {
    // GA not loaded — ignore
  }
}
