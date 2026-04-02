---
name: composition-rules
description: Recipe types, scene composition, template selection, copy, pacing — the creative brain
---

# Composition Rules

> **Scope:** Recipe types, scene planning, template selection, copy, pacing. For template variables see [templates.md](templates.md). For effects/fonts see [effects-and-style.md](effects-and-style.md). For audio config see [audio-tracks.md](audio-tracks.md).

## Before Composing — ALWAYS Gather Context

Before picking templates or composing scenes, gather:

1. **Content** — scrape URL if provided, or ask for description, features, stats, testimonials
2. **Brand colors** — scrape from URL or ask. Never default to green.
3. **Tone** — detect from prompt (fun, serious, professional, urgent, inspirational, techy)
4. **Recipe type** — detect from content (see below)

Use this context to build a structured brief, then compose from it. Content-first composition is the #1 quality improvement — never pick templates before you know what content you have.

---

## Recipe Types (replaces video types)

Every video uses one of 3 recipe types. Each recipe type filters which templates the AI can use — this is what enforces quality (not rules or instructions).

| Recipe | When to use | Composition strategy |
|--------|------------|---------------------|
| **promo** | Announcements, milestones, events, hot takes, hiring, celebrations | Lead with boldest claim or biggest number. Fast energy. 2-4 words per scene. |
| **informational** | Blog recaps, how-tos, case studies, testimonials, comparisons | Lead with question or surprising stat. Problem → explanation → proof. More photo breathers. |
| **product** | Feature launches, changelogs, product pages, app demos | Lead with product name. MUST include 1+ showcase template. Show product first, then features, then proof. |

**Detection cues:**
- "launch", "shipped", "announcing" → product (if about a feature) or promo (if about a milestone)
- "how to", "guide", "explains", "case study" → informational
- "ad", "sale", "limited", "event", "hiring" → promo
- "demo", "feature", "changelog", "product page" → product
- If ambiguous, default to **promo** — it's the most versatile

---

## Tone Detection

Read the prompt and detect the TONE. This affects everything: colors, copy, templates, music, fonts.

| Tone | Detect from | Colors | Copy style | Avoid |
|------|------------|--------|-----------|-------|
| Fun / celebratory | party, celebration, launch day, birthday, Kingsday, holiday | Bright, saturated (orange, yellow, pink) | Playful, exclamation marks | Muted colors, serious language |
| Serious / somber | war, crisis, memorial, awareness, health | Dark, muted (navy, charcoal) | Measured, factual, respectful | confetti, emojiBurst, playful fonts |
| Professional | enterprise, B2B, corporate, finance | Clean, restrained (navy, white) | Concise, authoritative | Slang, emojis |
| Urgent / FOMO | sale, limited, ending soon, deadline | High contrast (red+black, yellow+black) | Short, punchy, countdown | Calm music, slow pacing |
| Inspirational | dream, journey, mission, impact | Warm, golden (amber, coral) | Aspirational, emotional | Cold/clinical templates |
| Techy / dev | API, code, deploy, developer, open source | Dark bg, neon accent (green, cyan) | Technical, precise | Rounded/playful fonts |

### Context-Aware Colors (no brand kit / no URL)

When no colors are provided and no URL to scrape, INFER from context:

**Cultural events:** Kingsday = orange + white. Christmas = red + gold. Halloween = orange + black. Valentine's = pink + red.

**Industry:** Finance = navy + gold. Healthcare = blue + white. Food = warm red or green. Tech = dark + neon.

**Mood:** Fun = bright saturated. Serious = dark muted. Tech = dark bg + neon accent.

Do NOT default to #0a0a1a for everything — match the topic.

---

## Narrative Patterns

Pick ONE pattern that best fits the content. Match it to the content's STRENGTHS — not just the recipe type.

### Promo
A. **"The Bold Claim"** — Shocking stat > Quick cuts > Product demo > Testimonials > CTA
B. **"Social Proof Stack"** — Testimonial > Product > Stats > More proof > CTA
C. **"Feature Blitz"** — Feature > Feature > Feature > Quick cuts > CTA
D. **"FOMO"** — Limited offer > Product > Value > Countdown > CTA

