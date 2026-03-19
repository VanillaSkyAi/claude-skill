---
name: templates
description: All 18 scene templates — variable schemas, duration hints, usage guidelines
metadata:
  tags: templates, scenes, variables, schema
---

# Scene Templates

18 built-in templates in two categories: **background** (bg-*) and **content**. Each scene in a video references one template by `templateId` and passes `variables`.

## Quick Reference

| ID | Label | Category | Duration | Global Effects |
|----|-------|----------|----------|----------------|
| `bg-solid` | Solid Color | background | 1.5–3s | text, transition, bg |
| `bg-photo` | Photo Background | background | 1.5–3s | text, transition, bg |
| `bg-video` | Video Background | background | 1.5–3s | text, transition, bg |
| `bg-gradient-linear` | Linear Gradient | background | 1.5–2.5s | text, transition, bg |
| `bg-gradient-radial` | Radial Gradient | background | 1.5–2.5s | text, transition, bg |
| `bg-confetti` | Confetti | background | 1.5–2.5s | text, transition, bg |
| `bg-stars` | Starfield | background | 1.5–2.5s | text, transition, bg |
| `bg-particles` | Particles | background | 1.5–2.5s | text, transition, bg |
| `bg-geometric` | Geometric Grid | background | 1.5–2.5s | text, transition, bg |
| `bg-aurora` | Aurora | background | 1.5–2.5s | text, transition, bg |
| `counter` | Counter | data-viz | 2–3s | transition only |
| `social-proof` | Social Proof | social-proof | 2.5–3.5s | transition only |
| `product-launch` | Product Launch | product | 3–4s | transition only |
| `end-screen` | End Screen | utility | 2–3s | transition only |
| `stat-grid` | Stat Grid | data-viz | 2.5–3.5s | transition only |
| `feature-list` | Feature List | typography | 2–3s | transition only |
| `text-stack` | Text Stack | typography | 2–3s | transition only |
| `split-compare` | Split Compare | media | 2.5–3.5s | transition only |

---

## The `texts` Variable (All bg-* Templates)

All background templates share the `texts` variable format:

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
- Single text: `"Get moving."` — one entry, displayed big (hero size)
- Two texts: `"Get moving.,Push harder."` — two sequential entries (headline size)
- With effects: `"Get moving.|slam,Push harder.|zoom-in"` — per-entry effects
- Three texts: `"Built.,Tested.,Shipped."` — three entries, slightly smaller

The text transitions happen within one scene — the background stays continuous. This lets you build dramatic sequences (reveal, build, payoff) without cutting the visual.

---

## bg-solid

Solid color background with accent glow and centered text overlay. Clean, minimal, brand-focused. Uses the brand kit's `bg` color as the background and `accent` for the glow effect.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Brand statements, title cards, chapter breaks, thesis statements. The simplest bg template — when you want text with no visual distractions. Max 2 per video.
- **Copy tip:** 1–15 words per entry. Great for thesis statements: `"Every cup tells a story."` or punchy hooks: `"Built different."`

---

## bg-photo

Photo background with Ken Burns effect and centered text overlay. The most versatile background template — real photography sets mood and context while text delivers the message.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your headline here." | Comma-separated text entries (see format above) |
| `mediaUrl` | media | no | — | Photo URL for background |
| `mediaKeyword` | string | no | "" | Pexels search keyword (editor auto-fills mediaUrl on load) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 3s
- **Global effects:** text effect, transition, background effect
- **When to use:** Lifestyle shots, mood setting, product-in-context, establishing shots. Photo backgrounds feel premium and editorial.
- **Copy tip:** 1–5 words per entry, power verbs, end with period. `"Get moving."` / `"Ship faster."`

---

## bg-video

