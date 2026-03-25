---
name: templates
description: How to discover and use scene templates — call list_templates MCP tool for the live list
metadata:
  tags: templates, scenes, variables, schema
---

# Scene Templates

## How to discover templates

**Always call `list_templates` before composing scenes.** This MCP tool returns the live list of available templates with:
- `id` — the templateId to use in the config
- `label` — human-readable name
- `category` — template category (e.g. "background")
- `description` — what the template does
- `tags` — searchable keywords
- `variables` — what data the template needs (name, type, required, default, description)
- `minDuration` / `preferredDuration` — timing constraints
- `whenToUse` — guidance on when this template fits
- `copyTip` — how to write good text for this template

Never hardcode template IDs — the list changes as templates are added and removed.

## The `texts` variable (background + app templates)

All background templates (bg-*) and all app templates (app-*) share the `texts` variable format. **Always set `texts` explicitly** — don't rely on defaults, as empty `texts` shows no text overlay:

```
"First line|zoom-in,Second line|slam,Third line"
```

**Rules:**
- Comma separates entries — each gets equal time within the scene
- Pipe (`|`) optionally overrides the text effect for that entry
- Without pipe: uses the scene's global text effect
- 1 entry = hero size, 2 = headline size, 3+ = slightly smaller
- Max 8 entries

**Examples:**
- Single text: `"Get moving."` — one entry, displayed big
- Two texts: `"Get moving.,Push harder."` — two sequential entries
- With effects: `"Get moving.|slam,Push harder.|zoom-in"` — per-entry effects

The text transitions happen within one scene — the background stays continuous.

## How to choose templates

Match the scene's PURPOSE to the template's `whenToUse` and `tags`:

| Scene purpose | Look for these tags |
|---------------|-------------------|
| Visual hook / opening | "hero", "action", "footage" |
| Brand statement | "clean", "gradient", "brand" |
| Celebration / launch | "confetti", "celebration", "party" |
| Emotional / atmospheric | "glow", "atmospheric", "dreamy" |
| Product showcase | "photo", "image" |
| Fun / social media | "emoji", "fun", "social" |

## Template tiers — prefer higher tiers

Templates are not equal. Richer templates create more engaging videos.

**Tier 1 — Hero templates (use for key scenes):**
- `app-*` templates — animated phone UIs with real-looking interfaces
- `showcase-phone`, `showcase-phone-triple`, `showcase-tablet`, `showcase-tablet-slides` — device mockups
- `social-chat`, `social-whatsapp` — conversation templates (5-10s, storytelling)
- `social-google-search` — typewriter search with animated result

**Tier 2 — Supporting templates (social proof, data):**
- `social-tweet`, `social-review-stack`, `social-testimonial`, `social-milestone`, `social-notification`
- `chart-bar`, `chart-line`, `chart-progress-ring`, `chart-pie`, `chart-counter`

**Tier 3 — Background templates (palette cleansers only):**
- `bg-photo`, `bg-video` — good with strong media
- `bg-glow`, `bg-gradient-linear`, `bg-particles`, `bg-confetti`, `bg-emoji` — atmospheric
- `bg-solid` — CTA only, never for content

**Every video with 5+ scenes must include at least 1 Tier 1 template.** Plain bg-* scenes should never make up more than 40% of a video.

**Intro templates (`intro-*`) are NOT a tier — they're optional cinematic openers.** Most videos should start with `bg-photo` or `bg-video` with strong hook text. Only use intro templates for trailers, launches, or when the user asks for a dramatic/cinematic feel. See composition-rules.md for details.

## Template rules

- **Scene 1 must be an intro template or bg-photo** — start with visual impact
- **Don't use the same template 3x in a row** — vary for visual interest
- **Respect minDuration** — templates with complex animations need enough time
- **Check preferredDuration** — this is the sweet spot for pacing
- **Give Tier 1 templates more time** — set `durationWeight: 1.2–1.5` for app/showcase/chat templates
