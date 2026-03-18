---
name: custom-animations
description: Creative patterns, anti-patterns, and code examples for AI-generated custom animation scenes
metadata:
  tags: custom, animations, reactCode, creative, motion-design
---

# Custom Animation Guide

When a scene needs something beyond the 6 built-in templates — a custom visualization, unique layout, or creative motion — write `reactCode` for that scene. This guide ensures the output looks professional, not like a slideshow.

## When to Use Custom Animations

- The scene concept doesn't map to any built-in template
- You need unique data visualization (charts, timelines, dashboards)
- The scene requires multi-element choreography (lists with strikethrough, assembling UI)
- You want a distinctive visual that sets the video apart

**Default to built-in templates when they fit.** Custom code is for scenes that genuinely need it.

## The Slideshow Test (Anti-Patterns)

Before writing any custom scene, check that your idea does NOT fall into these traps:

| Anti-Pattern | Why It's Bad | Do This Instead |
|-------------|-------------|-----------------|
| Centered text on solid background | Looks like PowerPoint | Add layered backgrounds, gradients, glow, texture |
| Same transition every scene | Monotonous, robotic | Vary: scale-in, slide-up, spring-bounce, morph |
| Linear motion (no easing) | Feels mechanical | Always use `utils.spring()` or eased `interpolate()` |
| Everything fades in at once | No hierarchy, no rhythm | Stagger elements: title → detail → accent, 0.05-0.1s apart |
| Static screens with no motion | Dead air, viewer leaves | Add subtle continuous motion: floating, breathing, gradient shift |
| Tiny content in huge frame | Wasted space, feels broken | Root div MUST be `width: props.width, height: props.height` |
| Text without visual support | Boring talking head energy | Pair text with decorative elements, shapes, icons, glow |
| Same font size for everything | No hierarchy | Hero text 80-96px, body 28-36px, labels 16-20px (at scale) |

## Creative Principles

### 1. Layered Composition

Every scene should have at least 2-3 visual layers:

```
Background layer  — gradient, glow, texture, slow-moving shapes
Content layer     — the main message, data, or visual
Accent layer      — decorative lines, particles, subtle overlays
```

Don't just plop text on a flat color. Add depth.

### 2. Choreographed Entrance

Elements should enter the scene in a deliberate sequence, not all at once:

```js
// Good: staggered entrance with different timing
var titleP = utils.interpolate(p, [0.05, 0.2], [0, 1], {extrapolateLeft:'clamp',extrapolateRight:'clamp'});
var subtitleP = utils.interpolate(p, [0.15, 0.35], [0, 1], {extrapolateLeft:'clamp',extrapolateRight:'clamp'});
var accentP = utils.interpolate(p, [0.25, 0.45], [0, 1], {extrapolateLeft:'clamp',extrapolateRight:'clamp'});

// Bad: everything appears at once
var allP = utils.interpolate(p, [0, 0.2], [0, 1], ...);
```

### 3. Spring Physics as Default

Never use raw interpolation for visible motion. Always wrap in spring:

```js
// Good
var sp = utils.spring(raw, utils.SPRING_SNAPPY);

// Bad — linear, robotic
var sp = raw;
```

**Spring preset guide:**
| Preset | Feel | Use For |
|--------|------|---------|
| `SPRING_SMOOTH` | Refined, elegant | Text reveals, subtle fades, decorative elements |
| `SPRING_SNAPPY` | Quick, responsive | UI elements, cards, badges, buttons |
| `SPRING_BOUNCY` | Playful, energetic | Hero entrances, counters, product reveals |

### 4. Semantic Timing

Map animation duration to purpose:

| Category | Progress Window | Use For |
|----------|----------------|---------|
| Micro | 0.05 duration | Opacity flickers, cursor blinks, tiny shifts |
| Snappy | 0.1-0.15 duration | Element entrances, position changes |
| Standard | 0.15-0.25 duration | Scene transitions, major reveals |
| Dramatic | 0.25-0.4 duration | Hero moments, cinematic builds |

### 5. Continuous Motion

Scenes should never feel "done" — even after all elements have entered, keep subtle motion going:

```js
// Gradient that shifts throughout the scene
var gradOff = utils.interpolate(p, [0, 1], [-10, 10]);

// Floating sine wave on decorative elements
var floatY = Math.sin(p * Math.PI * 2) * 5 * s;

// Beat-reactive pulse on the focal element
var beatScale = 1 + props.beatIntensity * 0.02;

// Slowly rotating glow
var glowAngle = p * 180;
```

