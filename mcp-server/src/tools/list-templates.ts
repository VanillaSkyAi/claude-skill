export interface TemplateVariable {
  name: string;
  type: string;
  required: boolean;
  default: unknown;
  description?: string;
}

export interface Template {
  id: string;
  label: string;
  category: string;
  description: string;
  tags: string[];
  variables: TemplateVariable[];
  minDuration: number;
  preferredDuration: number;
  usesGlobalTextEffect: boolean;
  usesGlobalBackgroundEffect: boolean;
  whenToUse: string;
  copyTip: string;
}

const TEMPLATES: Template[] = [
  {
    id: "bg-solid",
    label: "Solid Background",
    category: "background",
    description: "Pure flat background color with text. The simplest, cleanest scene — no gradients, no effects.",
    tags: ["solid", "clean", "minimal", "flat"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Your message here.", description: "Comma-separated text entries. Use | for per-entry effect: 'Hello|zoom-in,World|slam'" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color (leave empty for auto)" },
    ],
    minDuration: 1.5,
    preferredDuration: 2.5,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Brand statements, title cards, chapter breaks. When you want text with no distractions. Max 2 per video.",
    copyTip: "1-15 words per entry. Great for thesis statements or punchy hooks.",
  },
  {
    id: "bg-photo",
    label: "Photo Background",
    category: "background",
    description: "Full-bleed photo background with vignette overlay and text. Uses Ken Burns and zoom effects.",
    tags: ["photo", "image", "hero", "establishing"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Make an impact.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "mediaUrl", type: "media", required: false, default: "", description: "Photo URL for background" },
      { name: "mediaKeyword", type: "string", required: false, default: "", description: "Pexels search keyword (auto-fills mediaUrl)" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 1.5,
    preferredDuration: 3,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: true,
    whenToUse: "Lifestyle shots, mood setting, product-in-context, establishing shots. The most versatile template.",
    copyTip: "1-5 words per entry, power verbs. Let the photo do the talking.",
  },
  {
    id: "bg-video",
    label: "Video Background",
    category: "background",
    description: "Full-bleed video background with vignette overlay and text. Best for action footage and dynamic shots.",
    tags: ["video", "footage", "hero", "action"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Make an impact.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "mediaUrl", type: "media", required: false, default: "", description: "Video URL for background" },
      { name: "mediaKeyword", type: "string", required: false, default: "", description: "Pexels search keyword (auto-fills mediaUrl)" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 1.5,
    preferredDuration: 3,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: true,
    whenToUse: "Hooks (scene 1), action footage, energy moments, lifestyle. Most attention-grabbing template.",
    copyTip: "1-5 words per entry. Video sells the message — text should complement, not compete.",
  },
  {
    id: "bg-gradient-linear",
    label: "Linear Gradient",
    category: "background",
    description: "Animated linear gradient flowing between both brand colors. Rotating angle with beat-reactive scaling.",
    tags: ["gradient", "linear", "brand", "statement"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Bold ideas start here.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 1.5,
    preferredDuration: 2.5,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Brand statements, title cards, chapter breaks. More dynamic than bg-solid. Max 1-2 per video.",
    copyTip: "5-15 words. Good for longer statements: 'Built for teams that ship.'",
  },
  {
    id: "bg-glow",
    label: "Accent Glow",
    category: "background",
    description: "Animated radial accent glow on dark background. Breathing, drifting glow that pulses with the beat.",
    tags: ["glow", "radial", "atmospheric", "dramatic"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Feel the energy.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 1.5,
    preferredDuration: 2.5,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Emotional moments, brand reveals, reflective pauses. Atmospheric without being busy. Max 1 per video.",
    copyTip: "5-15 words. Impactful statements: 'This changes everything.'",
  },
  {
    id: "bg-confetti",
    label: "Confetti",
    category: "background",
    description: "Colorful confetti fireworks bursting across the frame. Uses canvas-confetti for realistic particles.",
    tags: ["confetti", "celebration", "party", "launch"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Celebrate.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 1.5,
    preferredDuration: 2.5,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Celebrations, product launches, milestone announcements. Max 1 per video — loses impact when overused.",
    copyTip: "Upbeat, celebratory: 'We did it!' / 'Now available.' / 'Launch day.'",
  },
  {
    id: "bg-emoji",
    label: "Emoji Burst",
    category: "background",
    description: "Fireworks-style emoji bursts with hearts, stars, unicorns, party poppers, and rockets.",
    tags: ["emoji", "fun", "celebration", "social"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Let's go!", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 1.5,
    preferredDuration: 2.5,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Fun social media moments, celebrations, engagement calls. Max 1 per video.",
    copyTip: "Short, energetic: 'Let's go!' / 'You're invited!' / 'Big news.'",
  },
  {
    id: "bg-particles",
    label: "Particles",
    category: "background",
    description: "Floating particle system with elegant, dreamy accent-colored particles drifting smoothly.",
    tags: ["particles", "bokeh", "dreamy", "premium"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Something beautiful.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 1.5,
    preferredDuration: 2.5,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Premium brands, calm energy, atmospheric scenes. Elegant alternative to plain backgrounds. Max 1 per video.",
    copyTip: "Elegant, soft: 'Simply beautiful.' / 'Crafted with care.'",
  },
  // ─── Chart templates ────────────────────────────────────────
  {
    id: "chart-counter",
    label: "Counter",
    category: "chart",
    description: "Large animated number counting up from zero to a target value. Perfect for statistics, milestones, and impact numbers.",
    tags: ["counter", "number", "statistic", "metric", "counting"],
    variables: [
      { name: "value", type: "number", required: true, default: 1000, description: "Target number to count up to" },
      { name: "label", type: "string", required: true, default: "Total users", description: "Text below the number" },
      { name: "prefix", type: "string", required: false, default: "", description: "Prefix: $, €, £" },
      { name: "unit", type: "string", required: false, default: "", description: "Suffix: %, +, k, M" },
    ],
    minDuration: 2,
    preferredDuration: 3,
    usesGlobalTextEffect: false,
    usesGlobalBackgroundEffect: false,
    whenToUse: "One genuinely impressive statistic. Place in Build or Climax act. Max 1 per video. The number should be impressive — don't use for small numbers.",
    copyTip: "Number should wow: 10000+ not 12. Label 2-4 words: 'Active users' / 'Revenue growth'.",
  },
  {
    id: "chart-bar",
    label: "Bar Chart",
    category: "chart",
    description: "Animated bars as visual background with text overlay. Bars are decorative — they reinforce the message visually while text carries the content.",
    tags: ["bar", "chart", "growth", "metrics", "visual"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Revenue up 300%.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "bars", type: "string", required: false, default: "30,55,45,80,65,95", description: "Comma-separated values 0-100 for bar heights. Decorative — visualize the trend." },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 2,
    preferredDuration: 3,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Growth stories, performance data, 'things going up' messages. Bars are visual decoration — the text overlay tells the story. Max 1 per video.",
    copyTip: "The text is the message, bars are the visual. 'Revenue up 300%.' / '10x faster.' — let bars show the trend.",
  },
  {
    id: "chart-line",
    label: "Line Chart",
    category: "chart",
    description: "Self-drawing SVG line as visual background with text overlay. The line + area fill are decorative, text carries the message.",
    tags: ["line", "chart", "trend", "growth", "graph"],
    variables: [
      { name: "texts", type: "string", required: true, default: "Growth that speaks.", description: "Comma-separated text entries with optional |effect per entry" },
      { name: "points", type: "string", required: false, default: "10,25,20,45,35,60,55,80,70,95", description: "Comma-separated Y values (0-100). Decorative trend line." },
      { name: "textColor", type: "color", required: false, default: "", description: "Override text color" },
    ],
    minDuration: 2,
    preferredDuration: 3,
    usesGlobalTextEffect: true,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Growth stories, upward trends, progress over time. Line draws itself cinematically while text delivers the message. Max 1 per video.",
    copyTip: "The text is the message, the line is the visual. 'Revenue up 300%.' / '10x growth.' Make data points trend UP.",
  },
  {
    id: "chart-progress-ring",
    label: "Progress Ring",
    category: "chart",
    description: "Circular progress indicator filling to a target percentage with a large number in the center.",
    tags: ["progress", "ring", "circle", "percentage", "donut"],
    variables: [
      { name: "value", type: "number", required: true, default: 75, description: "Percentage 0-100" },
      { name: "label", type: "string", required: true, default: "Complete", description: "Text below the ring" },
      { name: "unit", type: "string", required: false, default: "%", description: "Suffix after the number" },
    ],
    minDuration: 2,
    preferredDuration: 3,
    usesGlobalTextEffect: false,
    usesGlobalBackgroundEffect: false,
    whenToUse: "Completion rates, satisfaction scores, performance metrics. The circular fill is visually satisfying. Max 1 per video.",
    copyTip: "High percentages (75%+) feel positive. Label should explain what the number means.",
  },
];

export function listTemplates(category?: string): Template[] {
  if (!category) return TEMPLATES;
  const lower = category.toLowerCase();
  return TEMPLATES.filter((t) => t.category.toLowerCase() === lower);
}
