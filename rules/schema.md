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
      "templateId": "video",
      "variables": { "texts": "Get moving.", "mediaUrl": "", "mediaKeyword": "fitness workout gym" },
      "timing": { "durationWeight": 0.7 },
      "transition": "cut",
      "backgroundEffect": "slow-zoom-in"
    },
    {
      "id": "s2",
      "templateId": "photo",
      "variables": { "texts": "Track everything.", "mediaUrl": "", "mediaKeyword": "smartwatch wrist close up" },
      "timing": { "durationWeight": 0.5 },
      "transition": "crossfade",
      "backgroundEffect": "ken-burns"
    },
    {
      "id": "s3",
      "templateId": "phoneMockup",
      "variables": { "texts": "Your dashboard.", "screenMediaUrl": "" },
      "timing": { "durationWeight": 1.3 },
      "transition": "cut"
    },
    {
      "id": "s4",
      "templateId": "fitnessApp",
      "variables": { "steps": 12450, "calories": 847, "heartRate": 142, "label": "Today's Stats" },
      "timing": { "durationWeight": 1.3 },
      "transition": "cut"
    },
    {
      "id": "s5",
      "templateId": "bigNumber",
      "variables": { "value": 10000, "label": "Active users", "unit": "+" },
      "timing": { "durationWeight": 1.0 },
      "transition": "cut"
    },
    {
      "id": "s6",
      "templateId": "photo",
      "variables": { "texts": "Push harder.", "mediaUrl": "", "mediaKeyword": "runner sunrise trail" },
      "timing": { "durationWeight": 0.7 },
      "transition": "dip-to-black",
      "backgroundEffect": "drift"
    },
    {
      "id": "s7",
      "templateId": "reviewStack",
      "variables": {
        "review1Title": "Life changing",
        "review1Body": "Changed my entire routine.",
        "review1Author": "Sarah M.",
        "review2Title": "Best fitness app",
        "review2Body": "Nothing else comes close.",
        "review2Author": "Jake T.",
        "review3Title": "Finally consistent",
        "review3Body": "First app that stuck.",
        "review3Author": "Priya K.",
        "starColor": "#e94560"
      },
      "timing": { "durationWeight": 1.0 },
      "transition": "cut"
    },
    {
      "id": "s8",
      "templateId": "ctaSplit",
      "variables": { "tagline": "Start free today", "ctaUrl": "fitpulse.app" },
      "timing": { "durationWeight": 0.9 },
      "transition": "dip-to-black"
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
    "type": "product",
    "trackRationale": "High-energy track with 55 beats across 27s — tight snap points for 8 scenes",
    "templateRationale": "Product First pattern: video hook, phoneMockup early demo, fitnessApp features, bigNumber traction, reviewStack proof, ctaSplit CTA",
    "source": "skill",
    "createdAt": "2026-03-27"
  }
}
```

### Config Notes

- **Content flows from the brief** — product name, features, stats, and testimonials gathered during the brief phase populate template variables directly. Never use generic placeholder text.
- **`meta.type`** — set to the detected recipe type (promo, informational, product).
- **Fast cuts for media scenes** — video (s1) at 0.7, photo (s2) at 0.5. Quick visual hits before animated content.
- **Hero scenes get more time** — phoneMockup (s3) at 1.3, fitnessApp (s4) at 1.3. Complex animations need 3+ seconds.
- **Breathe scene (s6) at 0.7** — brief pause before social proof prevents fatigue.
- **CTA (s8) at 0.9** — URL needs time to register; don't go below 0.8. Always use ctaSplit as the last scene.
- **reviewStack uses separate fields** — review1Title/review1Body/review1Author for each review (NOT a reviews array).
- **Background effects alternate** — slow-zoom-in, ken-burns, drift across media scenes to prevent visual repetition.
