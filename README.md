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

### With MCP server (optional, enhanced experience)

The MCP server gives Claude native tool access for saving configs and searching stock footage. Install it alongside the skill:

```bash
npm install -g @vanillasky/mcp-server
```

Add to your Claude Code settings (`.claude/settings.json`):

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

The skill works without MCP too — it falls back to direct API calls.

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

## How It Works

1. You describe what you want
2. Claude asks about your brand (colors, fonts, logo, media) and key message
3. Claude picks a video type (ad, trailer, showreel, social) and music track
4. Claude proposes a scene plan — you see exactly what each scene shows and why
5. You confirm or adjust
6. Claude builds the video config, saves it, and gives you a link
7. Click the link — VanillaSky opens with your video loaded, ready to preview and export

## What You Get

- **6–10 scenes** from 6 professional React templates, synced to beat markers in the music
- **Stock footage** auto-selected from Pexels based on descriptive keywords
- **Specialized templates** for statistics, testimonials, product showcases, and more
- **Brand colors, fonts, and logo** applied across all scenes
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
