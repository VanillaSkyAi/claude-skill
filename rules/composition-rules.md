---
name: composition-rules
description: Structured brief workflow, narrative patterns, role-based templates, copy, pacing — the creative brain
---

# Composition Rules

> **Scope:** Brief workflow, narrative patterns, scene planning, templates, copy, pacing. For template variables see [templates.md](templates.md). For effects/fonts see [effects-and-style.md](effects-and-style.md). For audio config see [audio-tracks.md](audio-tracks.md).

## Before Composing — ALWAYS Gather Context

Before picking templates or composing scenes, gather:

1. **Video type** — detect from prompt or ask the user (launch, explainer, ad, social, showcase, event, portfolio)
2. **Content** — scrape URL if provided, or ask for description, features, stats, testimonials
3. **Brand colors** — scrape from URL or ask. Never default to green.
4. **Tone** — detect from prompt (fun, serious, professional, urgent, inspirational, techy)

Use this context to build a structured brief, then compose from it. Content-first composition is the #1 quality improvement — never pick templates before you know what content you have.

---

## Tone Detection

Read the prompt and detect the TONE. This affects everything: colors, copy, templates, music, fonts.

| Tone | Detect from | Colors | Copy style | Avoid |
|------|------------|--------|-----------|-------|
| Fun / celebratory | party, celebration, launch day, birthday, Kingsday, holiday | Bright, saturated (orange, yellow, pink) | Playful, exclamation marks | Muted colors, serious language |
| Serious / somber | war, crisis, memorial, awareness, health | Dark, muted (navy, charcoal) | Measured, factual, respectful | bg-confetti, bg-emoji, playful fonts |
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

Pick ONE pattern that best fits the content. Match it to the content's STRENGTHS — not just the video type.

### Product Launch / Trailer / Brand Story / Event
A. **"The Reveal"** — Tease > Problem > Solution reveal > Features > Proof > CTA
B. **"Product First"** — Product in action > Features > Stats > Social proof > CTA
C. **"The Bold Claim"** — Shocking stat > Quick cuts > Product demo > Testimonials > CTA
D. **"Origin Story"** — Problem/pain > Journey > Product > Impact/results > CTA

### Explainer
A. **"Problem-Solution"** — Pain point > "What if..." > How it works > Features > Proof > CTA
B. **"The Walkthrough"** — Product demo > Step 1 > Step 2 > Step 3 > Results > CTA
C. **"Before & After"** — Old way > Contrast > New way > Benefits > Social proof > CTA
D. **"Question-Answer"** — Provocative question > Answer reveal > How > Proof > CTA

### Promotion / Ad
A. **"Problem-Agitate-Solve"** — Pain > Twist the knife > Solution > Proof > CTA
B. **"Social Proof Stack"** — Testimonial > Product > Stats > More proof > CTA
C. **"Feature Blitz"** — Feature > Feature > Feature > Quick cuts > CTA
D. **"FOMO"** — Limited offer > Product > Value > Countdown > CTA

### Social Media
A. **"Pattern Interrupt"** — Shocking visual > Quick reveal > One key benefit > CTA
B. **"Before-After"** — Old way > New way > Mind blown > CTA
C. **"Hot Take"** — Bold claim > Proof > Product > CTA

### Portfolio Reel / Showreel
A. **"Greatest Hits"** — Best work > Best work > Best work > Stats > Brand close
B. **"Capability Tour"** — Skill 1 > Skill 2 > Skill 3 > Client logos > CTA

### Event Promo
A. **"The Lineup"** — Event name > Speakers/acts > Date/venue > Ticket CTA
B. **"The Countdown"** — Why attend > What to expect > Details > Urgency CTA

### Pattern Selection Guidance

Pick the pattern that matches the content's strengths:
- Strong testimonials → "Social Proof Stack" or "Before & After"
- Clear stats/numbers → "The Bold Claim"
- Clear problem to solve → "Problem-Solution" or "Problem-Agitate-Solve"
- Feature-focused → "Product First" or "Feature Blitz"
- Story-driven → "Origin Story"
- Don't always pick pattern A — vary based on content

---

## Templates by Scene Role

Templates are grouped by their purpose. Pick what fits the scene, not a fixed recipe.

