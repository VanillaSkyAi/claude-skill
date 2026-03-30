---
name: audio-tracks
description: Music track selection and audio config format
---

# Music Track Catalog

> **Scope:** Track selection and audio config format. For pacing and timing weights see [composition-rules.md](composition-rules.md). For template timing see [templates.md](templates.md).

Tracks are selected based on **mood** + **duration fit**.

Call `list_tracks` MCP tool to get the catalog. Each track returns:
- `id` — track UUID (use as `trackId` in config)
- `name` — track name
- `duration` — total length in seconds
- `description` — feel and character of the track
- `videoTypes` — which video types the track works best for
- `beatCount` — number of detected beats

## Track Selection Rules

**Priority order:**
1. **Arc mood match** — Pick a track whose energy matches the arc (see table below)
2. **Duration fit** — Track duration close to your estimated total from scene planning
3. **NEVER pick the same track twice in a row** — if you've used a track before in this session, pick a different one

Always call `list_tracks` for current data — never hardcode track names.

## Video Type → Track Mood

| Video type | Track energy | Look for in description |
|------------|-------------|------------------------|
| **Launch / Trailer** | Building, cinematic, epic | "build", "epic", "orchestral", "cinematic", "momentum" |
| **Explainer** | Steady, clear, modern | "gentle", "optimistic", "modern", "clean", "steady" |
| **Ad / Promotion** | Urgent, punchy, driving | "driving", "energetic", "punchy", "intense", "fast" |
| **Showcase / Demo** | Polished, rhythmic, confident | "confident", "modern", "polished", "groove", "swagger" |
| **Social** | High-energy, fun, bouncy | "upbeat", "bounce", "fun", "energy", "drops" |
| **Event** | Exciting, building, celebratory | "build", "energy", "celebration", "epic" |

**Do NOT match by use-case keywords** like "startup pitches" or "SaaS demos" — match by the FEEL of the music. Two videos about the same product should sound different if they have different tones.

## Variants — Automatic Track Variety

When calling `save_config`, variants are generated automatically. The server picks 3 contrasting mood profiles (e.g., Cinematic/Clean/Energetic), each with a different track, hook template, closer template, font, and text effect. The user sees 3 tabs in the editor and picks their favorite.

**You don't need to worry about track variety** — the variant system handles it. Just pick the one track that best matches the arc mood for your base composition. The server will select 2 additional contrasting tracks automatically.

## Audio Config Format

The `save_config` endpoint auto-populates beat markers from the trackId. You only need to pass `trackId` and `duration`:

```json
{
  "trackId": "track-uuid-here",
  "audioUrl": "",
  "duration": 27.6
}
```

- `trackId` — the track's `id` from `list_tracks`
- `audioUrl` — leave empty, the editor loads it from the track database
- `duration` — the track's duration in seconds (from `list_tracks`)
- `beatMarkers` — **optional**, auto-populated server-side from trackId if omitted
