import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface Track {
  id: string;
  name: string;
  duration: number;
  format: "short" | "standard" | "long";
  description: string;
  videoTypes: string[];
  beatCount: number;
}

export async function listTracks(): Promise<Track[]> {
  const url = `${SUPABASE_URL}/rest/v1/track_configs?public_skill_ready=eq.true&select=id,name,duration,description,video_types,scene_slots,beat_markers`;

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
    video_types?: string[];
    scene_slots?: unknown[];
    beat_markers?: number[];
  }

  const rows: TrackRow[] = await res.json();

  // Return lightweight listing — no beatMarkers or sceneSlots to save tokens.
  // The save_config endpoint looks up beats server-side from the trackId.
  const tracks = rows
    .filter((r) => r.scene_slots && r.beat_markers)
    .map((r) => ({
      id: r.id,
      name: r.name,
      duration: r.duration,
      format: (r.duration < 18 ? "short" : r.duration > 32 ? "long" : "standard") as Track["format"],
      description: r.description || "",
      videoTypes: r.video_types || [],
      beatCount: r.beat_markers!.length,
    }));

  return tracks;
}
