---
name: composition-rules
description: Narrative structure, template mix, pacing, copy writing, and Pexels keyword strategy
metadata:
  tags: composition, narrative, pacing, copy, keywords, mix
---

# Composition Rules

## Narrative Arc

Every video follows a 4-act structure, regardless of length:

| Act | Scenes | Purpose | Typical templates | Energy |
|-----|--------|---------|-------------------|--------|
| Hook | 1–2 | Grab attention | fullscreen-media | High |
| Build | 2–3 | Establish context | fullscreen-media, gradient-text, product-launch | Rising |
| Climax | 1–2 | Peak moment | counter, social-proof, fullscreen-media | Peak |
| CTA | 1–2 | Call to action | fullscreen-media, end-screen | Resolving |

## Template Mix (Non-Negotiable)

- **At least 50% `fullscreen-media`** — real footage makes videos feel professional
- **Max 1–2 `gradient-text`** per video — branded moments only
- **Max 1 `counter`** per video — only for genuinely impressive statistics
- **Max 1 `social-proof`** per video — one powerful testimonial
- **Max 1 `product-launch`** per video — one product showcase moment
- **Always end with `end-screen`** — clean CTA and brand closure
- **Never start with `gradient-text`, `counter`, or `social-proof`** — scene 1 must be `fullscreen-media`
- **Never use the same template 3× in a row** — alternate for visual variety

**Typical mixes:**
| Scenes | Mix |
|--------|-----|
| 5 | 3 fullscreen-media + 1 gradient-text + end-screen |
| 7 | 4 fullscreen-media + 1 gradient-text + 1 counter + end-screen |
| 8 | 4 fullscreen-media + 1 gradient-text + 1 counter + 1 social-proof + end-screen |
| 10 | 5 fullscreen-media + 1 gradient-text + 1 counter + 1 product-launch + 1 social-proof + end-screen |

## Pexels Keyword Strategy

Write descriptive, visual keywords (2–4 words) for `mediaKeyword`. Think cinematically.

**Good keywords:** `"aerial city night"`, `"hands typing laptop"`, `"runner mountain trail"`, `"coffee shop ambiance"`, `"team celebrating success"`, `"close up smartphone"`, `"drone ocean waves"`, `"woman working desk"`

**Bad keywords:** `"business"`, `"technology"`, `"success"`, `"happy"` — too vague, returns generic footage

**Tips:**
- Include a subject: who/what is in the shot
- Include context: where/how
- Think about camera angle: "close up", "aerial", "drone", "wide shot"
- For vertical video: prefer close-ups and people over landscapes

## Copy Best Practices

### Headlines

- **fullscreen-media:** 1–5 words. Power verbs, active voice, end with period.
  - Good: "Get moving." / "Ship faster." / "Built different."
  - Bad: "Our amazing new product helps you" — too long, too weak

- **gradient-text:** 5–15 words. Thesis statements, brand messages.
  - Good: "Every cup tells a story." / "Built for teams that ship."
  - Bad: "Welcome to our brand video" — generic

- **counter:** Number should be impressive. Label 2–4 words.
  - Good: `value: 50000, label: "Active users", unit: "+"`
  - Bad: `value: 12, label: "Number of features"` — not impressive enough

- **social-proof:** Quote 15–30 words. Sound authentic, not generic.
  - Good: "This transformed how our team ships products. We cut deployment time from hours to minutes."
  - Bad: "Great product, love it!" — too generic

- **product-launch:** Product name + punchy tagline. Features 1–2 words each.
  - Good: `productName: "Flowstate", tagline: "Focus, amplified.", features: "Deep Focus,Smart Timer,Team Sync,Analytics"`
  - Bad: `features: "A really good feature that helps you focus"` — too long for badges

- **end-screen:** Action verb + benefit.
  - Good: "Start free today." / "See it in action." / "Join 10K+ teams."
  - Bad: "Thank you for watching" — wasted CTA opportunity

### Hook Formulas

Use these patterns for scene 1 headlines or gradient-text statements:

| Formula | Example |
|---------|---------|
| "The average X loses Y every Z." | "The average team loses 5 hours every week." |
| "What if you could [benefit]?" | "What if you could ship 10× faster?" |
| "Stop [pain point]." | "Stop losing customers." |
| "[Number] [noun] do this differently." | "10,000 teams do this differently." |
| "Meet [product name]." | "Meet Flowstate." |
| "[Provocative statement]." | "Email is broken." |
| "There's a better way." | — |
| "Built for [audience]." | "Built for developers who ship." |

### CTA Formulas

For end-screen `ctaText`:

| Formula | Example |
|---------|---------|
| "[Action] free today." | "Start free today." |
| "[Action] in [time]." | "Launch in minutes." |
| "Join [social proof]." | "Join 10K+ teams." |
| "See it in action." | — |
| "[Product] — [value prop]." | "Flowstate — focus, amplified." |
| "Try [product] free." | "Try Flowstate free." |

## Pacing

- **Beat distribution:** Each scene gets 1–2 beats. Give `counter`, `social-proof`, and `product-launch` at least 2 beats (set `durationWeight: 1.3–1.5`).
- **Breathing room:** Don't cram 10 scenes into 8 beats. 6–8 scenes for an 8-beat track is ideal.
- **Energy matching:** High-energy beats → `slam`/`flash`/`zoom-through`. Calm moments → `fade-in`/`crossfade`.
- **Accelerate toward climax:** Scenes get shorter (1 beat each) as energy builds toward the peak.
- **End with space:** Last 2 scenes should breathe — don't rush the CTA.

## Scene Plan Format

Always present the plan as a table before building the config:

| # | Template | Key variables | Why this template | Copy / Content |
|---|----------|--------------|-------------------|----------------|
| 1 | fullscreen-media | keyword: "fitness workout gym" | Visual hook — real footage grabs attention | "Get moving." |
| 2 | fullscreen-media | keyword: "runner sunrise trail" | Action footage sells the lifestyle | "Push harder." |
| 3 | gradient-text | — | Brand statement — needs clean typography | "FitPulse. Your workout, amplified." |
| 4 | counter | value: 10000, unit: "+" | Impressive scale metric | label: "Active users" |
| 5 | fullscreen-media | keyword: "smartwatch close up" | Tech angle — shows the product in use | "Track everything." |
| 6 | social-proof | author: "Sarah Chen" | Trust signal from real user | quote: "Best fitness app I've ever used." |
| 7 | fullscreen-media | keyword: "group fitness class" | Community energy | "Join thousands." |
| 8 | end-screen | — | CTA + brand | "Start free today." / fitpulse.app |

Be transparent about why each template was chosen. If you're choosing counter over another fullscreen-media, explain what makes the number impressive enough to warrant it.
