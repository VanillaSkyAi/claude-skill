---
name: vanillasky
description: Create cinematic beat-synced trailer videos from natural language descriptions using VanillaSky
---

# VanillaSky — Create Cinematic Videos

Create professional beat-synced videos by describing what you want. You compose scenes from React templates, sync them to music, and return a link that opens in VanillaSky's editor — ready to preview, tweak, and export.

**Example prompts:**
- "Create a product launch video for my fitness app FitPulse"
- "Make a cinematic trailer for a coffee brand called Ritual Roasters"
- "Build a 15-second social media ad for our AI writing tool"
- "Create a startup pitch video — we're a dev tools company with 10K users"

## Workflow

### 1. Understand the Brief + Auto-Research

Ask about:
- **Product/brand** — what is it, what does it do
- **Target audience** — who is this video for
- **Key message** — the one thing viewers should remember
- **Tone/mood** — cinematic, energetic, calm, edgy, premium

**If the user mentions a website or URL, scrape it first.** Use MCP `scrape_url` tool or bash fallback (see below). This extracts brand colors, headlines, description, images, and favicon — saving the user from having to provide all this manually.

**Also proactively scrape when you can infer a URL** — if someone says "make a video for Stripe", try scraping `https://stripe.com`. If they mention "my app FitPulse", ask "Do you have a website I can pull brand info from?"

**What scraping gives you:**

| Scraped field | Use in config |
|---------------|---------------|
| `brandColors.primary` | `style.brandKit.accent` |
| `brandColors.accent` | `style.brandKit.bg` (or use a dark version) |
| `title` | Scene copy inspiration, `meta.name` |
| `description` | Scene copy, text entries |
| `headlines` | Scene text entries — pick the best ones |
| `ogImage` | `bg-photo.mediaUrl` or `product-launch.screenMediaUrl` |
| `images` | Product screenshots for `product-launch.screenMediaUrl` |
| `bodyText` | Copy inspiration, feature extraction |
| `favicon` | Could mention as logo reference (usually too small to use directly) |

**Don't blindly copy** — use scraped data as inspiration. Rewrite headlines to be punchier (1-5 words for scenes). Extract key features for product-launch badges. Use their actual brand colors.

### 2. Brand Kit (fill from scrape or ask)

If you scraped a website, pre-fill what you found:
- **Brand colors** from `brandColors.primary` / `.accent` → `style.brandKit`
- **Product images** from `ogImage` / `images` → `product-launch.screenMediaUrl`
- Confirm with the user: "I found your brand colors (#3b82f6 blue + dark bg) and product screenshot from your website — look right?"

If no URL available, ask naturally:
- "Do you have **brand colors**?" → `style.brandKit.bg` + `.accent`
- "**Font preference**?" → `style.font` (or suggest based on mood)
- "Got a **logo**?" → for `end-screen` logoUrl
- "Any **existing media** — product screenshots, app screenshots?" → for `product-launch` screenMediaUrl or `bg-photo`/`bg-video` mediaUrl

If they don't have these, that's fine — defaults look professional. They can always customize in the editor later.

### 3. Format — Vertical or Horizontal?

Ask in plain terms the user understands:

- "Is this for **TikTok, Instagram Reels, or YouTube Shorts**? → **Vertical** (9:16 portrait, 1080×1920)"
- "Or more for **YouTube, LinkedIn, or a website**? → **Horizontal** (16:9 landscape, 1920×1080)"

If they say "social" or mention a specific platform, infer:
- TikTok / Reels / Shorts / Stories / Pinterest → `"portrait"`
- YouTube / LinkedIn / Website / Presentation / TV → `"landscape"`
- If unclear, default to `"portrait"` — most video today is vertical

Set `orientation` in the config accordingly.

### 4. Detect Video Type

Infer from context or ask. Types shape the starting structure:
- **Ad** (15–30s) — hook fast, show value, drive action
- **Trailer** (25–40s) — build tension, tell a story, create desire
- **Showreel** (30–60s) — showcase breadth, demonstrate capability
- **Social media** (15–20s) — stop the scroll, one message, immediate action

