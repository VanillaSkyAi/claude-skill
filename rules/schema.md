---
name: schema
description: Full annotated VideoConfig JSON example — reference for building configs
---

# VideoConfig Schema Example

> **Scope:** VideoConfig JSON reference example. For timing rules see [composition-rules.md](composition-rules.md). For audio config format see [audio-tracks.md](audio-tracks.md). For template variables see [templates.md](templates.md).

```json
{
  "orientation": "portrait",
  "audio": {
    "trackId": "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
    "audioUrl": "",
    "duration": 27.4
  },
  "scenes": [
    {
      "id": "s1",
      "templateId": "bg-video",
      "variables": { "texts": "Get moving.", "mediaUrl": "", "mediaKeyword": "fitness workout gym" },
      "timing": { "durationWeight": 1.0 },
      "transition": "cut",
      "backgroundEffect": "slow-zoom-in"
    },
    {
      "id": "s2",
      "templateId": "bg-photo",
      "variables": { "texts": "Track everything.", "mediaUrl": "", "mediaKeyword": "smartwatch wrist close up" },
      "timing": { "durationWeight": 1.0 },
      "transition": "crossfade",
      "backgroundEffect": "ken-burns"
    },
    {
      "id": "s3",
      "templateId": "showcase-phone",
      "variables": { "screenMediaUrl": "" },
      "timing": { "durationWeight": 1.0 },
      "transition": "cut"
    },
    {
      "id": "s4",
      "templateId": "app-fitness",
      "variables": { "steps": 12450, "calories": 847, "heartRate": 142, "label": "Today's Stats" },
      "timing": { "durationWeight": 1.3 },
      "transition": "cut"
    },
    {
      "id": "s5",
      "templateId": "chart-counter",
      "variables": { "value": 10000, "label": "Active users", "unit": "+" },
      "timing": { "durationWeight": 1.0 },
      "transition": "cut"
    },
    {
      "id": "s6",
      "templateId": "bg-photo",
      "variables": { "texts": "Push harder.", "mediaUrl": "", "mediaKeyword": "runner sunrise trail" },
      "timing": { "durationWeight": 0.7 },
      "transition": "dip-to-black",
      "backgroundEffect": "drift"
    },
    {
      "id": "s7",
      "templateId": "social-review-stack",
      "variables": {
        "reviews": [
          { "name": "Sarah M.", "text": "Changed my routine.", "rating": 5 },
          { "name": "Jake T.", "text": "Best fitness app.", "rating": 5 },
          { "name": "Priya K.", "text": "Finally consistent.", "rating": 4 }
        ]
      },
      "timing": { "durationWeight": 1.0 },
      "transition": "cut"
    },
    {
      "id": "s8",
      "templateId": "bg-gradient-linear",
      "variables": { "texts": "Start free today.,fitpulse.app" },
      "timing": { "durationWeight": 1.0 },
      "transition": "cut"
    }
  ],
  "style": {
    "font": "'Inter', sans-serif",
    "brandKit": { "bg": "#1a1a2e", "accent": "#e94560" },
    "defaultTextEffect": "fade-in",
    "defaultTransition": "cut",
    "defaultBackgroundEffect": "slow-zoom-in"
  },
  "meta": {
    "name": "FitPulse Launch",
    "prompt": "Create a launch video for a fitness app called FitPulse",
    "mood": ["Energetic"],
    "videoType": "launch",
    "trackRationale": "High-energy track with 55 beats across 27s — tight snap points for 8 scenes",
    "templateRationale": "bg-video hook, bg-photo for texture, showcase-phone for demo, app-fitness body centerpiece, chart-counter for social proof stat, social-review-stack for testimonials, bg-gradient-linear close CTA",
    "source": "skill",
    "createdAt": "2026-03-27"
  }
}
```

### Config Notes

- **`cut` is the default transition** — fast cuts maintain energy in short-form video. Reserve `crossfade` and `dip-to-black` for deliberate pacing shifts (scene 2 eases into the body; scene 6 creates a visual pause before social proof).
- **Tier 1 body scene (s4) gets weight 1.3** — the app-fitness dashboard is the product's centerpiece; extra time lets viewers absorb the data. Give the most important body scene extra weight.
- **Short body scene (s6) gets weight 0.7** — a brief visual pause before social proof prevents viewer fatigue. Use lower weight for transitional body scenes.
- **Close scene (s8) keeps weight 1.0** — CTAs need enough time for the URL to register; going below 1.0 cuts it too short for readability.
- **No `slam` text effect** — `zoom-through` on the hook scene and `fade-in` default elsewhere keep motion smooth. `slam` is reserved for single-word impact moments, not general use.
- **Background effects alternate** — `slow-zoom-in` (s1), `ken-burns` (s2), `drift` (s6) prevent visual repetition across the three media-backed scenes.
