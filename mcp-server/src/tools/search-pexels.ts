const SUPABASE_URL = "https://vjcfvsooygzrwinscobk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2Z2c29veWd6cndpbnNjb2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NTQzMzQsImV4cCI6MjA4ODIzMDMzNH0.9JirSFdP3D1pyn90YNUnqyG_709HZUMAGQ5Us9O57d0";

export interface PexelsResult {
  id: number;
  type: "video" | "photo";
  src: string;
  thumbnail?: string;
  photographer?: string;
}

export interface SearchPexelsParams {
  query: string;
  type?: "video" | "photo";
  per_page?: number;
  orientation?: "portrait" | "landscape";
}

export async function searchPexels(
  params: SearchPexelsParams,
): Promise<{ results: PexelsResult[]; totalResults: number }> {
  const resp = await fetch(
    `${SUPABASE_URL}/functions/v1/search-pexels`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        query: params.query,
        type: params.type || "video",
        per_page: params.per_page || 5,
        orientation: params.orientation,
      }),
    },
  );

  if (!resp.ok) {
    const err = await resp.json();
    throw new Error(err.error || `Search failed: ${resp.status}`);
  }

  const data = await resp.json();
  return {
    results:
      data.results?.map((r: Record<string, unknown>) => ({
        id: r.id,
        type: params.type || "video",
        src: r.src,
        thumbnail: r.thumbnail,
        photographer: r.photographer,
      })) || [],
    totalResults: data.total_results || 0,
  };
}