### Informational
A. **"Problem-Solution"** — Pain point > "What if..." > How it works > Features > Proof > CTA
B. **"The Walkthrough"** — Product demo > Step 1 > Step 2 > Step 3 > Results > CTA
C. **"Before & After"** — Old way > Contrast > New way > Benefits > Social proof > CTA
D. **"Question-Answer"** — Provocative question > Answer reveal > How > Proof > CTA

### Product
A. **"The Reveal"** — Tease > Problem > Solution reveal > Features > Proof > CTA
B. **"Product First"** — Product in action > Features > Stats > Social proof > CTA
C. **"Origin Story"** — Problem/pain > Journey > Product > Impact/results > CTA

### Pattern Selection Guidance

Pick the pattern that matches the content's strengths:
- Strong testimonials → "Social Proof Stack" or "Before & After"
- Clear stats/numbers → "The Bold Claim"
- Clear problem to solve → "Problem-Solution"
- Feature-focused → "Product First" or "Feature Blitz"
- Story-driven → "Origin Story"
- Don't always pick pattern A — vary based on content

---

## Templates by Recipe Type

Templates are filtered by recipe type. Each template is tagged with which types it belongs to. The AI can only pick from templates tagged for the chosen type.

**Always call `list_templates` first.** Template IDs use camelCase (e.g., `phoneMockup`, `cinematicFlash`, `bigNumber`). Never use dashed IDs — they don't exist.

### Hook templates (scene 1)
- **promo**: vanillaSky, countdown, textSlam, numberHook, photo, video
- **informational**: questionHook, numberHook, photo, video
- **product**: cinematicFlash, spotlight, textSlam, photo, video

### Body templates (scenes 2 to N-1)
- **promo**: solidColor, photo, video, gradient, glow, confetti, emojiBurst, bigNumber, tweet, notification, milestone, emojiRain, tripleStats, emojiGrid, cardList
- **informational**: solidColor, photo, video, barChart, lineChart, progressRing, pieChart, tweet, chatBubbles, googleSearch, whatsappChat, reviewStack, testimonial, emojiGrid, tripleStats, comparison, problemSolution, cardList, steps, questionHook
- **product**: solidColor, photo, video, glow, particles, bigNumber, phoneMockup, triplePhone, tabletMockup, tabletSlides, browserMockup, browserSlides, codeEditor, terminal, googleSearch, all app templates (appGrid, bankingApp, fitnessApp, etc.), emojiGrid, cardList, steps

### Closer templates (last scene)
- **All types**: ctaSplit (always use ctaSplit as the closer)

---

## The 3-Phase Structure

Every video has three phases:

```
HOOK  →  BODY  →  CLOSE
```

| Phase | What it does | Scenes | Time budget |
|-------|-------------|--------|-------------|
| **HOOK** | Grab attention — first impression decides everything | 1 scene | ~2-3s |
| **BODY** | Deliver the content — follows the narrative pattern | 4-8 scenes | Scales with duration |
| **CLOSE** | Call to action — what should the viewer do? | 1 scene (ctaSplit) | 2-3s |

**Universal rules:**
- **First 3 seconds decide everything** — 65% of viewers leave if not hooked. Lead with your strongest visual or most provocative statement. Never a logo. Never "welcome to."
- **End at peak energy** — no wind-down. The CTA is a quick punch, not a cooldown.
- **One message per video** — the most common failure is cramming multiple messages.
- **Sound-off by default** — 85% of social video is watched muted. Every scene MUST have text overlays.
- **Aim for 7-8 scenes.** Minimum 6, maximum 10.
- **Include at least 1 photo or video scene** for visual rhythm in the body.

---

## Copy Length

| Context | Words per scene | Style |
|---------|----------------|-------|
| Hook scenes | 2-5 words | Power words. "Ship faster." "Dark mode is here." |
| Body scenes | 3-7 words | One concept per scene. "Replaces 5 tools with one." |
| CTA | 3-6 words | Product name + action. "Try FitPulse free." |

**Fewer words = more recall.** "Ship 10x faster." beats "Transform your workflow with our revolutionary platform."

