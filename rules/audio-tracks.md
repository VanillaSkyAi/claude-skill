---
name: audio-tracks
description: Music track selection and audio config format
---

# Music Track Catalog

> **Scope:** Track selection and audio config format. For pacing and timing weights see [composition-rules.md](composition-rules.md). For template timing see [templates.md](templates.md).

Tracks are selected based on **mood_tags** + **duration fit**.

Call `list_tracks` MCP tool to get the catalog. Each track returns:
- `id` — track UUID (use as `trackId` in config)
- `name` — track name
- `duration` — total length in seconds
- `description` — feel and character of the track
- `mood_tags` — structured mood metadata (see below)
- `beatCount` — number of detected beats

## Mood Tags

Each track has structured mood metadata with 3 dimensions:

| Dimension | Options | Meaning |
|-----------|---------|---------|
| **energy** | `low`, `medium`, `high` | How intense the track feels |
| **mood** | `happy`, `confident`, `inspiring`, `dramatic`, `playful`, `warm`, `dark`, `relaxed` | What emotion it evokes (1-3 tags per track) |
| **movement** | `building`, `steady`, `drops` | How energy changes over time |

Example: `energy: high | mood: confident, inspiring | movement: building`

## Track Selection Rules

**Priority order:**
1. **Mood tag match** — Pick a track whose energy + mood + movement fits the content
2. **Duration fit** — Track duration close to your estimated total from scene planning
3. **NEVER pick the same track twice in a row** — if you've used a track before in this session, pick a different one

Always call `list_tracks` for current data — never hardcode track names.

## Content → Track Mood Mapping

| Content type | Energy | Mood keywords | Movement |
|-------------|--------|---------------|----------|
| Product launch, feature drop | high | confident, inspiring | building |
| How-to, explainer | medium | warm, relaxed | steady |
| Ad, promotion, sale | high | confident, happy | drops |
| Showcase, demo | medium | confident | steady |
| Social content, fun | high | playful, happy | drops |
| Event, celebration | high | happy, inspiring | building |
| Case study, testimonial | medium | warm, inspiring | steady |
| Milestone, achievement | high | inspiring, dramatic | building |
| Dark/serious topic | low-medium | dark, dramatic | building |

**Do NOT match by use-case keywords** like "startup pitches" or "SaaS demos" — match by the FEEL of the music. Two videos about the same product should sound different if they have different tones.

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
