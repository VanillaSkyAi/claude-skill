---
name: schema
description: Full annotated VideoConfig JSON example — reference for building configs
metadata:
  tags: schema, config, json, videoconfig, example
---

# VideoConfig Schema Example

```json
{
  "orientation": "portrait",
  "audio": {
    "trackId": "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
    "audioUrl": "",
    "duration": 27.4,
    "beatDetection": { "sensitivity": 0.5 },
    "beatMarkers": [
      { "time": 4.2 }, { "time": 7.6 }, { "time": 10.2 }, { "time": 12.7 },
      { "time": 15.1 }, { "time": 17.4 }, { "time": 19.2 }, { "time": 22.8 }
    ]
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
      "timing": { "startTime": 0, "endTime": 4.2 },
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
      "timing": { "startTime": 12.7, "endTime": 17.4 }
    },
    {
      "id": "s3",
      "templateId": "bg-gradient-linear",
      "variables": {
        "ctaText": "Start free today.",
        "tagline": "fitpulse.app",
        "logoUrl": ""
      },
      "timing": { "startTime": 22.8, "endTime": 27.4 }
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
