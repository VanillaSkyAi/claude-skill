---
name: animation-timing
description: Timing concepts for VanillaSky animations — easing, stagger, beat-sync
metadata:
  tags: easing, timing, stagger, beat, animation
---

# Animation Timing

These timing concepts apply to VanillaSky's built-in React animations. You don't write animation code directly, but understanding these patterns helps you choose the right animation types and configure scenes effectively.

## Easing

**RULE: Never suggest linear motion.** All built-in animations use easing curves internally.

| Easing style | Character | Used by |
|-------------|-----------|---------|
| Ease-out cubic | Smooth deceleration | Most reveals, counters, scaling |
| Ease-in-out cubic | Gentle start and stop | Progress bars, transitions |
| Ease-out quart | Snappy deceleration | Fast reveals, energetic content |
| Ease-out back | Slight overshoot | Cards popping in, playful elements |
| Ease-out elastic | Bouncy settle | Attention-grabbing numbers, badges |
| Spring | Natural organic settle | Cards, interactive elements |

## Staggered Reveals

Items appearing one by one is THE most important animation pattern. It makes any list, chart, or multi-element scene look professional.

The built-in animations (list-reveal, feature-grid, stats-dashboard, bar-chart, etc.) handle stagger timing automatically.

**Key timing principles:**
- 3-4 items: ~0.12s delay between items
- 5-7 items: ~0.08s delay between items
- 8+ items: ~0.05s delay between items
- Items start revealing after an initial delay — the background and title establish first

## Beat-Synced Effects

Beat intensity (from 1 on beat to 0 between beats) drives subtle accents:

- **Scale pulse** — subtle size bump on beat (backgrounds, cards)
- **Glow pulse** — accent color glow intensity on beat
- **Brightness flash** — white overlay flash on beat
- **Shake** — use sparingly, high energy only

**RULES for beat effects:**
- Beat effects should be SUBTLE
- Never make beat effects the primary animation — they accent the main reveal
- Don't use shake unless the video mood is "energetic" or "hiphop"

## Progress Phases

Complex animations are structured into overlapping phases:

1. **Background + title** (0-30% of scene) — establish context
2. **Items/content reveal** (15-70%) — main content appears with stagger
3. **Final accent** (70-100%) — highlight, badge, or final flourish

**RULE: Phases overlap slightly.** Don't wait for one phase to fully complete before starting the next. Overlapping creates flow.

## Pacing Guidelines

- Counter/animation scenes need 2 beats minimum (durationWeight: 1.3-1.5) to let reveals play out
- Don't rush staggered reveals — give them time
- Match scene energy to beat intensity
