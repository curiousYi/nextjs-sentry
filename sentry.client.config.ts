// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
// import posthog from "posthog-js";

// if (typeof window !== "undefined" && !posthog.__loaded) {
//   posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || "", {
//     api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
//     capture_pageview: true, // Disable automatic pageview capture, as we capture manually
//   });
// }

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    // new posthog.SentryIntegration(
    //   posthog,
    //   process.env.NEXT_PUBLIC_SENTRY_POSTHOG_ORG_NAME,
    //   parseInt(process.env.NEXT_PUBLIC_SENTRY_POSTHOG_PROJECT_ID || "")
    // ),
  ],
});
