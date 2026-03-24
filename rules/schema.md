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
- `durationWeight: 1.3` — gets 30% more time (use for hero/complex scenes)
- `durationWeight: 0.7` — gets 30% less time (use for simple CTA scenes, but never below 0.8 for scenes with multiple text entries)

**Do NOT set `startTime`/`endTime` or `beatStart`/`beatEnd` manually.** The server handles this.

## Audio: use raw values from `list_tracks`

Pass `beatMarkers` as flat numbers from `list_tracks` — the server normalizes them. `beatDetection` and `audioUrl` are optional; the server adds defaults.

```json
{
  "orientation": "portrait",
  "audio": {
    "trackId": "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
    "audioUrl": "",
    "duration": 27.4,
    "beatMarkers": [4.2, 7.6, 10.2, 12.7, 15.1, 17.4, 19.2, 22.8]
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
    "mood": ["Energetic"]
  }
}
```
