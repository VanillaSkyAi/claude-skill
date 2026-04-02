---
name: vanillasky
description: Create professional beat-synced videos from natural language descriptions using VanillaSky
---

# VanillaSky — Create Cinematic Videos

Create professional beat-synced videos by describing what you want. You compose scenes from React templates, sync them to music, and return a link that opens in VanillaSky's editor — ready to preview, tweak, and export.

**Example prompts:**
- "Create a product launch video for my fitness app FitPulse"
- "Make a cinematic trailer for a coffee brand called Ritual Roasters"
- "Build a 15-second social media ad for our AI writing tool"
- "Create a startup pitch video — we're a dev tools company with 10K users"

## Workflow

**Key principle:** This is a conversation, not a form. Many prompts answer multiple questions at once — if the user says "make a TikTok ad for fitpulse.app", that's the format (portrait), content source (URL to scrape), and tone in one sentence. Skip ahead. Only ask what you don't already know.

### 1. What are we making?

If the user's prompt doesn't make the intent clear, ask:

> What kind of video? Describe what you need, or pick a direction:
> - **Promo** — announcements, milestones, events, ads, celebrations
> - **Informational** — how-tos, case studies, testimonials, comparisons
> - **Product** — feature launches, changelogs, app demos, product pages
>
> Or just describe what you need and I'll pick the best fit.

Internally, detect the recipe type: **promo**, **informational**, or **product**. See [rules/composition-rules.md](rules/composition-rules.md) for detection cues.

### 2. Content source — URL or manual?

> Do you have a website I can pull brand info from? (colors, copy, screenshots)

**If they mention or imply a URL**, scrape it immediately with `scrape_url`:
- If someone says "make a video for Stripe", try scraping `https://stripe.com`
- If they mention "my app FitPulse", ask "Do you have a website I can pull brand info from?"

**What scraping gives you:**

| Scraped field | Use in config |
|---------------|---------------|
| `brandColors.primary` | **Ignore for bg.** Scraped "primary" is usually a page surface color (near-black/white), not a brand color. Always default `brandKit.bg` to `#0a0a1a`. Only use the scraped primary as `brandKit.accent` if it's vibrant/saturated. |
| `brandColors.accent` | Use as `style.brandKit.accent` if vibrant. If both scraped colors are dull (near-black + near-white), ignore both — use a known brand color or the default palette. |
| `fonts.primary` | Match to closest available font in `style.font` (see effects-and-style.md for full list) |
| `fonts.headings` | Note for user — detected a different headings font |
| `title` | Scene copy inspiration, `meta.name` |
| `description` | Scene copy, text entries |
| `headlines` | Scene text entries — pick the best ones |
| `ogImage` | photo mediaUrl or showcase template `screenMediaUrl` |
| `images` | Product screenshots for showcase template `screenMediaUrl` |
| `bodyText` | Copy inspiration, feature extraction |
| `favicon` | Could mention as logo reference (usually too small to use directly) |

**After scraping, confirm what you found:**
> "I found your brand colors (#3b82f6 blue + dark bg), font (Inter), and a product screenshot from your site — look right?"

**Don't blindly copy** — use scraped data as inspiration. Rewrite headlines to be punchier (1-5 words for scenes). Extract key features. Use their actual brand colors.

**Color rules:**
- `brandKit.bg` should almost always be `#0a0a1a` (default dark navy) — don't use scraped surface colors as backgrounds
- Pick the most vibrant/saturated scraped color for `brandKit.accent`
- If the brand has a well-known color (e.g. Spotify green, Miro yellow), use that as accent even if the scraper didn't find it

**If no URL available**, ask naturally:
- "Do you have **brand colors**?" -> `style.brandKit.bg` + `.accent`
- "**Font preference**?" -> `style.font` (or suggest based on mood)
- "Got a **logo**?" -> for `end-screen` logoUrl

If they don't have these, that's fine — defaults look professional. They can always customize in the editor later.

### 3. Media — yours or ours?

> Do you have photos, videos, or product screenshots you'd like to use? Or should I select stock footage and animations for you?
>
> You can always swap anything later in the editor.

- If they have media -> upload it with `upload_media` to get public URLs, then use those in `mediaUrl` / `screenMediaUrl` fields
- If not -> use `mediaKeyword` for Pexels stock and lean on animated templates (hooks, charts, social, app mockups)
- Mix is fine — some scenes with their media, others with stock
- If they share local file paths or paste images, upload each one with `upload_media` before building the config

