---
name: audio-tracks
description: Music track catalog with scene slots, energy curves, and selection guide
metadata:
  tags: audio, music, tracks, beats, slots, mood
---

# Music Track Catalog

Tracks are selected based on **structural fit** (slot count matches your scene count) + **mood match**.

Call `list_tracks` MCP tool to get the full catalog with scene slots. Each track returns:
- `sceneSlots[]` — pre-computed time ranges for each scene, with narrative roles
- `beatMarkers[]` — raw beat times (needed for the audio config)
- `mood`, `vibe`, `bestFor`, `energyCurve` — for matching to the brief

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
1. **Slot count ≈ scene count** — A 5-scene story needs a track with ~5-6 slots, not 9
2. **Mood/energy match** — Track vibe fits the brand and message
3. **Hero slot fits key scene** — If the main demo needs 6s, hero slot must be ≥ 6s

## Quick Reference

Call `list_tracks` for exact slot data. This table is for quick orientation:

| Track | Duration | Slots | Format | Best for |
|-------|----------|-------|--------|----------|
| Shadow Countdown | 27.6s | 6 | standard | Product launches, brand reveals, cinematic |
| HipHop Sequence | 27.4s | 7+ | standard | Fitness, lifestyle, streetwear, social ads |
| Momentum Theme | 37.4s | 8 | long | Showreels, SaaS demos, startup pitches |
| Shadows at the Gate | 31.4s | 8 | standard | Security, fintech, dark brand stories |
| Pulse in the Dark | 25s | 8 | standard | Social ads, quick hooks, urgency |

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
