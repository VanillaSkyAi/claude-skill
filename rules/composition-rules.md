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
- **Vary track selection** — don't default to the same track every time. If the video is calm/lifestyle, pick the most uplifting track. If it's aggressive/tech, pick the most intense. Rotate between available tracks across videos.

### 3. Map scenes to slots
- Scene 1 → hook scene (see "Scene 1: skip the intro template" below)
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

### Template variety is non-negotiable

**The #1 cause of boring videos is over-relying on text-on-background templates.** Templates like `bg-solid`, `bg-glow`, `bg-gradient-linear`, and `bg-particles` are just colored rectangles with text. They're palette cleansers — never the main content.

**Mandatory template mix for a 5+ scene video:**
- At least 1 **interactive/UI template** (`app-*`, `showcase-*`, or `social-*`) — these are visually rich and feel dynamic
- At most 1 `bg-solid` scene (CTA only) — never use bg-solid for content scenes
- At most 1 `chart-counter` — use other chart types (`chart-bar`, `chart-progress-ring`, `chart-pie`) for variety
- At most 2 plain background scenes (`bg-solid`, `bg-glow`, `bg-gradient-linear`) total

### Scene 1: skip the intro template (usually)

**Intro templates (`intro-*`) are cinematic movie-style openers.** They're dramatic: countdowns, matrix rain, spotlight reveals, globe animations. Most videos don't need them.

**Default scene 1: `bg-photo` or `bg-video` with a strong hook text.** A striking photo/video with punchy copy ("Stop losing customers." or "Built for teams that ship.") is more versatile and professional than a cinematic intro.

**Only use intro templates when:**
- The user explicitly asks for a "trailer" or "cinematic" feel
- The video type is Event/Launch (countdown fits)
- The brand is tech/gaming (glitch-matrix fits)
- The user's prompt uses words like "epic", "dramatic", "reveal"

**For most videos (product ads, social, brand stories, explainers):** Start with content, not ceremony. A `bg-photo` with `slow-zoom-in` + bold text is the best default opener.

| Video type | Scene 1 |
|-----------|---------|
| Product ad | `bg-photo` with product/lifestyle shot + hook text |
| Social/TikTok | `bg-video` with action footage + punchy text |
| Brand story | `bg-photo` with atmospheric shot + brand statement |
| Trailer/launch | `intro-cinematic-flash` or `intro-countdown` (cinematic fits here) |
| Tech/gaming | `intro-glitch-matrix` (hacker aesthetic fits) |
| Premium/luxury | `intro-spotlight` or `intro-vanilla-sky` (elegant reveal) |

### Prefer rich templates over plain backgrounds

Before reaching for a generic `bg-*` template, ask: **is there a richer template that shows this better?**

### Showcase templates: use even without screenshots

`showcase-phone`, `showcase-phone-triple`, `showcase-tablet`, and `showcase-tablet-slides` show professional device mockups with dimension placeholders when no screenshot is provided. **This is intentional and good** — the placeholders prompt users to upload their own screenshots in the editor, which drives engagement and personalization. Always include at least one showcase template for any app, SaaS, or product video — even when the user hasn't provided screenshots.

| Content | Don't use | Use instead |
|---------|-----------|-------------|
| App/product features | `bg-solid` with feature list | `showcase-phone` or `showcase-tablet` (with or without screenshot) |
| Price | `chart-counter` | `app-ecommerce` with full product card |
| Comparison (A vs B) | `chart-counter` twice | `chart-bar` with side-by-side bars |
| Customer quotes | `bg-gradient-linear` with quote text | `social-testimonial` or `social-review-stack` |
| Chat/support demo | `bg-solid` with text | `social-chat` or `social-whatsapp` with conversation |
| Search result | `bg-photo` | `social-google-search` with query + result |
| Restaurant/local biz | `bg-photo` with rating text | `app-search-bar` with restaurant card |
| Notifications/alerts | `bg-solid` with text | `social-notification` with app-style card |
| Stats dashboard | Multiple `chart-counter` scenes | `app-fitness`, `app-banking`, or `app-weather` |
| Milestone/follower count | `chart-counter` | `social-milestone` with badge + confetti |
| Multiple reviews | 3× `social-testimonial` | `social-review-stack` (shows 3 at once) |
| Multi-screen app demo | 3× `showcase-phone` | `showcase-phone-triple` (3 phones at once) |

### chart-counter: max 1 per video

`chart-counter` is for ONE hero stat — the most impressive number in the video. **Never use it for 2+ scenes.** For other data:

| Data type | Template |
|-----------|----------|
| One big impressive number (10K+) | `chart-counter` |
| Percentage / completion | `chart-progress-ring` |
| Comparison (A vs B vs C) | `chart-bar` |
| Trend over time | `chart-line` |
| Distribution / breakdown | `chart-pie` |
| Small numbers (< 50) | Don't chart — use text with `slam` effect |

### CTA scenes: not just bg-solid

The last scene doesn't have to be `bg-solid`. Better options:

| CTA style | Template | When |
|-----------|----------|------|
| Clean + simple | `bg-solid` | Short CTA, 1 line |
| Energetic + glowing | `bg-glow` | After high-energy videos |
| Gradient + movement | `bg-gradient-linear` | Premium/elegant brands |
| Confetti celebration | `bg-confetti` | After milestone/achievement videos |

### Card templates need dark backgrounds

`social-testimonial`, `social-tweet`, `social-review-stack`, `social-chat`, `social-whatsapp`, `social-notification`, `social-google-search`, all `app-*`, and all `showcase-*` render white/light cards. Always pair these with a dark brandKit bg (`#0a0a0a` to `#1a1a2e`). Light brand palettes should only use `bg-*` and chart templates.

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
| Photo 2 | `ken-burns` | Pan + zoom (direction auto-alternates) |
| Photo 3 | `slow-zoom-out` | Pulling back |
| Photo 4 | `drift` | Gentle pan (direction auto-alternates) |

**Never use the same background effect on adjacent photo scenes.** This creates a monotone, slideshow feel. Rotate between `slow-zoom-in`, `ken-burns`, `slow-zoom-out`, and `drift`.

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

### Text Effect Variety

Don't use the same text effect for every scene. Set a calm `defaultTextEffect` (e.g., `fade-in`), then override on 2-3 key moments:

| Scene role | Override with |
|------------|--------------|
| Hook / first text | `slam` or `zoom-through` — grabs attention |
| Big stat reveal | `slam` — makes the number land with impact |
| Beat drop moment | `flash` or `cut-in` — syncs with music energy |
| Calm/emotional scene | Keep the default `fade-in` — don't override |

### Transition Variety

Don't use `crossfade` for every transition. Use 2-3 types per video:

| Moment | Transition |
|--------|-----------|
| Default (most scenes) | `crossfade` (~60% of transitions) |
| Before a big reveal or stat | `dip-to-black` — dramatic pause |
| High-energy beat drop | `flash` — white flash sync |
| Fast-paced sequence | `cut` — hard cuts feel aggressive |
| Sequential steps/screens | `slide-left` — directional flow |

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
