import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface MoodTags {
  energy?: string;
  mood?: string[];
  movement?: string;
}

export interface Track {
  id: string;
  name: string;
  duration: number;
  description: string;
  mood_tags: MoodTags;
  beatCount: number;
}

export async function listTracks(): Promise<Track[]> {
  const url = `${SUPABASE_URL}/rest/v1/track_configs?public_skill_ready=eq.true&select=id,name,duration,description,mood_tags,beat_markers`;

  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch tracks: ${res.status}`);
  }

  interface TrackRow {
    id: string;
    name: string;
    duration: number;
    description?: string;
    mood_tags?: MoodTags;
    beat_markers?: number[];
  }

  const rows: TrackRow[] = await res.json();

  // Return lightweight listing — no beatMarkers to save tokens.
  // The save_config endpoint looks up beats server-side from the trackId.
  const tracks = rows
    .filter((r) => r.beat_markers)
    .map((r) => ({
      id: r.id,
      name: r.name,
      duration: r.duration,
      description: r.description || "",
      mood_tags: r.mood_tags || { energy: "medium", mood: [], movement: "steady" },
      beatCount: r.beat_markers!.length,
    }));

  return tracks;
}
