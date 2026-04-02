---
name: templates
description: How to discover and use scene templates — call list_templates MCP tool for the live list
---

> **Scope:** Template discovery, variable formats, tiers, selection rules. For creative composition see [composition-rules.md]. For effects/fonts see [effects-and-style.md].

# Scene Templates

## How to discover templates

**Always call `list_templates` before composing scenes.** This MCP tool returns the live list of available templates with:
- `id` — the templateId to use in the config (camelCase)
- `label` — human-readable name
- `category` — template category (e.g. "background")
- `description` — what the template does
- `tags` — searchable keywords
- `position` — where in a video: `hook`, `body`, or `closer`
- `types` — which recipe types: `promo`, `informational`, `product`
- `variables` — what data the template needs (name, type, required, default, description)
- `minDuration` / `preferredDuration` — timing constraints
- `whenToUse` — guidance on when this template fits
- `copyTip` — how to write good text for this template

Never hardcode template IDs — the list changes as templates are added and removed.

## The `texts` variable (background + app templates)

All background templates (photo, video, solidColor, gradient, glow, confetti, emojiBurst, particles) and all app templates share the `texts` variable format. **Always set `texts` explicitly** — don't rely on defaults, as empty `texts` shows no text overlay:

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
- App templates (appGrid, bankingApp, chatListApp, ecommerceApp, fitnessApp, etc.) — animated phone UIs with real-looking interfaces
- phoneMockup, triplePhone, tabletMockup, tabletSlides — device mockups
- chatBubbles, whatsappChat — conversation templates (5-10s, storytelling)
- googleSearch — typewriter search with animated result

**Tier 2 — Supporting templates (social proof, data):**
- tweet, reviewStack, testimonial, milestone, notification
- barChart, lineChart, progressRing, pieChart, bigNumber

**Tier 3 — Background templates (palette cleansers and quick cuts):**
- photo, video — great at any duration, including short (< 2s) quick visual cuts between animated scenes. Use these for rhythm variety and breathing room.
- glow, gradient, particles, confetti, emojiBurst — atmospheric
- solidColor — CTA only, never for content

**Every video with 5+ scenes must include at least 1 Tier 1 template.** Plain background scenes should never make up more than 40% of a video.

**Brand-reveal templates (cinematicFlash, spotlight, vanillaSky, textSlam, countdown) are NOT a tier — they're optional cinematic openers.** Most videos should start with photo or video with strong hook text. Only use brand-reveal templates for trailers, launches, or when the user asks for a dramatic/cinematic feel. See composition-rules.md for details.

## Structured variable format

Some templates accept structured variables (e.g. `notif1`–`notif6`, `transaction1`–`transaction5`, `chat1`–`chat6`, `msg1`–`msg5`). **Always pass these as colon-separated strings**, matching the format in the schema description:

```
"🔔:Instagram:liked your photo:2m"
"👕:Adidas:Shopping:-45.00€"
"😊:Sarah Chen:Hey, are you free tonight?:2m"
```

Templates accept objects and JSON strings as a fallback, but colon-separated strings are the canonical format and render most reliably.

For chat templates (chatBubbles, whatsappChat), pass plain text strings:
```
"Hey, what's up?"
"I'm good, how are you?|out"
```

## Template rules

- **Scene 1 should be `photo` or `video` with strong hook text.** Brand-reveal templates (textSlam, cinematicFlash, etc.) are optional — use only for trailers/launches or when the user asks for a cinematic feel.
- **Don't use the same template 3x in a row** — vary for visual interest
- **Respect minDuration** — templates with complex animations need enough time
- **Check preferredDuration** — this is the sweet spot for pacing
- For timing weights by template tier, see [composition-rules.md](composition-rules.md).