### Hook (scene 1)
intro-cinematic-flash, intro-spotlight, intro-text-slam, intro-countdown, hook-question, hook-stat, bg-video, bg-photo

### Product Demo
showcase-phone, showcase-browser, showcase-tablet, showcase-code, showcase-terminal, all app-* templates

### Feature / Info
infographic-feature-grid, infographic-feature-list, infographic-steps, infographic-problem-solution, infographic-comparison

### Data / Proof
chart-counter (max 1 per video), chart-bar, chart-line, chart-progress-ring, infographic-stat-row, social-milestone

### Social Proof
social-testimonial, social-review-stack, social-tweet, social-chat, social-google-search, social-notification

### CTA (last scene)
cta-split, bg-confetti, bg-particles, bg-glow, bg-emoji, intro-vanilla-sky

### Quick Cuts / Atmosphere
bg-photo, bg-video, bg-solid (CTA only)

**Always call `list_templates` first.** Match templates to scenes based on `whenToUse`, `tags`, and `preferredDuration`. Template IDs above are illustrative — the live list is the source of truth.

---

## The 3-Phase Structure

Every video has three phases:

```
HOOK  →  BODY  →  CLOSE
```

| Phase | What it does | Scenes | Time budget |
|-------|-------------|--------|-------------|
| **HOOK** | Grab attention — first impression decides everything | 1-2 scenes | ~3s (first 3 seconds) |
| **BODY** | Deliver the content — follows the narrative pattern | 2-8 scenes | Scales with duration |
| **CLOSE** | Call to action — what should the viewer do? | 1-2 scenes | 2-3s minimum |

**Universal rules:**
- **First 3 seconds decide everything** — 65% of viewers leave if not hooked. Lead with your strongest visual or most provocative statement. Never a logo. Never "welcome to."
- **End at peak energy** — no wind-down. The CTA is a quick punch, not a cooldown.
- **One message per video** — the most common failure is cramming multiple messages.
- **Sound-off by default** — 85% of social video is watched muted. Every scene MUST have text overlays.

---

## Copy Length by Video Type

| Video type | Words per scene | Style |
|------------|----------------|-------|
| Ad / Social | 1-4 words | Power words. "Ship faster." |
| Launch | 2-5 words | Announce + benefit. "Meet Atlas AI." |
| Explainer | 3-8 words | One concept per scene. "Replaces 5 tools with one." |
| Showcase | 2-4 words | Feature labels. "Real-time sync." |
| Brand story | 4-8 words | Narrative. "We started in a garage." |

Explainer videos need MORE text — each scene explains one concept clearly. Do not sacrifice clarity for brevity.

### Word Budget

| Duration | Words per scene | Total words |
|----------|----------------|-------------|
| 10-15s | 2-5 | 15-25 |
| 15-25s | 3-6 | 25-45 |
| 25-40s | 3-7 | 40-70 |

Fewer words = more recall. "Ship 10x faster." beats "Transform your workflow with our revolutionary platform."

---

## Scene Planning

### Content-driven, not formula-driven

Don't count scenes from a formula. Plan them from what you have:

**Step 1: Build the brief** — gather content, detect type, tone, colors.

**Step 2: Pick the narrative pattern** that fits the content's strengths.

**Step 3: Plan the HOOK** (1-2 scenes)
- Pick from the Hook role group. Vary across sessions — don't always pick the first option.

**Step 4: Plan the BODY** based on the narrative pattern + available content
- Has screenshots → showcase-phone, showcase-tablet
- Has stats/traction → chart-counter (one), chart-bar, chart-progress-ring
- Has features to list → infographic-*, app-* templates
- Has customer quotes → social-testimonial, social-review-stack
- Has nothing → bg-photo with Pexels keywords + text-driven scenes
- **Alternate busy and calm:** follow a complex scene (Tier 1) with a quick visual cut (bg-photo)

**Step 5: Plan the CLOSE** (1-2 scenes)
- Pick from the CTA role group. Vary across sessions.
- Avoid `bg-gradient-linear` — it blends bg + accent and often produces muddy colors
- durationWeight 1.0 minimum — CTA must hold 2-3s
- Use `dip-to-black` transition before the CTA for a dramatic pause

