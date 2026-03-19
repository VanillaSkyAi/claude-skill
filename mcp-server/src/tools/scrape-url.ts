const SUPABASE_URL = "https://vjcfvsooygzrwinscobk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2Z2c29veWd6cndpbnNjb2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NTQzMzQsImV4cCI6MjA4ODIzMDMzNH0.9JirSFdP3D1pyn90YNUnqyG_709HZUMAGQ5Us9O57d0";

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
