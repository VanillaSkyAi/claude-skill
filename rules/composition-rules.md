---
name: composition-rules
description: Narrative structure, pacing, copy writing, and Pexels keyword strategy — template-agnostic
metadata:
  tags: composition, narrative, pacing, copy, keywords
---

# Composition Rules

## Composition Flow

Follow these steps in order. Do not skip steps.

### 1. Count scenes from the story
- Intro (brand/hook) + content scenes + CTA = total
- Default: 5-6 for product ads, 3-4 for social teasers, 7-9 for showreels

### 2. Pick track by structural fit
- Call `list_tracks` to get available tracks with slot counts
- Match: slot count ≈ scene count (±1 is fine)
- Then filter by mood/energy
- Verify hero slot duration fits your most complex scene

### 3. Map scenes to slots
- Intro template → intro slot
- Most important content → hero slot (longest duration, give it room)
- CTA/end screen → outro slot
- Remaining content → build/accelerate/climax slots by narrative position

### 4. Check template fit
- Each template's minDuration must be ≤ the slot's duration
- If a template doesn't fit: pick a simpler one, or reduce content (fewer chart bars, fewer slides)
- social-chat and social-whatsapp need 5s+ slots — only use in hero or long slots

### 5. Set timing weights
- Use `durationWeight` to control relative scene duration (default: 1.0)
- Hero/complex scenes: `durationWeight: 1.2–1.5` (gets more time)
- Simple CTA scenes: `durationWeight: 0.8–1.0` (never below 0.8 if scene has multiple text entries)
- **Do NOT set `startTime`/`endTime` or `beatStart`/`beatEnd`** — the server computes these automatically using proportional layout with beat snapping

### 6. Scene count adjustments
- **Fewer scenes than slots**: that's fine — scenes will get proportionally more time each
- **More scenes than slots**: pick a different track with more slots, or cut a scene
- Aim for slot count ≈ scene count (±2 is fine)

---

## Narrative Arc

Every video follows a 4-act structure, regardless of length:

| Act | Scenes | Purpose | Energy |
|-----|--------|---------|--------|
| Hook | 1–2 | Grab attention — striking visual + punchy text | High |
| Build | 2–3 | Establish context — show the product/brand/story | Rising |
| Climax | 1–2 | Peak moment — impressive stat, proof, or reveal | Peak |
| CTA | 1–2 | Call to action — what should the viewer do? | Resolving |

## Template Selection

**Always call `list_templates` first** to get the current template list. Then match templates to scenes based on:

- `whenToUse` — does the template's purpose match the scene's role in the arc?
- `tags` — do the keywords match the scene's mood/content?
- `preferredDuration` — does the template fit the available beat time?

### General rules

- **Scene 1 must grab attention** — pick a template with visual impact (media, animation)
- **Don't use the same template 3x in a row** — alternate for variety
- **Animated backgrounds max 2 per video** (confetti, emoji, particles, etc.) — they lose impact when overused
- **Media templates (photo/video) are the backbone** — real footage feels professional
- **Respect minDuration** from the template metadata — don't give a complex template too little time
- **CTA/outro scenes need breathing room** — give them `durationWeight: 1.0` or higher, never below 0.8. If a CTA has multiple text entries (e.g., "Try it free|website.com"), it needs enough time for both to appear. A 1.5s CTA feels rushed and unprofessional.
- **Card templates need dark backgrounds** — `social-testimonial`, `social-tweet`, `social-review-stack`, `social-chat`, `social-whatsapp`, `social-notification`, `social-google-search`, all `app-*`, and all `showcase-*` render white/light cards. Always pair these with a dark brandKit bg (`#0a0a0a` to `#1a1a2e`). Light brand palettes should only use `bg-*` and chart templates.

### chart-counter: only use for impressive numbers

The counter animates from 0 to the target value. Small numbers (1-10) look anticlimactic — the counter barely moves. **Minimum value ~50 to look good, 1000+ is ideal.**