See [rules/video-types.md](rules/video-types.md) for detailed presets. These are starting points — adapt freely.

### 5. Pick a Music Track

Choose from the catalog based on mood and video type. See [rules/audio-tracks.md](rules/audio-tracks.md) for full descriptions.

| Track | Duration | Mood | Best for |
|-------|----------|------|----------|
| Shadow Countdown | 27.6s | Epic, Cinematic | Brand reveals, cinematic trailers |
| HipHop Sequence | 27.4s | Hiphop, Beat | Fitness, lifestyle, social ads |
| Momentum Theme | 37.4s | Energetic, Bold | Showreels, pitches, SaaS |
| Shadows at the Gate | 31.4s | Thriller, Cinematic | Security, fintech, dark themes |
| Pulse in the Dark | 25s | Trailer, Thriller | Social ads, short trailers, urgency |

### 6. Propose a Scene Plan

Present a transparent table showing each scene's template, content, and reasoning:

| # | Template | Key variables | Why this template | Copy / Content |
|---|----------|--------------|-------------------|----------------|
| 1 | bg-video | keyword: "coffee shop ambiance" | Visual hook — real footage | texts: "Ritual starts here." |
| 2 | bg-solid | — | Brand statement — clean typography | texts: "Every cup, a story." |
| 3 | bg-photo | keyword: "barista latte art" | Craftsmanship footage | texts: "Crafted with care." |
| 4 | counter | value: 50000, unit: "+" | Impressive scale | label: "Cups served" |
| 5 | bg-photo | keyword: "coffee beans close up" | Premium product shot | texts: "Premium beans." |
| 6 | end-screen | — | CTA + brand | "Order now." / ritualroasters.com |

Be transparent about template choices. Explain why a `counter` is worth it (the number is impressive) or why `social-proof` fits (strong testimonial available).

### 7. User Confirms or Tweaks

Wait for approval. Adjust based on feedback.

### 8. Build the VideoConfig

Compose the full JSON. See schema below and [rules/templates.md](rules/templates.md) for variable details.

### 9. Save and Share

Save the config and return the editor link. The user can preview, customize, and export in VanillaSky's browser-based editor.

## Rule Files

Read these for detailed creative and technical patterns:

- [rules/templates.md](rules/templates.md) — All 18 templates: variable schemas, duration hints, usage guidelines
- [rules/effects-and-style.md](rules/effects-and-style.md) — Text effects, background effects, transitions, fonts, brand kit
- [rules/composition-rules.md](rules/composition-rules.md) — Narrative arc, template mix, pacing, copy best practices
- [rules/video-types.md](rules/video-types.md) — Presets: Ad, Trailer, Showreel, Social
- [rules/audio-tracks.md](rules/audio-tracks.md) — Track catalog with energy curves and best-for tags

## Templates (Quick Reference)

18 React templates in two categories. Each scene references one by `templateId` and passes `variables`.

### Background Templates (bg-*)

All bg-* templates use the `texts` variable — comma-separated entries with optional `|effect` per entry. The background stays continuous while text entries transition within the scene.

| Template | Use for | Key variables |
|----------|---------|---------------|
| `bg-solid` | Brand statements, title cards, clean text | `texts`, `textColor` |
| `bg-photo` | Photo backgrounds, mood, lifestyle | `texts`, `mediaUrl`, `mediaKeyword`, `textColor` |
| `bg-video` | Video backgrounds, hooks, action | `texts`, `mediaUrl`, `mediaKeyword`, `textColor` |
| `bg-gradient-linear` | Stylish text, rotating gradients | `texts`, `textColor` |
| `bg-gradient-radial` | Glowing text, breathing backgrounds | `texts`, `textColor` |
| `bg-confetti` | Celebrations, launches, energy | `texts`, `textColor` |
| `bg-stars` | Night sky, space, wonder | `texts`, `textColor` |
| `bg-particles` | Soft bokeh, dreamy, ambient | `texts`, `textColor` |
| `bg-geometric` | Tech, precision, modern | `texts`, `textColor` |
| `bg-aurora` | Flowing color, premium, creative | `texts`, `textColor` |

