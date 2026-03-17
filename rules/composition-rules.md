---
name: composition-rules
description: Scene composition, narrative arc, pacing, and asset mix rules for VanillaSky videos
metadata:
  tags: scenes, narrative, pacing, composition, mix
---

# Scene Composition Rules

## Narrative Arc

Every video follows a 4-act structure, regardless of length:

| Act | Beats | Purpose | Asset types | Energy |
|-----|-------|---------|-------------|--------|
| Hook | 1-2 | Grab attention | pexels-video (striking visual) | High |
| Build | 2-3 | Establish context | Mix of pexels + 1 gradient/animation | Rising |
| Climax | 1-2 | Peak moment | Counter or dynamic animation + pexels | Peak |
| CTA | 1-2 | Call to action | pexels-video/image | Resolving |

## Asset Mix (Non-Negotiable)

- **At least 60% pexels-video** — real video footage makes videos feel professional
- **pexels-video is the default media type** — use for nearly all footage scenes
- **Max 1 pexels-image per video** — only when a still genuinely works better (portrait, product, landscape for ken-burns). Most videos need zero pexels-image scenes.
- **Max 1-2 gradient scenes** per video — branded moments only (logo, tagline)
- **Max 1 counter animation** per video — only for genuinely impressive statistics
- **Max 2 dynamic animations** per video — only when stock footage genuinely can't tell the story (feature lists, comparisons, data)
- **Never start with a gradient or animation** — scene 1 is always pexels-video
- **Never end with a gradient** — last scene should be pexels-video for CTA
- **Never use the same asset type 3x in a row** — alternate for visual variety

**Typical mixes (guidelines, not rigid rules):**
| Scenes | Mix |
|--------|-----|
| 6 scenes | 5 pexels-video + 1 gradient |
| 8 scenes | 5-6 pexels-video + 1 gradient + 1 counter or dynamic animation |
| 10 scenes | 6 pexels-video + 1 gradient + 1-2 dynamic animations + 1 counter |

Not every video needs custom animations — simple videos (mood, vibe, announcements) work great with just pexels + gradient + counter.

## When to Use Coded Animations vs Other Assets

| Content | Best asset type | Why |
|---------|----------------|-----|
| A number/statistic | counter | Built-in, reliable, looks great |
| Feature list (3-6 items) | coded animation (list-reveal, feature-grid) | Staggered reveal looks professional |
| Comparison (A vs B) | coded animation (comparison) | Need layout control |
| Pricing tiers | coded animation (stats-dashboard) | Complex layout |
| Quote/testimonial | gradient + copy text | Simple text is enough |
| Product screenshot | pexels-image/upload-image | Real visual |
| Action/activity | pexels-video | Movement sells |
| Brand statement | gradient + copy text | Focus on typography |

## Pexels Keyword Strategy

Write descriptive, visual keywords (2-4 words) that find great stock footage. Think cinematically.

**Good keywords:** `"aerial city night"`, `"hands typing laptop"`, `"runner mountain trail"`, `"coffee shop ambiance"`, `"team celebrating success"`, `"close up smartphone"`, `"drone ocean waves"`

**Bad keywords:** `"business"`, `"technology"`, `"success"`, `"happy"` — too vague, returns generic footage

## Text Copy Rules

- **1-5 words per scene** — power words, active voice
- **End with period** for weight: `"Start free today."` not `"Start free today"`
- **Action verbs:** Ship. Build. Launch. Scale. Transform. Dominate.
- **No complete sentences** in media scenes — save those for gradient text-focus scenes
- **Dynamic animations render their own text** — set `copy: {}` (empty) for coded-animation scenes

## Transition Strategy

| Transition | When to use |
|------------|-------------|
| `crossfade` | Default — between most scenes |
| `dip-to-black` | Before/after counter or gradient (dramatic pause) |
| `flash` | High-energy moments, beat drops |
| `zoom-in` | Moving into detail (wide shot → close up) |
| `zoom-out` | Revealing bigger picture |
| `blur-dissolve` | Dream-like, emotional moments |
| `slide-left/right` | Sequential progression (step 1 → step 2) |

## Overlay Strategy

- **vignette** (0.4-0.6) — use on most media scenes, draws focus to center
- **film-grain** (0.15-0.25) — cinematic texture, use on 2-3 scenes max
- **letterbox** (0.5) — widescreen cinematic feel, commit to all scenes or none
- **light-leak** (0.3-0.5) — warm highlight, use once for emotional peak
- **rgb-split** (0.3) — tech/edgy feel, max 1 scene
- **bokeh** (0.3) — dreamy, use on gradient or slow scenes

## Background Animation Strategy

- **slow-zoom-in** — default, works everywhere
- **ken-burns** — photos/images (adds life to stills)
- **drift** — calm scenes, introspective moments
- **pulse** — energy, rhythmic scenes
- **beat-zoom** — synced to music, use for climax scenes

## Pacing

- **Beat distribution:** Each scene gets 1-2 beats. Counter/dynamic animations get 2 beats minimum (durationWeight: 1.3-1.5)
- **Breathing room:** Don't cram 10 scenes into 8 beats. 6-8 scenes for an 8-beat track is ideal
- **Match effects to energy:** High-energy beats = slam/flash/scale-pop. Calm moments = fade-in/blur-in
- **Accelerate toward climax:** Scenes get shorter (1 beat each) as energy builds