| Stat | Bad (don't) | Good (do instead) |
|------|-------------|-------------------|
| "2x faster" | `chart-counter value: 2` | Use `bg-glow` with texts: `"2x faster\|slam"` |
| "3 integrations" | `chart-counter value: 3` | Use `bg-solid` with texts listing them |
| "$1M revenue" | — | `chart-counter value: 1000000, prefix: "$"` |
| "10K users" | — | `chart-counter value: 10000, unit: "+"` |
| "99.9% uptime" | — | `chart-progress-ring value: 99.9` |

**Rule of thumb:** If the number is a multiplier (2x, 3x) or single digit, use a text-based template with `slam` effect instead. Save chart-counter for numbers that look impressive counting up.

## Scene Flow

- **Alternate visual intensity** — follow a busy scene with a calmer one
- **Use simple backgrounds as palette cleansers** between media-heavy scenes
- **Match cuts** — when adjacent scenes share a visual element, use `crossfade`

### Background effects are mandatory for photo/video scenes

**Always set `style.defaultBackgroundEffect`** — never leave it empty. `slow-zoom-in` is a safe default. Static photos look lifeless and amateurish.

**Alternate camera movement on consecutive photo scenes.** When you have 2+ `bg-photo` scenes in a row, vary the `backgroundEffect` per scene to create visual rhythm:

| Scene | Effect | Movement |
|-------|--------|----------|
| Photo 1 | `slow-zoom-in` | Pushing in |
| Photo 2 | `ken-burns-left` | Pan + zoom |
| Photo 3 | `slow-zoom-out` | Pulling back |
| Photo 4 | `ken-burns-right` | Pan + zoom (opposite) |

**Never use the same background effect on adjacent photo scenes.** This creates a monotone, slideshow feel. Professional video editors instinctively alternate — the skill should too.

## Pexels Keyword Strategy

Write descriptive, visual keywords (2–4 words) for `mediaKeyword`. Think cinematically.

### Shot Types

| Shot type | When to use | Example keywords |
|-----------|-------------|------------------|
| Establishing/wide | Scene 1 hook, context | `"aerial city night"`, `"drone ocean sunset"` |
| Medium | Subject in context | `"woman working laptop cafe"`, `"team office meeting"` |
| Close-up | Emotion, detail, product | `"hands typing keyboard"`, `"coffee cup steam close up"` |
| Action/motion | Energy, dynamism | `"runner trail morning"`, `"skateboard street tricks"` |

**Match shot types to the arc:** wide shots for hooks → medium for build → close-ups for climax → wide for resolution.

**Bad keywords:** `"business"`, `"technology"`, `"success"` — too vague, returns generic footage.

## Copy Best Practices

### The `texts` variable

Background templates use `texts` — comma-separated entries with optional `|effect`:

- **Short text (1-5 words):** For scenes with strong visuals. `"Ship faster."`
- **Medium text (5-15 words):** For statement scenes. `"Every cup tells a story."`
- **Multi-entry:** For dramatic reveals. `"They said no.,We said watch.,10K users later."`

### Hook Formulas (Scene 1)

| Formula | Example |
|---------|---------|
| "The average X loses Y every Z." | "The average team loses 5 hours every week." |
| "What if you could [benefit]?" | "What if you could ship 10x faster?" |
| "Stop [pain point]." | "Stop losing customers." |
| "Meet [product name]." | "Meet Flowstate." |
| "[Provocative statement]." | "Email is broken." |
| "Built for [audience]." | "Built for developers who ship." |

### CTA Formulas (Last scene)

| Formula | Example |
|---------|---------|
| "[Action] free today." | "Start free today." |
| "Join [social proof]." | "Join 10K+ teams." |
| "See it in action." | — |
| "Try [product] free." | "Try Flowstate free." |

### Visual Hooks (Scene 1 Footage)

| Visual hook | Keyword style | Why it grabs |
|-------------|---------------|--------------|
| Human face/emotion | `"woman smiling close up"` | Faces are attention magnets |
| Fast motion | `"drone speed city traffic"` | Movement triggers alertness |
| Scale/grandeur | `"aerial mountain landscape"` | Awe creates curiosity |
| Vivid color | `"neon lights city rain night"` | Color pops stop the scroll |

## Pacing & Duration

### Slot-Based Timing

Scene count and duration are determined by the track's scene slots (see `audio-tracks.md`). Each slot defines a scene's start and end time.

- Check `list_tracks` for the exact slot structure of each track
- The slot count IS the scene count — one scene per slot
- Slot durations determine which templates can be used (must fit minDuration)

### Pacing Guidelines

- **Intro slot**: Grab attention in the first 3 seconds — use high-impact templates
- **Build slots**: Establish context — alternate visual intensity between scenes
- **Hero slot**: The longest slot — use it for the key demo, showcase, or biggest stat
- **Accelerate/climax slots**: Energy builds — shorter scenes, punchier text effects (`slam`, `flash`)
- **Outro slot**: CTA — keep it clean and simple, don't rush it

### Text Effect Matching

- High-energy slots (accelerate, climax) → `slam`, `flash`, `zoom-through`
- Calm slots (intro, build) → `fade-in`, `crossfade`
- Hero slot → `typewriter` or `slam` depending on content

## Scene Plan Format

Present the plan as a table before building the config:

| # | Slot | Time | Duration | Template | Content |
|---|------|------|----------|----------|---------|
| 1 | intro | 0–4.7s | 4.7s | intro-cinematic-flash | Brand name reveal |
| 2 | build | 4.7–8.1s | 3.4s | bg-photo | Problem statement |
| 3 | hero | 8.1–16.6s | 8.5s | showcase-tablet-slides | 3-screen demo |
| 4 | accelerate | 16.6–20.4s | 3.8s | chart-counter | "10K users" stat |
| 5 | climax | 20.4–24.9s | 4.5s | social-review-stack | 3 testimonials |
| 6 | outro | 24.9–27.6s | 2.7s | bg-gradient-linear | CTA |

> Template IDs here are illustrative — always call `list_templates` for the current list.

This shows the user exactly how scenes map to the music structure.
