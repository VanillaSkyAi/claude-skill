---
name: composition-rules
description: Narrative structure, pacing, copy writing, and Pexels keyword strategy — template-agnostic
metadata:
  tags: composition, narrative, pacing, copy, keywords
---

# Composition Rules

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

## Scene Flow

- **Alternate visual intensity** — follow a busy scene with a calmer one
- **Use simple backgrounds as palette cleansers** between media-heavy scenes
- **Vary camera movement** — if one scene zooms in, the next should drift or stay static
- **Match cuts** — when adjacent scenes share a visual element, use `crossfade`

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

### Duration Budget

Use `preferredDuration` from `list_templates` response. Sum all preferred durations — if total exceeds track duration, reduce scene count. Don't compress templates below their `minDuration`.

### Max scenes per track

| Track | Duration | Max scenes |
|-------|----------|-----------|
| Pulse in the Dark | 25s | 6–7 |
| Shadow Countdown | 27.6s | 7–8 |
| HipHop Sequence | 27.4s | 7–8 |
| Shadows at the Gate | 31.4s | 8–9 |
| Momentum Theme | 37.4s | 10–12 |

### Timing Rules

- Each scene gets 1–2 beats
- High-energy beats → `slam`/`flash`/`zoom-through` text effects
- Calm moments → `fade-in`/`crossfade`
- Scenes get shorter as energy builds toward climax
- Last 2 scenes should breathe — don't rush the CTA

## Scene Plan Format

Present the plan as a table before building the config:

| # | Template | Key variables | Why this template | Copy |
|---|----------|--------------|-------------------|------|
| 1 | (from list_templates) | keyword/texts | Match to arc purpose | Scene text |
