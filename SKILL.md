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

**Key principle:** This is a conversation, not a form. Many prompts answer multiple questions at once — if the user says "make a TikTok ad for fitpulse.app", that's the video type (Ad), format (portrait), and a URL to scrape in one sentence. Skip ahead. Only ask what you don't already know.

### 1. What are we making?

If the user's prompt doesn't make the intent clear, ask:

> What kind of video? Describe what you need, or pick a direction:
> - **Launch** — announce your product, show what you built
> - **Explain** — teach how it works, landing page video
> - **Sell** — ad, convert viewers, get signups
> - **Showcase** — demo features, product tour
> - **Social** — quick TikTok/Reel/Short
>
> Or just describe what you need and I'll pick the best fit.

Use detection cues from [rules/composition-rules.md](rules/composition-rules.md) to infer the arc from context. If still ambiguous, default to **Launch** — it's what most founders need first.

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
| `ogImage` | `bg-photo.mediaUrl` or showcase template `screenMediaUrl` |
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
- If not -> use `mediaKeyword` for Pexels stock and lean on animated templates (intros, charts, social, app mockups)
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

### 5. Pick a Music Track

**After planning scenes** (not before), call `list_tracks` to find a track that fits:

1. **Mood match** — pick a track whose description fits the arc's mood (see composition-rules.md)
2. **Duration fit** — track duration should be close to your estimated total (from template complexity)
3. **Vary selection** — don't default to the same track every time

Scene count is driven by track duration: `round(duration / 3)`, clamped to 4-12 scenes. Beats (30-60+ per track, detected by Essentia.js) serve as natural cut points — the system picks which beats to use as scene boundaries at save time.

See [rules/audio-tracks.md](rules/audio-tracks.md) for the beat-driven layout system.

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

- [rules/composition-rules.md](rules/composition-rules.md) — 5 arcs, 3-phase structure, scene planning, template selection, copy, pacing
- [rules/templates.md](rules/templates.md) — Template discovery, `texts` variable format, tiers, selection rules
- [rules/effects-and-style.md](rules/effects-and-style.md) — Text effects, background effects, transitions, fonts, brand kit
- [rules/schema.md](rules/schema.md) — Full annotated VideoConfig JSON example
- [rules/audio-tracks.md](rules/audio-tracks.md) — Track selection rules and audio config format

## Templates

**Call `list_templates` to get the current template list.** It returns each template's ID, variables, duration, usage tips, and copy guidance. Never hardcode template IDs — they change as templates are added and removed.

Templates are organized by category. Each scene in a video references one template by `templateId` and passes `variables`.

### The `texts` Variable