### Content Templates

| Template | Use for | Key variables |
|----------|---------|---------------|
| `counter` | Statistics, metrics | `value`, `label`, `unit` |
| `social-proof` | Testimonials, reviews | `quote`, `author`, `role`, `rating` |
| `product-launch` | App/product showcases | `productName`, `tagline`, `features`, `deviceType`, `screenMediaUrl`, `screenMediaKeyword`, `ctaText` |
| `end-screen` | Closing CTA | `ctaText`, `tagline`, `logoUrl` |
| `stat-grid` | Dashboards, fact panels, 2-4 metrics | `stat1Label`, `stat1Value`, `stat1Detail`, `stat2Label`, `stat2Value`, ... |
| `feature-list` | Feature reveals, checklists, bullet points | `items` (comma-separated), `title`, `style_variant` |
| `text-stack` | Sequential statements, dramatic reveals | `lines` (comma-separated), `highlightIndex`, `alignment` |
| `split-compare` | Before/after, A vs B comparisons | `leftLabel`, `rightLabel`, `leftMediaKeyword`, `rightMediaKeyword` |

### The `texts` Variable Format

All bg-* templates use this format:
```
"First line|zoom-in,Second line|slam,Third line"
```
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

## VideoConfig Schema

```json
{
  "orientation": "portrait",
  "audio": {
    "trackId": "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
    "audioUrl": "",
    "duration": 27.4,
    "beatDetection": { "sensitivity": 0.5 },
    "beatMarkers": [
      { "time": 4.2 }, { "time": 7.6 }, { "time": 10.2 }, { "time": 12.7 },
      { "time": 15.1 }, { "time": 17.4 }, { "time": 19.2 }, { "time": 22.8 }
    ]
  },
  "scenes": [
    {
      "id": "s1",
      "templateId": "bg-photo",
      "variables": {
        "texts": "Get moving.",
        "mediaUrl": "",
        "mediaKeyword": "fitness workout gym"
      },
      "timing": { "beatStart": 0, "beatEnd": 0, "durationWeight": 1.0 },
      "transition": "crossfade",
      "backgroundEffect": "slow-zoom-in"
    },
    {
      "id": "s2",
      "templateId": "counter",
      "variables": {
        "value": 10000,
        "label": "Active users",
        "unit": "+"
      },
      "timing": { "beatStart": 3, "beatEnd": 4, "durationWeight": 1.3 }
    },
    {
      "id": "s3",
      "templateId": "end-screen",
      "variables": {
        "ctaText": "Start free today.",
        "tagline": "fitpulse.app",
        "logoUrl": ""
      },
      "timing": { "beatStart": 7, "beatEnd": 7, "durationWeight": 1.0 }
    }
  ],
  "style": {
    "font": "'Inter', sans-serif",
    "brandKit": {
      "bg": "#1a1a2e",
      "accent": "#e94560"
    },
    "defaultTextEffect": "fade-in",
    "defaultTransition": "crossfade",
    "defaultBackgroundEffect": "slow-zoom-in"
  },
  "meta": {
    "name": "FitPulse Launch",
    "prompt": "Create a launch video for a fitness app called FitPulse",
    "mood": ["Energetic"]
  }
}
```

### Schema Rules

