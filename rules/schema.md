---
name: schema
description: Full annotated VideoConfig JSON example — reference for building configs
metadata:
  tags: schema, config, json, videoconfig, example
---

# VideoConfig Schema Example

## Timing: use `durationWeight`, not manual times

The `save_config` endpoint automatically computes `startTime`/`endTime` for each scene using proportional layout with beat snapping. You only need to provide `durationWeight` — a relative weight that controls how much time a scene gets compared to siblings.

- `durationWeight: 1.0` — default, gets a normal share of time
- `durationWeight: 1.2–1.5` — gets more time (use for Tier 1 hero/complex scenes: app, showcase, chat templates)
- `durationWeight: 0.6–0.8` — gets less time (use for bg-photo/bg-video quick visual cuts and simple CTA scenes; never below 0.8 for scenes with multiple text entries)

**Do NOT set `startTime`/`endTime` or `beatStart`/`beatEnd` manually.** The server handles this.

## Audio: use raw values from `list_tracks`

Pass `beatMarkers` as flat numbers from `list_tracks` — the server normalizes them. Tracks typically have 30-60+ beats detected by Essentia.js. `beatDetection` and `audioUrl` are optional; the server adds defaults. The server uses these beats as snap points when computing scene boundaries from `durationWeight` values.

```json
{
  "orientation": "portrait",
  "audio": {
    "trackId": "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
    "audioUrl": "",
    "duration": 27.4,
    "beatMarkers": [0.4, 0.9, 1.4, 1.9, 2.4, 2.9, 3.4, 3.9, 4.2, 4.7, 5.2, 5.7, 6.2, 6.7, 7.2, 7.6, 8.1, 8.6, 9.1, 9.6, 10.2, 10.7, 11.2, 11.7, 12.2, 12.7, 13.2, 13.7, 14.2, 14.7, 15.1, 15.6, 16.1, 16.6, 17.1, 17.4, 17.9, 18.4, 19.2, 19.7, 20.2, 20.7, 21.2, 21.7, 22.2, 22.8, 23.3, 23.8, 24.3, 24.8, 25.3, 25.8, 26.3, 26.8, 27.4]
  },
  "scenes": [
    {
      "id": "s1",
      "templateId": "bg-photo",
      "variables": {
        "texts": "Get moving.",
        "mediaUrl": "",
        "mediaKeyword": "fitness workout gym"
      },
      "timing": { "durationWeight": 1.0 },
      "transition": "crossfade",
      "backgroundEffect": "slow-zoom-in"
    },
    {
      "id": "s2",
      "templateId": "chart-counter",
      "variables": {
        "value": 10000,
        "label": "Active users",
        "unit": "+"
      },
      "timing": { "durationWeight": 1.0 }
    },
    {
      "id": "s3",
      "templateId": "bg-gradient-linear",
      "variables": {
        "texts": "Start free today.,fitpulse.app"
      },
      "timing": { "durationWeight": 1.0 }
    }
  ],
  "style": {
    "font": "'Inter', sans-serif",
    "brandKit": {
      "bg": "#1a1a2e",
      "accent": "#e94560"
    },
    "defaultTextEffect": "fade-in",
    "defaultTransition": "crossfade",
    "defaultBackgroundEffect": "slow-zoom-in"
  },
  "meta": {
    "name": "FitPulse Launch",
    "prompt": "Create a launch video for a fitness app called FitPulse",
    "mood": ["Energetic"],
    "videoType": "ad",
    "trackRationale": "High-energy track with 6 slots matching the fast-paced ad format",
    "templateRationale": "bg-video for hero opener, showcase-phone for app demo, counter for stats, end-screen for CTA",
    "source": "skill",
    "createdAt": "2026-03-26"
  }
}
```
