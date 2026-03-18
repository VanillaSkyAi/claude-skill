export interface Track {
  id: string;
  name: string;
  mood: string[];
  duration: number;
  vibe: string;
  bestFor: string;
  tempoFeel: string;
  beatMarkers: number[];
}

const TRACKS: Track[] = [
  {
    id: "7995f8e2-cd04-4cd0-b498-6672c5b34529",
    name: "Shadow Countdown",
    mood: ["Epic", "Cinematic", "Thriller"],
    duration: 27.6,
    vibe: "Dark, suspenseful intro with rising tension — like a movie trailer reveal",
    bestFor: "Product launches, brand reveals, cinematic trailers",
    tempoFeel: "Slow build → rapid escalation",
    beatMarkers: [1.2, 4.7, 8.1, 16.6, 18.7, 20.4, 21.9, 24.9],
  },
  {
    id: "a5cf8cbd-9606-4246-8408-61bc7e5d2794",
    name: "HipHop Sequence",
    mood: ["Hiphop", "Beat"],
    duration: 27.4,
    vibe: "Urban, confident, swagger — bass-heavy with rhythmic pulse",
    bestFor: "Fitness, lifestyle, streetwear, social media ads",
    tempoFeel: "Steady groove, punchy",
    beatMarkers: [4.2, 7.6, 10.2, 12.7, 15.1, 17.4, 19.2, 22.8],
  },
  {
    id: "645b3256-5416-48cf-8f9d-39a2dbd9e167",
    name: "Momentum Theme",
    mood: ["Energetic", "Rhythmic", "Bold"],
    duration: 37.4,
    vibe: "Corporate-energetic — forward motion, achievement, progress",
    bestFor: "Showreels, startup pitches, SaaS demos, longer formats",
    tempoFeel: "Driving, upbeat",
    beatMarkers: [2, 5.6, 11.7, 14.6, 20, 22.7, 26.5, 30],
  },
  {
    id: "d899f250-3371-4e0e-a1b4-93bd868b07bc",
    name: "Shadows at the Gate",
    mood: ["Thriller", "Cinematic"],
    duration: 31.4,
    vibe: "Dark atmosphere, mystery, high stakes — noir thriller feel",
    bestFor: "Security products, fintech, dramatic brand stories",
    tempoFeel: "Atmospheric → explosive",
    beatMarkers: [0.2, 3.8, 7.3, 10, 18.2, 20.3, 24.1, 29.1],
  },
  {
    id: "8e83c405-08cb-45fd-b119-604ce81dfccd",
    name: "Pulse in the Dark",
    mood: ["Trailer", "Thriller"],
    duration: 25,
    vibe: "Fast-paced, urgent, time is running out",
    bestFor: "Social media ads, quick hooks, countdown-style videos",
    tempoFeel: "Rapid-fire, dense beats",
    beatMarkers: [3.7, 7.1, 9.9, 12.7, 15, 17.4, 19, 20.9],
  },
];

export function listTracks(mood?: string): Track[] {
  if (!mood) return TRACKS;
  const lower = mood.toLowerCase();
  return TRACKS.filter((t) =>
    t.mood.some((m) => m.toLowerCase().includes(lower)),
  );
}