**Step 6: Estimate total duration** from template complexity
- Tier 1 templates (app-*, showcase-*, social-chat): ~4s each
- Tier 2 templates (chart-*, social-tweet, social-review-stack): ~3s each
- Tier 3 templates (bg-photo, bg-video, bg-solid): ~2s each
- CTA: ~2.5-3s

**Step 7: Pick the track**
- Call `list_tracks`, filter by mood match
- Pick the track closest to your estimated duration
- **Vary track selection** — don't default to the same track every time

**Step 8: Set durationWeights**
- Tier 1 templates: `durationWeight: 1.2-1.5`
- Tier 3 quick cuts: `durationWeight: 0.7-0.8`
- CTA: `durationWeight: 1.0` minimum
- **Minimum durationWeight: 0.7** — scenes under 1.5s are poorly recalled
- **Do NOT set startTime/endTime** — the server computes these from weights + beat markers

**Total scenes: 4-12** (clamped). If your plan has more, cut the weakest body scenes.

---

## Template Selection

### Template variety

**The #1 cause of boring videos is over-relying on text-on-background templates.** bg-solid, bg-glow, bg-gradient-linear are palette cleansers — never the main content.

### Content → template mapping

| Content | Don't use | Use instead |
|---------|-----------|-------------|
| App/product features | bg-solid with feature list | showcase-phone or showcase-tablet |
| Price/offer | chart-counter | app-ecommerce with product card |
| Comparison | chart-counter twice | chart-bar with side-by-side bars |
| Customer quotes | bg-gradient with quote text | social-testimonial or social-review-stack |
| Stats dashboard | Multiple chart-counter | app-fitness, app-banking, or app-weather |
| Notifications | bg-solid with text | social-notification with app-style card |

### Showcase templates work without screenshots

Device mockups show professional placeholders when no screenshot is provided. Always include at least one showcase template for app/SaaS videos.

### Brand-reveal templates: use sparingly

intro-* templates are cinematic openers — excellent for launches, trailers, and brand stories. Consider them when the prompt mentions "launch", "introducing", "cinematic", or "trailer".

### Card templates need dark backgrounds

All social-*, app-*, and showcase-* templates render white/light cards. Always use a dark brandKit bg (#0a0a0a to #1a1a2e). Light brand palettes should stick to bg-* and chart templates.

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

- **Max 3 high-energy scenes before a breather** — use a bg-photo/bg-video quick cut
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
| 5 bg-solid scenes in a row | Slideshow, no visual interest | Mix bg-photo, showcase, chart templates |
| crossfade on every transition | Amateur "iMovie default" | 80% hard cuts, crossfade for continuity only |
| slam effect on every text | Reads as dated | zoom-through for impact, fade-in default |
| "Welcome to our company" as scene 1 | Zero hook value | Problem statement or product in action |
| 12 words per scene | Unreadable at 2-3s | 3-7 words max |
| CTA holds for 0.8s | Can't read or act | CTA holds 2-3 seconds minimum |
| Same background effect on all photos | Monotone slideshow | Alternate zoom-in, ken-burns, drift |
| Every scene same durationWeight | No rhythm | Vary: Tier 1 gets 1.3, quick cuts get 0.7 |
| Track picked before scene plan | Duration mismatch | Plan scenes first, pick track to fit |
| Picking templates before gathering content | Generic results | ALWAYS gather content first, then compose |

---

## Scene Plan Format

Present the plan as a table before building the config:

| # | Phase | Weight | Template | Content |
|---|-------|--------|----------|---------|
| 1 | hook | 1.0 | bg-video | "Ship faster." — product in action |
| 2 | body | 1.0 | bg-photo | Problem: "Deploys take hours." |
| 3 | body | 1.3 | showcase-phone | App screenshot — the product |
| 4 | body | 1.2 | app-fitness | Live dashboard stats |
| 5 | body | 1.0 | chart-counter | "10K users" — traction proof |
| 6 | body | 0.7 | bg-photo | Quick visual cut — breathing room |
| 7 | body | 1.0 | social-review-stack | Customer reviews |
| 8 | close | 1.0 | bg-glow | "Try it free → app.com" |

> Template IDs are illustrative — always call `list_templates` for the current list.
