---
name: vanillasky
description: Create cinematic beat-synced trailer videos from natural language descriptions using VanillaSky
---

# VanillaSky — Create Cinematic Trailer Videos

Create professional beat-synced trailer videos by describing what you want. You compose the scenes, save the config, and return a link that opens the video in VanillaSky's editor — ready to preview, tweak, and export.

**Example prompts:**
- "Create a product launch video for my fitness app FitPulse"
- "Make a cinematic trailer for a coffee brand called Ritual Roasters"
- "Build a startup pitch video — we're an AI writing tool with 10K users"

## Workflow

1. **Understand the brief** — ask about the product/brand, target audience, key message, tone, and any specific visuals they have in mind
2. **Pick a music track** — choose from the catalog based on mood
3. **Propose a scene plan** — present a table showing each scene's asset type, content, transition, and *why* that type fits. Be transparent about trade-offs.
4. **User confirms or tweaks** the plan
5. **Build the VideoConfig** — compose the full JSON synced to the track's beat markers
6. **Save and share** — call the save-config API and return the editor link

## Scene Planning

There are no "modes." Every video is 6-10 scenes composed from whatever asset types best serve the content.

**Asset types to choose from:**
- **pexels-video** — the default. Real footage is engaging and easy to swap in the editor.
- **gradient** — branded moments (logo, tagline, text-heavy). Simple and effective.
- **counter** — a single impressive statistic. Built-in, polished.
- **coded animation** — built-in React-based animations for content stock footage can't show well (feature lists, comparisons, stats dashboards). More impactful when justified, but harder to edit.

**When proposing the plan, be transparent:**
- Explain *why* each scene uses its asset type
- If suggesting a coded animation, say what it would show and why stock footage wouldn't work as well
- Not every video needs custom animations — pexels-video + a gradient + a counter makes plenty of great videos

**Scene plan format:**

| Scene | Beat | Asset | Why this type | Copy |
|-------|------|-------|---------------|------|
| 1 | 0-0 | pexels-video "fitness workout gym" | Strong visual hook | "Get moving." |
| 2 | 1-1 | pexels-video "runner sunrise trail" | Action footage sells the lifestyle | "Push harder." |
| ... | ... | ... | ... | ... |

## Rule Files

Read these for detailed creative and technical patterns:

- [rules/composition-rules.md](rules/composition-rules.md) — Narrative arc, asset mix, pacing, transitions, overlays
- [rules/animation-timing.md](rules/animation-timing.md) — Timing concepts: staggered reveals, beat-synced effects, easing

## Available Tracks

Pick the track that best matches the requested video mood.

```json
[
  {
    "id": "7995f8e2-cd04-4cd0-b498-6672c5b34529",
    "name": "Shadow Countdown",
    "mood": ["Epic", "Cinematic", "Thriller"],
    "duration": 27.6,
    "beatMarkers": [1.2, 4.7, 8.1, 16.6, 18.7, 20.4, 21.9, 24.9]
  },
  {
    "id": "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
    "name": "HipHop Sequence",
    "mood": ["Hiphop", "Beat"],
    "duration": 27.4,
    "beatMarkers": [4.2, 7.6, 10.2, 12.7, 15.1, 17.4, 19.2, 22.8]
  },
  {
    "id": "645b3256-5416-48cf-8f9d-39a2dbd9e167",
    "name": "Momentum Theme",
    "mood": ["Energetic", "Rhythmic", "Bold"],
    "duration": 37.4,
    "beatMarkers": [2, 5.6, 11.7, 14.6, 20, 22.7, 26.5, 30]
  },
  {
    "id": "d899f250-3371-4e0e-a1b4-93bd868b07bc",
    "name": "Shadows at the Gate",
    "mood": ["Thriller", "Cinematic"],
    "duration": 31.4,
    "beatMarkers": [0.2, 3.8, 7.3, 10, 18.2, 20.3, 24.1, 29.1]
  },
  {
    "id": "8e83c405-08cb-45fd-b119-604ce81dfccd",
    "name": "Pulse in the Dark",
    "mood": ["Trailer", "Thriller"],
    "duration": 25,
    "beatMarkers": [3.7, 7.1, 9.9, 12.7, 15, 17.4, 19, 20.9]
  }
]
```

