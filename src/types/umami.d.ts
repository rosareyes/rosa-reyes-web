interface UmamiTracker {
  track(eventName: string, data?: Record<string, string | number | boolean>): void;
}

declare global {
  interface Window {
    umami?: UmamiTracker;
  }
}

export {};