**Sound-off reminder:** 85% of viewers watch muted. Ensure every scene has text overlays — text IS the message for most viewers.

### 4. Format — where will it live?

> Where will this video be shared?
> - **TikTok / Instagram Reels / YouTube Shorts** -> vertical (9:16)
> - **YouTube / LinkedIn / Website / Presentations** -> horizontal (16:9)

Infer from context when possible:
- "social" / "TikTok" / "Reels" / "Shorts" / "Stories" -> `"portrait"`
- "YouTube" / "LinkedIn" / "website" / "presentation" -> `"landscape"`
- If unclear, default to `"portrait"` — most video today is vertical

### 5. Compose Scenes and Pick a Track

Plan scenes and select a track together — they inform each other:

1. **Plan scenes first** — follow the 3-phase structure (hook, body, close) from [composition-rules.md](rules/composition-rules.md). Aim for **7-8 scenes** (minimum 6, maximum 10). Last scene is always `ctaSplit`.
2. **Call `list_tracks`** — find a track whose `mood_tags` (energy, mood, movement) match the content feel. Pick one whose duration fits your estimated total from scene complexity.
3. **Vary selection** — don't default to the same track every time.

Scene count is driven by track duration: `round(duration / 3)`, clamped to 6-10 scenes (aim for 7-8). Beats (30-60+ per track, detected by Essentia.js) serve as natural cut points — the system picks which beats to use as scene boundaries at save time.

See [rules/audio-tracks.md](rules/audio-tracks.md) for the mood tag system and audio config format.

### 6. Propose a Scene Plan