## VideoConfig Schema

Build a complete config following this structure. All fields shown — omit optional ones if not needed.

```json
{
  "audio": {
    "trackId": "from track catalog",
    "audioUrl": "",
    "duration": 27.4,
    "beatDetection": { "sensitivity": 0.5 },
    "beatMarkers": [{ "time": 4.2 }, { "time": 7.6 }, { "time": 10.2 }]
  },
  "scenes": [
    {
      "id": "s1",
      "asset": { "see Asset Types below" },
      "copy": { "text": "Your tagline.", "textEffect": "fade-in" },
      "timing": {
        "beatStart": 0,
        "beatEnd": 0,
        "durationWeight": 1.0
      },
      "transition": "crossfade",
      "backgroundAnimation": "slow-zoom-in",
      "overlays": [{ "type": "vignette", "intensity": 0.5 }]
    }
  ],
  "style": {
    "font": "Inter",
    "defaultTextEffect": "fade-in",
    "defaultTransition": "crossfade",
    "defaultBackgroundAnimation": "slow-zoom-in",
    "brandKit": { "bg": "#1a1a2e", "accent": "#e94560" }
  },
  "endScreen": {
    "enabled": true,
    "ctaText": "Learn more",
    "backgroundColor": "#1a1a2e",
    "duration": 3
  },
  "meta": {
    "name": "My Video",
    "prompt": "the user's original request",
    "mood": ["Energetic"]
  }
}
```

**Key rules:**
- `audio.beatMarkers` — wrap each time value from the track catalog in `{ "time": value }`
- `audio.audioUrl` — leave empty, the editor loads it from the track database
- `scenes[].id` — use "s1", "s2", etc.
- `timing.beatStart` / `beatEnd` — 0-based beat indices into the beatMarkers array
- `timing.durationWeight` — 1.0 = normal, 1.3-1.5 = longer (use for animations that need time)
- `copy` — set to `{}` for coded-animation scenes (they render their own content)

## Asset Types

### Pexels Video (default for most scenes)
```json
{ "type": "pexels-video", "url": "", "keyword": "city skyline sunset" }
```
Leave `url` empty — the editor auto-fills from Pexels using the keyword. Write descriptive keywords (2-4 words) that find great stock footage.

**Default to pexels-video, not pexels-image.** Video footage is almost always more engaging. Only use pexels-image when a still genuinely works better (portrait, product shot, ken-burns landscape). Max 1 pexels-image per video.

### Pexels Image
```json
{ "type": "pexels-image", "url": "", "keyword": "portrait woman smiling" }
```

### Gradient (for branded/text-focused scenes)
```json
{
  "type": "gradient",
  "gradientConfig": {
    "colors": ["#1a1a2e", "#e94560"],
    "style": "blobs",
    "animationSpeed": 0.5
  }
}
```
Styles: `"solid"` | `"blobs"` | `"waves"` | `"circles"` | `"blob-scene"` | `"layered-waves"` | `"stacked-waves"` | `"blob-scatter"` | `"radial-gradient"` | `"mesh-gradient"`

### Built-in Coded Animations (16 types)

All support an optional `bgColor` field. Set `copy: {}` for these scenes.

**Counter** — single statistic counting up
```json
{ "type": "coded-animation", "animationId": "counter", "inputs": { "value": 42, "label": "growth rate", "unit": "%" } }
```

**Bar Chart** — horizontal bars growing, staggered
```json
{ "type": "coded-animation", "animationId": "bar-chart", "inputs": { "title": "Revenue by Quarter", "bars": "Q1:45,Q2:72,Q3:89,Q4:120", "unit": "k" } }
```

**Progress Ring** — circular progress percentage
```json
{ "type": "coded-animation", "animationId": "progress-ring", "inputs": { "value": 87, "label": "Completion rate" } }
```

