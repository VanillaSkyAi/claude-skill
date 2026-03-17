---
name: canvas-patterns
description: Canvas2D drawing patterns for VanillaSky dynamic animations
metadata:
  tags: canvas, drawing, shapes, text, gradients
---

# Canvas2D Drawing Patterns

All dynamic animations render to a 1080x1920 (9:16 portrait) canvas. You receive `ctx` (CanvasRenderingContext2D) and `context` ({ inputs, style, progress, beatIntensity, width, height }).

## FORBIDDEN Patterns

- **Never use requestAnimationFrame** — the canvas is rendered frame-by-frame, not in a loop
- **Never use external imports** — only the Canvas2D API is available
- **Never use setTimeout/setInterval** — animation is driven by `progress` (0 to 1)
- **Never leave the canvas without a background** — always fill the entire canvas first

## Background Drawing

Always start by filling the entire canvas. Use brandKit colors for consistency.

```javascript
const bg = style.brandKit?.bg || '#1a1a2e';
const accent = style.brandKit?.accent || '#e94560';

// Solid background
ctx.fillStyle = bg;
ctx.fillRect(0, 0, width, height);

// Vertical gradient (most common)
const grad = ctx.createLinearGradient(0, 0, 0, height);
grad.addColorStop(0, bg);
grad.addColorStop(1, accent + '22'); // accent at low opacity
ctx.fillStyle = grad;
ctx.fillRect(0, 0, width, height);

// Radial gradient (spotlight effect)
const radGrad = ctx.createRadialGradient(width/2, height*0.4, 0, width/2, height*0.4, width*0.8);
radGrad.addColorStop(0, accent + '44');
radGrad.addColorStop(1, bg);
ctx.fillStyle = radGrad;
ctx.fillRect(0, 0, width, height);
```

## Decorative Background Elements

Add subtle shapes behind content for visual depth. Keep them low-opacity so they don't compete with text.

```javascript
// Floating circles (decorative)
ctx.globalAlpha = 0.08;
ctx.fillStyle = accent;
ctx.beginPath();
ctx.arc(width * 0.8, height * 0.2, width * 0.3, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(width * 0.2, height * 0.7, width * 0.2, 0, Math.PI * 2);
ctx.fill();
ctx.globalAlpha = 1;

// Horizontal divider line
ctx.strokeStyle = accent + '66';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(width * 0.2, y);
ctx.lineTo(width * 0.8, y);
ctx.stroke();
```

## Text Rendering

Use relative sizes (percentage of width) for responsive sizing within the 1080px canvas.

```javascript
const font = style.font || 'Inter';

// Title — large, bold
const titleSize = width * 0.07; // ~76px on 1080w
ctx.font = `bold ${titleSize}px ${font}`;
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(text, width / 2, y);

// Subtitle — medium
const subSize = width * 0.045; // ~49px
ctx.font = `${subSize}px ${font}`;
ctx.fillStyle = '#ffffff99'; // semi-transparent white

// Body/label — small, uppercase
const labelSize = width * 0.035; // ~38px
ctx.font = `600 ${labelSize}px ${font}`;
ctx.fillStyle = '#ffffff77';
ctx.letterSpacing = '2px'; // Note: not all browsers support this
ctx.fillText(label.toUpperCase(), x, y);
```

**Font size hierarchy (always follow):**
| Role | Size | Weight | Opacity |
|------|------|--------|---------|
| Title | width * 0.07-0.09 | bold | 1.0 |
| Subtitle | width * 0.045-0.055 | 600 | 0.9 |
| Body | width * 0.035-0.04 | normal | 0.8 |
| Label | width * 0.028-0.035 | 600 | 0.5-0.6 |

## Auto-sizing Text to Fit

Always check text width and shrink to fit. Never let text overflow the canvas.

```javascript
let fontSize = width * 0.07;
ctx.font = `bold ${fontSize}px ${font}`;
const maxWidth = width * 0.85;
while (fontSize > 24 && ctx.measureText(text).width > maxWidth) {
  fontSize -= 2;
  ctx.font = `bold ${fontSize}px ${font}`;
}
```

## Word Wrapping

For longer text (descriptions, quotes), wrap manually:

```javascript
function wrapText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = words[0];
  for (let i = 1; i < words.length; i++) {
    const testLine = currentLine + ' ' + words[i];
    if (ctx.measureText(testLine).width > maxWidth) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);
  return lines;
}
```

## Text Shadows and Glow

```javascript
// Drop shadow for readability
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
ctx.shadowBlur = 20;
ctx.shadowOffsetY = 4;
ctx.fillText(text, x, y);
ctx.shadowBlur = 0;
ctx.shadowOffsetY = 0;

// Glow effect (accent color)
ctx.shadowColor = accent;
ctx.shadowBlur = 30;
ctx.fillStyle = accent;
ctx.fillText(text, x, y);
ctx.shadowBlur = 0;
```

## Rounded Rectangles

```javascript
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// Usage: card background
roundRect(ctx, x, y, cardW, cardH, 16);
ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
ctx.fill();
```

## Color with Opacity

Use hex+alpha for consistent opacity handling:

```javascript
// Hex + 2-char alpha suffix
const color50 = accent + '80'; // 50% opacity
const color20 = accent + '33'; // 20% opacity
const color10 = accent + '1A'; // 10% opacity

// Useful alpha values:
// FF=100%, E6=90%, CC=80%, B3=70%, 99=60%, 80=50%
// 66=40%, 4D=30%, 33=20%, 1A=10%, 0D=5%
```

## Icons / Checkmarks / Bullets

Use canvas paths for simple icons instead of relying on emoji or fonts:

```javascript
// Checkmark
function drawCheck(ctx, x, y, size, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.15;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x - size * 0.3, y);
  ctx.lineTo(x - size * 0.05, y + size * 0.25);
  ctx.lineTo(x + size * 0.35, y - size * 0.25);
  ctx.stroke();
}

// Circle bullet
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2);
ctx.fillStyle = accent;
ctx.fill();

// Star (5-point)
function drawStar(ctx, cx, cy, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    const method = i === 0 ? 'moveTo' : 'lineTo';
    ctx[method](cx + r * Math.cos(angle), cy + r * Math.sin(angle));
  }
  ctx.closePath();
  ctx.fill();
}
```
