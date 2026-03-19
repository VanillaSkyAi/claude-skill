#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { saveConfig } from "./tools/save-config.js";
import { searchPexels } from "./tools/search-pexels.js";
import { listTracks } from "./tools/list-tracks.js";
import { scrapeUrl } from "./tools/scrape-url.js";

const server = new McpServer({
  name: "vanillasky",
  version: "0.1.0",
});

// ─── save_config ──────────────────────────────────────────────

server.tool(
  "save_config",
  "Save a VanillaSky VideoConfig and get a shareable editor link. Returns { id, url } where url opens the video in VanillaSky's editor, ready to preview and export.",
  {
    config: z
      .object({})
      .passthrough()
      .describe("The complete VideoConfig JSON object"),
  },
  async ({ config }) => {
    try {
      const result = await saveConfig(config);
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error saving config: ${err instanceof Error ? err.message : String(err)}`,
          },
        ],
        isError: true,
      };
    }
  },
);

// ─── search_pexels ────────────────────────────────────────────

server.tool(
  "search_pexels",
  "Search Pexels for stock videos or photos. Returns matching results with URLs. Usually you don't need this — setting mediaKeyword in the config is enough. Use this only to verify keywords return good results.",
  {
    query: z.string().describe("Search keywords (2-4 descriptive words)"),
    type: z
      .enum(["video", "photo"])
      .optional()
      .default("video")
      .describe("Media type to search for"),
    per_page: z
      .number()
      .optional()
      .default(5)
      .describe("Number of results (1-15)"),
    orientation: z
      .enum(["portrait", "landscape"])
      .optional()
      .describe("Filter by orientation"),
  },
  async ({ query, type, per_page, orientation }) => {
    try {
      const result = await searchPexels({
        query,
        type: type || "video",
        per_page: per_page || 5,
        orientation,
      });
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error searching Pexels: ${err instanceof Error ? err.message : String(err)}`,
          },
        ],
        isError: true,
      };
    }
  },
);

// ─── list_tracks ──────────────────────────────────────────────

server.tool(
  "list_tracks",
  "List available music tracks for VanillaSky videos. Returns track metadata including mood, duration, vibe, beat markers, and best-for tags. Optionally filter by mood.",
  {
    mood: z
      .string()
      .optional()
      .describe(
        "Filter by mood tag (e.g. 'cinematic', 'hiphop', 'energetic')",
      ),
  },
  async ({ mood }) => {
    const tracks = listTracks(mood);
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(tracks, null, 2),
        },
      ],
    };
  },
);

// ─── scrape_url ───────────────────────────────────────────────

server.tool(
  "scrape_url",
  "Scrape a website to extract brand colors, headlines, description, images, and favicon. Use this when the user mentions a website or product URL — it provides brand info, copy inspiration, and product screenshots for the video.",
  {
    url: z.string().describe("The website URL to scrape (must start with http:// or https://)"),
  },
  async ({ url }) => {
    try {
      const result = await scrapeUrl(url);
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (err) {
      return {
        content: [
          {
            type: "text" as const,
            text: `Error scraping URL: ${err instanceof Error ? err.message : String(err)}`,
          },
        ],
        isError: true,
      };
    }
  },
);

// ─── Start server ─────────────────────────────────────────────

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("Failed to start VanillaSky MCP server:", err);
  process.exit(1);
});
