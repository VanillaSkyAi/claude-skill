---
name: effects-and-style
description: Text effects, background effects, transitions, fonts, and brand kit reference
metadata:
  tags: effects, text, background, transitions, fonts, brand, style
---

# Effects & Style Reference

## Text Effects

10 built-in effects. Applied to templates with `usesGlobalTextEffect: true` (all bg-* templates and showcase-* templates). Set via `style.defaultTextEffect` or per-scene `textEffect`.

| Effect | Character | Best for |
|--------|-----------|----------|
| `fade-in` | Smooth opacity ramp | Calm, elegant, dramatic — safe default |
| `slide-up` | Springs up from below | Clean, modern — good all-rounder |
| `slide-down` | Springs down from above | Reveals, top-of-screen text |
| `zoom-in` | Scales up from small | Focus, emphasis |
| `zoom-through` | Scales down from huge (2.5x→1) | Dramatic, cinematic — "zooming past camera" |
| `bounce-drop` | Drops from above with bounce | Playful, energetic |
| `slam` | Slams in from 4x scale with bounce | Maximum impact, aggressive |
| `cut-in` | Instant appear, no animation | Hard cuts, fast pacing |
| `typewriter` | Per-character reveal | Tech, narrative, building tension |
| `word-stagger` | Per-word cascade (slide-up) | Lists, statements, rhythmic text |

### Mood → Effect Mapping

| Mood | Recommended effects |
|------|-------------------|
| Calm / elegant | `fade-in`, `slide-up`, `typewriter` |
| Energetic / bold | `slam`, `bounce-drop`, `zoom-through` |
| Tech / edgy | `cut-in`, `typewriter`, `zoom-through` |
| Dramatic / cinematic | `fade-in`, `zoom-through`, `word-stagger` |
| Clean / corporate | `slide-up`, `fade-in`, `cut-in` |

**Rules:**
- Use max 2-3 distinct text effects per video (set one as `defaultTextEffect`, override sparingly)
- `fade-in` is the safest default — works with any mood
- `slam` and `bounce-drop` need energetic music to work

---

## Background Effects

9 built-in effects. Applied to templates with `usesGlobalBackgroundEffect: true` (bg-photo and bg-video only). Other templates handle their own backgrounds.

Set via `style.defaultBackgroundEffect` or per-scene `backgroundEffect`.

**IMPORTANT: Use EXACTLY these effect names — no directional variants.** `ken-burns` and `drift` auto-alternate direction by scene index (right → left → up → down). Do NOT use `ken-burns-right`, `ken-burns-left`, `drift-left`, etc. — those don't exist and will silently fail to static.

| Effect | Description | Best for |
|--------|-------------|----------|
| `static` | No motion | Text-focused scenes |
| `slow-zoom-in` | Gradually zooms to 1.12x | Default — works everywhere |
| `slow-zoom-out` | Starts at 1.12x, zooms back | Alternate with zoom-in |
| `ken-burns` | Zoom + pan (direction auto-alternates per scene) | Photos, landscapes, cinematic |
| `drift` | Gentle pan (direction auto-alternates per scene) | Calm, panoramic |
| `pulse` | Beat-reactive scale | Energetic, rhythmic scenes |
| `breathe` | Sinusoidal gentle float | Ambient, calm |
| `slow-tilt` | Subtle Dutch angle drift | Tension, unease |
| `camera-shake` | Rapid handheld-style shake | High energy, action |

**Rules:**
- Pick one primary effect and stick with it (e.g., `slow-zoom-in` for most scenes)
- Deviate only for contrast (e.g., `pulse` for one high-energy climax scene)
- `ken-burns` works best on images/photos — adds life to stills
- `camera-shake` is intense — use sparingly (max 1 scene)
- `pulse` is beat-synced — only use with energetic tracks

**Storytelling intent — pick the movement that matches the scene's purpose:**
- **Zoom in** → focusing, revealing, building tension
- **Zoom out** → contextualizing, pulling back, conclusion
- **Ken-burns** → nostalgia, stillness-to-life, documentary feel
- **Drift** → passage of time, calm journey, contemplation
- **Pulse / beat-zoom** → energy peak, climax, excitement
- **Slow-tilt** → unease, tension, something's off
- **Static** → letting the content speak, text-heavy moments

---

## Transitions

Set via `style.defaultTransition` or per-scene `transition`.

| Transition | When to use |
|------------|-------------|
| `crossfade` | Default — between most scenes (~70% of video) |
| `dip-to-black` | Dramatic pause, structural break, before/after counter |
| `flash` | High-energy beat drops |
| `zoom-in` | Moving into detail (wide → close) |
| `zoom-out` | Revealing bigger picture |
| `cut` | Hard cut, no transition — fast pacing, aggressive edits |
| `slide-left` | Sequential progression (step 1 → step 2) |
| `slide-right` | Sequential progression (reverse direction) |

**Rules:**
- Use 2-3 types max per video
- `crossfade` is the workhorse — use it for most scene transitions
- `dip-to-black` works well before counter or gradient-text scenes (creates a dramatic pause)
- `flash` should coincide with a high-energy beat marker