### 6. Graceful Exit

Elements should exit before the scene ends (around 85-92% progress):

```js
var exitOp = utils.interpolate(p, [0.85, 1], [1, 0], {extrapolateLeft:'clamp',extrapolateRight:'clamp'});
// Apply to all visible elements: opacity: someValue * exitOp
```

## Animation Patterns Library

### Pattern: Staggered List with Accent

Items appear one by one with slide + spring, each with a colored left border:

```js
var items = ['Feature one', 'Feature two', 'Feature three'];
items.map(function(item, i) {
  var itemP = utils.stagger(p, i, items.length, 0.08, 0.15);
  var sp = utils.spring(itemP, utils.SPRING_SNAPPY);
  return utils.h('div', { key: i, style: {
    opacity: sp * exitOp,
    transform: 'translateX(' + utils.interpolate(sp, [0, 1], [-30 * s, 0]) + 'px)',
    fontSize: 32 * s, fontWeight: 500, color: '#ffffff',
    borderLeft: (3 * s) + 'px solid ' + accent,
    paddingLeft: 20 * s, marginBottom: 28 * s
  }}, item);
})
```

### Pattern: Typewriter in Prompt Box

Fake input field with typewriter text and blinking cursor:

```js
var text = 'Create a product launch video';
var charCount = utils.getTypewriterLength(text, p, 0.05, 3);
var cursor = utils.getTypewriterCursor(p);
var displayed = text.substring(0, charCount);

utils.h('div', { style: { backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20 * s,
  padding: (40 * s) + 'px ' + (50 * s) + 'px' } },
  utils.h('div', { style: { fontSize: 16 * s, color: 'rgba(255,255,255,0.3)',
    textTransform: 'uppercase', letterSpacing: 1 * s, marginBottom: 16 * s } }, 'Describe your video'),
  utils.h('div', { style: { fontSize: 48 * s, fontWeight: 700, color: '#fff',
    display: 'flex', alignItems: 'center' } },
    displayed,
    utils.h('span', { style: { width: 3 * s, height: 48 * s,
      backgroundColor: accent, marginLeft: 4 * s, opacity: cursor ? 1 : 0 } })
  )
)
```

### Pattern: Assembling Timeline

Blocks that spring in from below, representing scenes/steps:

```js
var blocks = [
  { label: 'Hook', color: accent },
  { label: 'Story', color: '#06b6d4' },
  { label: 'Demo', color: '#f59e0b' },
  { label: 'CTA', color: '#10b981' }
];
utils.h('div', { style: { display: 'flex', gap: 8 * s, alignItems: 'flex-end' } },
  blocks.map(function(b, i) {
    var bp = utils.spring(utils.stagger(p, i, blocks.length, 0.06, 0.2), utils.SPRING_BOUNCY);
    return utils.h('div', { key: i, style: {
      opacity: bp, width: 140 * s, height: 80 * s,
      transform: 'translateY(' + utils.interpolate(bp, [0, 1], [60 * s, 0]) + 'px)',
      backgroundColor: b.color + '22', border: '1.5px solid ' + b.color + '44',
      borderRadius: 12 * s, display: 'flex', justifyContent: 'center', alignItems: 'center',
      fontSize: 15 * s, fontWeight: 600, color: b.color
    }}, b.label);
  })
)
```

### Pattern: Strikethrough List

Pain points that get crossed out with a red line:

```js
var items = ['Complex editing', 'Hours of work', 'Expensive tools'];
items.map(function(item, i) {
  var itemP = utils.stagger(p, i, items.length, 0.08, 0.15);
  var sp = utils.spring(itemP, utils.SPRING_SNAPPY);
  var strikeW = utils.interpolate(sp, [0.4, 1], [0, 100], {extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return utils.h('div', { key: i, style: { position: 'relative', fontSize: 36 * s,
    color: 'rgba(255,255,255,0.6)', marginBottom: 28 * s, opacity: sp * exitOp,
    transform: 'translateX(' + utils.interpolate(sp, [0, 1], [-40 * s, 0]) + 'px)' } },
    item,
    utils.h('div', { style: { position: 'absolute', left: 0, top: '50%',
      width: strikeW + '%', height: 3 * s, backgroundColor: '#ef4444',
      transform: 'translateY(-50%)' } })
  );
})
```

### Pattern: Rotating Conic Glow

Cinematic background effect — rotating double-arm glow:

