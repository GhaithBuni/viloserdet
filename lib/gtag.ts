// lib/gtag.ts

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

// Track page views
export const pageview = (url: string): void => {
  (window as any).gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GTagEvent): void => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
