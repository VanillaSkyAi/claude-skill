const SUPABASE_URL = "https://vjcfvsooygzrwinscobk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2Z2c29veWd6cndpbnNjb2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NTQzMzQsImV4cCI6MjA4ODIzMDMzNH0.9JirSFdP3D1pyn90YNUnqyG_709HZUMAGQ5Us9O57d0";

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
  beatMarkers: number[];
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

  const rows: any[] = await res.json();

  const tracks: Track[] = rows
    .filter((r) => r.scene_slots && r.beat_markers)
    .map((r) => ({
      id: r.id,
      name: r.name,
      duration: r.duration,
      format: r.duration < 18 ? "short" : r.duration > 32 ? "long" : "standard",
      description: r.description || "",
      videoTypes: r.video_types || [],
      sceneSlots: r.scene_slots,
      beatMarkers: r.beat_markers,
    }));

  return tracks;
}