Video background with zoom effect and centered text overlay. Real footage grabs attention — this is the hook template. Use for action shots, lifestyle footage, and any scene where motion sells the message.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your headline here." | Comma-separated text entries (see format above) |
| `mediaUrl` | media | no | — | Video URL for background |
| `mediaKeyword` | string | no | "" | Pexels search keyword (editor auto-fills mediaUrl on load) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 3s
- **Global effects:** text effect, transition, background effect
- **When to use:** Hooks (scene 1), action footage, energy moments, lifestyle. Video backgrounds are the most attention-grabbing — use for your most important scenes.
- **Copy tip:** 1–5 words per entry. Let the footage do the talking — text should complement, not compete. `"Push harder."` over `"Our app helps you push harder."`

---

## bg-gradient-linear

Rotating linear gradient background with centered text. Stylish, modern — the gradient slowly rotates during the scene for subtle visual interest. Uses brand colors.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Brand moments, thesis statements, chapter breaks. A more dynamic alternative to `bg-solid`. Max 1–2 per video.
- **Copy tip:** 5–15 words. Good for longer statements: `"Built for teams that ship."` / `"The future of video, today."`

---

## bg-gradient-radial

Breathing radial glow background with centered text. A pulsing, centered light effect that feels organic and warm. Great for emotional or reflective moments.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Emotional moments, brand reveals, reflective pauses. The breathing glow adds warmth without competing with text. Max 1 per video.
- **Copy tip:** 5–15 words. Works well for impactful statements: `"This changes everything."` / `"Your story, amplified."`

---

## bg-confetti

Falling colorful particles background with centered text. Celebratory, energetic — confetti rains down while text is displayed. Great for launches, milestones, and positive moments.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Celebrations, product launches, milestone announcements, positive energy. Max 1 per video — confetti loses impact when overused.
- **Copy tip:** Upbeat, celebratory tone: `"We did it!"` / `"Now available."` / `"Launch day."`

---

## bg-stars

Twinkling starfield background with centered text. A night-sky effect with gently twinkling stars. Creates a sense of wonder, ambition, and vastness.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Aspirational moments, big vision statements, space/tech themes, nighttime aesthetics. Max 1 per video.
- **Copy tip:** Ambitious, visionary tone: `"Reach further."` / `"Beyond limits."` / `"The sky is not the limit."`

---

## bg-particles

Soft bokeh circles floating in the background with centered text. Dreamy, ambient, gentle — soft, out-of-focus light circles drift across the scene.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Soft moments, beauty/lifestyle brands, premium feel, calm energy. A gentler alternative to `bg-stars`. Max 1 per video.
- **Copy tip:** Elegant, soft tone: `"Simply beautiful."` / `"Crafted with care."` / `"Feel the difference."`

---

## bg-geometric

Animated grid lines background with centered text. Clean, precise, technical — geometric lines and shapes form a subtle grid pattern that animates behind the text.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Tech products, developer tools, precision/engineering themes, SaaS. The grid aesthetic screams "technical" — use when the brand is techy. Max 1 per video.
- **Copy tip:** Precise, technical tone: `"Engineered to perform."` / `"Zero config."` / `"Built for developers."`

---

## bg-aurora

Flowing color bands background with centered text. Organic, colorful waves of light flow across the scene — like the northern lights. Premium, creative, attention-grabbing.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `texts` | string | yes | "Your message." | Comma-separated text entries (see format above) |
| `textColor` | color | no | "#ffffff" | Text color override |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Premium brands, creative agencies, design tools, artistic moments. The most visually striking animated background — use as a hero moment. Max 1 per video.
- **Copy tip:** Creative, premium tone: `"Create without limits."` / `"Design, reimagined."` / `"Pure artistry."`

---

## counter

Large animated number that counts up from zero to the target value. Perfect for statistics, metrics, milestones, and impact numbers.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | yes | 1000 | Target number to count up to |
| `label` | string | yes | "Total users" | Text below the number |
| `unit` | string | no | "" | Suffix: %, +, k, M |

- **Min duration:** 2s | **Preferred:** 3s | **durationWeight:** 1.3–1.5
- **Global effects:** transition only
- **When to use:** One genuinely impressive statistic. Max 1 per video. Place in Build or Climax act.
- **Copy tip:** Number should be impressive. Label 2–4 words. "10,000+ / Active users" / "99.9 / Uptime %"

