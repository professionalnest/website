'use client'

import SuspendedPostHogPageView from '@/components/PosthogCompontent';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {

  const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY!;
  const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST!;

    useEffect(() => {
      posthog.init(POSTHOG_KEY, {
        api_host: POSTHOG_HOST,
        // PostHog's $pageview autocapture relies on page load events. 
        // Since Next.js acts as a single-page app, 
        // this event doesn't trigger on navigation and 
        // we need to capture $pageview events manually.
        capture_pageview: false
      })
  }, [])

  return (
    <PHProvider client={posthog}>
      <SuspendedPostHogPageView />
      {children}
    </PHProvider>
  )
}