---

## Fonts

34 fonts available. Set via `style.font` (use the `value` string, not the label).

### Sans-Serif (16)
| Label | Value | Character |
|-------|-------|-----------|
| Helvetica | `Helvetica, Arial, sans-serif` | System, neutral |
| Inter | `'Inter', sans-serif` | Clean, modern — best default |
| Raleway | `'Raleway', sans-serif` | Elegant, thin weights |
| Poppins | `'Poppins', sans-serif` | Geometric, friendly |
| Montserrat | `'Montserrat', sans-serif` | Versatile, geometric |
| Open Sans | `'Open Sans', sans-serif` | Neutral, readable |
| Lato | `'Lato', sans-serif` | Warm, humanist |
| Roboto | `'Roboto', sans-serif` | Google-style, modern |
| Roboto Condensed | `'Roboto Condensed', sans-serif` | Compact, fits more text |
| Nunito | `'Nunito', sans-serif` | Rounded, friendly |
| Work Sans | `'Work Sans', sans-serif` | Clean, professional |
| DM Sans | `'DM Sans', sans-serif` | Geometric, sharp |
| Outfit | `'Outfit', sans-serif` | Modern, geometric |
| Space Grotesk | `'Space Grotesk', sans-serif` | Tech, monospace feel |
| Manrope | `'Manrope', sans-serif` | Modern, variable |
| Plus Jakarta Sans | `'Plus Jakarta Sans', sans-serif` | Contemporary, clean |

### Display / Bold (8)
| Label | Value | Character |
|-------|-------|-----------|
| Oswald | `'Oswald', sans-serif` | Condensed, strong |
| Bebas Neue | `'Bebas Neue', sans-serif` | All-caps impact |
| Anton | `'Anton', sans-serif` | Ultra bold, impact |
| Archivo Black | `'Archivo Black', sans-serif` | Heavy, editorial |
| Teko | `'Teko', sans-serif` | Condensed, sporty |
| Passion One | `'Passion One', sans-serif` | Rounded bold |
| Black Ops One | `'Black Ops One', sans-serif` | Military, stencil |
| Bungee | `'Bungee', sans-serif` | Retro, blocky |

### Serif (6)
| Label | Value | Character |
|-------|-------|-----------|
| Playfair Display | `'Playfair Display', serif` | Elegant, editorial |
| Cinzel | `'Cinzel', serif` | Classical, inscriptional |
| Merriweather | `'Merriweather', serif` | Readable, warm |
| Lora | `'Lora', serif` | Calligraphic, balanced |
| Cormorant Garamond | `'Cormorant Garamond', serif` | Light, refined |
| DM Serif Display | `'DM Serif Display', serif` | Modern serif, bold |

### Script / Handwritten (4)
| Label | Value | Character |
|-------|-------|-----------|
| Pacifico | `'Pacifico', cursive` | Casual script |
| Dancing Script | `'Dancing Script', cursive` | Elegant script |
| Caveat | `'Caveat', cursive` | Handwritten, casual |
| Permanent Marker | `'Permanent Marker', cursive` | Hand-drawn, bold |

### Mood → Font Mapping

| Mood | Recommended fonts |
|------|-------------------|
| Tech / startup | Inter, Space Grotesk, DM Sans, Manrope |
| Bold / energetic | Bebas Neue, Anton, Oswald, Archivo Black |
| Luxury / premium | Playfair Display, Cinzel, Cormorant Garamond |
| Friendly / casual | Poppins, Nunito, Caveat |
| Corporate / clean | Inter, Work Sans, Montserrat, Lato |
| Cinematic / dramatic | Bebas Neue, Cinzel, DM Serif Display |
| Social / trendy | Plus Jakarta Sans, Outfit, Poppins |

---

## Brand Kit

Optional. Set via `style.brandKit`. All templates read these values with fallbacks.

```json
{
  "bg": "#0a0a1a",
  "accent": "#00e5a0",
  "logoDataUrl": "data:image/png;base64,..."
}
```

| Field | Purpose | Default fallback |
|-------|---------|-----------------|
| `bg` | Background color for all templates | `#0a0a1a` (dark navy) |
| `accent` | Accent color (highlights, glows, gradients, badges) | `#00e5a0` (mint green) |
| `logoDataUrl` | Base64-encoded logo for end-screen | — |

**Tips:**
- Dark backgrounds (`#0a0a1a` to `#1a1a2e`) work best for cinematic feel
- Accent should contrast strongly against bg
- If the user provides hex colors, use them directly
- If no brand kit, the defaults look professional

**Light background warning:** Card-based templates (`social-testimonial`, `social-tweet`, `social-notification`, `social-review-stack`, `social-chat`, `social-whatsapp`, `social-google-search`, all `app-*`, all `showcase-*`) render white/light cards. If your brandKit bg is light (e.g., `#fdf2f8`), the card will be nearly invisible against the background and text inside may be unreadable. **Always use a dark brandKit bg (`#0a0a0a` to `#1a1a2e`) when using card-based templates.** If the brand requires a light palette, only use background templates (`bg-*`) and chart templates — not card-based ones.
