---
name: templates
description: All 6 scene templates — variable schemas, duration hints, usage guidelines
metadata:
  tags: templates, scenes, variables, schema
---

# Scene Templates

6 built-in templates. Each scene in a video references one template by `templateId` and passes `variables`.

## Quick Reference

| ID | Label | Category | Duration | Global Effects |
|----|-------|----------|----------|----------------|
| `fullscreen-media` | Fullscreen Media | media | 1.5–3s | text, transition, bg |
| `gradient-text` | Gradient Text | typography | 1.5–2.5s | text, transition, bg |
| `counter` | Counter | data-viz | 2–3s | transition only |
| `social-proof` | Social Proof | social-proof | 2.5–3.5s | transition only |
| `product-launch` | Product Launch | product | 3–4s | transition only |
| `end-screen` | End Screen | utility | 2–3s | transition only |

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

## Choosing Templates

| Content need | Best template | Why |
|-------------|---------------|-----|
| Visual hook / action footage | `fullscreen-media` | Real footage grabs attention |
| Brand statement / title card | `gradient-text` | Focus on typography |
| Impressive statistic | `counter` | Animated counting is eye-catching |
| Customer quote / review | `social-proof` | Professional testimonial card |
| App/product showcase | `product-launch` | Device mockup with features |
| Closing CTA | `end-screen` | Clean brand impact |
| Lifestyle / mood / context | `fullscreen-media` | Stock video sets the tone |
| Transition between sections | `gradient-text` | Text-focused pause |
