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
  mood: string[];
  vibe: string;
  bestFor: string;
  tempoFeel: string;
  energyCurve: string;
  energyLevel: string;
  sceneSlots: SceneSlot[];
  beatMarkers: number[];
}

export async function listTracks(mood?: string): Promise<Track[]> {
  const url = `${SUPABASE_URL}/rest/v1/track_configs?public_skill_ready=eq.true&select=id,name,duration,format,mood,vibe,best_for,tempo_feel,energy_curve,energy_level,scene_slots,beat_markers`;

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

  let tracks: Track[] = rows
    .filter((r) => r.scene_slots && r.beat_markers)
    .map((r) => ({
      id: r.id,
      name: r.name,
      duration: r.duration,
      format: r.format || "standard",
      mood: r.mood || [],
      vibe: r.vibe || "",
      bestFor: r.best_for || "",
      tempoFeel: r.tempo_feel || "",
      energyCurve: r.energy_curve || "",
      energyLevel: r.energy_level || "medium",
      sceneSlots: r.scene_slots,
      beatMarkers: r.beat_markers,
    }));

  if (mood) {
    const lower = mood.toLowerCase();
    tracks = tracks.filter((t) =>
      t.mood.some((m) => m.toLowerCase().includes(lower)),
    );
  }

  return tracks;
}
