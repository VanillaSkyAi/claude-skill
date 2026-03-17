---
name: animation-timing
description: Easing functions, staggered reveals, and beat-synced effects for VanillaSky Canvas2D animations
metadata:
  tags: easing, timing, stagger, beat, spring, animation
---

# Animation Timing

All animation is driven by `context.progress` (0 to 1 over the scene duration). Never use timers, RAF, or CSS animations.

## Easing Functions

**RULE: Never use linear motion.** Always apply an easing curve. Linear motion looks robotic and cheap.

Include these easing functions at the top of your animation code:

```javascript
// Standard easings — pick based on context
function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
function easeInOutCubic(t) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2; }
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }
function easeOutBack(t) { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); }
function easeOutElastic(t) {
  if (t === 0 || t === 1) return t;
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI / 3)) + 1;
}
```

**When to use which:**

| Easing | Use for | Character |
|--------|---------|-----------|
| `easeOutCubic` | Most reveals, counters, scaling | Smooth deceleration |
| `easeInOutCubic` | Transitions, progress bars | Gentle start and stop |
| `easeOutQuart` | Fast reveals, energetic content | Snappy deceleration |
| `easeOutBack` | Playful elements, cards popping in | Slight overshoot |
| `easeOutElastic` | Attention-grabbing numbers, badges | Bouncy settle |

## Spring Animation

For organic motion with natural settle:

```javascript
function spring(t, damping, stiffness) {
  damping = damping || 15;
  stiffness = stiffness || 150;
  const omega = Math.sqrt(stiffness);
  const zeta = damping / (2 * omega);
  if (zeta < 1) {
    const omegaD = omega * Math.sqrt(1 - zeta * zeta);
    return 1 - Math.exp(-zeta * omega * t) * (Math.cos(omegaD * t) + (zeta * omega / omegaD) * Math.sin(omegaD * t));
  }
  return 1 - (1 + omega * t) * Math.exp(-omega * t);
}

// Usage: spring(progress * 3, 12, 180) — multiply progress to control speed
```

## Staggered Reveals

Items appearing one by one is THE most important animation pattern. It makes any list, chart, or multi-element scene look professional.

**Pattern: Stagger delay per item**

```javascript
const items = ['Fast', 'Easy', 'Free'];
const staggerDelay = 0.12; // seconds between items appearing (in progress units)

items.forEach((item, i) => {
  // Each item starts its animation staggerDelay * i later
  const itemProgress = Math.max(0, Math.min(1, (progress - 0.15 - i * staggerDelay) * 5));
  if (itemProgress <= 0) return; // not visible yet

  const easedProgress = easeOutCubic(itemProgress);

  // Fade + slide up
  ctx.globalAlpha = easedProgress;
  const slideY = (1 - easedProgress) * 30; // slides up 30px
  ctx.fillText(item, x, y + slideY);
  ctx.globalAlpha = 1;
});
```

**Key stagger timing values:**
- 3-4 items: `staggerDelay = 0.12`
- 5-7 items: `staggerDelay = 0.08`
- 8+ items: `staggerDelay = 0.05`

**RULE: Start stagger after initial delay (0.1-0.2 progress).** Don't start revealing items at frame 0 — let the background and title establish first.

## Reveal Patterns

Use opacity for reveals, not position jumps. Combine with subtle movement for polish.

```javascript
// Fade in (simplest)
const alpha = Math.min(1, progress * 4);
ctx.globalAlpha = alpha;

// Fade + scale pop
const scaleProgress = easeOutBack(Math.min(1, progress * 3));
ctx.save();
ctx.translate(x, y);
ctx.scale(scaleProgress, scaleProgress);
ctx.fillText(text, 0, 0);
ctx.restore();

// Fade + slide from left
const slideX = (1 - easeOutCubic(Math.min(1, progress * 3))) * -50;
ctx.globalAlpha = Math.min(1, progress * 4);
ctx.fillText(text, x + slideX, y);

// Clip reveal (text appears as if being unmasked)
ctx.save();
const revealWidth = easeOutCubic(Math.min(1, progress * 3)) * textWidth;
ctx.beginPath();
ctx.rect(x - textWidth/2, y - fontSize, revealWidth, fontSize * 2);
ctx.clip();
ctx.fillText(text, x, y);
ctx.restore();
```

## Beat-Synced Effects

`context.beatIntensity` goes from 1 (on beat) to 0 (between beats), decaying over ~150ms. Use it for:

```javascript
const beat = context.beatIntensity;

// Scale pulse (subtle — use for backgrounds, cards)
const beatScale = 1 + beat * 0.03;
ctx.save();
ctx.translate(width/2, height/2);
ctx.scale(beatScale, beatScale);
ctx.translate(-width/2, -height/2);
// ... draw content ...
ctx.restore();

// Glow pulse (accent color glow on beat)
ctx.shadowColor = accent;
ctx.shadowBlur = beat * 30;
ctx.fillText(text, x, y);
ctx.shadowBlur = 0;

// Brightness flash (white overlay flash on beat)
if (beat > 0.1) {
  ctx.fillStyle = `rgba(255, 255, 255, ${beat * 0.08})`;
  ctx.fillRect(0, 0, width, height);
}

// Shake (use sparingly — high energy only)
const shakeX = (Math.random() - 0.5) * beat * 6;
const shakeY = (Math.random() - 0.5) * beat * 6;
ctx.translate(shakeX, shakeY);
```

**RULES for beat effects:**
- Beat effects should be SUBTLE (0.02-0.05 scale, 0-30px blur)
- Never make beat effects the primary animation — they accent the main reveal
- Don't use shake unless the video mood is "energetic" or "hiphop"

## Progress Phases

Structure complex animations into phases:

```javascript
const p = progress;

// Phase 1: Background + title (0.0 - 0.3)
if (p < 0.3) {
  const phaseProgress = p / 0.3;
  // animate title entrance
}

// Phase 2: Items reveal (0.15 - 0.7) — overlaps with phase 1
const itemsProgress = Math.max(0, (p - 0.15) / 0.55);

// Phase 3: Final accent (0.7 - 1.0)
if (p > 0.7) {
  const finalProgress = (p - 0.7) / 0.3;
  // animate highlight, badge, or final flourish
}
```

**RULE: Overlap phases slightly.** Don't wait for one phase to fully complete before starting the next. Overlapping creates flow.

## Exit Animations

If the scene needs a clean exit (optional — most scenes transition via crossfade):

```javascript
// Fade out at the end
const exitStart = 0.85;
const exitAlpha = progress > exitStart ? 1 - (progress - exitStart) / (1 - exitStart) : 1;
ctx.globalAlpha = exitAlpha;
```