- **`audio` object is REQUIRED** — without it, beat-based timing breaks and all scenes fall back to 3s fixed duration. Always include the full audio object with `trackId`, `audioUrl`, `duration`, `beatDetection`, and `beatMarkers`.
- **`audio.audioUrl`** — always leave empty (`""`), the editor loads it from the track database
- **`audio.beatMarkers`** — wrap each time value: `{ "time": 4.2 }` not just `4.2`
- **`scenes[].id`** — use `"s1"`, `"s2"`, etc.
- **`scenes[].templateId`** — call `list_templates` MCP tool to get current available templates. NEVER hardcode template IDs — the list changes as templates are added/removed.
- **`scenes[].variables`** — keys must match the template's variable schema (returned by `list_templates`)
- **`timing.beatStart` / `beatEnd`** — 0-based indices into the `beatMarkers` array. **`beatEnd` is inclusive** — a scene extends from `beatMarkers[beatStart]` to `beatMarkers[beatEnd + 1]`. So for 8 scenes on 8 beats, assign `beatStart:0,beatEnd:0` / `beatStart:1,beatEnd:1` / ... / `beatStart:7,beatEnd:7`. Give a scene 2 beats with `beatStart:3,beatEnd:4` (extends to beat 5). **Never overlap** — each beat index should be used by only one scene.
- **`timing.durationWeight`** — `1.0` = normal. Use `1.3–1.5` for `counter`, `social-proof`, `product-launch`, `stat-grid`, `split-compare` (they need more time). **Check the duration budget in [rules/composition-rules.md](rules/composition-rules.md) — scenes that are too short for their animations look broken.**
- **`transition` / `backgroundEffect`** — set per-scene to override `style.defaultTransition` / `style.defaultBackgroundEffect`
- **`textEffect`** — only meaningful for bg-* templates (they use global text effect). Set per-scene to override.
- **`style.font`** — use the full CSS value: `"'Inter', sans-serif"` not `"Inter"` (see [rules/effects-and-style.md](rules/effects-and-style.md) for all options)
- **`orientation`** — `"portrait"` (1080×1920, default) or `"landscape"` (1920×1080)
- **`meta.mood`** — array of mood tags matching the track's mood

### Media Handling

- For `bg-photo` / `bg-video`: set `mediaKeyword` with a descriptive Pexels search keyword (2–4 words). Leave `mediaUrl` empty — the editor auto-fills the top Pexels result on load.
- For `product-launch`: set `screenMediaKeyword` if user doesn't have a screenshot. Or set `screenMediaUrl` directly if they provide one.
- For `end-screen`: set `logoUrl` if user provided a logo.
- If the user provides media files/URLs, use them directly in the relevant `mediaUrl` / `screenMediaUrl` / `logoUrl` fields.

## Pre-Save Validation Checklist

**Run these checks before saving the config. Fix any failures.**

### 1. Beat overlap check
Each beat index must belong to only one scene. A scene with `beatEnd: N` claims beats through index N (extends to `beatMarkers[N+1]`).

```
For each scene, list its claimed beats: range(beatStart, beatEnd) inclusive.
Verify no beat index appears in more than one scene.
```

**Example (correct):** 8 scenes, 8 beats
```
s1: beat 0     s2: beat 1     s3: beat 2     s4: beat 3
s5: beat 4     s6: beat 5     s7: beat 6     s8: beat 7
```

**Example (WRONG):** s2 takes 2 beats, s6 and s7 collide
```
s1: beat 0     s2: beats 1-2  s3: beat 3     s4: beat 4
s5: beat 5     s6: beat 6     s7: beat 6 <- OVERLAP!  s8: beat 7
```

### 2. Scene count vs beat count
Total beat slots used must equal total beats available. If a scene uses 2 beats (`beatStart:1, beatEnd:2`), it consumes 2 slots, so you need one fewer scene.

```
beat_slots_used = sum of (beatEnd - beatStart + 1) for each scene
beat_slots_used must equal len(beatMarkers)
```

### 3. Duration budget
Sum preferred durations and compare to track duration. See [rules/composition-rules.md](rules/composition-rules.md) for minimum durations per template.

### 4. Template variables
Each scene's `variables` keys must match its template's schema. Required fields must be set. See [rules/templates.md](rules/templates.md).

### 5. Last scene is end-screen
The final scene should use the `end-screen` template with a CTA.

## Saving and Sharing