### Word Budget

| Duration | Words per scene | Total words |
|----------|----------------|-------------|
| 10-15s | 2-5 | 15-25 |
| 15-25s | 3-6 | 25-45 |
| 25-40s | 3-7 | 40-70 |

---

## Scene Planning

### Content-driven, not formula-driven

Don't count scenes from a formula. Plan them from what you have:

**Step 1: Build the brief** — gather content, detect recipe type, tone, colors.

**Step 2: Pick the narrative pattern** that fits the content's strengths.

**Step 3: Plan the HOOK** (1 scene)
- Pick from the Hook templates for your recipe type.

**Step 4: Plan the BODY** based on the narrative pattern + available content
- Has screenshots → phoneMockup, tabletMockup, browserMockup
- Has stats/traction → bigNumber (max 1), barChart, progressRing, tripleStats
- Has features to list → emojiGrid, cardList, steps
- Has customer quotes → testimonial, reviewStack
- Has nothing → photo with Pexels keywords + text-driven scenes
- **Alternate busy and calm:** follow a complex scene with a photo quick cut for breathing room

**Step 5: Plan the CLOSE** (1 scene)
- Always use ctaSplit
- Use `dip-to-black` transition before the CTA for a dramatic pause

**Step 6: Estimate total duration** from template complexity
- Showcase templates (phoneMockup, browserMockup, etc.): ~4s each → durationWeight 1.2-1.5
- Infographic/chart/social templates: ~3s each → durationWeight 0.8-1.0
- photo/video quick cuts: ~2s each → durationWeight 0.4-0.5
- Hook templates: ~2-3s → durationWeight 0.7-0.8
- CTA (ctaSplit): ~2-3s → durationWeight 0.8-1.0

**Step 7: Pick the track**
- Call `list_tracks`, match by mood_tags (energy, mood, movement)
- Pick the track closest to your estimated duration
- **Vary track selection** — don't default to the same track every time

**Step 8: Set durationWeights**
- **Minimum durationWeight: 0.4** — scenes under 1.5s are poorly recalled
- **Do NOT set startTime/endTime** — the server computes these from weights + beat markers

**Total scenes: 6-10** (aim for 7-8). If your plan has more, cut the weakest body scenes.

---

## Template Selection

### Template variety

**The #1 cause of boring videos is over-relying on text-on-background templates.** solidColor, glow, gradient are palette cleansers — never the main content.

### Content → template mapping

| Content | Don't use | Use instead |
|---------|-----------|-------------|
| App/product features | solidColor with feature list | phoneMockup or tabletMockup |
| Price/offer | bigNumber | ecommerceApp with product card |
| Comparison | bigNumber twice | barChart or comparison |
| Customer quotes | gradient with quote text | testimonial or reviewStack |
| Stats dashboard | Multiple bigNumber | fitnessApp, bankingApp, or weatherApp |
| Notifications | solidColor with text | notification with app-style card |

### Showcase templates work without screenshots

Device mockups show professional placeholders when no screenshot is provided. Always include at least one showcase template for product-type videos.

### Brand-reveal templates: use sparingly

cinematicFlash, spotlight, vanillaSky, textSlam, countdown are cinematic openers — excellent for launches, trailers, and brand stories.

### Card templates need dark backgrounds

