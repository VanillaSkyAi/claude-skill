---
name: templates
description: All 6 scene templates — variable schemas, duration hints, usage guidelines
metadata:
  tags: templates, scenes, variables, schema
---

# Scene Templates

10 built-in templates. Each scene in a video references one template by `templateId` and passes `variables`.

## Quick Reference

| ID | Label | Category | Duration | Global Effects |
|----|-------|----------|----------|----------------|
| `fullscreen-media` | Fullscreen Media | media | 1.5–3s | text, transition, bg |
| `gradient-text` | Gradient Text | typography | 1.5–2.5s | text, transition, bg |
| `counter` | Counter | data-viz | 2–3s | transition only |
| `social-proof` | Social Proof | social-proof | 2.5–3.5s | transition only |
| `product-launch` | Product Launch | product | 3–4s | transition only |
| `end-screen` | End Screen | utility | 2–3s | transition only |
| `stat-grid` | Stat Grid | data-viz | 2.5–3.5s | transition only |
| `feature-list` | Feature List | typography | 2–3s | transition only |
| `text-stack` | Text Stack | typography | 2–3s | transition only |
| `split-compare` | Split Compare | media | 2.5–3.5s | transition only |

---

## fullscreen-media

Full-screen background video or image with centered text overlay. Best for establishing shots, mood setting, hero moments, and simple messaging. The most versatile scene type.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headline` | string | yes | "Your headline here." | Main text overlay |
| `subtitle` | string | no | "" | Secondary text below headline |
| `mediaUrl` | media | no | — | Video or image URL for background |
| `mediaKeyword` | string | no | "" | Pexels search keyword (editor auto-fills mediaUrl on load) |

- **Min duration:** 1.5s | **Preferred:** 3s
- **Global effects:** text effect, transition, background effect
- **When to use:** Default for most scenes. Real footage grabs attention. Use for hooks, lifestyle shots, product-in-context, action footage.
- **Copy tip:** 1–5 words, power verbs, end with period. "Get moving." / "Ship faster."

---

## gradient-text

Animated gradient background with large centered text. Great for title cards, chapter markers, key statements, and transitions between sections. Uses brand colors.

**Variables:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headline` | string | yes | "Your message." | Main text |
| `subtitle` | string | no | "" | Secondary text |

- **Min duration:** 1.5s | **Preferred:** 2.5s
- **Global effects:** text effect, transition, background effect
- **When to use:** Brand moments — logo reveal, thesis statements, chapter breaks. Max 1-2 per video.
- **Copy tip:** Can handle 5–15 words. Good for thesis statements. "Every cup tells a story." / "Built for teams that ship."

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
| Visual hook / action footage | `fullscreen-media` | Real footage grabs attention |
| Brand statement / title card | `gradient-text` | Focus on typography |
| Impressive statistic | `counter` | Animated counting is eye-catching |
| Multiple stats at once | `stat-grid` | Dashboard-style metric cards |
| Customer quote / review | `social-proof` | Professional testimonial card |
| App/product showcase | `product-launch` | Device mockup with features |
| Feature list / benefits | `feature-list` | Staggered item reveal |
| Multi-line dramatic reveal | `text-stack` | Sequential text with highlight |
| Before/after comparison | `split-compare` | Side-by-side with media |
| Closing CTA | `end-screen` | Clean brand impact |
| Lifestyle / mood / context | `fullscreen-media` | Stock video sets the tone |
| Transition between sections | `gradient-text` | Text-focused pause |
