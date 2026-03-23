---
name: audio-tracks
description: Music track catalog with scene slots and selection guide
metadata:
  tags: audio, music, tracks, beats, slots, video-types
---

# Music Track Catalog

Tracks are selected based on **video type match** + **structural fit** (slot count matches your scene count).

Call `list_tracks` MCP tool to get the full catalog with scene slots. Each track returns:
- `sceneSlots[]` — pre-computed time ranges for each scene, with narrative roles
- `beatMarkers[]` — raw beat times (needed for the audio config)
- `videoTypes` — which video types the track works best for
- `description` — feel and character of the track

## How Scene Slots Work

Beat markers define where scene transitions happen. Segments shorter than 2s are merged with neighbors. Each slot has a **role**:

| Role | Position | Purpose |
|------|----------|---------|
| intro | First slot | Hook, brand reveal, opening |
| build | Before hero | Setup, context, problem statement |
| hero | Longest middle slot | Key demo, main message, biggest moment |
| accelerate | After hero | Features, social proof, momentum |
| climax | Before outro | Impact, results, peak energy |
| outro | Last slot | CTA, end screen, logo |

## Track Selection Rules

**Priority order:**
1. **Video type match** — Track's `videoTypes` includes the video type (ad, trailer, showreel, social)
2. **Slot count ≈ scene count** — A 5-scene story needs a track with ~5-6 slots, not 9
3. **Description feel** — Track description fits the brand and message
4. **Hero slot fits key scene** — If the main demo needs 6s, hero slot must be ≥ 6s

## Quick Reference

Call `list_tracks` for exact slot data. This table is for quick orientation:

| Track | Duration | Slots | Format | Video types |
|-------|----------|-------|--------|-------------|
| Intense trailer cinematic | 20s | 5 | standard | trailer, brand-story, event |
| Grand Project Warrior | 30.1s | 6 | standard | trailer, brand-story, ad, event |
| Grand project fear and fire | 16.6s | 5 | short | trailer, social, ad |
| Grand project unbreakable | 17s | 4 | short | ad, brand-story, showreel |

## Timing Rule

Each scene fills exactly one slot. Set timing directly from slot boundaries:

```json
{
  "timing": { "startTime": 4.7, "endTime": 8.1 }
}
```

Never invent your own timing values. Always use slot `start` and `end`.

## Template Fit by Slot Duration

| Slot duration | Templates available |
|---------------|-------------------|
| < 2.5s | Background templates only (bg-solid, bg-photo, etc. — 1.5s min) |
| 2.5 – 4s | Most templates (charts, showcases, social, intros) |
| 5s+ | All templates including social-chat (5s min) and social-whatsapp (5s min) |

## Scene Count Defaults (Research-Backed)

| Video type | Scenes | Duration | Pacing |
|------------|--------|----------|--------|
| Social teaser | 3-4 | 10-15s | 2-3s per scene |
| Product ad | 5-6 | 20-30s | 3-4s per scene |
| Brand trailer | 6-8 | 25-35s | 2-4s per scene |
| Showreel | 7-9 | 30-40s | 3-4s per scene |

First 3 seconds are critical — 47% of a video's value is delivered there.

## Audio Config Format

```json
{
  "trackId": "track-uuid-here",
  "audioUrl": "",
  "duration": 27.6,
  "beatDetection": { "sensitivity": 0.5 },
  "beatMarkers": [
    { "time": 1.2 }, { "time": 4.7 }, { "time": 8.1 },
    { "time": 16.6 }, { "time": 18.7 }, { "time": 20.4 },
    { "time": 21.9 }, { "time": 24.9 }
  ]
}
```

- `audioUrl` — leave empty, the editor loads it from the track database
- `beatMarkers` — wrap each time in `{ "time": value }` — copy directly from track's `beatMarkers` array
- `beatDetection.sensitivity` — always `0.5`