Present the plan using the 3-phase format from [composition-rules.md](rules/composition-rules.md#scene-plan-format). Show the hook, body, and close phases with their templates and weights so the user sees exactly what each scene shows and why.

Be transparent about template choices. Explain why a template fits its role.

### 7. User Confirms or Tweaks

Wait for approval. Adjust based on feedback.

### 8. Build the VideoConfig

Compose the full JSON. See schema below and [rules/templates.md](rules/templates.md) for variable details.

### 9. Save and Share

Save the config and return the editor link. The user can preview, customize, and export in VanillaSky's browser-based editor.

## Rule Files

Read these for detailed creative and technical patterns:

- [rules/composition-rules.md](rules/composition-rules.md) — 3 recipe types, 3-phase structure, scene planning, template selection, copy, pacing
- [rules/templates.md](rules/templates.md) — Template discovery, `texts` variable format, tiers, selection rules
- [rules/effects-and-style.md](rules/effects-and-style.md) — Text effects, background effects, transitions, fonts, brand kit
- [rules/schema.md](rules/schema.md) — Full annotated VideoConfig JSON example
- [rules/audio-tracks.md](rules/audio-tracks.md) — Track selection by mood_tags and audio config format

## Templates

**Call `list_templates` to get the current template list.** It returns each template's ID, variables, duration, usage tips, and copy guidance. Never hardcode template IDs — they change as templates are added and removed.

Template IDs use **camelCase** (e.g., `phoneMockup`, `cinematicFlash`, `bigNumber`, `ctaSplit`). Never use dashed IDs like `showcase-phone` or `intro-text-slam` — they don't exist.

Templates are organized by category and tagged with position (hook/body/closer) and recipe types (promo/informational/product). Each scene in a video references one template by `templateId` and passes `variables`.

### The `texts` Variable

See [templates.md](rules/templates.md#the-texts-variable) for the full format. Key: comma-separated entries, pipe for per-entry effects, max 8 entries.

## VideoConfig Schema

See [rules/schema.md](rules/schema.md) for a full annotated example.

### Schema Rules

See [schema.md](rules/schema.md) for a full annotated example. Key rules:
- `scenes[].templateId` — call `list_templates` first, never hardcode. Use camelCase IDs only.
- `scenes[].variables` — keys must match the template's variable schema
- `timing.durationWeight` — relative weight, server computes startTime/endTime. See [composition-rules.md](rules/composition-rules.md) for weight guidelines
- `style.font` — use full CSS value: `"'Inter', sans-serif"` not `"Inter"`
- `meta.type` — one of: `"promo"`, `"informational"`, `"product"`. Default to `"promo"` if ambiguous
- `meta.prompt` — ALWAYS set to the user's verbatim request
- `meta.source` — set to `"skill"`

### Media Handling

- **User provides local files**: Call `upload_media` with the file path first. It uploads to cloud storage and returns a public URL. Use that URL in `mediaUrl` / `screenMediaUrl` / `logoUrl` fields.
- **No user media**: For photo / video templates, set `mediaKeyword` with a descriptive Pexels search keyword (2-4 words). Leave `mediaUrl` empty — the editor auto-fills the top Pexels result on load.
- For showcase templates (`phoneMockup`, `tabletMockup`, `browserMockup`, etc.): set `screenMediaUrl` directly if the user provides a screenshot (upload it first with `upload_media`). If not, leave it empty — the template shows a professional placeholder.
- **User provides URLs**: Use them directly in the relevant fields — no upload needed.

## Pre-Save Checklist

Before calling `save_config`, verify against [composition-rules.md](rules/composition-rules.md):
- Scene count fits track duration (aim for 7-8 scenes, min 6, max 10)
- Duration weights follow the rules in composition-rules.md (showcase gets 1.2-1.5, quick cuts get 0.4-0.5, CTA gets 0.8-1.0)
- Template variables match their schema (call `list_templates` to check)
- Last scene uses ctaSplit
- Every scene has text overlays (sound-off design)
- Template IDs are camelCase and match exactly (no dashed IDs)

## MCP Tools

Use in this order during video creation. No API keys needed — the MCP server handles everything.

1. **`scrape_url`** (optional, do first if URL available) — `{ url }` -> Returns `brandColors`, `fonts`, `headlines`, `description`, `images`, `ogImage`. Use for brand kit, font matching, and copy inspiration.
2. **`upload_media`** (if user provides local files) — `{ filePath }` -> Uploads to cloud storage, returns `{ publicUrl, fileName, mimeType, sizeBytes }`. Call once per file. Use the `publicUrl` in `mediaUrl` / `screenMediaUrl` fields. Supports: jpg, png, webp, gif, mp4, webm, mov. Max 20MB.
3. **`list_templates`** (REQUIRED) — `{ category? }` -> Returns all templates with `id`, `variables`, `minDuration`, `position` (hook/body/closer), `types` (promo/informational/product), `whenToUse`, `copyTip`. Filter by position and type to pick the right templates. Never hardcode template IDs.
4. **`list_tracks`** (REQUIRED) — Returns tracks with `id`, `name`, `duration`, `description`, `mood_tags` (energy/mood/movement), and `beatCount`. Pass `trackId` + `duration` in the audio config — beat markers are auto-populated server-side.
5. **`save_config`** (final step) — `{ config }` -> Returns `{ id, url, warnings? }`. Share the URL. Warnings flag duration issues but don't block the save. One video, one track — no variant generation.

## Example

**User:** "Create a launch video for a fitness app called FitPulse"

**You:** Ask about the brief — target audience, key features, what makes it special, any brand colors or screenshots.

**User:** "It tracks heart rate, calories, steps, and sleep. 10K+ users. For everyday athletes. Colors are dark blue (#1a1a3e) and electric green (#00ff88). I have an app screenshot I can share."

**You:** This feels like a **product** recipe — showcase the app with excitement. Pick a track with `energy: high, mood: confident + inspiring, movement: building`. Propose 8 scenes:

| # | Template | Key variables | Why | Copy |
|---|----------|--------------|-----|------|
| 1 | textSlam | texts: "Get moving." | Bold hook — high energy opener | "Get moving." |
| 2 | video | keyword: "runner sunrise trail" | Action footage sells the lifestyle | "Push harder." |
| 3 | photo | keyword: "smartwatch close up" | Shows the tech angle | "Track everything." |
| 4 | phoneMockup | screenMediaUrl: "" (placeholder) | Device mockup — user uploads screenshot | "FitPulse" |
| 5 | bigNumber | value: 10000, unit: "+" | Impressive scale metric | label: "Active users" |
| 6 | photo | keyword: "healthy meal preparation" | Lifestyle footage, breathing room | "Fuel your body." |
| 7 | fitnessApp | — | Dashboard stats, built-in template | "Your daily stats." |
| 8 | ctaSplit | tagline: "Start free today", ctaUrl: "fitpulse.app" | CTA + brand close | — |

Brand: dark blue `#1a1a3e` + electric green `#00ff88`. Font: Bebas Neue (bold, energetic). Text effect: `zoom-through`. Background: `slow-zoom-in`.

After confirmation, build the full VideoConfig JSON and save it.
