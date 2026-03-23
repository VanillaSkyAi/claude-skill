import { SUPABASE_URL, SUPABASE_ANON_KEY } from "../config.js";

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
}

export async function listTemplates(category?: string): Promise<Template[]> {
  const url = new URL(`${SUPABASE_URL}/functions/v1/list-templates`);
  if (category) url.searchParams.set("category", category);

  const res = await fetch(url.toString(), {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch templates: ${res.status}`);
  }

  return (await res.json()) as Template[];
}
