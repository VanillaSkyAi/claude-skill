---
name: composition-rules
description: Narrative structure, template mix, pacing, copy writing, and Pexels keyword strategy
metadata:
  tags: composition, narrative, pacing, copy, keywords, mix
---

# Composition Rules

## Narrative Arc

Every video follows a 4-act structure, regardless of length:

| Act | Scenes | Purpose | Typical templates | Energy |
|-----|--------|---------|-------------------|--------|
| Hook | 1–2 | Grab attention | bg-video, bg-photo | High |
| Build | 2–3 | Establish context | bg-photo, bg-video, bg-solid, product-launch | Rising |
| Climax | 1–2 | Peak moment | counter, social-proof, bg-video | Peak |
| CTA | 1–2 | Call to action | bg-photo, end-screen | Resolving |

## Template Mix (Non-Negotiable)

- **At least 50% background templates (bg-*)** — they carry the visual storytelling
- **Max 2 non-media bg templates** per video (bg-solid, bg-gradient-linear, bg-gradient-radial, bg-confetti, bg-stars, bg-particles, bg-geometric, bg-aurora) — branded/animated moments only
- **Max 1 `counter`** per video — only for genuinely impressive statistics
- **Max 1 `social-proof`** per video — one powerful testimonial
- **Max 1 `product-launch`** per video — one product showcase moment
- **Max 1 `stat-grid`** per video — one dashboard moment (don't use alongside `counter`)
- **Max 1 `feature-list`** per video — one feature reveal
- **Max 1 `text-stack`** per video — one dramatic text sequence
- **Max 1 `split-compare`** per video — one comparison moment
- **Always end with `end-screen`** — clean CTA and brand closure
- **Scene 1 must be a bg-* template** — start with a visual background, never a content template
- **Never use the same template 3x in a row** — alternate for visual variety

**Typical mixes:**
| Scenes | Mix |
|--------|-----|
| 5 | 3 bg-video/bg-photo + 1 bg-solid + end-screen |
| 7 | 4 bg-video/bg-photo + 1 bg-gradient-linear + 1 counter + end-screen |
| 8 | 3 bg-video/bg-photo + 1 bg-aurora + 1 stat-grid + 1 feature-list + 1 bg-photo + end-screen |
| 10 | 4 bg-video/bg-photo + 1 bg-gradient-linear + 1 stat-grid + 1 feature-list + 1 text-stack + 1 social-proof + end-screen |

## Scene Flow (Adjacent Scenes)

- **Alternate shot scale:** Don't put two wide/aerial shots or two close-ups back to back — vary the distance
- **Palate cleanser:** Use a non-media bg template (bg-solid, bg-gradient-linear, etc.) between two similar bg-photo/bg-video scenes to break visual monotony
- **Return to footage after data:** After `counter` or `social-proof`, the next scene should be a bg-photo or bg-video
- **Vary camera movement:** If one scene uses `drift-left`, the next should be `static`, `slow-zoom-in`, or drift the other way
- **Match cuts:** When adjacent scenes share a visual element (color, shape, motion direction), use `crossfade` to connect them smoothly

## Pexels Keyword Strategy

Write descriptive, visual keywords (2–4 words) for `mediaKeyword` on `bg-photo` and `bg-video` templates. Think cinematically — choose a shot type, then describe the subject.

### Cinematic Shot Types

| Shot type | When to use | Example keywords |
|-----------|-------------|------------------|
| Establishing/wide | Scene 1 hook, context setting | `"aerial city night"`, `"drone ocean sunset"` |
| Medium | Subject in context, lifestyle | `"woman working laptop cafe"`, `"team office meeting"` |
| Close-up | Emotion, detail, product | `"hands typing keyboard"`, `"coffee cup steam close up"` |
| Detail/macro | Texture, craftsmanship, premium feel | `"watch mechanism macro"`, `"fabric texture close"` |
| POV/first-person | Immersion, user perspective | `"first person walking city"`, `"hands smartphone screen"` |
| Action/motion | Energy, dynamism | `"runner trail morning"`, `"skateboard street tricks"` |

**Match shot types to the arc:** wide shots for hooks → medium for build → close-ups for climax → wide for CTA resolution.

**Bad keywords:** `"business"`, `"technology"`, `"success"`, `"happy"` — too vague, returns generic footage

**Tips:**
- Include a subject: who/what is in the shot
- Include context: where/how
- Think about camera angle: "close up", "aerial", "drone", "wide shot"
- For vertical video: prefer close-ups and people over landscapes

## Copy Best Practices

### The `texts` Variable (bg-* Templates)

All bg-* templates use the `texts` variable. Write entries as comma-separated strings with optional `|effect` per entry:

- **Single text:** `"Get moving."` — one entry, hero size
- **Two texts:** `"Get moving.,Push harder."` — two sequential entries, headline size
- **With effects:** `"Get moving.|slam,Push harder.|zoom-in"` — per-entry overrides
- **Three+ texts:** `"Built.,Tested.,Shipped."` — slightly smaller, dramatic sequence

**Guidelines:**
- 1–5 words per entry for bg-video/bg-photo (let media do the talking)
- 5–15 words per entry for bg-solid/bg-gradient-* (text is the focus)
- Power verbs, active voice, end with period
- Good: `"Ship faster."` / `"Every cup tells a story."`
- Bad: `"Our amazing new product helps you"` — too long, too weak

### Content Template Copy

- **counter:** Number should be impressive. Label 2–4 words.
  - Good: `value: 50000, label: "Active users", unit: "+"`
  - Bad: `value: 12, label: "Number of features"` — not impressive enough

- **social-proof:** Quote 15–30 words. Sound authentic, not generic.
  - Good: "This transformed how our team ships products. We cut deployment time from hours to minutes."
  - Bad: "Great product, love it!" — too generic

- **product-launch:** Product name + punchy tagline. Features 1–2 words each.
  - Good: `productName: "Flowstate", tagline: "Focus, amplified.", features: "Deep Focus,Smart Timer,Team Sync,Analytics"`
  - Bad: `features: "A really good feature that helps you focus"` — too long for badges

- **end-screen:** Action verb + benefit.
  - Good: "Start free today." / "See it in action." / "Join 10K+ teams."
  - Bad: "Thank you for watching" — wasted CTA opportunity

### Hook Formulas

Use these patterns for scene 1 text entries or bg-solid/bg-gradient statements:

| Formula | Example |
|---------|---------|
| "The average X loses Y every Z." | "The average team loses 5 hours every week." |
| "What if you could [benefit]?" | "What if you could ship 10x faster?" |
| "Stop [pain point]." | "Stop losing customers." |
| "[Number] [noun] do this differently." | "10,000 teams do this differently." |
| "Meet [product name]." | "Meet Flowstate." |
| "[Provocative statement]." | "Email is broken." |
| "There's a better way." | — |
| "Built for [audience]." | "Built for developers who ship." |

### Visual Hooks (Scene 1 Footage)

The text hooks above, but the *footage* also grabs attention. Pair a text hook with a visual hook:

| Visual hook | Keyword style | Why it grabs |
|-------------|---------------|--------------|
| Human face/emotion | `"woman smiling close up"` | Faces are hardwired attention magnets |
| Fast motion | `"drone speed city traffic"` | Movement triggers alertness |
| Scale/grandeur | `"aerial mountain landscape epic"` | Awe creates curiosity |
| Contrast/mystery | `"silhouette doorway dark light"` | Incomplete info demands resolution |
| Vivid color | `"neon lights city rain night"` | Color pops stop the scroll |

### CTA Formulas

For end-screen `ctaText`:

| Formula | Example |
|---------|---------|
| "[Action] free today." | "Start free today." |
| "[Action] in [time]." | "Launch in minutes." |
| "Join [social proof]." | "Join 10K+ teams." |
| "See it in action." | — |
| "[Product] — [value prop]." | "Flowstate — focus, amplified." |
| "Try [product] free." | "Try Flowstate free." |

## Pacing & Duration Budget

### Duration Budget Rule (Non-Negotiable)

Before composing, calculate the time budget to prevent scenes from being too short for their animations:

**Minimum durations per template:**

| Template | Minimum | Preferred | Notes |
|----------|---------|-----------|-------|
| `bg-solid` | 1.5s | 2.5s | Text needs time to read |
| `bg-photo` | 1.5s | 3s | Can go shorter for fast cuts |
| `bg-video` | 1.5s | 3s | Can go shorter for fast cuts |
| `bg-gradient-linear` | 1.5s | 2.5s | Text needs time to read |
| `bg-gradient-radial` | 1.5s | 2.5s | Text needs time to read |
| `bg-confetti` | 1.5s | 2.5s | Particles need time to register |
| `bg-stars` | 1.5s | 2.5s | Stars need time to twinkle |
| `bg-particles` | 1.5s | 2.5s | Bokeh needs time to register |
| `bg-geometric` | 1.5s | 2.5s | Grid needs time to animate |
| `bg-aurora` | 1.5s | 2.5s | Color bands need time to flow |
| `counter` | 2s | 3s | Count-up animation needs time |
| `social-proof` | 2.5s | 3.5s | Quote + author + stars stagger |
| `product-launch` | 3s | 4s | Device + badges + CTA entrance |
| `end-screen` | 2s | 3s | Logo + CTA + tagline stagger |
| `stat-grid` | 2.5s | 3.5s | 2–4 cards need stagger time |
| `feature-list` | 2s | 3s | Items stagger in sequentially |
| `text-stack` | 2s | 3s | Lines reveal one by one |
| `split-compare` | 2.5s | 3.5s | Two columns + divider entrance |

**Budget check:** Sum all preferred durations. If total exceeds track duration, reduce scene count — don't compress complex templates below their minimum.

**Example:** Shadow Countdown (27.6s) with 8 scenes:
- 4x bg-video (3s) + 1x bg-solid (2.5s) + 1x counter (3s) + 1x social-proof (3.5s) + 1x end-screen (3s) = **27s** — fits perfectly
- Adding a product-launch (4s) would push to 28s — drop a bg-video instead

**Max scene counts per track:**

| Track | Duration | Max scenes (comfortable) |
|-------|----------|-------------------------|
| Pulse in the Dark | 25s | 6–7 |
| Shadow Countdown | 27.6s | 7–8 |
| HipHop Sequence | 27.4s | 7–8 |
| Shadows at the Gate | 31.4s | 8–9 |
| Momentum Theme | 37.4s | 10–12 |

### Timing Rules

- **Beat distribution:** Each scene gets 1–2 beats. Give `counter`, `social-proof`, and `product-launch` at least 2 beats (set `durationWeight: 1.3–1.5`).
- **Breathing room:** Don't cram scenes — respect the budget table above.
- **Energy matching:** High-energy beats → `slam`/`flash`/`zoom-through`. Calm moments → `fade-in`/`crossfade`.
- **Accelerate toward climax:** Scenes get shorter (1 beat each) as energy builds toward the peak.
- **End with space:** Last 2 scenes should breathe — don't rush the CTA.
- **Never give `product-launch` only 1 beat** — the device + badges animation needs at least 3s to play out.

## Scene Plan Format

Always present the plan as a table before building the config:

| # | Template | Key variables | Why this template | Copy / Content |
|---|----------|--------------|-------------------|----------------|
| 1 | bg-video | keyword: "fitness workout gym" | Visual hook — real footage grabs attention | texts: "Get moving." |
| 2 | bg-photo | keyword: "runner sunrise trail" | Action footage sells the lifestyle | texts: "Push harder." |
| 3 | bg-solid | — | Brand statement — clean typography | texts: "FitPulse.,Your workout, amplified." |
| 4 | counter | value: 10000, unit: "+" | Impressive scale metric | label: "Active users" |
| 5 | bg-photo | keyword: "smartwatch close up" | Tech angle — shows the product in use | texts: "Track everything." |
| 6 | social-proof | author: "Sarah Chen" | Trust signal from real user | quote: "Best fitness app I've ever used." |
| 7 | bg-video | keyword: "group fitness class" | Community energy | texts: "Join thousands." |
| 8 | end-screen | — | CTA + brand | "Start free today." / fitpulse.app |

Be transparent about why each template was chosen. If you're choosing counter over another bg-video, explain what makes the number impressive enough to warrant it.
