import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface SceneSlot {
  start: number;
  end: number;
  duration: number;
  role: "intro" | "build" | "hero" | "accelerate" | "climax" | "outro";
}

export interface Track {
  id: string;
  name: string;
  duration: number;
  format: "short" | "standard" | "long";
  description: string;
  videoTypes: string[];
  sceneSlots: SceneSlot[];
  beatMarkers: Array<{ time: number }>;
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
    scene_slots?: SceneSlot[];
    beat_markers?: number[];
  }

  const rows: TrackRow[] = await res.json();

  const tracks: Track[] = rows
    .filter((r) => r.scene_slots && r.beat_markers)
    .map((r) => ({
      id: r.id,
      name: r.name,
      duration: r.duration,
      format: r.duration < 18 ? "short" : r.duration > 32 ? "long" : "standard",
      description: r.description || "",
      videoTypes: r.video_types || [],
      sceneSlots: r.scene_slots!,
      beatMarkers: r.beat_markers!.map((t) => ({ time: t })),
    }));

  return tracks;
}