All social, app, and showcase templates render white/light cards. Always use a dark brandKit bg (#0a0a0a to #1a1a2e). Light brand palettes should stick to background and chart templates.

---

## Scene Flow & Effects

- **Alternate visual intensity** — follow a busy scene with a calmer one

### Text effects — set them, don't skip them

**Always set `defaultTextEffect`** based on the tone:
- Calm / elegant → `fade-in` or `slide-up`
- Energetic / bold → `zoom-through` or `bounce-drop`
- Tech / edgy → `cut-in` or `typewriter`
- Cinematic → `fade-in` or `word-stagger`

Override per-scene for contrast — e.g., use `zoom-through` on the climax scene while keeping `fade-in` as default.

- **Max 3 high-energy scenes before a breather** — use a photo/video quick cut
- **Match cuts** — when adjacent scenes share a visual element, use crossfade

### Background effects on photos

**Always set defaultBackgroundEffect** — never leave it empty. slow-zoom-in is a safe default. Static photos look lifeless.

**Alternate camera movement** on consecutive photo scenes:

| Scene | Effect |
|-------|--------|
| Photo 1 | slow-zoom-in |
| Photo 2 | ken-burns |
| Photo 3 | slow-zoom-out |
| Photo 4 | drift |

Never use the same effect on adjacent photos.

### Pexels keyword strategy

Write descriptive, visual keywords (2-4 words). Think cinematically.

| Shot type | When | Example keywords |
|-----------|------|------------------|
| Wide/establishing | Hook, context | "aerial city night", "drone ocean sunset" |
| Medium | Subject in context | "woman working laptop cafe" |
| Close-up | Detail, product | "hands typing keyboard", "coffee cup steam" |
| Action | Energy | "runner trail morning" |

**Bad keywords:** "business", "technology", "success" — too vague.

---

## Pacing & Timing

Beats (30-60+ per track, detected by Essentia.js) are natural cut points. The server picks which beats to use as scene boundaries based on durationWeight values and a pacing curve.

- You control relative timing with durationWeight — the server handles the rest
- The pacing curve makes later scenes progressively shorter
- All transitions snap to beat boundaries automatically
- **Not every beat needs a cut** — cut on downbeats for scene changes, use minor beats for text pops and effects

### Text effect variety

Set a calm defaultTextEffect (e.g., fade-in), override on 2-3 key moments:

| Moment | Override with |
|--------|-------------|
| Hook text | zoom-through or bounce-drop |
| Big stat | zoom-through |
| Beat drop | flash or cut-in |
| Calm scene | Keep fade-in default |

**Avoid slam except for sports/fitness.** Prefer zoom-through.

### Transition variety

| Moment | Transition |
|--------|-----------|
| Default (~80%) | cut — hard cuts are the professional standard |
| Visual continuity (~15%) | crossfade — only when scenes share a visual element |
| Before CTA | dip-to-black — dramatic pause |
| Beat drop | flash — white flash sync |
| Sequential steps | slide-left — directional flow |

---

## Common Mistakes

| BAD | WHY | GOOD |
|-----|-----|------|
| 5 solidColor scenes in a row | Slideshow, no visual interest | Mix photo, showcase, chart templates |
| crossfade on every transition | Amateur "iMovie default" | 80% hard cuts, crossfade for continuity only |
| slam effect on every text | Reads as dated | zoom-through for impact, fade-in default |
| "Welcome to our company" as scene 1 | Zero hook value | Problem statement or product in action |
| 12 words per scene | Unreadable at 2-3s | 3-7 words max |
| CTA holds for 0.8s | Can't read or act | CTA holds 2-3 seconds minimum |
| Same background effect on all photos | Monotone slideshow | Alternate zoom-in, ken-burns, drift |
| Every scene same durationWeight | No rhythm | Vary: showcase gets 1.3, quick cuts get 0.5 |
| Track picked before scene plan | Duration mismatch | Plan scenes first, pick track to fit |
| Picking templates before gathering content | Generic results | ALWAYS gather content first, then compose |
| Using dashed template IDs | They don't exist | Use camelCase: phoneMockup, not showcase-phone |

---

## Scene Plan Format

Present the plan as a table before building the config:

| # | Phase | Weight | Template | Content |
|---|-------|--------|----------|---------|
| 1 | hook | 0.8 | textSlam | "Ship faster." — bold opener |
| 2 | body | 0.5 | photo | Problem: "Deploys take hours." |
| 3 | body | 1.3 | phoneMockup | App screenshot — the product |
| 4 | body | 1.0 | fitnessApp | Live dashboard stats |
| 5 | body | 0.9 | bigNumber | "10K users" — traction proof |
| 6 | body | 0.5 | photo | Quick visual cut — breathing room |
| 7 | body | 1.0 | reviewStack | Customer reviews |
| 8 | close | 0.9 | ctaSplit | "Try it free → app.com" |

> Template IDs are illustrative — always call `list_templates` for the current list.
