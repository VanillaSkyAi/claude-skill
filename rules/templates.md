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

## The `texts` variable (background templates)

All background templates (bg-*) share the `texts` variable format:

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

## Template rules

- **Scene 1 must be a background template** — start with a visual
- **Don't use the same template 3x in a row** — vary for visual interest
- **Respect minDuration** — templates with complex animations need enough time
- **Check preferredDuration** — this is the sweet spot for pacing