See [templates.md](rules/templates.md#the-texts-variable) for the full format. Key: comma-separated entries, pipe for per-entry effects, max 8 entries.

## VideoConfig Schema

See [rules/schema.md](rules/schema.md) for a full annotated example.

### Schema Rules

See [schema.md](rules/schema.md) for a full annotated example. Key rules:
- `scenes[].templateId` — call `list_templates` first, never hardcode
- `scenes[].variables` — keys must match the template's variable schema
- `timing.durationWeight` — relative weight, server computes startTime/endTime. See [composition-rules.md](rules/composition-rules.md) for weight guidelines
- `style.font` — use full CSS value: `"'Inter', sans-serif"` not `"Inter"`
- `meta.videoType` — one of: `"launch"`, `"explain"`, `"sell"`, `"showcase"`, `"social"`. Default to `"launch"` if ambiguous
- `meta.prompt` — ALWAYS set to the user's verbatim request
- `meta.source` — set to `"skill"`

### Media Handling

- **User provides local files**: Call `upload_media` with the file path first. It uploads to cloud storage and returns a public URL. Use that URL in `mediaUrl` / `screenMediaUrl` / `logoUrl` fields.
- **No user media**: For `bg-photo` / `bg-video`, set `mediaKeyword` with a descriptive Pexels search keyword (2-4 words). Leave `mediaUrl` empty — the editor auto-fills the top Pexels result on load.
- For showcase templates (`showcase-phone`, `showcase-tablet`, etc.): set `screenMediaUrl` directly if the user provides a screenshot (upload it first with `upload_media`). If not, leave it empty — the template shows a professional placeholder.
- **User provides URLs**: Use them directly in the relevant fields — no upload needed.

## Pre-Save Checklist

Before calling `save_config`, verify against [composition-rules.md](rules/composition-rules.md):
- Scene count fits track duration
- Duration weights follow the rules in composition-rules.md (hero, quick cuts, CTA)
- Template variables match their schema (call `list_templates` to check)
- Last scene is a CTA
- Every scene has text overlays (sound-off design)

## MCP Tools

Use in this order during video creation. No API keys needed — the MCP server handles everything.

1. **`scrape_url`** (optional, do first if URL available) — `{ url }` -> Returns `brandColors`, `fonts`, `headlines`, `description`, `images`, `ogImage`. Use for brand kit, font matching, and copy inspiration.
2. **`upload_media`** (if user provides local files) — `{ filePath }` -> Uploads to cloud storage, returns `{ publicUrl, fileName, mimeType, sizeBytes }`. Call once per file. Use the `publicUrl` in `mediaUrl` / `screenMediaUrl` fields. Supports: jpg, png, webp, gif, mp4, webm, mov. Max 20MB.
3. **`list_templates`** (REQUIRED) — `{ category? }` -> Returns all templates with `id`, `variables`, `minDuration`, `whenToUse`, `copyTip`. Never hardcode template IDs.
4. **`list_tracks`** (REQUIRED) — Returns tracks with `id`, `name`, `duration`, `description`, `videoTypes`, and `beatCount`. Pass `trackId` + `duration` in the audio config — beat markers are auto-populated server-side.
5. **`save_config`** (final step) — `{ config }` -> Returns `{ id, url, warnings? }`. Share the URL. Warnings flag duration issues but don't block the save.

## Example

**User:** "Create a launch video for a fitness app called FitPulse"

**You:** Ask about the brief — target audience, key features, what makes it special, any brand colors or screenshots.

**User:** "It tracks heart rate, calories, steps, and sleep. 10K+ users. For everyday athletes. Colors are dark blue (#1a1a3e) and electric green (#00ff88). I have an app screenshot I can share."

**You:** This feels like a **Launch** — announce the app with excitement. Pick "HipHop Sequence" (energetic, fitness mood). Propose 8 scenes with `cut` as default transition:

| # | Template | Key variables | Why | Copy |
|---|----------|--------------|-----|------|
| 1 | bg-video | keyword: "fitness workout gym" | Visual hook — real footage grabs attention | texts: "Get moving." |
| 2 | bg-video | keyword: "runner sunrise trail" | Action footage sells the lifestyle | texts: "Push harder." |
| 3 | bg-photo | keyword: "smartwatch close up" | Shows the tech angle | texts: "Track everything." |
| 4 | showcase-phone | screenMediaUrl: "" (placeholder) | Device mockup — user uploads screenshot | texts: "FitPulse" |
| 5 | chart-counter | value: 10000, unit: "+" | Impressive scale metric | label: "Active users" |
| 6 | bg-photo | keyword: "healthy meal preparation" | Lifestyle footage, breathing room | texts: "Fuel your body." |
| 7 | bg-video | keyword: "group fitness class energy" | Community energy | texts: "Join thousands." |
| 8 | bg-solid | — | CTA + brand | texts: "Start free today.,fitpulse.app" |

Brand: dark blue `#1a1a3e` + electric green `#00ff88`. Font: Bebas Neue (bold, energetic). Text effect: `zoom-through`. Background: `slow-zoom-in`.

After confirmation, build the full VideoConfig JSON and save it.
