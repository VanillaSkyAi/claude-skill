# VanillaSky Skill for Claude Code

Create cinematic beat-synced trailer videos from your terminal. Describe what you want, and Claude composes a professional video — scene by scene, synced to music, with transitions, effects, and overlays. No video editing experience needed.

[VanillaSky](https://vanillasky.app) is a cinematic trailer video creator. This skill lets you use it directly from Claude Code.

## Installation

Copy this folder to your Claude Code skills directory:

```bash
cp -r public-skill ~/.claude/skills/vanillasky
```

Or clone and copy:

```bash
git clone https://github.com/vanillasky/claude-skill.git
cp -r claude-skill ~/.claude/skills/vanillasky
```

## Usage

Once installed, just ask Claude to create a video:

```
> Create a product launch video for my app called Flowstate — it's a focus timer for developers
```

```
> Make a cinematic trailer for a coffee brand. Dark, moody, premium feel.
```

```
> Build a startup pitch video. We're an AI code review tool, 5K users, 99.9% uptime.
```

## How It Works

1. You describe what you want
2. Claude asks a few questions about your brand, audience, and key message
3. Claude proposes a scene plan — you see exactly what each scene will show and why
4. You confirm or adjust
5. Claude builds the video config, saves it, and gives you a link
6. Click the link — VanillaSky opens with your video loaded, ready to preview and export

## What You Get

- **6-10 scenes** synced to beat markers in the music
- **Stock footage** auto-selected from Pexels based on keywords
- **Built-in animations** for stats, features, comparisons, testimonials
- **Built-in coded animations** (React-based) when stock footage can't tell the story
- **Transitions, overlays, and text effects** composed for cinematic impact
- A **shareable link** that opens in VanillaSky's browser-based editor

## Requirements

- [Claude Code](https://claude.ai/code) CLI
- Node.js (for saving configs via API)
- No API keys needed — the skill uses VanillaSky's public endpoints

## License

MIT