**List Reveal** — items appearing one by one
```json
{ "type": "coded-animation", "animationId": "list-reveal", "inputs": { "title": "Key Features", "items": "Fast setup,Easy to use,Free forever", "style": "check" } }
```
Styles: `"check"`, `"bullet"`, `"number"`. Max 6 items.

**Quote Card** — stylized quote with attribution
```json
{ "type": "coded-animation", "animationId": "quote-card", "inputs": { "quote": "The best way to predict the future is to create it.", "author": "Peter Drucker" } }
```

**Comparison** — side-by-side before/after
```json
{ "type": "coded-animation", "animationId": "comparison", "inputs": { "leftLabel": "Before", "leftValue": "2 hours", "rightLabel": "After", "rightValue": "5 minutes", "title": "Setup time" } }
```

**Stats Dashboard** — multiple metrics in a grid
```json
{ "type": "coded-animation", "animationId": "stats-dashboard", "inputs": { "metrics": "10K:Active Users,99.9%:Uptime,50ms:Latency,4.9:Rating", "title": "Platform Metrics" } }
```

**Feature Grid** — 2x2 feature showcase
```json
{ "type": "coded-animation", "animationId": "feature-grid", "inputs": { "features": "Fast:Lightning quick setup,Easy:No code required,Free:Start at $0,Secure:Enterprise grade", "title": "Why Choose Us" } }
```

**Text Stack** — kinetic typography word reveal
```json
{ "type": "coded-animation", "animationId": "text-stack", "inputs": { "words": "Build,Ship,Scale,Repeat", "style": "stack" } }
```
Styles: `"stack"`, `"replace"`, `"cascade"`. Max 8 words.

**Social Card** — social media testimonial
```json
{ "type": "coded-animation", "animationId": "social-card", "inputs": { "name": "Sarah Chen", "handle": "@sarahchen", "message": "This product changed everything for our team." } }
```

**Announcement Banner** — bold announcement with impact
```json
{ "type": "coded-animation", "animationId": "announcement-banner", "inputs": { "headline": "NOW AVAILABLE", "subtext": "The future of video creation" } }
```

**Metric Highlight** — single hero metric with flair
```json
{ "type": "coded-animation", "animationId": "metric-highlight", "inputs": { "value": 247, "label": "Revenue Growth", "unit": "%", "trend": "up" } }
```
Trend: `"up"`, `"down"`, `"neutral"`.

**Testimonial Card** — frosted glass testimonial
```json
{ "type": "coded-animation", "animationId": "testimonial-card", "inputs": { "quote": "This transformed how our team ships products.", "name": "Alex Rivera", "title": "CEO of Acme" } }
```

**Chat Messages** — iMessage-style conversation
```json
{ "type": "coded-animation", "animationId": "chat-messages", "inputs": { "messages": "L:Hey have you tried this?,R:Yes it's amazing!,L:Right? Game changer.,R:Totally worth it." } }
```
`L` = left/other person, `R` = right/user.

**Tweet Card** — realistic tweet
```json
{ "type": "coded-animation", "animationId": "tweet-card", "inputs": { "name": "VanillaSky", "handle": "@vanillasky", "tweet": "Just shipped the biggest update yet.", "verified": "true" } }
```

**Notification** — push notification banner
```json
{ "type": "coded-animation", "animationId": "notification", "inputs": { "app": "VanillaSky", "title": "New feature available", "message": "Cinematic trailers just got easier. Tap to explore." } }
```

All 16 animations are React components internally. The config format is unchanged: use `animationId` + `inputs`. The `inputSchema` on each animation type is used by the editor UI for input controls.

## Text Effects

Pick effects that match the mood. Use max 2-3 distinct effects per video.

- **Calm/elegant:** `"fade-in"`, `"blur-in"`, `"typewriter"`, `"slide-up"`
- **Energetic:** `"slam"`, `"bounce-drop"`, `"scale-pop"`, `"flash-in"`, `"stomp-up"`
- **Edgy/tech:** `"glitch"`, `"scramble"`, `"neon-flicker"`, `"zoom-through"`
- **Dramatic:** `"fade-in"`, `"blur-in"`, `"expand"`, `"tracking-expand"`