---

## social-proof

Testimonial or review card with a quote, author name, and star rating. Animated card entrance with staggered elements.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `quote` | string | yes | "This product changed everything for us." | Testimonial text |
| `author` | string | yes | "Jane Smith" | Person's name |
| `role` | string | no | "CEO, Acme Inc." | Title/company |
| `rating` | number | no | 5 | Star rating 1–5 |

- **Min duration:** 2.5s | **Preferred:** 3.5s | **durationWeight:** 1.3–1.5
- **Global effects:** transition only
- **When to use:** Customer proof. Max 1 per video. Place in Build or Climax act.
- **Copy tip:** Quote should sound real (15–30 words). Use full names and real-sounding titles. "This transformed how our team ships products." — Alex Rivera, CTO at Meridian

---

## product-launch

Device mockup (phone or laptop) with animated feature badges orbiting around it, product name, tagline, and CTA button.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `productName` | string | yes | "YourApp" | Product title |
| `tagline` | string | no | "The future starts here." | Subtitle/description |
| `features` | string | no | "AI Powered,Real-time,Secure,Fast" | Comma-separated feature list (shown as badges) |
| `deviceType` | enum | no | "phone" | Device: `"phone"` or `"laptop"` |
| `screenMediaUrl` | media | no | "" | Image shown on device screen |
| `screenMediaKeyword` | string | no | "" | Pexels keyword for screen content |
| `ctaText` | string | no | "Try it free" | Call-to-action button text |

- **Min duration:** 3s | **Preferred:** 4s | **durationWeight:** 1.3–1.5
- **Global effects:** transition only
- **When to use:** App/product reveal. Great when user has screenshots. Max 1 per video. Place in Build act.
- **Copy tip:** Product name should be the brand name. Features 1-2 words each, max 4-5. CTA is an action: "Try it free" / "Get started"

---

## end-screen

