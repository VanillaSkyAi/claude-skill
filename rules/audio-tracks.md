---
name: audio-tracks
description: Music track catalog with rich descriptions, energy curves, and best-for tags
metadata:
  tags: audio, music, tracks, beats, mood
---

# Music Track Catalog

5 tracks available. Pick the one that best matches the requested video mood and type.

## Shadow Countdown

- **ID:** `7995f8e2-cd04-4cd0-b498-6672c5b34529`
- **Duration:** 27.6s | **Beats:** 8
- **Mood:** Epic, Cinematic, Thriller
- **Energy curve:** Builds from low to high, dramatic climax in final third
- **Vibe:** Dark, suspenseful intro with rising tension — like a movie trailer reveal
- **Best for:** Product launches that need gravitas, brand reveals, "unveiling" moments, cinematic trailers
- **Tempo feel:** Slow build → rapid escalation
- **Beat markers:** `[1.2, 4.7, 8.1, 16.6, 18.7, 20.4, 21.9, 24.9]`

## HipHop Sequence

- **ID:** `a5cf8cbd-9606-4246-8408-61bc7e5d2794`
- **Duration:** 27.4s | **Beats:** 8
- **Mood:** Hiphop, Beat
- **Energy curve:** High from the start, consistent driving rhythm
- **Vibe:** Urban, confident, swagger — bass-heavy with rhythmic pulse
- **Best for:** Fitness, lifestyle, streetwear, apps targeting young audiences, social media ads
- **Tempo feel:** Steady groove, punchy
- **Beat markers:** `[4.2, 7.6, 10.2, 12.7, 15.1, 17.4, 19.2, 22.8]`

## Momentum Theme

- **ID:** `645b3256-5416-48cf-8f9d-39a2dbd9e167`
- **Duration:** 37.4s | **Beats:** 8
- **Mood:** Energetic, Rhythmic, Bold
- **Energy curve:** Starts strong, builds through middle, peaks at 70%
- **Vibe:** Corporate-energetic — forward motion, achievement, progress
- **Best for:** Showreels, startup pitches, SaaS demos, team culture videos, longer-format content
- **Tempo feel:** Driving, upbeat, accommodates more scenes with longer duration
- **Beat markers:** `[2, 5.6, 11.7, 14.6, 20, 22.7, 26.5, 30]`

## Shadows at the Gate

- **ID:** `d899f250-3371-4e0e-a1b4-93bd868b07bc`
- **Duration:** 31.4s | **Beats:** 8
- **Mood:** Thriller, Cinematic
- **Energy curve:** Slow opening, dramatic mid-section, powerful finale
- **Vibe:** Dark atmosphere, mystery, high stakes — noir thriller feel
- **Best for:** Security products, fintech, dramatic brand stories, "problem" narratives, dark-themed trailers
- **Tempo feel:** Atmospheric → explosive
- **Beat markers:** `[0.2, 3.8, 7.3, 10, 18.2, 20.3, 24.1, 29.1]`

## Pulse in the Dark

- **ID:** `8e83c405-08cb-45fd-b119-604ce81dfccd`
- **Duration:** 25s | **Beats:** 8
- **Mood:** Trailer, Thriller
- **Energy curve:** Rapid build from beat 1, relentless acceleration
- **Vibe:** Fast-paced, urgent, "time is running out"
- **Best for:** Social media ads, quick hooks, countdown-style videos, urgency-driven content, short trailers
- **Tempo feel:** Rapid-fire, dense beats — shortest track, most compact
- **Beat markers:** `[3.7, 7.1, 9.9, 12.7, 15, 17.4, 19, 20.9]`

## Track Selection Guide

| Video type | First choice | Alternate |
|-----------|-------------|-----------|
| Product launch / brand reveal | Shadow Countdown | Shadows at the Gate |
| Fitness / lifestyle / streetwear | HipHop Sequence | Pulse in the Dark |
| Startup pitch / showreel / SaaS | Momentum Theme | Shadow Countdown |
| Dark / security / fintech | Shadows at the Gate | Pulse in the Dark |
| Social media ad (short) | Pulse in the Dark | HipHop Sequence |
| Cinematic trailer | Shadow Countdown | Shadows at the Gate |

## Audio Config Format

```json
{
  "trackId": "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
  "audioUrl": "",
  "duration": 27.4,
  "beatDetection": { "sensitivity": 0.5 },
  "beatMarkers": [
    { "time": 4.2 }, { "time": 7.6 }, { "time": 10.2 },
    { "time": 12.7 }, { "time": 15.1 }, { "time": 17.4 },
    { "time": 19.2 }, { "time": 22.8 }
  ]
}
```

- `audioUrl` — leave empty, the editor loads it from the track database
- `beatMarkers` — wrap each time in `{ "time": value }`
- `beatDetection.sensitivity` — always `0.5`
