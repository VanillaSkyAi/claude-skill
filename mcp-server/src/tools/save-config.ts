import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

export interface SaveConfigResult {
  id: string;
  url: string;
  warnings?: string[];
}

export async function saveConfig(config: unknown): Promise<SaveConfigResult> {
  const resp = await fetch(
    `${SUPABASE_URL}/functions/v1/save-config`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ config }),
    },
  );

  if (!resp.ok) {
    let message = `Save failed: ${resp.status}`;
    try {
      const err = await resp.json();
      if (err.error) message = err.error;
    } catch {}
    throw new Error(message);
  }

  const { id, warnings } = (await resp.json()) as { id: string; warnings?: string[] };
  return {
    id,
    url: `https://vanillasky.ai/create?config=${id}`,
    ...(warnings && warnings.length > 0 && { warnings }),
  };
}
