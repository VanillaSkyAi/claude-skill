#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { saveConfig } from "./tools/save-config.js";
import { listTracks } from "./tools/list-tracks.js";
import { listTemplates } from "./tools/list-templates.js";
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

// ─── list_tracks ──────────────────────────────────────────────

server.tool(
  "list_tracks",
  "List available music tracks for VanillaSky videos. Returns track metadata including duration, video types, description, scene slots, and beat markers.",
  {},
  async () => {
    const tracks = await listTracks();
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

// ─── list_templates ───────────────────────────────────────

server.tool(
  "list_templates",
  "List available scene templates for VanillaSky videos. Returns template metadata including variables, duration hints, usage guidance, and copy tips. Optionally filter by category. Call this BEFORE composing scenes to get the current template list — never hardcode template IDs.",
  {
    category: z
      .string()
      .optional()
      .describe(
        "Filter by category (e.g. 'background'). Omit to get all templates.",
      ),
  },
  async ({ category }) => {
    const templates = listTemplates(category);
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify(templates, null, 2),
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
