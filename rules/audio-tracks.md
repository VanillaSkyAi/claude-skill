---
name: audio-tracks
description: Music track catalog with scene slots and selection guide
metadata:
  tags: audio, music, tracks, beats, slots, video-types
---

# Music Track Catalog

Tracks are selected based on **video type match** + **duration fit** + **mood**.

Call `list_tracks` MCP tool to get the full catalog. Each track returns:
- `beatMarkers[]` — all detected musical beats (typically 30-60+), analyzed with Essentia.js
- `videoTypes` — which video types the track works best for
- `description` — feel and character of the track
- `duration` — total track length in seconds

Scene count is driven by track duration: `round(duration / 3)`, clamped to 4-12 scenes. The system picks optimal beat boundaries at composition time — beats are natural cut points, not pre-computed slots.

## How Scene Layout Works

Beat markers (30-60+ per track) define all possible cut points. At save time, the server picks which beats to use as scene boundaries based on scene count and a pacing curve that makes scenes progressively shorter toward the climax. Each scene gets a narrative **role**:

| Role | Position | Purpose |
|------|----------|---------|
| intro | First scene | Hook, brand reveal, opening |
| build | Early scenes | Setup, context, problem statement |
| hero | Longest middle scene | Key demo, main message, biggest moment |
| accelerate | After hero | Features, social proof, momentum |
| breathe | Brief pause | Breathing room before the climax — use bg-photo/bg-video for a quick visual cut |
| climax | Near the end | Impact, results, peak energy — this is where the video ends |
| outro | Last scene | CTA, end screen, logo (kept very short) |

Videos end at peak energy. There is no slowdown after the climax — the outro is a quick CTA punch, not a wind-down.

## Track Selection Rules

**Priority order:**
1. **Video type match** — Track's `videoTypes` includes the video type (ad, trailer, showreel, social)
2. **Duration fit** — Track duration should match the target video length for the video type
3. **Description feel** — Track description fits the brand and message

## Quick Reference

Call `list_tracks` for exact data. This table is for quick orientation:

| Track | Duration | Scenes (approx) | Format | Video types |
|-------|----------|-----------------|--------|-------------|
| Intense trailer cinematic | 20s | 7 | standard | trailer, brand-story, event |
| Grand Project Warrior | 30.1s | 10 | standard | trailer, brand-story, ad, event |
| Grand project fear and fire | 16.6s | 6 | short | trailer, social, ad |
| Grand project unbreakable | 17s | 6 | short | ad, brand-story, showreel |

## Timing Rule

Use `durationWeight` to control relative scene duration. The server computes `startTime`/`endTime` automatically by snapping to beat boundaries:

```json
{
  "timing": { "durationWeight": 1.0 }
}
```

**Do NOT set `startTime`/`endTime` manually.** The server handles this using durationWeight + beat markers.

## Template Fit by Scene Duration

| Scene duration | Templates available |
|----------------|-------------------|
| < 2s | Background templates only (bg-solid, bg-photo, bg-video — great for quick visual cuts) |
| 2–3s | Most templates (charts, showcases, social, intros) |
| 4s+ | All templates including social-chat and social-whatsapp |

## Scene Count Defaults (Research-Backed)

| Video type | Scenes | Duration | Pacing |
|------------|--------|----------|--------|
| Social teaser | 4-5 | 10-15s | 2-3s per scene |
| Product ad | 7-10 | 20-30s | 2-3s per scene |
| Brand trailer | 8-12 | 25-35s | 2-3s per scene |
| Showreel | 10-12 | 30-40s | 2-3s per scene |

First 3 seconds are critical — 47% of a video's value is delivered there.

## Audio Config Format

```json
{
  "trackId": "track-uuid-here",
  "audioUrl": "",
  "duration": 27.6,
  "beatDetection": { "sensitivity": 0.5 },
  "beatMarkers": [
    { "time": 0.4 }, { "time": 0.9 }, { "time": 1.4 }, { "time": 1.9 },
    { "time": 2.4 }, { "time": 2.9 }, { "time": 3.4 }, { "time": 3.9 },
    { "time": 4.4 }, { "time": 4.9 }, { "time": 5.4 }, { "time": 5.9 },
    { "time": 6.4 }, { "time": 6.9 }, { "time": 7.4 }, { "time": 7.9 },
    { "time": 8.4 }, { "time": 8.9 }, { "time": 9.4 }, { "time": 9.9 },
    { "time": 10.4 }, { "time": 10.9 }, { "time": 11.4 }, { "time": 11.9 },
    { "time": 12.5 }, { "time": 13.1 }, { "time": 13.7 }, { "time": 14.3 },
    { "time": 14.9 }, { "time": 15.5 }, { "time": 16.1 }, { "time": 16.7 },
    { "time": 17.3 }, { "time": 17.9 }, { "time": 18.5 }, { "time": 19.1 },
    { "time": 19.7 }, { "time": 20.3 }, { "time": 20.9 }, { "time": 21.5 },
    { "time": 22.1 }, { "time": 22.7 }, { "time": 23.3 }, { "time": 23.9 },
    { "time": 24.5 }, { "time": 25.1 }, { "time": 25.7 }, { "time": 26.3 },
    { "time": 26.9 }, { "time": 27.4 }
  ]
}
```

- `audioUrl` — leave empty, the editor loads it from the track database
- `beatMarkers` — wrap each time in `{ "time": value }` — copy directly from track's `beatMarkers` array. Tracks typically have 30-60+ beats detected by Essentia.js
- `beatDetection.sensitivity` — always `0.5`
