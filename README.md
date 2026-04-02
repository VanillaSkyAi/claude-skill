# VanillaSky Skill for Claude Code

Create cinematic beat-synced videos from your terminal. Describe what you want, and Claude composes a professional video — scene by scene, synced to music, with transitions, effects, and brand colors. No video editing experience needed.

[VanillaSky](https://vanillasky.ai) is a cinematic video creator. This skill lets you use it directly from Claude Code.

## Installation

### 1. Install the skill

```bash
git clone https://github.com/vanillaskyai/claude-skill.git ~/.claude/skills/vanillasky
```

To update later:

```bash
cd ~/.claude/skills/vanillasky && git pull
```

### 2. Add the MCP server

The MCP server gives Claude native tool access — discover templates, browse music, scrape websites for brand research, and save configs.

```bash
claude mcp add vanillasky -s user -- npx -y @vanillaskyai/mcp-server
```

No API keys needed — the MCP server handles all communication with VanillaSky's public endpoints.

### 3. Allow MCP tools (optional)

To skip permission prompts when creating videos, allow the VanillaSky tools in your settings:

```bash
claude settings add permissions.allow "mcp__vanillasky__list_templates"
claude settings add permissions.allow "mcp__vanillasky__list_tracks"
claude settings add permissions.allow "mcp__vanillasky__save_config"
claude settings add permissions.allow "mcp__vanillasky__scrape_url"
claude settings add permissions.allow "mcp__vanillasky__upload_media"
```

Or add them manually to `~/.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "mcp__vanillasky__list_templates",
      "mcp__vanillasky__list_tracks",
      "mcp__vanillasky__save_config",
      "mcp__vanillasky__scrape_url",
      "mcp__vanillasky__upload_media"
    ]
  }
}
```

### 4. Restart Claude Code

Start a new Claude Code session to pick up the MCP server. Existing sessions won't load it automatically.

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

Drop a URL and Claude will scrape it for brand colors, copy, and screenshots:

```
> Make a launch video for https://linear.app — keep their brand style
```

Share your own photos or screenshots — Claude uploads them and includes them in the video:

```
> Create a thank-you video for our company dinner — here are some photos from the evening
```

## How It Works

1. You describe what you want
2. Claude scrapes your website (if provided) to extract brand colors, headlines, images
3. If you share photos or videos, Claude uploads them to cloud storage for use in the video
4. Claude discovers available templates and picks the best ones for each scene
5. Claude picks a music track that matches the mood
6. Claude proposes a scene plan — you see exactly what each scene shows and why
7. You confirm or adjust
8. Claude builds the video config, saves it, and gives you a link
9. Click the link — VanillaSky opens with your video loaded, ready to preview and export

## MCP Tools

When the MCP server is installed, Claude has access to 5 tools:

### `list_templates`

Discover available scene templates with full metadata. **Claude calls this first** before composing any video — it returns the live list of templates with their variables, duration hints, usage guidance, and copy tips.

```
Input:  { category: "background" }  // optional filter
Output: [
  {
    id: "photo",
    label: "Photo Background",
    category: "background",
    description: "Full-bleed photo background with vignette overlay and text.",
    tags: ["photo", "image", "hero", "establishing"],
    position: ["hook", "body"],
    types: ["promo", "informational", "product"],
    variables: [
      { name: "texts", type: "string", required: true, description: "Comma-separated text entries" },
      { name: "mediaKeyword", type: "string", required: false, description: "Pexels search keyword" }
    ],
    minDuration: 1.5,
    preferredDuration: 3,
    whenToUse: "Lifestyle shots, mood setting, establishing shots.",
    copyTip: "1-5 words per entry, power verbs."
  },
  ...
]
```

This keeps Claude in sync with the latest templates — no hardcoded IDs, no stale docs.

### `list_tracks`

Browse available music tracks with duration, description, mood_tags, and beat count.

```
Input:  {}  // no parameters needed
Output: [
  {
    id: "7995f8e2-...",
    name: "Shadow Countdown",
    duration: 27.6,
    description: "Dark, suspenseful intro with rising tension",
    mood_tags: { energy: "high", mood: ["dramatic", "dark"], movement: "building" },
    beatCount: 55
  },
  ...
]
```

### `scrape_url`

Scrape a website to extract brand info. Returns brand colors, headlines, description, product images, and favicon — so Claude can auto-fill the brand kit and find copy inspiration.

```
Input:  { url: "https://example.com" }
Output: {
  title: "Example — The best product",
  description: "A short description from meta tags",
  headlines: ["Build faster", "Ship with confidence"],
  brandColors: { primary: "#3b82f6", accent: "#10b981" },
  ogImage: "https://example.com/og.png",
  images: [{ src: "...", alt: "..." }],
  favicon: "https://example.com/favicon.png"
}
```

### `upload_media`

Upload a local image or video file to VanillaSky's cloud storage. Returns a public URL you can use directly in VideoConfig `mediaUrl` fields. This is how users include their own photos, screenshots, or video clips in videos.

```
Input:  { filePath: "/Users/you/Downloads/product-screenshot.png" }
Output: {
  publicUrl: "https://...supabase.co/storage/v1/object/public/user-media/a1b2c3d4.png",
  fileName: "a1b2c3d4.png",
  mimeType: "image/png",
  sizeBytes: 245120
}
```

Supported formats: jpg, png, webp, gif, bmp, mp4, webm, mov. Max 20MB per file.

### `save_config`

Save the final VideoConfig and get a shareable link. The link opens VanillaSky's editor with the video fully loaded — ready to preview, customize, and export as MP4.

```
Input:  { config: { /* VideoConfig JSON */ } }
Output: { id: "a1b2c3d4", url: "https://vanillasky.ai/create?config=a1b2c3d4" }
```

## What You Get

- **Beat-synced scenes** from animated templates, timed to music
- **Animated backgrounds** — solid, gradients, photo/video, confetti, emoji, particles, glow effects
- **Your own photos and videos** uploaded to cloud storage and embedded in scenes
- **Stock footage** auto-selected from Pexels based on descriptive keywords
- **Sequential text transitions** within scenes — multiple text moments on one background
- **Brand colors, fonts, and effects** extracted from your website or set manually
- **Transitions, text effects, and background animations** for cinematic impact
- A **shareable link** that opens in VanillaSky's browser-based editor

## Templates

Templates are organized by category. Claude discovers the current list via the `list_templates` MCP tool.

| Category | Examples |
|----------|----------|
| **Brand Reveal** (7) | Globe, Glitch Matrix, Cinematic Flash, Spotlight, Countdown, Text Slam |
| **Background** (8) | Solid, Photo, Video, Gradient, Glow, Confetti, Emoji, Particles |
| **Chart** (5) | Counter, Bar, Line, Progress Ring, Pie |
| **Showcase** (4) | Phone Mockup, Triple Phone, Tablet, Tablet Slideshow |
| **Social** (8) | Tweet, Chat, WhatsApp, Google Search, Notification, Review Stack, Testimonial, Milestone |
| **App** (12) | Grid, Banking, Chat List, E-commerce, Fitness, Lock Screen, Music Player, Weather, and more |

44 templates and growing. Claude discovers the full list dynamically via `list_templates`.

## Requirements

- [Claude Code](https://claude.ai/code) CLI
- Node.js 18+ (for the MCP server)
- No API keys needed — the MCP server uses VanillaSky's public endpoints

## License

MIT