### Option A: MCP Tools (if available)

If the VanillaSky MCP server is configured, use the tools directly:

- **`list_templates`** — **CALL THIS FIRST** before composing scenes. Returns all available templates with variables, durations, usage tips. Optionally filter by category.
- **`list_tracks`** — get available tracks with metadata
- **`save_config`** — saves config, returns `{ id, url }`
- **`scrape_url`** — scrape a website for brand info: `{ url }` → returns title, description, headlines, images, brandColors, favicon

### Option B: Bash Fallback

If MCP tools are not available, use fetch commands:

**Save config:**
```bash
node -e "
const config = <YOUR_CONFIG_JSON>;
const resp = await fetch('https://vjcfvsooygzrwinscobk.supabase.co/functions/v1/save-config', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2Z2c29veWd6cndpbnNjb2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NTQzMzQsImV4cCI6MjA4ODIzMDMzNH0.9JirSFdP3D1pyn90YNUnqyG_709HZUMAGQ5Us9O57d0'
  },
  body: JSON.stringify({ config })
});
if (!resp.ok) { const err = await resp.json(); console.error('Error:', err.error); process.exit(1); }
const { id } = await resp.json();
console.log('https://vanillasky.ai/create?config=' + id);
"
```

**Scrape a website (for brand research):**
```bash
node -e "
const resp = await fetch('https://vjcfvsooygzrwinscobk.supabase.co/functions/v1/scrape-url', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2Z2c29veWd6cndpbnNjb2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NTQzMzQsImV4cCI6MjA4ODIzMDMzNH0.9JirSFdP3D1pyn90YNUnqyG_709HZUMAGQ5Us9O57d0'
  },
  body: JSON.stringify({ url: 'https://example.com' })
});
const data = await resp.json();
console.log(JSON.stringify({ title: data.title, description: data.description, brandColors: data.brandColors, headlines: data.headlines?.slice(0, 5), images: data.images?.slice(0, 3).map(i => i.src) }, null, 2));
"
```

The save endpoint returns a short link like `https://vanillasky.ai/create?config=a1b2c3d4` that opens the video in VanillaSky's editor, fully loaded and ready to preview.

## Example

**User:** "Create a launch video for a fitness app called FitPulse"

**You:** Ask about the brief — target audience, key features, what makes it special, any brand colors or screenshots.

**User:** "It tracks heart rate, calories, steps, and sleep. 10K+ users. For everyday athletes. Colors are dark blue (#1a1a3e) and electric green (#00ff88). I have an app screenshot I can share."

**You:** This feels like a **Trailer** — cinematic reveal of the app. Pick "HipHop Sequence" (energetic, fitness mood). Propose:

| # | Template | Key variables | Why | Copy |
|---|----------|--------------|-----|------|
| 1 | bg-video | keyword: "fitness workout gym" | Visual hook — real footage grabs attention | texts: "Get moving." |
| 2 | bg-video | keyword: "runner sunrise trail" | Action footage sells the lifestyle | texts: "Push harder." |
| 3 | bg-photo | keyword: "smartwatch close up" | Shows the tech angle | texts: "Track everything." |
| 4 | product-launch | features: "Heart Rate,Calories,Steps,Sleep", deviceType: "phone" | 4 features — device mockup with badges | productName: "FitPulse" |
| 5 | counter | value: 10000, unit: "+" | Impressive scale metric | label: "Active users" |
| 6 | bg-photo | keyword: "healthy meal preparation" | Lifestyle footage, breathing room | texts: "Fuel your body." |
| 7 | bg-video | keyword: "group fitness class energy" | Community energy | texts: "Join thousands." |
| 8 | end-screen | — | CTA + brand | "Start free today." / fitpulse.app |

Brand: dark blue `#1a1a3e` + electric green `#00ff88`. Font: Bebas Neue (bold, energetic). Text effect: `slam`. Background: `slow-zoom-in`.

After confirmation, build the full VideoConfig JSON and save it.
