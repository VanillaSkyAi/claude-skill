import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface ScrapeResult {
  title: string;
  description: string;
  headlines: string[];
  bodyText: string;
  ogImage: string | null;
  images: { src: string; alt: string; width: number; height: number }[];
  sourceUrl: string;
  brandColors: { primary?: string; accent?: string } | null;
  favicon: string | null;
}

export async function scrapeUrl(url: string): Promise<ScrapeResult> {
  const resp = await fetch(
    `${SUPABASE_URL}/functions/v1/scrape-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ url }),
    },
  );

  if (!resp.ok) {
    const err = await resp.json();
    throw new Error(err.error || `Scrape failed: ${resp.status}`);
  }

  return (await resp.json()) as ScrapeResult;
}