Final call-to-action screen with logo, tagline, and website URL. Clean, centered layout for maximum brand impact.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ctaText` | string | yes | "Get started today." | Main call-to-action |
| `tagline` | string | no | "yourapp.com" | Subtitle, URL, or tagline |
| `logoUrl` | media | no | — | Brand logo image |

- **Min duration:** 2s | **Preferred:** 3s
- **Global effects:** transition only
- **When to use:** Always the last scene. Clean CTA + brand.
- **Copy tip:** Action verb + benefit. "Start free today." / "See it in action." / "Join 10K+ teams."

---

## stat-grid

Grid of 2–4 metric cards with animated values, labels, and details. Cards spring in staggered with subtle continuous float. Perfect for dashboards, fact panels, comparison statistics.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | no | "" | Section title above the grid |
| `stat1Label` | string | yes | "Users" | Card 1 label |
| `stat1Value` | string | yes | "10K+" | Card 1 value |
| `stat1Detail` | string | no | "" | Card 1 detail text |
| `stat2Label` | string | yes | "Revenue" | Card 2 label |
| `stat2Value` | string | yes | "$48K" | Card 2 value |
| `stat2Detail` | string | no | "" | Card 2 detail text |
| `stat3Label` | string | no | "" | Card 3 label (empty = hidden) |
| `stat3Value` | string | no | "" | Card 3 value |
| `stat3Detail` | string | no | "" | Card 3 detail text |
| `stat4Label` | string | no | "" | Card 4 label (empty = hidden) |
| `stat4Value` | string | no | "" | Card 4 value |
| `stat4Detail` | string | no | "" | Card 4 detail text |

- **Min duration:** 2.5s | **Preferred:** 3.5s | **durationWeight:** 1.3–1.5
- **Global effects:** transition only
- **When to use:** Multiple impressive stats to show at once. Place in Build or Climax act. Max 1 per video.
- **Copy tip:** Values should be short and punchy: "10K+", "$48K", "99.9%", "3s". Labels 1–3 words uppercase.

---

## feature-list

Staggered list of features, bullet points, or items with accent styling. Items slide in from left with spring physics. Three visual variants available.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | no | "" | Section title above the list |
| `items` | string | yes | "Feature one,Feature two,Feature three" | Comma-separated list (max 8) |
| `style_variant` | enum | no | "bordered" | Visual style: `"bordered"`, `"numbered"`, `"bullet"` |

- **Min duration:** 2s | **Preferred:** 3s | **durationWeight:** 1.0–1.3
- **Global effects:** transition only
- **When to use:** Feature reveals, step-by-step lists, key benefits. Place in Build act. Max 1 per video.
- **Copy tip:** Items should be 2–5 words each. "AI-powered search", "Real-time sync", "End-to-end encryption".

---

## text-stack

Multiple text lines appearing sequentially with staggered reveal. One line gets highlighted in accent color with larger, bolder text. Great for dramatic reveals and sequential statements.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `lines` | string | yes | "First point,Second point,Third point" | Comma-separated text lines (max 8) |
| `highlightIndex` | number | no | -1 | 0-based index to highlight (-1 = last line) |
| `alignment` | enum | no | "center" | Text alignment: `"center"` or `"left"` |

- **Min duration:** 2s | **Preferred:** 3s
- **Global effects:** transition only
- **When to use:** Multi-point messaging, dramatic reveals (question → answer), sequential statements. Place in Build or Hook.
- **Copy tip:** Build tension across lines. "They said it couldn't be done.,They were wrong.,Meet Flowstate." Last line = punchline.

---

## split-compare

Two-column side-by-side comparison with labels and media. Columns slide in from opposite sides. Perfect for before/after, A vs B, old vs new.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `leftLabel` | string | yes | "Before" | Left column label |
| `rightLabel` | string | yes | "After" | Right column label |
| `leftMediaUrl` | media | no | "" | Left side image/video URL |
| `leftMediaKeyword` | string | no | "" | Pexels keyword for left side |
| `rightMediaUrl` | media | no | "" | Right side image/video URL |
| `rightMediaKeyword` | string | no | "" | Pexels keyword for right side |
| `dividerStyle` | enum | no | "line" | Divider: `"line"`, `"vs"`, `"arrow"` |

- **Min duration:** 2.5s | **Preferred:** 3.5s | **durationWeight:** 1.3–1.5
- **Global effects:** transition only
- **When to use:** Comparisons, before/after transformations, competitive positioning. Place in Build act. Max 1 per video.
- **Copy tip:** Labels should contrast: "Before/After", "Old way/New way", "Them/Us", "Manual/Automated".

---

## Choosing Templates

| Content need | Best template | Why |
|-------------|---------------|-----|
| Visual hook / video footage | `bg-video` | Real video footage grabs attention |
| Photo background / editorial | `bg-photo` | Photo backgrounds feel premium |
| Brand statement / title card | `bg-solid` or `bg-gradient-linear` | Focus on typography, clean background |
| Emotional / reflective moment | `bg-gradient-radial` | Breathing glow adds warmth |
| Celebration / launch moment | `bg-confetti` | Celebratory energy |
| Aspirational / big vision | `bg-stars` | Sense of wonder and vastness |
| Soft / dreamy / premium | `bg-particles` | Gentle bokeh circles |
| Tech / developer / precision | `bg-geometric` | Grid aesthetic feels technical |
| Creative / artistic / premium | `bg-aurora` | Flowing color bands, visually striking |
| Impressive statistic | `counter` | Animated counting is eye-catching |
| Multiple stats at once | `stat-grid` | Dashboard-style metric cards |
| Customer quote / review | `social-proof` | Professional testimonial card |
| App/product showcase | `product-launch` | Device mockup with features |
| Feature list / benefits | `feature-list` | Staggered item reveal |
| Multi-line dramatic reveal | `text-stack` | Sequential text with highlight |
| Before/after comparison | `split-compare` | Side-by-side with media |
| Closing CTA | `end-screen` | Clean brand impact |
| Lifestyle / mood / context | `bg-photo` or `bg-video` | Stock media sets the tone |
| Transition between sections | `bg-solid` or `bg-gradient-linear` | Text-focused pause |