## Transitions

Use 2-3 types max per video. `crossfade` is the workhorse (~70%).

| Transition | When to use |
|------------|-------------|
| `crossfade` | Default — between most scenes |
| `dip-to-black` | Dramatic pause, structural break |
| `flash` | High-energy beat drops |
| `zoom-in` / `zoom-out` | Moving into/revealing detail |
| `blur-dissolve` | Dream-like, emotional |
| `slide-left` / `slide-right` | Sequential progression |

## Overlays

Max 2 per scene. Keep intensity subtle.

| Overlay | Intensity | Notes |
|---------|-----------|-------|
| `vignette` | 0.4-0.6 | Use on most media scenes |
| `film-grain` | 0.15-0.25 | Cinematic texture, 2-3 scenes max |
| `letterbox` | 0.5 | All scenes or none |
| `light-leak` | 0.3-0.5 | Once for emotional peak |
| `rgb-split` | 0.3 | Tech/edgy, max 1 scene |
| `bokeh` | 0.3 | Dreamy, gradient/slow scenes |

## Background Animations

Pick one primary animation and stick with it. Deviate only for contrast.

- `slow-zoom-in` — default, works everywhere
- `slow-zoom-out` — alternate with zoom-in
- `ken-burns` — best on images (adds movement to stills)
- `drift` — calm, introspective
- `pulse` / `beat-zoom` — high energy, max 1-2 scenes

## Saving and Sharing

After building the VideoConfig, save it and return the editor link:

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
console.log('https://vanillasky.app/create?config=' + id);
"
```

This returns a short link like `https://vanillasky.app/create?config=a1b2c3d4` that opens the video in VanillaSky's editor, fully loaded and ready to preview.

## Searching for Stock Media

To find specific Pexels videos or images before building the config:

```bash
node -e "
const resp = await fetch('https://vjcfvsooygzrwinscobk.supabase.co/functions/v1/search-pexels', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqY2Z2c29veWd6cndpbnNjb2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NTQzMzQsImV4cCI6MjA4ODIzMDMzNH0.9JirSFdP3D1pyn90YNUnqyG_709HZUMAGQ5Us9O57d0'
  },
  body: JSON.stringify({ query: 'coffee shop ambiance', type: 'video', per_page: 5 })
});
const data = await resp.json();
console.log(JSON.stringify(data.results?.map(r => ({ id: r.id, src: r.src })), null, 2));
"
```

Usually you don't need to pre-search — leaving `url` empty with a good keyword is enough. The editor resolves Pexels URLs automatically. Pre-search is useful when you want to verify a specific keyword returns good results.

## Example

**User:** "Create a launch video for a fitness app called FitPulse"

**You:** Ask about the brief — target audience, key features, what makes it special.

**User:** "It tracks heart rate, calories, steps, and sleep. 10K+ users already. Aimed at everyday athletes."

**You:** Pick "HipHop Sequence" (energetic mood matches fitness). Propose:

| Scene | Beat | Asset | Why this type | Copy |
|-------|------|-------|---------------|------|
| 1 | 0-0 | pexels-video "fitness workout gym" | Strong visual hook — real footage grabs attention | "Get moving." |
| 2 | 1-1 | pexels-video "runner sunrise trail" | Action footage sells the lifestyle | "Push harder." |
| 3 | 2-2 | pexels-video "smartwatch close up" | Shows the tech angle | "Track everything." |
| 4 | 3-3 | list-reveal (Heart Rate, Calories, Steps, Sleep) | 4 features to showcase — staggered reveal works better than text overlay | *(rendered by animation)* |
| 5 | 4-4 | pexels-video "healthy meal preparation" | Lifestyle footage, breathing room | "Fuel your body." |
| 6 | 5-5 | gradient (blobs, brand colors) | Brand moment — name, clean and bold | "FitPulse." |
| 7 | 6-6 | pexels-video "group fitness class energy" | Community energy | "Join thousands." |
| 8 | 7-7 | pexels-video "person celebrating achievement" | CTA needs emotional footage | "Start free today." |

After confirmation, build the full VideoConfig and save it.
