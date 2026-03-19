# VanillaSky Skill for Claude Code

Create cinematic beat-synced videos from your terminal. Describe what you want, and Claude composes a professional video — scene by scene, synced to music, with transitions, effects, and brand colors. No video editing experience needed.

[VanillaSky](https://vanillasky.ai) is a cinematic video creator. This skill lets you use it directly from Claude Code.

## Installation

### Skill only (recommended)

Copy this folder to your Claude Code skills directory:

```bash
cp -r public-skill ~/.claude/skills/vanillasky
```

Or clone and copy:

```bash
git clone https://github.com/vanillasky/claude-skill.git
cp -r claude-skill ~/.claude/skills/vanillasky
```

### With MCP server (enhanced experience)

The MCP server gives Claude native tool access — scrape websites for brand research, search stock footage, save configs, and browse the music catalog. All through clean tool calls instead of bash commands.

```bash
npm install -g @vanillasky/mcp-server
```

Add to your Claude Code settings (`~/.claude/settings.json`):

```json
{
  "mcpServers": {
    "vanillasky": {
      "command": "npx",
      "args": ["@vanillasky/mcp-server"]
    }
  }
}
```

The skill works without MCP too — it falls back to direct API calls via bash.

## Usage

Once installed, just ask Claude to create a video:

```
> Create a product launch video for my app called Flowstate — it's a focus timer for developers
```

```
> Make a cinematic trailer for a coffee brand. Dark, moody, premium feel.
```

```
> Build a 15-second TikTok ad for our AI code review tool. Bold and fast.
```

```
> Create a showreel for our design agency — clean, modern, portfolio style.
```

Drop a URL and Claude will scrape it for brand colors, copy, and screenshots:

```
> Make a launch video for https://linear.app — keep their brand style
```

## How It Works

1. You describe what you want
2. Claude scrapes your website (if provided) to extract brand colors, headlines, images
3. Claude picks a video type (ad, trailer, showreel, social) and music track
4. Claude proposes a scene plan — you see exactly what each scene shows and why
5. You confirm or adjust
6. Claude builds the video config, saves it, and gives you a link
7. Click the link — VanillaSky opens with your video loaded, ready to preview and export

## MCP Tools

When the MCP server is installed, Claude has access to these tools:

### `scrape_url`

Scrape a website to extract brand info for the video. Returns brand colors, headlines, description, product images, OG image, and favicon.

```
Input:  { url: "https://example.com" }
Output: {
  title: "Example — The best product",
  description: "A short description from meta tags",
  headlines: ["Build faster", "Ship with confidence", ...],
  bodyText: "First 2000 chars of page content...",
  ogImage: "https://example.com/og.png",
  images: [{ src: "...", alt: "...", width: 800, height: 600 }],
  brandColors: { primary: "#3b82f6", accent: "#10b981" },
  favicon: "https://example.com/favicon.png"
}
```

Use this when the user mentions a URL, product name, or brand. Claude will proactively try to scrape relevant websites to auto-fill brand colors, copy, and screenshots.

### `save_config`

Save a VideoConfig and get a shareable editor link.

```
Input:  { config: { /* VideoConfig JSON */ } }
Output: { id: "a1b2c3d4", url: "https://vanillasky.ai/create?config=a1b2c3d4" }
```

### `list_tracks`

List available music tracks with mood, duration, beat markers, and best-for tags. Optionally filter by mood.

```
Input:  { mood: "cinematic" }  // optional
Output: [
  {
    id: "7995f8e2-...",
    name: "Shadow Countdown",
    mood: ["Epic", "Cinematic", "Thriller"],
    duration: 27.6,
    vibe: "Dark, suspenseful intro with rising tension",
    bestFor: "Product launches, brand reveals, cinematic trailers",
    beatMarkers: [1.2, 4.7, 8.1, 16.6, 18.7, 20.4, 21.9, 24.9]
  },
  ...
]
```

## What You Get

- **6–10 scenes** from 6 professional React templates, synced to beat markers in the music
- **Stock footage** auto-selected from Pexels based on descriptive keywords
- **Specialized templates** for statistics, testimonials, product showcases, and more
- **Brand colors, fonts, and logo** extracted from your website or set manually
- **Transitions, text effects, and background animations** composed for cinematic impact
- A **shareable link** that opens in VanillaSky's browser-based editor

## Templates

| Template | What it does |
|----------|-------------|
| Fullscreen Media | Background video/image with text overlay — the workhorse |
| Gradient Text | Animated gradient background with large text — brand moments |
| Counter | Animated counting number — statistics and metrics |
| Social Proof | Testimonial card with stars — customer quotes |
| Product Launch | Device mockup with feature badges — app showcases |
| End Screen | Logo + CTA — closing brand impact |

## Requirements

- [Claude Code](https://claude.ai/code) CLI
- Node.js (for saving configs via API, unless using MCP)
- No API keys needed — the skill uses VanillaSky's public endpoints

## License

MIT