```js
utils.h('div', { style: { position: 'absolute', width: 800 * s, height: 800 * s,
  borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
  background: 'conic-gradient(from ' + (p * 360) + 'deg, transparent, ' + accent + ', transparent, ' + accent + ', transparent)',
  opacity: 0.12 } })
```

### Pattern: Audio Waveform Visualizer

Fake waveform bars that react to beat:

```js
utils.h('div', { style: { display: 'flex', gap: 3 * s, alignItems: 'center' } },
  Array.from({length: 24}, function(_, i) {
    var barH = (Math.sin(i * 0.7 + p * 10) * 0.5 + 0.5) * 28 * s + 6 * s;
    barH *= (1 + props.beatIntensity * 0.5);
    return utils.h('div', { key: i, style: { width: 3 * s, height: barH,
      backgroundColor: accent, borderRadius: 2, opacity: 0.6 } });
  })
)
```

### Pattern: Metric Dashboard

Multiple stat cards in a grid:

```js
var metrics = [
  { label: 'Users', value: '12,847', change: '+18%' },
  { label: 'Revenue', value: '$48.2K', change: '+24%' },
  { label: 'Conversion', value: '3.2%', change: '+0.4%' }
];
utils.h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 16 * s, justifyContent: 'center', maxWidth: 700 * s } },
  metrics.map(function(m, i) {
    var mp = utils.spring(utils.stagger(p, i, metrics.length, 0.06, 0.15), utils.SPRING_SNAPPY);
    return utils.h('div', { key: i, style: { opacity: mp * exitOp,
      transform: 'scale(' + utils.interpolate(mp, [0, 1], [0.85, 1]) + ')',
      backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16 * s, padding: (24 * s) + 'px ' + (32 * s) + 'px', minWidth: 200 * s } },
      utils.h('div', { style: { fontSize: 14 * s, color: 'rgba(255,255,255,0.4)', marginBottom: 8 * s } }, m.label),
      utils.h('div', { style: { fontSize: 36 * s, fontWeight: 700, color: '#fff' } }, m.value),
      utils.h('div', { style: { fontSize: 14 * s, color: '#10b981', marginTop: 4 * s } }, m.change)
    );
  })
)
```

## Code Template (Start Every Custom Scene From This)

```js
var s = Math.min(props.width, props.height) / 1080;
var bg = props.style.brandKit?.bg || '#0a0a1a';
var accent = props.style.brandKit?.accent || '#00e5a0';
var p = props.progress;
var exitOp = utils.interpolate(p, [0.85, 1], [1, 0], {extrapolateLeft:'clamp',extrapolateRight:'clamp'});

return utils.h('div', { style: {
  width: props.width, height: props.height,
  backgroundColor: bg, position: 'relative', overflow: 'hidden',
  fontFamily: props.style.font,
  display: 'flex', flexDirection: 'column',
  justifyContent: 'center', alignItems: 'center'
}},
  // Background layer — ALWAYS add some visual depth
  utils.h('div', { style: { position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 50% 40%, ' + accent + '0d 0%, transparent 65%)' } }),

  // Content goes here...

);
```

## Quality Checklist

Run these checks mentally before finalizing any custom animation:

| Test | Question | Fix If Fails |
|------|----------|-------------|
| **Slideshow test** | Does it look like PowerPoint? | Add layers, stagger, spring physics, continuous motion |
| **Squint test** | Can you see the hierarchy when squinting? | Increase size contrast between hero/body/label text |
| **Mute test** | Does the story follow without reading text? | Add visual elements that carry meaning (icons, shapes, color) |
| **Timing test** | Does motion feel natural, not robotic? | Replace interpolate with spring, add stagger delays |
| **Fill test** | Does content fill the frame, not float tiny in center? | Use `props.width`/`props.height`, scale with `s` factor |
| **Exit test** | Do elements exit before the hard cut? | Add `exitOp` at 85-92% progress |

## Type Scale Reference

Use these sizes consistently (before applying scale factor `s`):

| Role | Size | Weight | Use For |
|------|------|--------|---------|
| Hero | 80-96 | 800 | Main headline, big number, product name |
| Heading | 48-64 | 700-800 | Section titles, key statements |
| Subheading | 32-40 | 500-600 | Supporting text, descriptions |
| Body | 24-28 | 400-500 | Paragraphs, quotes, explanations |
| Label | 14-18 | 500-600 | Tags, categories, small annotations, uppercase |
| Stat | 100-140 | 800 | Big counter numbers, key metrics |

Always multiply by `s` for responsive sizing: `fontSize: 48 * s`.
