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
1. **Mood match** — Track description fits the arc's mood (see composition-rules.md)
2. **Duration fit** — Track duration close to your estimated total from scene planning
3. **Vary selection** — Don't default to the same track every time

Always call `list_tracks` for current data — never hardcode track names.

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
