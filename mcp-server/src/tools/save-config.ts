import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface SaveConfigResult {
  id: string;
  url: string;
}

export async function saveConfig(config: unknown): Promise<SaveConfigResult> {
  const resp = await fetch(
    `${SUPABASE_URL}/functions/v1/save-config`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ config }),
    },
  );

  if (!resp.ok) {
    const err = await resp.json();
    throw new Error(err.error || `Save failed: ${resp.status}`);
  }

  const { id } = (await resp.json()) as { id: string };
  return {
    id,
    url: `https://vanillasky.ai/create?config=${id}`,
  };
}
